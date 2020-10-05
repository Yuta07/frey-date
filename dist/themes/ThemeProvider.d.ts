import React, { FC } from 'react';
import { Theme } from './Theme';
export declare const ThemeContext: React.Context<Theme>;
declare type Props = {
    theme: Theme;
};
export declare const ThemeProvider: FC<Props>;
export declare const useTheme: () => Theme;
export {};
