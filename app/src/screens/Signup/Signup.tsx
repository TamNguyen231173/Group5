import React, { useState } from 'react'
import { TextInputApp } from '@components/common/TextInputApp'
import { Text, Container, Block, ButtonApp } from '@components'
import styles from '@components/base/Block/styles'
import { fontFamily } from '@assets/fonts'
import { fontFamilySetup, useTheme } from '@themes'
import { Image } from '@components'
import { FacebookIcon } from '@assets/icons/FacebookIcon'
import { GoogleIcon } from '@assets/icons/GoogleIcon'
import { images } from '@assets/images'
export const Signup = () => {
  const [email, setemail] = useState('')
  const [password, setpassword] = useState('')
  const { colors } = useTheme()
  return (
    <Container backgroundColor="#fff">
        <Block space='between'>

        
      <Text padding={20} size={22} lineHeight={26} fontFamily="bold">
        Welcome to Animal App  👋
      </Text>
      <Text
        paddingLeft={20}
        size={16}
        lineHeight={24}
        fontFamily="semiBold"
       
      >
        Bạn muốn lưu lại các con vật yêu thích.{'\n'}Đăng nhập ngay!
      </Text>
      <Block padding={20} marginTop={11}>
      <Block>
          <TextInputApp
            placeholder="Username"
            onChangeText={(text) => {
              setemail(text)
            }}
            value={email}
            type="user"
          />
        </Block>
        <Block marginTop={10}>
          <TextInputApp
            placeholder="Email Address"
            onChangeText={(text) => {
              setemail(text)
            }}
            value={email}
            type="email"
          />
        </Block>
        <Block marginTop={10}>
          <TextInputApp
            placeholder="Password"
            onChangeText={(text) => {
              setpassword(text)
            }}
            value={password}
            type="password"
          />
        </Block>
        <Block marginTop={10}>
          <TextInputApp
            placeholder="Reapeat Password"
            onChangeText={(text) => {
              setpassword(text)
            }}
            value={password}
            type="password"
          />
        </Block>
     
      </Block>

      <Block alignCenter marginTop={15}>
        <Block width={250} height={50} alignCenter>
          <ButtonApp
            type={'primary'}
            title={'Sign up'}
            onClick={() => {
              console.log('Check')
            }}
          />
        </Block>
      </Block>
      </Block>
    
     

      <Block alignCenter padding={20} marginTop={90}>
        <Block row>
          <Text size={16} fontFamily="bold" color={colors.greyDark}>
          Already have an account? {' '}
          </Text>
          <Text size={16} fontFamily="bold">
          Sign In{' '}
          </Text>
        </Block>
      </Block>
    </Container>
  )
}
