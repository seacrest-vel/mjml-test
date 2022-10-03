"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mjml_1 = __importDefault(require("mjml"));
const Layout_1 = require("./components/Layout/Layout");
const mjml_2 = require("./mjml");
const component = (0, mjml_1.default)(Layout_1.MjLayout.renderMJML());
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use("/", (req, res) => {
    res.send((0, mjml_2.renderComponents)({ title: "test" }).html);
});
app.listen(3000);
