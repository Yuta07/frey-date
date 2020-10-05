"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDayofWeek = exports.getDateFromOpposite = exports.getDateFromBefore = exports.getNextMonthDate = exports.getPreviousMonthDate = exports.getLastDate = exports.getStartDate = exports.convertMonth = void 0;
const moment_1 = __importDefault(require("moment"));
exports.convertMonth = (month) => {
    return moment_1.default(month, 'M').format('MMMM');
};
exports.getStartDate = (year, month) => {
    return moment_1.default([year, month - 1]).format('YYYY-MM-DD');
};
exports.getLastDate = (year, month) => {
    return moment_1.default(exports.getStartDate(year, month))
        .endOf('month')
        .format('YYYY-MM-DD');
};
exports.getPreviousMonthDate = (date) => {
    return moment_1.default(date)
        .subtract(1, 'months')
        .endOf('month')
        .format('YYYY-MM-DD');
};
exports.getNextMonthDate = (date) => {
    return moment_1.default(date)
        .add(1, 'months')
        .startOf('month')
        .format('YYYY-MM-DD');
};
exports.getDateFromBefore = (year, month, day = 1) => {
    return moment_1.default([year, month - 1, day]).format('YYYY-MM-DD-dddd');
};
exports.getDateFromOpposite = (year, month, day = 0) => {
    return moment_1.default([year, month - 1, 31 - day]).format('YYYY-MM-DD-dddd');
};
exports.getDayofWeek = (date) => {
    return moment_1.default(date).day();
};
