import { Palette, PALETTE } from './Palette';

export type Background = 'light' | 'dark';

export interface Theme {
  palette: Palette;
  theme: Background;
}

export const theme = () => {
  const appTheme: Theme = {
    palette: PALETTE,
    theme: 'light',
  };

  return appTheme;
};
