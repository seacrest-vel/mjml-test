"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MjLayout = void 0;
const mjml_core_1 = require("mjml-core");
/*
  Our component is a (useless) simple text tag, that adds colored stars around the text.
  It can take 3 attributes, to specify size and colors.
*/
class MjLayout extends mjml_core_1.BodyComponent {
    getStyles() {
        return {
            wrapperDiv: {
                color: this.getAttribute('stars-color'),
                'font-size': this.getAttribute('font-size'),
            },
            contentP: {
                'text-align': this.getAttribute('align'),
                'font-size': '20px'
            },
            contentSpan: {
                color: this.getAttribute('color')
            }
        };
    }
    static renderMJML() {
        return `
      <mjml>
      <mj-body>
        <mj-column>
          <mj-text>mj text text</mj-text>
        </mj-column>
      <mj-body>
      </mjml>`;
    }
    render() {
        return `
      <div
        ${this.htmlAttributes({
            class: this.getAttribute('css-class'),
            style: 'wrapperDiv'
        })}
      >
      <p ${this.htmlAttributes({
            style: 'contentP'
        })}>
        <span>★</span>
        <span
          ${this.htmlAttributes({
            style: 'contentSpan' // This will add the 'contentSpan' attributes from getStyles() as inline style
        })}
        >
          ${this.getContent()}
        </span>
        <span>★</span>
      </p>
      </div>
		`;
    }
}
exports.MjLayout = MjLayout;
MjLayout.defaultAttributes = {
    'stars-color': 'yellow',
    color: 'black',
    'font-size': '12px',
    'align': 'center',
};
