import * as React from 'react'
import Svg, { SvgProps, Path } from 'react-native-svg'
const LargeBookmarkIcon = (props: SvgProps) => (
  <Svg width={42} height={42} fill="none" {...props}>
    <Path
      stroke="#fff"
      strokeWidth={4}
      d="M7 15.75c0-4.95 0-7.425 1.538-8.962C10.075 5.25 12.55 5.25 17.5 5.25h7c4.95 0 7.425 0 8.962 1.538C35 8.325 35 10.8 35 15.75v11.948c0 4.696 0 7.044-1.477 7.762-1.478.718-3.324-.732-7.017-3.634l-1.181-.928c-2.076-1.631-3.114-2.447-4.325-2.447-1.21 0-2.249.816-4.325 2.447l-1.181.928c-3.693 2.902-5.539 4.352-7.016 3.634C7 34.742 7 32.394 7 27.698V15.75Z"
    />
  </Svg>
)
export default LargeBookmarkIcon
