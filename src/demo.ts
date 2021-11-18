import {
  InType,
  OutType,
  InOutInterType,
  InOutUnionType,
  RecordInType,
  RecordOutType,
  RecordInUnionType,
  RecordOutUnionType,
  RecordInInterType,
  RecordOutInterType,
} from "./ioType"

const numberFn = (input: {
  inputNumber: number
}): { outputNumber: number } => ({
  outputNumber: input.inputNumber,
})

const stringFn = (input: {
  inputString: string
}): { outputString: string } => ({
  outputString: input.inputString,
})

export type InTypeNumber = InType<typeof numberFn>
export type InTypeString = InType<typeof stringFn>

export type OutTypeNumber = OutType<typeof numberFn>
export type OutTypeString = OutType<typeof stringFn>

export type InOutInterTypeNumber = InOutInterType<
  typeof numberFn
>
export type InOutInterTypeString = InOutInterType<
  typeof stringFn
>

export type InOutUnionTypeNumber = InOutUnionType<
  typeof numberFn
>
export type InOutUnionTypeString = InOutUnionType<
  typeof stringFn
>

const both = { numberFn, stringFn }

export type RecordInTypeBoth = RecordInType<typeof both>
export type RecordOutTypeBoth = RecordOutType<typeof both>

export type RecordInUnionTypeBoth = RecordInUnionType<
  typeof both
>
export type RecordOutUnionTypeBoth = RecordOutUnionType<
  typeof both
>

export type RecordInInterTypeBoth = RecordInInterType<
  typeof both
>
export type RecordOutInterTypeBoth = RecordOutInterType<
  typeof both
>
