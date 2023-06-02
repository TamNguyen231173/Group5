import * as React from 'react'
import Svg, { SvgProps, Path } from 'react-native-svg'
export const BackIcon = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={3}
      d="m15 6-5.293 5.293a1 1 0 0 0 0 1.414L15 18"
    />
  </Svg>
)
