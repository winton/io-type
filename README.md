# 🛠️ I/O Type

TypeScript function I/O utility types

## ⚙️ Install

```bash
npm install io-type
```

## 📖 Terminology

| Term | Description |
| :--- | :--- |
| **Function** | (A)sync function |
| **Record** | Object with (a)sync function values |
| **Input** | The first argument to the function |
| **Output** | The return value of the function |

## 👻 Type utilities

### Functions

| Type | Description |
| :--- | :--- |
| `InType<T>` | Input type |
| `OutType<T>` | Output type |
| `InOutInterType<T>` | Intersection of input and output type |
| `InOutUnionType<T>` | Union of input and output type |

### Records

| Type | Description |
| :--- | :--- |
| `RecordInType<T>` | Record input types |
| `RecordOutType<RT>` | Record output types |
| `RecordInUnionType<RT>` | Record input union type |
| `RecordOutUnionType<RT>` | Record output union type |
| `RecordInInterType<RT>` | Record input intersection type |
| `RecordOutInterType<RT>` | Record output intersection type |