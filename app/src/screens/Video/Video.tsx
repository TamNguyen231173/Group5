import { BackIcon, BlackSearchIcon } from '@assets'
import { Block, Container, TextInput } from '@components'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import React from 'react'
import { Pressable } from 'react-native'
import { FollowingTab, ForYouTab } from './components'
import { TopTabV2 } from '@navigation/components/TopTab'
import { fontFamilySetup, normalize, useTheme } from '@themes'
import { goBack } from '@navigation/NavigationServices'

const Tab = createMaterialTopTabNavigator()

export const Video: React.FC = () => {
  const { colors } = useTheme()

  const [searchValue, setSearchValue] = React.useState<string>('')

  const handleSearchValue = (newValue: string) => {
    setSearchValue(newValue)
  }

  return (
    <Container>
      <Block flex backgroundColor="white">
        {/* header */}
        <Block
          row
          alignCenter
          space="between"
          paddingHorizontal={20}
          paddingTop={10}
        >
          <Pressable
            onPress={() => {
              goBack()
            }}
          >
            <BackIcon />
          </Pressable>
          <TextInput
            inputStyle={{
              fontSize: 12,
              fontFamily: fontFamilySetup.light,
              lineHeight: 15.6,
            }}
            onChangeText={handleSearchValue}
            value={searchValue}
            placeholder="Bạn muốn tìm gì?"
            containerStyle={{
              flex: 1,
              marginTop: normalize.v(5),
              marginEnd: normalize.h(5),
            }}
            inputContainerStyle={{
              height: 25,
              borderRadius: 16,
            }}
          />
          <Pressable>
            <BlackSearchIcon />
          </Pressable>
        </Block>

        {/* tab navigator */}
        <Tab.Navigator
          screenOptions={{}}
          tabBar={(props) => <TopTabV2 {...props} />}
        >
          <Tab.Screen name="For You" component={ForYouTab} />
          <Tab.Screen name="Following" component={FollowingTab} />
        </Tab.Navigator>
      </Block>
    </Container>
  )
}
