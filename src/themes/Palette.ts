export type Palette = {
  light: {
    PRIMARY: string;
    SECONDARY: string;
    BACKGROUND: string;
    GRAY: string;
    MAIN: string;
    TRANSPARENT: string;
  };
  dark: {
    PRIMARY: string;
    SECONDARY: string;
    BACKGROUND: string;
    GRAY: string;
    MAIN: string;
    TRANSPARENT: string;
  };
  transparent: {
    PRIMARY: string;
    SECONDARY: string;
    BACKGROUND: string;
    GRAY: string;
    MAIN: string;
    TRANSPARENT: string;
  };
};

export const PALETTE: Palette = {
  light: {
    PRIMARY: '#222f3e',
    SECONDARY: '#ffffff',
    BACKGROUND: '#ffffff',
    GRAY: '#8395a7',
    MAIN: '#ff9f43',
    TRANSPARENT: 'transparent',
  },
  dark: {
    PRIMARY: '#ffffff',
    SECONDARY: '#ffffff',
    BACKGROUND: '#242526',
    GRAY: '#c8d6e5',
    MAIN: '#ff9f43',
    TRANSPARENT: 'transparent',
  },
  transparent: {
    PRIMARY: '#222f3e',
    SECONDARY: '#ffffff',
    BACKGROUND: '',
    GRAY: '#8395a7',
    MAIN: '#ff9f43',
    TRANSPARENT: 'transparent',
  },
};
