export type ComponentValues<T = Object | string> = T | string[];

export declare interface InitComponent {
  create(v?: ComponentValues): string | void;
}