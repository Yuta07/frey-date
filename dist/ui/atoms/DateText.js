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
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DateText = void 0;
const react_1 = __importDefault(require("react"));
const styled_components_1 = __importStar(require("styled-components"));
const ThemeProvider_1 = require("../../themes/ThemeProvider");
exports.DateText = ({ registeredDates, handleDateClick, onMovePreviousMonth, onMoveNextMonth, date, }) => {
    const themes = ThemeProvider_1.useTheme();
    const { palette, theme } = themes;
    const handleClickDate = () => {
        switch (date.type) {
            case 'current':
                handleDateClick(date.date);
                break;
            case 'prev':
                onMovePreviousMonth();
                break;
            case 'next':
                onMoveNextMonth();
                break;
            default:
                break;
        }
    };
    let textColor = palette[theme].PRIMARY;
    if (date.type === 'prev' || date.type === 'next') {
        textColor = palette[theme].GRAY;
    }
    else if (date.date.match(/Saturday/)) {
        textColor = palette[theme].SATURDAY;
    }
    else if (date.date.match(/Sunday/)) {
        textColor = palette[theme].SUNDAY;
    }
    const selected = registeredDates.indexOf(date.date) !== -1 ? true : false;
    return (react_1.default.createElement(DateButton, { selected: selected, themes: themes, onClick: handleClickDate, className: "frey-dates-date-button" },
        react_1.default.createElement(Text, { color: textColor, selected: selected, className: "frey-dates-date-text" }, Number(date.date.split('-')[2]).toString())));
};
const DateButton = styled_components_1.default.button `
  ${({ selected, themes }) => {
    const { palette, theme } = themes;
    return styled_components_1.css `
      width: 34px;
      padding: 0.5rem 0;
      border: none;
      border-radius: 8px;
      background: ${selected ? palette[theme].MAIN : 'none'};
      cursor: pointer;

      &:focus {
        outline: none;
      }

      ${selected
        ? `&:hover {
          opacity: 0.8;
          transition: 0.3s;
        }
        `
        : `
        &:hover {
          background: ${palette[theme].LIGHT_GRAY};
          transition: 0.3s;
        }`}
    `;
}}
`;
const Text = styled_components_1.default.span `
  ${({ color, selected }) => {
    return styled_components_1.css `
      font-size: 14px;
      color: ${selected ? '#ffffff' : color};
    `;
}}
`;
//# sourceMappingURL=DateText.js.map