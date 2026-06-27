import { num, str, bool, obj, date } from "./common";

function isObject(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function objArray(
  parent: Record<string, unknown>,
  key: string,
): Record<string, unknown>[] {
  const value = parent[key];
  if (!Array.isArray(value)) {
    return [];
  }
  return value.filter(isObject);
}

function objMap<T>(
  parent: Record<string, unknown>,
  key: string,
  map: (entry: Record<string, unknown>, name: string) => T,
): Record<string, T> {
  const result: Record<string, T> = {};
  for (const [name, value] of Object.entries(obj(parent, key))) {
    if (isObject(value)) {
      result[name] = map(value, name);
    }
  }
  return result;
}

function stringArray(parent: Record<string, unknown>, key: string): string[] {
  const value = parent[key];
  return Array.isArray(value)
    ? value.filter((entry): entry is string => typeof entry === "string")
    : [];
}

function numberArray(parent: Record<string, unknown>, key: string): number[] {
  const value = parent[key];
  return Array.isArray(value)
    ? value.filter((entry): entry is number => typeof entry === "number")
    : [];
}

export interface SkyBlockSkillLevel {
  readonly level: number;
  readonly totalExpRequired: number;
  readonly unlocks: string[];
}

export interface SkyBlockSkill {
  readonly name: string;
  readonly description: string;
  readonly maxLevel: number;
  readonly levels: SkyBlockSkillLevel[];
}

export interface SkyBlockSkillsResource {
  readonly lastUpdated: Date | null;
  readonly version: string;
  readonly skills: Record<string, SkyBlockSkill>;
}

function parseSkillLevels(
  skill: Record<string, unknown>,
): SkyBlockSkillLevel[] {
  return objArray(skill, "levels").map((level) => ({
    level: num(level, "level"),
    totalExpRequired: num(level, "totalExpRequired"),
    unlocks: stringArray(level, "unlocks"),
  }));
}

function parseSkill(skill: Record<string, unknown>): SkyBlockSkill {
  return {
    name: str(skill, "name"),
    description: str(skill, "description"),
    maxLevel: num(skill, "maxLevel"),
    levels: parseSkillLevels(skill),
  };
}

/** Parses the SkyBlock skill registry (`/resources/skyblock/skills`) into a typed object. */
export function parseSkyBlockSkills(
  raw: Record<string, unknown>,
): SkyBlockSkillsResource | null {
  if (!isObject(raw)) {
    return null;
  }
  return {
    lastUpdated: date(raw, "lastUpdated"),
    version: str(raw, "version"),
    skills: objMap(raw, "skills", parseSkill),
  };
}

export interface SkyBlockCollectionTier {
  readonly tier: number;
  readonly amountRequired: number;
  readonly unlocks: string[];
}

export interface SkyBlockCollectionDefinition {
  readonly name: string;
  readonly maxTiers: number;
  readonly tiers: SkyBlockCollectionTier[];
}

export interface SkyBlockCollectionCategory {
  readonly name: string;
  readonly items: Record<string, SkyBlockCollectionDefinition>;
}

export interface SkyBlockCollectionsResource {
  readonly lastUpdated: Date | null;
  readonly version: string;
  readonly collections: Record<string, SkyBlockCollectionCategory>;
}

function parseCollectionDefinition(
  definition: Record<string, unknown>,
): SkyBlockCollectionDefinition {
  return {
    name: str(definition, "name"),
    maxTiers: num(definition, "maxTiers"),
    tiers: objArray(definition, "tiers").map((tier) => ({
      tier: num(tier, "tier"),
      amountRequired: num(tier, "amountRequired"),
      unlocks: stringArray(tier, "unlocks"),
    })),
  };
}

function parseCollectionCategory(
  category: Record<string, unknown>,
): SkyBlockCollectionCategory {
  return {
    name: str(category, "name"),
    items: objMap(category, "items", parseCollectionDefinition),
  };
}

/** Parses the SkyBlock collection registry (`/resources/skyblock/collections`) into a typed object. */
export function parseSkyBlockCollections(
  raw: Record<string, unknown>,
): SkyBlockCollectionsResource | null {
  if (!isObject(raw)) {
    return null;
  }
  return {
    lastUpdated: date(raw, "lastUpdated"),
    version: str(raw, "version"),
    collections: objMap(raw, "collections", parseCollectionCategory),
  };
}

export interface SkyBlockElectionPerk {
  readonly name: string;
  readonly description: string;
  readonly minister: boolean;
}

export interface SkyBlockElectionCandidate {
  readonly name: string;
  readonly keyBenefit: string;
  readonly perks: SkyBlockElectionPerk[];
  readonly votesReceived: number;
}

export interface SkyBlockElection {
  readonly year: number;
  readonly candidates: SkyBlockElectionCandidate[];
}

export interface SkyBlockElectionMinister {
  readonly name: string;
  readonly keyBenefit: string;
  readonly perk: SkyBlockElectionPerk | null;
}

export interface SkyBlockElectionMayor {
  readonly name: string;
  readonly keyBenefit: string;
  readonly perks: SkyBlockElectionPerk[];
  readonly minister: SkyBlockElectionMinister | null;
}

export interface SkyBlockElectionResource {
  readonly lastUpdated: Date | null;
  readonly mayor: SkyBlockElectionMayor | null;
  readonly lastElection: SkyBlockElection;
  readonly currentElection: SkyBlockElection | null;
}

function parsePerk(perk: Record<string, unknown>): SkyBlockElectionPerk {
  return {
    name: str(perk, "name"),
    description: str(perk, "description"),
    minister: bool(perk, "minister"),
  };
}

function parsePerks(parent: Record<string, unknown>): SkyBlockElectionPerk[] {
  return objArray(parent, "perks").map(parsePerk);
}

function parseElection(election: Record<string, unknown>): SkyBlockElection {
  return {
    year: num(election, "year"),
    candidates: objArray(election, "candidates").map((candidate) => ({
      name: str(candidate, "name"),
      keyBenefit: str(candidate, "key"),
      perks: parsePerks(candidate),
      votesReceived: num(candidate, "votes"),
    })),
  };
}

function parseMinister(
  mayor: Record<string, unknown>,
): SkyBlockElectionMinister | null {
  const minister = mayor.minister;
  if (!isObject(minister)) {
    return null;
  }
  const perk = minister.perk;
  return {
    name: str(minister, "name"),
    keyBenefit: str(minister, "key"),
    perk: isObject(perk) ? parsePerk(perk) : null,
  };
}

/** Parses the SkyBlock election (`/resources/skyblock/election`) into a typed object. */
export function parseSkyBlockElection(
  raw: Record<string, unknown>,
): SkyBlockElectionResource | null {
  if (!isObject(raw)) {
    return null;
  }
  const mayor = obj(raw, "mayor");
  const mayorName = str(mayor, "name");
  const current = raw.current;
  return {
    lastUpdated: date(raw, "lastUpdated"),
    mayor:
      mayorName === ""
        ? null
        : {
            name: mayorName,
            keyBenefit: str(mayor, "key"),
            perks: parsePerks(mayor),
            minister: parseMinister(mayor),
          },
    lastElection: parseElection(obj(mayor, "election")),
    currentElection: isObject(current) ? parseElection(current) : null,
  };
}

export interface SkyBlockBingoGoal {
  readonly id: string;
  readonly name: string;
  readonly lore: string;
  readonly fullLore: string[];
  readonly progress: number;
  readonly tiers: number[];
  readonly requiredAmount: number | null;
}

export interface SkyBlockBingoResource {
  readonly lastUpdated: Date | null;
  readonly id: number;
  readonly name: string;
  readonly start: Date | null;
  readonly end: Date | null;
  readonly modifier: string;
  readonly goals: SkyBlockBingoGoal[];
}

/** Parses the SkyBlock bingo event (`/resources/skyblock/bingo`) into a typed object. */
export function parseSkyBlockBingo(
  raw: Record<string, unknown>,
): SkyBlockBingoResource | null {
  if (!isObject(raw)) {
    return null;
  }
  const goals = objArray(raw, "goals").map((goal) => {
    const required = goal.requiredAmount;
    return {
      id: str(goal, "id"),
      name: str(goal, "name"),
      lore: str(goal, "lore"),
      fullLore: stringArray(goal, "fullLore"),
      progress: num(goal, "progress"),
      tiers: numberArray(goal, "tiers"),
      requiredAmount: typeof required === "number" ? required : null,
    };
  });
  return {
    lastUpdated: date(raw, "lastUpdated"),
    id: num(raw, "id"),
    name: str(raw, "name"),
    start: date(raw, "start"),
    end: date(raw, "end"),
    modifier: str(raw, "modifier"),
    goals,
  };
}

