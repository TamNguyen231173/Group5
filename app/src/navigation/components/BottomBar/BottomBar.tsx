import { Block } from '@components'
import { BottomTabBarProps } from '@react-navigation/bottom-tabs'
import { HomeDappIcon } from '@assets'
import React, { FC } from 'react'
import { TouchableHighlight } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { useTheme } from '@themes'
import { Dimensions } from 'react-native'
import { Text } from '@components'
import { RenderIcon } from './RenderIcon'

export const BottomBar: FC<BottomTabBarProps> = (props) => {
  const { colors } = useTheme()
  const { bottom } = useSafeAreaInsets()

  return (
    <>
      <Block
        // shadow
        shadowColor={colors.black}
        elevation={20}
        height={64}
        width={'100%'}
        row
        backgroundColor={colors.bottomMenu}
        bottom={0}
        space={'evenly'}
        zIndex={10000}
      >
        {props.state.routes.map((item, index) => {
          const isFocused = props.state.index === index

          const widthItemBottomMenu = (Dimensions.get('window').width - 96) / 4 // chiều rộng mỗi block trong bottom menu

          return (
            <TouchableHighlight
              underlayColor={colors.bottomMenu}
              key={index}
              onPress={() => {
                props.navigation.navigate(item.name)
              }}
            >
              <Block alignCenter justifyCenter width={widthItemBottomMenu} flex>
                <RenderIcon
                  index={index}
                  color={isFocused ? colors.black : colors.gray}
                />
                {isFocused ? (
                  <Text size={10} color={colors.black}>
                    {item.name}
                  </Text>
                ) : (
                  <></>
                )}
              </Block>
            </TouchableHighlight>
          )
        })}
      </Block>
      <Block
        backgroundColor={colors.bottomMenu}
        height={bottom}
        zIndex={9999}
      />
    </>
  )
}
