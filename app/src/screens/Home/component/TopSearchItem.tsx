import { Block, Image, Text } from '@components'
import { routes } from '@navigation'
import { navigate } from '@navigation/NavigationServices'
import { useTheme } from '@themes'
import { Pressable } from 'react-native'

interface Props {
  image: string
  familyName: string
  name: string
  id: string
}

export const TopSearchItem: React.FC<Props> = ({
  image,
  familyName,
  name,
  id,
}) => {
  const { colors } = useTheme()

  return (
    <Pressable
      onPress={() => {
        navigate(routes.detail, { id })
      }}
    >
      <Block row marginBottom={20}>
        <Image
          width={100}
          height={100}
          resizeMode="cover"
          radius={8}
          source={{
            uri: image,
          }}
        />
        <Block paddingLeft={10} flex>
          <Text color={colors.greyLight} fontFamily="bold" size={16}>
            {familyName}
          </Text>
          <Text
            flexGrow
            color={colors.blackDark}
            fontFamily="medium"
            size={16}
            numberOfLines={2}
            ellipsizeMode="tail"
          >
            {name}
          </Text>
        </Block>
      </Block>
    </Pressable>
  )
}
