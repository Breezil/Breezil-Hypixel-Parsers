import { num, str, obj } from "./common";

export interface LegacyLeaderboardSettings {
  readonly arenaMode: string;
  readonly paintballMode: string;
  readonly quakecraftMode: string;
  readonly tkrMode: string;
  readonly vampirezMode: string;
  readonly resetType: string;
}

export interface LegacyStats {
  readonly coins: number;
  readonly tokens: number;
  readonly totalTokens: number;
  readonly tokensDaily: number;
  readonly tokensLastReceivedStamp: number;
  readonly nextTokensSeconds: number;
  readonly preferredChannel: string;
  readonly speed: string;
  readonly arenaTokens: number;
  readonly gingerbreadTokens: number;
  readonly paintballTokens: number;
  readonly quakecraftTokens: number;
  readonly vampirezTokens: number;
  readonly wallsTokens: number;
  readonly leaderboardArena: number;
  readonly leaderboardPaintball: number;
  readonly leaderboardQuakecraft: number;
  readonly leaderboardTkr: number;
  readonly leaderboardVampirez: number;
  readonly leaderboardWalls: number;
  readonly leaderboardSettings: LegacyLeaderboardSettings;
  readonly packages: readonly string[];
  readonly other: Record<string, unknown>;
}

const KNOWN_KEYS = new Set([
  "coins",
  "tokens",
  "total_tokens",
  "tokens_daily",
  "tokens_last_received_stamp",
  "next_tokens_seconds",
  "preferredChannel",
  "speed",
  "arena_tokens",
  "gingerbread_tokens",
  "paintball_tokens",
  "quakecraft_tokens",
  "vampirez_tokens",
  "walls_tokens",
  "leaderboard_arena",
  "leaderboard_paintball",
  "leaderboard_quakecraft",
  "leaderboard_tkr",
  "leaderboard_vampirez",
  "leaderboard_walls",
  "leaderboardSettings",
  "packages",
]);

function parseLeaderboardSettings(
  block: Record<string, unknown>,
): LegacyLeaderboardSettings {
  const settings = obj(block, "leaderboardSettings");
  return {
    arenaMode: str(settings, "arenaMode"),
    paintballMode: str(settings, "paintballMode"),
    quakecraftMode: str(settings, "quakecraftMode"),
    tkrMode: str(settings, "tkrMode"),
    vampirezMode: str(settings, "vampirezMode"),
    resetType: str(settings, "resetType"),
  };
}

function parsePackages(block: Record<string, unknown>): readonly string[] {
  const value = block.packages;
  if (!Array.isArray(value)) {
    return [];
  }
  return value.filter((entry): entry is string => typeof entry === "string");
}

function parseOther(legacy: Record<string, unknown>): Record<string, unknown> {
  const other: Record<string, unknown> = {};
  for (const key of Object.keys(legacy)) {
    if (!KNOWN_KEYS.has(key)) {
      other[key] = legacy[key];
    }
  }
  return other;
}

/** Parses a player's Legacy token-economy stats (`stats.Legacy`) into a typed object. */
export function parseLegacy(
  block: Record<string, unknown>,
): LegacyStats | null {
  if (Object.keys(block).length === 0) {
    return null;
  }
  return {
    coins: num(block, "coins"),
    tokens: num(block, "tokens"),
    totalTokens: num(block, "total_tokens"),
    tokensDaily: num(block, "tokens_daily"),
    tokensLastReceivedStamp: num(block, "tokens_last_received_stamp"),
    nextTokensSeconds: num(block, "next_tokens_seconds"),
    preferredChannel: str(block, "preferredChannel"),
    speed: str(block, "speed"),
    arenaTokens: num(block, "arena_tokens"),
    gingerbreadTokens: num(block, "gingerbread_tokens"),
    paintballTokens: num(block, "paintball_tokens"),
    quakecraftTokens: num(block, "quakecraft_tokens"),
    vampirezTokens: num(block, "vampirez_tokens"),
    wallsTokens: num(block, "walls_tokens"),
    leaderboardArena: num(block, "leaderboard_arena"),
    leaderboardPaintball: num(block, "leaderboard_paintball"),
    leaderboardQuakecraft: num(block, "leaderboard_quakecraft"),
    leaderboardTkr: num(block, "leaderboard_tkr"),
    leaderboardVampirez: num(block, "leaderboard_vampirez"),
    leaderboardWalls: num(block, "leaderboard_walls"),
    leaderboardSettings: parseLeaderboardSettings(block),
    packages: parsePackages(block),
    other: parseOther(block),
  };
}

