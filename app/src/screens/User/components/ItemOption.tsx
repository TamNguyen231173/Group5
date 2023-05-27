import React from 'react'
import { Block, Switch, Text } from '@components'
import { ViewStyle } from 'react-native/types'
import { Pressable } from 'react-native'
import { ArrowRightIcon } from '@assets'
import { useTheme } from '@themes'

const emptyCallback = (value: boolean) => {}

interface ItemOptionProps {
  leftIcon?: React.ReactNode
  title: string
  style?: ViewStyle
  hasSwitch?: boolean
  switchValue?: boolean
  onSwitchValueChange?: (value: boolean) => void
  onPress?: () => void
}

const ItemOption: React.FC<ItemOptionProps> = (props) => {
  const { colors } = useTheme()

  const _renderEndItem = () => {
    return (
      <Block>
        {!props.hasSwitch ? (
          <ArrowRightIcon />
        ) : (
          <Switch
            trackColor={{
              active: colors.greenDark,
              inActive: '#ececec',
            }}
            onValueChange={props.onSwitchValueChange ?? emptyCallback}
            value={props.switchValue ?? false}
          />
        )}
      </Block>
    )
  }

  return (
    <Pressable onPress={props.onPress}>
      <Block
        alignCenter
        space="between"
        row
        height={58}
        borderBottomWidth={1}
        borderColor={colors.border}
      >
        <Block row>
          {props.leftIcon}
          <Text
            fontFamily="regular"
            size={16}
            lineHeight={24}
            marginLeft={!!props.leftIcon ? 10 : 0}
          >
            {props.title}
          </Text>
        </Block>
        {_renderEndItem()}
      </Block>
    </Pressable>
  )
}

export default ItemOption
