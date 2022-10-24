export const palette = {
  primary: {
    p500: '#246BFD',
    p400: '#5089FD',
    p300: '#7CA6FE',
    p200: '#A7C4FE',
    p100: '#E9F0FF',
  },
  secondary: {
    s500: '#FFD300',
    s400: '#FFDC33',
    s300: '#FFE566',
    s200: '#FFED99',
    s100: '#FFFBE6',
  },
  status: {
    success: '#07BD74',
    info: '#246BFD',
    warning: '#FACC15',
    error: '#F75555',
    disabled: '#D8D8D8',
    disabledBtn: '#3062C8',
  },
  greyscale: {
    g900: '#212121',
    g800: '#424242',
    g700: '#616161',
    g600: '#757575',
    g500: '#9E9E9E',
    g400: '#BDBDBD',
    g300: '#E0E0E0',
    g200: '#EEEEEE',
    g100: '#F5F5F5',
    g50: '#FAFAFA',
  },
  dark: {
    d1: '#181A20',
    d2: '#1F222A',
    d3: '#35383F',
  },
  others: {
    white: '#FFFFFF',
    black: '#000000',
    red: '#F44336',
    pink: '#E91E63',
    purple: '#9C27B0',
    deepPurple: '#673AB7',
    indigo: '#3F51B5',
    blue: '#2196F3',
    lightBlue: '#03A9F4',
    cyan: '#00BCD4',
    teal: '#009688',
    green: '#4CAF50',
    lightGreen: '#8BC34A',
    lime: '#CDDC39',
    yellow: '#FFEB3B',
    amber: '#FFC107',
    orange: '#FF9800',
    deepOrange: '#FF5722',
    brown: '#795548',
    blueGrey: '#607D8B',
  },
  background: {
    blue: '#EEF4FF',
    green: '#F2FFFC',
    orange: '#FFF8ED',
    pink: '#FFF5F5',
    yellow: '#FFFEE0',
    purple: '#FCF4FF',
  },
  transparent: {
    blue: '#246BFD',
    orange: '#FF9800',
    yellow: '#FACC15',
    red: '#F75555',
    green: '#4CAF50',
    purple: '#9C27B0',
    cyan: '#00BCD4',
  },
};

const headerSizes = {
  xxl: 48,
  xl: 40,
  l: 32,
  m: 24,
  s: 20,
  xs: 18,
};

const textSizes = {
  xl: 18,
  l: 16,
  m: 14,
  s: 12,
  xs: 10,
};

type TWeights = {
  [x in 'bold' | 'semibold' | 'medium' | 'regular']:
    | '100'
    | '200'
    | '300'
    | '400'
    | '500'
    | '600'
    | '700'
    | '800'
    | '900';
};

const textWeights = {
  bold: '700',
  semibold: '600',
  medium: '500',
  regular: '400',
} as TWeights;

const commonText = {
  fontFamily: 'Urbanist',
};

type Themes = 'light' | 'dark';

export const lightTheme = {
  type: 'light' as Themes,
  palette,
  transition: {
    transition: 'all 0.50s linear',
  },
  colorSchemes: {
    white_d3: {
      'background-color': palette.others.white,
      color: palette.greyscale.g900,
    },
    g900_white: {
      color: palette.greyscale.g900,
    },
    pr500_d1: {
      color: palette.primary.p500,
    },
  },
  textVariants: {
    h1: {
      'font-weight': textWeights.bold,
      'font-size': headerSizes.xxl,
    },
    h2: {
      'font-weight': textWeights.bold,
      'font-size': headerSizes.xl,
    },
    h3: {
      'font-weight': textWeights.bold,
      'font-size': headerSizes.l,
    },
    h4: {
      'font-weight': textWeights.bold,
      'font-size': headerSizes.m,
    },
    h5: {
      'font-weight': textWeights.bold,
      'font-size': headerSizes.s,
    },
    h6: {
      'font-weight': textWeights.bold,
      'font-size': headerSizes.xs,
    },
    p_XL: {
      bold: {
        'font-size': textSizes.xl,
        'font-weight': textWeights.bold,
      },
      semi: {
        'font-size': textSizes.xl,
        'font-weight': textWeights.semibold,
      },
      medium: {
        'font-size': textSizes.xl,
        'font-weight': textWeights.medium,
      },
      regular: {
        'font-size': textSizes.xl,
        'font-weight': textWeights.regular,
      },
    },
    p_L: {
      bold: {
        'font-size': textSizes.l,
        'font-weight': textWeights.bold,
      },
      semi: {
        'font-size': textSizes.l,
        'font-weight': textWeights.semibold,
      },
      medium: {
        'font-size': textSizes.l,
        'font-weight': textWeights.medium,
      },
      regular: {
        'font-size': textSizes.l,
        'font-weight': textWeights.regular,
      },
    },
    p_M: {
      bold: {
        'font-size': textSizes.m,
        'font-weight': textWeights.bold,
      },
      semi: {
        'font-size': textSizes.m,
        'font-weight': textWeights.semibold,
      },
      medium: {
        'font-size': textSizes.m,
        'font-weight': textWeights.medium,
      },
      regular: {
        'font-size': textSizes.m,
        'font-weight': textWeights.regular,
      },
    },
    p_S: {
      bold: {
        'font-size': textSizes.s,
        'font-weight': textWeights.bold,
      },
      semi: {
        'font-size': textSizes.s,
        'font-weight': textWeights.semibold,
      },
      medium: {
        'font-size': textSizes.s,
        'font-weight': textWeights.medium,
      },
      regular: {
        'font-size': textSizes.s,
        'font-weight': textWeights.regular,
      },
    },
    p_XS: {
      bold: {
        'font-size': textSizes.xs,
        'font-weight': textWeights.bold,
      },
      semi: {
        'font-size': textSizes.xs,
        'font-weight': textWeights.semibold,
      },
      medium: {
        'font-size': textSizes.xs,
        'font-weight': textWeights.medium,
      },
      regular: {
        'font-size': textSizes.xs,
        'font-weight': textWeights.regular,
      },
    },
  },
};

export const darkTheme = {
  ...lightTheme,
  type: 'dark' as Themes,
  colorSchemes: {
    white_d3: {
      'background-color': palette.dark.d1,
      color: palette.others.white,
    },
    g900_white: {
      color: palette.others.white,
    },
    pr500_d1: {
      color: palette.others.white,
    },
  },
  // body: 'blue',
  // text: 'teal',
};

export const theme = {
  palette,
  colors: {
    backgroundColor: palette.others.white,
    color: palette.primary.p500,
  },
  colorScheme: {
    white_d3: {
      backgroundColor: palette.others.white,
      color: palette.greyscale.g900,
    },
    logoTextColor: { color: palette.greyscale.g900 },
    secondaryText: { color: palette.greyscale.g600 },
    itemCard: {
      backgroundColor: palette.greyscale.g100,
      color: palette.greyscale.g900,
    },
    separator: {
      backgroundColor: palette.greyscale.g300,
    },
  },
  text: {
    h1: {
      ...commonText,
      fontWeight: textWeights.bold,
      fontSize: headerSizes.xxl,
    },
    h2: {
      ...commonText,
      fontWeight: textWeights.bold,
      fontSize: headerSizes.xl,
    },
    h3: {
      ...commonText,
      fontWeight: textWeights.bold,
      fontSize: headerSizes.l,
    },
    h4: {
      ...commonText,
      fontWeight: textWeights.bold,
      fontSize: headerSizes.m,
    },
    h5: {
      ...commonText,
      fontWeight: textWeights.bold,
      fontSize: headerSizes.s,
    },
    h6: {
      ...commonText,
      fontWeight: textWeights.bold,
      fontSize: headerSizes.xs,
    },
    p_XL: {
      bold: {
        ...commonText,
        fontSize: textSizes.xl,
        fontWeight: textWeights.bold,
      },
      semi: {
        ...commonText,
        fontSize: textSizes.xl,
        fontWeight: textWeights.semibold,
      },
      medium: {
        ...commonText,
        fontSize: textSizes.xl,
        fontWeight: textWeights.medium,
      },
      regular: {
        ...commonText,
        fontSize: textSizes.xl,
        fontWeight: textWeights.regular,
      },
    },
    p_L: {
      bold: {
        ...commonText,
        fontSize: textSizes.l,
        fontWeight: textWeights.bold,
      },
      semi: {
        ...commonText,
        fontSize: textSizes.l,
        fontWeight: textWeights.semibold,
      },
      medium: {
        ...commonText,
        fontSize: textSizes.l,
        fontWeight: textWeights.medium,
      },
      regular: {
        ...commonText,
        fontSize: textSizes.l,
        fontWeight: textWeights.regular,
      },
    },
    p_M: {
      bold: {
        ...commonText,
        fontSize: textSizes.m,
        fontWeight: textWeights.bold,
      },
      semi: {
        ...commonText,
        fontSize: textSizes.m,
        fontWeight: textWeights.semibold,
      },
      medium: {
        ...commonText,
        fontSize: textSizes.m,
        fontWeight: textWeights.medium,
      },
      regular: {
        ...commonText,
        fontSize: textSizes.m,
        fontWeight: textWeights.regular,
      },
    },
    p_S: {
      bold: {
        ...commonText,
        fontSize: textSizes.s,
        fontWeight: textWeights.bold,
      },
      semi: {
        ...commonText,
        fontSize: textSizes.s,
        fontWeight: textWeights.semibold,
      },
      medium: {
        ...commonText,
        fontSize: textSizes.s,
        fontWeight: textWeights.medium,
      },
      regular: {
        ...commonText,
        fontSize: textSizes.s,
        fontWeight: textWeights.regular,
      },
    },
    p_XS: {
      bold: {
        ...commonText,
        fontSize: textSizes.xs,
        fontWeight: textWeights.bold,
      },
      semi: {
        ...commonText,
        fontSize: textSizes.xs,
        fontWeight: textWeights.semibold,
      },
      medium: {
        ...commonText,
        fontSize: textSizes.xs,
        fontWeight: textWeights.medium,
      },
      regular: {
        ...commonText,
        fontSize: textSizes.xs,
        fontWeight: textWeights.regular,
      },
    },

    header: {
      fontFamily: 'Urbanist',
      headerSize: 40,
      headerWeight: 700,
      backgroundColor: palette.others.white,
      color: palette.primary.p500,
    },
    p: {
      fontFamily: 'Urbanist',
      headerSize: 18,
      headerWeight: 500,
      backgroundColor: palette.others.white,
      color: palette.greyscale.g900,
    },
  },
};

export const darkTheme2 = {
  ...theme,
  colors: {
    ...theme.colors,
    backgroundColor: palette.dark.d1,
    color: palette.others.white,
  },
  colorScheme: {
    white_d3: {
      backgroundColor: palette.dark.d1,
      color: palette.others.white,
    },
    logoTextColor: { color: palette.others.white },
    secondaryText: { color: palette.greyscale.g300 },
    itemCard: {
      backgroundColor: palette.dark.d2,
      // backgroundColor: '#1F222A',
      // color: palette.others.white,
      color: 'red',
    },
    separator: {
      backgroundColor: palette.dark.d3,
    },
  },
  text: {
    h1: {
      ...commonText,
      fontWeight: textWeights.bold,
      fontSize: headerSizes.xxl,
    },
    h2: {
      ...commonText,
      fontWeight: textWeights.bold,
      fontSize: headerSizes.xl,
    },
    h3: {
      ...commonText,
      fontWeight: textWeights.bold,
      fontSize: headerSizes.l,
    },
    h4: {
      ...commonText,
      fontWeight: textWeights.bold,
      fontSize: headerSizes.m,
    },
    h5: {
      ...commonText,
      fontWeight: textWeights.bold,
      fontSize: headerSizes.s,
    },
    h6: {
      ...commonText,
      fontWeight: textWeights.bold,
      fontSize: headerSizes.xs,
    },
    p_XL: {
      bold: {
        ...commonText,
        fontSize: textSizes.xl,
        fontWeight: textWeights.bold,
      },
      semi: {
        ...commonText,
        fontSize: textSizes.xl,
        fontWeight: textWeights.semibold,
      },
      medium: {
        ...commonText,
        fontSize: textSizes.xl,
        fontWeight: textWeights.medium,
      },
      regular: {
        ...commonText,
        fontSize: textSizes.xl,
        fontWeight: textWeights.regular,
      },
    },
    p_L: {
      bold: {
        ...commonText,
        fontSize: textSizes.l,
        fontWeight: textWeights.bold,
      },
      semi: {
        ...commonText,
        fontSize: textSizes.l,
        fontWeight: textWeights.semibold,
      },
      medium: {
        ...commonText,
        fontSize: textSizes.l,
        fontWeight: textWeights.medium,
      },
      regular: {
        ...commonText,
        fontSize: textSizes.l,
        fontWeight: textWeights.regular,
      },
    },
    p_M: {
      bold: {
        ...commonText,
        fontSize: textSizes.m,
        fontWeight: textWeights.bold,
      },
      semi: {
        ...commonText,
        fontSize: textSizes.m,
        fontWeight: textWeights.semibold,
      },
      medium: {
        ...commonText,
        fontSize: textSizes.m,
        fontWeight: textWeights.medium,
      },
      regular: {
        ...commonText,
        fontSize: textSizes.m,
        fontWeight: textWeights.regular,
      },
    },
    p_S: {
      bold: {
        ...commonText,
        fontSize: textSizes.s,
        fontWeight: textWeights.bold,
      },
      semi: {
        ...commonText,
        fontSize: textSizes.s,
        fontWeight: textWeights.semibold,
      },
      medium: {
        ...commonText,
        fontSize: textSizes.s,
        fontWeight: textWeights.medium,
      },
      regular: {
        ...commonText,
        fontSize: textSizes.s,
        fontWeight: textWeights.regular,
      },
    },
    p_XS: {
      bold: {
        ...commonText,
        fontSize: textSizes.xs,
        fontWeight: textWeights.bold,
      },
      semi: {
        ...commonText,
        fontSize: textSizes.xs,
        fontWeight: textWeights.semibold,
      },
      medium: {
        ...commonText,
        fontSize: textSizes.xs,
        fontWeight: textWeights.medium,
      },
      regular: {
        ...commonText,
        fontSize: textSizes.xs,
        fontWeight: textWeights.regular,
      },
    },
    header: {
      fontFamily: 'Urbanist',
      headerSize: headerSizes.xs,
      headerWeight: 700,
      backgroundColor: palette.dark.d1,
      color: palette.others.white,
    },
    p: {
      fontFamily: 'Urbanist',
      headerSize: textSizes.xl,
      headerWeight: 500,
      backgroundColor: palette.dark.d1,
      color: palette.others.white,
    },
  },
};
