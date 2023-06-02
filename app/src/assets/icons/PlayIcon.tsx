import * as React from 'react'
import Svg, { SvgProps, Path } from 'react-native-svg'
export const PlayIcon = (props: SvgProps) => (
  <Svg width={42} height={42} fill="none" {...props}>
    <Path
      fill="#fff"
      fillOpacity={0.58}
      d="M40.55 18.652 3.8.279a2.605 2.605 0 0 0-2.554.116A2.61 2.61 0 0 0 0 2.628v36.744c0 .915.466 1.75 1.246 2.233a2.611 2.611 0 0 0 2.553.115l36.75-18.372A2.61 2.61 0 0 0 42 21c0-1.001-.555-1.9-1.45-2.348Z"
    />
  </Svg>
)
