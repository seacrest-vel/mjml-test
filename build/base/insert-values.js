"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.insertValues = void 0;
function insertValues(template, ...values) {
    let result = template;
    values.forEach(([subject, value]) => {
        const regex = new RegExp(`{{${subject}}}`, "g");
        result = result.replace(regex, value.toString());
    });
    return result;
}
exports.insertValues = insertValues;
