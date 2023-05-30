import React, { useState } from 'react'
// import { Dimensions, StatusBar } from 'react-native';
import { Container, Block } from '@components'
import { TextInputApp } from '@components/common/TextInputApp'
import { useTheme } from '@themes';
import { HeaderCustom } from './component';


export const Home = () => {
  const [email, setemail] = useState("");
  const { colors } = useTheme();

  return (
    <Container statusColor={colors.greenDark}>
      <HeaderCustom type='home' onPress={() => { }} />
      <Block flex backgroundColor="#fff" alignCenter justifyCenter>
        <TextInputApp placeholder='haha' onChangeText={(text) => {
          setemail(text);
        }}
          value={email}
          type='password' />
   
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
