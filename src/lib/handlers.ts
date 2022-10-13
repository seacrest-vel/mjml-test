
import fs from "fs";
import path, { join, basename } from "path";
import {lib, build, src} from "./mjml.json";

const LIB = `${process.cwd()}/${lib}/`.replace("//", "/");
const BUILD = `${process.cwd()}/${build}/`.replace("//", "/");
const SRC = `${process.cwd()}/${src}/`.replace("//", "/");

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
  const build =`${BUILD}${filename}.${ext}`.replace("//", "/");
  const src = `${SRC}${filename}/${filename}.${ext}`.replace("//", "/");
  
  const file = fs.readFileSync(src, "utf-8");
  fs.writeFileSync(build, file);
  
  return fs.readFileSync(build, "utf-8")
}