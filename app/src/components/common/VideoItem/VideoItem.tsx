import { Block, Image, Text } from '@components'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Dimensions } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import { useTheme } from '@themes'
const { width: wWidth } = Dimensions.get('window')
const itemWidth = wWidth / 3 - 6
interface VideoItemProp {
  onClick?: () => void
  thumbnail: string
  avatar: string
  name: string
}
export const VideoItem = (props: VideoItemProp) => {
  //3 cột
  //window width chia 3
  const { colors } = useTheme()
  const name = props.name
  const shortName = () => {
    return name.length >= 12 ? name.substring(0, 11).concat('...') : name
  }
  return (
    <Block margin={1}>
      <TouchableOpacity activeOpacity={0.8}>
        <Block width={itemWidth} height={230}>
          <Image
            width={'100%'}
            height={'100%'}
            source={{
              uri: props.thumbnail,
            }}
            resizeMode="cover"
          >
            <LinearGradient
              colors={['#00000000', '#00000000', '#000000']}
              style={{ height: '100%', width: '100%' }}
            ></LinearGradient>
          </Image>
        </Block>

        <Block
          absolute
          bottom={0}
          width={'100%'}
          height={33}
          marginBottom={5}
          marginLeft={5}
          row
          alignCenter
        >
          <Block
            radius={50}
            width={33}
            height={33}
            backgroundColor="white"
            padding={2}
          >
            <Image
              width={'100%'}
              height={'100%'}
              source={{
                uri: props.avatar,
              }}
              radius={50}
            ></Image>
          </Block>

          <Text color={colors.white} marginLeft={3}>
            {shortName()}
          </Text>
        </Block>
      </TouchableOpacity>
    </Block>
  )
}
