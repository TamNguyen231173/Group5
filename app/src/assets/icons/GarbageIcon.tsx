import * as React from 'react'
import Svg, { SvgProps, Path } from 'react-native-svg'
export const GarbageIcon = (props: SvgProps) => (
  <Svg width={23} height={25} fill="none" {...props}>
    <Path
      stroke="#707B81"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M4.776 8.448v9.731c0 2.15 1.71 3.893 3.821 3.893h5.731c2.11 0 3.821-1.743 3.821-3.893V8.448m-4.776 2.92v5.838m-3.82-5.839v5.839m5.73-11.678L13.94 3.476a1.901 1.901 0 0 0-1.59-.867h-1.775c-.64 0-1.236.325-1.59.867L7.642 5.528m7.642 0H7.642m7.642 0h4.776m-12.418 0H2.866"
    />
  </Svg>
)
