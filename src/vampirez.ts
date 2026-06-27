import { num, str, bool } from "./common";

export interface VampireZRoleStats {
  readonly kills: number;
  readonly deaths: number;
  readonly wins: number;
}

export interface VampireZPeriodWins {
  readonly humanWinsA: number;
  readonly humanWinsB: number;
  readonly vampireWinsA: number;
  readonly vampireWinsB: number;
}

export interface VampireZMapVotes {
  readonly cavern: number;
  readonly darkValley: number;
  readonly erias: number;
  readonly overhill: number;
  readonly village: number;
}

export interface VampireZPerks {
  readonly advancedSwag: number;
  readonly babyHater: number;
  readonly basicSwag: number;
  readonly bloodBooster: number;
  readonly bloodDrinker: number;
  readonly constitution: number;
  readonly drainPunch: number;
  readonly expertSwag: number;
  readonly explosiveKiller: number;
  readonly finalBreath: number;
  readonly fireproofing: number;
  readonly foresight: number;
  readonly frankensteinsMonster: number;
  readonly goldBooster: number;
  readonly goldStarter: number;
  readonly hellborn: number;
  readonly killBooster: number;
  readonly renfield: number;
  readonly theology: number;
  readonly transfusion: number;
  readonly vampiricMinion: number;
  readonly vampiricScream: number;
  readonly vanHelsing: number;
  readonly waveBooster: number;
}

export interface VampireZStats {
  readonly coins: number;
  readonly goldBought: number;
  readonly blood: boolean;
  readonly updatedStats: boolean;
  readonly usingOld: boolean;
  readonly usingOldVamp: boolean;
  readonly disableKillPing: boolean;
  readonly noStartingCompass: boolean;
  readonly noStartingGear: boolean;
  readonly prefixDisabled: boolean;
  readonly vampColor: string;
  readonly boughtDyeColors: readonly string[];
  readonly zombieKills: number;
  readonly zombieDoubler: number;
  readonly vampireDoubler: number;
  readonly lootDrops: number;
  readonly terrorLevel: number;
  readonly mostVampireKills: number;
  readonly mostVampireKillsLegacy: number;
  readonly packages: readonly string[];
  readonly votes: VampireZMapVotes;
  readonly human: VampireZRoleStats;
  readonly vampire: VampireZRoleStats;
  readonly monthly: VampireZPeriodWins;
  readonly weekly: VampireZPeriodWins;
  readonly perks: VampireZPerks;
}

function parseRole(
  vampireZ: Record<string, unknown>,
  role: "human" | "vampire",
): VampireZRoleStats {
  return {
    kills: num(vampireZ, `${role}_kills`),
    deaths: num(vampireZ, `${role}_deaths`),
    wins: num(vampireZ, `${role}_wins`),
  };
}

function parsePeriodWins(
  vampireZ: Record<string, unknown>,
  period: "monthly" | "weekly",
): VampireZPeriodWins {
  return {
    humanWinsA: num(vampireZ, `${period}_human_wins_a`),
    humanWinsB: num(vampireZ, `${period}_human_wins_b`),
    vampireWinsA: num(vampireZ, `${period}_vampire_wins_a`),
    vampireWinsB: num(vampireZ, `${period}_vampire_wins_b`),
  };
}

function parseMapVotes(vampireZ: Record<string, unknown>): VampireZMapVotes {
  return {
    cavern: num(vampireZ, "votes_Cavern"),
    darkValley: num(vampireZ, "votes_Dark Valley"),
    erias: num(vampireZ, "votes_Erias"),
    overhill: num(vampireZ, "votes_Overhill"),
    village: num(vampireZ, "votes_Village"),
  };
}

function parsePerks(vampireZ: Record<string, unknown>): VampireZPerks {
  return {
    advancedSwag: num(vampireZ, "advanced_swag"),
    babyHater: num(vampireZ, "baby_hater"),
    basicSwag: num(vampireZ, "basic_swag"),
    bloodBooster: num(vampireZ, "blood_booster"),
    bloodDrinker: num(vampireZ, "blood_drinker"),
    constitution: num(vampireZ, "constitution"),
    drainPunch: num(vampireZ, "drain_punch"),
    expertSwag: num(vampireZ, "expert_swag"),
    explosiveKiller: num(vampireZ, "explosive_killer"),
    finalBreath: num(vampireZ, "final_breath"),
    fireproofing: num(vampireZ, "fireproofing"),
    foresight: num(vampireZ, "foresight"),
    frankensteinsMonster: num(vampireZ, "frankensteins_monster"),
    goldBooster: num(vampireZ, "gold_booster"),
    goldStarter: num(vampireZ, "gold_starter"),
    hellborn: num(vampireZ, "hellborn"),
    killBooster: num(vampireZ, "kill_booster"),
    renfield: num(vampireZ, "renfield"),
    theology: num(vampireZ, "theology"),
    transfusion: num(vampireZ, "transfusion"),
    vampiricMinion: num(vampireZ, "vampiric_minion"),
    vampiricScream: num(vampireZ, "vampiric_scream"),
    vanHelsing: num(vampireZ, "van_helsing"),
    waveBooster: num(vampireZ, "wave_booster"),
  };
}

function parsePackages(vampireZ: Record<string, unknown>): readonly string[] {
  const value = vampireZ.packages;
  return Array.isArray(value)
    ? value.filter((entry): entry is string => typeof entry === "string")
    : [];
}

function parseBoughtDyeColors(
  vampireZ: Record<string, unknown>,
): readonly string[] {
  return Object.keys(vampireZ)
    .filter(
      (key) => key.startsWith("bought_dye_color:") && vampireZ[key] === true,
    )
    .map((key) => key.slice("bought_dye_color:".length));
}

/** Parses a player's VampireZ stats (`stats.VampireZ`) into a typed object. */
export function parseVampireZ(
  stats: Record<string, unknown>,
): VampireZStats | null {
  const raw = stats.VampireZ;
  if (typeof raw !== "object" || raw === null || Array.isArray(raw)) {
    return null;
  }
  const vampireZ = raw as Record<string, unknown>;
  return {
    coins: num(vampireZ, "coins") || num(vampireZ, "tokens"),
    goldBought: num(vampireZ, "gold_bought"),
    blood: bool(vampireZ, "blood"),
    updatedStats: bool(vampireZ, "updated_stats"),
    usingOld: bool(vampireZ, "using_old"),
    usingOldVamp: bool(vampireZ, "using_old_vamp"),
    disableKillPing: bool(vampireZ, "disable_kill_ping"),
    noStartingCompass: bool(vampireZ, "no_starting_compass"),
    noStartingGear: bool(vampireZ, "no_starting_gear"),
    prefixDisabled: bool(vampireZ, "prefix_disabled"),
    vampColor: str(vampireZ, "vamp_color"),
    boughtDyeColors: parseBoughtDyeColors(vampireZ),
    zombieKills: num(vampireZ, "zombie_kills"),
    zombieDoubler: num(vampireZ, "zombie_doubler"),
    vampireDoubler: num(vampireZ, "vampire_doubler"),
    lootDrops: num(vampireZ, "loot_drops"),
    terrorLevel: num(vampireZ, "terror_level"),
    mostVampireKills: num(vampireZ, "most_vampire_kills_new"),
    mostVampireKillsLegacy: num(vampireZ, "most_vampire_kills"),
    packages: parsePackages(vampireZ),
    votes: parseMapVotes(vampireZ),
    human: parseRole(vampireZ, "human"),
    vampire: parseRole(vampireZ, "vampire"),
    monthly: parsePeriodWins(vampireZ, "monthly"),
    weekly: parsePeriodWins(vampireZ, "weekly"),
    perks: parsePerks(vampireZ),
  };
}

