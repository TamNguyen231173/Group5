import { Block } from '@components'
import { BottomTabBarProps } from '@react-navigation/bottom-tabs'
import React, { FC, useState } from 'react'
import { TouchableHighlight } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { useTheme } from '@themes'
import { Dimensions } from 'react-native'
import { RenderIcon } from './RenderIcon'

export const BottomBar: FC<BottomTabBarProps> = (props) => {
  const { colors } = useTheme()
  const { bottom } = useSafeAreaInsets()
  const [width, setWidth] = useState(Dimensions.get('window').width)

  const searchButton = (index: number) => {
    return (
      <Block
        backgroundColor={colors.white}
        width={65}
        height={65}
        radius={32.5}
        justifyCenter
        alignCenter
        bottom={bottom + 30}
        zIndex={10000}
      >
        <Block
          backgroundColor={colors.greenDark}
          width={50}
          height={50}
          radius={25}
          shadow
          justifyCenter
          alignCenter
        >
          <Block alignCenter justifyCenter>
            <RenderIcon
              index={index}
              color={colors.white}
              stroke={colors.white}
            ></RenderIcon>
          </Block>
        </Block>
      </Block>
    )
  }

  Dimensions.addEventListener('change', (e) => {
    const { width } = e.window
    setWidth(width)
  })

  return (
    <Block
      absolute
      bottom={20}
      backgroundColor={colors.bottomMenu}
      height={60}
      width={width - 24}
      marginHorizontal={12}
      radius={8}
      row
      space={'evenly'}
      zIndex={10000}
      shadow
    >
      {props.state.routes.map((item, index) => {
        const isFocused = props.state.index === index

        const widthItemBottomMenu = (width - 96) / 5 // chiều rộng mỗi block trong bottom menu

        return (
          <TouchableHighlight
            underlayColor={colors.bottomMenu}
            key={index}
            onPress={() => {
              props.navigation.navigate(
                item.name != 'Search' ? item.name : 'Search1',
              )
            }}
          >
            {index === 2 ? (
              searchButton(index)
            ) : (
              <Block alignCenter justifyCenter width={widthItemBottomMenu} flex>
                <RenderIcon
                  index={index}
                  color={isFocused ? colors.greenDark : colors.transparent}
                  stroke={
                    isFocused ? colors.greenDark : colors.strokeBottomIcon
                  }
                ></RenderIcon>
              </Block>
            )}
          </TouchableHighlight>
        )
      })}
    </Block>
  )
}
