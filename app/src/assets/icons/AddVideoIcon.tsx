import * as React from "react"
import Svg, { SvgProps, Circle, Path } from "react-native-svg"
export const AddVideoIcon = (props: SvgProps) => (
  <Svg
    width={18}
    height={18}
    fill="none"
    {...props}
  >
    <Circle cx={9} cy={9} r={9} fill="#fff" />
    <Path
      fill="#009E3A"
      fillRule="evenodd"
      d="M18 9A9 9 0 1 1 0 9a9 9 0 0 1 18 0Zm-9 6a1 1 0 0 1-1-1v-4H4a1 1 0 1 1 0-2h4V4a1 1 0 1 1 2 0v4h4a1 1 0 1 1 0 2h-4v4a1 1 0 0 1-1 1Z"
      clipRule="evenodd"
    />
  </Svg>
)
