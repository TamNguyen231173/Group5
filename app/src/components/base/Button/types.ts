import { FlexStyle, PressableProps, StyleProp, ViewStyle } from 'react-native';
import { BlockProps } from '../Block/types';
import { CommonTextProps } from '../Text/type';
export type CommonButtonProps = Omit<BlockProps, 'style' | 'hitSlop' | 'children' | 'inset'>;

export interface ButtonProps extends PressableProps, CommonButtonProps {
    /**
     * Label of button
     */
    title?: string;

    style?: StyleProp<Omit<ViewStyle, 'backgroundColor'>>;
    /**
     * Background color on pressed button - (key of Colors (theme/colors.ts) or Color keywords)
     */
    pressedBackground?: string;

    /**
     * Background color when button disabled - (key of Colors (theme/colors.ts) or Color keywords)
     */
    disabledBackground?: string;

    /**
    * **padding** creates extra space within an component
    *
    * Default is **16**
    *
    * Example:
    *
    * ```
     padding={16}

     ```
 */
    padding?: number;

    /**
     * Left icon
     */
    leftIcon?: React.ReactNode;

    /**
     * Styling for view containing the left icon
     */
    leftIconContainerStyle?: StyleProp<ViewStyle>;

    /**
     * Right icon
     */
    rightIcon?: React.ReactNode;

    /**
     * Styling for view containing the right icon
     */
    rightIconContainerStyle?: StyleProp<ViewStyle>;
    /**
     * Show loading icon if loading is **true**
     */
    loading?: boolean;

    /**
     * Type of button. Default is **primary**
     */
    type?: 'primary' | 'outline' | 'text';

    /**
     * props for label
     */
    titleProps?: CommonTextProps;
    /**
     * Describes how to align children along the cross axis of their container
     */
    align?: FlexStyle['alignItems'];

    /**
     * Describes how to align children within the main axis of their container
     */
    justify?: FlexStyle['justifyContent'];

    /**
     * Position in React Native is similar to regular CSS
     */
    position?: FlexStyle['position'];
}
