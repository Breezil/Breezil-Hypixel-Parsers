import { num, str, bool, obj, date } from "./common";

export interface GuildAchievementTier {
  readonly tier: number;
  readonly amount: number;
}

export interface GuildOneTimeAchievement {
  readonly name: string;
  readonly description: string;
  readonly points: number;
}

export interface GuildTieredAchievement {
  readonly name: string;
  readonly description: string;
  readonly tiers: readonly GuildAchievementTier[];
}

export interface GuildAchievements {
  readonly success: boolean;
  readonly lastUpdated: Date | null;
  readonly oneTime: Record<string, GuildOneTimeAchievement>;
  readonly tiered: Record<string, GuildTieredAchievement>;
}

function toRecord(value: unknown): Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value)
    ? (value as Record<string, unknown>)
    : {};
}

function toArray(value: unknown): readonly unknown[] {
  return Array.isArray(value) ? value : [];
}

function parseTier(value: unknown): GuildAchievementTier {
  const raw = toRecord(value);
  return {
    tier: num(raw, "tier"),
    amount: num(raw, "amount"),
  };
}

function parseOneTime(value: unknown): GuildOneTimeAchievement {
  const raw = toRecord(value);
  return {
    name: str(raw, "name"),
    description: str(raw, "description"),
    points: num(raw, "points"),
  };
}

function parseTiered(value: unknown): GuildTieredAchievement {
  const raw = toRecord(value);
  return {
    name: str(raw, "name"),
    description: str(raw, "description"),
    tiers: toArray(raw.tiers).map(parseTier),
  };
}

/** Parses the guild achievement registry (`/resources/guilds/achievements`) into a typed object. */
export function parseGuildAchievements(
  raw: Record<string, unknown>,
): GuildAchievements | null {
  if (typeof raw !== "object" || raw === null || Array.isArray(raw)) {
    return null;
  }
  const oneTime: Record<string, GuildOneTimeAchievement> = {};
  for (const [key, value] of Object.entries(obj(raw, "one_time"))) {
    oneTime[key] = parseOneTime(value);
  }
  const tiered: Record<string, GuildTieredAchievement> = {};
  for (const [key, value] of Object.entries(obj(raw, "tiered"))) {
    tiered[key] = parseTiered(value);
  }
  return {
    success: bool(raw, "success"),
    lastUpdated: date(raw, "lastUpdated"),
    oneTime,
    tiered,
  };
}

