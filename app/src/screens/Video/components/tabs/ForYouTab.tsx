import React from 'react'
import { Block } from '@components'
import { MemoPlayer } from '../video_player'
import { ToastAndroid, Dimensions } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import { heightOfTabBar, listVideo } from '@screens/Video/constant'

export const ForYouTab: React.FC = ({ navigation, route }: any) => {
  const { width, height } = route.params
  const [currentVideoIndex, setCurrentVideoIndex] = React.useState(0)
  const [isUserDrag, setIsUserDrag] = React.useState(false)

  const listVideoWithRef = React.useMemo(() => {
    return listVideo.map((item) => {
      return { ...item, ref: React.createRef<any>() }
    })
  }, [])

  // console.log(listVideoWithRef)

  const onViewableItemsChanged = ({ changed }: { changed: any }) => {
    listVideoWithRef.forEach((item, index) => {
      if (index === changed[0].index) {
        console.log('play ' + index)
        item.ref.current.play()
      } else {
        if (item.ref.current !== null) {
          item.ref.current.stop()
        }
      }
    })
  }

  const viewabilityConfigCallbackPairs = React.useRef([
    { onViewableItemsChanged },
  ])

  const _renderItem = React.useCallback(
    ({ index, item }: any) => {
      return (
        <MemoPlayer
          ref={item.ref}
          isPlay={currentVideoIndex === index && !isUserDrag}
          dimensionParentLayout={{ width, height }}
          videoStyle={{
            width: Dimensions.get('window').width,
            height: Dimensions.get('window').height - heightOfTabBar - height,
          }}
          onLoad={(data) => {}}
          onEnd={() => {
            // ToastAndroid.show('End video', ToastAndroid.SHORT)
          }}
          title={item.title}
          description={item.description}
          isBookmark={false}
          isLike={false}
          totalLike={item.likes}
          source={item.url}
          thumbnail={item.thumbnail}
        />
      )
    },
    [listVideo],
  )

  return (
    <Block flex alignCenter justifyCenter>
      <FlatList
        style={{
          flex: 1,
        }}
        showsVerticalScrollIndicator={false}
        data={listVideoWithRef}
        initialNumToRender={4}
        keyExtractor={(item) => 'Item_'.concat(item._id)}
        renderItem={_renderItem}
        snapToAlignment="start"
        viewabilityConfigCallbackPairs={viewabilityConfigCallbackPairs.current}
        onScrollEndDrag={() => {
          setIsUserDrag(false)
        }}
        onScrollBeginDrag={() => {
          setIsUserDrag(true)
        }}
        decelerationRate={'fast'}
        snapToInterval={
          Dimensions.get('window').height - heightOfTabBar - height
        }
      />
    </Block>
  )
}
