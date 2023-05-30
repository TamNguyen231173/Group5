
import React,{useState} from 'react'
import { Block, ButtonApp, Container, Text } from '@components';
import { StatusBar } from 'react-native';
import { TextInputApp } from '@components/common/TextInputApp';

const NewpasswordScreen = () => {
    
    const [email, setemail] = useState("");
  return (
    <Container>
            <StatusBar backgroundColor={'#fff'} hidden={true}/>
            <Block flex backgroundColor="#fff" >
                <Text size={22} lineHeight={32} color='#333647' fontFamily='bold' paddingLeft={24}>
                Create New Password 🔒
                </Text>
                <Text size={16} lineHeight={24} color='#000000' fontFamily='medium' paddingLeft={24} paddingTop={7}>
                Bây giờ bạn có thể thay đổi mật khẩu của mình, làm ơn đừng quên nó!
                </Text>
                <Block alignCenter justifyCenter paddingTop={28}>
                <TextInputApp 
                        placeholder='New Password'
                        onChangeText={(text) => {
                            setemail(text);
                        }}
                        value={email}
                        type='password' />
                        </Block>
                <Block alignCenter justifyCenter paddingTop={20}>
                <TextInputApp 
                        placeholder='Repeat New Password'
                        onChangeText={(text) => {
                            setemail(text);
                        }}
                        value={email}
                        type='password' />
                    </Block>
                <Block alignCenter justifyCenter paddingTop={57}>
                    <ButtonApp
                        type={'primary'}
                        title={'CONFIRM'}
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

export default NewpasswordScreen