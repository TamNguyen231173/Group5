import React, {useEffect} from 'react'
import { Text, Container, Block, Button } from '@components'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import { Post } from './Post'
import { Video } from './Video'
import { Dimensions } from 'react-native'
import { TopBar } from './TopBar'
import {Animated} from "react-native"

const TopTab = createMaterialTopTabNavigator()
const windowWidth = Dimensions.get('window').width
const windowHeight = Dimensions.get('window').height
import {TabNavigator} from './Test'
export const Bookmark = () => {
  return (
    <Container>
      <TopTab.Navigator
        initialRouteName="Video"
        tabBar={(props) => <TopBar {...props} />}
     
      >
        <TopTab.Screen name="Video" component={Video} />
        <TopTab.Screen name="Post" component={Post} />
      </TopTab.Navigator>
    </Container>
  )
}
