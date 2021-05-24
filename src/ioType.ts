export type InType<T> = T extends (input: infer U) => any
  ? U
  : any

export type OutType<T> = T extends (
  ...args: any[]
) => infer R
  ? R extends PromiseLike<infer U>
    ? U
    : R
  : any

export type InOutType<T> = InType<T> & OutType<T>
