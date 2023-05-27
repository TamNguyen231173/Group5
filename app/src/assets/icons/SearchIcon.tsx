import * as React from 'react'
import Svg, { SvgProps, Circle, Path } from 'react-native-svg'
export const SearchIcon = (props: SvgProps) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Circle cx={11} cy={11} r={6} stroke="#fff" strokeWidth={2} />
    <Path stroke="#fff" strokeLinecap="round" strokeWidth={2} d="m20 20-3-3" />
  </Svg>
)
