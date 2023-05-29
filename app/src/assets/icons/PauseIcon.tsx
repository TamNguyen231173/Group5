import * as React from 'react'
import Svg, { SvgProps, Path } from 'react-native-svg'
const PauseIcon = (props: SvgProps) => (
  <Svg width={42} height={42} fill="none" {...props}>
    <Path
      fill="#fff"
      fillOpacity={0.58}
      d="M14.875 0h-8.75A2.628 2.628 0 0 0 3.5 2.625v36.75A2.628 2.628 0 0 0 6.125 42h8.75a2.628 2.628 0 0 0 2.625-2.625V2.625A2.628 2.628 0 0 0 14.875 0ZM35.875 0h-8.75A2.628 2.628 0 0 0 24.5 2.625v36.75A2.628 2.628 0 0 0 27.125 42h8.75a2.628 2.628 0 0 0 2.625-2.625V2.625A2.628 2.628 0 0 0 35.875 0Z"
    />
  </Svg>
)
export default PauseIcon
