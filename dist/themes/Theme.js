"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.theme = void 0;
const Palette_1 = require("./Palette");
exports.theme = () => {
    const appTheme = {
        palette: Palette_1.PALETTE,
        theme: 'light',
    };
    return appTheme;
};
