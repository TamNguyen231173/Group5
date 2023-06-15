import { Text, Block, Image } from '@components'
import { useTheme } from '@themes'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Dimensions } from 'react-native'
interface PostItemProps {
  onPress?: () => void
  image?: string
  name: string
}
interface AnimalData {
  id: string
  imgURL: string
  name: string
}
const { width } = Dimensions.get('screen')

export const PostItemv2: React.FC<{ item: AnimalData }> = ({ item }) => {
  const { colors, font } = useTheme()
  const handleClick = () => {
    console.log(item.id)
  }
  const randomColor = () => {
    const colorArray = [
      'rgba(37, 54, 167, 0.71);', //blue
      'rgba(0, 158, 58, 0.71);', //green
      'rgba(118, 200, 54, 0.71);', //light green
      'rgba(45, 45, 45, 0.71);', // black
    ]
    return colorArray[Math.floor(Math.random() * colorArray.length)]
  }
  const randomHeight = () => {
    const heightArray = [190, 240, 173, 192, 186, 151, 165]
    return heightArray[Math.floor(Math.random() * heightArray.length)]
  }
  return (
    <TouchableOpacity
      activeOpacity={0.9}
      onPress={handleClick}
      style={{ width: width / 2 - 18, height: randomHeight(), marginTop: 13 }}
    >
      <Block radius={0.5}>
        <Image
          source={{
            uri: item.imgURL,
          }}
          width={'100%'}
          height={'100%'}
          radius={8}
          resizeMode="cover"
        />
        <Block
          backgroundColor={randomColor()}
          absolute
          width={'100%'}
          bottom={0}
          height={43}
          justifyCenter
          borderBottomLeftRadius={8}
          borderBottomRightRadius={8}
        >
          <Text
            center
            fontFamily="bold"
            color={colors.white}
            size={16}
            lineHeight={18}
          >
            {item.name}
          </Text>
        </Block>
      </Block>
    </TouchableOpacity>
  )
}
