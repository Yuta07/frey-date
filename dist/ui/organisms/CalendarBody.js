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
exports.CalendarBody = void 0;
const react_1 = __importStar(require("react"));
const styled_components_1 = __importDefault(require("styled-components"));
const CalendarList_1 = require("../molecules/CalendarList");
const DayWeekList_1 = require("../molecules/DayWeekList");
const ConvertDate_1 = require("../../utils/ConvertDate");
exports.CalendarBody = ({ registeredDates, handleDateClick, currentYear, currentMonth, onMovePreviousMonth, onMoveNextMonth, }) => {
    const startDayofWeek = ConvertDate_1.getDayofWeek(ConvertDate_1.getStartDate(currentYear, currentMonth));
    const previousMonthDate = ConvertDate_1.getPreviousMonthDate(ConvertDate_1.getStartDate(currentYear, currentMonth));
    const nextMonthDate = ConvertDate_1.getNextMonthDate(ConvertDate_1.getLastDate(currentYear, currentMonth));
    const days = [];
    // push current month day
    for (let i = 1; i <= Number(ConvertDate_1.getLastDate(currentYear, currentMonth).split('-')[2]); i++) {
        days.push({ date: ConvertDate_1.getDateFromBefore(currentYear, currentMonth, i), type: 'current' });
    }
    // unshift previous month day
    if (startDayofWeek > 1) {
        const previousDate = previousMonthDate.split('-');
        for (let i = 0; i < startDayofWeek - 1; i++) {
            days.unshift({
                date: ConvertDate_1.getDateFromOpposite(Number(previousDate[0]), Number(previousDate[1]), 31 - Number(previousDate[2]) + i),
                type: 'prev',
            });
        }
    }
    else if (startDayofWeek < 1) {
        const previousDate = previousMonthDate.split('-');
        for (let i = 0; i < 6; i++) {
            days.unshift({
                date: ConvertDate_1.getDateFromOpposite(Number(previousDate[0]), Number(previousDate[1]), 31 - Number(previousDate[2]) + i),
                type: 'prev',
            });
        }
    }
    // push next month day
    for (let i = days.length, count = 1; i < 42; i++) {
        const nextDate = nextMonthDate.split('-');
        days.push({ date: ConvertDate_1.getDateFromBefore(Number(nextDate[0]), Number(nextDate[1]), count), type: 'next' });
        count++;
    }
    // transform two-dimensional array
    const dateList = [];
    for (let i = 1; i <= 6; i++) {
        const arr = [];
        for (let j = 7; 0 < j; j--) {
            arr.push(days[i * 7 - j]);
        }
        dateList.push(arr);
    }
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(DayWeekList_1.DayWeekList, null),
        react_1.default.createElement(CalenderBodyField, { className: "frey-dates-body-field" }, dateList.map((list, index) => {
            return (react_1.default.createElement(react_1.Fragment, { key: index },
                react_1.default.createElement(CalendarList_1.CalendarList, { registeredDates: registeredDates, handleDateClick: handleDateClick, onMovePreviousMonth: onMovePreviousMonth, onMoveNextMonth: onMoveNextMonth, dateList: list })));
        }))));
};
const CalenderBodyField = styled_components_1.default.div `
  padding: 5px 5px;
`;
