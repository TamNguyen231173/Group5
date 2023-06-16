import React from 'react'
import { Text, Container, Block, Image, Switch } from '@components'
import ItemOption from './components/ItemOption'
import { BellIcon, GarbageIcon, KeyIcon, LoginIcon, LogoutIcon } from '@assets'
import { normalize } from '@themes'
import { ToastAndroid } from 'react-native'
import { useSelector } from 'react-redux'
import { navigate } from '@navigation/NavigationServices'
import { routes } from '@navigation'
import { listTempAvatar } from '@utils/helper'
import { getUserData } from '@reduxs/selectors'

export const User: React.FC = () => {
  //get current user
  const currentUser = useSelector(getUserData)

  //init state lấy từ store
  const [isNotify, setIsNotify] = React.useState<boolean>(false)
  const [isLocationOn, setIsLocationOn] = React.useState<boolean>(false)

  const handleIsNotifyChange = (value: boolean) => {
    setIsNotify(value)
  }

  const handleIsLocationOnChange = (value: boolean) => {
    setIsLocationOn(value)
  }

  const getTempAvatar = React.useCallback(() => {
    return listTempAvatar[Math.floor(Math.random()) * listTempAvatar.length]
  }, [])

  return (
    <Container
      style={{
        paddingHorizontal: normalize.h(10),
        backgroundColor: 'white',
        paddingTop: normalize.v(25),
      }}
    >
      <Block row alignCenter justifyStart marginBottom={30}>
        <Image
          resizeMode="cover"
          width={66}
          height={66}
          radius={33}
          source={{
            uri: currentUser._id != '' ? currentUser.photo : getTempAvatar(),
          }}
        />
        <Block marginLeft={7}>
          <Text fontFamily="bold" size={16} lineHeight={18}>
            {currentUser._id != '' ? currentUser.name : '@User'}
          </Text>
          {currentUser._id != '' && (
            <Text
              fontFamily="regular"
              size={14}
              lineHeight={17}
              color="#8A96E5"
              onPress={() => {
                ToastAndroid.show(
                  'Chức năng hiện đang phát triển!!\nXin lỗi bạn vì sự bất tiện này',
                  ToastAndroid.LONG,
                )
              }}
            >
              Thay đổi avatar
            </Text>
          )}
        </Block>
      </Block>
      <Block marginBottom={20}>
        <Text fontFamily="bold" size={18} lineHeight={20}>
          Tài khoản
        </Text>
        <Block marginTop={10}>
          <ItemOption title="Cài đặt thông báo" leftIcon={<BellIcon />} />
          {currentUser._id != '' ? (
            <>
              <ItemOption title="Xóa tài khoản" leftIcon={<GarbageIcon />} />
              <ItemOption title="Thay đổi mật khẩu" leftIcon={<KeyIcon />} />
              <ItemOption title="Đăng xuất" leftIcon={<LogoutIcon />} />
            </>
          ) : (
            <ItemOption
              title="Đăng nhập"
              leftIcon={<LoginIcon />}
              onPress={() => {
                navigate(routes.login)
              }}
            />
          )}
        </Block>
      </Block>
      <Block>
        <Text fontFamily="bold" size={18} lineHeight={20}>
          Cài đặt ứng dụng
        </Text>
        <Block marginTop={10}>
          <ItemOption
            title="Thông báo"
            hasSwitch
            switchValue={isNotify}
            onSwitchValueChange={handleIsNotifyChange}
          />
          <ItemOption
            title="Vị trí"
            hasSwitch
            switchValue={isLocationOn}
            onSwitchValueChange={handleIsLocationOnChange}
          />
        </Block>
      </Block>
    </Container>
  )
}
