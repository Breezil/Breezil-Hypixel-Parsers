import { parseUncompressed, simplify } from "prismarine-nbt";
import { gunzipSync } from "node:zlib";

import { num, str, obj } from "./common";

export type NbtCompound = Readonly<Record<string, unknown>>;

export interface NbtItemDisplay {
  readonly name: string;
  readonly lore: readonly string[];
  readonly color: number | null;
}

export interface NbtEnchantment {
  readonly id: number;
  readonly level: number;
}

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

export interface NbtItemTag {
  readonly display: NbtItemDisplay;
  readonly enchantments: readonly NbtEnchantment[];
  readonly extraAttributes: NbtExtraAttributes;
  readonly raw: NbtCompound;
}

export interface NbtItem {
  readonly id: number;
  readonly count: number;
  readonly damage: number;
  readonly tag: NbtItemTag;
}

function decode(base64: string): NbtCompound | null {
  if (typeof base64 !== "string" || base64.length === 0) {
    return null;
  }
  try {
    const gzipped = Buffer.from(base64, "base64");
    if (gzipped.length === 0) {
      return null;
    }
    const decompressed = gunzipSync(gzipped);
    const parsed = parseUncompressed(decompressed, "big");
    const simplified: unknown = simplify(parsed);
    if (
      typeof simplified !== "object" ||
      simplified === null ||
      Array.isArray(simplified)
    ) {
      return null;
    }
    return simplified as NbtCompound;
  } catch {
    return null;
  }
}

function stringArray(value: unknown): readonly string[] {
  if (!Array.isArray(value)) {
    return [];
  }
  return value.filter((entry): entry is string => typeof entry === "string");
}

function toTimestamp(
  value: unknown,
): string | number | readonly [number, number] | null {
  if (typeof value === "string" || typeof value === "number") {
    return value;
  }
  if (
    Array.isArray(value) &&
    value.length === 2 &&
    typeof value[0] === "number" &&
    typeof value[1] === "number"
  ) {
    return [value[0], value[1]];
  }
  return null;
}

function toDisplay(tag: Record<string, unknown>): NbtItemDisplay {
  const display = obj(tag, "display");
  const color = display.color;
  return {
    name: str(display, "Name"),
    lore: stringArray(display.Lore),
    color: typeof color === "number" ? color : null,
  };
}

function toEnchantments(
  tag: Record<string, unknown>,
): readonly NbtEnchantment[] {
  const value = tag.ench;
  if (!Array.isArray(value)) {
    return [];
  }
  const result: NbtEnchantment[] = [];
  for (const entry of value) {
    if (typeof entry !== "object" || entry === null || Array.isArray(entry)) {
      continue;
    }
    const enchantment = entry as Record<string, unknown>;
    result.push({ id: num(enchantment, "id"), level: num(enchantment, "lvl") });
  }
  return result;
}

function toExtraAttributes(tag: Record<string, unknown>): NbtExtraAttributes {
  const extra = obj(tag, "ExtraAttributes");
  const rawEnchantments = obj(extra, "enchantments");
  const enchantments: Record<string, number> = {};
  for (const key of Object.keys(rawEnchantments)) {
    const level = rawEnchantments[key];
    if (typeof level === "number") {
      enchantments[key] = level;
    }
  }
  const uuid = extra.uuid;
  const modifier = extra.modifier;
  return {
    ...extra,
    id: str(extra, "id"),
    uuid: typeof uuid === "string" ? uuid : null,
    timestamp: toTimestamp(extra.timestamp),
    rarity_upgrades: num(extra, "rarity_upgrades"),
    modifier: typeof modifier === "string" ? modifier : null,
    enchantments,
    hot_potato_count: num(extra, "hot_potato_count"),
  };
}

function toItem(raw: Record<string, unknown>): NbtItem {
  const tag = obj(raw, "tag");
  return {
    id: num(raw, "id"),
    count: num(raw, "Count"),
    damage: num(raw, "Damage"),
    tag: {
      display: toDisplay(tag),
      enchantments: toEnchantments(tag),
      extraAttributes: toExtraAttributes(tag),
      raw: tag,
    },
  };
}

/** Synchronously decodes a Hypixel base64 + gzipped-NBT blob into a simplified compound, or null on empty/invalid input. */
export function decodeNbt(base64: string): NbtCompound | null {
  return decode(base64);
}

/** Synchronously decodes a Hypixel base64 + gzipped-NBT inventory blob into typed items (one per slot), or [] on empty/invalid input. */
export function decodeItemBytes(base64: string): NbtItem[] {
  const root = decode(base64);
  if (root === null) {
    return [];
  }
  const list = (root as Record<string, unknown>).i;
  if (!Array.isArray(list)) {
    return [];
  }
  const items: NbtItem[] = [];
  for (const entry of list) {
    if (typeof entry !== "object" || entry === null || Array.isArray(entry)) {
      continue;
    }
    items.push(toItem(entry as Record<string, unknown>));
  }
  return items;
}

