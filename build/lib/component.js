"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TestComponent = exports.ConfigureTemplate = exports.Component = exports.createComponentFromMJML = void 0;
const mjml_core_1 = require("mjml-core");
const handlers_1 = require("./handlers");
function createComponentFromMJML(template) {
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
exports.createComponentFromMJML = createComponentFromMJML;
function Component(selector) {
    return (target, propertyKey, descriptor) => {
        descriptor.value = function (...args) {
        };
    };
}
exports.Component = Component;
function ConfigureTemplate(options) {
    let mjmlFile = "";
    let cssFile = "";
    if (options && options.files) {
        if (options.files.mjmlFile) {
            mjmlFile = (0, handlers_1.loadFile)(options.files.mjmlFile, "mjml");
        }
        if (options.files.cssFile) {
            cssFile = (0, handlers_1.loadFile)(options.files.cssFile, "css");
        }
    }
    return (target, propertyKey, descriptor) => {
        const method = descriptor.value;
        descriptor.value = function (template) {
            let mjmlTemplate = createComponentFromMJML(method.apply(target, template));
            if (mjmlTemplate || mjmlFile) {
                mjmlTemplate = options && options.template && options.template.bottom ?
                    (mjmlTemplate || "").concat((0, handlers_1.interpolate)(mjmlFile)) : (0, handlers_1.interpolate)(mjmlFile).concat(mjmlTemplate || "");
                if (options && options.template && options.template.insert) {
                    try {
                        const split = mjmlTemplate.split(options.template.insert);
                        if (split.length < 2 || split.length > 2) {
                            throw new Error("Cannot be inserted");
                        }
                        else {
                            mjmlTemplate = split[0].concat(mjmlFile).concat(split[1]);
                        }
                    }
                    catch (err) {
                        console.error(err);
                    }
                }
            }
            else {
                console.error(new Error("Any template have not been provided"));
            }
            return mjmlTemplate;
        };
        return descriptor;
    };
}
exports.ConfigureTemplate = ConfigureTemplate;
class TestComponent {
    create(values) {
    }
}
__decorate([
    ConfigureTemplate({
        files: { mjmlFile: "Test" }
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], TestComponent.prototype, "create", null);
exports.TestComponent = TestComponent;
