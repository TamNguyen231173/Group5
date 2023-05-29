import * as React from "react"
import Svg, { SvgProps, Path, Circle } from "react-native-svg"
export const FilterIcon = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      stroke="#fff"
      strokeLinecap="round"
      strokeWidth={2}
      d="M11 8h9M4 16h10"
    />
    <Circle
      cx={7}
      cy={8}
      r={3}
      stroke="#fff"
      strokeLinecap="round"
      strokeWidth={2}
      transform="rotate(90 7 8)"
    />
    <Circle
      cx={17}
      cy={16}
      r={3}
      stroke="#fff"
      strokeLinecap="round"
      strokeWidth={2}
      transform="rotate(90 17 16)"
    />
  </Svg>
)
