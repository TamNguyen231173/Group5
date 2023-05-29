import React from 'react'
import Video, { OnLoadData } from 'react-native-video'
import { StyleSheet, Dimensions, Pressable, Animated } from 'react-native'
import {
  NativeSyntheticEvent,
  TextLayoutEventData,
} from 'react-native/Libraries/Types/CoreEventTypes'
import { Block, Text } from '@components'
import { PlayIcon } from '@assets'
import PauseIcon from '@assets/icons/PauseIcon'
import { IPlayerProps, VideoNaturalSize } from './type'
import { ScrollView } from 'react-native-gesture-handler'

export const Player: React.FC<IPlayerProps> = (props) => {
  const opacityButtonControlAnim = React.useRef(new Animated.Value(0)).current
  const scaleButtonControlAnim = React.useRef(new Animated.Value(0)).current

  const [numberLineTitle, setNumberLineTitle] = React.useState(1)
  const [numberLineDescription, setNumberLineDescription] = React.useState(1)
  const [showMoreInfo, setShowMoreInfo] = React.useState(false)

  const [videoNaturalSize, setVideoNaturalSize] =
    React.useState<VideoNaturalSize>()

  const [isPlay, setIsPlay] = React.useState<boolean>(true)

  const handleLoadVideo = (data: OnLoadData) => {
    setVideoNaturalSize(data.naturalSize)

    if (!!props.onLoad) {
      props.onLoad(data)
    }
  }

  const fadeAnim = () => {
    Animated.sequence([
      Animated.parallel([
        Animated.spring(scaleButtonControlAnim, {
          toValue: 1,
          useNativeDriver: false,
        }),
        Animated.spring(opacityButtonControlAnim, {
          toValue: 1,
          useNativeDriver: false,
        }),
      ]),
      Animated.parallel([
        Animated.spring(scaleButtonControlAnim, {
          delay: 500,
          toValue: 0.6,
          useNativeDriver: false,
        }),
        Animated.spring(opacityButtonControlAnim, {
          delay: 500,
          toValue: 0,
          useNativeDriver: false,
        }),
      ]),
    ]).start()
  }

  const handleIsPlay = () => {
    setIsPlay(!isPlay)

    fadeAnim()

    if (!!props.onButtonControlClick) {
      props.onButtonControlClick(!isPlay)
    }
  }

  const handleTitleLayout = (
    event: NativeSyntheticEvent<TextLayoutEventData>,
  ) => {
    setNumberLineTitle(event.nativeEvent.lines.length)
  }

  const handleDescriptionLayout = (
    event: NativeSyntheticEvent<TextLayoutEventData>,
  ) => {
    setNumberLineDescription(event.nativeEvent.lines.length)
  }

  const _renderButtonControl = () => {
    return (
      <Pressable
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: '#00000030',
        }}
        onPress={handleIsPlay}
      >
        <Animated.View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 10,
            opacity: opacityButtonControlAnim,
            transform: [{ scale: scaleButtonControlAnim }],
          }}
        >
          {isPlay ? <PauseIcon /> : <PlayIcon />}
        </Animated.View>
      </Pressable>
    )
  }

  return (
    <Block
      alignCenter
      justifyCenter
      absolute
      top={0}
      left={0}
      right={0}
      bottom={0}
    >
      <Video
        playWhenInactive
        onEnd={() => {
          console.log('video end')

          if (!!props.onEnd) {
            props.onEnd()
          }
        }}
        onLoad={handleLoadVideo}
        source={{ uri: props.source }}
        poster={props.thumbnail}
        style={[
          styles.videoStyle,
          {
            width:
              !!videoNaturalSize?.width &&
              videoNaturalSize?.width > Dimensions.get('window').width
                ? videoNaturalSize?.width
                : Dimensions.get('window').width,
            alignSelf: 'center',
            justifyContent: 'center',
            alignItems: 'center',
            aspectRatio:
              videoNaturalSize?.orientation === 'landscape' ? 16 / 9 : 9 / 16,
          },
          { ...props.videoStyle },
        ]}
        paused={!isPlay}
        resizeMode="contain"
        posterResizeMode="contain"
      />
      {_renderButtonControl()}

      {/* text render */}
      <Block
        absolute
        left={0}
        right={0}
        justifyEnd
        bottom={15}
        flex
        padding={10}
        alignStart
      >
        <Text
          onTextLayout={handleTitleLayout}
          numberOfLines={showMoreInfo ? numberLineTitle : 1}
          color="white"
          lineHeight={32}
          size={22}
          fontFamily="bold"
        >
          {props.title}
        </Text>
        <ScrollView
          showsVerticalScrollIndicator
          style={{
            maxHeight: 180,
          }}
        >
          <Text
            onTextLayout={handleDescriptionLayout}
            numberOfLines={showMoreInfo ? numberLineDescription : 1}
            color="white"
            lineHeight={24}
            size={16}
            fontFamily="bold"
          >
            {props.description}
          </Text>
        </ScrollView>
        {numberLineDescription > 1 ||
          (numberLineTitle > 1 && (
            <Text
              onPress={() => {
                setShowMoreInfo(!showMoreInfo)
              }}
              size={13}
              lineHeight={24}
              color="#fff"
              alignSelf="flex-end"
            >
              {showMoreInfo ? 'Ẩn bớt' : 'Xem thêm'}
            </Text>
          ))}
      </Block>
    </Block>
  )
}

const styles = StyleSheet.create({
  videoStyle: {
    borderRadius: 10,
  },
})
