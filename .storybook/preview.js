import React from 'react';
import { GlobalStyle } from '../src/shared/global';
import { theme } from '../src/themes/Theme';
import { ThemeProvider } from '../src/themes/ThemeProvider';

const createTheme = theme('light');

// Global decorator to apply the styles to all stories
export const decorators = [
  (Story) => (
    <ThemeProvider theme={createTheme}>
      <GlobalStyle />
      <Story />
    </ThemeProvider>
  ),
];

export const parameters = {
  actions: {
    argTypesRegex: '^on[A-Z].*',
  },
};
