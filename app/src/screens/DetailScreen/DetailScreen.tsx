import React, { useState } from 'react'
import { Block, Text } from '@components'
import { BackIcon, BookmarkIcon } from '@assets/icons'
import { Slider, VideoItem } from './components'
import { PostItem } from '@components'
import {
  TouchableOpacity,
  ScrollView,
  FlatList,
} from 'react-native-gesture-handler'
import { useTheme } from '@themes'
import { postDetail, PostItemRelated, VideoData } from './contants'
import { goBack } from '@navigation/NavigationServices'
import { StatusBar } from 'react-native'
import { useGetPostByIdQuery } from '@reduxs'

interface DetailScreenProps {
  id: string
}

export const DetailScreen = (props: DetailScreenProps) => {
  const [showMore, setShowMore] = useState(false)
  const { colors } = useTheme()
  // const { data } = props.id
  const { data } = useGetPostByIdQuery(props.id)

  const toggleShow = () => {
    setShowMore(!showMore)
  }

  // Header component
  const Header = () => {
    return (
      <Block
        row
        alignCenter
        space="between"
        width={'100%'}
        paddingVertical={10}
        backgroundColor="#fff"
      >
        <BackIcon onPress={goBack} />
        <Text fontFamily="bold" size={18} lineHeight={20}>
          Chi tiết
        </Text>
        <BookmarkIcon />
      </Block>
    )
  }

  // Show more text component
  const showMoreText = () => {
    return (
      <Block width={80}>
        <TouchableOpacity onPress={toggleShow}>
          <Text
            fontFamily="regular"
            size={16}
            lineHeight={24}
            color={colors.purplePrimary}
          >
            {showMore ? 'Thu gọn' : 'Xem thêm'}
          </Text>
        </TouchableOpacity>
      </Block>
    )
  }

  // Category component
  const Category = (type: string, name: string) => {
    return (
      <Block row marginVertical={10}>
        <Block width={120}>
          <Text fontFamily="bold" size={16} lineHeight={18}>
            {type}
          </Text>
        </Block>
        <Block width={'60%'}>
          <Text
            fontFamily="regular"
            size={16}
            lineHeight={18}
            color={colors.purplePrimary}
            marginLeft={47}
          >
            {name}
          </Text>
        </Block>
      </Block>
    )
  }

  // Content component
  const Content = () => {
    return (
      <Block>
        <Text
          fontFamily="extraBold"
          size={22}
          lineHeight={27}
          marginVertical={20}
        >
          {data.title}
        </Text>
        <Text
          fontFamily="regular"
          size={16}
          lineHeight={24}
          numberOfLines={showMore ? 0 : 3}
          ellipsizeMode="tail"
        >
          {data.description}
        </Text>
        {/* Show more text button */}
        {showMoreText()}

        {/* Category */}
        {Category('Ngành/họ', data.familyName)}
        {Category('Môi trường sống', data.habitat)}
        {Category('Khu vực sống', data.area)}
      </Block>
    )
  }

  // Related component
  const Related = (title: string, children: React.ReactNode) => {
    return (
      <Block>
        <Text
          fontFamily="bold"
          size={16}
          lineHeight={18}
          marginTop={18}
          marginBottom={12}
        >
          {title}
        </Text>
        {children}
      </Block>
    )
  }

  return (
    <>
      <StatusBar hidden />
      <Block flex backgroundColor="#fff">
        <ScrollView showsVerticalScrollIndicator={false}>
          <Block padding={20} backgroundColor="#fff" marginBottom={100}>
            {/* Header section */}
            <Header />

            {/* Slider section */}
            <Slider imagesSlider={data.image} />

            {/* Content section */}
            <Content />

            {/* Videos related section */}
            {Related(
              'Video liên quan',
              <FlatList
                data={VideoData}
                renderItem={({ item }) => {
                  return (
                    <VideoItem
                      thumbnail={item.thumbnail}
                      avatar={item.avatar}
                      name={item.name}
                    />
                  )
                }}
                keyExtractor={(item) => item.id}
                horizontal
                snapToAlignment="center"
                showsHorizontalScrollIndicator={false}
              />,
            )}

            {/* Posts related section */}
            {Related(
              'Bài viết liên quan',
              <FlatList
                data={PostItemRelated}
                renderItem={({ item }) => {
                  return (
                    <PostItem
                      image={item.image}
                      familyName={item.familyName}
                      name={item.name}
                    />
                  )
                }}
                horizontal
                snapToAlignment="center"
                showsHorizontalScrollIndicator={false}
              />,
            )}
          </Block>
        </ScrollView>
      </Block>
    </>
  )
}
