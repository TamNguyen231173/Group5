import React from 'react'
import { FlatList, View } from 'react-native'
import {
  Container,
  Block,
  PostItem,
  Image,
  Text,
  BottomSheet,
} from '@components'

import { useTheme } from '@themes'
import { HeaderCustom, VideoItem } from './component'
import { TouchableOpacity, ScrollView } from 'react-native'
import { Data, VideoData } from './contanst'
import { AddVideoIcon } from '@assets'
import { TopSearchItem } from './component/TopSearchItem'
import { useGetAllVideoQuery } from '@reduxs/api/videoService'

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
  const { isError, data, isLoading, isSuccess, refetch } = useGetAllVideoQuery()

  React.useEffect(() => {
    console.log({ isError, data, isLoading, isSuccess, refetch })
  })

  const { colors } = useTheme()
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
              {VideoData.map((item) => {
                return (
                  <VideoItem
                    thumbnail={item.thumbnail}
                    avatar={item.avatar}
                    name={item.name}
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
              data={Data}
              renderItem={(item) => {
                return (
                  <View>
                    {item.index == 0 ? (
                      <Block marginLeft={20}>
                        <PostItem
                          name={item.item.name}
                          familyName={item.item.familyName}
                          image={item.item.image}
                        />
                      </Block>
                    ) : (
                      <PostItem
                        name={item.item.name}
                        familyName={item.item.familyName}
                        image={item.item.image}
                      />
                    )}
                  </View>
                )
              }}
              keyExtractor={(item) => item._id}
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
            {Data.map((item) => (
              <TopSearchItem
                image={item.image}
                familiName={item.familyName}
                name={item.name}
                key={item._id}
              />
            ))}
          </Block>
        </Block>
      </ScrollView>
      {/* <BottomSheet children={ <HeaderCustom type='home' onPress={() => { }} />}/> */}
    </Container>
  )
}
