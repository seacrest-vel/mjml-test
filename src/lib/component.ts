import { BodyComponent } from "mjml-core";
import { interpolate, loadFile } from "./handlers";

export function createComponentFromMJML(template: string) {
  class Component extends BodyComponent {
    static renderMJML(): string {
      return template;
    }
    render(): string {
      return "";
    }
  }
  return Component.renderMJML();
}

export function Component(selector: string) {
  return (target: Object, propertyKey: string | symbol, descriptor: PropertyDescriptor) => {
    descriptor.value = function (...args: any[]) {

    }
  }
}

export function ConfigureTemplate(options?: {
  files?: {mjmlFile?: string, cssFile?: string},
  template?: {bottom?: boolean, insert?: string}
  interpolate?: Array<[string, any]>
}) {
  let mjmlFile = "";
  let cssFile = "";

  if (options && options.files) {
    if (options.files.mjmlFile) {
      mjmlFile = loadFile(options.files.mjmlFile, "mjml");
    }
    if (options.files.cssFile) {
      cssFile = loadFile(options.files.cssFile, "css");
    }
  }

  return (target: Object, propertyKey: string | symbol, descriptor: PropertyDescriptor) => {
    const method = descriptor.value;

    descriptor.value = function (template: string) {
      let mjmlTemplate = createComponentFromMJML(method.apply(target, template));

      if (mjmlTemplate || mjmlFile) {
        mjmlTemplate = options && options.template && options.template.bottom ? 
        (mjmlTemplate || "").concat(interpolate(mjmlFile)) : interpolate(mjmlFile).concat(mjmlTemplate || "");
        
        if (options && options.template && options.template.insert) {
          try {
            const split = mjmlTemplate.split(options.template.insert);
            if (split.length < 2 || split.length > 2) {
              throw new Error("Cannot be inserted");
            } else {
              mjmlTemplate = split[0].concat(mjmlFile).concat(split[1]);
            }
          } catch (err) {
            console.error(err);
          }
        }

      } else {
        console.error(new Error("Any template have not been provided"))
      }

      return mjmlTemplate;
    }

    return descriptor;
  }
}

declare interface InitComponent {
  create(): string | void;
}

export class TestComponent implements InitComponent {

  @ConfigureTemplate({
    files: {mjmlFile: "Test"}
  })
  create(values?: any) {
    
  }
}