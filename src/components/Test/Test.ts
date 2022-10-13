import { Template } from "../../lib/component";
import { InitComponent } from "../../lib/types";

export class TestComponent implements InitComponent {

  @Template({
    files: {mjmlFile: "TesT"},
  })
  create<ComponentValues>(values: ComponentValues) {
  }
}