import React from 'react'
import { Text, Container, Block } from '@components'

export const Home = () => {
  return (
    <Container>
      <Block flex backgroundColor="#fff" alignCenter justifyCenter>
        <Text size={20} lineHeight={20}>
          HomeScreen
        </Text>
      </Block>
    </Container>
  )
}
