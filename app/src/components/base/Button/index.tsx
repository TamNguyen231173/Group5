import { Block, Text } from '@components/base';
import { ThemeColors, useTheme } from '@themes';

import React from 'react';
import { ActivityIndicator, Pressable, StyleSheet } from 'react-native';

import { createDefaultStyle, handleGutter, isUndefined } from '../utils';
import { ButtonProps } from './types';

export const Button: React.FC<ButtonProps> = (props) => {
    const { colors } = useTheme();
    const {
        title,
        type = title ? 'primary' : 'text',
        children,
        style,
        width,
        height,
        align,
        justify,
        row,
        position,
        top,
        bottom,
        left,
        right,
        padding = title ? 14 : 0,
        margin,
        shadow,
        overflow,
        leftIcon,
        leftIconContainerStyle,
        rightIcon,
        rightIconContainerStyle,
        loading,
        titleProps,
        disabled,
        backgroundColor,
        pressedBackground,
        disabledBackground,
        ...rest
    } = props;

    const buttonStyles = ({ pressed }: { pressed: boolean }) => {
        return StyleSheet.flatten([
            getDefaultButtonStyles({
                type,
                pressed,
                colors,
                isDisabled: disabled || loading,
                backgroundColor,
                pressedBackground,
                disabledBackground,
            }),
            createDefaultStyle(props),
            width && { width },
            height && { height },
            align && { alignItems: align },
            justify && { justifyContent: justify },
            row && { flexDirection: 'row' },
            position && { position },
            !isUndefined(top) && { top },
            !isUndefined(bottom) && { bottom },
            !isUndefined(left) && { left },
            !isUndefined(right) && { right },
            overflow && { overflow },
            padding && handleGutter('padding', padding),
            margin && handleGutter('margin', margin),
            shadow && styles.shadow,
            style,
        ]);
    };

    const _renderIcon = (isRight?: boolean) => {
        const [icon, iconStyle] = isRight ? [rightIcon, rightIconContainerStyle] : [leftIcon, leftIconContainerStyle];

        // if (isIcon(icon)) {
        //     const IconComponent = getIconComponent(icon.type);

        //     return (
        //         <IconComponent
        //             style={StyleSheet.flatten([
        //                 {
        //                     paddingRight: isRight || !title ? 0 : 8,
        //                     paddingLeft: isRight ? 8 : 0,
        //                 },
        //                 iconStyle,
        //             ])}
        //             name={icon.name}
        //             size={icon.size || 24}
        //             color={icon.color || (type === 'primary' ? 'white' : 'primary')}
        //         />
        //     );
        // }

        return (
            <Block
                style={StyleSheet.flatten([
                    {
                        paddingRight: isRight || !title ? 0 : 8,
                        paddingLeft: isRight ? 8 : 0,
                    },
                    iconStyle,
                ])}
            >
                {icon}
            </Block>
        );
    };

    return (
        <Pressable {...rest} disabled={disabled || loading} style={buttonStyles}>
            {children ? (
                children
            ) : (
                <Block row alignSelf="center">
                    {leftIcon && _renderIcon()}
                    {loading && (
                        <Block marginRight={8}>
                            <ActivityIndicator color={type === 'primary' ? 'white' : colors.primary} size="small" />
                        </Block>
                    )}
                    {title && (
                        <Text color={type === 'primary' ? 'white' : 'primary'} size={14} {...titleProps}>
                            {title}
                        </Text>
                    )}
                    {rightIcon && _renderIcon(true)}
                </Block>
            )}
        </Pressable>
    );
};

const styles = StyleSheet.create({
    shadow: {
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.15,
        shadowRadius: 4,
        elevation: 3,
    },
});

type IProps = {
    type: 'primary' | 'outline' | 'text';
    colors: ThemeColors;
    pressed: boolean;
    isDisabled?: boolean;
    backgroundColor?: string;
    pressedBackground?: string;
    disabledBackground?: string;
};

const getDefaultButtonStyles = ({
    type,
    colors,
    pressed,
    isDisabled,
    backgroundColor,
    pressedBackground,
    disabledBackground,
}: IProps) => {
    let buttonDefaultStyle: any = {
        borderRadius: 8,
        backgroundColor: pressed ? colors.focus : colors.primary,
    };
    if (type === 'text' || type === 'outline') {
        buttonDefaultStyle.backgroundColor = 'transparent';
        buttonDefaultStyle.opacity = pressed ? 0.6 : 1;
    }
    if (type === 'outline') {
        buttonDefaultStyle.borderColor = colors.focus;
        buttonDefaultStyle.borderWidth = 1;
    }
    if (isDisabled) {
        if (type === 'primary') {
            buttonDefaultStyle.backgroundColor = disabledBackground || colors.disabled;
        } else {
            buttonDefaultStyle.opacity = 0.6;
        }
    }
    if (backgroundColor) {
        buttonDefaultStyle.backgroundColor = colors[backgroundColor] || backgroundColor;
        if (pressed) {
            buttonDefaultStyle.backgroundColor = pressedBackground;
        }
    }
    return buttonDefaultStyle;
};
