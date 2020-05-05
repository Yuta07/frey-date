import { useContext } from 'react';
import { ThemeContext } from '../themes/ThemeProvider';

export const useTheme = () => {
  const appTheme = useContext(ThemeContext);

  return appTheme;
};
