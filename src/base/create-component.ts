import { BodyComponent } from "mjml-core";


export function createComponent(template: string) {
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