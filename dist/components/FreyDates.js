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
exports.FreyDates = void 0;
const react_1 = __importStar(require("react"));
const moment_1 = __importDefault(require("moment"));
const Calendar_1 = require("../ui/organisms/Calendar");
const initialMonth = moment_1.default().month();
const initialYear = moment_1.default().year();
exports.FreyDates = ({ registeredDates, selectedDates, handleDateClick }) => {
    const [currentYear, setCurrentYear] = react_1.useState(initialYear);
    const [currentMonth, setCurrentMonth] = react_1.useState(initialMonth + 1);
    const onMovePreviousMonth = () => {
        const newMonth = currentMonth - 1 < 1 ? 12 : Number(currentMonth) - 1;
        const newYear = newMonth === 12 ? currentYear - 1 : currentYear;
        setCurrentMonth(newMonth);
        setCurrentYear(newYear);
    };
    const onMoveNextMonth = () => {
        const newMonth = currentMonth + 1 > 12 ? 1 : Number(currentMonth) + 1;
        const newYear = newMonth === 1 ? currentYear + 1 : currentYear;
        setCurrentMonth(newMonth);
        setCurrentYear(newYear);
    };
    return (react_1.default.createElement(Calendar_1.Calendar, { currentYear: currentYear, currentMonth: currentMonth, registeredDates: registeredDates, selectedDates: selectedDates, handleDateClick: handleDateClick, onMovePreviousMonth: onMovePreviousMonth, onMoveNextMonth: onMoveNextMonth }));
};
