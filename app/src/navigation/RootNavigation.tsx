import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { navigationRef } from './NavigationServices'
import { UserNavigation } from './UserNavigation'

export const RootNavigation = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <UserNavigation />
    </NavigationContainer>
  )
}
