import React, { useState } from 'react'
import { TextInputApp } from '@components/common/TextInputApp'
import { Text, Container, Block, ButtonApp } from '@components'
import styles from '@components/base/Block/styles'
import { fontFamily } from '@assets/fonts'
import { fontFamilySetup, normalize, useTheme } from '@themes'
import { Image } from '@components'
import { FacebookIcon } from '@assets/icons/FacebookIcon'
import { GoogleIcon } from '@assets/icons/GoogleIcon'
import { images } from '@assets/images'
import { TouchableOpacity } from 'react-native-gesture-handler'
export const Login = () => {
  const [email, setemail] = useState('')
  const [password, setpassword] = useState('')
  const { colors } = useTheme()
  const handleLogin = () => {
    console.log(email)
    console.log(password)
  }
  const handleLoginGG = () => {}
  const handleLoginFB = () => {}
  return (
    <Container backgroundColor="#fff">
      <Block flex space="between" paddingBottom={30}>
        <Block>
          <Text
            paddingHorizontal={20}
            paddingTop={27}
            size={22}
            lineHeight={26}
            fontFamily="bold"
          >
            Welcome Back 👋
          </Text>
          <Text
            paddingLeft={20}
            paddingRight={18}
            marginTop={7}
            size={16}
            lineHeight={24}
            fontFamily="semiBold"
            fontWeight="600"
          >
            Tìm hiểu động vật ngay thôi để tăng thêm kiến thức, tăng sự đồng
            cảm!
          </Text>
          <Block padding={20} marginTop={11}>
            <Block>
              <TextInputApp
                placeholder="Email"
                onChangeText={setemail}
                value={email}
                type="email"
              />
            </Block>
            <Block marginTop={10}>
              <TextInputApp
                placeholder="Password"
                onChangeText={setpassword}
                value={password}
                type="password"
              />
            </Block>
            <TouchableOpacity
              activeOpacity={0.8}
              style={{ marginTop: normalize.v(12), alignItems: 'flex-end' }}
            >
              <Text
                size={14}
                lineHeight={17}
                fontWeight="500"
                color="rgba(124, 130, 161, 1)"
              >
                Forgot Password?
              </Text>
            </TouchableOpacity>
          </Block>

          <Block alignCenter marginTop={15}>
            <Block width={250} height={50} alignCenter>
              <ButtonApp
                type={'primary'}
                title={'Login'}
                onClick={handleLogin}
              />
            </Block>
          </Block>

          <Text
            size={16}
            marginTop={25}
            alignSelf="center"
            color="rgba(124, 130, 161, 1)"
            fontWeight="700"
            fontFamily="regular"
          >
            or
          </Text>
          <Block marginTop={25} paddingHorizontal={20}>
            <TouchableOpacity
              style={{
                height: 46,
                flexDirection: 'row',
                backgroundColor: colors.white,
                borderWidth: 1,
                justifyContent: 'center',
                alignItems: 'center',
                paddingHorizontal: normalize.h(25),
                borderRadius: 12,
                borderColor: colors.greyLighter,
              }}
              activeOpacity={0.5}
            >
              <Block>
                <Image
                  source={images.googleIcon}
                  width={30}
                  height={30}
                ></Image>
              </Block>
              <Block flex justifyCenter alignCenter>
                <Text size={16} fontFamily="bold" color={colors.greyDark}>
                  Sign In with Google
                </Text>
              </Block>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                height: 46,
                flexDirection: 'row',
                backgroundColor: colors.white,
                borderWidth: 1,
                justifyContent: 'center',
                alignItems: 'center',
                paddingHorizontal: normalize.h(25),
                borderRadius: 12,
                borderColor: colors.greyLighter,
                marginTop: 15,
              }}
              activeOpacity={0.5}
            >
              <Block>
                <Image
                  source={images.facebookIcon}
                  width={30}
                  height={30}
                ></Image>
              </Block>
              <Block flex justifyCenter alignCenter>
                <Text size={16} fontFamily="bold" color={colors.greyDark}>
                  Sign In with Facebook
                </Text>
              </Block>
            </TouchableOpacity>
          </Block>
        </Block>
        <Block alignCenter>
          <Block row>
            <Text size={16} fontFamily="bold" color={'rgba(85, 90, 119, 1)'}>
              Don't have an account?{' '}
            </Text>
            <Text size={16} fontFamily="bold">
              Sign up{' '}
            </Text>
          </Block>
        </Block>
      </Block>
    </Container>
  )
}
