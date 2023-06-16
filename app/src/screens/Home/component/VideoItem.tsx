import React from 'react'
import { Block, Image, Text } from '@components'
import { TouchableOpacity } from 'react-native-gesture-handler'
import LinearGradient from 'react-native-linear-gradient'
import { useTheme } from '@themes'
import { navigate } from '@navigation/NavigationServices'
import { routes } from '@navigation'
interface VideoItemProps {
    onPress?: () => void
    thumbnail: string
    name: string
    avatar: string
}

export const VideoItem = (props: VideoItemProps) => {

    const { colors } = useTheme();
    
    return (
        <TouchableOpacity activeOpacity={0.8} onPress={() => {navigate(routes.video)}}>
            <Block width={96} height={141} radius={8} marginRight={16}>
                <Image
                    source={{
                        uri: props.thumbnail,
                    }}
                    width={'100%'}
                    height={'100%'}
                    radius={8}
                />
                <LinearGradient
                    colors={['transparent', 'transparent', colors.blackDark]}
                    style={{
                        position: "absolute",
                        top: 0,
                        width: "100%",
                        height: "100%",
                        borderRadius: 8,
                    }}>
                </LinearGradient>
                <Block
                    absolute
                    top={0}
                    left={0}
                    right={0}
                    bottom={0}
                    backgroundColor="rgba(52, 52, 52, 0.35)"
                    radius={8}
                />

                <Block
                    left={4}
                    justifyCenter
                    alignCenter
                    absolute
                    bottom={10}
                    zIndex={10}
                >
                    <Image
                        source={{
                            uri: props.avatar,
                        }}
                        width={20}
                        height={20}
                        radius={10}
                        style={{ borderWidth: 1, borderColor: colors.white }}
                    />
                    <Text
                        marginLeft={4}
                        marginTop={6}
                        fontFamily="medium"
                        size={14}
                        lineHeight={17}
                        color="#fff"
                        numberOfLines={1}
                        ellipsizeMode="tail"
                    >
                        {props.name}
                    </Text>
                </Block>
            </Block>
        </TouchableOpacity>
    )
}
