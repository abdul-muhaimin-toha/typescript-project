# TypeScript Project

This is a TypeScript project using `bun` as the package manager. It compiles TypeScript files and runs them efficiently.

## Project Structure

-  **`src/`**: Contains the TypeScript source files.
-  **`dist/`**: Contains the compiled JavaScript files after building.

## Prerequisites

Ensure that you have `bun` installed. If not, you can install it by following the instructions on the [Bun website](https://bun.sh).

Additionally, you should have `typescript` installed as a development dependency in your project.

## Installation

1. Clone the repository or download the project files.
2. Install the necessary dependencies:

   ```bash
   bun install
   ```

## Available Scripts

The following commands are available through `bun`:

### `dev`

Runs the project in development mode, using `bun` to directly execute the TypeScript code.

```bash
bun src/index.ts
```

### `build`

Compiles the TypeScript code into JavaScript using `bunx tsc`.

```bash
bunx tsc
```

### `start`

Starts the compiled application.

```bash
bun dist/index.js
```

## TypeScript Configuration

The project uses TypeScript for static typing and transpiling. The `tsconfig.json` file should be present in the root directory with the necessary TypeScript configuration.

## Contributing

Feel free to fork the repository, make improvements, and submit pull requests. Contributions are welcome!

## License

This project is licensed under the MIT License.

# Blog related to Typescript

## 1. Understanding the Differences Between Interfaces and Types in TypeScript

In TypeScript, both **interfaces** and **types** define shapes of objects, but they have key differences in functionality.

### Declaration Syntax:

-  **Interface:**

```ts
interface Vehicle {
   make: string;
   model: string;
   year: number;
}
```

-  **Type:**

```ts
type Vehicle = {
   make: string;
   model: string;
   year: number;
};
```

### Extending and Merging:

-  **Interface**: Can extend other interfaces and merge declarations.

```ts
interface Car extends Vehicle {
   doors: number;
}
```

-  **Type**: Can extend, but no merging support.

```ts
type Car = Vehicle & { doors: number };
```

### Flexibility and Advanced Types:

-  **Types**: Support unions, intersections, mapped types, and conditional types.

```ts
type Pet = 'dog' | 'cat'; // Union type
```

### Keyof and Index Signatures:

Both **types** and **interfaces** support `keyof` and index signatures, but **types** are preferred for complex types like unions.

```ts
type Vehicle = {
   make: string;
   model: string;
};

type VehicleKey = keyof Vehicle; // "make" | "model"

const key: VehicleKey = 'make'; // Valid
```

### Conclusion:

-  Use **interfaces** for defining reusable and extendable object shapes.
-  Use **types** for flexibility, including union, intersection, and advanced constructs.

## 2. Understanding the `keyof` Keyword in TypeScript

In TypeScript, the `keyof` keyword is used to extract the keys of an object type and create a union of those keys. This allows you to work with the property names of an object in a type-safe way.

### Example:

```ts
type Vehicle = {
   make: string;
   model: string;
   year: number;
};

type VehicleKeys = keyof Vehicle; // "make" | "model" | "year"

const key: VehicleKeys = 'make'; // Valid
const invalidKey: VehicleKeys = 'color'; // Error: Type '"color"' is not assignable to type '"make" | "model" | "year"'
```

### How It Works:

-  **`keyof`** takes an object type (e.g., `Vehicle`) and produces a union type of its keys.
-  In the example above, `"make" | "model" | "year"` is a union type representing all the keys of the `Vehicle` type.
-  This ensures that only valid keys can be assigned to variables of type `VehicleKeys`, making your code more type-safe.

### Conclusion:

Use the `keyof` keyword in TypeScript when you want to ensure type safety by working with the keys of an object type. It helps avoid errors by restricting the keys to valid property names.
