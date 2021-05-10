# 💡 I/O Types

TypeScript function I/O utility types

## ⚙️ Install

```bash
npm install fn-io-types
```

## 👻 Types

| Type | Description |
| :--- | :--- |
| `InType<T>` | Type of the first argument to a function |
| `OutType<T>` | Return type of a sync or async function |

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

import { InType } from "io-types"

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