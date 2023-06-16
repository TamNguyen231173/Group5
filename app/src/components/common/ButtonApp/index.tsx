import { Block, Button } from '@components'
import { useTheme } from '@themes'
interface Props {
  onClick: (params: any) => void
  title: string
  type: 'primary' | 'outline'
  disabled?: boolean
}
export const ButtonApp: React.FC<Props> = ({
  onClick,
  title,
  type,
  disabled,
}) => {
  const { colors } = useTheme()
  return (
    <Block>
      <Button
        type={type}
        title={title?.toUpperCase()}
        titleProps={{
          size: 18,
          lineHeight: 18.5,
          fontFamily: 'bold',
        }}
        radius={82}
        paddingHorizontal={68}
        onPress={onClick}
        pressedBackground={
          type === 'primary' ? colors.greenPrimary : colors.white
        }
        disabled={disabled}
      ></Button>
    </Block>
  )
}
