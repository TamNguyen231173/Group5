import { useState, useEffect } from 'react'
import { Animated, View, TouchableOpacity, Dimensions } from 'react-native'
import { MaterialTopTabBarProps } from '@react-navigation/material-top-tabs'
import { fontFamilySetup, useTheme } from '@themes'
import { Text } from '@components'

const { width } = Dimensions.get('screen')
const ITEM_WIDTH = width * 0.23
const TabBarIndicator = ({ state }) => {
  const { colors } = useTheme()
  const [translateValue, setTranslateValue] = useState(
    new Animated.Value(ITEM_WIDTH),
  )
  const [itemWidth, setitemWidth] = useState(ITEM_WIDTH)

  useEffect(() => {
    slide()
  }, [state])
  const slide = () => {
    const toValue =
      state.routes[state.index].name === 'Video'
        ? 0 - ITEM_WIDTH * 0.5
        : ITEM_WIDTH * 0.5
    Animated.timing(translateValue, {
      toValue: toValue,
      duration: 300,
      useNativeDriver: true,
    }).start()
  }
  return (
    <Animated.View
      style={{
        position: 'absolute',
        width: itemWidth * 0.3,
        borderBottomColor: colors.greenDark,
        borderBottomWidth: 2,
        bottom: 0,
        transform: [{ translateX: translateValue }],
      }}
    />
  )
}
export const TopBar: React.FC<MaterialTopTabBarProps> = ({
  state,
  descriptors,
  navigation,
  position,
}) => {
  const { colors, font } = useTheme()
  return (
    <View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          backgroundColor: colors.white,
        }}
      >
        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key]
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
              ? options.title
              : route.name

          const isFocused = state.index === index
          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            })

            if (!isFocused && !event.defaultPrevented) {
              // The `merge: true` option makes sure that the params inside the tab screen are preserved
              navigation.navigate({ name: route.name, merge: true })
            }
          }

          const onLongPress = () => {
            navigation.emit({
              type: 'tabLongPress',
              target: route.key,
            })
          }

          // const inputRange = state.routes.map((_, i) => i)
          // const opacity = position.interpolate({
          //   inputRange,
          //   outputRange: inputRange.map((i) => (i === index ? 1 : 0)),
          // })
          //  const [measure, setmeasure] = useState([])
          // const buttonRef = useRef();
          const TabbarItem = () => {
            return (
              <TouchableOpacity
                accessibilityRole="button"
                accessibilityState={isFocused ? { selected: true } : {}}
                accessibilityLabel={options.tabBarAccessibilityLabel}
                testID={options.tabBarTestID}
                onPress={onPress}
                onLongPress={onLongPress}
                style={{
                  width: ITEM_WIDTH,
                }}
              >
                <Animated.Text
                  style={[
                    {
                      color: isFocused ? colors.greenDark : colors.greyLight,
                      fontFamily: fontFamilySetup.bold,
                      fontSize: 22,
                      textAlign: 'center',
                      paddingBottom: 5,
                    },
                  ]}
                >
                  {label}
                </Animated.Text>
              </TouchableOpacity>
            )
          }
          return <TabbarItem key={index}></TabbarItem>
        })}

        <TabBarIndicator state={state} />
      </View>
    </View>
  )
}
