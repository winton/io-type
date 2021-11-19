# 🛠️ io-type

TypeScript function I/O utility types

```bash
npm install --save-dev io-type
```

## 📖 Terminology

| Term | Description |
| :--- | :--- |
| **Function** | Any single-argument function (sync or async) |
| **Input** | *Function* argument |
| **Output** | *Function* return value |
| **Record** | Object with *function* values |

## 👻 Type utilities

### Functions

| Type | Description |
| :--- | :--- |
| `InType<T>` | *Input* type |
| `OutType<T>` | *Output* type |
| `InOutInterType<T>` | Intersection of *input* and *output* type |
| `InOutUnionType<T>` | Union of *input* and *output* type |

### Records

| Type | Description |
| :--- | :--- |
| `RecordInType<T>` | *Record input* types |
| `RecordOutType<T>` | *Record output* types |
| `RecordInUnionType<T>` | *Record input* union type |
| `RecordOutUnionType<T>` | *Record output* union type |
| `RecordInInterType<T>` | *Record input* intersection type |
| `RecordOutInterType<T>` | *Record output* intersection type |