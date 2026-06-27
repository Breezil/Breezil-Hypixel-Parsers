import { str } from "./common";

export interface VanityItem {
  readonly key: string;
  readonly name: string;
  readonly rarity: string;
  readonly package: string;
}

export interface VanityRarity {
  readonly name: string;
  readonly color: string;
}

export interface VanityResource {
  readonly types: readonly VanityItem[];
  readonly rarities: readonly VanityRarity[];
}

function isObject(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function parseVanity(data: Record<string, unknown>): VanityResource {
  const types = Array.isArray(data.types) ? data.types : [];
  const rarities = Array.isArray(data.rarities) ? data.rarities : [];
  return {
    types: types.filter(isObject).map((item) => ({
      key: str(item, "key"),
      name: str(item, "name"),
      rarity: str(item, "rarity"),
      package: str(item, "package"),
    })),
    rarities: rarities.filter(isObject).map((rarity) => ({
      name: str(rarity, "name"),
      color: str(rarity, "color"),
    })),
  };
}

/** Parses the vanity pet registry (`/resources/vanity/pets`) into a typed object. */
export function parseVanityPets(data: Record<string, unknown>): VanityResource {
  return parseVanity(data);
}

/** Parses the vanity companion registry (`/resources/vanity/companions`) into a typed object. */
export function parseVanityCompanions(
  data: Record<string, unknown>,
): VanityResource {
  return parseVanity(data);
}

