"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loadMJML = void 0;
const fs = require("fs/promises");
const path = require("path");
function loadMJML(mjmlFile) {
    return __awaiter(this, void 0, void 0, function* () {
        console.log("PATH", path.join(__dirname, mjmlFile));
        let buffer = "";
        yield fs.readFile(path.join(__dirname, mjmlFile), "utf-8").then((buffer) => {
            buffer = buffer;
        });
        return buffer.toString();
    });
}
exports.loadMJML = loadMJML;
