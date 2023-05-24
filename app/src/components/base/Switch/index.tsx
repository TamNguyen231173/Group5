import { useTheme } from '@themes';
import React, { useCallback, useEffect, useMemo, useRef } from 'react';
import {
    PanGestureHandler,
    PanGestureHandlerGestureEvent,
    State,
    TapGestureHandler,
    TapGestureHandlerStateChangeEvent,
} from 'react-native-gesture-handler';
import Animated, {
    interpolate,
    interpolateColor,
    runOnJS,
    useAnimatedGestureHandler,
    useAnimatedStyle,
    useSharedValue,
    withSpring,
} from 'react-native-reanimated';
import { clamp, snapPoint } from 'react-native-redash';
import { isString } from '../utils';
import styles from './styles';
import { SwitchProps } from './types';

const DEFAULT_TRACK_WIDTH = 50;
const DEFAULT_THUMB_WIDTH = 24;

export const Switch: React.FC<SwitchProps> = (props) => {
    const { colors } = useTheme();

    const {
        trackColor = { active: 'primary', inActive: '#ececec' },
        thumbColor = 'white',
        value,
        onValueChange,
        trackWidth = DEFAULT_TRACK_WIDTH,
        thumbWidth = DEFAULT_THUMB_WIDTH,
        disabled,
    } = props;

    const trackThumbWidth = useMemo(() => trackWidth - thumbWidth - 4, [trackWidth, thumbWidth]);

    const translateX = useSharedValue(0);

    useEffect(() => {
        translateX.value = withSpring(value ? trackThumbWidth : 0, {
            overshootClamping: true,
        });
    }, [trackThumbWidth, translateX, value]);

    const trackBgColor = useMemo(() => {
        if (disabled) {
            return {
                active: 'rgba(143, 155, 179, 0.16)',
                inActive: 'rgba(143, 155, 179, 0.16)',
            };
        }
        if (isString(trackColor)) {
            return {
                active: colors.trackColor || trackColor,
                inActive: colors.trackColor || trackColor,
            };
        }
        return {
            active: colors[trackColor.active] || trackColor.active,
            inActive: colors[trackColor.inActive] || trackColor.inActive,
        };
    }, [colors, disabled, trackColor]);

    const circleColor = useMemo(() => {
        if (disabled) {
            return {
                active: 'rgba(143, 155, 179, 0.32)',
                inActive: 'rgba(143, 155, 179, 0.32)',
            };
        }
        if (isString(thumbColor)) {
            return {
                active: colors[thumbColor] || thumbColor,
                inActive: colors[thumbColor] || thumbColor,
            };
        }
        return {
            active: colors[thumbColor.active] || thumbColor.active,
            inActive: colors[thumbColor.inActive] || thumbColor.inActive,
        };
    }, [colors, disabled, thumbColor]);

    const animSwitchContainer = useAnimatedStyle(() => {
        return {
            backgroundColor: interpolateColor(
                translateX.value,
                [0, trackThumbWidth],
                [trackBgColor.inActive, trackBgColor.active],
            ),
        };
    });

    const animSwitchCircle = useAnimatedStyle(() => {
        return {
            transform: [{ translateX: translateX.value }],
            backgroundColor: interpolateColor(
                translateX.value,
                [0, trackThumbWidth],
                [circleColor.inActive, circleColor.active],
            ),
            width: interpolate(
                translateX.value,
                [0, trackThumbWidth / 3, trackThumbWidth],
                [thumbWidth, (thumbWidth / 2) * 2.5, thumbWidth],
            ),
        };
    });

    const onGestureEvent = useAnimatedGestureHandler<PanGestureHandlerGestureEvent, { x: number }>({
        onStart: (_e, ctx) => {
            ctx.x = translateX.value;
        },
        onActive: ({ translationX }, ctx) => {
            translateX.value = clamp(translationX + ctx.x, 0, trackThumbWidth);
        },
        onEnd: ({ velocityX }) => {
            const selectedSnapPoint = snapPoint(translateX.value, velocityX, [0, trackThumbWidth]);
            translateX.value = withSpring(selectedSnapPoint, {
                overshootClamping: true,
            });
            runOnJS(onValueChange)(selectedSnapPoint !== 0);
        },
    });

    const _handleStateChange = useCallback(
        ({ nativeEvent: { state } }: TapGestureHandlerStateChangeEvent) => {
            if (state !== State.ACTIVE) {
                return;
            }
            onValueChange(!value);
        },
        [onValueChange, value],
    );

    const panRef = useRef<PanGestureHandler>(null);

    return (
        <TapGestureHandler waitFor={panRef} enabled={!disabled} onHandlerStateChange={_handleStateChange}>
            <Animated.View style={[styles.switchContainer, { width: trackWidth }, animSwitchContainer]}>
                <PanGestureHandler ref={panRef} enabled={!disabled} onGestureEvent={onGestureEvent}>
                    <Animated.View
                        style={[{ width: thumbWidth, height: thumbWidth, borderRadius: thumbWidth }, animSwitchCircle]}
                    />
                </PanGestureHandler>
            </Animated.View>
        </TapGestureHandler>
    );
};
