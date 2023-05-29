import * as React from 'react'
import Svg, { SvgProps, Circle, Path } from 'react-native-svg'
export const BlackSearchIcon = (props: SvgProps) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Circle cx={11} cy={11} r={6} stroke="#000" strokeWidth={2} />
    <Path stroke="#000" strokeLinecap="round" strokeWidth={2} d="m20 20-3-3" />
  </Svg>
)
