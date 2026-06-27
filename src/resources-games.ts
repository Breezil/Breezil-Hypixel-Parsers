import { num, str, bool, obj } from "./common";

export interface GameDefinition {
  readonly id: number;
  readonly name: string;
  readonly databaseName: string;
  readonly legacy: boolean;
  readonly modeNames: Readonly<Record<string, string>>;
}

function parseModeNames(
  game: Record<string, unknown>,
): Readonly<Record<string, string>> {
  const modes = obj(game, "modeNames");
  const out: Record<string, string> = {};
  for (const key of Object.keys(modes)) {
    out[key] = str(modes, key);
  }
  return out;
}

/** Parses the game registry (`/resources/games`) into a typed object. */
export function parseGames(
  games: Record<string, unknown>,
): Readonly<Record<string, GameDefinition>> {
  const out: Record<string, GameDefinition> = {};
  for (const key of Object.keys(games)) {
    const game = obj(games, key);
    out[key] = {
      id: num(game, "id"),
      name: str(game, "name"),
      databaseName: str(game, "databaseName"),
      legacy: bool(game, "legacy"),
      modeNames: parseModeNames(game),
    };
  }
  return out;
}

