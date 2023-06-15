import React, { useState } from 'react'
import { Block, TextInput } from '@components/base'
import { Dimensions } from 'react-native'

import { font, fontFamilySetup, useTheme } from '@themes'
import { EmailIcon } from '@assets/icons/EmailIcon'
import { EyeOff, EyeOn } from '@assets'
import { PadLock } from '@assets/icons/PadLock'
import { UsernameIcon } from '@assets/icons/UsernameIcon'
type inputType = 'password' | 'user' | 'email'
interface Props {
  onChangeText: (value: string) => void
  value: string
  type: inputType
  placeholder: string
}
export const TextInputApp: React.FC<Props> = ({
  onChangeText,
  value,
  type,
  placeholder,
}) => {
  const { colors } = useTheme()
  const [showPass, setshowPass] = useState(true)
  const [isFocused, setIsFocused] = useState(false)
  const handleFocus = () => {
    setIsFocused(true)
  }

  const handleBlur = () => {
    setIsFocused(false)
  }

  return (
    <Block>
      <TextInput
        placeholder={placeholder}
        onChangeText={onChangeText}
        value={value}
        keyboardType={
          type === 'password'
            ? 'visible-password'
            : type === 'user'
            ? 'default'
            : type === 'email'
            ? 'email-address'
            : 'default'
        }
        containerStyle={{
          width: Dimensions.get('window').width - 40,
          backgroundColor: colors.white,
        }}
        style={{
          fontFamily: fontFamilySetup.regular,
          fontSize: font.size.title2,
          color: colors.blackDark,
        }}
        leftIcon={
          type == 'email' ? (
            <EmailIcon fill={isFocused ? colors.greenDark : colors.greyLight} />
          ) : type == 'password' ? (
            <PadLock fill={isFocused ? colors.greenDark : colors.greyLight} />
          ) : type == 'user' ? (
            <UsernameIcon
              fill={isFocused ? colors.greenDark : colors.greyLight}
            />
          ) : null
        }
        rightIcon={
          type == 'password' ? showPass ? <EyeOn /> : <EyeOff /> : null
        }
        onRightIconPress={() => {
          setshowPass(!showPass)
        }}
        secureTextEntry={type == 'password' ? (showPass ? true : false) : false}
        onFocus={handleFocus}
        onBlur={handleBlur}
        placeholderTextColor={colors.greyLight}
      />
    </Block>
  )
}
