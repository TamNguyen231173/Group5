import React from 'react'
import { Container } from '@components'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import { Post } from './Post'
import { Video } from './Video'
import { TopBar } from './TopBar'
const TopTab = createMaterialTopTabNavigator()
export const Bookmark = () => {
  return (
    <Container >
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
