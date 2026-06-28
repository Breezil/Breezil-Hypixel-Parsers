import { num, bool } from "./common";

export interface TrueCombatRolling {
  readonly monthlyA: number;
  readonly monthlyB: number;
  readonly weeklyA: number;
  readonly weeklyB: number;
}

export interface TrueCombatModeStats {
  readonly games: number;
  readonly wins: number;
  readonly losses: number;
  readonly deaths: number;
  readonly kills: number;
  readonly killsMonthlyA: number;
  readonly killsMonthlyB: number;
  readonly killsWeeklyA: number;
  readonly killsWeeklyB: number;
}

export interface TrueCombatStats {
  readonly coins: number;
  readonly games: number;
  readonly wins: number;
  readonly losses: number;
  readonly deaths: number;
  readonly kills: number;
  readonly winStreak: number;
  readonly survivedPlayers: number;
  readonly skullsGathered: number;
  readonly goldDust: number;
  readonly goldenSkulls: number;
  readonly itemsEnchanted: number;
  readonly arrowsHit: number;
  readonly arrowsShot: number;
  readonly giantZombie: number;
  readonly giantZombieLegendaries: number;
  readonly giantZombieRares: number;
  readonly liveCombat: boolean;
  readonly combatTracker: boolean;
  readonly showNoobHolograms: boolean;
  readonly killsRolling: TrueCombatRolling;
  readonly packages: readonly string[];
  readonly crazyWalls: Readonly<Record<string, TrueCombatModeStats>>;
  readonly activeKits: Readonly<Record<string, string>>;
  readonly kits: Readonly<Record<string, number>>;
  readonly crafting: Readonly<Record<string, number>>;
  readonly votes: Readonly<Record<string, number>>;
  readonly shopItems: Readonly<Record<string, number>>;
  readonly soloPerks: Readonly<Record<string, number>>;
  readonly teamPerks: Readonly<Record<string, number>>;
  readonly perks: Readonly<Record<string, number>>;
}

const SCALARS: ReadonlySet<string> = new Set([
  "coins",
  "games",
  "wins",
  "losses",
  "deaths",
  "kills",
  "win_streak",
  "survived_players",
  "skulls_gathered",
  "gold_dust",
  "golden_skulls",
  "items_enchanted",
  "arrows_hit",
  "arrows_shot",
  "giant_zombie",
  "giant_zombie_legendaries",
  "giant_zombie_rares",
  "kills_monthly_a",
  "kills_monthly_b",
  "kills_weekly_a",
  "kills_weekly_b",
  "live_combat",
  "packages",
]);

const FAMILY_PREFIXES: readonly string[] = [
  "crazywalls_",
  "activeKit_",
  "kit_",
  "crafting_",
  "votes_",
  "shopItem_",
  "solo_",
  "team_",
];

const CRAZY_WALLS_STATS: readonly string[] = [
  "kills_monthly_a",
  "kills_monthly_b",
  "kills_weekly_a",
  "kills_weekly_b",
  "deaths",
  "games",
  "kills",
  "losses",
  "wins",
];

function camel(key: string): string {
  return key
    .split(/[_-]/)
    .filter((part) => part.length > 0)
    .map((part, index) =>
      index === 0
        ? part.charAt(0).toLowerCase() + part.slice(1)
        : part.charAt(0).toUpperCase() + part.slice(1),
    )
    .join("");
}

function strList(value: unknown): readonly string[] {
  return Array.isArray(value)
    ? value.filter((item): item is string => typeof item === "string")
    : [];
}

function crazyWallsModes(block: Record<string, unknown>): readonly string[] {
  const modes = new Set<string>();
  for (const key of Object.keys(block)) {
    if (!key.startsWith("crazywalls_")) {
      continue;
    }
    const rest = key.slice("crazywalls_".length);
    for (const stat of CRAZY_WALLS_STATS) {
      if (rest.startsWith(`${stat}_`)) {
        modes.add(rest.slice(stat.length + 1));
        break;
      }
    }
  }
  return [...modes];
}

function crazyWallsModeStats(
  block: Record<string, unknown>,
  mode: string,
): TrueCombatModeStats {
  return {
    games: num(block, `crazywalls_games_${mode}`),
    wins: num(block, `crazywalls_wins_${mode}`),
    losses: num(block, `crazywalls_losses_${mode}`),
    deaths: num(block, `crazywalls_deaths_${mode}`),
    kills: num(block, `crazywalls_kills_${mode}`),
    killsMonthlyA: num(block, `crazywalls_kills_monthly_a_${mode}`),
    killsMonthlyB: num(block, `crazywalls_kills_monthly_b_${mode}`),
    killsWeeklyA: num(block, `crazywalls_kills_weekly_a_${mode}`),
    killsWeeklyB: num(block, `crazywalls_kills_weekly_b_${mode}`),
  };
}

function numberFamily(
  block: Record<string, unknown>,
  prefix: string,
): Readonly<Record<string, number>> {
  const out: Record<string, number> = {};
  for (const [key, value] of Object.entries(block)) {
    if (key.startsWith(prefix) && typeof value === "number") {
      out[camel(key.slice(prefix.length))] = value;
    }
  }
  return out;
}

function stringFamily(
  block: Record<string, unknown>,
  prefix: string,
): Readonly<Record<string, string>> {
  const out: Record<string, string> = {};
  for (const [key, value] of Object.entries(block)) {
    if (key.startsWith(prefix) && typeof value === "string") {
      out[camel(key.slice(prefix.length))] = value;
    }
  }
  return out;
}

function perkFamily(
  block: Record<string, unknown>,
): Readonly<Record<string, number>> {
  const out: Record<string, number> = {};
  for (const [key, value] of Object.entries(block)) {
    if (typeof value !== "number" || SCALARS.has(key)) {
      continue;
    }
    if (FAMILY_PREFIXES.some((prefix) => key.startsWith(prefix))) {
      continue;
    }
    out[camel(key)] = value;
  }
  return out;
}

/** Parses a player's TrueCombat (retired "Crazy Walls") stats into a typed object. */
export function parseTrueCombat(
  block: Record<string, unknown>,
): TrueCombatStats | null {
  if (
    typeof block !== "object" ||
    block === null ||
    Object.keys(block).length === 0
  ) {
    return null;
  }

  const crazyWalls: Record<string, TrueCombatModeStats> = {};
  for (const mode of crazyWallsModes(block)) {
    crazyWalls[mode] = crazyWallsModeStats(block, mode);
  }

  return {
    coins: num(block, "coins"),
    games: num(block, "games"),
    wins: num(block, "wins"),
    losses: num(block, "losses"),
    deaths: num(block, "deaths"),
    kills: num(block, "kills"),
    winStreak: num(block, "win_streak"),
    survivedPlayers: num(block, "survived_players"),
    skullsGathered: num(block, "skulls_gathered"),
    goldDust: num(block, "gold_dust"),
    goldenSkulls: num(block, "golden_skulls"),
    itemsEnchanted: num(block, "items_enchanted"),
    arrowsHit: num(block, "arrows_hit"),
    arrowsShot: num(block, "arrows_shot"),
    giantZombie: num(block, "giant_zombie"),
    giantZombieLegendaries: num(block, "giant_zombie_legendaries"),
    giantZombieRares: num(block, "giant_zombie_rares"),
    liveCombat: bool(block, "live_combat"),
    combatTracker: bool(block, "combatTracker"),
    showNoobHolograms: bool(block, "show_noob_holograms"),
    killsRolling: {
      monthlyA: num(block, "kills_monthly_a"),
      monthlyB: num(block, "kills_monthly_b"),
      weeklyA: num(block, "kills_weekly_a"),
      weeklyB: num(block, "kills_weekly_b"),
    },
    packages: strList(block.packages),
    crazyWalls,
    activeKits: stringFamily(block, "activeKit_"),
    kits: numberFamily(block, "kit_"),
    crafting: numberFamily(block, "crafting_"),
    votes: numberFamily(block, "votes_"),
    shopItems: numberFamily(block, "shopItem_"),
    soloPerks: numberFamily(block, "solo_"),
    teamPerks: numberFamily(block, "team_"),
    perks: perkFamily(block),
  };
}

