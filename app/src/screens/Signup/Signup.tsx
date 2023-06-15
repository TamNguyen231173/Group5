import React, { useEffect, useState } from 'react'
import { TextInputApp } from '@components/common/TextInputApp'
import { Text, Container, Block, ButtonApp } from '@components'
import { ToastAndroid } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'
import { routes } from '@navigation'
import { useRegisterMutation } from '@reduxs'
import { RegisterBody } from '../../reduxs/api/type'
import { useTheme } from '@themes'
import { set, stubFalse } from 'lodash'
import { navigate } from '@navigation/NavigationServices'
export const Signup = () => {
  const [name, setname] = useState('')
  const [email, setemail] = useState('')
  const [password, setpassword] = useState('')
  const [passwordConfirm, setpasswordConfirm] = useState('')
  const [nameError, setnameError] = useState('')
  const [emailError, setemailError] = useState('')
  const [passWordError, setpassWordError] = useState('')
  const [passwordConfirmError, setpasswordConfirmError] = useState('')
  const [handleButtonType, sethandleButtonType] = useState<string>('outline')
  const [handleDisabled, sethandleDisabled] = useState(true)
  const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
  let formError = false
  useEffect(() => {
    if (name.length == 0) {
      setnameError('Username không được để trống')
      formError = true
    } else {
      setnameError('')
    }
    if (email.length == 0) {
      setemailError('Email không được để trống')
      formError = true
    } else if (!emailRegex.test(email)) {
      setemailError('Email không đúng định dạng')
      formError = true
    } else {
      setemailError('')
    }
    if (password.length == 0) {
      setpassWordError('Password không được để trống')
      formError = true
    } else if (password.length < 8) {
      setpassWordError('Password phải nhiều hơn 8 chữ cái')
    } else {
      setpassWordError('')
    }
    if (passwordConfirm.length == 0) {
      setpasswordConfirmError('Confirm Password không được để trống')
      formError = true
    } else if (password != passwordConfirm) {
      setpasswordConfirmError('Confirm Password không trùng khớp')
      formError = true
    } else {
      setpasswordConfirmError('')
    }
    if (formError == false) {
      sethandleButtonType('primary')
      sethandleDisabled(false)
    } else {
      sethandleButtonType('outline')
      sethandleDisabled(true)
    }
  }, [name, email, password, passwordConfirm])

  const [register] = useRegisterMutation()
  const handleSignUp = async () => {
    const signUPObject: RegisterBody = {
      name,
      email,
      password,
      passwordConfirm,
    }
    const response = await register(signUPObject)
    const dataResponse: any = response
    if (dataResponse.error) {
      ToastAndroid.show(dataResponse.error.data.message, ToastAndroid.LONG)
    } else {
      navigate(routes.verification)
      ToastAndroid.show(dataResponse.data.message, ToastAndroid.LONG)
    }
  }
  const { colors } = useTheme()
  return (
    <Container backgroundColor="#fff">
      <Block
        flex
        space="between"
        paddingHorizontal={20}
        paddingTop={27}
        paddingBottom={48}
      >
        <Block>
          <Text size={22} lineHeight={26} fontFamily="bold">
            Welcome to Animal App 👋
          </Text>
          <Text size={16} lineHeight={24} fontFamily="semiBold" marginTop={3}>
            Bạn muốn lưu lại các con vật yêu thích.{'\n'}Đăng ký ngay!
          </Text>
          <Block marginTop={32}>
            <Block>
              <TextInputApp
                placeholder="Username"
                onChangeText={(text) => {
                  setname(text)
                }}
                value={name}
                type="user"
              />
              {nameError.length > 0 && (
                <Text
                  paddingHorizontal={10}
                  color={colors.redLight}
                  marginTop={5}
                >
                  {nameError}
                </Text>
              )}
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
                onChangeText={(text) => {
                  setpassword(text)
                }}
                value={password}
                type="password"
              />
              {passWordError.length > 0 && (
                <Text
                  paddingHorizontal={10}
                  color={colors.redLight}
                  marginTop={5}
                >
                  {passWordError}
                </Text>
              )}
            </Block>
            <Block marginTop={10}>
              <TextInputApp
                placeholder="Reapeat Password"
                onChangeText={(text) => {
                  setpasswordConfirm(text)
                }}
                value={passwordConfirm}
                type="password"
              />
              {passwordConfirmError.length > 0 && (
                <Text
                  paddingHorizontal={10}
                  color={colors.redLight}
                  marginTop={5}
                >
                  {passwordConfirmError}
                </Text>
              )}
            </Block>
          </Block>

          <Block alignCenter marginTop={15}>
            <Block width={250} height={50} alignCenter>
              <ButtonApp
                type={handleButtonType}
                disabled={handleDisabled}
                title={'Sign up'}
                onClick={handleSignUp}
              />
            </Block>
          </Block>
        </Block>

        <Block alignCenter>
          <Block row>
            <Text size={16} fontFamily="bold" color={colors.greyDark}>
              Already have an account?{' '}
            </Text>
            <TouchableOpacity
              activeOpacity={0.5}
              onPress={() => {
                navigate(routes.login)
              }}
            >
              <Text size={16} fontFamily="bold">
                Sign In{' '}
              </Text>
            </TouchableOpacity>
          </Block>
        </Block>
      </Block>
    </Container>
  )
}
