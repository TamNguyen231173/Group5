import { Block, Image, Text } from "@components";
import { useTheme } from "@themes";

interface Props {
    image: string;
    familiName: string;
    name: string;
}

export const TopSearchItem: React.FC<Props> = ({ image, familiName, name }) => {
    const { colors } = useTheme();

    return (
        <Block row marginBottom={20}>
            <Image
                width={100}
                height={100}
                resizeMode="cover"
                radius={8}
                source={{
                    uri: image,
                }} />
            <Block paddingLeft={10} flex>
                <Text
                    color={colors.greyLight}
                    fontFamily="bold"
                    size={16}>
                    {familiName}
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
    );
};

