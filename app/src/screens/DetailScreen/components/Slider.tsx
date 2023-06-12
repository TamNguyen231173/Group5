import React, { useRef, useState, useEffect } from 'react'
import { Animated, Dimensions, FlatList } from 'react-native'
import { Block } from '@components'
import { SlideItem } from './SlideItem'
import { Pagination } from './Pagination'

interface SliderProps {
  imagesSlider: string[]
}

export const Slider = (props: SliderProps) => {
  const data = props.imagesSlider

  const [index, setIndex] = useState(0)
  const scrollX = useRef(new Animated.Value(0)).current

  const flatListRef = useRef<FlatList>(null)
  const screenWidth = Dimensions.get('window').width
  const autoScrollTime = 3000

  // Auto scroll to next item
  useEffect(() => {
    const autoScroll = setInterval(() => {
      let newIndex = index + 1
      if (newIndex === data?.length) {
        newIndex = 0
      }
      flatListRef.current?.scrollToOffset({
        offset: newIndex * screenWidth,
        animated: true,
      })
      setIndex(newIndex - 1)
    }, autoScrollTime)

    return () => clearInterval(autoScroll)
  }, [index])

  // Handle scroll
  const handleOnScroll = (event: any) => {
    const { x } = event.nativeEvent.contentOffset
    const newIndex = Math.round(x / screenWidth)
    if (newIndex !== index) {
      setIndex(newIndex)
    }
    Animated.event([{ nativeEvent: { contentOffset: { x: scrollX } } }], {
      useNativeDriver: false,
    })(event)
  }

  // Handle viewable items changed
  const onViewableItemsChanged = (info: { viewableItems: any[] }) => {
    const newIndex = info.viewableItems[0]?.index
    if (newIndex !== undefined && newIndex !== index) {
      setIndex(newIndex)
    }
  }

  // Viewability config
  const viewabilityConfig = useRef({
    itemVisiblePercentThreshold: 50,
  }).current

  //  Viewability config callback pairs
  const viewabilityConfigCallbackPairs = useRef([
    { viewabilityConfig, onViewableItemsChanged },
  ])

  return (
    <Block alignCenter radius={10} overflow="hidden">
      <FlatList
        data={data}
        renderItem={({ item }) => {
          return <SlideItem image={item} />
        }}
        horizontal
        pagingEnabled
        snapToAlignment="center"
        showsHorizontalScrollIndicator={false}
        onScroll={handleOnScroll}
        viewabilityConfigCallbackPairs={viewabilityConfigCallbackPairs.current}
        viewabilityConfig={viewabilityConfig}
        ref={flatListRef}
      />
      <Pagination data={data} scrollX={scrollX} index={index} />
    </Block>
  )
}
