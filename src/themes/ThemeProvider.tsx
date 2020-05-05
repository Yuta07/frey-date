import * as React from 'react';
import { theme, Theme } from './Theme';

export const ThemeContext = React.createContext<Theme>(theme());

type Props = {
  theme: Theme;
  children: React.ReactNode;
};

export const ThemeProvider = ({ theme, children }: Props) => {
  return <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>;
};
