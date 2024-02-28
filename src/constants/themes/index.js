import { RFValue } from 'react-native-responsive-fontsize';

const Themes = {

  secondary: '#0E4DA4',
  primary: '#B6E1FD',

  paginationColors: {
    active: '#18181B',
    notActive: 'rgba(0, 0, 0, 0.6)',
  },
  shadowColors: {
    pureBlack: '#000',
  },
  loaderColors: {
    cobaltBlue: '#0F4DA4',
    white: '#ffffff',
  },
  borderColors: {
    platinum: '#E6E6E6',
    skyBlue: '#8DCBF8',
    cobaltBlue: '#0F4DA4',
    flashWhite: '#F0F0F0',
    gainsBoro: '#D8D8D8',
    secondary: '#0E4DA4',
    silver: '#C4C4C4',
    line: '#0E2C66',
    pureBlack: '#000',
    drawerBg: '#F0F9FF',
    lightGray: '#E9E9EA',
  },
  bgColors: {
    platinum: '#E6E6E6',
    whiteGray: '#FAFAFA',
    moroccanBlue: '#3388FF',
    white: '#ffffff',
    whiteTransparent: '#ffffff00',
    charcoal: '#3A485B',
    skyBlue: '#8DCBF8',
    mayaBlue: '#84C4FF',
    smokeWhite: '#F8F8F9',
    smokeWhite2: '#F3F3F3',
    modalsBlackBg: 'rgba(0,0,0,0.6)',
    lightGray: '#D2D3D4',
    pureBlack: '#000',
    nickel: '#787878',
    onyx: '#35383E',
    splashBg: '#BDE4FF',
  },
  textColors: {
    raisinBlack: '#1F2229',
    spanishGray: '#8F9094',
    davyGray: '#4C4E54',
    tangBlue: '#3661CE',
    cobaltBlue: '#0F4DA4',
    gray: '#999999',
    moroccanBlue: '#3388FF',
    white: '#ffffff',
    jetBlack: '#343434',
    silver: '#A2A2A2',
    silver2: '#A5A7A9',
    gray2: '#424242',
    secondary: '#0E4DA4',
    erieBlack: '#35383E',
    graniteGray: '#626469',
    fern: '#4CAF50',
    erieBlack2: '#18181B',
    inputBlack: '#2F2F2F',
    skyBlue: '#8DCBF8',
    drawerFontBlack: '#070707',
  },
  iconColors: {
    raisinBlack: '#1F2229',
    steelBlue: '#B3BFD0',
    black: '#272727',
    white: '#ffffff',
    silver: '#A2A2A2',
    graniteGray: '#626469',
    success: '#4CAF50',
    skyBlue: '#8DCBF8',
    default: '#999999',
    spanishGray: '#8F9094',
    gray: '#66716e',
  },
  statusColors: {
    inProgress: '#7DBC15',
    draft: '#999999',
    danger: '#D15968',
    pending: '#8DCBF8',
    success: '#84C044',
    default: '#999999',
    completed: '#4CAF50',
    pending2: '#626469',
    default2: '#A5A7A9',
    notStarted: '#D2D3D4',
    rejected: '#C34757',
  },
  gradiantColors: {
    extraLightBlack: 'rgba(0,0,0,0)',
    lightBlack: 'rgba(0,0,0,0.6)',
    mediumBlack: 'rgba(0,0,0,0.8)',
    drawerGr3: ['#B6E1FD', '#B6E1FD'],
    drawerGr2: ['#ffffff', '#C5E7FD', '#C5E7FD'],
    drawerGr1: ['#D3EDFE', '#D3EDFE'],
    splashGr: ['#92D8FF', '#5F99C2'],
  },
};

const BorRadius = {
  borderRadius1: 6,
  borderRadius2: 14,
  borderRadius3: 38,
  borderRadius4: 16,
  borderRadius5: 100,
  borderRadius6: 104,
};

const Fonts = {
  font10: RFValue(10),
  font12: RFValue(12),
  font14: RFValue(14),
  font15: RFValue(15),
  font16: 16,
  font18: RFValue(18),
  font20: RFValue(20),
  font22: RFValue(22),
  font24: RFValue(24),
  font28: RFValue(28),
  font32: RFValue(32),
};

const Families = {
  poppins: {
    PoppinsThin: 'Poppins-Thin', // 100
    PoppinsExtraLight: 'Poppins-ExtraLight', // 200
    PoppinsLight: 'Poppins-Light', // 300
    PoppinsRegular: 'Poppins-Regular', // 400
    PoppinsMedium: 'Poppins-Medium', // 500
    PoppinsSemibold: 'Poppins-SemiBold', // 600
    PoppinsBold: 'Poppins-Bold', // 700
    PoppinsExtraBold: 'Poppins-ExtraBold', // 800
    PoppinsBlack: 'Poppins-Black', // 900
  },
};

export { Themes, Fonts, Families, BorRadius };
