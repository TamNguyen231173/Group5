import React, { FC } from 'react'
import { BottomBar } from './components'
import { routes } from './utils'
import { Home, Bookmark, Category, Search, User } from '@screens'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack'

const BottomTabs = createBottomTabNavigator()
const UserStack = createStackNavigator()

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
      <BottomTabs.Screen key={routes.home} name="Home" component={Home} />
      <BottomTabs.Screen key={routes.home} name="Category" component={Category} />
      <BottomTabs.Screen key={routes.home} name="Search" component={Search} />
      <BottomTabs.Screen key={routes.home} name="Bookmark" component={Bookmark} />
      <BottomTabs.Screen key={routes.home} name="User" component={User} />
    </BottomTabs.Navigator>
  )
}

export const UserNavigation = () => {
  return (
    <UserStack.Navigator
      initialRouteName={routes.main}
      detachInactiveScreens={true}
      screenOptions={{
        headerShown: false,
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}
    >
      <UserStack.Screen name={routes.main} component={BottomTabsNavigation} />
    </UserStack.Navigator>
  )
}
