import React from 'react'
import { FlatList, View } from 'react-native'
import { Container, Block, PostItem, Image, Text } from '@components'

import { useTheme } from '@themes'
import { HeaderCustom, VideoItem } from './component'
import { TouchableOpacity, ScrollView } from 'react-native'
import { Data } from './contanst'
import { AddVideoIcon } from '@assets'
import { TopSearchItem } from './component/TopSearchItem'
import { useLazyGeVideoPaginationQuery } from '@reduxs/api/videoService'
import { Post, Video, useLazyGetAllPostQuery } from '@reduxs'

interface Props {
  avatar: string
}

const CreateVideo = ({ avatar }: Props) => {
  const { colors } = useTheme()

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={{
        backgroundColor: colors.blackLight,
        marginRight: 16,
        borderRadius: 8,
        marginLeft: 20,
      }}
    >
      <Block width={96} height={141} radius={8}>
        <Image
          source={{
            uri: avatar,
          }}
          width={'100%'}
          height={100}
          resizeMode="cover"
          style={{
            borderTopLeftRadius: 8,
            borderTopRightRadius: 8,
          }}
        />
        <Block
          width={'100%'}
          height={41}
          style={{
            borderBottomLeftRadius: 8,
            borderBottomRightRadius: 8,
          }}
          alignCenter
        >
          <Block style={{ transform: [{ translateY: -9 }] }}>
            <AddVideoIcon />
          </Block>
          <Block justifyCenter>
            <Text
              marginLeft={4}
              fontFamily="bold"
              size={16}
              lineHeight={17}
              color="#fff"
            >
              Tạo tin
            </Text>
          </Block>
        </Block>
      </Block>
    </TouchableOpacity>
  )
}

export const Home = () => {
  const { colors } = useTheme()

  const [getVideoPagination] = useLazyGeVideoPaginationQuery()
  const [listVideo, setListVideo] = React.useState<Video[]>([])

  const [getAllPost] = useLazyGetAllPostQuery()
  const [listPost, setListPost] = React.useState<Post[]>([])
  const [listTopPost, setListTopPost] = React.useState<Post[]>([])

  const getPosts = async () => {
    try {
      const result = await getAllPost({})

      setListPost((prev) => [...prev, ...(result.data || [])])
    } catch (error) {
      console.log(error)
    }
  }

  const getTopPost = async () => {
    try {
      const result = await getAllPost({ sort: 'des', per_page: 10, page: 1 })

      setListTopPost((prev) => [...prev, ...(result.data || [])])
    } catch (error) {
      console.log(error)
    }
  }

  const getVideos = async () => {
    try {
      const result = await getVideoPagination({ page: 1, per_page: 10 })

      if (result?.data?.status != 'fail') {
        setListVideo((prev) => [...prev, ...(result.data?.data || [])])
      }
    } catch (error) {
      console.log(error)
    }
  }

  React.useEffect(() => {
    getVideos()
    getPosts()
    getTopPost()
  }, [])

  return (
    <Container
      statusColor={colors.greenDark}
      backgroundColor={colors.white}
      style={{ paddingBottom: 80 }}
    >
      <HeaderCustom type="home" onPress={() => {}} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <Block flex>
          <Block paddingTop={20}>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              snapToAlignment="center"
              pagingEnabled
            >
              <CreateVideo avatar="https://plus.unsplash.com/premium_photo-1684952848654-1171ca8988ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=627&q=80" />
              {listVideo.map((item) => {
                return (
                  <VideoItem
                    thumbnail={item.thumbnail}
                    avatar={item.author.photo}
                    name={item.title}
                    key={item.id}
                  />
                )
              })}
            </ScrollView>
          </Block>
          <Text
            marginTop={20}
            marginBottom={20}
            fontFamily="bold"
            size={16}
            lineHeight={18}
            paddingLeft={20}
          >
            Các động vật tại Việt Nam
          </Text>
          <Block>
            <FlatList
              data={listPost}
              renderItem={(item) => {
                return (
                  <View>
                    {item.index == 0 ? (
                      <Block>
                        <PostItem
                          id={item.item.id}
                          name={item.item.title}
                          familyName={item.item.familyName.name}
                          image={item.item.image}
                        />
                      </Block>
                    ) : (
                      <PostItem
                        id={item.item.id}
                        name={item.item.title}
                        familyName={item.item.familyName.name}
                        image={item.item.image}
                      />
                    )}
                  </View>
                )
              }}
              keyExtractor={(item) => item.id}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              pagingEnabled={true}
              snapToAlignment="center"
            />
          </Block>
          <Text
            marginTop={20}
            marginBottom={20}
            fontFamily="bold"
            size={16}
            lineHeight={18}
            paddingLeft={20}
          >
            Được xem nhiều nhất
          </Text>
          <Block paddingLeft={20} paddingRight={20}>
            {listTopPost.map((item) => (
              <TopSearchItem
                id={item.id}
                image={item.image}
                familyName={item.familyName.name}
                name={item.title}
                key={item.id}
              />
            ))}
          </Block>
        </Block>
      </ScrollView>
      {/* <BottomSheet children={ <HeaderCustom type='home' onPress={() => { }} />}/> */}
    </Container>
  )
}
