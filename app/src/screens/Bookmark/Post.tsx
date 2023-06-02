import { Block } from '@components'
import { PostItemv2 } from '@components/common/PostItem/PostItemv2'
import { ScrollView } from 'react-native-gesture-handler'
interface AnimalData {
  id: string
  imgURL: string
  name: string
}
const data: AnimalData[] = [
  {
    id: 'id001',
    imgURL:
      'https://cdn.tgdd.vn/Files/2021/04/12/1342796/15-giong-cho-canh-dep-de-cham-soc-pho-bien-tai-viet-nam-202201200909197585.jpg',
    name: 'Chó Chihuahua',
  },
  {
    id: 'id002',
    imgURL:
      'https://cdn.tgdd.vn/Files/2021/04/12/1342796/15-giong-cho-canh-dep-de-cham-soc-pho-bien-tai-viet-nam-202104121458367801.jpg',
    name: 'Chó Bắc Kinh ',
  },
  {
    id: 'id003',
    imgURL:
      'https://cdn.tgdd.vn/Files/2021/04/12/1342796/15-giong-cho-canh-dep-de-cham-soc-pho-bien-tai-viet-nam-202104121459254224.jpg',
    name: 'Chó Dachshund',
  },
  {
    id: 'id004',
    imgURL:
      'https://cdn.tgdd.vn/Files/2021/04/12/1342796/15-giong-cho-canh-dep-de-cham-soc-pho-bien-tai-viet-nam-202104121459415751.jpg',
    name: 'Chó Phú Quốc',
  },
  {
    id: 'id005',
    imgURL:
      'https://cdn.tgdd.vn/Files/2021/04/12/1342796/15-giong-cho-canh-dep-de-cham-soc-pho-bien-tai-viet-nam-202104121459561436.jpg',
    name: 'Chó Poodle',
  },
  {
    id: 'id006',
    imgURL:
      'https://cdn.tgdd.vn/Files/2021/04/12/1342796/15-giong-cho-canh-dep-de-cham-soc-pho-bien-tai-viet-nam-202104121500298598.jpg',
    name: 'Chó Pug',
  },
  {
    id: 'id007',
    imgURL:
      'https://cdn.tgdd.vn/Files/2021/04/12/1342796/15-giong-cho-canh-dep-de-cham-soc-pho-bien-tai-viet-nam-202104121502010322.jpg',
    name: 'Chó Husky',
  },
  {
    id: 'id008',
    imgURL:
      'https://cdn.tgdd.vn/Files/2021/04/12/1342796/15-giong-cho-canh-dep-de-cham-soc-pho-bien-tai-viet-nam-202104121501444654.jpg',
    name: 'Chó Alaska',
  },
  {
    id: 'id009',
    imgURL:
      'https://cdn.tgdd.vn/Files/2021/04/24/1345934/top-7-loai-meo-canh-dep-va-pho-bien-nhat-viet-nam-202104241218054834.jpg',
    name: 'Mèo Ba Tư',
  },
  {
    id: 'id010',
    imgURL:
      'https://cdn.tgdd.vn/Files/2021/04/24/1345934/top-9-loai-meo-canh-dep-va-pho-bien-nhat-viet-nam-202203261319491493.jpg',
    name: 'Mèo Sphynx Không lông',
  },
  {
    id: 'id011',
    imgURL:
      'https://cdn.tgdd.vn/Files/2021/04/24/1345934/top-7-loai-meo-canh-dep-va-pho-bien-nhat-viet-nam-202104241219216162.jpg',
    name: 'Mèo Anh lông dài',
  },
]
export const Post = () => {
  return (
    <Block paddingBottom={90} backgroundColor={'white'}>
      <ScrollView>
        <Block row justifyCenter>
          <Block marginRight={8}>
            {data
              .filter((_, i) => i % 2 !== 0)
              .map((item) => (
                <PostItemv2 item={item} key={item.id}></PostItemv2>
              ))}
          </Block>
          <Block>
            {data
              .filter((_, i) => i % 2 === 0)
              .map((item) => (
                <PostItemv2 item={item} key={item.id}></PostItemv2>
              ))}
          </Block>
        </Block>
      </ScrollView>
    </Block>
  )
}
