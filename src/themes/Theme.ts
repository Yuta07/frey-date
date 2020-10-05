import { Palette, PALETTE } from './Palette';

export type FreyTheme = 'light' | 'dark';

export interface Theme {
  palette: Palette;
  theme: FreyTheme;
}

export const theme = (theme: FreyTheme) => {
  const appTheme: Theme = {
    palette: PALETTE,
    theme: theme,
  };

  return appTheme;
};
