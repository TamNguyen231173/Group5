import React, { useEffect, useState } from 'react'
import { Text, Container, Block } from '@components'
import { Platform, UIManager, LayoutAnimation, View } from 'react-native'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import { useTheme } from '@themes'
import { ArrowRightIcon } from '@assets'
interface Category {
  isExpanded: boolean
  category_name: string
  subcategory: Array<{ id: number; val: string }>
}
interface ExpandableProps {
  item: Category
  onClickFunction?: () => void
}
const ExpandableComponent: React.FC<ExpandableProps> = ({
  item,
  onClickFunction,
}) => {
  const [layoutHeight, setlayoutHeight] = useState(0)

  useEffect(() => {
    if (item.isExpanded) {
      setlayoutHeight(null)
    } else {
      setlayoutHeight(0)
    }
  }, [item.isExpanded])

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onClickFunction}
      style={{
        backgroundColor: 'white',
        padding: 20,
        borderBottomColor: '#E9EDEF',
        borderBottomWidth: 1,
      }}
    >
      <Text size={17} fontFamily={'bold'}>
        {item.category_name}
      </Text>
      <View style={{ height: layoutHeight, overflow: 'hidden' }}>
        {item.subcategory.map((item, index) => {
          return (
            <TouchableOpacity
              key={index}
              style={{
                padding: 10,
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
              onPress={() =>
                console.log('Id: ' + item.id + ' val: ' + item.val)
              }
            >
              <Text size={16} lineHeight={18}>
                {item.val}
              </Text>
              <ArrowRightIcon></ArrowRightIcon>
            </TouchableOpacity>
          )
        })}
      </View>
    </TouchableOpacity>
  )
}

export const Category = () => {
  const [listDataSource, setListDataSource] = useState(data)
  const [multiSelect, setMultiSelect] = useState(false)
  const { colors } = useTheme()
  if (Platform.OS === 'android') {
    UIManager.setLayoutAnimationEnabledExperimental(true)
  }

  const updateLayout = (index: number) => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut)
    const array = [...listDataSource]
    if (multiSelect) {
      // If multiple select is enabled
      array[index]['isExpanded'] = !array[index]['isExpanded']
    } else {
      // If single select is enabled
      array.map((value, placeindex) =>
        placeindex === index
          ? (array[placeindex]['isExpanded'] = !array[placeindex]['isExpanded'])
          : (array[placeindex]['isExpanded'] = false),
      )
    }
    setListDataSource(array)
  }
  return (
    <Container>
      <Block flex backgroundColor="#fff" paddingBottom={90}>
        <Block row padding={10} space="between">
          <Text
            size={18}
            lineHeight={18}
            color={colors.greenDark}
            fontFamily="semiBold"
          >
            Category
          </Text>
          <TouchableOpacity
            style={{}}
            onPress={() => setMultiSelect(!multiSelect)}
          >
            <Text>{multiSelect ? 'Mode: Single' : 'Mode Multiple'}</Text>
          </TouchableOpacity>
        </Block>

        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{ backgroundColor: colors.white }}
        >
          {listDataSource.map((item, key) => (
            <ExpandableComponent
              key={item.category_name}
              onClickFunction={() => {
                updateLayout(key)
              }}
              item={item}
            ></ExpandableComponent>
          ))}
        </ScrollView>
      </Block>
    </Container>
  )
}
const data = [
  {
    isExpanded: false,
    category_name: 'Lưỡng cư',
    subcategory: [
      { id: 1, val: 'Ếch thủy tinh Centrolene sabini' },
      { id: 2, val: 'Ếch Hyloscirtus princecharlesi' },
      { id: 3, val: 'Kỳ giông Bolitoglossa splendida' },
    ],
  },
  {
    isExpanded: false,
    category_name: 'Cá',
    subcategory: [
      { id: 4, val: 'Cá hắc kỳ' },
      { id: 5, val: 'Cá neon đen' },
      { id: 6, val: 'Cá tetra đuôi đỏ' },
    ],
  },
  {
    isExpanded: false,
    category_name: 'Bò sát',
    subcategory: [
      { id: 7, val: 'Thằn lằn Agama đầu đỏ' },
      { id: 8, val: 'Rùa Iguana' },
      { id: 9, val: 'Rắn độc Viper' },
    ],
  },
  {
    isExpanded: false,
    category_name: 'Chim',
    subcategory: [
      { id: 10, val: 'Chim Sáo' },
      { id: 11, val: 'Chim Vẹt' },
      { id: 12, val: 'Chim Vàng Anh' },
    ],
  },
  {
    isExpanded: false,
    category_name: 'Động vật có vú',
    subcategory: [
      { id: 13, val: 'Hươu sao Việt Nam' },
      { id: 14, val: 'Khỉ đuôi dài' },
      { id: 15, val: 'Trâu rừng' },
    ],
  },
  {
    isExpanded: false,
    category_name: 'Không xương sống',
    subcategory: [
      { id: 16, val: 'Mực' },
      { id: 17, val: 'Giun' },
      { id: 18, val: 'Bạch tuộc' },
    ],
  },
]
