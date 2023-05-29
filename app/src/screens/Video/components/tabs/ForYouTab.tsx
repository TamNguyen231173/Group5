import React from 'react'
import { Block } from '@components'
import { Player } from '../video_player'
import { ToastAndroid } from 'react-native'

export const ForYouTab: React.FC = () => {
  return (
    <Block flex alignCenter justifyCenter>
      <Player
        onLoad={(data) => {
          console.log(data)

          ToastAndroid.show('Load video', ToastAndroid.SHORT)
        }}
        onEnd={() => {
          ToastAndroid.show('End video', ToastAndroid.SHORT)
        }}
        title="Mèo hoang đường "
        description="Con mèo này là con mèo"
        isBookmark={false}
        isLike={false}
        totalLike={10}
        source="https://player.vimeo.com/external/342571552.sd.mp4?s=e0df43853c25598dfd0ec4d3f413bce1e002deef&profile_id=165&oauth2_token_id=57447761"
        thumbnail="https://images.pexels.com/videos/2499611/free-video-2499611.jpg?fit=crop&w=1200&h=630&auto=compress&cs=tinysrgb"
      />
    </Block>
  )
}
