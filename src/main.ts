import express from 'express';
import { $, createComponentFromMJML } from "./lib/component";
import { Footer, FooterStyles } from './components/Footer/Footer';
import { Logo } from './components/Logo/Logo';
import { TestComponent } from './components/Test/Test';

const app = express();
app.use(express.json());

const component = createComponentFromMJML(`<mjml>
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
          ${FooterStyles}
        </mj-style>
        <mj-attributes>
            <mj-all font-family="Lato" />
            <mj-class name="thank-you" font-size="25px" align="center" />
        </mj-attributes>
    </mj-head>
    <mj-body css-class="global">
        ${Logo}
        <mj-section>
            <mj-column>
            <mj-text font-family="Montserrat">text</mj-text>
            </mj-column>
        </mj-section>
        ${Footer}
    </mj-body>
</mjml>`)

const test = new TestComponent()
const o = {kek: "KEK", ins: "INS"}

console.log("TEST", test.create(o));

app.get("/", (req, res) => {

    // res.send(mjml(test.create()).html)
})

app.listen(3200) 