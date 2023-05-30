
import React, { useState } from 'react'
import { Block, ButtonApp, Container, Text } from '@components'
import { TextInputApp } from '@components/common/TextInputApp'
import { StatusBar } from 'react-native';
export const ForgotpasswordScreen = () => {
    const [email, setemail] = useState("");

    return (
        <Container>
            <StatusBar backgroundColor={'#fff'} hidden={true}/>
            <Block flex backgroundColor="#fff" >
                <Text size={22} lineHeight={32} color='#333647' fontFamily='bold' paddingLeft={24}>
                    Forgot Password 🤔
                </Text>
                <Text size={16} lineHeight={24} color='#000000' fontFamily='medium' paddingLeft={24} paddingTop={7}>
                    Bạn cần nhập email để nhận mã code
                </Text>
                <Block alignCenter justifyCenter paddingTop={52}>
                    <TextInputApp 
                        placeholder='Email Adress'
                        onChangeText={(text) => {
                            setemail(text);
                        }}
                        value={email}
                        type='email' /></Block>
                <Block alignCenter justifyCenter paddingTop={131}>
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