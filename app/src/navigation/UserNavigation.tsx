import React, { FC } from 'react'
import { BottomBar } from './components'
import { routes } from './utils'
import { Home } from '@screens'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack'

const BottomTabs = createBottomTabNavigator()
const User = createStackNavigator()

const BottomTabsNavigation: FC<{}> = () => {
  return (
    <BottomTabs.Navigator
      initialRouteName={routes.home}
      detachInactiveScreens={true}
      screenOptions={{
        headerShown: false,
      }}
      tabBar={(props) => <BottomBar {...props} />}
    >
      <BottomTabs.Screen key={routes.home} name="Trang chủ" component={Home} />
      <BottomTabs.Screen key={routes.home} name="Lịch sử" component={Home} />
      <BottomTabs.Screen key={routes.home} name="Cài đặt" component={Home} />
    </BottomTabs.Navigator>
  )
}

export const UserNavigation = () => {
  return (
    <User.Navigator
      initialRouteName={routes.main}
      detachInactiveScreens={true}
      screenOptions={{
        headerShown: false,
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}
    >
      <User.Screen name={routes.main} component={BottomTabsNavigation} />
    </User.Navigator>
  )
}
