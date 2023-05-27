import * as React from 'react'
import Svg, { SvgProps, Path, Circle } from 'react-native-svg'
export const UserIcon = (props: SvgProps) => (
  <Svg width={24} height={24} fill={props.color} {...props}>
    <Path
      stroke={props.stroke}
      strokeLinecap="round"
      strokeWidth={2}
      d="M19.727 20.447c-.455-1.276-1.46-2.403-2.857-3.207C15.473 16.436 13.761 16 12 16c-1.761 0-3.473.436-4.87 1.24-1.397.804-2.402 1.931-2.857 3.207"
    />
    <Circle
      cx={12}
      cy={8}
      r={4}
      stroke={props.stroke}
      strokeLinecap="round"
      strokeWidth={2}
    />
  </Svg>
)
