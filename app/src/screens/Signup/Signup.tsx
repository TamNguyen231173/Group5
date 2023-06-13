import React, { useState } from 'react'
import { TextInputApp } from '@components/common/TextInputApp'
import { Text, Container, Block, ButtonApp } from '@components'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'
import { routes } from '@navigation'
import { useLazyRegisterQuery } from '@reduxs'
import { RegisterBody } from '../../reduxs/api/type'
import { useTheme } from '@themes'
export const Signup = () => {
  const [name, setname] = useState('')
  const [email, setemail] = useState('')
  const [password, setpassword] = useState('')
  const [passwordConfirm, setpasswordConfirm] = useState('')
  const [register] = useLazyRegisterQuery()
  const handleSignUp = async () => {
    const signUPObject: RegisterBody = {
      name,
      email,
      password,
      passwordConfirm,
    }
    console.log(signUPObject)
    const response = await register(signUPObject)
    console.log(response)
  }
  const { colors } = useTheme()
  const navigation = useNavigation()
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
                  setpasswordConfirm(text)
                }}
                value={passwordConfirm}
                type="password"
              />
            </Block>
          </Block>

          <Block alignCenter marginTop={15}>
            <Block width={250} height={50} alignCenter>
              <ButtonApp
                type={'primary'}
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
                navigation.navigate(routes.login)
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
