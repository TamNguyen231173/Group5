import { Block, Text } from '@components'
import { VideoItem } from '@components/common/VideoItem'
import { FlashList } from '@shopify/flash-list'
import { FlatList } from 'react-native-gesture-handler'
const data = [
  {
    id: 'id001',
    thumbnail:
      'https://cdn.tgdd.vn/Files/2021/04/12/1342796/15-giong-cho-canh-dep-de-cham-soc-pho-bien-tai-viet-nam-202201200909197585.jpg',
    avatar:
      'https://i.pinimg.com/236x/b6/30/0a/b6300a9ce2b7a584e6098a21a43a7392--nisekoi-anime-people.jpg',
    name: ' raiko dep trai',
  },
  {
    id: 'id002',
    thumbnail:
      'https://cdn.tgdd.vn/Files/2021/04/12/1342796/15-giong-cho-canh-dep-de-cham-soc-pho-bien-tai-viet-nam-202104121458367801.jpg',
    avatar:
      'https://i.pinimg.com/236x/b6/30/0a/b6300a9ce2b7a584e6098a21a43a7392--nisekoi-anime-people.jpg',
    name: ' raiko dep trai',
  },
  {
    id: 'id003',
    thumbnail:
      'https://cdn.tgdd.vn/Files/2021/04/12/1342796/15-giong-cho-canh-dep-de-cham-soc-pho-bien-tai-viet-nam-202104121459254224.jpg',
    avatar:
      'https://i.pinimg.com/236x/b6/30/0a/b6300a9ce2b7a584e6098a21a43a7392--nisekoi-anime-people.jpg',
    name: ' raiko dep trai',
  },
  {
    id: 'id004',
    thumbnail:
      'https://cdn.tgdd.vn/Files/2021/04/12/1342796/15-giong-cho-canh-dep-de-cham-soc-pho-bien-tai-viet-nam-202104121459415751.jpg',
    avatar:
      'https://i.pinimg.com/236x/b6/30/0a/b6300a9ce2b7a584e6098a21a43a7392--nisekoi-anime-people.jpg',
    name: ' raiko dep trai',
  },
  {
    id: 'id005',
    thumbnail:
      'https://cdn.tgdd.vn/Files/2021/04/12/1342796/15-giong-cho-canh-dep-de-cham-soc-pho-bien-tai-viet-nam-202104121459561436.jpg',
    avatar:
      'https://i.pinimg.com/236x/b6/30/0a/b6300a9ce2b7a584e6098a21a43a7392--nisekoi-anime-people.jpg',
    name: ' raiko dep trai',
  },
  {
    id: 'id006',
    thumbnail:
      'https://cdn.tgdd.vn/Files/2021/04/12/1342796/15-giong-cho-canh-dep-de-cham-soc-pho-bien-tai-viet-nam-202104121500298598.jpg',
    avatar:
      'https://i.pinimg.com/236x/b6/30/0a/b6300a9ce2b7a584e6098a21a43a7392--nisekoi-anime-people.jpg',
    name: ' raiko dep trai',
  },
  {
    id: 'id007',
    thumbnail:
      'https://cdn.tgdd.vn/Files/2021/04/12/1342796/15-giong-cho-canh-dep-de-cham-soc-pho-bien-tai-viet-nam-202104121502010322.jpg',
    avatar:
      'https://i.pinimg.com/236x/b6/30/0a/b6300a9ce2b7a584e6098a21a43a7392--nisekoi-anime-people.jpg',
    name: ' raiko dep trai',
  },
  {
    id: 'id008',
    thumbnail:
      'https://cdn.tgdd.vn/Files/2021/04/12/1342796/15-giong-cho-canh-dep-de-cham-soc-pho-bien-tai-viet-nam-202104121501444654.jpg',
    avatar:
      'https://i.pinimg.com/236x/b6/30/0a/b6300a9ce2b7a584e6098a21a43a7392--nisekoi-anime-people.jpg',
    name: ' raiko dep trai',
  },
  {
    id: 'id009',
    thumbnail:
      'https://cdn.tgdd.vn/Files/2021/04/24/1345934/top-7-loai-meo-canh-dep-va-pho-bien-nhat-viet-nam-202104241218054834.jpg',
    avatar:
      'https://i.pinimg.com/236x/b6/30/0a/b6300a9ce2b7a584e6098a21a43a7392--nisekoi-anime-people.jpg',
    name: ' raiko dep trai',
  },
  {
    id: 'id010',
    thumbnail:
      'https://cdn.tgdd.vn/Files/2021/04/24/1345934/top-9-loai-meo-canh-dep-va-pho-bien-nhat-viet-nam-202203261319491493.jpg',
    avatar:
      'https://i.pinimg.com/236x/b6/30/0a/b6300a9ce2b7a584e6098a21a43a7392--nisekoi-anime-people.jpg',
    name: ' raiko dep trai',
  },
  {
    id: 'id011',
    thumbnail:
      'https://cdn.tgdd.vn/Files/2021/04/24/1345934/top-7-loai-meo-canh-dep-va-pho-bien-nhat-viet-nam-202104241219216162.jpg',
    avatar:
      'https://i.pinimg.com/236x/b6/30/0a/b6300a9ce2b7a584e6098a21a43a7392--nisekoi-anime-people.jpg',
    name: ' raiko dep trai',
  },
  {
    id: 'id012',
    thumbnail:
      'https://cdn.tgdd.vn/Files/2021/04/24/1345934/top-7-loai-meo-canh-dep-va-pho-bien-nhat-viet-nam-202104241219216162.jpg',
    avatar:
      'https://i.pinimg.com/236x/b6/30/0a/b6300a9ce2b7a584e6098a21a43a7392--nisekoi-anime-people.jpg',
    name: ' raiko dep trai',
  },
]
export const Video = () => {
  return (
    <Block
      paddingBottom={90}
      paddingTop={10}
      alignCenter
      flex
      justifyCenter
      backgroundColor="#ffffff"
    >
      <FlatList
        data={data}
        numColumns={3}
        renderItem={({ item }) => (
          <VideoItem
            key={item.id}
            thumbnail={item.thumbnail}
            avatar={item.avatar}
            name={item.name}
          ></VideoItem>
        )}
        showsHorizontalScrollIndicator={false}
      ></FlatList>
    </Block>
  )
}
