import * as React from 'react'
import Svg, { SvgProps, Path } from 'react-native-svg'
export const ArrowRightIcon = (props: SvgProps) => (
  <Svg width={23} height={24} fill="none" {...props}>
    <Path
      stroke="#707B81"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m9.627 6.988 3.82 4.866-3.82 4.865"
    />
  </Svg>
)
