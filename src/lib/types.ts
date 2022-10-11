export type ComponentValues<T extends object = Object> = T | null | undefined;

export interface InitComponent {
  create(v?: ComponentValues): string | void;
  style?(): string;
}

export interface Options {
  files?: {
    mjmlFile?: string,
    cssFile?: string
  };
  template?: {
    top?: boolean,
    filePlaceholder?: string
  };
}

export interface FactoryOptions extends Options {
  type?: "html" | "mjml";
  values?: ComponentValues;
  import?: string;
  importCss?: boolean
}
