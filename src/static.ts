import { date, num, obj, str } from "./common";

export interface StaticBooster {
  readonly id: string;
  readonly purchaserUuid: string;
  readonly amount: number;
  readonly originalLength: number;
  readonly length: number;
  readonly gameType: number;
  readonly dateActivated: Date | null;
  readonly stacked: boolean | readonly string[];
}

function parseStacked(
  raw: Record<string, unknown>,
): boolean | readonly string[] {
  const value = raw.stacked;
  if (Array.isArray(value)) {
    return value.filter((entry): entry is string => typeof entry === "string");
  }
  return value === true;
}

/** Parses the network boosters (`/boosters`) into a typed object. */
export function parseBoosters(boosters: unknown[]): StaticBooster[] {
  const result: StaticBooster[] = [];
  for (const entry of boosters) {
    if (typeof entry !== "object" || entry === null || Array.isArray(entry)) {
      continue;
    }
    const raw = entry as Record<string, unknown>;
    result.push({
      id: str(raw, "_id"),
      purchaserUuid: str(raw, "purchaserUuid"),
      amount: num(raw, "amount"),
      originalLength: num(raw, "originalLength"),
      length: num(raw, "length"),
      gameType: num(raw, "gameType"),
      dateActivated: date(raw, "dateActivated"),
      stacked: parseStacked(raw),
    });
  }
  return result;
}

export interface StaticLeaderboard {
  readonly path: string;
  readonly prefix: string;
  readonly title: string;
  readonly location: string;
  readonly count: number;
  readonly leaders: readonly string[];
}

function parseLeaders(raw: Record<string, unknown>): string[] {
  const value = raw.leaders;
  if (!Array.isArray(value)) {
    return [];
  }
  return value.filter((leader): leader is string => typeof leader === "string");
}

/** Parses the leaderboards (`/leaderboards`) into a typed object. */
export function parseLeaderboards(
  raw: Record<string, unknown>,
): Record<string, StaticLeaderboard[]> {
  const result: Record<string, StaticLeaderboard[]> = {};
  for (const [game, list] of Object.entries(obj(raw, "leaderboards"))) {
    if (!Array.isArray(list)) {
      continue;
    }
    const entries: StaticLeaderboard[] = [];
    for (const entry of list) {
      if (typeof entry !== "object" || entry === null || Array.isArray(entry)) {
        continue;
      }
      const board = entry as Record<string, unknown>;
      entries.push({
        path: str(board, "path"),
        prefix: str(board, "prefix"),
        title: str(board, "title"),
        location: str(board, "location"),
        count: num(board, "count"),
        leaders: parseLeaders(board),
      });
    }
    result[game] = entries;
  }
  return result;
}

export interface StaticGameCount {
  readonly players: number;
  readonly modes: Record<string, number>;
}

export interface StaticGameCounts {
  readonly playerCount: number;
  readonly games: Record<string, StaticGameCount>;
}

function parseModes(raw: Record<string, unknown>): Record<string, number> {
  const modes: Record<string, number> = {};
  for (const [mode, count] of Object.entries(obj(raw, "modes"))) {
    if (typeof count === "number") {
      modes[mode] = count;
    }
  }
  return modes;
}

/** Parses the player counts (`/counts`) into a typed object. */
export function parseGameCounts(
  raw: Record<string, unknown>,
): StaticGameCounts {
  const games: Record<string, StaticGameCount> = {};
  for (const [game, value] of Object.entries(obj(raw, "games"))) {
    if (typeof value !== "object" || value === null || Array.isArray(value)) {
      continue;
    }
    const entry = value as Record<string, unknown>;
    games[game] = {
      players: num(entry, "players"),
      modes: parseModes(entry),
    };
  }
  return {
    playerCount: num(raw, "playerCount"),
    games,
  };
}

export interface StaticWatchdogStats {
  readonly watchdogLastMinute: number;
  readonly watchdogDaily: number;
  readonly watchdogTotal: number;
  readonly staffDaily: number;
  readonly staffTotal: number;
}

/** Parses the punishment stats (`/punishmentstats`) into a typed object. */
export function parseWatchdogStats(
  raw: Record<string, unknown>,
): StaticWatchdogStats {
  return {
    watchdogLastMinute: num(raw, "watchdog_lastMinute"),
    watchdogDaily: num(raw, "watchdog_rollingDaily"),
    watchdogTotal: num(raw, "watchdog_total"),
    staffDaily: num(raw, "staff_rollingDaily"),
    staffTotal: num(raw, "staff_total"),
  };
}

