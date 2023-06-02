import * as React from 'react'
import Svg, { SvgProps, Circle, Path } from 'react-native-svg'

interface Props extends SvgProps {
  fill?: string;
}
export const SearchIcon = ({fill = "#fff"}:Props) => (
  <Svg width={24} height={24} fill="none">
    <Circle cx={11} cy={11} r={6} stroke={fill} strokeWidth={2} />
    <Path stroke={fill} strokeLinecap="round" strokeWidth={2} d="m20 20-3-3" />
  </Svg>
)
