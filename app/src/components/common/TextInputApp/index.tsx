
import React, { useState } from "react";
import { Block, TextInput } from "@components/base";
import { Dimensions } from "react-native";

import { font, fontFamilySetup, useTheme } from "@themes";
import { UsernameIcon, PadLock, EmailIcon } from "@assets";



type inputType = "password" | "user" | "email";
interface Props {
    onChangeText: (value: string) => void;
    value: string;
    type: inputType;
    placeholder: string;
}
export const TextInputApp: React.FC<Props> = ({ onChangeText, value, type, placeholder }) => {
    const { colors } = useTheme();
    const [isFocused, setIsFocused] = useState(false);
    const handleFocus = () => {
        setIsFocused(true);
    };

    const handleBlur = () => {
        setIsFocused(false);
    };

    return (
        <Block>
            <TextInput
                placeholder={placeholder}
                onChangeText={onChangeText}
                value={value}
                containerStyle={{
                    width: Dimensions.get("window").width - 40,
                    backgroundColor: colors.white,
                }}
                style={{
                    fontFamily: fontFamilySetup.regular,
                    fontSize: font.size.title2,
                    color: colors.blackDark,
                }}

                leftIcon={
                    type == "email" ? <EmailIcon fill={isFocused ? colors.greenDark : colors.greyLight} /> :
                        type == "password" ? <PadLock fill={isFocused ? colors.greenDark : colors.greyLight} /> :
                            type == "user" ? <UsernameIcon fill={isFocused ? colors.greenDark : colors.greyLight} /> : null}
                secureTextEntry={true}
                onFocus={handleFocus}
                onBlur={handleBlur}
                placeholderTextColor={colors.greyLight}
            />
        </Block>
    )
}

