import { bool, num, obj, str } from "./common";

export interface MainLobbyFishingPeriodStats {
  readonly counts: Readonly<Record<string, Readonly<Record<string, number>>>>;
  readonly individual: Readonly<
    Record<string, Readonly<Record<string, number>>>
  >;
  readonly periods: Readonly<Record<string, MainLobbyFishingPeriodStats>>;
}

export interface MainLobbyFishingEnchant {
  readonly level: number;
  readonly toggle: boolean;
}

export interface MainLobbyFishingOrbs {
  readonly counts: Readonly<Record<string, number>>;
  readonly weight: Readonly<Record<string, number>>;
}

export interface MainLobbyFishing {
  readonly activeFishHookTrail: string;
  readonly activeFishingRod: string;
  readonly enchants: Readonly<Record<string, MainLobbyFishingEnchant>>;
  readonly fireproofing: Readonly<Record<string, number>>;
  readonly ice: Readonly<Record<string, boolean>>;
  readonly orbs: MainLobbyFishingOrbs;
  readonly settings: Readonly<Record<string, boolean>>;
  readonly specialFish: Readonly<Record<string, boolean>>;
  readonly stats: Readonly<Record<string, MainLobbyFishingPeriodStats>>;
}

export interface MainLobbyBecomeAnimal {
  readonly eaten: Readonly<Record<string, number>>;
  readonly settings: Readonly<Record<string, boolean>>;
}

export interface MainLobbyLeaderboardSettings {
  readonly fishingType: string;
}

export interface MainLobbyStats {
  readonly coins: number;
  readonly packages: readonly string[];
  readonly activeFishHookTrail: string;
  readonly fishingRewardTracked: string;
  readonly discoveredZones: Readonly<Record<string, boolean>>;
  readonly historicalRecords: Readonly<Record<string, boolean>>;
  readonly questNPCTutorials: Readonly<Record<string, boolean>>;
  readonly relics: Readonly<Record<string, boolean>>;
  readonly flags: Readonly<Record<string, boolean>>;
  readonly leaderboardSettings: MainLobbyLeaderboardSettings;
  readonly becomeRabbit: MainLobbyBecomeAnimal;
  readonly becomeSheep: MainLobbyBecomeAnimal;
  readonly fishing: MainLobbyFishing;
}

function strList(
  block: Record<string, unknown>,
  key: string,
): readonly string[] {
  const value = block[key];
  return Array.isArray(value)
    ? value.filter((item): item is string => typeof item === "string")
    : [];
}

function boolMap(
  parent: Record<string, unknown>,
  key: string,
): Readonly<Record<string, boolean>> {
  const value = obj(parent, key);
  const result: Record<string, boolean> = {};
  for (const [name, flag] of Object.entries(value)) {
    if (typeof flag === "boolean") {
      result[name] = flag;
    }
  }
  return result;
}

function flagMap(
  block: Record<string, unknown>,
): Readonly<Record<string, boolean>> {
  const result: Record<string, boolean> = {};
  for (const [name, flag] of Object.entries(block)) {
    if (typeof flag === "boolean") {
      result[name] = flag;
    }
  }
  return result;
}

function numMap(
  value: Record<string, unknown>,
): Readonly<Record<string, number>> {
  const result: Record<string, number> = {};
  for (const [name, count] of Object.entries(value)) {
    if (typeof count === "number") {
      result[name] = count;
    }
  }
  return result;
}

function isNumMap(value: Record<string, unknown>): boolean {
  return Object.values(value).every((entry) => typeof entry === "number");
}

function parseFishingPeriod(
  value: Record<string, unknown>,
): MainLobbyFishingPeriodStats {
  const counts: Record<string, Readonly<Record<string, number>>> = {};
  const individual: Record<string, Readonly<Record<string, number>>> = {};
  const periods: Record<string, MainLobbyFishingPeriodStats> = {};
  for (const [key, raw] of Object.entries(value)) {
    if (typeof raw !== "object" || raw === null || Array.isArray(raw)) {
      continue;
    }
    const child = raw as Record<string, unknown>;
    if (key === "individual") {
      for (const category of Object.keys(child)) {
        individual[category] = numMap(obj(child, category));
      }
    } else if (isNumMap(child)) {
      counts[key] = numMap(child);
    } else {
      periods[key] = parseFishingPeriod(child);
    }
  }
  return { counts, individual, periods };
}

function parseFishing(block: Record<string, unknown>): MainLobbyFishing {
  const fishing = obj(block, "fishing");
  const enchantsRaw = obj(fishing, "enchants");
  const enchants: Record<string, MainLobbyFishingEnchant> = {};
  for (const name of Object.keys(enchantsRaw)) {
    const enchant = obj(enchantsRaw, name);
    enchants[name] = {
      level: num(enchant, "level"),
      toggle: bool(enchant, "toggle"),
    };
  }
  const orbs = obj(fishing, "orbs");
  const statsRaw = obj(fishing, "stats");
  const stats: Record<string, MainLobbyFishingPeriodStats> = {};
  for (const period of Object.keys(statsRaw)) {
    stats[period] = parseFishingPeriod(obj(statsRaw, period));
  }
  return {
    activeFishHookTrail: str(fishing, "activeFishHookTrail"),
    activeFishingRod: str(fishing, "activeFishingRod"),
    enchants,
    fireproofing: numMap(obj(fishing, "fireproofing")),
    ice: boolMap(fishing, "ice"),
    orbs: { counts: numMap(orbs), weight: numMap(obj(orbs, "weight")) },
    settings: boolMap(fishing, "settings"),
    specialFish: boolMap(fishing, "special_fish"),
    stats,
  };
}

function parseBecomeAnimal(
  block: Record<string, unknown>,
  key: string,
): MainLobbyBecomeAnimal {
  const animal = obj(block, key);
  return {
    eaten: numMap(obj(animal, "eaten")),
    settings: boolMap(animal, "settings"),
  };
}

/** Parses a player's MainLobby stats (`stats.MainLobby`) into a typed object. */
export function parseMainLobby(
  block: Record<string, unknown>,
): MainLobbyStats | null {
  if (Object.keys(block).length === 0) {
    return null;
  }
  return {
    coins: num(block, "coins") || num(block, "tokens"),
    packages: strList(block, "packages"),
    activeFishHookTrail: str(block, "activeFishHookTrail"),
    fishingRewardTracked: str(block, "fishing_reward_tracked"),
    discoveredZones: boolMap(block, "discoveredZones"),
    historicalRecords: boolMap(block, "historicalRecords"),
    questNPCTutorials: boolMap(block, "questNPCTutorials"),
    relics: boolMap(block, "relics"),
    flags: flagMap(block),
    leaderboardSettings: {
      fishingType: str(obj(block, "leaderboardSettings"), "fishingType"),
    },
    becomeRabbit: parseBecomeAnimal(block, "becomeRabbit"),
    becomeSheep: parseBecomeAnimal(block, "becomeSheep"),
    fishing: parseFishing(block),
  };
}

