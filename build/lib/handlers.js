"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loadFile = exports.evaluate = void 0;
const fs_1 = __importDefault(require("fs"));
const mjml_json_1 = require("./mjml.json");
const LIB = `${process.cwd()}/${mjml_json_1.lib}/`.replace("//", "/");
const BUILD = `${process.cwd()}/${mjml_json_1.build}/`.replace("//", "/");
const SRC = `${process.cwd()}/${mjml_json_1.src}/`.replace("//", "/");
function evaluate(template, obj) {
    let result = template;
    if (obj) {
        Object.entries(obj).forEach(([key, value]) => {
            result = result.replace(`{${key}}`, value.toString());
        });
    }
    return result;
}
exports.evaluate = evaluate;
function loadFile(filename, ext) {
    const build = `${BUILD}${filename}.${ext}`.replace("//", "/");
    const src = `${SRC}${filename}/${filename}.${ext}`.replace("//", "/");
    const file = fs_1.default.readFileSync(src, "utf-8");
    fs_1.default.writeFileSync(build, file);
    return fs_1.default.readFileSync(build, "utf-8");
}
exports.loadFile = loadFile;
