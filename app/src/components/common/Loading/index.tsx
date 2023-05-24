import { Block, Text } from '@components'
import { useAppSelector } from '@hooks/useRedux'
import { enableLoading } from '@reduxs/selectors/loadingSelector'
import { normalize, useTheme } from '@themes'
import { heightScreen, widthScreen } from '@utils/helper'
import AnimatedLottieView from 'lottie-react-native'
import React from 'react'

export const Loading = () => {
  const isShow = useAppSelector(enableLoading)
  const { colors } = useTheme()

  if (!isShow) {
    return <Block />
  }

  return (
    <Block
      absolute
      zIndex={9999}
      flex
      backgroundColor={colors.transparent}
      width={widthScreen}
      height={heightScreen}
      justifyCenter
      alignCenter
    >
      <AnimatedLottieView
        source={require('./Paperplane.json')}
        autoPlay
        loop
        style={{ width: normalize.h(120), height: normalize.v(120) }}
      />
      <Text color={colors.white} size={12}>
        Đang xử lý...
      </Text>
    </Block>
  )
}
