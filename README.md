# 🐕‍🦺 In/Out Type

TypeScript function in/out utility types

## ⚙️ Install

```bash
npm install in-out-type
```

## 👻 Types

| Type | Description |
| :--- | :--- |
| `InType<T>` | Given a function type, get the type of the first argument |
| `OutType<T>` | Given a function type, get the return type |

## 📽️ Example

```typescript
export function helloWorld(
  { hello }: { hello: boolean }
): { world: boolean } {
  if (hello) {
    return { world: true }
  }
}

export async function hiUniverse(
  { hi }: { hi: boolean }
): Promise<{ universe: boolean }> {
  if (hi) {
    return { universe: true }
  }
}

import { InType, OutType } from "fn-io-types"

export async function helloHi({
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
```