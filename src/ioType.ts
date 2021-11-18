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

export type InOutInterType<T> = InType<T> & OutType<T>

export type InOutUnionType<T> = InType<T> | OutType<T>

export type RecordType = Record<
  string | number | symbol,
  (...args: any[]) => any
>

export type RecordInType<Obj extends RecordType> = {
  [P in keyof Obj]: InType<Obj[P]>
}

export type RecordOutType<Obj extends RecordType> = {
  [P in keyof Obj]: OutType<Obj[P]>
}

export type RecordInUnionType<Obj extends RecordType> =
  RecordInType<Obj>[keyof Obj]

export type RecordOutUnionType<Obj extends RecordType> =
  RecordOutType<Obj>[keyof Obj]

export type RecordInInterType<Obj extends RecordType> = {
  [K in keyof Obj]: (x: RecordInType<Obj>[K]) => void
}[keyof Obj] extends (x: infer I) => void
  ? I
  : never

export type RecordOutInterType<Obj extends RecordType> = {
  [K in keyof Obj]: (x: RecordOutType<Obj>[K]) => void
}[keyof Obj] extends (x: infer I) => void
  ? I
  : never
