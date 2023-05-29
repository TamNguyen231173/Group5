export interface IPlayerProps {
  title: string
  description: string
  source: string
  thumbnail: string
  isBookmark: boolean
  isLike: boolean
  totalLike: number
  videoStyle?: ViewStyle
  onEnd?: () => void
  onLoad?: (data: OnLoadData) => void
  onButtonControlClick?: (isPlay: boolean) => void
}

export interface VideoNaturalSize {
  height: number
  width: number
  orientation: 'portrait' | 'landscape'
}
