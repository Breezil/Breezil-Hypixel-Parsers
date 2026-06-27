import { num, str, bool } from "./common";

export interface ArenaBrawlModeStats {
  readonly damage: number;
  readonly kills: number;
  readonly deaths: number;
  readonly healed: number;
  readonly wins: number;
  readonly losses: number;
  readonly games: number;
  readonly winStreak: number;
}

export interface ArenaBrawlAbilities {
  readonly offensive: string;
  readonly support: string;
  readonly utility: string;
  readonly ultimate: string;
}

export interface ArenaBrawlUpgradeLevels {
  readonly cooldown: number;
  readonly damage: number;
  readonly energy: number;
  readonly health: number;
}

export interface ArenaBrawlDatedRating {
  readonly rating: number;
  readonly position: number;
}

const MODES = ["ffa", "1v1", "2v2", "4v4"] as const;

type ArenaBrawlModeId = (typeof MODES)[number];

const RUNE_PREFIX = "rune_";

const DATED_RATING_PATTERN = /^Arena_arena_rating_(\d+_\d+)_(rating|position)$/;

export interface ArenaBrawlStats {
  readonly coins: number;
  readonly coinsSpent: number;
  readonly wins: number;
  readonly keys: number;
  readonly chests: number;
  readonly rating: number;
  readonly penalty: number;
  readonly hat: string;
  readonly selectedSword: string;
  readonly activeRune: string;
  readonly activeKillEffect: string;
  readonly activeMeleeTrail: string;
  readonly prefixColor: string;
  readonly shortenedPrefix: boolean;
  readonly showWinPrefix: boolean;
  readonly pregameArmor: boolean;
  readonly packages: readonly string[];
  readonly runes: Readonly<Record<string, number>>;
  readonly datedRatings: Readonly<Record<string, ArenaBrawlDatedRating>>;
  readonly upgrades: ArenaBrawlUpgradeLevels;
  readonly abilities: ArenaBrawlAbilities;
  readonly modes: Readonly<Record<ArenaBrawlModeId, ArenaBrawlModeStats>>;
}

function parseMode(
  arena: Record<string, unknown>,
  mode: ArenaBrawlModeId,
): ArenaBrawlModeStats {
  return {
    damage: num(arena, `damage_${mode}`),
    kills: num(arena, `kills_${mode}`),
    deaths: num(arena, `deaths_${mode}`),
    healed: num(arena, `healed_${mode}`),
    wins: num(arena, `wins_${mode}`),
    losses: num(arena, `losses_${mode}`),
    games: num(arena, `games_${mode}`),
    winStreak: num(arena, `win_streaks_${mode}`),
  };
}

function parsePackages(arena: Record<string, unknown>): readonly string[] {
  const value = arena.packages;
  if (!Array.isArray(value)) {
    return [];
  }
  return value.filter((entry): entry is string => typeof entry === "string");
}

function parseRunes(arena: Record<string, unknown>): Record<string, number> {
  const runes: Record<string, number> = {};
  for (const key of Object.keys(arena)) {
    if (key.startsWith(RUNE_PREFIX) && typeof arena[key] === "number") {
      runes[key.slice(RUNE_PREFIX.length)] = arena[key];
    }
  }
  return runes;
}

function parseDatedRatings(
  arena: Record<string, unknown>,
): Record<string, ArenaBrawlDatedRating> {
  const result: Record<string, { rating: number; position: number }> = {};
  for (const key of Object.keys(arena)) {
    const match = DATED_RATING_PATTERN.exec(key);
    if (match === null) {
      continue;
    }
    const date = match[1];
    const entry = result[date] ?? { rating: 0, position: 0 };
    if (match[2] === "rating") {
      entry.rating = num(arena, key);
    } else {
      entry.position = num(arena, key);
    }
    result[date] = entry;
  }
  return result;
}

function parseUpgrades(
  arena: Record<string, unknown>,
): ArenaBrawlUpgradeLevels {
  return {
    cooldown: num(arena, "lvl_cooldown"),
    damage: num(arena, "lvl_damage"),
    energy: num(arena, "lvl_energy"),
    health: num(arena, "lvl_health"),
  };
}

function parseAbilities(arena: Record<string, unknown>): ArenaBrawlAbilities {
  return {
    offensive: str(arena, "offensive"),
    support: str(arena, "support"),
    utility: str(arena, "utility"),
    ultimate: str(arena, "ultimate"),
  };
}

/** Parses a player's Arena Brawl stats (`stats.Arena`) into a typed object. */
export function parseArenaBrawl(
  stats: Record<string, unknown>,
): ArenaBrawlStats | null {
  const raw = stats.Arena;
  if (typeof raw !== "object" || raw === null || Array.isArray(raw)) {
    return null;
  }
  const arena = raw as Record<string, unknown>;
  const modes = {} as Record<ArenaBrawlModeId, ArenaBrawlModeStats>;
  for (const mode of MODES) {
    modes[mode] = parseMode(arena, mode);
  }
  return {
    coins: num(arena, "coins") || num(arena, "tokens"),
    coinsSpent: num(arena, "coins_spent"),
    wins: num(arena, "wins"),
    keys: num(arena, "keys"),
    chests: num(arena, "magical_chest"),
    rating: num(arena, "rating"),
    penalty: num(arena, "penalty"),
    hat: str(arena, "hat"),
    selectedSword: str(arena, "selected_sword"),
    activeRune: str(arena, "active_rune"),
    activeKillEffect: str(arena, "active_kill_effect"),
    activeMeleeTrail: str(arena, "active_melee_trail"),
    prefixColor: str(arena, "prefix_color"),
    shortenedPrefix: bool(arena, "shortened_prefix"),
    showWinPrefix: bool(arena, "show_win_prefix"),
    pregameArmor: bool(arena, "pregame_armor"),
    packages: parsePackages(arena),
    runes: parseRunes(arena),
    datedRatings: parseDatedRatings(arena),
    upgrades: parseUpgrades(arena),
    abilities: parseAbilities(arena),
    modes,
  };
}

