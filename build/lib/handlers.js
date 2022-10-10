"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loadFile = exports.evaluate = void 0;
const path_1 = require("path");
const fs_1 = __importDefault(require("fs"));
const rxjs_1 = require("rxjs");
function evaluate(template, obj) {
    const subject = new rxjs_1.BehaviorSubject(template);
    let result = template;
    obj && Object.entries(obj).forEach(([key, value]) => {
        subject.subscribe(template => {
            result = template.replace(`{${key}}`, value.toString());
        });
        subject.next(result);
    });
    subject.unsubscribe();
    return result;
}
exports.evaluate = evaluate;
function loadFile(filename, ext) {
    const file = fs_1.default.readFileSync((0, path_1.join)(__dirname, `../../src/components/${filename}/${filename}.${ext}`), "utf-8");
    fs_1.default.writeFileSync((0, path_1.join)(__dirname, `../components/${filename}.${ext}`), file);
    return fs_1.default.readFileSync((0, path_1.join)(__dirname, `../components/${filename}.${ext}`), "utf-8");
}
exports.loadFile = loadFile;
