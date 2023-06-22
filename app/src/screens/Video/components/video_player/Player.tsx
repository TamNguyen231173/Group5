import React from 'react'
import Video from 'react-native-video'
import {
  StyleSheet,
  Dimensions,
  Pressable,
  Animated,
  Easing,
} from 'react-native'
import {
  NativeSyntheticEvent,
  TextLayoutEventData,
} from 'react-native/Libraries/Types/CoreEventTypes'
import { Block, Image, Text } from '@components'
import { HeartFillIcon, HeartIcon, PlayIcon } from '@assets'
import PauseIcon from '@assets/icons/PauseIcon'
import { ScrollView } from 'react-native-gesture-handler'
import LargeBookmarkIcon from '@assets/icons/LargeBookmarkIcon'
import { IPlayerProps } from './type'
import { heightOfTabBar } from '@screens/Video/constant'
import LargeBookmarkIconFill from '@assets/icons/LargeBookmarkIconFill'
import AnimatedLottieView from 'lottie-react-native'
import { normalize, useTheme } from '@themes'
import { heightScreen, widthScreen } from '@utils/helper'

const AnimatedPressable = Animated.createAnimatedComponent(Pressable)

const Player = React.forwardRef((props: IPlayerProps, ref) => {
  const { colors } = useTheme()

  const [showMoreInfo, setShowMoreInfo] = React.useState(false)
  const [isPlay, setIsPlay] = React.useState(false)
  const [isLoading, setIsLoading] = React.useState(true)
  const [isHeart, setIsHeart] = React.useState(props.isLike)
  const [isBookmark, setIsBookmark] = React.useState(props.isBookmark)

  const opacityButtonBookmark = React.useRef(
    new Animated.Value(props.isBookmark ? 1 : 0),
  ).current
  const scaleButtonBookmark = React.useRef(new Animated.Value(1)).current
  const opacityButtonControlAnim = React.useRef(new Animated.Value(0)).current
  const scaleButtonControlAnim = React.useRef(new Animated.Value(0)).current
  const heartScaleAnimated = React.useRef(new Animated.Value(1)).current
  const heartRotateAnimated = React.useRef(new Animated.Value(0)).current
  const heartOpacityAnimated = React.useRef(
    new Animated.Value(isHeart ? 1 : 0),
  ).current

  const [numberLineTitle, setNumberLineTitle] = React.useState(1)
  const [numberLineDescription, setNumberLineDescription] = React.useState(1)

  //export method for parent
  React.useImperativeHandle(ref, () => ({
    play: () => {
      setIsPlay(true)
    },
    stop: () => {
      setIsPlay(false)
    },
  }))

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
          delay: 450,
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

  const enableBookmarkAnim = () => {
    Animated.parallel([
      Animated.spring(opacityButtonBookmark, {
        toValue: 1,
        useNativeDriver: true,
      }),
      Animated.sequence([
        Animated.spring(scaleButtonBookmark, {
          toValue: 1.4,
          useNativeDriver: true,
          speed: 230,
        }),
        Animated.spring(scaleButtonBookmark, {
          toValue: 1,
          useNativeDriver: true,
        }),
      ]),
    ]).start()
  }

  const disableBookmarkAnim = () => {
    Animated.parallel([
      Animated.spring(opacityButtonBookmark, {
        toValue: 0,
        useNativeDriver: true,
      }),
      Animated.parallel([
        Animated.spring(scaleButtonBookmark, {
          toValue: 2,
          useNativeDriver: true,
        }),
        Animated.spring(scaleButtonBookmark, {
          toValue: 0.6,
          useNativeDriver: true,
        }),
      ]),
    ]).start()
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

  const heartEnableAnim = () => {
    Animated.sequence([
      Animated.parallel([
        Animated.spring(heartScaleAnimated, {
          toValue: 1.4,
          useNativeDriver: true,
          bounciness: 2,
        }),
        Animated.spring(heartOpacityAnimated, {
          toValue: 1,
          useNativeDriver: true,
          bounciness: 2,
        }),
      ]),
      Animated.spring(heartScaleAnimated, {
        toValue: 1,
        useNativeDriver: true,
        bounciness: 2,
      }),
    ]).start()
  }

  const heartDisableAnim = () => {
    Animated.sequence([
      Animated.spring(heartScaleAnimated, {
        toValue: 1.4,
        useNativeDriver: true,
        bounciness: 2,
      }),
      Animated.parallel([
        Animated.spring(heartScaleAnimated, {
          toValue: 1,
          useNativeDriver: true,
          speed: 230,
        }),
        Animated.spring(heartOpacityAnimated, {
          toValue: 0,
          useNativeDriver: true,
        }),
      ]),
    ]).start()
  }

  const heartShakeAnim = () => {
    Animated.sequence([
      Animated.timing(heartRotateAnimated, {
        toValue: -1,
        duration: 150,
        easing: Easing.ease,
        useNativeDriver: true,
      }),
      Animated.timing(heartRotateAnimated, {
        toValue: 1,
        useNativeDriver: true,
        duration: 150,
        easing: Easing.ease,
      }),
      Animated.timing(heartRotateAnimated, {
        toValue: -1,
        duration: 150,
        easing: Easing.ease,
        useNativeDriver: true,
      }),
      Animated.timing(heartRotateAnimated, {
        toValue: 0,
        duration: 150,
        easing: Easing.ease,
        useNativeDriver: true,
      }),
    ]).start()
  }

  const _renderVideoControl = () => {
    return (
      <Pressable
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: '#00000030',
          zIndex: 5,
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

  const _renderReactControl = () => {
    return (
      <Block
        absolute
        right={0}
        bottom={0}
        top={0}
        padding={10}
        column
        alignEnd
        justifyCenter
        zIndex={6}
        style={{
          gap: 15,
        }}
      >
        <Pressable
          onPress={() => {
            if (isBookmark) {
              disableBookmarkAnim()
            } else {
              enableBookmarkAnim()
            }

            setIsBookmark(!isBookmark)
          }}
        >
          <Animated.View
            style={{
              position: 'absolute',
            }}
          >
            <LargeBookmarkIcon />
          </Animated.View>
          <Animated.View
            style={{
              opacity: opacityButtonBookmark,
              transform: [
                {
                  scale: scaleButtonBookmark,
                },
              ],
            }}
          >
            <LargeBookmarkIconFill />
          </Animated.View>
        </Pressable>
        <Block>
          <AnimatedPressable
            style={{
              transform: [
                {
                  rotate: heartRotateAnimated.interpolate({
                    inputRange: [-1, 0, 1],
                    outputRange: ['-20deg', '0deg', '20deg'],
                  }),
                },
              ],
            }}
            onPress={() => {
              // console.log('Heart Press')
              if (isHeart) {
                // handle disable heart
                heartDisableAnim()
              } else {
                //handle enable heart
                heartEnableAnim()
                heartShakeAnim()
              }

              //handle toggle isHeart
              setIsHeart((prev) => {
                return !prev
              })
            }}
          >
            <Animated.View
              style={{
                position: 'absolute',
                transform: [{ scale: heartScaleAnimated }],
              }}
            >
              <HeartIcon />
            </Animated.View>
            <Animated.View
              style={{
                opacity: heartOpacityAnimated,
                transform: [{ scale: heartScaleAnimated }],
              }}
            >
              <HeartFillIcon />
            </Animated.View>
          </AnimatedPressable>
        </Block>
        <Text fontFamily="bold" size={22} lineHeight={32} color="white">
          12M
        </Text>
      </Block>
    )
  }

  const _renderText = () => {
    return (
      <Block
        absolute
        left={0}
        right={0}
        justifyEnd
        bottom={20}
        flex
        padding={10}
        alignStart
        zIndex={6}
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
        {numberLineDescription > 1 || numberLineTitle > 1 ? (
          <Pressable
            onPress={() => {
              setShowMoreInfo(!showMoreInfo)
              console.log('a')
            }}
          >
            <Text size={13} lineHeight={24} color="#fff" alignSelf="flex-end">
              {showMoreInfo ? 'Ẩn bớt' : 'Xem thêm'}
            </Text>
          </Pressable>
        ) : (
          <></>
        )}
      </Block>
    )
  }

  const _renderThumbnail = (url: string) => {
    return (
      <Block
        absolute
        backgroundColor={colors.transparent}
        width={widthScreen}
        height={
          Dimensions.get('window').height -
          heightOfTabBar -
          props.dimensionParentLayout.height
        }
        zIndex={4}
      >
        <Image source={{ uri: url }} width={'100%'} height={'100%'} />
      </Block>
    )
  }

  const _renderLoadingIndicator = () => {
    return (
      <Block
        absolute
        zIndex={4}
        flex
        width={widthScreen}
        height={
          Dimensions.get('window').height -
          heightOfTabBar -
          props.dimensionParentLayout.height
        }
        backgroundColor={colors.transparent}
        justifyCenter
        alignCenter
      >
        <AnimatedLottieView
          source={require('./animal_loading.json')}
          autoPlay
          style={{ width: normalize.h(120), height: normalize.v(120) }}
        />
      </Block>
    )
  }

  return (
    <Block
      alignCenter
      justifyCenter
      width={Dimensions.get('window').width}
      height={
        Dimensions.get('window').height -
        heightOfTabBar -
        props.dimensionParentLayout.height
      }
    >
      <Video
        playWhenInactive
        onEnd={() => {
          console.log('video end')

          if (!!props.onEnd) {
            props.onEnd()
          }
        }}
        onLoadStart={() => {
          // console.log('Start load')
          setIsLoading(true)
        }}
        onReadyForDisplay={() => {
          // console.log('End load')
          setIsLoading(false)
        }}
        onProgress={({ currentTime }) => {
          // console.log(currentTime)
        }}
        source={{ uri: props.source }}
        style={[
          styles.videoStyle,
          {
            width: Dimensions.get('window').width,
            height:
              Dimensions.get('window').height -
              heightOfTabBar -
              props.dimensionParentLayout.height,
          },
          { ...props.videoStyle },
        ]}
        repeat={true}
        paused={!isPlay}
        resizeMode="cover"
      />
      {/* button video player */}
      {_renderVideoControl()}

      {/* text render */}
      {_renderText()}

      {/*react control */}
      {_renderReactControl()}

      {/* render video thumbnail */}
      {((isLoading && !isPlay) || isLoading) &&
        _renderThumbnail(props.thumbnail)}

      {/* render loading indicator */}
      {isLoading && _renderLoadingIndicator()}
    </Block>
  )
})

const styles = StyleSheet.create({
  videoStyle: {
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
})

export const MemoPlayer = React.memo(Player)
