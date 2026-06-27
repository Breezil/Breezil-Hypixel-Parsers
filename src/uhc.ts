import { num, str, bool, obj } from "./common";

export interface UHCModeStats {
  readonly wins: number;
  readonly kills: number;
  readonly deaths: number;
  readonly headsEaten: number;
  readonly ultimatesCrafted: number;
  readonly extraUltimatesCrafted: number;
  readonly kills2: number;
  readonly wins2: number;
}

export interface UHCLeaderboardSettings {
  readonly resetType: string;
  readonly suhcMode: string;
  readonly uhcMode: string;
}

export interface UHCPrivateGames {
  readonly allRecipes: boolean;
  readonly disableRecipes: boolean;
  readonly infiniteCrafts: boolean;
  readonly borderShrink: string;
  readonly gameLength: string;
  readonly gracePeriod: string;
  readonly health: string;
  readonly mode: string;
  readonly teamSize: string;
}

export interface UHCStats {
  readonly coins: number;
  readonly score: number;
  readonly equippedKit: string;
  readonly clearupAchievement: boolean;
  readonly cache3: boolean;
  readonly savedStats: boolean;
  readonly teammateDamage: boolean;
  readonly uhcParkour1: boolean;
  readonly uhcParkour2: boolean;
  readonly uhcStarDisplay: boolean;
  readonly perks: Readonly<Record<string, number>>;
  readonly kits: Readonly<Record<string, number>>;
  readonly monthly: Readonly<Record<string, number>>;
  readonly packages: readonly string[];
  readonly leaderboardSettings: UHCLeaderboardSettings;
  readonly privateGames: UHCPrivateGames;
  readonly solo: UHCModeStats;
  readonly team: UHCModeStats;
  readonly redVsBlue: UHCModeStats;
  readonly noDiamonds: UHCModeStats;
  readonly vanillaDoubles: UHCModeStats;
  readonly brawl: UHCModeStats;
  readonly soloBrawl: UHCModeStats;
  readonly duoBrawl: UHCModeStats;
}

const MODE_SUFFIX = {
  solo: "_solo",
  team: "",
  redVsBlue: "_red_vs_blue",
  noDiamonds: "_no_diamonds",
  vanillaDoubles: "_vanilla_doubles",
  brawl: "_brawl",
  soloBrawl: "_solo_brawl",
  duoBrawl: "_duo_brawl",
} as const;

type UHCMode = keyof typeof MODE_SUFFIX;

function parseMode(uhc: Record<string, unknown>, suffix: string): UHCModeStats {
  return {
    wins: num(uhc, `wins${suffix}`),
    kills: num(uhc, `kills${suffix}`),
    deaths: num(uhc, `deaths${suffix}`),
    headsEaten: num(uhc, `heads_eaten${suffix}`),
    ultimatesCrafted: num(uhc, `ultimates_crafted${suffix}`),
    extraUltimatesCrafted: num(uhc, `extra_ultimates_crafted${suffix}`),
    kills2: num(uhc, `kills${suffix}2`),
    wins2: num(uhc, `wins${suffix}2`),
  };
}

function parseLeaderboardSettings(
  uhc: Record<string, unknown>,
): UHCLeaderboardSettings {
  const settings = obj(uhc, "leaderboardSettings");
  return {
    resetType: str(settings, "resetType"),
    suhcMode: str(settings, "suhcMode"),
    uhcMode: str(settings, "uhcMode"),
  };
}

function parsePrivateGames(uhc: Record<string, unknown>): UHCPrivateGames {
  const games = obj(uhc, "privategames");
  return {
    allRecipes: bool(games, "all_recipes"),
    disableRecipes: bool(games, "disable_recipes"),
    infiniteCrafts: bool(games, "infinite_crafts"),
    borderShrink: str(games, "border_shrink"),
    gameLength: str(games, "game_length"),
    gracePeriod: str(games, "grace_period"),
    health: str(games, "health"),
    mode: str(games, "mode"),
    teamSize: str(games, "team_size"),
  };
}

function prefixedNumberMap(
  source: Record<string, unknown>,
  prefix: string,
): Record<string, number> {
  const result: Record<string, number> = {};
  for (const [key, value] of Object.entries(source)) {
    if (key.startsWith(prefix) && typeof value === "number") {
      result[key] = value;
    }
  }
  return result;
}

function stringList(value: unknown): string[] {
  return Array.isArray(value)
    ? value.filter((entry): entry is string => typeof entry === "string")
    : [];
}

/** Parses a player's UHC stats (`stats.UHC`) into a typed object. */
export function parseUHC(stats: Record<string, unknown>): UHCStats | null {
  const raw = stats.UHC;
  if (typeof raw !== "object" || raw === null || Array.isArray(raw)) {
    return null;
  }
  const uhc = raw as Record<string, unknown>;

  const modes = {} as Record<UHCMode, UHCModeStats>;
  for (const [name, suffix] of Object.entries(MODE_SUFFIX) as Array<
    [UHCMode, string]
  >) {
    modes[name] = parseMode(uhc, suffix);
  }

  return {
    coins: num(uhc, "coins"),
    score: num(uhc, "score"),
    equippedKit: str(uhc, "equippedKit") || "None",
    clearupAchievement: bool(uhc, "clearup_achievement"),
    cache3: bool(uhc, "cache3"),
    savedStats: bool(uhc, "saved_stats"),
    teammateDamage: bool(uhc, "teammate_damage"),
    uhcParkour1: bool(uhc, "uhc_parkour_1"),
    uhcParkour2: bool(uhc, "uhc_parkour_2"),
    uhcStarDisplay: bool(uhc, "uhc_star_display"),
    perks: prefixedNumberMap(uhc, "perk_"),
    kits: prefixedNumberMap(uhc, "kit_"),
    monthly: prefixedNumberMap(uhc, "monthly_"),
    packages: stringList(uhc.packages),
    leaderboardSettings: parseLeaderboardSettings(uhc),
    privateGames: parsePrivateGames(uhc),
    ...modes,
  };
}

