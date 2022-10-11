export type ComponentValues<T extends object = {}> = T;

export interface InitComponent {
  create(v?: ComponentValues): string | void;
  style?(): string;
}

export interface Options {
  files?: {mjmlFile?: string, cssFile?: string},
  template?: {top?: boolean, filePlaceholder?: string},
}
