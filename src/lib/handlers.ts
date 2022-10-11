
import { join } from "path";
import fs from "fs";

export function evaluate(template: string, obj?: Object) {
  let result = template;

  if (obj) {
    Object.entries(obj).forEach(([key, value]) => {
      result = result.replace(`{${key}}`, value.toString())
    })
  }

  return result;
}

export function loadFile(filename: string, ext: string) {
  const file = fs.readFileSync(join(__dirname, `../../src/components/${filename}/${filename}.${ext}`), "utf-8")
  fs.writeFileSync(join(__dirname, `../components/${filename}.${ext}`), file)
  return fs.readFileSync(join(__dirname, `../components/${filename}.${ext}`), "utf-8")
}
