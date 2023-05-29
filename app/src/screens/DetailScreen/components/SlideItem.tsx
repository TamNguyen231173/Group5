import React from 'react'
import { Block, Image } from '@components'
import { Dimensions } from 'react-native'

interface ItemProps {
  image: string
}

const { width } = Dimensions.get('window')

export const SlideItem = (props: ItemProps) => {
  return (
    <Block width={width}>
      <Image source={{ uri: props.image }} height={195} />
    </Block>
  )
}
