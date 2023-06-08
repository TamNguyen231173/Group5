import { DimensionLayout } from '@screens/Video/Video'
import { Ref } from 'react'
import { ViewStyle } from 'react-native/Libraries/StyleSheet/StyleSheetTypes'

interface IPlayerProps {
  title: string
  description: string
  source: string
  thumbnail: string
  isPlay?: boolean
  isBookmark: boolean
  isLike: boolean
  totalLike: number
  videoStyle?: ViewStyle
  onEnd?: () => void
  onLoad?: (data: OnLoadData) => void
  onButtonControlClick?: (isPlay: boolean) => void
  dimensionParentLayout: DimensionLayout
}
