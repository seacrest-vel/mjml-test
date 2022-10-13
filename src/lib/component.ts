import mjml from "mjml";
import { BodyComponent } from "mjml-core";
import {evaluate, loadFile } from "./handlers";
import { ComponentValues, FactoryOptions, InitComponent, Options } from "./types";

export function createComponentFromMJML(template: string) {
  class Component extends BodyComponent {
    static renderMJML(): string {
      return template || "";
    }
    render(): string {
      return "";
    }
  }
  return Component.renderMJML();
}

export function Template(options?: Options | FactoryOptions) {
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

  if (cssFile && mjmlFile) {
    mjmlFile = mjmlFile.replace("{styles}", cssFile)
  }

  return (target: Object, propertyKey: string | symbol, descriptor: PropertyDescriptor) => {
    const method = descriptor.value;

    descriptor.value = function (values: any) {
      let mjmlTemplate = createComponentFromMJML((method as Function).call(target, values));

      if (mjmlTemplate || mjmlFile) {
        mjmlTemplate = options?.template?.top ? 
          mjmlTemplate.concat(evaluate(mjmlFile, values)) : evaluate(mjmlFile, values).concat(mjmlTemplate);
        
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

function factory(template: string , options?: FactoryOptions) {
  class Component implements InitComponent {
    @Template({
      ...options,
      files: {
        mjmlFile: options?.import || options?.files?.mjmlFile,
        cssFile: options?.importCss ? options?.import : options?.files?.cssFile
      }
    })
    create(values: ComponentValues = options?.values): string {
      return template;
    }
  }

  return options?.type === "html" ? mjml(new Component().create()).html : new Component().create();
}

export {factory as $}