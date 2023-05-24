import { useTheme } from '@themes';
import React, { useEffect, useRef, useState } from 'react';
import { Animated, StyleSheet } from 'react-native';
import { Block } from '../Block';
import { Text } from '../Text';
import { createDefaultStyle, handleGutter } from '../utils';
import styles from './styles';
import { ProgressProps } from './type';

export const Progress: React.FC<ProgressProps> = (props) => {
    const { colors } = useTheme();
    const {
        step,
        stepColor = colors.primary,
        steps,
        stepsColor = colors.placeholder,
        height = 30,
        radius = 100,
        showStep,
        padding,
        margin,
    } = props;

    const containerProgress = StyleSheet.flatten([
        createDefaultStyle(props),
        padding && handleGutter('padding', padding),
        margin && handleGutter('margin', margin),
    ]);

    const [width, setWidth] = useState(0);
    const animatedValue = useRef(new Animated.Value(-1000)).current;
    const reactive = useRef(new Animated.Value(1000)).current;

    useEffect(() => {
        Animated.timing(animatedValue, {
            toValue: reactive,
            duration: 300,
            useNativeDriver: true,
        }).start();
    }, [animatedValue, reactive]);

    useEffect(() => {
        reactive.setValue(-width + (width * step) / steps);
    }, [reactive, step, steps, width]);

    return (
        <Block row style={containerProgress}>
            <Block flex backgroundColor={stepsColor} height={height} radius={radius} overflow="hidden">
                <Animated.View
                    onLayout={(e) => {
                        const newWidth = e.nativeEvent.layout.width;
                        setWidth(newWidth);
                    }}
                    style={[
                        styles.stepStyle,
                        {
                            backgroundColor: stepColor,
                            height,
                            borderRadius: +height,
                            transform: [{ translateX: animatedValue }],
                        },
                    ]}
                />
            </Block>
            {showStep && <Text paddingLeft={10}>{step + '/' + steps}</Text>}
        </Block>
    );
};
