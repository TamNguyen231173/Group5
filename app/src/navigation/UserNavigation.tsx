import React, { FC, useEffect } from 'react'
import { BottomBar } from './components'
import { routes } from './utils'
import {
  Home,
  Bookmark,
  Category,
  Search,
  User,
  DetailScreen,
  Login,
  Video,
  Signup,
  Verification,
} from '@screens'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack'

//

const BottomTabs = createBottomTabNavigator()
const UserStack = createStackNavigator()
const BottomTabsNavigation: FC<{}> = ({}) => {
  return (
    <BottomTabs.Navigator
      initialRouteName={routes.home}
      detachInactiveScreens={true}
      screenOptions={{
        tabBarHideOnKeyboard: true,
        headerShown: false,
      }}
      tabBar={(props) => <BottomBar {...props} />}
    >
      <BottomTabs.Screen
        key={routes.home}
        name={routes.home}
        component={Home}
      />
      <BottomTabs.Screen
        key={routes.category}
        name={routes.category}
        component={Category}
      />
      <BottomTabs.Screen
        key={routes.search}
        name={routes.search}
        component={Search}
      />
      <BottomTabs.Screen
        key={routes.bookmark}
        name={routes.bookmark}
        component={Bookmark}
      />
      <BottomTabs.Screen
        key={routes.user}
        name={routes.user}
        component={User}
      />
    </BottomTabs.Navigator>
  )
}

export const UserNavigation = () => {
  return (
    <UserStack.Navigator
      initialRouteName={routes.video}
      detachInactiveScreens={true}
      screenOptions={{
        headerShown: false,
        gestureEnabled: true,
        cardStyleInterpolator: CardStyleInterpolators.forBottomSheetAndroid,
      }}
    >
      <UserStack.Screen name={routes.main} component={BottomTabsNavigation} />
      <UserStack.Screen name="Search1" component={Search} />
      <UserStack.Screen name={routes.detail} component={DetailScreen} />
      <UserStack.Screen name={routes.video} component={Video} />
      <UserStack.Screen name={routes.login} component={Login} />
      <UserStack.Screen name={routes.register} component={Signup} />
      <UserStack.Screen name={routes.verification} component={Verification} />
    </UserStack.Navigator>
  )
}
