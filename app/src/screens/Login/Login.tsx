import React, { useState, useEffect } from 'react'
import { ToastAndroid } from 'react-native'
import { TextInputApp } from '@components/common/TextInputApp'
import { Text, Container, Block, ButtonApp } from '@components'
import { normalize, useTheme } from '@themes'
import { Image } from '@components'
import { images } from '@assets/images'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { routes } from '@navigation'
import { LoginBody, User, authToken, useLoginMutation, userData } from '@reduxs'
import { navigate } from '@navigation/NavigationServices'
import { useDispatch } from 'react-redux'

export const Login = () => {
  const [email, setemail] = useState('')
  const [password, setpassword] = useState('')
  const [emailError, setemailError] = useState('')
  const [passwordError, setpasswordError] = useState('')
  let formError = false
  const validate = () => {
    console.log('aloooo111')
    if (email.length == 0) {
      setemailError('Email không được để trống')
      formError = true
    } else if (!emailRegex.test(email)) {
      setemailError('Email không đúng định dạng')
      formError = true
    } else {
      setemailError('')
      formError = false
    }
    if (password.length < 8) {
      setpasswordError('Password phải đủ 8 ký tự')
      formError = true
    } else {
      setpasswordError('')
      formError = false
    }
  }
  useEffect(() => {
    setemailError('')
    formError = false
  }, [email])
  useEffect(() => {
    setpasswordError('')
    formError = false
  }, [password])

  const { colors } = useTheme()
  const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
  const [login] = useLoginMutation()
  const dispatch = useDispatch()
  const ValidateFunc = () => {
    console.log('aloooo1112')
    validate()
    if (!formError) {
      handleLogin()
    }
  }
  const handleLogin = async () => {
    const loginObject: LoginBody = {
      email,
      password,
    }
    const response = await login(loginObject)
    const dataResponse: any = response
    if (dataResponse.error) {
      ToastAndroid.show(dataResponse.error.data.message, ToastAndroid.LONG)
    } else {
      const token = dataResponse.data.access_token
      const user: User = dataResponse.data.user
      dispatch(authToken(token))
      dispatch(userData(user))
      navigate(routes.main)
    }
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
              {emailError.length > 0 && (
                <Text
                  paddingHorizontal={10}
                  color={colors.redLight}
                  marginTop={5}
                >
                  {emailError}
                </Text>
              )}
            </Block>
            <Block marginTop={10}>
              <TextInputApp
                placeholder="Password"
                onChangeText={setpassword}
                value={password}
                type="password"
              />
              {passwordError.length > 0 && (
                <Text
                  paddingHorizontal={10}
                  color={colors.redLight}
                  marginTop={5}
                >
                  {passwordError}
                </Text>
              )}
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
                onClick={ValidateFunc}
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
            <TouchableOpacity
              activeOpacity={0.5}
              onPress={() => {
                navigate(routes.register)
              }}
            >
              <Text size={16} fontFamily="bold">
                Sign up{' '}
              </Text>
            </TouchableOpacity>
          </Block>
        </Block>
      </Block>
    </Container>
  )
}
