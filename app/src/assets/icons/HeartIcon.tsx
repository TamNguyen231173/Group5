import * as React from 'react'
import Svg, { SvgProps, Path } from 'react-native-svg'
export const HeartIcon = (props: SvgProps) => (
  <Svg width={42} height={42} fill="none" {...props}>
    <Path
      fill="#fff"
      stroke="#fff"
      strokeWidth={2}
      d="m7.789 24.34 12.526 11.767c.325.305.487.457.685.457.198 0 .36-.152.685-.457L34.21 24.339c.066-.062.1-.092.127-.12a9 9 0 0 0 .94-11.96l-.107-.138-.541-.698c-3.445-4.44-10.358-3.695-12.778 1.376a.944.944 0 0 1-1.704 0c-2.42-5.071-9.333-5.815-12.778-1.376l-.541.698a9 9 0 0 0 .96 12.219Z"
    />
  </Svg>
)
