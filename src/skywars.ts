import { num, str, bool, date, obj } from "./common";

type SkyWarsKey = (field: string) => string;

export interface SkyWarsKillsByType {
  readonly total: number;
  readonly melee: number;
  readonly void: number;
  readonly bow: number;
  readonly mob: number;
}

export interface SkyWarsHeadsByType {
  readonly total: number;
  readonly tasty: number;
  readonly yucky: number;
  readonly eww: number;
  readonly salty: number;
  readonly divine: number;
  readonly heavenly: number;
  readonly decent: number;
  readonly meh: number;
  readonly succulent: number;
  readonly sweet: number;
  readonly ethereal: number;
  readonly indescribable: number;
}

export interface SkyWarsModeStats {
  readonly wins: number;
  readonly losses: number;
  readonly gamesPlayed: number;
  readonly timePlayed: number;
  readonly winStreak: number;
  readonly legacyWinStreak: number;
  readonly survivedPlayers: number;
  readonly chestsOpened: number;
  readonly killstreak: number;
  readonly longestBowKill: number;
  readonly fastestWin: number;
  readonly assists: number;
  readonly mostKillsGame: number;
  readonly longestBowShot: number;
  readonly arrowsHit: number;
  readonly arrowsShot: number;
  readonly shard: number;
  readonly blocksBroken: number;
  readonly blocksPlaced: number;
  readonly eggsThrown: number;
  readonly enderpearlsThrown: number;
  readonly itemsEnchanted: number;
  readonly quits: number;
  readonly coins: number;
  readonly coinsGained: number;
  readonly souls: number;
  readonly soulsGathered: number;
  readonly refillChestDestroy: number;
  readonly kills: SkyWarsKillsByType;
  readonly deaths: number;
  readonly fallKills: number;
  readonly mobsKilled: number;
  readonly heads: SkyWarsHeadsByType;
}

export interface SkyWarsSoloStats extends SkyWarsModeStats {
  readonly normal: SkyWarsModeStats;
  readonly insane: SkyWarsModeStats;
}

export interface SkyWarsTeamsStats extends SkyWarsModeStats {
  readonly normal: SkyWarsModeStats;
  readonly insane: SkyWarsModeStats;
  readonly teamsNormal: SkyWarsModeStats;
  readonly teamsInsane: SkyWarsModeStats;
}

export interface SkyWarsMegaStats extends SkyWarsModeStats {
  readonly doubles: SkyWarsModeStats;
  readonly doublesNormal: SkyWarsModeStats;
  readonly normal: SkyWarsModeStats;
}

export interface SkyWarsMiniStats extends SkyWarsModeStats {
  readonly normal: SkyWarsModeStats;
}

export interface SkyWarsRankedStats extends SkyWarsModeStats {
  readonly normal: SkyWarsModeStats;
}

export interface SkyWarsLabStats extends SkyWarsModeStats {
  readonly solo: SkyWarsModeStats;
  readonly team: SkyWarsModeStats;
}

export interface SkyWarsTourneyStats extends SkyWarsModeStats {
  readonly crazyTourney: SkyWarsModeStats;
  readonly teamsTourney: SkyWarsModeStats;
}

export interface SkyWarsCrazyTourneyStats extends SkyWarsModeStats {
  readonly normal: SkyWarsModeStats;
}

export interface SkyWarsKitStats {
  readonly experience: number;
  readonly autoEquipArmor: boolean;
  readonly overall: SkyWarsModeStats;
  readonly lab: SkyWarsModeStats;
  readonly tourney: SkyWarsModeStats;
}

export interface SkyWarsMythicKitStats extends SkyWarsModeStats {
  readonly experience: number;
  readonly autoEquipArmor: boolean;
  readonly lab: SkyWarsModeStats;
  readonly tourney: SkyWarsModeStats;
}

export interface SkyWarsMythicKits {
  readonly chronobreaker: SkyWarsMythicKitStats;
  readonly netherLord: SkyWarsMythicKitStats;
  readonly endLord: SkyWarsMythicKitStats;
  readonly monsterTrainer: SkyWarsMythicKitStats;
  readonly cryomancer: SkyWarsMythicKitStats;
  readonly thundermeister: SkyWarsMythicKitStats;
  readonly fishmonger: SkyWarsMythicKitStats;
}

export interface SkyWarsPerk {
  readonly level: number;
  readonly enabled: boolean;
}

export type SkyWarsModePerks = Readonly<Record<string, SkyWarsPerk>>;

export interface SkyWarsUniversalPerks {
  readonly avarice: SkyWarsPerk;
  readonly grandSlam: SkyWarsPerk;
  readonly tenacity: SkyWarsPerk;
  readonly meticulousMiner: SkyWarsPerk;
  readonly hideAndSeek: SkyWarsPerk;
  readonly midasGift: SkyWarsPerk;
  readonly firstBlood: SkyWarsPerk;
  readonly fortuneTeller: SkyWarsPerk;
  readonly fireproof: SkyWarsPerk;
  readonly angelsOffering: SkyWarsPerk;
  readonly librarian: SkyWarsPerk;
  readonly luckierCharm: SkyWarsPerk;
  readonly apothecary: SkyWarsPerk;
  readonly fruitFinder: SkyWarsPerk;
  readonly sorcerersSpell: SkyWarsPerk;
  readonly corruptedCoinage: SkyWarsPerk;
}

export interface SkyWarsPerkSlots {
  readonly insane: Readonly<Record<string, string>>;
  readonly normal: Readonly<Record<string, string>>;
  readonly mega: Readonly<Record<string, string>>;
}

export interface SkyWarsActiveKits {
  readonly solo: string;
  readonly team: string;
  readonly teams: string;
  readonly mega: string;
  readonly megaDoubles: string;
  readonly mini: string;
  readonly ranked: string;
  readonly teamsTourney: string;
  readonly soloRandom: boolean;
  readonly megaRandom: boolean;
  readonly megaDoublesRandom: boolean;
  readonly miniRandom: boolean;
  readonly teamsRandom: boolean;
  readonly rankedRandom: boolean;
  readonly teamsTourneyRandom: boolean;
}

export interface SkyWarsSelectedCosmetics {
  readonly killEffect: string;
  readonly victoryDance: string;
  readonly projectileTrail: string;
  readonly deathCry: string;
  readonly cage: string;
}

export interface SkyWarsChestRarities {
  readonly opened: number;
  readonly commons: number;
  readonly rares: number;
  readonly epics: number;
  readonly legendaries: number;
}

export interface SkyWarsBrewery {
  readonly gildedTonic: number;
  readonly enderElixir: number;
}

export interface SkyWarsSettings {
  readonly soulWellLobbyNotifications: boolean;
  readonly showPersonalMovementTrails: boolean;
}

export interface SkyWarsLeaderboardSettings {
  readonly resetType: string;
  readonly mode: string;
}

export interface SkyWarsRankedSeasonRating {
  readonly rating: number;
  readonly position: number;
}

export interface SkyWarsHeadCollectionEntry {
  readonly timestamp: Date | null;
  readonly mode: string;
  readonly sacrifice: string;
}

export interface SkyWarsHeadCollection {
  readonly recent: readonly SkyWarsHeadCollectionEntry[];
  readonly prestigious: readonly SkyWarsHeadCollectionEntry[];
}

export interface SkyWarsPrivateGameSettings {
  readonly maxKitsAndPerks: boolean;
  readonly legacyItems: boolean;
  readonly speed: string;
  readonly dragons: string;
  readonly noKits: boolean;
  readonly nightTime: boolean;
  readonly healthBuff: string;
  readonly teleportMayhem: boolean;
  readonly chestSwords: string;
  readonly chestArmour: string;
  readonly oneHitOneKill: boolean;
  readonly lowGravity: boolean;
  readonly chestBows: string;
}

export interface SkyWarsStats {
  readonly coins: number;
  readonly tokens: number;
  readonly experience: number;
  readonly experiencePending: number;
  readonly levelFormatted: string;
  readonly levelFormattedWithBrackets: string;
  readonly hideLevel: boolean;
  readonly lastPrestigeUnlocked: string;
  readonly activeScheme: string;
  readonly activeEmblem: string;
  readonly kitsMaxPrestige: string;
  readonly lowestLevelRewardsReceived: number;
  readonly gamesPlayedTotal: number;
  readonly headsCollected: number;
  readonly souls: number;
  readonly soulWell: number;
  readonly soulsGathered: number;
  readonly paidSouls: number;
  readonly soulWellRares: number;
  readonly soulWellLegendaries: number;
  readonly usedSoulWell: boolean;
  readonly angelOfDeathLevel: number;
  readonly refillChestDestroy: number;
  readonly harvestingSeason: number;
  readonly xezbethLuck: number;
  readonly extraWheels: number;
  readonly quits: number;
  readonly beastChance: number;
  readonly shardSeeker: number;
  readonly opals: number;
  readonly opalRollback: Date | null;
  readonly highestKillstreak: number;
  readonly highestWinstreak: number;
  readonly lastMode: string;
  readonly lastTourneyAd: number;
  readonly freeLootChestNpc: Date | null;
  readonly selectedPrestigeIcon: string;
  readonly shopSort: string;
  readonly shopSortOwnedFirst: boolean;
  readonly luckyBlockResourcePackEnabled: boolean;
  readonly combatTracker: boolean;
  readonly activeKillEffect: string;
  readonly activeVictoryDance: string;
  readonly activeKillMessages: string;
  readonly activeDeathCry: string;
  readonly activeBalloon: string;
  readonly activeCage: string;
  readonly activeSprays: string;
  readonly activeProjectileTrail: string;
  readonly selectedCosmetics: SkyWarsSelectedCosmetics;
  readonly activeKits: SkyWarsActiveKits;
  readonly weeklyKillsA: number;
  readonly weeklyKillsB: number;
  readonly monthlyKillsA: number;
  readonly monthlyKillsB: number;
  readonly chests: number;
  readonly chestHistory: readonly string[];
  readonly chestHistoryNew: readonly string[];
  readonly chestRarities: SkyWarsChestRarities;
  readonly halloweenBoxes: number;
  readonly christmasBoxes: number;
  readonly lunarBoxes: number;
  readonly easterBoxes: number;
  readonly mysteryBoxesSeasonOne: number;
  readonly packages: readonly string[];
  readonly favoriteKits: Readonly<Record<string, readonly string[]>>;
  readonly headCollection: SkyWarsHeadCollection;
  readonly challengeAttemptsTotal: number;
  readonly challengeWinsTotal: number;
  readonly challengeMilestonesAchieved: number;
  readonly challengeAttempts: Readonly<Record<string, number>>;
  readonly challengeWins: Readonly<Record<string, number>>;
  readonly labWins: Readonly<Record<string, number>>;
  readonly votes: Readonly<Record<string, number>>;
  readonly explainedFlags: Readonly<Record<string, number>>;
  readonly presentsCaps: Readonly<Record<string, number>>;
  readonly freeEventKeys: Readonly<Record<string, boolean>>;
  readonly megaKitLevels: Readonly<Record<string, number>>;
  readonly kitInventories: Readonly<
    Record<string, Readonly<Record<string, string>>>
  >;
  readonly brewery: SkyWarsBrewery;
  readonly breweryActive: string;
  readonly settings: SkyWarsSettings;
  readonly leaderboardSettings: SkyWarsLeaderboardSettings;
  readonly rankedSeasonRatings: Readonly<
    Record<string, SkyWarsRankedSeasonRating>
  >;
  readonly privateGames: SkyWarsPrivateGameSettings;
  readonly overall: SkyWarsModeStats;
  readonly solo: SkyWarsSoloStats;
  readonly teams: SkyWarsTeamsStats;
  readonly mega: SkyWarsMegaStats;
  readonly mini: SkyWarsMiniStats;
  readonly ranked: SkyWarsRankedStats;
  readonly lab: SkyWarsLabStats;
  readonly tourney: SkyWarsTourneyStats;
  readonly crazyTourney: SkyWarsCrazyTourneyStats;
  readonly tourneyInstances: Readonly<Record<string, SkyWarsModeStats>>;
  readonly soloPerks: SkyWarsModePerks;
  readonly teamsPerks: SkyWarsModePerks;
  readonly megaPerks: SkyWarsModePerks;
  readonly rankedPerks: SkyWarsModePerks;
  readonly universalPerks: SkyWarsUniversalPerks;
  readonly universalPerkToggles: Readonly<Record<string, boolean>>;
  readonly perkSlots: SkyWarsPerkSlots;
  readonly disabledPerks: Readonly<Record<string, readonly string[]>>;
  readonly mythicKits: SkyWarsMythicKits;
  readonly perKit: Readonly<Record<string, SkyWarsKitStats>>;
}

function toStringArray(value: unknown): readonly string[] {
  return Array.isArray(value)
    ? value.filter((item): item is string => typeof item === "string")
    : [];
}

function stringArray(
  skyWars: Record<string, unknown>,
  key: string,
): readonly string[] {
  return toStringArray(skyWars[key]);
}

function stringMap(value: unknown): Readonly<Record<string, string>> {
  if (typeof value !== "object" || value === null || Array.isArray(value)) {
    return {};
  }
  const result: Record<string, string> = {};
  for (const [slot, entry] of Object.entries(
    value as Record<string, unknown>,
  )) {
    if (typeof entry === "string") {
      result[slot] = entry;
    }
  }
  return result;
}

function suffixKey(suffix: string): SkyWarsKey {
  return (field) => `${field}${suffix}`;
}

function parseKillsByType(
  skyWars: Record<string, unknown>,
  key: SkyWarsKey,
): SkyWarsKillsByType {
  return {
    total: num(skyWars, key("kills")),
    melee: num(skyWars, key("melee_kills")),
    void: num(skyWars, key("void_kills")),
    bow: num(skyWars, key("bow_kills")),
    mob: num(skyWars, key("mob_kills")),
  };
}

function parseHeadsByType(
  skyWars: Record<string, unknown>,
  key: SkyWarsKey,
): SkyWarsHeadsByType {
  return {
    total: num(skyWars, key("heads")),
    tasty: num(skyWars, key("heads_tasty")),
    yucky: num(skyWars, key("heads_yucky")),
    eww: num(skyWars, key("heads_eww")),
    salty: num(skyWars, key("heads_salty")),
    divine: num(skyWars, key("heads_divine")),
    heavenly: num(skyWars, key("heads_heavenly")),
    decent: num(skyWars, key("heads_decent")),
    meh: num(skyWars, key("heads_meh")),
    succulent: num(skyWars, key("heads_succulent")),
    sweet: num(skyWars, key("heads_sweet")),
    ethereal: num(skyWars, key("heads_ethereal")),
    indescribable: num(skyWars, key("heads_indescribable")),
  };
}

function parseMode(
  skyWars: Record<string, unknown>,
  key: SkyWarsKey,
): SkyWarsModeStats {
  return {
    wins: num(skyWars, key("wins")),
    losses: num(skyWars, key("losses")),
    gamesPlayed: num(skyWars, key("games")),
    timePlayed: num(skyWars, key("time_played")),
    winStreak: num(skyWars, key("win_streak")),
    legacyWinStreak: num(skyWars, key("winstreak")),
    survivedPlayers: num(skyWars, key("survived_players")),
    chestsOpened: num(skyWars, key("chests_opened")),
    killstreak: num(skyWars, key("killstreak")),
    longestBowKill: num(skyWars, key("longest_bow_kill")),
    fastestWin: num(skyWars, key("fastest_win")),
    assists: num(skyWars, key("assists")),
    mostKillsGame: num(skyWars, key("most_kills_game")),
    longestBowShot: num(skyWars, key("longest_bow_shot")),
    arrowsHit: num(skyWars, key("arrows_hit")),
    arrowsShot: num(skyWars, key("arrows_shot")),
    shard: num(skyWars, key("shard")),
    blocksBroken: num(skyWars, key("blocks_broken")),
    blocksPlaced: num(skyWars, key("blocks_placed")),
    eggsThrown: num(skyWars, key("egg_thrown")),
    enderpearlsThrown: num(skyWars, key("enderpearls_thrown")),
    itemsEnchanted: num(skyWars, key("items_enchanted")),
    quits: num(skyWars, key("quits")),
    coins: num(skyWars, key("coins")),
    coinsGained: num(skyWars, key("coins_gained")),
    souls: num(skyWars, key("souls")),
    soulsGathered: num(skyWars, key("souls_gathered")),
    refillChestDestroy: num(skyWars, key("refill_chest_destroy")),
    kills: parseKillsByType(skyWars, key),
    deaths: num(skyWars, key("deaths")),
    fallKills: num(skyWars, key("fall_kills")),
    mobsKilled: num(skyWars, key("mobs_killed")),
    heads: parseHeadsByType(skyWars, key),
  };
}

function parsePerks(
  skyWars: Record<string, unknown>,
  mode: string,
  perks: ReadonlyArray<readonly [string, string]>,
): SkyWarsModePerks {
  const result: Record<string, SkyWarsPerk> = {};
  for (const [name, id] of perks) {
    result[name] = {
      level: num(skyWars, `${mode}_${id}`),
      enabled: bool(skyWars, `toggle_${mode}_${id}`),
    };
  }
  return result;
}

function parseUniversalPerk(
  skyWars: Record<string, unknown>,
  id: string,
): SkyWarsPerk {
  return {
    level: num(skyWars, id),
    enabled: bool(skyWars, `toggle_${id}`),
  };
}

function parseUniversalPerks(
  skyWars: Record<string, unknown>,
): SkyWarsUniversalPerks {
  return {
    avarice: parseUniversalPerk(skyWars, "avarice"),
    grandSlam: parseUniversalPerk(skyWars, "grand_slam"),
    tenacity: parseUniversalPerk(skyWars, "tenacity"),
    meticulousMiner: parseUniversalPerk(skyWars, "meticulous_miner"),
    hideAndSeek: parseUniversalPerk(skyWars, "hide_and_seek"),
    midasGift: parseUniversalPerk(skyWars, "midas_gift"),
    firstBlood: parseUniversalPerk(skyWars, "first_blood"),
    fortuneTeller: parseUniversalPerk(skyWars, "fortune_teller"),
    fireproof: parseUniversalPerk(skyWars, "fireproof"),
    angelsOffering: parseUniversalPerk(skyWars, "angels_offering"),
    librarian: parseUniversalPerk(skyWars, "librarian"),
    luckierCharm: parseUniversalPerk(skyWars, "luckier_charm"),
    apothecary: parseUniversalPerk(skyWars, "apothecary"),
    fruitFinder: parseUniversalPerk(skyWars, "fruit_finder"),
    sorcerersSpell: parseUniversalPerk(skyWars, "sorcerers_spell"),
    corruptedCoinage: parseUniversalPerk(skyWars, "corrupted_coinage"),
  };
}

function parseUniversalPerkToggles(
  skyWars: Record<string, unknown>,
): Readonly<Record<string, boolean>> {
  const result: Record<string, boolean> = {};
  for (const rawKey of Object.keys(skyWars)) {
    const match = /^toggle_(?!solo_|team_|mega_|ranked_)(.+)$/.exec(rawKey);
    if (match) {
      result[match[1]] = skyWars[rawKey] === true;
    }
  }
  return result;
}

const SOLO_PERKS: ReadonlyArray<readonly [string, string]> = [
  ["enderMastery", "ender_mastery"],
  ["arrowRecovery", "arrow_recovery"],
  ["miningExpertise", "mining_expertise"],
  ["blazingArrows", "blazing_arrows"],
  ["instantSmelting", "instant_smelting"],
  ["resistanceBoost", "resistance_boost"],
  ["speedBoost", "speed_boost"],
  ["bulldozer", "bulldozer"],
  ["marksmanship", "marksmanship"],
  ["juggernaut", "juggernaut"],
  ["knowledge", "knowledge"],
  ["fat", "fat"],
  ["nourishment", "nourishment"],
  ["annoyOMite", "annoy-o-mite"],
  ["revenge", "revenge"],
  ["luckyCharm", "lucky_charm"],
  ["bridger", "bridger"],
  ["environmentalExpert", "environmental_expert"],
  ["necromancer", "necromancer"],
  ["blackMagic", "black_magic"],
  ["robbery", "robbery"],
  ["frost", "frost"],
  ["barbarian", "barbarian"],
  ["savior", "savior"],
  ["telekinesis", "telekinesis"],
];

const TEAMS_PERKS: ReadonlyArray<readonly [string, string]> = [
  ["instantSmelting", "instant_smelting"],
  ["enderMastery", "ender_mastery"],
  ["resistanceBoost", "resistance_boost"],
  ["miningExpertise", "mining_expertise"],
  ["juggernaut", "juggernaut"],
  ["blazingArrows", "blazing_arrows"],
  ["arrowRecovery", "arrow_recovery"],
  ["speedBoost", "speed_boost"],
  ["fat", "fat"],
  ["nourishment", "nourishment"],
  ["knowledge", "knowledge"],
  ["savior", "savior"],
  ["marksmanship", "marksmanship"],
  ["bridger", "bridger"],
  ["luckyCharm", "lucky_charm"],
  ["necromancer", "necromancer"],
  ["blackMagic", "black_magic"],
  ["environmentalExpert", "environmental_expert"],
  ["robbery", "robbery"],
  ["frost", "frost"],
  ["annoyOMite", "annoy-o-mite"],
  ["bulldozer", "bulldozer"],
  ["barbarian", "barbarian"],
  ["diamondpiercer", "diamondpiercer"],
  ["telekinesis", "telekinesis"],
];

const MEGA_PERKS: ReadonlyArray<readonly [string, string]> = [
  ["rusher", "rusher"],
  ["miningExpertise", "mining_expertise"],
  ["enderMastery", "ender_mastery"],
  ["blazingArrows", "blazing_arrows"],
  ["arrowRecovery", "arrow_recovery"],
  ["juggernaut", "juggernaut"],
  ["tank", "tank"],
  ["nourishment", "nourishment"],
  ["notoriety", "notoriety"],
  ["instantSmelting", "instant_smelting"],
  ["marksmanship", "marksmanship"],
  ["environmentalExpert", "environmental_expert"],
  ["bridger", "bridger"],
  ["luckyCharm", "lucky_charm"],
  ["blackMagic", "black_magic"],
  ["necromancer", "necromancer"],
  ["telekinesis", "telekinesis"],
];

const RANKED_PERKS: ReadonlyArray<readonly [string, string]> = [
  ["instantSmelting", "instant_smelting"],
  ["scoutPerk", "scout_perk"],
  ["athletePerk", "athlete_perk"],
  ["bowmanPerk", "bowman_perk"],
  ["championPerk", "champion_perk"],
  ["paladinPerk", "paladin_perk"],
  ["blacksmithPerk", "blacksmith_perk"],
  ["armorerPerk", "armorer_perk"],
  ["healerPerk", "healer_perk"],
  ["houndPerk", "hound_perk"],
  ["magicianPerk", "magician_perk"],
  ["pyromancerPerk", "pyromancer_perk"],
  ["lastStand", "last_stand"],
  ["toughSkin", "tough_skin"],
  ["arrowRecovery", "arrow_recovery"],
  ["juggernaut", "juggernaut"],
  ["miningExpertise", "mining_expertise"],
  ["blazingArrows", "blazing_arrows"],
  ["rusher", "rusher"],
  ["bridger", "bridger"],
  ["environmentalExpert", "environmental_expert"],
  ["bulldozer", "bulldozer"],
  ["telekinesis", "telekinesis"],
];

const MYTHIC_KIT_SUFFIX: Readonly<Record<keyof SkyWarsMythicKits, string>> = {
  chronobreaker: "_kit_mythical_chronobreaker",
  netherLord: "_kit_mythical_nether-lord",
  endLord: "_kit_mythical_end-lord",
  monsterTrainer: "_kit_mythical_monster-trainer",
  cryomancer: "_kit_mythical_cryomancer",
  thundermeister: "_kit_mythical_thundermeister",
  fishmonger: "_kit_mythical_fishmonger",
};

function parseMythicKit(
  skyWars: Record<string, unknown>,
  suffix: string,
): SkyWarsMythicKitStats {
  return {
    ...parseMode(skyWars, suffixKey(suffix)),
    experience: num(skyWars, `xp${suffix}`),
    autoEquipArmor: bool(
      skyWars,
      `${suffix.slice(1)}_inventory_auto_equip_armor`,
    ),
    lab: parseMode(skyWars, suffixKey(`_lab${suffix}`)),
    tourney: parseMode(skyWars, suffixKey(`_tourney${suffix}`)),
  };
}

function parseMythicKits(skyWars: Record<string, unknown>): SkyWarsMythicKits {
  return {
    chronobreaker: parseMythicKit(skyWars, MYTHIC_KIT_SUFFIX.chronobreaker),
    netherLord: parseMythicKit(skyWars, MYTHIC_KIT_SUFFIX.netherLord),
    endLord: parseMythicKit(skyWars, MYTHIC_KIT_SUFFIX.endLord),
    monsterTrainer: parseMythicKit(skyWars, MYTHIC_KIT_SUFFIX.monsterTrainer),
    cryomancer: parseMythicKit(skyWars, MYTHIC_KIT_SUFFIX.cryomancer),
    thundermeister: parseMythicKit(skyWars, MYTHIC_KIT_SUFFIX.thundermeister),
    fishmonger: parseMythicKit(skyWars, MYTHIC_KIT_SUFFIX.fishmonger),
  };
}

function parsePerkSlots(skyWars: Record<string, unknown>): SkyWarsPerkSlots {
  const slots = obj(skyWars, "perkslot");
  return {
    insane: stringMap(slots.insane),
    normal: stringMap(slots.normal),
    mega: stringMap(slots.mega),
  };
}

function parseDisabledPerks(
  skyWars: Record<string, unknown>,
): Readonly<Record<string, readonly string[]>> {
  const disabled = obj(skyWars, "disabled_perks");
  const result: Record<string, readonly string[]> = {};
  for (const key of Object.keys(disabled)) {
    result[key] = toStringArray(disabled[key]);
  }
  return result;
}

function parseBrewery(skyWars: Record<string, unknown>): SkyWarsBrewery {
  const brewery = obj(skyWars, "brewery");
  return {
    gildedTonic: num(brewery, "gilded_tonic"),
    enderElixir: num(brewery, "ender_elixir"),
  };
}

function parseSettings(skyWars: Record<string, unknown>): SkyWarsSettings {
  const settings = obj(skyWars, "settings");
  return {
    soulWellLobbyNotifications: bool(settings, "soul_well_lobby_notifications"),
    showPersonalMovementTrails: bool(settings, "show_personal_movement_trails"),
  };
}

function parseLeaderboardSettings(
  skyWars: Record<string, unknown>,
): SkyWarsLeaderboardSettings {
  const settings = obj(skyWars, "leaderboardSettings");
  return {
    resetType: str(settings, "resetType"),
    mode: str(settings, "mode"),
  };
}

function parseRankedSeasonRatings(
  skyWars: Record<string, unknown>,
): Readonly<Record<string, SkyWarsRankedSeasonRating>> {
  const result: Record<string, { rating: number; position: number }> = {};
  for (const rawKey of Object.keys(skyWars)) {
    const match = /^SkyWars_skywars_rating_(\d+_\d+)_(rating|position)$/.exec(
      rawKey,
    );
    const value = skyWars[rawKey];
    if (!match || typeof value !== "number") {
      continue;
    }
    const entry =
      result[match[1]] ?? (result[match[1]] = { rating: 0, position: 0 });
    if (match[2] === "rating") {
      entry.rating = value;
    } else {
      entry.position = value;
    }
  }
  return result;
}

function parsePrivateGames(
  skyWars: Record<string, unknown>,
): SkyWarsPrivateGameSettings {
  const settings = obj(skyWars, "privategames");
  return {
    maxKitsAndPerks: bool(settings, "enable_max_kits_and_perks"),
    legacyItems: bool(settings, "enable_legacy_items"),
    speed: str(settings, "speed"),
    dragons: str(settings, "dragons"),
    noKits: bool(settings, "no_kits"),
    nightTime: bool(settings, "enable_night_time"),
    healthBuff: str(settings, "health_buff"),
    teleportMayhem: bool(settings, "enable_teleport_mayhem"),
    chestSwords: str(settings, "chest_swords"),
    chestArmour: str(settings, "chest_armour"),
    oneHitOneKill: bool(settings, "one_hit_one_kill"),
    lowGravity: bool(settings, "low_gravity"),
    chestBows: str(settings, "chest_bows"),
  };
}

function parseHeadEntries(
  value: unknown,
): readonly SkyWarsHeadCollectionEntry[] {
  if (!Array.isArray(value)) {
    return [];
  }
  const entries: SkyWarsHeadCollectionEntry[] = [];
  for (const item of value) {
    if (typeof item === "object" && item !== null && !Array.isArray(item)) {
      const entry = item as Record<string, unknown>;
      entries.push({
        timestamp: date(entry, "timestamp"),
        mode: str(entry, "mode"),
        sacrifice: str(entry, "sacrifice"),
      });
    }
  }
  return entries;
}

function parseHeadCollection(
  skyWars: Record<string, unknown>,
): SkyWarsHeadCollection {
  const collection = obj(skyWars, "head_collection");
  return {
    recent: parseHeadEntries(collection.recent),
    prestigious: parseHeadEntries(collection.prestigious),
  };
}

function collectNumbers(
  skyWars: Record<string, unknown>,
  pattern: RegExp,
): Readonly<Record<string, number>> {
  const result: Record<string, number> = {};
  for (const rawKey of Object.keys(skyWars)) {
    const match = pattern.exec(rawKey);
    const value = skyWars[rawKey];
    if (match && typeof value === "number") {
      result[match[1]] = value;
    }
  }
  return result;
}

function collectBooleans(
  skyWars: Record<string, unknown>,
  pattern: RegExp,
): Readonly<Record<string, boolean>> {
  const result: Record<string, boolean> = {};
  for (const rawKey of Object.keys(skyWars)) {
    const match = pattern.exec(rawKey);
    if (match) {
      result[match[1]] = skyWars[rawKey] === true;
    }
  }
  return result;
}

function collectStringArrays(
  skyWars: Record<string, unknown>,
  pattern: RegExp,
): Readonly<Record<string, readonly string[]>> {
  const result: Record<string, readonly string[]> = {};
  for (const rawKey of Object.keys(skyWars)) {
    const match = pattern.exec(rawKey);
    if (match) {
      result[match[1]] = toStringArray(skyWars[rawKey]);
    }
  }
  return result;
}

function collectInventories(
  skyWars: Record<string, unknown>,
): Readonly<Record<string, Readonly<Record<string, string>>>> {
  const result: Record<string, Record<string, string>> = {};
  for (const rawKey of Object.keys(skyWars)) {
    const match = /^(kit_.+)_inventory$/.exec(rawKey);
    const value = skyWars[rawKey];
    if (
      match &&
      typeof value === "object" &&
      value !== null &&
      !Array.isArray(value)
    ) {
      const inventory: Record<string, string> = {};
      for (const [slot, count] of Object.entries(
        value as Record<string, unknown>,
      )) {
        if (typeof count === "string") {
          inventory[slot] = count;
        }
      }
      result[match[1]] = inventory;
    }
  }
  return result;
}

function collectKitIds(skyWars: Record<string, unknown>): readonly string[] {
  const ids = new Set<string>();
  for (const rawKey of Object.keys(skyWars)) {
    const index = rawKey.indexOf("_kit_");
    if (index < 0) {
      continue;
    }
    const id = rawKey.slice(index + 1);
    if (!id.startsWith("kit_mythical")) {
      ids.add(id);
    }
  }
  return [...ids];
}

function parsePerKit(
  skyWars: Record<string, unknown>,
): Readonly<Record<string, SkyWarsKitStats>> {
  const result: Record<string, SkyWarsKitStats> = {};
  for (const id of collectKitIds(skyWars)) {
    result[id] = {
      experience: num(skyWars, `xp_${id}`),
      autoEquipArmor: bool(skyWars, `${id}_inventory_auto_equip_armor`),
      overall: parseMode(skyWars, suffixKey(`_${id}`)),
      lab: parseMode(skyWars, suffixKey(`_lab_${id}`)),
      tourney: parseMode(skyWars, suffixKey(`_tourney_${id}`)),
    };
  }
  return result;
}

function parseTourneyInstances(
  skyWars: Record<string, unknown>,
): Readonly<Record<string, SkyWarsModeStats>> {
  const ids = new Set<string>();
  for (const rawKey of Object.keys(skyWars)) {
    const match = /^tourney_(.+)_wins$/.exec(rawKey);
    if (match) {
      ids.add(match[1]);
    }
  }
  const result: Record<string, SkyWarsModeStats> = {};
  for (const id of ids) {
    result[id] = parseMode(skyWars, (field) => `tourney_${id}_${field}`);
  }
  return result;
}

/** Parses a player's SkyWars stats (`stats.SkyWars`) into a typed object. */
export function parseSkyWars(
  stats: Record<string, unknown>,
): SkyWarsStats | null {
  const skyWars = obj(stats, "SkyWars");
  if (Object.keys(skyWars).length === 0) {
    return null;
  }
  return {
    coins: num(skyWars, "coins"),
    tokens: num(skyWars, "cosmetic_tokens"),
    experience: num(skyWars, "skywars_experience"),
    experiencePending: num(skyWars, "skywars_experience_pending"),
    levelFormatted: str(skyWars, "levelFormatted"),
    levelFormattedWithBrackets: str(skyWars, "levelFormattedWithBrackets"),
    hideLevel: bool(skyWars, "hide_skywars_level"),
    lastPrestigeUnlocked: str(skyWars, "last_prestige_unlocked"),
    activeScheme: str(skyWars, "active_scheme"),
    activeEmblem: str(skyWars, "active_emblem"),
    kitsMaxPrestige: str(skyWars, "kitsMaxPrestige"),
    lowestLevelRewardsReceived: num(skyWars, "lowest_level_rewards_received"),
    gamesPlayedTotal: num(skyWars, "games_played_skywars"),
    headsCollected: num(skyWars, "heads"),
    souls: num(skyWars, "souls"),
    soulWell: num(skyWars, "soul_well"),
    soulsGathered: num(skyWars, "souls_gathered"),
    paidSouls: num(skyWars, "paid_souls"),
    soulWellRares: num(skyWars, "soul_well_rares"),
    soulWellLegendaries: num(skyWars, "soul_well_legendaries"),
    usedSoulWell: bool(skyWars, "usedSoulWell"),
    angelOfDeathLevel: num(skyWars, "angel_of_death_level"),
    refillChestDestroy: num(skyWars, "refill_chest_destroy"),
    harvestingSeason: num(skyWars, "harvesting_season"),
    xezbethLuck: num(skyWars, "xezbeth_luck"),
    extraWheels: num(skyWars, "extra_wheels"),
    quits: num(skyWars, "quits"),
    beastChance: num(skyWars, "beast_chance"),
    shardSeeker: num(skyWars, "shard_seeker"),
    opals: num(skyWars, "opals"),
    opalRollback: date(skyWars, "opal_rollback"),
    highestKillstreak: num(skyWars, "highestKillstreak"),
    highestWinstreak: num(skyWars, "highestWinstreak"),
    lastMode: str(skyWars, "lastMode"),
    lastTourneyAd: num(skyWars, "lastTourneyAd"),
    freeLootChestNpc: date(skyWars, "freeLootChestNpc"),
    selectedPrestigeIcon: str(skyWars, "selected_prestige_icon"),
    shopSort: str(skyWars, "shop_sort"),
    shopSortOwnedFirst: bool(skyWars, "shop_sort_enable_owned_first"),
    luckyBlockResourcePackEnabled: bool(
      skyWars,
      "luckyBlockResourcePackEnabled",
    ),
    combatTracker: bool(skyWars, "combatTracker"),
    activeKillEffect: str(skyWars, "active_killeffect"),
    activeVictoryDance: str(skyWars, "active_victorydance"),
    activeKillMessages: str(skyWars, "active_killmessages"),
    activeDeathCry: str(skyWars, "active_deathcry"),
    activeBalloon: str(skyWars, "active_balloon"),
    activeCage: str(skyWars, "active_cage"),
    activeSprays: str(skyWars, "active_sprays"),
    activeProjectileTrail: str(skyWars, "active_projectiletrail"),
    selectedCosmetics: {
      killEffect: str(skyWars, "activeKillEffect"),
      victoryDance: str(skyWars, "activeVictoryDance"),
      projectileTrail: str(skyWars, "activeProjectileTrail"),
      deathCry: str(skyWars, "activeDeathCry"),
      cage: str(skyWars, "activeCage"),
    },
    activeKits: {
      solo: str(skyWars, "activeKit_SOLO"),
      team: str(skyWars, "activeKit_TEAM"),
      teams: str(skyWars, "activeKit_TEAMS"),
      mega: str(skyWars, "activeKit_MEGA"),
      megaDoubles: str(skyWars, "activeKit_MEGA_DOUBLES"),
      mini: str(skyWars, "activeKit_MINI"),
      ranked: str(skyWars, "activeKit_RANKED"),
      teamsTourney: str(skyWars, "activeKit_TEAMS_tourney"),
      soloRandom: bool(skyWars, "activeKit_SOLO_random"),
      megaRandom: bool(skyWars, "activeKit_MEGA_random"),
      megaDoublesRandom: bool(skyWars, "activeKit_MEGA_DOUBLES_random"),
      miniRandom: bool(skyWars, "activeKit_MINI_random"),
      teamsRandom: bool(skyWars, "activeKit_TEAMS_random"),
      rankedRandom: bool(skyWars, "activeKit_RANKED_random"),
      teamsTourneyRandom: bool(skyWars, "activeKit_TEAMS_tourney_random"),
    },
    weeklyKillsA: num(skyWars, "kills_weekly_a"),
    weeklyKillsB: num(skyWars, "kills_weekly_b"),
    monthlyKillsA: num(skyWars, "kills_monthly_a"),
    monthlyKillsB: num(skyWars, "kills_monthly_b"),
    chests: num(skyWars, "skywars_chests"),
    chestHistory: stringArray(skyWars, "skywars_chest_history"),
    chestHistoryNew: stringArray(skyWars, "chest_history_new"),
    chestRarities: {
      opened: num(skyWars, "SkyWars_openedChests"),
      commons: num(skyWars, "SkyWars_openedCommons"),
      rares: num(skyWars, "SkyWars_openedRares"),
      epics: num(skyWars, "SkyWars_openedEpics"),
      legendaries: num(skyWars, "SkyWars_openedLegendaries"),
    },
    halloweenBoxes: num(skyWars, "skywars_halloween_boxes"),
    christmasBoxes: num(skyWars, "skywars_christmas_boxes"),
    lunarBoxes: num(skyWars, "skywars_lunar_boxes"),
    easterBoxes: num(skyWars, "skywars_easter_boxes"),
    mysteryBoxesSeasonOne: num(skyWars, "mystery_boxes_season_one"),
    packages: stringArray(skyWars, "packages"),
    favoriteKits: collectStringArrays(skyWars, /^favorite_kits_(.+)$/),
    headCollection: parseHeadCollection(skyWars),
    challengeAttemptsTotal: num(skyWars, "challenge_attempts"),
    challengeWinsTotal: num(skyWars, "challenge_wins"),
    challengeMilestonesAchieved: num(skyWars, "challenge_milestones_achieved"),
    challengeAttempts: collectNumbers(skyWars, /^challenge_attempts_(.+)$/),
    challengeWins: collectNumbers(skyWars, /^challenge_wins_(.+)$/),
    labWins: collectNumbers(skyWars, /^lab_((?:win|hvb)_.+)$/),
    votes: collectNumbers(skyWars, /^votes_(.+)$/),
    explainedFlags: collectNumbers(skyWars, /^(.+_explained(?:_last)?)$/),
    presentsCaps: collectNumbers(skyWars, /^inGamePresentsCap_(.+)$/),
    freeEventKeys: collectBooleans(skyWars, /^free_event_key_(.+)$/),
    megaKitLevels: collectNumbers(skyWars, /^kit_mega_mega_(.+)$/),
    kitInventories: collectInventories(skyWars),
    brewery: parseBrewery(skyWars),
    breweryActive: str(skyWars, "brewery_active"),
    settings: parseSettings(skyWars),
    leaderboardSettings: parseLeaderboardSettings(skyWars),
    rankedSeasonRatings: parseRankedSeasonRatings(skyWars),
    privateGames: parsePrivateGames(skyWars),
    overall: parseMode(skyWars, suffixKey("")),
    solo: {
      ...parseMode(skyWars, suffixKey("_solo")),
      normal: parseMode(skyWars, suffixKey("_solo_normal")),
      insane: parseMode(skyWars, suffixKey("_solo_insane")),
    },
    teams: {
      ...parseMode(skyWars, suffixKey("_team")),
      normal: parseMode(skyWars, suffixKey("_team_normal")),
      insane: parseMode(skyWars, suffixKey("_team_insane")),
      teamsNormal: parseMode(skyWars, suffixKey("_teams_normal")),
      teamsInsane: parseMode(skyWars, suffixKey("_teams_insane")),
    },
    mega: {
      ...parseMode(skyWars, suffixKey("_mega")),
      doubles: parseMode(skyWars, suffixKey("_mega_doubles")),
      doublesNormal: parseMode(skyWars, suffixKey("_mega_doubles_normal")),
      normal: parseMode(skyWars, suffixKey("_mega_normal")),
    },
    mini: {
      ...parseMode(skyWars, suffixKey("_mini")),
      normal: parseMode(skyWars, suffixKey("_mini_normal")),
    },
    ranked: {
      ...parseMode(skyWars, suffixKey("_ranked")),
      normal: parseMode(skyWars, suffixKey("_ranked_normal")),
    },
    lab: {
      ...parseMode(skyWars, suffixKey("_lab")),
      solo: parseMode(skyWars, suffixKey("_lab_solo")),
      team: parseMode(skyWars, suffixKey("_lab_team")),
    },
    tourney: {
      ...parseMode(skyWars, suffixKey("_tourney")),
      crazyTourney: parseMode(skyWars, suffixKey("_tourney_crazytourney")),
      teamsTourney: parseMode(skyWars, suffixKey("_tourney_teams_tourney")),
    },
    crazyTourney: {
      ...parseMode(skyWars, suffixKey("_crazytourney")),
      normal: parseMode(skyWars, suffixKey("_crazytourney_normal")),
    },
    tourneyInstances: parseTourneyInstances(skyWars),
    soloPerks: parsePerks(skyWars, "solo", SOLO_PERKS),
    teamsPerks: parsePerks(skyWars, "team", TEAMS_PERKS),
    megaPerks: parsePerks(skyWars, "mega", MEGA_PERKS),
    rankedPerks: parsePerks(skyWars, "ranked", RANKED_PERKS),
    universalPerks: parseUniversalPerks(skyWars),
    universalPerkToggles: parseUniversalPerkToggles(skyWars),
    perkSlots: parsePerkSlots(skyWars),
    disabledPerks: parseDisabledPerks(skyWars),
    mythicKits: parseMythicKits(skyWars),
    perKit: parsePerKit(skyWars),
  };
}

