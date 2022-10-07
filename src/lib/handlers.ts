
import { join } from "path";
import fs from "fs";
import {BehaviorSubject} from "rxjs";

export function interpolate(template: string, ...values: Array<[string, any]>) {
  const subject = new BehaviorSubject<string>(template);
  let result = template;
  
  values.forEach(([key, value]) => {
    subject.subscribe(template => {
      result = template.replace(`{{${key}}}`, value.toString());
    })
    subject.next(result)
  })
  
  subject.unsubscribe();
  
  return result;
}

export function loadFile(filename: string, ext: string) {
  const file = fs.readFileSync(join(__dirname, `../../src/components/${filename}/${filename}.${ext}`), "utf-8")
  fs.writeFileSync(join(__dirname, `../components/${filename}.${ext}`), file)
  return fs.readFileSync(join(__dirname, `../components/${filename}.${ext}`), "utf-8")
}