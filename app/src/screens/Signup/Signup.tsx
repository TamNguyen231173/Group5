
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
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const { colors } = useTheme();
  return (
    <Container backgroundColor="#fff">

      <Text padding={20} size={22} lineHeight={26} fontFamily='bold'  >
        Welcome Back 👋
      </Text>
      <Text paddingLeft={20} size={16} lineHeight={24} fontFamily='regular' fontWeight='600'>
        Tìm hiểu động vật ngay thôi để tăng thêm kiến thức, tăng sự đồng cảm!
      </Text>
      <Block padding={20} marginTop={11}>
        <Block>
          <TextInputApp placeholder='leviettinh@gmail.com' onChangeText={(text) => {
            setemail(text);
          }}
            value={email}
            type='email' />
        </Block>
        <Block marginTop={10}>
          <TextInputApp placeholder='123456123' onChangeText={(text) => {
            setpassword(text);
          }}
            value={password}
            type='password' />
        </Block>
        <Block alignEnd marginTop={12}>
          <Text size={14} lineHeight={17} color='rgba(124, 130, 161, 1)'>
            Forgot Password?
          </Text>
        </Block>
      </Block>

      <Block alignCenter marginTop={15}>
        <Block width={250} height={50} alignCenter>
          <ButtonApp
            type={'primary'}
            title={'Login'}
            onClick={() => {
              console.log('Check')
            }}
          />
        </Block>
      </Block>

      <Text size={16} marginTop={25} alignSelf='center' color='rgba(124, 130, 161, 1)' fontWeight='700' fontFamily='regular'>or</Text>
      <Block padding={20} marginTop={25} >
        <Block height={46} row backgroundColor={colors.white} borderColor={colors.greyLighter} borderWidth={1} alignCenter justifyCenter>
          <Block absolute left={0}>
            {/* <FacebookIcon  /> */}
            <Image source={images.facebookIcon} width={40} height={40}></Image>

          </Block>
          

          <Text  size={16} fontFamily='regular' color={colors.greyDark}>Sign In with Google</Text>
        </Block>
        <Block alignCenter height={46} marginTop={10} row backgroundColor={colors.white} borderColor={colors.greyLighter} justifyCenter>
          <Block absolute left={0}>
              {/* <GoogleIcon></GoogleIcon> */}
             <Image source={images.googleIcon} width={40} height={40}></Image>
          </Block>
         
          <Text size={16} fontFamily='regular' color={colors.greyDark}>Sign In with Facebook</Text>
        </Block>
      </Block>

      <Block alignCenter padding={20} >
        <Block row >
          <Text size={16} fontFamily='regular'>Don't have an account? </Text>
          <Text size={16} fontFamily='bold' >Sign up </Text>
        </Block>
      </Block>






    </Container>

  )
}



