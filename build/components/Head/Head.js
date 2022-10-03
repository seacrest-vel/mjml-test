"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MjHead = void 0;
const mjml_core_1 = require("mjml-core");
class MjHead extends mjml_core_1.HeadComponent {
    static setTitle(title) {
        this.title = title;
        return this;
    }
    static setStyles(...styles) {
        this.styles = [...this.styles, ...styles];
        return this;
    }
    static insert(insertion) {
        this.inserted = insertion;
        return this;
    }
    static renderMJML(mjml, options) {
        return `
            
        `;
    }
}
exports.MjHead = MjHead;
MjHead.title = "";
MjHead.styles = [];
MjHead.inserted = "";
