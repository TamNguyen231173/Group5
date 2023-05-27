import * as React from 'react'
import Svg, { SvgProps, Path, Circle } from 'react-native-svg'
import { useTheme } from '@themes'

export const CategoryIcon = (props: SvgProps) => {
  const { colors } = useTheme()
  return (
    <Svg width={24} height={24} fill={props.color} {...props}>
      <Path
        stroke={props.stroke}
        strokeWidth={2}
        d="M3.082 13.944c-.529-.95-.793-1.425-.793-1.944 0-.519.264-.994.793-1.944L4.43 7.63l1.426-2.381c.559-.933.838-1.4 1.287-1.66.45-.259.993-.267 2.08-.285L12 3.26l2.775.044c1.088.018 1.631.026 2.08.286.45.26.73.726 1.288 1.659L19.57 7.63l1.35 2.426c.528.95.792 1.425.792 1.944 0 .519-.264.994-.793 1.944L19.57 16.37l-1.426 2.381c-.559.933-.838 1.4-1.287 1.66-.45.259-.993.267-2.08.285L12 20.74l-2.775-.044c-1.088-.018-1.631-.026-2.08-.286-.45-.26-.73-.726-1.288-1.659L4.43 16.37l-1.35-2.426Z"
      />
      <Circle
        cx={12}
        cy={12}
        r={3}
        stroke={props.stroke === colors.greenDark ? '#fff' : props.stroke}
        strokeWidth={2}
      />
    </Svg>
  )
}
