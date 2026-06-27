import { num } from "./common";

export interface PlayerBingoEvent {
  readonly key: number;
  readonly points: number;
  readonly completedGoals: readonly string[];
}

function isObject(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

/** Parses a player's SkyBlock bingo (`/skyblock/bingo`) into a typed object. */
export function parsePlayerBingo(
  data: Record<string, unknown>,
): readonly PlayerBingoEvent[] {
  const events = Array.isArray(data.events) ? data.events : [];
  return events.filter(isObject).map((event) => ({
    key: num(event, "key"),
    points: num(event, "points"),
    completedGoals: Array.isArray(event.completed_goals)
      ? event.completed_goals.filter(
          (goal): goal is string => typeof goal === "string",
        )
      : [],
  }));
}

