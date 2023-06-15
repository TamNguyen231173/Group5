import React from 'react'
import { Block, Text, Image } from '@components'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { BookmarkIcon } from '@assets'
import { useTheme } from '@themes'
import { navigate } from '@navigation/NavigationServices'
import { routes } from '@navigation'
import { useLazyUpdatePostViewByIdQuery } from '@reduxs'

interface PostItemProps {
  onPress?: () => void
  image: string
  familyName: string
  name: string
  id: string
  saveToBookmark?: () => void
}

export const PostItem = React.memo((props: PostItemProps) => {
  const { colors } = useTheme()
  const [bookmark, setBookmark] = React.useState(false)

  const [updatePostView] = useLazyUpdatePostViewByIdQuery()

  const handleUpdatePostView = (id: string) => {
    updatePostView(id)
      .then((value) => {
        // console.log(value)
      })
      .catch((e) => {
        console.log(e)
      })
  }

  // Random color for background of post item
  const randomColor = React.useCallback(() => {
    const colorArray = [
      colors.greenDark,
      colors.redPrimary,
      colors.purplePrimary,
      colors.blackPrimary,
      colors.greyPrimary,
    ]
    return colorArray[Math.floor(Math.random() * colorArray.length)] + '85'
  }, [])

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => {
        navigate(routes.detail, { id: props.id })
        handleUpdatePostView(props.id)
      }}
    >
      <Block width={194} height={197} radius={8} marginLeft={16}>
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
          <TouchableOpacity
            onPress={() => {
              setBookmark(!bookmark)
              props.saveToBookmark && props.saveToBookmark()
            }}
          >
            <BookmarkIcon
              stroke={'#fff'}
              color={bookmark ? colors.oceanBlue : 'transparent'}
            />
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
          <Block width={170}>
            <Text
              fontFamily="bold"
              size={16}
              lineHeight={18}
              color="#fff"
              numberOfLines={1}
              ellipsizeMode="tail"
            >
              {props.name}
            </Text>
          </Block>
        </Block>
      </Block>
    </TouchableOpacity>
  )
})
