import { Block, Text } from '@components'
import { MaterialTopTabBarProps } from '@react-navigation/material-top-tabs'
import React, { FC, useEffect } from 'react'
import { Dimensions, TouchableOpacity } from 'react-native'
// import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { useTheme } from '@themes'

export const TopTab: FC<MaterialTopTabBarProps> = (props) => {
  const { colors } = useTheme()

  return (
    <Block
      height={45}
      row
      backgroundColor={colors.white}
      borderTopLeftRadius={24}
      borderTopRightRadius={24}
      style={{}}
    >
      {props.state.routes.map((item, index) => {
        const isFocused = props.state.index === index

        const widthItemBottomMenu =
          Dimensions.get('window').width / props.state.routes.length
        const colorTextActive = isFocused
          ? colors.TextActive
          : colors.TextInActive
        const fontFamilyActive = isFocused ? 'bold' : 'medium'
        const borderColorActive = isFocused ? colors.shadow : colors.white

        return (
          <TouchableOpacity
            activeOpacity={0.7}
            key={index}
            onPress={() => {
              props.navigation.navigate(item.name)
            }}
          >
            <Block
              alignCenter
              justifyCenter
              flex
              width={widthItemBottomMenu}
              borderTopLeftRadius={index === 0 ? 24 : 0}
              borderTopRightRadius={
                index === props.state.routes.length - 1 ? 24 : 0
              }
              borderWidth={1}
              borderColor={borderColorActive}
            >
              <Text
                size={12}
                color={colorTextActive}
                fontFamily={fontFamilyActive}
              >
                {item.name}
              </Text>
            </Block>
          </TouchableOpacity>
        )
      })}
    </Block>
  )
}
