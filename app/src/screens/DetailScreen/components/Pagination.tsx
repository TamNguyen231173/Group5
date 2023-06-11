import { Animated, Dimensions } from 'react-native'
import React from 'react'
import { Block } from '@components'

const { width, height } = Dimensions.get('window')

interface PaginationProps {
  data: any[]
  scrollX: Animated.Value
  index: number
}

export const Pagination = (props: PaginationProps) => {
  return (
    <Block row alignCenter absolute bottom={10}>
      {props.data?.map((_, idx) => {
        const inputRange = [(idx - 1) * width, idx * width, (idx + 1) * width]

        const scale = props.scrollX.interpolate({
          inputRange,
          outputRange: [0.8, 2.5, 0.8],
          extrapolate: 'clamp',
        })

        const backgroundColor = props.scrollX.interpolate({
          inputRange,
          outputRange: ['transparent', '#ffffff4d', 'transparent'],
          extrapolate: 'clamp',
        })

        return (
          <Animated.View
            key={idx.toString()}
            style={[
              {
                justifyContent: 'center',
                alignItems: 'center',
                width: 8,
                height: 8,
                transform: [{ scale }],
                borderRadius: 12,
                margin: 6,
                backgroundColor,
              },
              props.index === idx && {
                borderColor: '#fff',
              },
            ]}
          >
            <Block width={4} height={4} radius={2} backgroundColor="#fff" />
          </Animated.View>
        )
      })}
    </Block>
  )
}
