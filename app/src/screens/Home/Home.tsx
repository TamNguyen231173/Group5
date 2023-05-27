import React from 'react'
import { Text, Container, Block, ButtonApp } from '@components'

export const Home = () => {
  return (
    <Container>
      <Block flex backgroundColor="#fff" alignCenter justifyCenter>
        <Text size={20} lineHeight={20}>
          HomeScreen
        </Text>
        <ButtonApp
          type={'primary'}
          title={'primary'}
          onClick={() => {
            console.log('Check')
          }}
        />
      </Block>
    </Container>
  )
}
