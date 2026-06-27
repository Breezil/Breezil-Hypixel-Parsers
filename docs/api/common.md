# Helpers

Low-level, safe field-reader helpers used internally by the `@breezil/hypixel-parsers` parsers to read values out of raw Hypixel API JSON objects without throwing on missing or mistyped fields. They perform no computation beyond type-coercion guards and mirror the raw data exactly.

All helpers accept a possibly-`undefined` source object and a string `key`, and each returns a safe default when the field is absent or has an unexpected type. None of these are parse functions; they are the primitive accessors the parsers are built on.

## num

Safe numeric read from a raw Hypixel object. Returns the value when it is a `number`, otherwise `0`.

```ts
export function num(
  obj: Record<string, unknown> | undefined,
  key: string,
): number;
```

Null/empty behavior: returns `0` when `obj` is `undefined`, when `key` is missing, or when the value is not a `number`.

## str

Safe string read. Returns the value when it is a `string`, otherwise `""`.

```ts
export function str(
  obj: Record<string, unknown> | undefined,
  key: string,
): string;
```

Null/empty behavior: returns `""` when `obj` is `undefined`, when `key` is missing, or when the value is not a `string`.

## bool

Safe boolean read. Returns `true` only when the value is strictly equal to `true`.

```ts
export function bool(
  obj: Record<string, unknown> | undefined,
  key: string,
): boolean;
```

Null/empty behavior: returns `false` for `undefined`, missing keys, and any value that is not exactly `true` (including truthy non-boolean values).

## obj

Reads a nested object, or returns an empty object so callers can keep reading safely. Returns the value only when it is a non-null, non-array object.

```ts
export function obj(
  parent: Record<string, unknown> | undefined,
  key: string,
): Record<string, unknown>;
```

Null/empty behavior: returns `{}` when `parent` is `undefined`, when `key` is missing, when the value is `null`, when the value is an array, or when the value is not an object.

## date

Reads an epoch-milliseconds field as a `Date`, or `null` when absent. Returns a `Date` only when the value is a `number` greater than `0`.

```ts
export function date(
  obj: Record<string, unknown> | undefined,
  key: string,
): Date | null;
```

Null/empty behavior: returns `null` when `obj` is `undefined`, when `key` is missing, when the value is not a `number`, or when the value is `<= 0`.

