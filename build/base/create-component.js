"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createComponent = void 0;
const mjml_core_1 = require("mjml-core");
function createComponent(template) {
    class Component extends mjml_core_1.BodyComponent {
        static renderMJML() {
            return template;
        }
        render() {
            return "";
        }
    }
    return Component.renderMJML();
}
exports.createComponent = createComponent;
