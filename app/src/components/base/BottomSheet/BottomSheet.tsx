import React, { forwardRef } from 'react'

import { makeStyles } from '@themes'
import { ModalizeProps, Modalize as RNModalize } from 'react-native-modalize'
import { Portal } from 'react-native-portalize'

export type BottomSheetProps = ModalizeProps
export type Modalize = RNModalize

export const BottomSheet = forwardRef<RNModalize, BottomSheetProps>(
  (props, ref) => {
    const { children } = props

    const styles = useStyles(props)

    return (
      <Portal>
        <RNModalize
          ref={ref}
          panGestureComponentEnabled={true}
          overlayStyle={styles.rootLight}
          adjustToContentHeight={true}
          modalStyle={styles.modal}
          // closeOnOverlayTap={true}
          // panGestureEnabled={false}
          handlePosition="inside"
          {...props}
        >
          {children}
        </RNModalize>
      </Portal>
    )
  },
)
const useStyles = makeStyles<BottomSheetProps>()(({ colors, normalize }) => ({
  rootLight: ({}) => ({
    backgroundColor: 'rgba(52, 52, 52, 0.5)',
  }),
  rootDark: ({}) => ({
    backgroundColor: colors.black,
  }),
  modal: {
    backgroundColor: colors.white,
    borderTopLeftRadius: normalize.m(16),
    borderTopRightRadius: normalize.m(16),
  },
}))
