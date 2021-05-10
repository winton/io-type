# 🐕‍🦺 In/Out Type

TypeScript function I/O utility types

## ⚙️ Install

```bash
npm install in-out-type
```

## ⛲ Purpose

Function I/O types eliminate the need to split out arguments and return values to external interfaces.

This removes one level of obscurity from both the function implementation and the function type references.

## 👻 Types

| Type | Description |
| :--- | :--- |
| `InType<T>` | Given a function type, get the type of the first argument |
| `OutType<T>` | Given a function type, get the return type |

## 📽️ Example

Here we create a function that combines two other function's outputs:

```typescript
import { InType, OutType } from "in-out-type"

async function helloHi({
  hello,
  hi
}: InType<typeof helloWord> &
  InType<typeof hiUniverse>
): Promise<
  OutType<typeof helloWord> &
  OutType<typeof hiUniverse>
> {
  return Object.assign(
    helloWorld({ hello }),
    await hiUniverse({ hi }),
  )
}

function helloWorld(
  { hello }: { hello: boolean }
): { world: boolean } {
  if (hello) {
    return { world: true }
  }
}

async function hiUniverse(
  { hi }: { hi: boolean }
): Promise<{ universe: boolean }> {
  if (hi) {
    return { universe: true }
  }
}
```