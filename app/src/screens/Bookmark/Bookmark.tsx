import React from 'react'
import { Text, Container, Block, Button } from '@components'

export const Bookmark = () => {
  return (
    <Container>
      <Block flex backgroundColor="#141" alignCenter justifyCenter>
        <Text size={20} lineHeight={20}>
          BookmarkScreen
        </Text>
        <Button title="Go to Home" type="outline" />
      </Block>
    </Container>
  )
}
