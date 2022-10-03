import mjml2html, {BodyComponent, MJMLParseResults} from "mjml-core";

import {MjLayout} from "./components/Layout/Layout";

export function renderComponents(options?: {title?: string}): MJMLParseResults {
  const title = (options && options.title) || "Polis.ua";

  const component = mjml2html(MjLayout.setTitle(title).renderMJML())

  return component;
}