import { num, str, bool, obj } from "./common";

const GAMEMODE_SUFFIX = {
  assassins: "MURDER_ASSASSINS",
  classic: "MURDER_CLASSIC",
  doubleUp: "MURDER_DOUBLE_UP",
  hardcore: "MURDER_HARDCORE",
  infection: "MURDER_INFECTION",
  showdown: "MURDER_SHOWDOWN",
} as const;

const MAP_SUFFIX = {
  ancientTomb: "ancient_tomb",
  aquarium: "aquarium",
  archives: "archives",
  archivesTopFloor: "archives_top_floor",
  cattleridgeFarm: "cattleridge_farm",
  cruiseShip: "cruise_ship",
  darkfall: "darkfall",
  easterWorld: "easter_world",
  goldRush: "gold_rush",
  headquarters: "headquarters",
  hollywood: "hollywood",
  hypixelWorld: "hypixel_world",
  library: "library",
  mountain: "mountain",
  sanPeratico: "san_peratico",
  sanPeraticoV2: "san_peratico_v2",
  skywayPier: "skyway_pier",
  snowfall: "snowfall",
  snowglobe: "snowglobe",
  spookyMansion: "spooky_mansion",
  subway: "subway",
  towerfall: "towerfall",
  transport: "transport",
  villa: "villa",
  widowsDen: "widow's_den",
} as const;

const EMBLEM_COLORS = {
  aqua: "aqua",
  black: "black",
  blue: "blue",
  darkAqua: "dark_aqua",
  darkBlue: "dark_blue",
  darkGray: "dark_gray",
  darkGreen: "dark_green",
  darkPurple: "dark_purple",
  darkRed: "dark_red",
  gray: "gray",
  green: "green",
  lightPurple: "light_purple",
  red: "red",
  yellow: "yellow",
} as const;

const HOTBAR_SLOT_KEYS = {
  slot0: "0",
  slot1: "1",
  slot2: "2",
  slot3: "3",
  slot4: "4",
  slot5: "5",
  slot6: "6",
  slot7: "7",
  slot8: "8",
} as const;

const FREE_EVENT_KEY_KEYS = {
  christmas2019: "free_event_key_mm_christmas_chests_2019",
  christmas2020: "free_event_key_mm_christmas_chests_2020",
  christmas2021: "free_event_key_mm_christmas_chests_2021",
  christmas2022: "free_event_key_mm_christmas_chests_2022",
  christmas2023: "free_event_key_mm_christmas_chests_2023",
  easter2020: "free_event_key_mm_easter_chests_2020",
  easter2021: "free_event_key_mm_easter_chests_2021",
  easter2022: "free_event_key_mm_easter_chests_2022",
  easter2023: "free_event_key_mm_easter_chests_2023",
  halloween2019: "free_event_key_mm_halloween_chests_2019",
  halloween2020: "free_event_key_mm_halloween_chests_2020",
  halloween2021: "free_event_key_mm_halloween_chests_2021",
  halloween2022: "free_event_key_mm_halloween_chests_2022",
  halloween2023: "free_event_key_mm_halloween_chests_2023",
  lunar2020: "free_event_key_mm_lunar_chests_2020",
} as const;

const KNIFE_SKIN_XP_KEYS = {
  tenThousandSpoons: "10000_spoons",
  apple: "apple",
  bastedTurkey: "basted_turkey",
  blazeStick: "blaze_stick",
  bloodyBrick: "bloody_brick",
  bone: "bone",
  campfireLeftovers: "campfire_leftovers",
  carrotOnStick: "carrot_on_stick",
  cheapo: "cheapo",
  cheese: "cheese",
  chewedBush: "chewed_bush",
  diamondShovel: "diamond_shovel",
  doubleDeathScythe: "double_death_scythe",
  dragonEgg: "dragon_egg",
  earthenDagger: "earthen_dagger",
  easterBasket: "easter_basket",
  farmingImplement: "farming_implement",
  feather: "feather",
  fragilePlant: "fragile_plant",
  frisbee: "frisbee",
  glisteningMelon: "glistening_melon",
  goldDigger: "gold_digger",
  grilledSteak: "grilled_steak",
  grimoire: "grimoire",
  iceShard: "ice_shard",
  mouseTrap: "mouse_trap",
  mvp: "mvp",
  prickly: "prickly",
  pumpkinPie: "pumpkin_pie",
  rudolphsNose: "rudolphs_nose",
  rudolphsSnack: "rudolphs_snack",
  salmon: "salmon",
  scythe: "scythe",
  shears: "shears",
  shinySnack: "shiny_snack",
  shovel: "shovel",
  shred: "shred",
  sprayPaintedShovel: "spray_painted_shovel",
  stake: "stake",
  stick: "stick",
  stickWithHat: "stick_with_hat",
  sweetTreat: "sweet_treat",
  timber: "timber",
  vip: "vip",
  woodAxe: "wood_axe",
} as const;

const DESCENT_ITEMS = {
  armed: "Armed",
  bloodLust: "Bloodlust",
  bountyHunter: "Bountyhunter",
  cleanJob: "Cleanjob",
  collateral: "Collateral",
  contagionContained: "Contagioncontained",
  cornucopia: "Cornucopia",
  crimsonJoy: "Crimsonjoy",
  crowdControl: "Crowdcontrol",
  cuttingTheRoots: "Cuttingtheroots",
  deadlyPrecision: "Deadlyprecision",
  deadOrAlive: "Deadoralive",
  deathDefy: "Deathdefy",
  distantTransmission: "Distanttransmission",
  doubleDosage: "Doubledosage",
  dualProficiency: "Dualproficiency",
  exponentiation: "Exponentiation",
  eyeOnPrey: "Eyeonprey",
  firstJob: "Firstjob",
  firstOfMany: "Firstofmany",
  firstSteps: "Firststeps",
  grandSlam: "Grandslam",
  hero: "Hero",
  highRoller: "Highroller",
  holdGround: "Holdground",
  huntsman: "Huntsman",
  jobSearch: "Jobsearch",
  lawMaker: "Lawmaker",
  legacy: "Legacy",
  localSpecialty: "Localspecialty",
  lurkingContagion: "Lurkingcontagion",
  makeshiftShield: "Makeshiftshield",
  mowingDown: "Mowingdown",
  oneOfUs: "Oneofus",
  paneKiller: "Panekiller",
  patientZero: "Patientzero",
  postPandemic: "Postpandemic",
  pythagoreanDisposal: "Pythagoreandisposal",
  quickDraw: "Quickdraw",
  reloaded: "Reloaded",
  seasonedHitman: "Seasonedhitman",
  selfDefense: "Selfdefense",
  serialTrapper: "Serialtrapper",
  silverBullet: "Silverbullet",
  slaughterHouse: "Slaughterhouse",
  sneaky: "Sneaky",
  survival: "Survival",
  totalOutbreak: "Totaloutbreak",
  trapping101: "Trapping101",
  trulyMad: "Trulymad",
  viralKnife: "Viralknife",
} as const;

export interface MurderMysteryModeStats {
  readonly alphaWins: number;
  readonly bowKills: number;
  readonly coinsPickedUp: number;
  readonly deaths: number;
  readonly detectiveWins: number;
  readonly games: number;
  readonly kills: number;
  readonly killsAsAlpha: number;
  readonly killsAsInfected: number;
  readonly killsAsMurderer: number;
  readonly killsAsSurvivor: number;
  readonly knifeKills: number;
  readonly lastOneAlive: number;
  readonly longestTimeAsSurvivorSeconds: number;
  readonly murdererWins: number;
  readonly quickestDetectiveWinTimeSeconds: number;
  readonly quickestMurdererWinTimeSeconds: number;
  readonly quickestShowdownWinTimeSeconds: number;
  readonly showdownPotg: number;
  readonly suicides: number;
  readonly survivorWins: number;
  readonly thrownKnifeKills: number;
  readonly totalTimeSurvivedSeconds: number;
  readonly trapKills: number;
  readonly wasHero: number;
  readonly wins: number;
}

export type MurderMysteryGamemodeBreakdown = Readonly<
  Record<keyof typeof GAMEMODE_SUFFIX, MurderMysteryModeStats>
>;

export interface MurderMysteryMapStats extends MurderMysteryModeStats {
  readonly gamemodes: MurderMysteryGamemodeBreakdown;
}

export type MurderMysteryMaps = Readonly<
  Record<keyof typeof MAP_SUFFIX, MurderMysteryMapStats>
>;

export type MurderMysteryEmblemColors = Readonly<
  Record<keyof typeof EMBLEM_COLORS, boolean>
>;

export interface MurderMysteryEmblem {
  readonly colorUnlocked: MurderMysteryEmblemColors;
  readonly selectedColor: string;
  readonly selectedIcon: string;
}

export type MurderMysteryHotbarLayout = Readonly<
  Record<keyof typeof HOTBAR_SLOT_KEYS, string>
>;

export type MurderMysteryFreeEventKeys = Readonly<
  Record<keyof typeof FREE_EVENT_KEY_KEYS, boolean>
>;

export interface MurderMysterySettings {
  readonly doPrefixesInGame: boolean;
}

export type MurderMysteryKnifeSkinExperience = Readonly<
  Record<keyof typeof KNIFE_SKIN_XP_KEYS, number>
>;

export interface MurderMysteryKnifeSkinPrestiges {
  readonly usePrestige: readonly string[];
  readonly experience: MurderMysteryKnifeSkinExperience;
}

export interface MurderMysteryDescentItem {
  readonly claimed: boolean;
  readonly progress: number;
}

export type MurderMysteryDescent = Readonly<
  Record<keyof typeof DESCENT_ITEMS, MurderMysteryDescentItem>
>;

export interface MurderMysteryLeaderboardSettings {
  readonly mode: string;
  readonly resetType: string;
}

export interface MurderMysteryStats extends MurderMysteryModeStats {
  readonly coins: number;
  readonly grantedChests: number;
  readonly chests: number;
  readonly christmasChests: number;
  readonly easterChests: number;
  readonly halloweenChests: number;
  readonly lunarChests: number;
  readonly openedChests: number;
  readonly openedCommons: number;
  readonly openedEpics: number;
  readonly openedLegendaries: number;
  readonly openedRares: number;
  readonly spookyOpenAchievements: number;
  readonly activeAnimatedHat: string;
  readonly activeDeathCry: string;
  readonly activeGesture: string;
  readonly activeGravestone: string;
  readonly activeKillNote: string;
  readonly activeKnifeSkin: string;
  readonly activeLastWords: string;
  readonly activeProjectileTrail: string;
  readonly activeProjectileTrailLegacy: string;
  readonly activeVictoryDance: string;
  readonly activePrefixIcon: string;
  readonly activePrefixScheme: string;
  readonly activePrefixStat: string;
  readonly shopSort: string;
  readonly shopSortEnableOwnedFirst: boolean;
  readonly doEmblemsInGame: boolean;
  readonly doHeartbeatSounds: boolean;
  readonly doHints: boolean;
  readonly doPrefixesInGame: boolean;
  readonly convertedEmblemIcons: boolean;
  readonly showQueueBook: boolean;
  readonly chestHistory: readonly string[];
  readonly chestHistoryNew: readonly string[];
  readonly mapsConsumablesUsed: readonly string[];
  readonly mapsMurdererTrapKills: readonly string[];
  readonly books: readonly string[];
  readonly packages: readonly string[];
  readonly emblem: MurderMysteryEmblem;
  readonly descent: MurderMysteryDescent;
  readonly knifeSkinPrestiges: MurderMysteryKnifeSkinPrestiges;
  readonly leaderboardSettings: MurderMysteryLeaderboardSettings;
  readonly settings: MurderMysterySettings;
  readonly assassinsHotbarLayout: MurderMysteryHotbarLayout;
  readonly classicHotbarLayout: MurderMysteryHotbarLayout;
  readonly freeEventKeys: MurderMysteryFreeEventKeys;
  readonly gamemodes: MurderMysteryGamemodeBreakdown;
  readonly maps: MurderMysteryMaps;
}

function stringArray(
  source: Record<string, unknown>,
  key: string,
): readonly string[] {
  const value = source[key];
  return Array.isArray(value)
    ? value.filter((entry): entry is string => typeof entry === "string")
    : [];
}

function numberRecord<Key extends string>(
  source: Record<string, unknown>,
  keys: Record<Key, string>,
): Readonly<Record<Key, number>> {
  const result = {} as Record<Key, number>;
  for (const [name, key] of Object.entries(keys) as Array<[Key, string]>) {
    result[name] = num(source, key);
  }
  return result;
}

function booleanRecord<Key extends string>(
  source: Record<string, unknown>,
  keys: Record<Key, string>,
): Readonly<Record<Key, boolean>> {
  const result = {} as Record<Key, boolean>;
  for (const [name, key] of Object.entries(keys) as Array<[Key, string]>) {
    result[name] = bool(source, key);
  }
  return result;
}

function stringRecord<Key extends string>(
  source: Record<string, unknown>,
  keys: Record<Key, string>,
): Readonly<Record<Key, string>> {
  const result = {} as Record<Key, string>;
  for (const [name, key] of Object.entries(keys) as Array<[Key, string]>) {
    result[name] = str(source, key);
  }
  return result;
}

function parseModeStats(
  mm: Record<string, unknown>,
  suffix: string,
): MurderMysteryModeStats {
  const key = (base: string): string =>
    suffix === "" ? base : `${base}_${suffix}`;
  return {
    alphaWins: num(mm, key("alpha_wins")),
    bowKills: num(mm, key("bow_kills")),
    coinsPickedUp: num(mm, key("coins_pickedup")),
    deaths: num(mm, key("deaths")),
    detectiveWins: num(mm, key("detective_wins")),
    games: num(mm, key("games")),
    kills: num(mm, key("kills")),
    killsAsAlpha: num(mm, key("kills_as_alpha")),
    killsAsInfected: num(mm, key("kills_as_infected")),
    killsAsMurderer: num(mm, key("kills_as_murderer")),
    killsAsSurvivor: num(mm, key("kills_as_survivor")),
    knifeKills: num(mm, key("knife_kills")),
    lastOneAlive: num(mm, key("last_one_alive")),
    longestTimeAsSurvivorSeconds: num(
      mm,
      key("longest_time_as_survivor_seconds"),
    ),
    murdererWins: num(mm, key("murderer_wins")),
    quickestDetectiveWinTimeSeconds: num(
      mm,
      key("quickest_detective_win_time_seconds"),
    ),
    quickestMurdererWinTimeSeconds: num(
      mm,
      key("quickest_murderer_win_time_seconds"),
    ),
    quickestShowdownWinTimeSeconds: num(
      mm,
      key("quickest_showdown_win_time_seconds"),
    ),
    showdownPotg: num(mm, key("showdown_potg")),
    suicides: num(mm, key("suicides")),
    survivorWins: num(mm, key("survivor_wins")),
    thrownKnifeKills: num(mm, key("thrown_knife_kills")),
    totalTimeSurvivedSeconds: num(mm, key("total_time_survived_seconds")),
    trapKills: num(mm, key("trap_kills")),
    wasHero: num(mm, key("was_hero")),
    wins: num(mm, key("wins")),
  };
}

function parseGamemodeBreakdown(
  mm: Record<string, unknown>,
  mapSuffix: string,
): MurderMysteryGamemodeBreakdown {
  const breakdown = {} as Record<
    keyof typeof GAMEMODE_SUFFIX,
    MurderMysteryModeStats
  >;
  for (const [name, gamemode] of Object.entries(GAMEMODE_SUFFIX) as Array<
    [keyof typeof GAMEMODE_SUFFIX, string]
  >) {
    breakdown[name] = parseModeStats(
      mm,
      mapSuffix === "" ? gamemode : `${mapSuffix}_${gamemode}`,
    );
  }
  return breakdown;
}

function parseMaps(mm: Record<string, unknown>): MurderMysteryMaps {
  const maps = {} as Record<keyof typeof MAP_SUFFIX, MurderMysteryMapStats>;
  for (const [name, mapSuffix] of Object.entries(MAP_SUFFIX) as Array<
    [keyof typeof MAP_SUFFIX, string]
  >) {
    maps[name] = {
      ...parseModeStats(mm, mapSuffix),
      gamemodes: parseGamemodeBreakdown(mm, mapSuffix),
    };
  }
  return maps;
}

function parseEmblem(emblem: Record<string, unknown>): MurderMysteryEmblem {
  return {
    colorUnlocked: booleanRecord(obj(emblem, "color_unlocked"), EMBLEM_COLORS),
    selectedColor: str(emblem, "selected_color"),
    selectedIcon: str(emblem, "selected_icon"),
  };
}

function parseKnifeSkinPrestiges(
  prestiges: Record<string, unknown>,
): MurderMysteryKnifeSkinPrestiges {
  return {
    usePrestige: stringArray(prestiges, "usePrestige"),
    experience: numberRecord(obj(prestiges, "xp"), KNIFE_SKIN_XP_KEYS),
  };
}

function parseDescent(descent: Record<string, unknown>): MurderMysteryDescent {
  const result = {} as Record<
    keyof typeof DESCENT_ITEMS,
    MurderMysteryDescentItem
  >;
  for (const [name, key] of Object.entries(DESCENT_ITEMS) as Array<
    [keyof typeof DESCENT_ITEMS, string]
  >) {
    const item = obj(descent, key);
    result[name] = {
      claimed: bool(item, "claimed"),
      progress: num(item, "progress"),
    };
  }
  return result;
}

/** Parses a player's Murder Mystery stats (`stats.MurderMystery`) into a typed object. */
export function parseMurderMystery(
  stats: Record<string, unknown>,
): MurderMysteryStats | null {
  const raw = stats.MurderMystery;
  if (typeof raw !== "object" || raw === null || Array.isArray(raw)) {
    return null;
  }
  const mm = raw as Record<string, unknown>;
  return {
    ...parseModeStats(mm, ""),
    coins: num(mm, "coins"),
    grantedChests: num(mm, "granted_chests"),
    chests: num(mm, "mm_chests"),
    christmasChests: num(mm, "mm_christmas_chests"),
    easterChests: num(mm, "mm_easter_chests"),
    halloweenChests: num(mm, "mm_halloween_chests"),
    lunarChests: num(mm, "mm_lunar_chests"),
    openedChests: num(mm, "MurderMystery_openedChests"),
    openedCommons: num(mm, "MurderMystery_openedCommons"),
    openedEpics: num(mm, "MurderMystery_openedEpics"),
    openedLegendaries: num(mm, "MurderMystery_openedLegendaries"),
    openedRares: num(mm, "MurderMystery_openedRares"),
    spookyOpenAchievements: num(mm, "spooky_open_ach"),
    activeAnimatedHat: str(mm, "active_animated_hat"),
    activeDeathCry: str(mm, "active_deathcry"),
    activeGesture: str(mm, "active_gesture"),
    activeGravestone: str(mm, "active_gravestone"),
    activeKillNote: str(mm, "active_kill_note"),
    activeKnifeSkin: str(mm, "active_knife_skin"),
    activeLastWords: str(mm, "active_last_words"),
    activeProjectileTrail: str(mm, "active_projectile_trail"),
    activeProjectileTrailLegacy: str(mm, "activeProjectileTrail"),
    activeVictoryDance: str(mm, "active_victory_dance"),
    activePrefixIcon: str(mm, "active_prefixicon"),
    activePrefixScheme: str(mm, "active_prefixscheme"),
    activePrefixStat: str(mm, "active_prefixstat"),
    shopSort: str(mm, "shop_sort"),
    shopSortEnableOwnedFirst: bool(mm, "shop_sort_enable_owned_first"),
    doEmblemsInGame: bool(mm, "doEmblemsInGame"),
    doHeartbeatSounds: bool(mm, "doHeartbeatSounds"),
    doHints: bool(mm, "doHints"),
    doPrefixesInGame: bool(mm, "doPrefixesInGame"),
    convertedEmblemIcons: bool(mm, "convertedEmblemIcons"),
    showQueueBook: bool(mm, "showqueuebook"),
    chestHistory: stringArray(mm, "mm_chest_history"),
    chestHistoryNew: stringArray(mm, "chest_history_new"),
    mapsConsumablesUsed: stringArray(mm, "mapsConsumablesUsed"),
    mapsMurdererTrapKills: stringArray(mm, "mapsMurdererTrapKills"),
    books: stringArray(mm, "murdermystery_books"),
    packages: stringArray(mm, "packages"),
    emblem: parseEmblem(obj(mm, "emblem")),
    descent: parseDescent(obj(mm, "descent")),
    knifeSkinPrestiges: parseKnifeSkinPrestiges(obj(mm, "knifeSkinPrestiges")),
    leaderboardSettings: {
      mode: str(obj(mm, "leaderboardSettings"), "mode"),
      resetType: str(obj(mm, "leaderboardSettings"), "resetType"),
    },
    settings: {
      doPrefixesInGame: bool(obj(mm, "settings"), "doPrefixesInGame"),
    },
    assassinsHotbarLayout: stringRecord(obj(mm, "assassins"), HOTBAR_SLOT_KEYS),
    classicHotbarLayout: stringRecord(obj(mm, "classic"), HOTBAR_SLOT_KEYS),
    freeEventKeys: booleanRecord(mm, FREE_EVENT_KEY_KEYS),
    gamemodes: parseGamemodeBreakdown(mm, ""),
    maps: parseMaps(mm),
  };
}

