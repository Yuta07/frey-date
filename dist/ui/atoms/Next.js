"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Next = void 0;
const react_1 = __importDefault(require("react"));
const styled_components_1 = __importDefault(require("styled-components"));
const ThemeProvider_1 = require("../../themes/ThemeProvider");
exports.Next = ({ onMoveNextMonth }) => {
    const themes = ThemeProvider_1.useTheme();
    const { palette, theme } = themes;
    return (react_1.default.createElement(NextButton, { onClick: onMoveNextMonth, className: "frey-dates-next-button" },
        react_1.default.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 20, height: 20, viewBox: "0 0 20 20", fill: "none", stroke: palette[theme].GRAY, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" },
            react_1.default.createElement("path", { d: "M9 18l6-6-6-6" }))));
};
const NextButton = styled_components_1.default.button `
  padding: 4px;
  margin: 0 auto;
  border: none;
  background: none;
  text-align: center;
  cursor: pointer;

  &:hover {
    transition: 0.3s;
    opacity: 0.8;
  }

  &:focus {
    outline: none;
  }
`;
//# sourceMappingURL=Next.js.map