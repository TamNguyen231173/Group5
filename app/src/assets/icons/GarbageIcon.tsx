import * as React from 'react'
import Svg, { SvgProps, Path } from 'react-native-svg'
export const GarbageIcon = (props: SvgProps) => (
  <Svg width={24} height={25} fill="none" {...props}>
    <Path
      stroke="#666C8E"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M5 8.663v10a4 4 0 0 0 4 4h6a4 4 0 0 0 4-4v-10m-5 3v6m-4-6v6m6-12-1.406-2.11a2 2 0 0 0-1.664-.89h-1.86a2 2 0 0 0-1.664.89L8 5.663m8 0H8m8 0h5m-13 0H3"
    />
  </Svg>
)
