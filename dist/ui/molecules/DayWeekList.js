"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DayWeekList = void 0;
const react_1 = __importDefault(require("react"));
const styled_components_1 = __importDefault(require("styled-components"));
const Text_1 = require("../atoms/Text");
const ThemeProvider_1 = require("../../themes/ThemeProvider");
exports.DayWeekList = () => {
    const themes = ThemeProvider_1.useTheme();
    const { palette, theme } = themes;
    const DayOfWeek = ['月', '火', '水', '木', '金', '土', '日'];
    const renderDayofWeekList = DayOfWeek.map((dayweek) => {
        return (react_1.default.createElement(DayofWeekList, { key: dayweek, className: "frey-dates-dayweek-list" },
            react_1.default.createElement(Text_1.Text, { color: palette[theme].GRAY, text: dayweek, type: "span" })));
    });
    return react_1.default.createElement(DayWeekUnordered, { className: "frey-dates-dayweek" }, renderDayofWeekList);
};
const DayWeekUnordered = styled_components_1.default.ul `
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding: 15px 5px 5px;
  width: 100%;
  list-style: none;
`;
const DayofWeekList = styled_components_1.default.li `
  width: calc(100% / 7);
  text-align: center;
`;
//# sourceMappingURL=DayWeekList.js.map