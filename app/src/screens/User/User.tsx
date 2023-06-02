import React from 'react'
import { Text, Container, Block, Image } from '@components'
import ItemOption from './components/ItemOption'
import { BellIcon, GarbageIcon, KeyIcon, LogoutIcon } from '@assets'
import { normalize } from '@themes'

export const User: React.FC = () => {
  //init state lấy từ store
  const [isNotify, setIsNotify] = React.useState<boolean>(false)
  const [isLocationOn, setIsLocationOn] = React.useState<boolean>(false)

  const handleIsNotifyChange = (value: boolean) => {
    setIsNotify(value)
  }

  const handleIsLocationOnChange = (value: boolean) => {
    setIsLocationOn(value)
  }

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
            uri: 'https://static.wikia.nocookie.net/violet-evergarden/images/a/ae/Violet_Evergarden.png/revision/latest?cb=20180209195829',
          }}
        />
        <Block marginLeft={7}>
          <Text fontFamily="bold" size={16} lineHeight={18}>
            Lê Viết Tình
          </Text>
          <Text
            fontFamily="regular"
            size={14}
            lineHeight={17}
            color="#8A96E5"
            onPress={() => {
              console.log('Change avatar press')
            }}
          >
            Thay đổi avatar
          </Text>
        </Block>
      </Block>
      <Block
        // flex={3}
        style={{ flex: 3 }}
      >
        <Text fontFamily="bold" size={18} lineHeight={20}>
          Tài khoản
        </Text>
        <Block marginTop={10}>
          <ItemOption title="Cài đặt thông báo" leftIcon={<BellIcon />} />
          <ItemOption title="Xóa tài khoản" leftIcon={<GarbageIcon />} />
          <ItemOption title="Thay đổi mật khẩu" leftIcon={<KeyIcon />} />
          <ItemOption title="Đăng xuất" leftIcon={<LogoutIcon />} />
        </Block>
      </Block>
      <Block
        // flex={4}
        style={{ flex: 4 }}
      >
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
