"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.renderComponents = void 0;
const mjml_core_1 = __importDefault(require("mjml-core"));
const Layout_1 = require("./components/Layout/Layout");
function renderComponents(options) {
    const title = (options && options.title) || "Polis.ua";
    const component = (0, mjml_core_1.default)(Layout_1.MjLayout.setTitle(title).renderMJML());
    return component;
}
exports.renderComponents = renderComponents;
