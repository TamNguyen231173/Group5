import { FilterIcon } from '@assets'
import { Block, Button, Text } from '@components'
import { font, useTheme } from '@themes'
import React from 'react'
import { StatusBar } from 'react-native'

interface Props {
  type: 'home' | 'default'
  onPress: () => void
}

export const HeaderCustom = ({ type, onPress }: Props) => {
  const Greeting = (): string => {
    var hours = new Date().getHours()
    if (hours > 0 && hours <= 10) {
      return 'buổi sáng'
    } else if (hours <= 12) {
      return 'buổi trưa'
    } else if (hours <= 18) {
      return 'buổi chiều'
    } else if (hours <= 23) {
      return 'buổi tối'
    }
    return 'Không thể xác định thời gian'
  }
  const { colors } = useTheme()
  return (
    <Block
      row
      padding={12}
      alignCenter
      space="between"
      backgroundColor={colors.greenDark}
      borderBottomLeftRadius={8}
      borderBottomRightRadius={8}
    >
      <Text
        lineHeight={24}
        fontFamily="bold"
        size={font.size.h6}
        color={colors.white}
      >
        Xin chào {Greeting()}!
      </Text>
      {type == 'home' ? (
        <Button onPress={onPress}>
          <FilterIcon />
        </Button>
      ) : null}

      <StatusBar
        barStyle={'light-content'}
        backgroundColor={colors.greenDark}
      />
    </Block>
  )
}
