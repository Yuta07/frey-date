import React, { createContext, FC, useContext } from 'react';
import { theme, Theme } from './Theme';

export const ThemeContext = createContext<Theme>(theme('light'));

type Props = {
  theme: Theme;
};

export const ThemeProvider: FC<Props> = ({ theme, children }) => {
  return <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>;
};

export const useTheme = () => {
  const appTheme = useContext(ThemeContext);

  return appTheme;
};
