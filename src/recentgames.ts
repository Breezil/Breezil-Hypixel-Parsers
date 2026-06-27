import { date, str } from "./common";

export interface RecentGame {
  readonly gameType: string;
  readonly mode: string | null;
  readonly map: string | null;
  readonly startedAt: Date | null;
  readonly endedAt: Date | null;
}

function parseRecentGame(raw: Record<string, unknown>): RecentGame {
  const mode = str(raw, "mode");
  const map = str(raw, "map");
  return {
    gameType: str(raw, "gameType"),
    mode: mode === "" ? null : mode,
    map: map === "" ? null : map,
    startedAt: date(raw, "date"),
    endedAt: date(raw, "ended"),
  };
}

/** Parses a player's recent games (`/recentgames`) into a typed object. */
export function parseRecentGames(games: unknown[]): RecentGame[] {
  const result: RecentGame[] = [];
  for (const entry of games) {
    if (typeof entry !== "object" || entry === null || Array.isArray(entry)) {
      continue;
    }
    result.push(parseRecentGame(entry as Record<string, unknown>));
  }
  return result;
}

