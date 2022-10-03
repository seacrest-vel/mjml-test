"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MjLayout = void 0;
const mjml_core_1 = require("mjml-core");
const Head_1 = require("../Head/Head");
class MjLayout extends mjml_core_1.BodyComponent {
    // getStyles() {
    //   return {
    //     wrapperDiv: {
    //       color: this.getAttribute('stars-color'),
    //       'font-size': this.getAttribute('font-size'),
    //     },
    //     contentP: {
    //       'text-align': this.getAttribute('align'),
    //       'font-size': '20px'
    //     },
    //     contentSpan: {
    //       color: this.getAttribute('color')
    //     }
    //   }
    // }
    static setTitle(title) {
        this.title = title;
        return this;
    }
    static renderMJML() {
        return `
      <mjml>
      <mj-head>
        <mj-title>${this.title}</mj-title>
          <mj-font name="Montserrat" href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&display=swap" />
          <mj-font name="Lato" href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,400;0,700;1,400;1,700&display=swap" />
        <mj-style>${this.styles}</mj-style>
      </mj-head>
      <mj-body>
        <mj-section>
          <mj-column>
            <mj-text css-class="layout" >mj text text</mj-text>
          </mj-column>
        </mj-section>
      <mj-body>
      </mjml>`;
    }
    render() {
        return Head_1.MjHead.renderMJML();
    }
}
exports.MjLayout = MjLayout;
MjLayout.title = "";
MjLayout.styles = `
    *, *::after, *::before {
      box-sizing: border-box;
      padding: 0;
      margin: 0;
      font-size: 16px !important;
    }
    .layout {
      margin: 0;
      padding: 0;
      background-color: aqua;
      color: #374656;
    }
  `;
