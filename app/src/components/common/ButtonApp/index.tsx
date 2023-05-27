import { Block, Button } from '@components'
import { useTheme } from '@themes'
interface Props {
  onClick: (params: any) => void
  title: string
  type: 'primary' | 'outline'
}
export const ButtonApp: React.FC<Props> = ({ onClick, title, type }) => {
  const { colors } = useTheme()
  return (
    <Block>
      <Button
        type={type}
        title={title?.toUpperCase()}
        titleProps={{
          color: type === 'primary' ? colors.white : colors.greenDark,
          size: 18,
          lineHeight: 18,
        }}
        backgroundColor={type === 'primary' ? colors.greenDark : colors.white}
        borderColor={type === 'primary' ? colors.white : colors.greenDark}
        radius={82}
        paddingHorizontal={75}
        onPress={onClick}
        pressedBackground={
          type === 'primary' ? colors.greenPrimary : colors.white
        }
      ></Button>
    </Block>
  )
}
