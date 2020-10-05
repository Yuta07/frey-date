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
exports.Text = void 0;
const react_1 = __importDefault(require("react"));
const styled_components_1 = __importStar(require("styled-components"));
exports.Text = ({ color = '#ffffff', text, type }) => {
    let content;
    switch (type) {
        case 'strong':
            content = (react_1.default.createElement(react_1.default.Fragment, null,
                react_1.default.createElement(Strong, { color: color, className: "frey-dates-strong-text" }, text)));
            break;
        case 'p':
            content = (react_1.default.createElement(react_1.default.Fragment, null,
                react_1.default.createElement(Paragraph, { color: color, className: "frey-dates-paragraph-text" }, text)));
            break;
        case 'span':
            content = (react_1.default.createElement(react_1.default.Fragment, null,
                react_1.default.createElement(Span, { color: color, className: "frey-dates-span-text" }, text)));
            break;
        default:
            break;
    }
    return react_1.default.createElement(react_1.default.Fragment, null, content);
};
const Strong = styled_components_1.default.strong `
  ${({ color }) => {
    return styled_components_1.css `
      font-size: 16px;
      color: ${color};
    `;
}}
`;
const Paragraph = styled_components_1.default.p `
  ${({ color }) => {
    return styled_components_1.css `
      font-size: 14px;
      color: ${color};
    `;
}}
`;
const Span = styled_components_1.default.span `
  ${({ color }) => {
    return styled_components_1.css `
      font-size: 14px;
      color: ${color};
    `;
}}
`;
//# sourceMappingURL=Text.js.map