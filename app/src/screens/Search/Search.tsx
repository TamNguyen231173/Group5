import React, { useState } from 'react'
import { Container, Block, TextInput } from '@components'
import { fontFamilySetup, useTheme } from '@themes';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { BackIcon, SearchIcon } from '@assets';

export const Search = () => {
  const [value, setvalue] = useState("");
  const { colors } = useTheme();
  const navigation = useNavigation();
  return (
    <Container backgroundColor={colors.white}>
      <Block space='between' row alignCenter marginTop={8}>
        <TouchableOpacity
          style={{ padding: 10 }}
          onPress={() => { navigation.goBack(); }}>
          <BackIcon />
        </TouchableOpacity>
        <Block flex justifyCenter>
          <TextInput
            value={value}
            onChangeText={setvalue}
            placeholderTextColor={colors.greyLight}
            placeholder="Bạn muốn tìm gì?"
            style={{
              fontFamily: fontFamilySetup.regular,
            }} />
        </Block>
        <TouchableOpacity style={{ padding: 10 }}>
          <SearchIcon fill={colors.blackDark} />
        </TouchableOpacity>
      </Block>
    </Container>
  )
}
