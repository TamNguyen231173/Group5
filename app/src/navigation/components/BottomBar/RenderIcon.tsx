import React, { FC } from 'react'
import {
  HomeIcon,
  CategoryIcon,
  BookmarkIcon,
  UserIcon,
  SearchIcon,
} from '@assets'
import { RenderIconProps } from '@utils/types'

// Render icon for the teacher role in the bottom bar
export const RenderIcon: FC<RenderIconProps> = ({ index, color, stroke }) => {
  switch (index) {
    case 0:
      return <HomeIcon color={color} stroke={stroke} />
    case 1:
      return <CategoryIcon color={color} stroke={stroke} />
    case 2:
      return <SearchIcon color={color} stroke={stroke} />
    case 3:
      return <BookmarkIcon color={color} stroke={stroke} />
    case 4:
      return <UserIcon color={color} stroke={stroke} />
    default:
      return <HomeIcon color={color} stroke={stroke} />
  }
}
