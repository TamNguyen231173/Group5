import { BackIcon, BlackSearchIcon } from '@assets'
import { Block, Container } from '@components'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import React from 'react'
import { Pressable } from 'react-native'
import { FollowingTab, ForYouTab } from './components'
import { TopTabV2 } from '@navigation/components/TopTab'
import { useTheme } from '@themes'

const Tab = createMaterialTopTabNavigator()

export const Video: React.FC = () => {
  const { colors } = useTheme()

  return (
    <Container>
      <Block flex padding={20} backgroundColor="white">
        {/* header */}
        <Block row alignCenter space="between">
          <Pressable>
            <BackIcon />
          </Pressable>
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
