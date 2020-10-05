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
exports.Calendar = void 0;
const react_1 = __importDefault(require("react"));
const styled_components_1 = __importStar(require("styled-components"));
const CalendarBody_1 = require("./CalendarBody");
const CalendarHeader_1 = require("../molecules/CalendarHeader");
const ThemeProvider_1 = require("../../themes/ThemeProvider");
exports.Calendar = ({ registeredDates, selectedDates, handleDateClick, currentYear, currentMonth, onMovePreviousMonth, onMoveNextMonth, }) => {
    const themes = ThemeProvider_1.useTheme();
    return (react_1.default.createElement(Wrapper, { themes: themes, className: "frey-dates-wrapper" },
        react_1.default.createElement(CalendarHeader_1.CalendarHeader, { currentYear: currentYear, currentMonth: currentMonth, onMovePreviousMonth: onMovePreviousMonth, onMoveNextMonth: onMoveNextMonth }),
        react_1.default.createElement(CalendarBody_1.CalendarBody, { registeredDates: registeredDates, selectedDates: selectedDates, handleDateClick: handleDateClick, currentYear: currentYear, currentMonth: currentMonth, onMovePreviousMonth: onMovePreviousMonth, onMoveNextMonth: onMoveNextMonth })));
};
const Wrapper = styled_components_1.default.div `
  ${({ themes }) => {
    const { palette, theme } = themes;
    return styled_components_1.css `
      height: 100%;
      width: 320px;
      padding: 10px;
      background: ${palette[theme].BACKGROUND};
      border-radius: 15px;
    `;
}}
`;
