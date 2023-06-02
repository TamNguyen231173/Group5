import React from 'react'
import { Block, Text, Image } from '@components'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { BookmarkIcon } from '@assets'
import { useTheme } from '@themes'

interface PostItemProps {
  onPress?: () => void
  image: string
  familyName: string
  name: string
}

export const PostItem = (props: PostItemProps) => {
  const { colors } = useTheme()

  // Random color for background of post item
  const randomColor = () => {
    const colorArray = [
      colors.greenDark,
      colors.redPrimary,
      colors.purplePrimary,
      colors.blackPrimary,
      colors.greyPrimary,
    ]
    return colorArray[Math.floor(Math.random() * colorArray.length)] + '85'
  }

  return (
    <TouchableOpacity activeOpacity={0.8}>
      <Block width={194} height={197} radius={8} marginRight={16}>
        <Image
          source={{
            uri: props.image,
          }}
          width={'100%'}
          height={'100%'}
          radius={8}
        />
        <Block
          absolute
          top={0}
          left={0}
          right={0}
          bottom={0}
          radius={8}
          backgroundColor="rgba(52, 52, 52, 0.2)"
        />
        <Block absolute top={10} right={10}>
          <TouchableOpacity>
            <BookmarkIcon stroke={'#fff'} />
          </TouchableOpacity>
        </Block>

        {/* Body section */}
        <Block
          absolute
          bottom={0}
          height={62}
          paddingVertical={4}
          paddingHorizontal={12}
          width={'100%'}
          borderBottomLeftRadius={8}
          borderBottomRightRadius={8}
          zIndex={10}
          column
          space="between"
          backgroundColor={randomColor()}
        >
          <Text fontFamily="extraBold" size={16} lineHeight={24} color="#fff">
            {props.familyName}
          </Text>
          <Text fontFamily="bold" size={16} lineHeight={18} color="#fff">
            {props.name}
          </Text>
        </Block>
      </Block>
    </TouchableOpacity>
  )
}