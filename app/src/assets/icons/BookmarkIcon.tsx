import * as React from 'react'
import Svg, { SvgProps, Path } from 'react-native-svg'
export const BookmarkIcon = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    fill={props.color ? props.color : 'none'}
    {...props}
  >
    <Path
      stroke={props.stroke ? props.stroke : '#000'}
      strokeWidth={2}
      d="M4 9c0-2.828 0-4.243.879-5.121C5.757 3 7.172 3 10 3h4c2.828 0 4.243 0 5.121.879C20 4.757 20 6.172 20 9v6.828c0 2.683 0 4.024-.844 4.435-.845.41-1.9-.419-4.01-2.076l-.675-.531c-1.186-.932-1.78-1.398-2.471-1.398-.692 0-1.285.466-2.471 1.398l-.676.53c-2.11 1.658-3.164 2.487-4.009 2.077C4 19.853 4 18.51 4 15.828V9Z"
    />
  </Svg>
)
