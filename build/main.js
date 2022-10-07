"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const component_1 = require("./lib/component");
// import { loadMJML } from './base/load-mjml';
const Footer_1 = require("./components/Footer/Footer");
const Logo_1 = require("./components/Logo/Logo");
const app = (0, express_1.default)();
app.use(express_1.default.json());
// loadMJML("Footer/Footer").then(buffer => {
//     console.log("TEMPLATE ================= :", createComponent(buffer.toString()));
// });
// readFile(join(__dirname, "..", "./src/components/Footer/Footer.mjml"), "utf-8").then(buffer => {
//     console.log("TEMPLATE ================= :", createComponentFromMJML(buffer.toString()))
// }).catch(err => console.log("Eeeee", err))
const component = (0, component_1.createComponentFromMJML)(`<mjml>
    <mj-head>
        <mj-title>Layout</mj-title>
        <mj-font name="Montserrat" href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&display=swap" />
        <mj-font name="Lato" href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,400;0,700;1,400;1,700&display=swap" />
        <mj-style>
        *, *::after, *::before {
            box-sizing: border-box;
            padding: 0;
            margin: 0;
          }
          .layout {
            margin: 0;
            padding: 0;
            background-color: aqua;
            color: #374656;
          }
          .global {
            font-family: "Lato", sans-serif;
            font-size: 16px;
            width: 100%;
            max-width: 1024px;
            margin: 0 auto;
            padding: 32px 0;
            background-color: #ffffff;
            color: #374656;
          }
          ${Footer_1.FooterStyles}
        </mj-style>
        <mj-attributes>
            <mj-all font-family="Lato" />
            <mj-class name="thank-you" font-size="25px" align="center" />
        </mj-attributes>
    </mj-head>
    <mj-body css-class="global">
        ${Logo_1.Logo}
        <mj-section>
            <mj-column>
            <mj-text font-family="Montserrat">text</mj-text>
            </mj-column>
        </mj-section>
        ${Footer_1.Footer}
    </mj-body>
</mjml>`);
const test = new component_1.TestComponent();
console.log("TEST", test.create());
app.get("/", (req, res) => {
    // res.send(mjml(test.create()).html)
});
app.listen(3200);
