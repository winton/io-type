# 🛠️ io-type

TypeScript function I/O utility types

```bash
npm install --save-dev io-type
```

## 📖 Terminology

| Term | Description |
| :--- | :--- |
| **Function** | Function with one argument (sync or async) |
| **Record** | Object with **function** values |
| **Input** | The first argument to the **function** |
| **Output** | The return value of the **function** |

## 👻 Type utilities

### Functions

| Type | Description |
| :--- | :--- |
| `InType<T>` | **Input** type |
| `OutType<T>` | **Output** type |
| `InOutInterType<T>` | Intersection of **input** and **output** type |
| `InOutUnionType<T>` | Union of **input** and **output** type |

### Records

| Type | Description |
| :--- | :--- |
| `RecordInType<T>` | **Record input** types |
| `RecordOutType<T>` | **Record output** types |
| `RecordInUnionType<T>` | **Record input** union type |
| `RecordOutUnionType<T>` | **Record output** union type |
| `RecordInInterType<T>` | **Record input** intersection type |
| `RecordOutInterType<T>` | **Record output** intersection type |