import { num, obj, str } from "./common";

export interface HousingLeaderboardSettings {
  readonly resetType: string;
}

export interface HousingStats {
  readonly packages: readonly string[];
  readonly layoutItems: Record<string, unknown>;
  readonly layoutItemsById: Record<string, Record<string, unknown>>;
  readonly coins: number;
  readonly activeKillMessages: string;
  readonly leaderboardSettings: HousingLeaderboardSettings;
}

function parsePackages(housing: Record<string, unknown>): readonly string[] {
  const value = housing.packages;
  return Array.isArray(value)
    ? value.filter((entry): entry is string => typeof entry === "string")
    : [];
}

function parseLayoutItemsById(
  housing: Record<string, unknown>,
): Record<string, Record<string, unknown>> {
  const result: Record<string, Record<string, unknown>> = {};
  for (const key of Object.keys(housing)) {
    if (key.startsWith("layout_items_")) {
      result[key] = obj(housing, key);
    }
  }
  return result;
}

function parseLeaderboardSettings(
  housing: Record<string, unknown>,
): HousingLeaderboardSettings {
  const settings = obj(housing, "leaderboardSettings");
  return {
    resetType: str(settings, "resetType"),
  };
}

/** Parses a player's Housing stats block (`stats.Housing`) into a typed object. */
export function parseHousingStats(
  block: Record<string, unknown>,
): HousingStats | null {
  if (Object.keys(block).length === 0) {
    return null;
  }
  return {
    packages: parsePackages(block),
    layoutItems: obj(block, "layout_items"),
    layoutItemsById: parseLayoutItemsById(block),
    coins: num(block, "coins"),
    activeKillMessages: str(block, "activeKillMessages"),
    leaderboardSettings: parseLeaderboardSettings(block),
  };
}

