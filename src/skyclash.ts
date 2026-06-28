import { num, str, bool } from "./common";

export interface SkyClashModeStats {
  readonly wins: number;
  readonly legacyWins: number;
  readonly losses: number;
  readonly kills: number;
  readonly deaths: number;
  readonly fastestWin: number;
}

export interface SkyClashKitMastery {
  readonly master: number;
  readonly minor: number;
}

export interface SkyClashPerkCard {
  readonly level: number;
  readonly duplicates: number;
  readonly new: boolean;
}

export interface SkyClashPerkOutcomes {
  readonly wins: number;
  readonly losses: number;
  readonly kills: number;
  readonly deaths: number;
}

export interface SkyClashStats {
  readonly coins: number;
  readonly games: number;
  readonly gamesPlayed: number;
  readonly wins: number;
  readonly losses: number;
  readonly quits: number;
  readonly kills: number;
  readonly deaths: number;
  readonly assists: number;
  readonly cardPacks: number;
  readonly classesUnlocked: number;
  readonly activeClass: number;
  readonly highestKillstreak: number;
  readonly killstreak: number;
  readonly playStreak: number;
  readonly playstreak: number;
  readonly winStreak: number;
  readonly bowHits: number;
  readonly bowShots: number;
  readonly bowKills: number;
  readonly meleeKills: number;
  readonly voidKills: number;
  readonly mobKills: number;
  readonly mobsKilled: number;
  readonly mobsSpawned: number;
  readonly longestBowKill: number;
  readonly longestBowShot: number;
  readonly mostKillsGame: number;
  readonly cutePantsFound: number;
  readonly spawnAtWitch: number;
  readonly enderchestsOpened: number;
  readonly monthlyKillsA: number;
  readonly monthlyKillsB: number;
  readonly weeklyKillsA: number;
  readonly weeklyKillsB: number;
  readonly packages: readonly string[];
  readonly classes: Readonly<Record<string, string>>;
  readonly modes: Readonly<Record<string, SkyClashModeStats>>;
  readonly perKit: Readonly<Record<string, Readonly<Record<string, number>>>>;
  readonly kitMastery: Readonly<Record<string, SkyClashKitMastery>>;
  readonly kitInventories: Readonly<
    Record<string, Readonly<Record<string, string>>>
  >;
  readonly perkCards: Readonly<Record<string, SkyClashPerkCard>>;
  readonly perkOutcomes: Readonly<Record<string, SkyClashPerkOutcomes>>;
  readonly perkChallengeWins: Readonly<
    Record<string, Readonly<Record<string, number>>>
  >;
  readonly mapVotes: Readonly<Record<string, number>>;
  readonly autoEquipArmor: Readonly<Record<string, boolean>>;
}

function strList(
  block: Record<string, unknown>,
  key: string,
): readonly string[] {
  const value = block[key];
  return Array.isArray(value)
    ? value.filter((item): item is string => typeof item === "string")
    : [];
}

function parseClasses(
  block: Record<string, unknown>,
): Readonly<Record<string, string>> {
  const result: Record<string, string> = {};
  for (const key of Object.keys(block)) {
    const match = /^class_(.+)$/.exec(key);
    if (match && typeof block[key] === "string") {
      result[match[1]] = str(block, key);
    }
  }
  return result;
}

function parseModes(
  block: Record<string, unknown>,
): Readonly<Record<string, SkyClashModeStats>> {
  const names = new Set<string>();
  const consider = (candidate: string): void => {
    if (
      candidate === "" ||
      candidate.startsWith("perk_") ||
      candidate.startsWith("kit_") ||
      candidate.includes("_kit_") ||
      candidate === "monthly_a" ||
      candidate === "monthly_b" ||
      candidate === "weekly_a" ||
      candidate === "weekly_b"
    ) {
      return;
    }
    names.add(candidate);
  };
  const modePatterns = [
    /^(.+)_wins$/,
    /^(?:wins|losses|kills|deaths)_(.+)$/,
    /^fastest_win_(.+)$/,
  ];
  for (const key of Object.keys(block)) {
    for (const pattern of modePatterns) {
      const match = pattern.exec(key);
      if (match) {
        consider(match[1]);
        break;
      }
    }
  }
  const result: Record<string, SkyClashModeStats> = {};
  for (const mode of names) {
    result[mode] = {
      wins: num(block, `wins_${mode}`),
      legacyWins: num(block, `${mode}_wins`),
      losses: num(block, `losses_${mode}`),
      kills: num(block, `kills_${mode}`),
      deaths: num(block, `deaths_${mode}`),
      fastestWin: num(block, `fastest_win_${mode}`),
    };
  }
  return result;
}

function parsePerKit(
  block: Record<string, unknown>,
): Readonly<Record<string, Readonly<Record<string, number>>>> {
  const result: Record<string, Record<string, number>> = {};
  for (const key of Object.keys(block)) {
    const match = /^(.+)_kit_(.+)$/.exec(key);
    const value = block[key];
    if (!match || typeof value !== "number") {
      continue;
    }
    (result[match[2]] ?? (result[match[2]] = {}))[match[1]] = value;
  }
  return result;
}

function parseKitMastery(
  block: Record<string, unknown>,
): Readonly<Record<string, SkyClashKitMastery>> {
  const result: Record<string, { master: number; minor: number }> = {};
  for (const key of Object.keys(block)) {
    const match = /^kit_(.+)_(master|minor)$/.exec(key);
    const value = block[key];
    if (!match || typeof value !== "number") {
      continue;
    }
    const entry =
      result[match[1]] ?? (result[match[1]] = { master: 0, minor: 0 });
    if (match[2] === "master") {
      entry.master = value;
    } else {
      entry.minor = value;
    }
  }
  return result;
}

function parseInventories(
  block: Record<string, unknown>,
): Readonly<Record<string, Readonly<Record<string, string>>>> {
  const result: Record<string, Record<string, string>> = {};
  for (const key of Object.keys(block)) {
    const match = /^(.+)_inventory$/.exec(key);
    const value = block[key];
    if (
      !match ||
      typeof value !== "object" ||
      value === null ||
      Array.isArray(value)
    ) {
      continue;
    }
    const inventory: Record<string, string> = {};
    for (const [item, slot] of Object.entries(
      value as Record<string, unknown>,
    )) {
      if (typeof slot === "string") {
        inventory[item] = slot;
      }
    }
    result[match[1]] = inventory;
  }
  return result;
}

function parsePerkCards(
  block: Record<string, unknown>,
): Readonly<Record<string, SkyClashPerkCard>> {
  const result: Record<
    string,
    { level: number; duplicates: number; new: boolean }
  > = {};
  for (const key of Object.keys(block)) {
    if (!key.startsWith("perk_")) {
      continue;
    }
    let name: string;
    let field: "duplicates" | "new" | "level";
    if (key.endsWith("_duplicates")) {
      name = key.slice("perk_".length, -"_duplicates".length);
      field = "duplicates";
    } else if (key.endsWith("_new")) {
      name = key.slice("perk_".length, -"_new".length);
      field = "new";
    } else {
      name = key.slice("perk_".length);
      field = "level";
    }
    if (name === "") {
      continue;
    }
    const card =
      result[name] ?? (result[name] = { level: 0, duplicates: 0, new: false });
    if (field === "duplicates") {
      card.duplicates = num(block, key);
    } else if (field === "new") {
      card.new = bool(block, key);
    } else {
      card.level = num(block, key);
    }
  }
  return result;
}

function parsePerkOutcomes(
  block: Record<string, unknown>,
): Readonly<Record<string, SkyClashPerkOutcomes>> {
  const result: Record<
    string,
    { wins: number; losses: number; kills: number; deaths: number }
  > = {};
  for (const key of Object.keys(block)) {
    const match = /^(wins|losses|kills|deaths)_perk_(.+)$/.exec(key);
    const value = block[key];
    if (!match || typeof value !== "number") {
      continue;
    }
    const entry =
      result[match[2]] ??
      (result[match[2]] = { wins: 0, losses: 0, kills: 0, deaths: 0 });
    entry[match[1] as "wins" | "losses" | "kills" | "deaths"] = value;
  }
  return result;
}

function parsePerkChallengeWins(
  block: Record<string, unknown>,
): Readonly<Record<string, Readonly<Record<string, number>>>> {
  const result: Record<string, Record<string, number>> = {};
  for (const key of Object.keys(block)) {
    const match = /^(.+)_wins_perk_(.+)$/.exec(key);
    const value = block[key];
    if (!match || typeof value !== "number") {
      continue;
    }
    (result[match[1]] ?? (result[match[1]] = {}))[match[2]] = value;
  }
  return result;
}

function parseMapVotes(
  block: Record<string, unknown>,
): Readonly<Record<string, number>> {
  const result: Record<string, number> = {};
  for (const key of Object.keys(block)) {
    const match = /^votes_(.+)$/.exec(key);
    if (match && typeof block[key] === "number") {
      result[match[1]] = num(block, key);
    }
  }
  return result;
}

function parseAutoEquipArmor(
  block: Record<string, unknown>,
): Readonly<Record<string, boolean>> {
  const result: Record<string, boolean> = {};
  for (const key of Object.keys(block)) {
    const match = /^(.+)_inventory_auto_equip_armor$/.exec(key);
    if (match && typeof block[key] === "boolean") {
      result[match[1]] = bool(block, key);
    }
  }
  return result;
}

/** Parses a player's SkyClash stats (`stats.SkyClash`) into a typed object. */
export function parseSkyClash(
  block: Record<string, unknown>,
): SkyClashStats | null {
  if (Object.keys(block).length === 0) {
    return null;
  }
  return {
    coins: num(block, "coins"),
    games: num(block, "games"),
    gamesPlayed: num(block, "games_played"),
    wins: num(block, "wins"),
    losses: num(block, "losses"),
    quits: num(block, "quits"),
    kills: num(block, "kills"),
    deaths: num(block, "deaths"),
    assists: num(block, "assists"),
    cardPacks: num(block, "card_packs"),
    classesUnlocked: num(block, "classes_unlocked"),
    activeClass: num(block, "active_class"),
    highestKillstreak: num(block, "highestKillstreak"),
    killstreak: num(block, "killstreak"),
    playStreak: num(block, "play_streak"),
    playstreak: num(block, "playstreak"),
    winStreak: num(block, "win_streak"),
    bowHits: num(block, "bow_hits"),
    bowShots: num(block, "bow_shots"),
    bowKills: num(block, "bow_kills"),
    meleeKills: num(block, "melee_kills"),
    voidKills: num(block, "void_kills"),
    mobKills: num(block, "mob_kills"),
    mobsKilled: num(block, "mobs_killed"),
    mobsSpawned: num(block, "mobs_spawned"),
    longestBowKill: num(block, "longest_bow_kill"),
    longestBowShot: num(block, "longest_bow_shot"),
    mostKillsGame: num(block, "most_kills_game"),
    cutePantsFound: num(block, "cute_pants_found"),
    spawnAtWitch: num(block, "spawn_at_witch"),
    enderchestsOpened: num(block, "enderchests_opened"),
    monthlyKillsA: num(block, "kills_monthly_a"),
    monthlyKillsB: num(block, "kills_monthly_b"),
    weeklyKillsA: num(block, "kills_weekly_a"),
    weeklyKillsB: num(block, "kills_weekly_b"),
    packages: strList(block, "packages"),
    classes: parseClasses(block),
    modes: parseModes(block),
    perKit: parsePerKit(block),
    kitMastery: parseKitMastery(block),
    kitInventories: parseInventories(block),
    perkCards: parsePerkCards(block),
    perkOutcomes: parsePerkOutcomes(block),
    perkChallengeWins: parsePerkChallengeWins(block),
    mapVotes: parseMapVotes(block),
    autoEquipArmor: parseAutoEquipArmor(block),
  };
}

