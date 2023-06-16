import { BackIcon, BlackSearchIcon } from '@assets'
import { Block, Container, Text, TextInput } from '@components'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import React, { useEffect, useState } from 'react'
import { FollowingTab, ForYouTab } from './components'
import { TopTabV2 } from '@navigation/components/TopTab'
import { fontFamilySetup, normalize, useTheme } from '@themes'
import { goBack } from '@navigation/NavigationServices'
import { useGeVideoPaginationQuery } from '@reduxs'

export interface DimensionLayout {
  width: number
  height: number
}

const Tab = createMaterialTopTabNavigator()

export const Video: React.FC = () => {
  const { colors } = useTheme()

  const [searchValue, setSearchValue] = React.useState<string>('')
  const [dimensionsTopLayout, setDimensionTopLayout] =
    React.useState<DimensionLayout>()

  const handleSearchValue = (newValue: string) => {
    setSearchValue(newValue)
  }

  return (
    <Container>
      <Block flex backgroundColor="white">
        {/* header */}
        <Block
          onLayout={(e) => {
            // console.log(e.nativeEvent.layout)
            setDimensionTopLayout(e.nativeEvent.layout)
          }}
          row
          alignCenter
          space="between"
          paddingHorizontal={20}
          paddingTop={10}
        >
          <BackIcon
            onPress={() => {
              goBack()
            }}
          />
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
          <BlackSearchIcon />
        </Block>

        {/* tab navigator */}
        {!!dimensionsTopLayout?.height && !!dimensionsTopLayout?.width && (
          <Tab.Navigator
            screenOptions={{}}
            tabBar={(props) => <TopTabV2 {...props} />}
          >
            <Tab.Screen
              name="For You"
              component={ForYouTab}
              initialParams={dimensionsTopLayout}
            />
            <Tab.Screen
              name="Following"
              component={FollowingTab}
              initialParams={dimensionsTopLayout}
            />
          </Tab.Navigator>
        )}
      </Block>
    </Container>
  )
}
