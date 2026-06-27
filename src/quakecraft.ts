import { num, str, bool, date } from "./common";

export interface QuakecraftModeStats {
  readonly wins: number;
  readonly kills: number;
  readonly deaths: number;
  readonly killstreaks: number;
  readonly distanceTravelled: number;
  readonly shotsFired: number;
  readonly headshots: number;
  readonly killsSinceUpdateFeb2017: number;
}

export interface QuakecraftCosmetics {
  readonly killSound: string;
  readonly barrel: string;
  readonly case: string;
  readonly muzzle: string;
  readonly sight: string;
  readonly trigger: string;
  readonly beam: string;
  readonly armor: string;
  readonly hat: string;
  readonly boots: string;
  readonly leggings: string;
  readonly compass: string;
  readonly killPrefixColor: string;
}

export interface QuakecraftSettings {
  readonly instantRespawn: boolean;
  readonly showPrefix: boolean;
  readonly showDashCooldown: boolean;
  readonly enableSound: boolean;
  readonly compassSelected: boolean;
  readonly alternativeGunCooldownIndicator: boolean;
  readonly dashCooldown: string;
  readonly dashPower: string;
  readonly messageCoin: boolean;
  readonly messageCoinMessages: boolean;
  readonly messageKillstreaks: boolean;
  readonly messageMultiKills: boolean;
  readonly messageOthersKillsDeaths: boolean;
  readonly messagePowerupCollections: boolean;
  readonly messageYourDeaths: boolean;
  readonly messageYourKills: boolean;
}

export interface QuakecraftMapVotes {
  readonly ascended: number;
  readonly belmorn: number;
  readonly coldWar: number;
  readonly faarah: number;
  readonly reactor: number;
  readonly town: number;
}

export interface QuakecraftStats {
  readonly coins: number;
  readonly highestKillstreak: number;
  readonly killsDeathmatch: number;
  readonly killsDeathmatchTeams: number;
  readonly killsTimeAttack: number;
  readonly killsTourneyUnknown: number;
  readonly monthlyKillsA: number;
  readonly monthlyKillsB: number;
  readonly weeklyKillsA: number;
  readonly weeklyKillsB: number;
  readonly lastTourneyAd: Date | null;
  readonly packages: readonly string[];
  readonly solo: QuakecraftModeStats;
  readonly teams: QuakecraftModeStats;
  readonly soloTourney: QuakecraftModeStats;
  readonly tourneyQuakeSolo2: QuakecraftModeStats;
  readonly mapVotes: QuakecraftMapVotes;
  readonly cosmetics: QuakecraftCosmetics;
  readonly settings: QuakecraftSettings;
}

function parseMode(
  quake: Record<string, unknown>,
  suffix: string,
): QuakecraftModeStats {
  return {
    wins: num(quake, `wins${suffix}`),
    kills: num(quake, `kills${suffix}`),
    deaths: num(quake, `deaths${suffix}`),
    killstreaks: num(quake, `killstreaks${suffix}`),
    distanceTravelled: num(quake, `distance_travelled${suffix}`),
    shotsFired: num(quake, `shots_fired${suffix}`),
    headshots: num(quake, `headshots${suffix}`),
    killsSinceUpdateFeb2017: num(quake, `kills_since_update_feb_2017${suffix}`),
  };
}

function parseCosmetics(quake: Record<string, unknown>): QuakecraftCosmetics {
  return {
    killSound: str(quake, "killsound"),
    barrel: str(quake, "barrel"),
    case: str(quake, "case"),
    muzzle: str(quake, "muzzle"),
    sight: str(quake, "sight"),
    trigger: str(quake, "trigger"),
    beam: str(quake, "beam"),
    armor: str(quake, "armor"),
    hat: str(quake, "hat"),
    boots: str(quake, "boots"),
    leggings: str(quake, "leggings"),
    compass: str(quake, "null"),
    killPrefixColor: str(quake, "selectedKillPrefix"),
  };
}

function parseSettings(quake: Record<string, unknown>): QuakecraftSettings {
  return {
    instantRespawn: bool(quake, "instantRespawn"),
    showPrefix: bool(quake, "showKillPrefix"),
    showDashCooldown: bool(quake, "showDashCooldown"),
    enableSound: bool(quake, "enable_sound"),
    compassSelected: bool(quake, "compass_selected"),
    alternativeGunCooldownIndicator: bool(
      quake,
      "alternative_gun_cooldown_indicator",
    ),
    dashCooldown: str(quake, "dash_cooldown"),
    dashPower: str(quake, "dash_power"),
    messageCoin: bool(quake, "messageCoin"),
    messageCoinMessages: bool(quake, "messageCoin Messages"),
    messageKillstreaks: bool(quake, "messageKillstreaks"),
    messageMultiKills: bool(quake, "messageMulti-kills"),
    messageOthersKillsDeaths: bool(quake, "messageOthers' Kills/deaths"),
    messagePowerupCollections: bool(quake, "messagePowerup Collections"),
    messageYourDeaths: bool(quake, "messageYour Deaths"),
    messageYourKills: bool(quake, "messageYour Kills"),
  };
}

function parseMapVotes(quake: Record<string, unknown>): QuakecraftMapVotes {
  return {
    ascended: num(quake, "votes_Ascended"),
    belmorn: num(quake, "votes_Belmorn"),
    coldWar: num(quake, "votes_Cold_War"),
    faarah: num(quake, "votes_Faarah"),
    reactor: num(quake, "votes_Reactor"),
    town: num(quake, "votes_Town"),
  };
}

function parsePackages(quake: Record<string, unknown>): readonly string[] {
  const value = quake.packages;
  return Array.isArray(value)
    ? value.filter((entry): entry is string => typeof entry === "string")
    : [];
}

/** Parses a player's Quakecraft stats (`stats.Quake`) into a typed object. */
export function parseQuakecraft(
  stats: Record<string, unknown>,
): QuakecraftStats | null {
  const raw = stats.Quake;
  if (typeof raw !== "object" || raw === null || Array.isArray(raw)) {
    return null;
  }
  const quake = raw as Record<string, unknown>;
  return {
    coins: num(quake, "coins"),
    highestKillstreak: num(quake, "highest_killstreak"),
    killsDeathmatch: num(quake, "kills_dm"),
    killsDeathmatchTeams: num(quake, "kills_dm_teams"),
    killsTimeAttack: num(quake, "kills_timeattack"),
    killsTourneyUnknown: num(quake, "kills_tourney_unknown"),
    monthlyKillsA: num(quake, "monthly_kills_a"),
    monthlyKillsB: num(quake, "monthly_kills_b"),
    weeklyKillsA: num(quake, "weekly_kills_a"),
    weeklyKillsB: num(quake, "weekly_kills_b"),
    lastTourneyAd: date(quake, "lastTourneyAd"),
    packages: parsePackages(quake),
    solo: parseMode(quake, ""),
    teams: parseMode(quake, "_teams"),
    soloTourney: parseMode(quake, "_solo_tourney"),
    tourneyQuakeSolo2: parseMode(quake, "_tourney_quake_solo2_1"),
    mapVotes: parseMapVotes(quake),
    cosmetics: parseCosmetics(quake),
    settings: parseSettings(quake),
  };
}

