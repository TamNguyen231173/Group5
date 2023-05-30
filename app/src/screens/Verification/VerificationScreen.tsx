import { StatusBar} from 'react-native'
import React from 'react'
import { Block, ButtonApp, Container, Text } from '@components';

const VerificationScreen = () => {
  return (
    <Container>
            <StatusBar backgroundColor={'#fff'} hidden={true}/>
            <Block flex backgroundColor="#fff" >
                <Text size={22} lineHeight={32} color='#333647' fontFamily='bold' paddingLeft={24}>
                Verification Code ✅
                </Text>
                <Text size={16} lineHeight={24} color='#000000' fontFamily='medium' paddingLeft={24} paddingTop={7}>
                Nhập mã code gồm 4 chữ số được gửi trong email của bạn
                </Text>
                <Block alignCenter justifyCenter paddingTop={28}>
                    
                    </Block>
                <Block alignCenter justifyCenter paddingTop={52}>
                    <ButtonApp
                        type={'outline'}
                        title={'Next'}
                        onClick={() => {
                            console.log('Check')
                        }}
                    /></Block>
                <Block absolute bottom={48}>
                    <Text size={16} lineHeight={18} color='#7C82A1' fontFamily='medium' paddingLeft={54}>
                        Remember the password?<Text color='#333647'>Try again</Text>
                    </Text></Block>
            </Block>
        </Container>
  )
}

export default VerificationScreen