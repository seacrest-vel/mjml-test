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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.$ = exports.Template = exports.createComponentFromMJML = void 0;
const mjml_1 = __importDefault(require("mjml"));
const mjml_core_1 = require("mjml-core");
const handlers_1 = require("./handlers");
function createComponentFromMJML(template) {
    class Component extends mjml_core_1.BodyComponent {
        static renderMJML() {
            return template || "";
        }
        render() {
            return "";
        }
    }
    return Component.renderMJML();
}
exports.createComponentFromMJML = createComponentFromMJML;
function Template(options) {
    let mjmlFile = "";
    let cssFile = "";
    if (options === null || options === void 0 ? void 0 : options.files) {
        if (options.files.mjmlFile) {
            mjmlFile = (0, handlers_1.loadFile)(options.files.mjmlFile, "mjml");
        }
        if (options.files.cssFile) {
            cssFile = (0, handlers_1.loadFile)(options.files.cssFile, "css");
        }
    }
    if (cssFile && mjmlFile) {
        mjmlFile = mjmlFile.replace("{styles}", cssFile);
    }
    return (target, propertyKey, descriptor) => {
        const method = descriptor.value;
        descriptor.value = function (values) {
            var _a, _b;
            let mjmlTemplate = createComponentFromMJML(method.call(target, values));
            if (mjmlTemplate || mjmlFile) {
                mjmlTemplate = ((_a = options === null || options === void 0 ? void 0 : options.template) === null || _a === void 0 ? void 0 : _a.top) ?
                    mjmlTemplate.concat((0, handlers_1.evaluate)(mjmlFile, values)) : (0, handlers_1.evaluate)(mjmlFile, values).concat(mjmlTemplate);
                if ((_b = options === null || options === void 0 ? void 0 : options.template) === null || _b === void 0 ? void 0 : _b.filePlaceholder) {
                    try {
                        const split = mjmlTemplate.split(options.template.filePlaceholder);
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
exports.Template = Template;
function factory(template, options) {
    var _a, _b;
    class Component {
        create(values = options === null || options === void 0 ? void 0 : options.values) {
            return template;
        }
    }
    __decorate([
        Template(Object.assign(Object.assign({}, options), { files: {
                mjmlFile: (options === null || options === void 0 ? void 0 : options.import) || ((_a = options === null || options === void 0 ? void 0 : options.files) === null || _a === void 0 ? void 0 : _a.mjmlFile),
                cssFile: (options === null || options === void 0 ? void 0 : options.importCss) ? options === null || options === void 0 ? void 0 : options.import : (_b = options === null || options === void 0 ? void 0 : options.files) === null || _b === void 0 ? void 0 : _b.cssFile
            } })),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", String)
    ], Component.prototype, "create", null);
    return (options === null || options === void 0 ? void 0 : options.type) === "html" ? (0, mjml_1.default)(new Component().create()).html : new Component().create();
}
exports.$ = factory;
