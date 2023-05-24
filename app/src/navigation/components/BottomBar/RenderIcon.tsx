import React, { FC } from 'react'
import { HomeDappIcon } from '@assets'
import { RenderIconProps } from '@utils/types'

// Render icon for the teacher role in the bottom bar
export const RenderIcon: FC<RenderIconProps> = ({ index, color }) => {
  switch (index) {
    case 0:
      return <HomeDappIcon color={color} />
    case 1:
      return <HomeDappIcon color={color} />
    case 2:
      return <HomeDappIcon color={color} />
    case 3:
      return <HomeDappIcon color={color} />
    default:
      return <HomeDappIcon color={color} />
  }
}
