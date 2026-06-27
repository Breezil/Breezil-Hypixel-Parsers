import { bool, num, obj, str } from "./common";

export interface BlitzCombatStats {
  readonly wins: number;
  readonly winsTeams: number;
  readonly gamesPlayed: number;
  readonly arrowsHit: number;
  readonly arrowsFired: number;
  readonly chestsOpened: number;
  readonly damage: number;
  readonly damageTaken: number;
  readonly kills: number;
  readonly deaths: number;
  readonly mobsSpawned: number;
  readonly potionsDrunk: number;
  readonly potionsThrown: number;
  readonly timePlayed: number;
}

export interface BlitzKitCombatStats extends BlitzCombatStats {
  readonly exp: number;
  readonly tauntKills: number;
  readonly explosiveKills: number;
  readonly fallDamage: number;
  readonly itemsEnchanted: number;
  readonly bottlesThrown: number;
  readonly eggsCollected: number;
  readonly eggsThrown: number;
  readonly snowballsThrown: number;
  readonly railsPlaced: number;
  readonly tntPlaced: number;
  readonly blocksTraveledBoat: number;
  readonly blocksTraveledHorse: number;
  readonly blocksTraveledMinecart: number;
  readonly blocksTraveledPig: number;
}

export interface BlitzKitStats extends BlitzKitCombatStats {
  readonly level: number;
  readonly prestige: number;
  readonly inventory: Readonly<Record<string, string>>;
}

export interface BlitzTourneyStats extends BlitzCombatStats {
  readonly coins: number;
  readonly blitzUses: number;
  readonly tauntKills: number;
  readonly randomWins: number;
  readonly killsTeamsNormal: number;
  readonly winsTeamsNormal: number;
  readonly kits: Readonly<Record<string, BlitzKitCombatStats>>;
}

export interface BlitzPrivateGamesSettings {
  readonly healthBuff: string;
  readonly speed: string;
  readonly extraBlitzStars: string;
  readonly nightTime: boolean;
  readonly noKits: boolean;
  readonly maxKitsAndKillEffects: boolean;
}

export interface BlitzLeaderboardSettings {
  readonly mode: string;
  readonly resetType: string;
}

export interface BlitzStats extends BlitzCombatStats {
  readonly coins: number;
  readonly blitzUses: number;
  readonly aura: string;
  readonly auraToggle: boolean;
  readonly blood: boolean;
  readonly chosenTaunt: string;
  readonly chosenVictoryDance: string;
  readonly chosenFinisher: string;
  readonly afterKillEffect: string;
  readonly afterKillEffectTourney: string;
  readonly packages: readonly string[];
  readonly killsSoloNormal: number;
  readonly killsTeamsNormal: number;
  readonly killsSoloChaos: number;
  readonly winsSoloNormal: number;
  readonly winsTeamsNormal: number;
  readonly winsSoloChaos: number;
  readonly ramboWin: number;
  readonly ramboWins: number;
  readonly randomWins: number;
  readonly tauntKills: number;
  readonly monthlyKillsA: number;
  readonly monthlyKillsB: number;
  readonly weeklyKillsA: number;
  readonly weeklyKillsB: number;
  readonly lastTourneyAd: number;
  readonly autoArmor: boolean;
  readonly defaultKit: string;
  readonly alternativeKillMessageEnabled: boolean;
  readonly prefersFullKitsMenu: boolean;
  readonly disablePrestigeFinisher: boolean;
  readonly toggled: boolean;
  readonly toggleKillCounter: number;
  readonly votes: Readonly<Record<string, number>>;
  readonly presentsCaps: Readonly<Record<string, number>>;
  readonly kitPermutations: Readonly<Record<string, string>>;
  readonly kitItemRenames: Readonly<Record<string, string>>;
  readonly leaderboardSettings: BlitzLeaderboardSettings;
  readonly privateGames: BlitzPrivateGamesSettings;
  readonly kits: Readonly<Record<string, BlitzKitStats>>;
  readonly tourneyInstances: Readonly<Record<string, BlitzTourneyStats>>;
}

const KIT_IDS: readonly string[] = [
  "arachnologist",
  "archer",
  "armorer",
  "astronaut",
  "backup",
  "baker",
  "blaze",
  "creepertamer",
  "diver",
  "donkeytamer",
  "farmer",
  "fisherman",
  "florist",
  "golem",
  "guardian",
  "horsetamer",
  "hunter",
  "hype train",
  "jockey",
  "knight",
  "meatmaster",
  "milkman",
  "necromancer",
  "paladin",
  "phoenix",
  "pigman",
  "rambo",
  "random",
  "ranger",
  "reaper",
  "reddragon",
  "rogue",
  "scout",
  "shadow knight",
  "shark",
  "slimeyslime",
  "snowman",
  "speleologist",
  "tim",
  "toxicologist",
  "troll",
  "viking",
  "warlock",
  "warrior",
  "wolftamer",
];

const INVENTORY_NAMES: Readonly<Record<string, string>> = {
  reddragon: "RedDragon",
  slimeyslime: "SlimeySlime",
};

function stringRecord(value: Record<string, unknown>): Record<string, string> {
  const result: Record<string, string> = {};
  for (const [key, item] of Object.entries(value)) {
    if (typeof item === "string") {
      result[key] = item;
    }
  }
  return result;
}

function stringArray(parent: Record<string, unknown>, key: string): string[] {
  const value = parent[key];
  return Array.isArray(value)
    ? value.filter((item): item is string => typeof item === "string")
    : [];
}

function inventoryKeyFor(kitId: string): string {
  const titled = kitId
    .split(" ")
    .map((word) => `${word.charAt(0).toUpperCase()}${word.slice(1)}`)
    .join(" ");
  return `${INVENTORY_NAMES[kitId] ?? titled}Inventory`;
}

function collectNumberFamily(
  blitz: Record<string, unknown>,
  pattern: RegExp,
): Readonly<Record<string, number>> {
  const result: Record<string, number> = {};
  for (const rawKey of Object.keys(blitz)) {
    const match = pattern.exec(rawKey);
    const value = blitz[rawKey];
    if (match && typeof value === "number") {
      result[match[1]] = value;
    }
  }
  return result;
}

function collectStringFamily(
  blitz: Record<string, unknown>,
  pattern: RegExp,
): Readonly<Record<string, string>> {
  const result: Record<string, string> = {};
  for (const rawKey of Object.keys(blitz)) {
    const match = pattern.exec(rawKey);
    const value = blitz[rawKey];
    if (match && typeof value === "string") {
      result[match[1]] = value;
    }
  }
  return result;
}

function parseCombat(
  blitz: Record<string, unknown>,
  prefix: string,
  suffix: string,
): BlitzCombatStats {
  return {
    wins: num(blitz, `${prefix}wins${suffix}`),
    winsTeams: num(blitz, `${prefix}wins_teams${suffix}`),
    gamesPlayed: num(blitz, `${prefix}games_played${suffix}`),
    arrowsHit: num(blitz, `${prefix}arrows_hit${suffix}`),
    arrowsFired: num(blitz, `${prefix}arrows_fired${suffix}`),
    chestsOpened: num(blitz, `${prefix}chests_opened${suffix}`),
    damage: num(blitz, `${prefix}damage${suffix}`),
    damageTaken: num(blitz, `${prefix}damage_taken${suffix}`),
    kills: num(blitz, `${prefix}kills${suffix}`),
    deaths: num(blitz, `${prefix}deaths${suffix}`),
    mobsSpawned: num(blitz, `${prefix}mobs_spawned${suffix}`),
    potionsDrunk: num(blitz, `${prefix}potions_drunk${suffix}`),
    potionsThrown: num(blitz, `${prefix}potions_thrown${suffix}`),
    timePlayed: num(blitz, `${prefix}time_played${suffix}`),
  };
}

function parseKitCombat(
  blitz: Record<string, unknown>,
  prefix: string,
  kitId: string,
): BlitzKitCombatStats {
  const suffix = `_${kitId}`;
  return {
    ...parseCombat(blitz, prefix, suffix),
    exp: num(blitz, `${prefix}exp${suffix}`),
    tauntKills: num(blitz, `${prefix}taunt_kills${suffix}`),
    explosiveKills: num(blitz, `${prefix}explosive_kills${suffix}`),
    fallDamage: num(blitz, `${prefix}fall_damage${suffix}`),
    itemsEnchanted: num(blitz, `${prefix}items_enchanted${suffix}`),
    bottlesThrown: num(blitz, `${prefix}bottles_thrown${suffix}`),
    eggsCollected: num(blitz, `${prefix}eggs_collected${suffix}`),
    eggsThrown: num(blitz, `${prefix}eggs_thrown${suffix}`),
    snowballsThrown: num(blitz, `${prefix}snowballs_thrown${suffix}`),
    railsPlaced: num(blitz, `${prefix}rails_placed${suffix}`),
    tntPlaced: num(blitz, `${prefix}tnt_placed${suffix}`),
    blocksTraveledBoat: num(blitz, `${prefix}blocks_traveled_boat${suffix}`),
    blocksTraveledHorse: num(blitz, `${prefix}blocks_traveled_horse${suffix}`),
    blocksTraveledMinecart: num(
      blitz,
      `${prefix}blocks_traveled_minecart${suffix}`,
    ),
    blocksTraveledPig: num(blitz, `${prefix}blocks_traveled_pig${suffix}`),
  };
}

function parseKit(
  blitz: Record<string, unknown>,
  kitId: string,
): BlitzKitStats {
  return {
    ...parseKitCombat(blitz, "", kitId),
    level: num(blitz, kitId),
    prestige: num(blitz, `p${kitId}`),
    inventory: stringRecord(obj(blitz, inventoryKeyFor(kitId))),
  };
}

function parseTourneyInstances(
  blitz: Record<string, unknown>,
): Readonly<Record<string, BlitzTourneyStats>> {
  const ids = new Set<string>();
  for (const rawKey of Object.keys(blitz)) {
    const match = /^tourney_(.+)_games_played$/.exec(rawKey);
    if (match) {
      ids.add(match[1]);
    }
  }
  const result: Record<string, BlitzTourneyStats> = {};
  for (const id of ids) {
    const prefix = `tourney_${id}_`;
    const kits: Record<string, BlitzKitCombatStats> = {};
    for (const kitId of KIT_IDS) {
      kits[kitId] = parseKitCombat(blitz, prefix, kitId);
    }
    result[id] = {
      ...parseCombat(blitz, prefix, ""),
      coins: num(blitz, `${prefix}coins`),
      blitzUses: num(blitz, `${prefix}blitz_uses`),
      tauntKills: num(blitz, `${prefix}taunt_kills`),
      randomWins: num(blitz, `${prefix}random_wins`),
      killsTeamsNormal: num(blitz, `${prefix}kills_teams_normal`),
      winsTeamsNormal: num(blitz, `${prefix}wins_teams_normal`),
      kits,
    };
  }
  return result;
}

function kitItemRenames(
  blitz: Record<string, unknown>,
): Record<string, string> {
  const prefix = "kit_item_rename_";
  const result: Record<string, string> = {};
  for (const [key, value] of Object.entries(blitz)) {
    if (key.startsWith(prefix) && typeof value === "string") {
      result[key.slice(prefix.length)] = value;
    }
  }
  return result;
}

function parsePrivateGames(
  blitz: Record<string, unknown>,
): BlitzPrivateGamesSettings {
  const privateGames = obj(blitz, "privategames");
  return {
    healthBuff: str(privateGames, "health_buff"),
    speed: str(privateGames, "speed"),
    extraBlitzStars: str(privateGames, "extra_blitz_stars"),
    nightTime: bool(privateGames, "enable_night_time"),
    noKits: bool(privateGames, "no_kits"),
    maxKitsAndKillEffects: bool(
      privateGames,
      "enable_max_kits_and_kill_effects",
    ),
  };
}

function parseLeaderboardSettings(
  blitz: Record<string, unknown>,
): BlitzLeaderboardSettings {
  const settings = obj(blitz, "leaderboardSettings");
  return {
    mode: str(settings, "mode"),
    resetType: str(settings, "resetType"),
  };
}

/** Parses a player's Blitz Survival Games stats (`stats.HungerGames`) into a typed object. */
export function parseBlitz(stats: Record<string, unknown>): BlitzStats | null {
  const raw = stats.HungerGames;
  if (typeof raw !== "object" || raw === null || Array.isArray(raw)) {
    return null;
  }
  const blitz = raw as Record<string, unknown>;

  const kits: Record<string, BlitzKitStats> = {};
  for (const kitId of KIT_IDS) {
    kits[kitId] = parseKit(blitz, kitId);
  }

  return {
    ...parseCombat(blitz, "", ""),
    coins: num(blitz, "coins"),
    blitzUses: num(blitz, "blitz_uses"),
    aura: str(blitz, "aura"),
    auraToggle: bool(blitz, "auratoggle"),
    blood: bool(blitz, "blood"),
    chosenTaunt: str(blitz, "chosen_taunt"),
    chosenVictoryDance: str(blitz, "chosen_victorydance"),
    chosenFinisher: str(blitz, "chosen_finisher"),
    afterKillEffect: str(blitz, "afterkill"),
    afterKillEffectTourney: str(blitz, "afterkill_tourney"),
    packages: stringArray(blitz, "packages"),
    killsSoloNormal: num(blitz, "kills_solo_normal"),
    killsTeamsNormal: num(blitz, "kills_teams_normal"),
    killsSoloChaos: num(blitz, "kills_solo_chaos"),
    winsSoloNormal: num(blitz, "wins_solo_normal"),
    winsTeamsNormal: num(blitz, "wins_teams_normal"),
    winsSoloChaos: num(blitz, "wins_solo_chaos"),
    ramboWin: num(blitz, "rambo_win"),
    ramboWins: num(blitz, "rambo_wins"),
    randomWins: num(blitz, "random_wins"),
    tauntKills: num(blitz, "taunt_kills"),
    monthlyKillsA: num(blitz, "monthly_kills_a"),
    monthlyKillsB: num(blitz, "monthly_kills_b"),
    weeklyKillsA: num(blitz, "weekly_kills_a"),
    weeklyKillsB: num(blitz, "weekly_kills_b"),
    lastTourneyAd: num(blitz, "lastTourneyAd"),
    autoArmor: bool(blitz, "autoarmor"),
    defaultKit: str(blitz, "defaultkit"),
    alternativeKillMessageEnabled: bool(
      blitz,
      "alternative_kill_message_enabled",
    ),
    prefersFullKitsMenu: bool(blitz, "prefers_full_kits_menu"),
    disablePrestigeFinisher: bool(blitz, "disableprestigefinisher"),
    toggled: bool(blitz, "toggled"),
    toggleKillCounter: num(blitz, "togglekillcounter"),
    votes: collectNumberFamily(blitz, /^votes_(.+)$/),
    presentsCaps: collectNumberFamily(blitz, /^inGamePresentsCap_(.+)$/),
    kitPermutations: collectStringFamily(blitz, /^kit_permutations_(.+)$/),
    kitItemRenames: kitItemRenames(blitz),
    leaderboardSettings: parseLeaderboardSettings(blitz),
    privateGames: parsePrivateGames(blitz),
    kits,
    tourneyInstances: parseTourneyInstances(blitz),
  };
}

