# NBT Decoding

The NBT decoders turn Hypixel's base64 + gzipped-NBT blobs (item bytes, inventory dumps, and similar payloads) into readonly, fully-typed JavaScript objects. They are strict-raw: every field mirrors the decoded NBT compound exactly, with no computed levels, ratios, or aggregates of any kind.

## decodeNbt

Synchronously decodes a Hypixel base64 + gzipped-NBT blob into a simplified NBT compound, mapping the raw decoded tag tree field-for-field into a plain readonly object.

```ts
export function decodeNbt(base64: string): NbtCompound | null;
```

The input is decoded from base64, gunzipped, parsed as big-endian uncompressed NBT, and then simplified into a plain object via `prismarine-nbt`'s `simplify`.

### Returned type

```ts
export type NbtCompound = Readonly<Record<string, unknown>>;
```

`NbtCompound` is an open record: keys are the NBT tag names and values are `unknown` (the simplified NBT values). No specific keys are guaranteed by the type.

### Null and empty behavior

- Returns `null` when `base64` is not a string or is an empty string.
- Returns `null` when the base64-decoded buffer is empty.
- Returns `null` when decompression, NBT parsing, or simplification throws (all errors are caught).
- Returns `null` when the simplified result is not a non-array object (i.e. it is a primitive, `null`, or an array).
- Otherwise returns the simplified value cast to `NbtCompound`.

## decodeItemBytes

Synchronously decodes a Hypixel base64 + gzipped-NBT inventory blob into typed items, one entry per slot, mapping each NBT item tag field-for-field into an `NbtItem`.

```ts
export function decodeItemBytes(base64: string): NbtItem[];
```

The blob is decoded the same way as [`decodeNbt`](#decodenbt); the item list is read from the root compound's `i` key, and each list entry is converted into an [`NbtItem`](#nbtitem).

### Null and empty behavior

- Returns `[]` when the underlying decode (see [`decodeNbt`](#decodenbt)) returns `null`.
- Returns `[]` when the root compound's `i` field is not an array.
- Skips any list entry that is not a non-array object (primitives, `null`, and nested arrays are ignored).
- Otherwise returns one [`NbtItem`](#nbtitem) per valid entry, in list order.

### NbtItem

The per-slot item object returned in the `decodeItemBytes` array.

```ts
export interface NbtItem {
  readonly id: number;
  readonly count: number;
  readonly damage: number;
  readonly tag: NbtItemTag;
}
```

| Field    | Type                        | Notes                                                                          |
| -------- | --------------------------- | ------------------------------------------------------------------------------ |
| `id`     | `number`                    | The item's numeric id (from the raw `id` field; `0` when absent).              |
| `count`  | `number`                    | The stack count (from the raw `Count` field; `0` when absent).                 |
| `damage` | `number`                    | The item damage/metadata value (from the raw `Damage` field; `0` when absent). |
| `tag`    | [`NbtItemTag`](#nbtitemtag) | The decoded item tag tree.                                                     |

### NbtItemTag

The decoded `tag` compound of an item.

```ts
export interface NbtItemTag {
  readonly display: NbtItemDisplay;
  readonly enchantments: readonly NbtEnchantment[];
  readonly extraAttributes: NbtExtraAttributes;
  readonly raw: NbtCompound;
}
```

| Field             | Type                                             | Notes                                                                 |
| ----------------- | ------------------------------------------------ | --------------------------------------------------------------------- |
| `display`         | [`NbtItemDisplay`](#nbtitemdisplay)              | Display name, lore, and color.                                        |
| `enchantments`    | readonly [`NbtEnchantment`](#nbtenchantment)`[]` | Decoded from the tag's `ench` list; `[]` when absent or not an array. |
| `extraAttributes` | [`NbtExtraAttributes`](#nbtextraattributes)      | The SkyBlock `ExtraAttributes` compound.                              |
| `raw`             | [`NbtCompound`](#decodenbt)                      | The complete, unmodified `tag` compound.                              |

### NbtItemDisplay

The item's `display` compound.

```ts
export interface NbtItemDisplay {
  readonly name: string;
  readonly lore: readonly string[];
  readonly color: number | null;
}
```

| Field   | Type                | Notes                                                                               |
| ------- | ------------------- | ----------------------------------------------------------------------------------- | -------------------------------------------------------- |
| `name`  | `string`            | The display `Name`; `""` when absent.                                               |
| `lore`  | readonly `string[]` | The display `Lore`; only string entries are kept, `[]` when absent or not an array. |
| `color` | `number             | null`                                                                               | The display `color`; `null` when absent or not a number. |

### NbtEnchantment

A single entry in the item tag's `enchantments` array (decoded from the NBT `ench` list).

```ts
export interface NbtEnchantment {
  readonly id: number;
  readonly level: number;
}
```

| Field   | Type     | Notes                                                                  |
| ------- | -------- | ---------------------------------------------------------------------- |
| `id`    | `number` | The enchantment id (from the entry's `id` field; `0` when absent).     |
| `level` | `number` | The enchantment level (from the entry's `lvl` field; `0` when absent). |

### NbtExtraAttributes

The SkyBlock `ExtraAttributes` compound. This interface spreads the entire raw `ExtraAttributes` compound and then overrides a set of known fields, so arbitrary additional keys are also present.

```ts
export interface NbtExtraAttributes {
  readonly id: string;
  readonly uuid: string | null;
  readonly timestamp: string | number | readonly [number, number] | null;
  readonly rarity_upgrades: number;
  readonly modifier: string | null;
  readonly enchantments: Readonly<Record<string, number>>;
  readonly hot_potato_count: number;
  readonly [key: string]: unknown;
}
```

| Field              | Type                               | Notes                                                           |
| ------------------ | ---------------------------------- | --------------------------------------------------------------- | ---------------------------------------------------------------- | ----- | ------------------------------------------------------------ |
| `id`               | `string`                           | The SkyBlock item id; `""` when absent.                         |
| `uuid`             | `string                            | null`                                                           | The item's unique uuid; `null` when absent or not a string.      |
| `timestamp`        | `string                            | number                                                          | readonly [number, number]                                        | null` | A string, a number, or a two-number tuple; `null` otherwise. |
| `rarity_upgrades`  | `number`                           | Number of rarity upgrades applied; `0` when absent.             |
| `modifier`         | `string                            | null`                                                           | The item's reforge/modifier; `null` when absent or not a string. |
| `enchantments`     | `Readonly<Record<string, number>>` | Map of enchantment name to level; only numeric levels are kept. |
| `hot_potato_count` | `number`                           | Number of hot potato book applications; `0` when absent.        |
| `[key: string]`    | `unknown`                          | Any additional raw `ExtraAttributes` keys, preserved as-is.     |

