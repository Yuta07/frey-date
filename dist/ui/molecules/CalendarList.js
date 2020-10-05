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
exports.CalendarList = void 0;
const react_1 = __importDefault(require("react"));
const styled_components_1 = __importStar(require("styled-components"));
const moment_1 = __importDefault(require("moment"));
const DateText_1 = require("../atoms/DateText");
const ThemeProvider_1 = require("../../themes/ThemeProvider");
const currentDate = moment_1.default().format('YYYY-MM-DD-dddd');
exports.CalendarList = ({ registeredDates, handleDateClick, onMovePreviousMonth, onMoveNextMonth, dateList, }) => {
    const themes = ThemeProvider_1.useTheme();
    const renderCalendarList = dateList.map((list) => {
        return (react_1.default.createElement(List, { key: list.date, current: list.date === currentDate, themes: themes, className: "frey-dates-list" },
            react_1.default.createElement(DateText_1.DateText, { registeredDates: registeredDates, handleDateClick: handleDateClick, onMovePreviousMonth: onMovePreviousMonth, onMoveNextMonth: onMoveNextMonth, date: list })));
    });
    return react_1.default.createElement(CalendarUnordered, { className: "frey-dates-day-list" }, renderCalendarList);
};
const CalendarUnordered = styled_components_1.default.ul `
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding-top: 5px;
  width: 100%;
  list-style: none;
`;
const List = styled_components_1.default.li `
  ${({ current, themes }) => {
    const { palette, theme } = themes;
    return styled_components_1.css `
      width: calc(100% / 7);
      text-align: center;
      position: relative;

      ${current &&
        `
        &:before {
          content: '';
          position: absolute;
          bottom: -3px;
          left: 6px;
          width: 28px;
          border-bottom: 2px solid ${palette[theme].GRAY};
        }
      `}
    `;
}}
`;
//# sourceMappingURL=CalendarList.js.map