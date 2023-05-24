import { normalize } from 'themes';
import { StyleSheet } from 'react-native';

export const baseStyles = StyleSheet.create({
    verticalContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    horizontalContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    paddingText: {
        paddingHorizontal: normalize.h(10),
    },
});

export type BaseStyles = typeof baseStyles;
