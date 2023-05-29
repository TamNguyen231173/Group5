import React from 'react'
import { Text, Container, Block } from '@components'
import ItemOption from './components/ItemOption'
import { BellIcon, GarbageIcon, LogoutIcon } from '@assets'

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
        paddingHorizontal: 20,
        backgroundColor: 'white',
        paddingTop: 25,
      }}
    >
      <Block style={{ flex: 4 }}>
        <Text fontFamily="bold" size={18} lineHeight={20}>
          Tài khoản
        </Text>
        <Block marginTop={10}>
          <ItemOption title="Cài đặt thông báo" leftIcon={<BellIcon />} />
          <ItemOption title="Xóa tài khoản" leftIcon={<GarbageIcon />} />
          <ItemOption title="Đăng xuất" leftIcon={<LogoutIcon />} />
        </Block>
      </Block>
      <Block style={{ flex: 7 }}>
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
