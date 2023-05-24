import { normalize } from './normalize';

export type FontSize = {
    /**
     * 36
     */
    h1: number;
    /**
     * 32
     */
    h2: number;
    /**
     * 30
     */
    h3: number;
    /**
     * 26
     */
    h4: number;
    /**
     * 22
     */
    h5: number;
    /**
     * 18
     */
    h6: number;
    /**
     * 18
     */
    title1: number;
    /**
     * 16
     */
    title2: number;
    /**
     * 14
     */
    body: number;
    /**
     * 16
     */
    button: number;
    /**
     * 14
     */
    caption1: number;
    /**
     * 12
     */
    caption2: number;
    /**
     * 10
     */
    label: number;
};

export type Font = {
    size: FontSize;
};

export const font: Font = {
    size: {
        /**
         * 36
         */
        h1: normalize.m(36),
        /**
         * 32
         */
        h2: normalize.m(32),
        /**
         * 30
         */
        h3: normalize.m(30),
        /**
         * 26
         */
        h4: normalize.m(26),
        /**
         * 22
         */
        h5: normalize.m(22),
        /**
         * 18
         */
        h6: normalize.m(18),
        /**
         * 18
         */
        title1: normalize.m(18),
        /**
         * 16
         */
        title2: normalize.m(16),
        /**
         * 14
         */
        body: normalize.m(14),
        /**
         * 16
         */
        button: normalize.m(16),
        /**
         * 14
         */
        caption1: normalize.m(14),
        /**
         * 12
         */
        caption2: normalize.m(12),
        /**
         * 10
         */
        label: normalize.m(10),
    },
};

export const fontFamilySetup = {
    bold: 'Inter-Bold',
    medium: 'Inter-Medium',
    regular: 'Inter-Light',
    light: 'Inter-Regular',
};
