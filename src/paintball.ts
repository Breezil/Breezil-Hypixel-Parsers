import { num, str, bool } from "./common";

export interface PaintballPerks {
  readonly adrenaline: number;
  readonly endurance: number;
  readonly fortune: number;
  readonly godfather: number;
  readonly superluck: number;
  readonly transfusion: number;
}

export interface PaintballPeriodKills {
  readonly killsA: number;
  readonly killsB: number;
}

export interface PaintballMapVotes {
  readonly Babyland: number;
  readonly Boletus: number;
  readonly Courtyard: number;
  readonly Egypt: number;
  readonly Gladiator: number;
  readonly Herobrine: number;
  readonly Juice: number;
  readonly LaLaLand: number;
  readonly Mansion: number;
  readonly Market: number;
  readonly Octagon: number;
  readonly "Oh Canada!": number;
  readonly Outback: number;
  readonly Siege: number;
  readonly Swamps: number;
  readonly Victorian: number;
}

const PAINTBALL_MAP_NAMES = [
  "Babyland",
  "Boletus",
  "Courtyard",
  "Egypt",
  "Gladiator",
  "Herobrine",
  "Juice",
  "LaLaLand",
  "Mansion",
  "Market",
  "Octagon",
  "Oh Canada!",
  "Outback",
  "Siege",
  "Swamps",
  "Victorian",
] as const;

export interface PaintballStats {
  readonly coins: number;
  readonly kills: number;
  readonly deaths: number;
  readonly wins: number;
  readonly shotsFired: number;
  readonly killstreaks: number;
  readonly headstart: number;
  readonly forcefieldTime: number;
  readonly showKillPrefix: boolean;
  readonly selectedKillPrefix: string;
  readonly hat: string;
  readonly favoriteSlots: string;
  readonly packages: readonly string[];
  readonly monthly: PaintballPeriodKills;
  readonly weekly: PaintballPeriodKills;
  readonly perks: PaintballPerks;
  readonly mapVotes: PaintballMapVotes;
}

function parsePerks(paintball: Record<string, unknown>): PaintballPerks {
  return {
    adrenaline: num(paintball, "adrenaline"),
    endurance: num(paintball, "endurance"),
    fortune: num(paintball, "fortune"),
    godfather: num(paintball, "godfather"),
    superluck: num(paintball, "superluck"),
    transfusion: num(paintball, "transfusion"),
  };
}

function parsePeriodKills(
  paintball: Record<string, unknown>,
  period: "monthly" | "weekly",
): PaintballPeriodKills {
  return {
    killsA: num(paintball, `${period}_kills_a`),
    killsB: num(paintball, `${period}_kills_b`),
  };
}

function parseMapVotes(paintball: Record<string, unknown>): PaintballMapVotes {
  const votes = {} as Record<(typeof PAINTBALL_MAP_NAMES)[number], number>;
  for (const map of PAINTBALL_MAP_NAMES) {
    votes[map] = num(paintball, `votes_${map}`);
  }
  return votes;
}

function parsePackages(paintball: Record<string, unknown>): readonly string[] {
  const value = paintball.packages;
  return Array.isArray(value)
    ? value.filter((entry): entry is string => typeof entry === "string")
    : [];
}

/** Parses a player's Paintball stats (`stats.Paintball`) into a typed object. */
export function parsePaintball(
  stats: Record<string, unknown>,
): PaintballStats | null {
  const raw = stats.Paintball;
  if (typeof raw !== "object" || raw === null || Array.isArray(raw)) {
    return null;
  }
  const paintball = raw as Record<string, unknown>;
  return {
    coins: num(paintball, "coins") || num(paintball, "tokens"),
    kills: num(paintball, "kills"),
    deaths: num(paintball, "deaths"),
    wins: num(paintball, "wins"),
    shotsFired: num(paintball, "shots_fired"),
    killstreaks: num(paintball, "killstreaks"),
    headstart: num(paintball, "headstart"),
    forcefieldTime: num(paintball, "forcefieldTime"),
    showKillPrefix: bool(paintball, "showKillPrefix"),
    selectedKillPrefix: str(paintball, "selectedKillPrefix"),
    hat: str(paintball, "hat"),
    favoriteSlots: str(paintball, "favorite_slots"),
    packages: parsePackages(paintball),
    monthly: parsePeriodKills(paintball, "monthly"),
    weekly: parsePeriodKills(paintball, "weekly"),
    perks: parsePerks(paintball),
    mapVotes: parseMapVotes(paintball),
  };
}

