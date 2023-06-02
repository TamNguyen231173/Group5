import { StatusBar, View } from 'react-native'
import React, { useState } from 'react'
import { Block, ButtonApp, Container, Text } from '@components';
import { CodeField, Cursor, useBlurOnFulfill, useClearByFocusCell } from 'react-native-confirmation-code-field';


const CELL_COUNT = 4;

const VerificationScreen = () => {

    const [value, setValue] = useState('');
    const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
    const [props, getCellOnLayoutHandler] = useClearByFocusCell({
        value,
        setValue,
    });

    return (
        <Container>
            <StatusBar backgroundColor={'#fff'} />
            <Block flex backgroundColor="#fff" space='between' >
                <Block>
                    <Block paddingTop={27}>
                        <Text size={22} lineHeight={32} color='#333647' fontFamily='bold' paddingLeft={24}>
                            Verification Code ✅
                        </Text>
                        <Text size={16} lineHeight={24} color='#000000' fontFamily='medium' paddingLeft={24} paddingTop={7}>
                            Nhập mã code gồm 4 chữ số được gửi trong email của bạn
                        </Text>
                    </Block>
                    <Block paddingTop={28}>
                        <CodeField
                            ref={ref}
                            {...props}
                            value={value}
                            onChangeText={setValue}
                            cellCount={CELL_COUNT}
                            keyboardType="number-pad"
                            textContentType="oneTimeCode"
                            rootStyle={{ justifyContent: 'space-around', paddingLeft: 20, paddingRight: 20 }}
                            renderCell={({ index, symbol, isFocused }) => (
                                <View
                                    onLayout={getCellOnLayoutHandler(index)}
                                    key={index}
                                    //  style={[styles.cellRoot,isFocused && styles.focusCell]}
                                    style={[{
                                        width: 64,
                                        height: 64,

                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        borderColor: '#fff',
                                        backgroundColor: '#F3F4F6',
                                        borderRadius: 8,
                                        borderWidth: 1
                                    }
                                        , isFocused &&
                                    {
                                        borderColor: '#009E3A',
                                        backgroundColor: '#fff',
                                        borderRadius: 8,
                                        borderWidth: 1
                                    }]}
                                >
                                    <Text>
                                        {symbol || (isFocused ? <Cursor /> : null)}
                                    </Text>
                                </View>
                            )}
                        />
                    </Block>
                    
                </Block>
                <Block alignCenter justifyCenter>
                        <ButtonApp
                            type={'primary'}
                            title={'Next'}
                            onClick={() => {
                                console.log('Check')
                            }}
                        />
                </Block>
                <Block marginBottom={40}>
                    <Text size={16} lineHeight={18} color='#7C82A1' fontFamily='medium' paddingLeft={54}>
                        Remember the password?<Text color='#333647'> Try again</Text>
                    </Text>
                </Block>
            </Block>
        </Container>
    )
}

export default VerificationScreen