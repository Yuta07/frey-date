"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CalendarHeader = void 0;
const react_1 = __importDefault(require("react"));
const styled_components_1 = __importStar(require("styled-components"));
const Next_1 = require("../atoms/Next");
const Previous_1 = require("../atoms/Previous");
const Text_1 = require("../atoms/Text");
const ThemeProvider_1 = require("../../themes/ThemeProvider");
exports.CalendarHeader = ({ currentYear, currentMonth, onMovePreviousMonth, onMoveNextMonth }) => {
    const themes = ThemeProvider_1.useTheme();
    const { palette, theme } = themes;
    return (react_1.default.createElement(Header, { themes: themes, className: "frey-dates-header" },
        react_1.default.createElement(DateContent, { className: "frey-dates-header-date" },
            react_1.default.createElement(Text_1.Text, { color: palette[theme].PRIMARY, text: currentYear.toString() + '年 ' + currentMonth.toString() + '月', type: "strong" })),
        react_1.default.createElement(ArrowContent, { className: "frey-dates-header-arrow" },
            react_1.default.createElement(Previous_1.Previous, { onMovePreviousMonth: onMovePreviousMonth }),
            react_1.default.createElement(Next_1.Next, { onMoveNextMonth: onMoveNextMonth }))));
};
const Header = styled_components_1.default.header `
  ${({ themes }) => {
    const { palette, theme } = themes;
    return styled_components_1.css `
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      padding: 10px 5px;
      color: ${palette[theme].PRIMARY};
    `;
}}
`;
const DateContent = styled_components_1.default.div `
  width: 180px;
  padding: 0 10px;
`;
const ArrowContent = styled_components_1.default.div `
  width: 100px;
  padding: 0 10px;
  display: flex;
  justify-content: space-between;
`;
