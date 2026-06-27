import { num, str, bool, obj } from "./common";

export interface AchievementTier {
  readonly tier: number;
  readonly points: number;
  readonly amount: number;
}

export interface AchievementOneTime {
  readonly name: string;
  readonly description: string;
  readonly secret: boolean;
  readonly legacy: boolean;
  readonly points: number;
  readonly gamePercentUnlocked: number;
  readonly globalPercentUnlocked: number;
}

export interface AchievementTiered {
  readonly name: string;
  readonly description: string;
  readonly legacy: boolean;
  readonly tiers: readonly AchievementTier[];
}

export interface AchievementsGame {
  readonly totalPoints: number;
  readonly totalLegacyPoints: number;
  readonly oneTime: Record<string, AchievementOneTime>;
  readonly tiered: Record<string, AchievementTiered>;
}

function toRecord(value: unknown): Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value)
    ? (value as Record<string, unknown>)
    : {};
}

function toArray(value: unknown): readonly unknown[] {
  return Array.isArray(value) ? value : [];
}

function parseOneTime(value: unknown): AchievementOneTime {
  const raw = toRecord(value);
  return {
    name: str(raw, "name"),
    description: str(raw, "description"),
    secret: bool(raw, "secret"),
    legacy: bool(raw, "legacy"),
    points: num(raw, "points"),
    gamePercentUnlocked: num(raw, "gamePercentUnlocked"),
    globalPercentUnlocked: num(raw, "globalPercentUnlocked"),
  };
}

function parseTier(value: unknown): AchievementTier {
  const raw = toRecord(value);
  return {
    tier: num(raw, "tier"),
    points: num(raw, "points"),
    amount: num(raw, "amount"),
  };
}

function parseTiered(value: unknown): AchievementTiered {
  const raw = toRecord(value);
  return {
    name: str(raw, "name"),
    description: str(raw, "description"),
    legacy: bool(raw, "legacy"),
    tiers: toArray(raw.tiers).map(parseTier),
  };
}

function parseGame(value: unknown): AchievementsGame {
  const raw = toRecord(value);
  const oneTime: Record<string, AchievementOneTime> = {};
  for (const [key, achievement] of Object.entries(obj(raw, "one_time"))) {
    oneTime[key] = parseOneTime(achievement);
  }
  const tiered: Record<string, AchievementTiered> = {};
  for (const [key, achievement] of Object.entries(obj(raw, "tiered"))) {
    tiered[key] = parseTiered(achievement);
  }
  return {
    totalPoints: num(raw, "total_points"),
    totalLegacyPoints: num(raw, "total_legacy_points"),
    oneTime,
    tiered,
  };
}

/** Parses the achievement registry (`/resources/achievements`) into a typed object. */
export function parseAchievements(
  achievements: Record<string, unknown>,
): Record<string, AchievementsGame> {
  const result: Record<string, AchievementsGame> = {};
  for (const [game, value] of Object.entries(achievements)) {
    result[game] = parseGame(value);
  }
  return result;
}

