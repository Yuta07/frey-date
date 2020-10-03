import { Palette, PALETTE } from './Palette';

export type Background = 'light' | 'dark' | 'transparent';

export interface Theme {
  palette: Palette;
  saturdayColor: string;
  sundayColor: string;
  theme: Background;
}

export const theme = () => {
  const appTheme: Theme = {
    palette: PALETTE,
    saturdayColor: '#54a0ff',
    sundayColor: '#ee5253',
    theme: 'light',
  };

  return appTheme;
};
