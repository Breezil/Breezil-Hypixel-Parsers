import { bool, date, num, str } from "./common";

export const turboKartRacersHorns = [
  "DEFAULT",
  "SHY",
  "ALIEN",
  "TAXI",
  "KLAXON",
  "TRICYCLE",
  "ALARM",
  "KLOON",
  "TEDDY",
  "TRUCK",
  "JERRY",
] as const;

export type TurboKartRacersHorn = (typeof turboKartRacersHorns)[number];

export const turboKartRacersMapIds = [
  "retro",
  "hypixelgp",
  "olympus",
  "junglerush",
  "canyon",
] as const;

export type TurboKartRacersMapId = (typeof turboKartRacersMapIds)[number];

export interface TurboKartRacersMapStats {
  readonly map: TurboKartRacersMapId;
  readonly plays: number;
  readonly boxPickups: number;
  readonly bronzeTrophies: number;
  readonly silverTrophies: number;
  readonly goldTrophies: number;
}

export interface TurboKartRacersPeriodStats {
  readonly boxPickups: number;
  readonly bronzeTrophies: number;
  readonly silverTrophies: number;
  readonly goldTrophies: number;
}

export interface TurboKartRacersPeriods {
  readonly monthlyA: TurboKartRacersPeriodStats;
  readonly monthlyB: TurboKartRacersPeriodStats;
  readonly weeklyA: TurboKartRacersPeriodStats;
  readonly weeklyB: TurboKartRacersPeriodStats;
}

export interface TurboKartRacersLoadout {
  readonly boosterActive: string;
  readonly engineActive: string;
  readonly frameActive: string;
  readonly helmetActive: string;
  readonly jacketActive: string;
  readonly pantsActive: string;
  readonly shoesActive: string;
  readonly skinActive: string;
  readonly particleTrail: string;
  readonly parts: string;
}

export interface TurboKartRacersMonthlyPoints {
  readonly points: number;
  readonly position: number;
}

export interface TurboKartRacersTourneyStats {
  readonly wins: number;
  readonly lapsCompleted: number;
  readonly coinsPickedUp: number;
  readonly boxPickups: number;
  readonly goldTrophies: number;
  readonly silverTrophies: number;
  readonly bronzeTrophies: number;
  readonly bananaHitsReceived: number;
  readonly bananaHitsSent: number;
  readonly blueTorpedoHits: number;
  readonly maps: Readonly<
    Record<TurboKartRacersMapId, TurboKartRacersMapStats>
  >;
  readonly periods: TurboKartRacersPeriods;
}

export interface TurboKartRacersStats {
  readonly coins: number;
  readonly coinsPickedUp: number;
  readonly wins: number;
  readonly completedLaps: number;
  readonly boxPickups: number;
  readonly goldTrophies: number;
  readonly silverTrophies: number;
  readonly bronzeTrophies: number;
  readonly horn: TurboKartRacersHorn;
  readonly bananaHitsReceived: number;
  readonly bananaHitsSent: number;
  readonly blueTorpedoHits: number;
  readonly grandPrix: boolean;
  readonly grandPrixTokens: number;
  readonly lastTourneyAd: Date | null;
  readonly packages: readonly string[];
  readonly lobbyResourcePack: boolean;
  readonly showWinPrefix: boolean;
  readonly prefixColor: string;
  readonly itemMessages: boolean;
  readonly temperatureGaugeIndicator: boolean;
  readonly announcer: boolean;
  readonly loadout: TurboKartRacersLoadout;
  readonly maps: Readonly<
    Record<TurboKartRacersMapId, TurboKartRacersMapStats>
  >;
  readonly periods: TurboKartRacersPeriods;
  readonly monthlyPoints: Readonly<
    Record<string, TurboKartRacersMonthlyPoints>
  >;
  readonly tourneys: Readonly<Record<string, TurboKartRacersTourneyStats>>;
}

function stringArray(parent: Record<string, unknown>, key: string): string[] {
  const value = parent[key];
  return Array.isArray(value)
    ? value.filter((item): item is string => typeof item === "string")
    : [];
}

function parseMap(
  gingerBread: Record<string, unknown>,
  map: TurboKartRacersMapId,
  prefix: string,
): TurboKartRacersMapStats {
  return {
    map,
    plays: num(gingerBread, `${prefix}${map}_plays`),
    boxPickups: num(gingerBread, `${prefix}box_pickups_${map}`),
    bronzeTrophies: num(gingerBread, `${prefix}bronze_trophy_${map}`),
    silverTrophies: num(gingerBread, `${prefix}silver_trophy_${map}`),
    goldTrophies: num(gingerBread, `${prefix}gold_trophy_${map}`),
  };
}

function parseMaps(
  gingerBread: Record<string, unknown>,
  prefix: string,
): Record<TurboKartRacersMapId, TurboKartRacersMapStats> {
  return Object.fromEntries(
    turboKartRacersMapIds.map((map) => [
      map,
      parseMap(gingerBread, map, prefix),
    ]),
  ) as Record<TurboKartRacersMapId, TurboKartRacersMapStats>;
}

function parsePeriod(
  gingerBread: Record<string, unknown>,
  period: string,
  prefix: string,
): TurboKartRacersPeriodStats {
  return {
    boxPickups: num(gingerBread, `${prefix}box_pickups_${period}`),
    bronzeTrophies: num(gingerBread, `${prefix}bronze_trophy_${period}`),
    silverTrophies: num(gingerBread, `${prefix}silver_trophy_${period}`),
    goldTrophies: num(gingerBread, `${prefix}gold_trophy_${period}`),
  };
}

function parsePeriods(
  gingerBread: Record<string, unknown>,
  prefix: string,
): TurboKartRacersPeriods {
  return {
    monthlyA: parsePeriod(gingerBread, "monthly_a", prefix),
    monthlyB: parsePeriod(gingerBread, "monthly_b", prefix),
    weeklyA: parsePeriod(gingerBread, "weekly_a", prefix),
    weeklyB: parsePeriod(gingerBread, "weekly_b", prefix),
  };
}

function parseLoadout(
  gingerBread: Record<string, unknown>,
): TurboKartRacersLoadout {
  return {
    boosterActive: str(gingerBread, "booster_active"),
    engineActive: str(gingerBread, "engine_active"),
    frameActive: str(gingerBread, "frame_active"),
    helmetActive: str(gingerBread, "helmet_active"),
    jacketActive: str(gingerBread, "jacket_active"),
    pantsActive: str(gingerBread, "pants_active"),
    shoesActive: str(gingerBread, "shoes_active"),
    skinActive: str(gingerBread, "skin_active"),
    particleTrail: str(gingerBread, "particle_trail"),
    parts: str(gingerBread, "parts"),
  };
}

function parseMonthlyPoints(
  gingerBread: Record<string, unknown>,
): Record<string, TurboKartRacersMonthlyPoints> {
  const pattern = /^GingerBread_tkr_points__(\d+_\d+)_(?:points|position)$/;
  const months = new Set<string>();
  for (const key of Object.keys(gingerBread)) {
    const match = pattern.exec(key);
    if (match) {
      months.add(match[1]);
    }
  }
  const result: Record<string, TurboKartRacersMonthlyPoints> = {};
  for (const month of months) {
    result[month] = {
      points: num(gingerBread, `GingerBread_tkr_points__${month}_points`),
      position: num(gingerBread, `GingerBread_tkr_points__${month}_position`),
    };
  }
  return result;
}

function parseTourney(
  gingerBread: Record<string, unknown>,
  prefix: string,
): TurboKartRacersTourneyStats {
  return {
    wins: num(gingerBread, `${prefix}wins`),
    lapsCompleted: num(gingerBread, `${prefix}laps_completed`),
    coinsPickedUp: num(gingerBread, `${prefix}coins_picked_up`),
    boxPickups: num(gingerBread, `${prefix}box_pickups`),
    goldTrophies: num(gingerBread, `${prefix}gold_trophy`),
    silverTrophies: num(gingerBread, `${prefix}silver_trophy`),
    bronzeTrophies: num(gingerBread, `${prefix}bronze_trophy`),
    bananaHitsReceived: num(gingerBread, `${prefix}banana_hits_received`),
    bananaHitsSent: num(gingerBread, `${prefix}banana_hits_sent`),
    blueTorpedoHits: num(gingerBread, `${prefix}blue_torpedo_hit`),
    maps: parseMaps(gingerBread, prefix),
    periods: parsePeriods(gingerBread, prefix),
  };
}

function parseTourneys(
  gingerBread: Record<string, unknown>,
): Record<string, TurboKartRacersTourneyStats> {
  const pattern = /^tourney_gingerbread_solo_(\d+)_/;
  const indices = new Set<string>();
  for (const key of Object.keys(gingerBread)) {
    const match = pattern.exec(key);
    if (match) {
      indices.add(match[1]);
    }
  }
  const result: Record<string, TurboKartRacersTourneyStats> = {};
  for (const index of indices) {
    result[`solo_${index}`] = parseTourney(
      gingerBread,
      `tourney_gingerbread_solo_${index}_`,
    );
  }
  return result;
}

function parseHorn(gingerBread: Record<string, unknown>): TurboKartRacersHorn {
  const raw = str(gingerBread, "horn") as TurboKartRacersHorn;
  return turboKartRacersHorns.includes(raw) ? raw : "DEFAULT";
}

/** Parses a player's Turbo Kart Racers stats (`stats.GingerBread`) into a typed object. */
export function parseTurboKartRacers(
  stats: Record<string, unknown>,
): TurboKartRacersStats | null {
  if (Object.keys(stats).length === 0) {
    return null;
  }
  return {
    coins: num(stats, "coins"),
    coinsPickedUp: num(stats, "coins_picked_up"),
    wins: num(stats, "wins"),
    completedLaps: num(stats, "laps_completed"),
    boxPickups: num(stats, "box_pickups"),
    goldTrophies: num(stats, "gold_trophy"),
    silverTrophies: num(stats, "silver_trophy"),
    bronzeTrophies: num(stats, "bronze_trophy"),
    horn: parseHorn(stats),
    bananaHitsReceived: num(stats, "banana_hits_received"),
    bananaHitsSent: num(stats, "banana_hits_sent"),
    blueTorpedoHits: num(stats, "blue_torpedo_hit"),
    grandPrix: bool(stats, "grand_prix"),
    grandPrixTokens: num(stats, "grand_prix_tokens"),
    lastTourneyAd: date(stats, "lastTourneyAd"),
    packages: stringArray(stats, "packages"),
    lobbyResourcePack: bool(stats, "lobby_resource_pack"),
    showWinPrefix: bool(stats, "show_win_prefix"),
    prefixColor: str(stats, "prefix_color"),
    itemMessages: bool(stats, "item_messages"),
    temperatureGaugeIndicator: bool(stats, "temperature_gauge_indicator"),
    announcer: bool(stats, "announcer"),
    loadout: parseLoadout(stats),
    maps: parseMaps(stats, ""),
    periods: parsePeriods(stats, ""),
    monthlyPoints: parseMonthlyPoints(stats),
    tourneys: parseTourneys(stats),
  };
}

