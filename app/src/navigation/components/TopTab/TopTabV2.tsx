import React from 'react'
import { Block } from '@components'
import { MaterialTopTabBarProps } from '@react-navigation/material-top-tabs'
import { fontFamilySetup, normalize, useTheme } from '@themes'
import { Animated, Pressable, FlatList } from 'react-native'

export const TopTabV2: React.FC<MaterialTopTabBarProps> = (props) => {
  const { colors } = useTheme()

  const listRef = React.useRef<FlatList>(null)

  const inputRange = React.useMemo(() => {
    return props.state.routes?.map((_, index) => index)
  }, [props.state.routes])

  const _renderItem = ({ index, item }: any) => {
    const opacity = props.position.interpolate({
      inputRange,
      outputRange: inputRange.map((_, _index) => (_index === index ? 1 : 0.4)),
    })

    const indicatorOpacity = props.position.interpolate({
      inputRange: [index - 0.75, index, index + 0.75],
      outputRange: [0, 1, 0],
    })

    const scaleX = props.position.interpolate({
      inputRange,
      outputRange: inputRange.map((_, _index) => (_index === index ? 1 : 0)),
    })

    return (
      <Pressable
        onPress={() => {
          props.navigation.navigate(item.name)
          listRef.current?.scrollToIndex({
            animated: true,
            index: index,
            viewPosition: 0.5,
          })
        }}
      >
        <Animated.Text
          key={index}
          style={{
            fontSize: 16,
            lineHeight: 24,
            fontFamily: fontFamilySetup.extraBold,
            color: colors.greenDark,
            opacity,
          }}
        >
          {item.name}
        </Animated.Text>
        <Block paddingHorizontal={10}>
          <Animated.View
            style={{
              backgroundColor: colors.greenDark,
              height: normalize.v(2),
              borderRadius: 2,
              transform: [{ scaleX }],
              opacity: indicatorOpacity,
            }}
          />
        </Block>
      </Pressable>
    )
  }

  React.useEffect(() => {
    listRef.current?.scrollToIndex({
      animated: true,
      index: props.state.index,
      viewPosition: 0.5,
    })
  }, [props.state.index])

  return (
    <Block
      onLayout={(e) => {
        console.log(e.nativeEvent.layout)
      }}
      height={45}
      backgroundColor={colors.white}
      alignCenter
      justifyCenter
      paddingHorizontal={5}
    >
      <FlatList
        scrollEventThrottle={1}
        ref={listRef}
        pagingEnabled
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          flexGrow: 1,
          gap: 10,
          alignItems: 'center',
          justifyContent: 'center',
        }}
        data={props.state.routes}
        keyExtractor={(item) => item.key}
        renderItem={_renderItem}
      />
    </Block>
  )
}
