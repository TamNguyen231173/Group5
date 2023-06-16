import React, { useState, useEffect } from 'react'
import { StatusBar } from 'react-native'
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
import { goBack } from '@navigation/NavigationServices'
import {
  useLazyGetPostByIdQuery,
  Post,
  useLazyGetRelatedPostsQuery,
  useLazyGetRelatedVideosQuery,
  Video,
} from '@reduxs'
import { Loading } from '@components'

interface DetailScreenProps {
  id?: string
  route?: any
  navigation?: any
}

export const DetailScreen = (props: DetailScreenProps) => {
  const [showMore, setShowMore] = useState(false)
  const { colors } = useTheme()
  const [data, setData] = useState<Post>()
  const [relatedPosts, setRelatedPosts] = useState<Post[]>([])
  const [relatedVideos, setRelatedVideos] = useState<Video[]>([])
  const [getPostById] = useLazyGetPostByIdQuery()
  const [getRelatedPosts] = useLazyGetRelatedPostsQuery()
  const [getRelatedVideos] = useLazyGetRelatedVideosQuery()
  const [pagePost, setPagePost] = useState(1)
  const [pageVideo, setPageVideo] = useState(1)

  // Save to bookmark
  const saveToBookmark = () => {
    console.log('save')
  }

  // Fetch data from API
  const getAPI = async () => {
    try {
      const { data: responseData } = await getPostById(props.route.params.id!)
      setData(responseData)
    } catch (error) {
      console.log(error)
    }
  }

  const callRelatedPosts = async () => {
    const { data: responseData } = await getRelatedPosts({
      familyName: data?.familyName.id,
      habitat: data?.habitat.id,
      region: data?.region.id,
      keywords: data?.keywords,
      page: pagePost,
      per_page: 6,
    })

    setRelatedPosts((prev) => [...prev, ...responseData!])
  }

  const callRelatedVideos = async () => {
    const { data: responseData } = await getRelatedVideos({
      familyName: data?.familyName.id,
      habitat: data?.habitat.id,
      keywords: data?.keywords,
      page: pageVideo,
      per_page: 6,
    })

    setRelatedVideos((prev) => [...prev, ...responseData!])
  }

  useEffect(() => {
    getAPI()
  }, [])

  useEffect(() => {
    callRelatedPosts()
  }, [pagePost])

  useEffect(() => {
    callRelatedVideos()
  }, [pageVideo])

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
          {data?.title}
        </Text>
        <Text
          fontFamily="regular"
          size={16}
          lineHeight={24}
          numberOfLines={showMore ? 0 : 3}
          ellipsizeMode="tail"
        >
          {data?.description}
        </Text>
        {/* Show more text button */}
        {showMoreText()}

        {/* Category */}
        {Category('Ngành/họ', data?.familyName.name!)}
        {Category('Môi trường sống', data?.habitat.name!)}
        {Category('Khu vực sống', data?.region.name!)}
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
          <Block padding={20} backgroundColor="#fff">
            {/* Header section */}
            <Header />

            {/* Slider section */}
            <Slider imagesSlider={data?.images!} />

            {/* Content section */}
            <Content />

            {/* Videos related section */}
            {Related(
              'Video liên quan',
              <FlatList
                style={{ marginHorizontal: -20 }}
                data={relatedVideos}
                renderItem={({ item }) => {
                  return (
                    <VideoItem
                      thumbnail={item.thumbnail}
                      avatar={item.author.photo}
                      name={item.author.name}
                    />
                  )
                }}
                onEndReached={() => {
                  setPageVideo(pageVideo + 1)
                }}
                keyExtractor={(item, index) => String(index)}
                horizontal
                snapToAlignment="center"
                showsHorizontalScrollIndicator={false}
              />,
            )}

            {/* Posts related section */}
            {Related(
              'Bài viết liên quan',
              <FlatList
                style={{ marginHorizontal: -20 }}
                data={relatedPosts}
                renderItem={({ item }) => {
                  return (
                    <PostItem
                      id={item.id}
                      image={item.image}
                      familyName={item.familyName.name}
                      name={item.title}
                      saveToBookmark={saveToBookmark}
                    />
                  )
                }}
                onEndReached={() => {
                  setPagePost(pagePost + 1)
                }}
                horizontal
                snapToAlignment="center"
                showsHorizontalScrollIndicator={false}
                keyExtractor={(item, index) => String(index)}
              />,
            )}
          </Block>
        </ScrollView>
      </Block>
    </>
  )
}
