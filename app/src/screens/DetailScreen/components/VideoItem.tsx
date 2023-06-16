import React from 'react'
import { Block, Image, Text } from '@components'
import { TouchableOpacity } from 'react-native-gesture-handler'

interface VideoItemProps {
  onPress?: () => void
  thumbnail: string
  name: string
  avatar: string
}

export const VideoItem = React.memo((props: VideoItemProps) => {
  return (
    <TouchableOpacity activeOpacity={0.8}>
      <Block width={96} height={141} radius={8} marginLeft={16}>
        <Image
          source={{
            uri: props.thumbnail,
          }}
          width={'100%'}
          height={'100%'}
          radius={8}
        />

        <Block
          absolute
          top={0}
          left={0}
          right={0}
          bottom={0}
          backgroundColor="rgba(52, 52, 52, 0.25)"
          radius={8}
        />
        <Block
          left={4}
          row
          justifyCenter
          alignCenter
          absolute
          bottom={10}
          zIndex={10}
        >
          <Image
            source={{
              uri: props.avatar,
            }}
            width={20}
            height={20}
            radius={10}
          />
          <Block width={75}>
            <Text
              marginLeft={4}
              fontFamily="medium"
              size={14}
              lineHeight={17}
              color="#fff"
              numberOfLines={1}
              ellipsizeMode="tail"
            >
              {props.name}
            </Text>
          </Block>
        </Block>
      </Block>
    </TouchableOpacity>
  )
})
