import { BodyComponent } from "mjml-core";
import { evaluate, loadFile } from "./handlers";
import { ComponentValues, InitComponent } from "./types";

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

export function ConfigureValues(...values: string[]) {
  return (target: Function) => {
    target.prototype.evals = values;
    console.log(target.prototype.evals);
    
  }
}

export function ConfigureTemplate(options?: {
  files?: {mjmlFile?: string, cssFile?: string},
  template?: {bottom?: boolean, filePlaceholder?: string},
  evaluate?: Object,
}) {
  let mjmlFile = "";
  let cssFile = "";

  if (options?.files) {
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
      let mjmlTemplate = createComponentFromMJML(method.apply(target, template)) || "";

      if (mjmlTemplate || mjmlFile) {
        mjmlTemplate = options?.template?.bottom ? 
          mjmlTemplate.concat(evaluate(mjmlFile)) : evaluate(mjmlFile).concat(mjmlTemplate);
        
        if (options?.template?.filePlaceholder) {
          try {
            const split = mjmlTemplate.split(options.template.filePlaceholder);
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

export class TestComponent implements InitComponent {
  
  @ConfigureTemplate({
    files: {mjmlFile: "Test"},
    evaluate: {},
  })
  create(values?: ComponentValues) {
    return
  }
}