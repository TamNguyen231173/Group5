import * as React from 'react'
import Svg, { SvgProps, Path } from 'react-native-svg'
export const BackIcon = (props: SvgProps) => (
  <Svg width={35} height={35} fill="none" {...props}>
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={3}
      d="m21.875 8.75-8.043 8.043a1 1 0 0 0 0 1.414l8.043 8.043"
    />
  </Svg>
)
