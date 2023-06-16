import React, { useEffect, useState, useRef } from 'react'
import { Block } from '@components'
import { MemoPlayer } from '../video_player'
import { ToastAndroid, Dimensions, Text } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import { heightOfTabBar } from '@screens/Video/constant'
import { useLazyGeVideoPaginationQuery, Video } from '@reduxs'

export const ForYouTab: React.FC = ({ navigation, route }: any) => {
  const { width, height } = route.params
  const [currentVideoIndex, setCurrentVideoIndex] = React.useState(0)
  const [isUserDrag, setIsUserDrag] = React.useState(false)

  var per = 10;
  const [listVideo, setListVideo] = useState<Video[]>([]);
  const [geVideoPagination] = useLazyGeVideoPaginationQuery();
  const [isLoading, setLoading] = useState(true);
  const [isLoadMore, setisLoadMore] = useState(1);
  const [page, setPage] = useState(1);

  const flatListRef = useRef(null);
  const [positions, setPositions] = useState({});

  useEffect(() => {
    const getAPI = async () => {
      console.log("page: " + page);

      const { data, isLoading } = await geVideoPagination({ page: page, per_page: per });
      // console.log(data.data);
      setListVideo((prev) => [...prev, ...data?.data])
      setLoading(isLoading);
      setisLoadMore(listVideo.length == 0 ? -1 : listVideo.length - 2);
      console.log(isLoadMore, currentVideoIndex);

    }
    getAPI();
    // console.log(listVideo);

  }, [currentVideoIndex == isLoadMore])


  const listVideoWithRef = React.useMemo(() => {
    // console.log(listVideo);

    return listVideo.map((item) => {
      return { ...item, ref: React.createRef<any>() }
    })
  }, [listVideo.length])

  const onViewableItemsChanged = ({ changed }: { changed: any }) => {
    // console.log(changed);
    setCurrentVideoIndex(changed[0].index);
    console.log(currentVideoIndex);
    if(currentVideoIndex == listVideo.length - 2) {
      setPage(page + 1);
    }
    listVideoWithRef.forEach((item, index) => {

      if (index === changed[0].index) {
        console.log('play ' + index)
        item.ref.current.play()

        setCurrentVideoIndex(changed[0].index);
        //get current video index

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

  const handleItemLayout = (layout, index) => {
    const { x, y, width, height } = layout;
    setPositions(prevPositions => ({
      ...prevPositions,
      [index]: { x, y, width, height },
    }));
    console.log(positions);

  };
  const _renderItem = React.useCallback(
    ({ index, item }: any) => {
      return (
        <Block onLayout={event => handleItemLayout(event.nativeEvent.layout, index)}>
          <MemoPlayer
            ref={item.ref}
            dimensionParentLayout={{ width, height }}
            videoStyle={{
              width: Dimensions.get('window').width,
              height: Dimensions.get('window').height - heightOfTabBar - height,
            }}
            onLoad={(data) => { }}
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
        </Block>
      )
    },
    [listVideo],
  )

  return (
    <Block flex alignCenter justifyCenter>
      {
        isLoading ?
          <Text>Loading</Text>
          :
          <FlatList
            ref={flatListRef}
            style={{
              flex: 1,
            }}
            showsVerticalScrollIndicator={false}
            data={listVideoWithRef}
            initialNumToRender={3}
            // keyExtractor={(item) => 'Item_'.concat(item._id)}
            keyExtractor={(item, index) => String(index)}
            renderItem={_renderItem}
            snapToAlignment="start"
            removeClippedSubviews={true}
            maxToRenderPerBatch={3}
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
      }
    </Block>
  )
}
