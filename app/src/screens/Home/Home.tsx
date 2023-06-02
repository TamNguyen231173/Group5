import React, { useState } from 'react'
import { Text, Container, Block, ButtonApp, TextInput } from '@components'
import { TextInputApp } from '@components/common/TextInputApp'

export const Home = () => {
  const [email, setemail] = useState('')

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
        <TextInputApp
          placeholder="haha"
          onChangeText={(text) => {
            setemail(text)
          }}
          value={email}
          type="email"
        />
      </Block>
    </Container>
  )
}
