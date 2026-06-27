import { bool, str } from "./common";

export interface PlayerStatus {
  readonly online: boolean;
  readonly gameType: string | null;
  readonly mode: string | null;
  readonly map: string | null;
}

function nullableString(
  session: Record<string, unknown>,
  key: string,
): string | null {
  const value = str(session, key);
  return value === "" ? null : value;
}

/** Parses a player's status (`/status`) into a typed object. */
export function parseStatus(session: Record<string, unknown>): PlayerStatus {
  return {
    online: bool(session, "online"),
    gameType: nullableString(session, "gameType"),
    mode: nullableString(session, "mode"),
    map: nullableString(session, "map"),
  };
}

