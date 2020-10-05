import { Palette } from './Palette';
export declare type FreyTheme = 'light' | 'dark';
export interface Theme {
    palette: Palette;
    theme: FreyTheme;
}
export declare const theme: (theme: FreyTheme) => Theme;
