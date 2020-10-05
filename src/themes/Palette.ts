export type Palette = {
  light: {
    PRIMARY: string;
    SECONDARY: string;
    BACKGROUND: string;
    LIGHT_GRAY: string;
    GRAY: string;
    MAIN: string;
    SATURDAY: string;
    SUNDAY: string;
    TRANSPARENT: string;
  };
  dark: {
    PRIMARY: string;
    SECONDARY: string;
    BACKGROUND: string;
    LIGHT_GRAY: string;
    GRAY: string;
    MAIN: string;
    SATURDAY: string;
    SUNDAY: string;
    TRANSPARENT: string;
  };
};

export const PALETTE: Palette = {
  light: {
    PRIMARY: '#222f3e',
    SECONDARY: '#ffffff',
    BACKGROUND: '#ffffff',
    LIGHT_GRAY: '#c8d6e5',
    GRAY: '#8395a7',
    MAIN: '#ff9f43',
    SATURDAY: '#54a0ff',
    SUNDAY: '#ee5253',
    TRANSPARENT: 'transparent',
  },
  dark: {
    PRIMARY: '#ffffff',
    SECONDARY: '#ffffff',
    BACKGROUND: '#242526',
    LIGHT_GRAY: '#696969',
    GRAY: '#c8d6e5',
    MAIN: '#ff9f43',
    SATURDAY: '#54a0ff',
    SUNDAY: '#ee5253',
    TRANSPARENT: 'transparent',
  },
};
