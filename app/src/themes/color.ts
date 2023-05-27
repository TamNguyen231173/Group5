export const colors = {
  dark: {
    //default don't delete
    primaryText: '#000000',
    secondaryText: '#898989',
    error: '#f02849',
    inputBG: '#edf4f4',
    primary: '#009E3A',
    focus: '#1850f2',
    background: '#FAFBFC',
    border: '#e4e6eb',
    white: '#FFFFFF',
    disabled: '#a2ccf2',
    oceanBlue: '#0077b6',
    veryLightPink: '#bcbcbc',
    lightBlue: '#96d3f2',
    trackColor: '#96d3f2',
    placeholder: '#bcbcbc',
    transparent: 'transparent',
    gray: '#8C8C8C',
    // add color below....
    black: '#000000',
    strokeBottomIcon: '#33363F',

    TextActive: '#4169E1',
    TextInActive: '#a7b6e3',

    // shadow
    shadow: '#e8e9e9',

    // bottom menu
    bottomMenu: '#F9F2F2',
  },
  light: {
    //default don't delete
    primaryText: '#000000',
    secondaryText: '#898989',
    error: '#f02849',
    inputBG: '#edf4f4',
    primary: '#009E3A',
    focus: '#1850f2',
    background: '#FAFBFC',
    border: '#e4e6eb',
    white: '#FFFFFF',
    disabled: '#a2ccf2',
    oceanBlue: '#0077b6',
    veryLightPink: '#bcbcbc',
    lightBlue: '#96d3f2',
    trackColor: '#96d3f2',
    placeholder: '#bcbcbc',
    transparent: 'transparent',
    gray: '#8C8C8C',
    // add color below...
    black: '#000000',
    strokeBottomIcon: '#33363F',

    // problem text
    TextActive: '#4169E1',
    TextInActive: '#a7b6e3',

    // shadow
    shadow: '#e8e9e9',

    // bottom menu
    bottomMenu: '#F9F2F2',
  },
}

export type Color =
  | 'primaryText'
  | 'secondaryText'
  | 'error'
  | 'inputBG'
  | 'primary'
  | 'focus'
  | 'background'
  | 'border'
  | 'white'
  | 'disabled'
  | 'oceanBlue'
  | 'veryLightPink'
  | 'lightBlue'
  | 'trackColor'
  | 'placeholder'
  | 'black'
  | 'transparent'
  | 'shadow'
  | 'TextActive'
  | 'TextInActive'
  | 'bottomMenu'
  | 'gray'
  | 'strokeBottomIcon'

export type ThemeColor = typeof colors
