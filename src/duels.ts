import { bool, num, obj, str } from "./common";

export interface DuelsTitlePrestige {
  readonly rookie: number;
  readonly iron: number;
  readonly gold: number;
  readonly diamond: number;
  readonly master: number;
  readonly legend: number;
  readonly grandmaster: number;
  readonly godlike: number;
  readonly celestial: number;
  readonly divine: number;
  readonly worldElite: number;
}

export interface DuelsGamemodeStats {
  readonly currentWinstreak: number;
  readonly bestWinstreak: number;
  readonly kills: number;
  readonly deaths: number;
  readonly wins: number;
  readonly losses: number;
  readonly roundsPlayed: number;
  readonly meleeSwings: number;
  readonly meleeHits: number;
  readonly bowShots: number;
  readonly bowHits: number;
  readonly blocksPlaced: number;
  readonly healthRegenerated: number;
  readonly goldenApplesEaten: number;
  readonly goldenHeadsEaten: number;
  readonly healPotsUsed: number;
  readonly potionsUsed: number;
  readonly damageDealt: number;
  readonly coins: number;
  readonly coinsGained: number;
  readonly kitWins: Readonly<Record<string, number>>;
}

export interface DuelsBridgeGamemodeStats extends DuelsGamemodeStats {
  readonly bridgeKills: number;
  readonly bridgeDeaths: number;
  readonly goals: number;
  readonly captures: number;
}

export interface DuelsBedwarsGamemodeStats extends DuelsGamemodeStats {
  readonly blocksBroken: number;
}

export interface DuelsModeStats extends DuelsGamemodeStats {
  readonly titlePrestige: DuelsTitlePrestige;
}

export interface DuelsBlitzStats extends DuelsModeStats {
  readonly selectedKit: string;
}

export interface DuelsComboStats extends DuelsModeStats {
  readonly longestCombo: number;
}

export interface DuelsParkourStats extends DuelsModeStats {
  readonly checkpointsReached: number;
  readonly personalBest: number;
  readonly modeCheckpointsReached: number;
  readonly modePersonalBest: number;
  readonly playersHidden: boolean;
}

export interface DuelsModeGroupStats {
  readonly titlePrestige: DuelsTitlePrestige;
  readonly currentWinstreak: number;
  readonly bestWinstreak: number;
}

export interface DuelsWinstreakGroupStats {
  readonly currentWinstreak: number;
  readonly bestWinstreak: number;
}

export interface DuelsUHCStats extends DuelsModeGroupStats {
  readonly solo: DuelsGamemodeStats;
  readonly doubles: DuelsGamemodeStats;
  readonly fours: DuelsGamemodeStats;
  readonly deathmatch: DuelsGamemodeStats;
}

export interface DuelsSkyWarsStats extends DuelsModeGroupStats {
  readonly selectedKit: string;
  readonly selectedKitNew: string;
  readonly selectedKitNew2: string;
  readonly selectedKitNew3: string;
  readonly solo: DuelsGamemodeStats;
  readonly doubles: DuelsGamemodeStats;
}

export interface DuelsMegaWallsAbility {
  readonly total: number;
  readonly standard: number;
}

export interface DuelsMegaWallsAbilities {
  readonly alliesHealed: DuelsMegaWallsAbility;
  readonly amountHealed: DuelsMegaWallsAbility;
  readonly angelDivineInterventions: DuelsMegaWallsAbility;
  readonly arrowsFromRend: DuelsMegaWallsAbility;
  readonly blizzardSecondsSlow: DuelsMegaWallsAbility;
  readonly blocksBroken: DuelsMegaWallsAbility;
  readonly bucketBarriersBroken: DuelsMegaWallsAbility;
  readonly divineInterventions: DuelsMegaWallsAbility;
  readonly energyFromGrapplingHook: DuelsMegaWallsAbility;
  readonly heroismTriggers: DuelsMegaWallsAbility;
  readonly innerInkBlinds: DuelsMegaWallsAbility;
  readonly masterAlchemyHearts: DuelsMegaWallsAbility;
  readonly metersTravelled: DuelsMegaWallsAbility;
  readonly resistanceTimeSeconds: DuelsMegaWallsAbility;
  readonly snowmenPlayersHit: DuelsMegaWallsAbility;
  readonly strikesFromCloak: DuelsMegaWallsAbility;
  readonly venomStrikePoisonDamage: DuelsMegaWallsAbility;
}

export interface DuelsMegaWallsStats extends DuelsModeGroupStats {
  readonly selectedClass: string;
  readonly abilities: DuelsMegaWallsAbilities;
  readonly classAbilities: Readonly<Record<string, number>>;
  readonly modeAbilities: Readonly<Record<string, number>>;
  readonly solo: DuelsGamemodeStats;
  readonly doubles: DuelsGamemodeStats;
  readonly fours: DuelsGamemodeStats;
}

export interface DuelsOverPoweredStats extends DuelsModeGroupStats {
  readonly solo: DuelsGamemodeStats;
  readonly doubles: DuelsGamemodeStats;
}

export interface DuelsClassicStats extends DuelsModeGroupStats {
  readonly solo: DuelsGamemodeStats;
  readonly doubles: DuelsGamemodeStats;
}

export interface DuelsSpleefStats extends DuelsWinstreakGroupStats {
  readonly blocksBroken: number;
  readonly solo: DuelsGamemodeStats;
}

export interface DuelsArenaModePreferences {
  readonly bow: string;
  readonly classic: string;
  readonly noDebuff: string;
  readonly op: string;
  readonly soup: string;
  readonly uhc: string;
}

export interface DuelsArenaStats extends DuelsGamemodeStats {
  readonly modePreferences: DuelsArenaModePreferences;
}

export interface DuelsQuakeSoloStats extends DuelsGamemodeStats {
  readonly headshots: number;
  readonly shotHits: number;
  readonly shotsTaken: number;
}

export interface DuelsQuakeStats extends DuelsWinstreakGroupStats {
  readonly gunType: string;
  readonly headshots: number;
  readonly shotHits: number;
  readonly shotsTaken: number;
  readonly solo: DuelsQuakeSoloStats;
}

export interface DuelsBridgeStats extends DuelsModeGroupStats {
  readonly bridgeKills: number;
  readonly bridgeDeaths: number;
  readonly goals: number;
  readonly solo: DuelsBridgeGamemodeStats;
  readonly doubles: DuelsBridgeGamemodeStats;
  readonly threes: DuelsBridgeGamemodeStats;
  readonly fours: DuelsBridgeGamemodeStats;
  readonly teamsOfTwo: DuelsBridgeGamemodeStats;
  readonly teamsOfThree: DuelsBridgeGamemodeStats;
  readonly captureSolo: DuelsBridgeGamemodeStats;
  readonly captureThrees: DuelsBridgeGamemodeStats;
  readonly tournament: DuelsBridgeGamemodeStats;
}

export interface DuelsTournamentStats {
  readonly titlePrestige: DuelsTitlePrestige;
  readonly uhc: DuelsGamemodeStats;
  readonly skywars: DuelsGamemodeStats;
  readonly sumo: DuelsGamemodeStats;
  readonly bridge: DuelsBridgeGamemodeStats;
}

export interface DuelsBedwarsCauseBreakdown {
  readonly entityAttack: number;
  readonly fall: number;
  readonly magic: number;
  readonly void: number;
}

export interface DuelsBedwarsStats extends DuelsWinstreakGroupStats {
  readonly wins: number;
  readonly losses: number;
  readonly kills: number;
  readonly deaths: number;
  readonly finalKills: number;
  readonly finalDeaths: number;
  readonly bedsBroken: number;
  readonly bedsLost: number;
  readonly gamesPlayed: number;
  readonly itemsPurchased: number;
  readonly itemsPurchasedAlt: number;
  readonly permanentItemsPurchased: number;
  readonly killsByCause: DuelsBedwarsCauseBreakdown;
  readonly deathsByCause: DuelsBedwarsCauseBreakdown;
  readonly finalKillsByCause: DuelsBedwarsCauseBreakdown;
  readonly finalDeathsByCause: DuelsBedwarsCauseBreakdown;
  readonly solo: DuelsBedwarsGamemodeStats;
  readonly rush: DuelsBedwarsGamemodeStats;
}

export interface DuelsRankedSeason {
  readonly overallBestStars: number;
  readonly bestElo: number;
  readonly bestStars: number;
  readonly maxStars: boolean;
}

export interface DuelsRankedStats {
  readonly currentWinstreak: number;
  readonly bestWinstreak: number;
  readonly winStreak: number;
  readonly lossStreak: number;
  readonly equippedTitles: number;
  readonly healPotsUsed: number;
  readonly stats: DuelsBridgeGamemodeStats;
  readonly seasons: Readonly<Record<string, DuelsRankedSeason>>;
}

export interface DuelsCosmetics {
  readonly auras: string;
  readonly cage: string;
  readonly cosmeticTitle: string;
  readonly emblem: string;
  readonly goal: string;
  readonly hat: string;
  readonly killEffect: string;
  readonly killMessages: string;
  readonly prefixIcon: string;
  readonly projectileTrail: string;
  readonly startingWeapon: string;
  readonly title: string;
  readonly victoryDance: string;
  readonly weaponPacks: string;
}

export interface DuelsSettings {
  readonly lobbyScoreboardStats: string;
  readonly rematchBehavior: string;
  readonly showInGameLeaderboards: boolean;
  readonly enableProjectileTrails: boolean;
  readonly viewChat: boolean;
  readonly showKitMenu: boolean;
}

export interface DuelsLeaderboardSettings {
  readonly mode: string;
  readonly resetType: string;
}

export interface DuelsPrivateGames {
  readonly speed: string;
  readonly knockbackTen: boolean;
  readonly nightTime: string;
  readonly onlyTnt: boolean;
  readonly moreGoals: string;
  readonly enableOp: boolean;
  readonly giveSlowness: string;
  readonly giveRegen: string;
  readonly lowGravity: boolean;
  readonly blockProtection: boolean;
  readonly changeWeapon: string;
  readonly roundTime: string;
  readonly healthBuff: string;
}

export interface DuelsMigrationFlags {
  readonly movedToRedis: boolean;
  readonly movedToRedis2: boolean;
  readonly movedToRedis3: boolean;
  readonly movedToRedisStage2: boolean;
  readonly movedToRedisStage3: boolean;
  readonly redisToPlayerDataSync: boolean;
}

export interface DuelsStats {
  readonly coins: number;
  readonly titlePrestige: DuelsTitlePrestige;
  readonly pingPreference: number;
  readonly currentWinstreak: number;
  readonly bestWinstreak: number;
  readonly currentStreak: number;
  readonly oldWinstreak: number;
  readonly currentWinstreakBridge: number;
  readonly legacyWinstreaks: Readonly<Record<string, number>>;
  readonly legacyBestWinstreaks: Readonly<Record<string, number>>;
  readonly categoryWinstreaks: Readonly<Record<string, number>>;
  readonly bestCategoryWinstreaks: Readonly<Record<string, number>>;
  readonly gamesPlayed: number;
  readonly roundsPlayed: number;
  readonly kills: number;
  readonly deaths: number;
  readonly wins: number;
  readonly losses: number;
  readonly meleeSwings: number;
  readonly meleeHits: number;
  readonly bowShots: number;
  readonly bowHits: number;
  readonly blocksPlaced: number;
  readonly healthRegenerated: number;
  readonly goldenApplesEaten: number;
  readonly goldenHeadsEaten: number;
  readonly healPotsUsed: number;
  readonly potionsUsed: number;
  readonly damageDealt: number;
  readonly longestCombo: number;
  readonly captures: number;
  readonly leaderboardPageCaptures: number;
  readonly leaderboardPageGoals: number;
  readonly leaderboardPageWins: number;
  readonly kitWins: Readonly<Record<string, number>>;
  readonly chests: number;
  readonly openedChests: number;
  readonly openedCommons: number;
  readonly openedRares: number;
  readonly openedEpics: number;
  readonly openedLegendaries: number;
  readonly leaderboardPageWinStreak: number;
  readonly challengesEnabled: boolean;
  readonly showQueueBook: boolean;
  readonly specialChallenger: boolean;
  readonly seasonOneRewardFixes: boolean;
  readonly prefixTitleColor2: boolean;
  readonly shopSortOwnedFirst: boolean;
  readonly chatEnabled: string;
  readonly kitMenuOption: string;
  readonly showLbOption: string;
  readonly showMapDetail: string;
  readonly toggleProjTrail: string;
  readonly rematchOption1: string;
  readonly progressMode: string;
  readonly shopSort: string;
  readonly statusField: string;
  readonly favoriteGlyph: string;
  readonly equippedPrefixColor: string;
  readonly equippedPrefixIcon: string;
  readonly equippedCustomTitle: string;
  readonly equippedRankedTitles: number;
  readonly recentlyPlayed: string;
  readonly recentlyPlayed2: string;
  readonly selected1: string;
  readonly selected1New: string;
  readonly selected2: string;
  readonly selected2New: string;
  readonly cosmetics: DuelsCosmetics;
  readonly settings: DuelsSettings;
  readonly leaderboardSettings: DuelsLeaderboardSettings;
  readonly privateGames: DuelsPrivateGames;
  readonly migrationFlags: DuelsMigrationFlags;
  readonly claimedOdysseyRewards: Readonly<Record<string, number>>;
  readonly collectedSeasonRewards: Readonly<Record<string, boolean>>;
  readonly packages: readonly string[];
  readonly customTitles: readonly string[];
  readonly challengeSettings: readonly string[];
  readonly bridgeMapWins: readonly string[];
  readonly mapsWonOn: readonly string[];
  readonly duelsChestHistory: readonly string[];
  readonly layouts: Readonly<Record<string, Readonly<Record<string, string>>>>;
  readonly uhc: DuelsUHCStats;
  readonly skywars: DuelsSkyWarsStats;
  readonly megaWalls: DuelsMegaWallsStats;
  readonly overPowered: DuelsOverPoweredStats;
  readonly bridge: DuelsBridgeStats;
  readonly tournament: DuelsTournamentStats;
  readonly bedwars: DuelsBedwarsStats;
  readonly ranked: DuelsRankedStats;
  readonly blitz: DuelsBlitzStats;
  readonly classic: DuelsClassicStats;
  readonly bow: DuelsModeStats;
  readonly noDebuff: DuelsModeStats;
  readonly combo: DuelsComboStats;
  readonly spleef: DuelsSpleefStats;
  readonly bowSpleef: DuelsModeStats;
  readonly quake: DuelsQuakeStats;
  readonly sumo: DuelsModeStats;
  readonly boxing: DuelsModeStats;
  readonly parkour: DuelsParkourStats;
  readonly arena: DuelsArenaStats;
}

function parseTitlePrestige(
  data: Record<string, unknown>,
  category: string,
): DuelsTitlePrestige {
  return {
    rookie: num(data, `${category}_rookie_title_prestige`),
    iron: num(data, `${category}_iron_title_prestige`),
    gold: num(data, `${category}_gold_title_prestige`),
    diamond: num(data, `${category}_diamond_title_prestige`),
    master: num(data, `${category}_master_title_prestige`),
    legend: num(data, `${category}_legend_title_prestige`),
    grandmaster: num(data, `${category}_grandmaster_title_prestige`),
    godlike: num(data, `${category}_godlike_title_prestige`),
    celestial: num(data, `${category}_celestial_title_prestige`),
    divine: num(data, `${category}_divine_title_prestige`),
    worldElite: num(data, `${category}_world_elite_title_prestige`),
  };
}

function parseKitWins(
  data: Record<string, unknown>,
  mode: string,
): Record<string, number> {
  const prefix = `${mode}_`;
  const suffix = "_kit_wins";
  const result: Record<string, number> = {};
  for (const [key, value] of Object.entries(data)) {
    if (
      typeof value !== "number" ||
      !key.startsWith(prefix) ||
      !key.endsWith(suffix)
    ) {
      continue;
    }
    const kit = key.slice(prefix.length, key.length - suffix.length);
    result[kit === "" ? "total" : kit] = value;
  }
  return result;
}

function parseTopKitWins(
  data: Record<string, unknown>,
): Record<string, number> {
  const suffix = "_kit_wins";
  const result: Record<string, number> = {};
  for (const [key, value] of Object.entries(data)) {
    if (typeof value !== "number") {
      continue;
    }
    if (key === "kit_wins") {
      result.total = value;
      continue;
    }
    if (!key.endsWith(suffix)) {
      continue;
    }
    const kit = key.slice(0, key.length - suffix.length);
    if (!kit.includes("_")) {
      result[kit] = value;
    }
  }
  return result;
}

function parseNumberRecord(
  data: Record<string, unknown>,
  key: string,
): Record<string, number> {
  const source = obj(data, key);
  const result: Record<string, number> = {};
  for (const [entry, value] of Object.entries(source)) {
    if (typeof value === "number") {
      result[entry] = value;
    }
  }
  return result;
}

function parseSeasonRewards(
  data: Record<string, unknown>,
): Record<string, boolean> {
  const prefix = "collected_reward_season_";
  const result: Record<string, boolean> = {};
  for (const [key, value] of Object.entries(data)) {
    if (typeof value === "boolean" && key.startsWith(prefix)) {
      result[key.slice(prefix.length)] = value;
    }
  }
  return result;
}

function parseLayouts(
  data: Record<string, unknown>,
): Record<string, Record<string, string>> {
  const result: Record<string, Record<string, string>> = {};
  for (const [key, value] of Object.entries(data)) {
    if (
      !key.includes("layout") ||
      typeof value !== "object" ||
      value === null ||
      Array.isArray(value)
    ) {
      continue;
    }
    const slots: Record<string, string> = {};
    for (const [slot, item] of Object.entries(
      value as Record<string, unknown>,
    )) {
      if (typeof item === "string") {
        slots[slot] = item;
      }
    }
    result[key] = slots;
  }
  return result;
}

function stringArray(parent: Record<string, unknown>, key: string): string[] {
  const value = parent[key];
  return Array.isArray(value)
    ? value.filter((entry): entry is string => typeof entry === "string")
    : [];
}

function parseGamemode(
  data: Record<string, unknown>,
  mode: string,
): DuelsGamemodeStats {
  return {
    currentWinstreak: num(data, `current_winstreak_mode_${mode}`),
    bestWinstreak: num(data, `best_winstreak_mode_${mode}`),
    kills: num(data, `${mode}_kills`),
    deaths: num(data, `${mode}_deaths`),
    wins: num(data, `${mode}_wins`),
    losses: num(data, `${mode}_losses`),
    roundsPlayed: num(data, `${mode}_rounds_played`),
    meleeSwings: num(data, `${mode}_melee_swings`),
    meleeHits: num(data, `${mode}_melee_hits`),
    bowShots: num(data, `${mode}_bow_shots`),
    bowHits: num(data, `${mode}_bow_hits`),
    blocksPlaced: num(data, `${mode}_blocks_placed`),
    healthRegenerated: num(data, `${mode}_health_regenerated`),
    goldenApplesEaten: num(data, `${mode}_golden_apples_eaten`),
    goldenHeadsEaten: num(data, `${mode}_golden_heads_eaten`),
    healPotsUsed: num(data, `${mode}_heal_pots_used`),
    potionsUsed: num(data, `${mode}_potions_used`),
    damageDealt: num(data, `${mode}_damage_dealt`),
    coins: num(data, `${mode}_coins`),
    coinsGained: num(data, `${mode}_coins_gained`),
    kitWins: parseKitWins(data, mode),
  };
}

function parseBridgeGamemode(
  data: Record<string, unknown>,
  mode: string,
): DuelsBridgeGamemodeStats {
  return {
    ...parseGamemode(data, mode),
    bridgeKills: num(data, `${mode}_bridge_kills`),
    bridgeDeaths: num(data, `${mode}_bridge_deaths`),
    goals: num(data, `${mode}_goals`),
    captures: num(data, `${mode}_captures`),
  };
}

function parseMode(
  data: Record<string, unknown>,
  mode: string,
  category: string,
): DuelsModeStats {
  return {
    ...parseGamemode(data, mode),
    titlePrestige: parseTitlePrestige(data, category),
  };
}

function parseGroupHeader(
  data: Record<string, unknown>,
  category: string,
): DuelsModeGroupStats {
  return {
    titlePrestige: parseTitlePrestige(data, category),
    currentWinstreak: num(data, `current_${category}_winstreak`),
    bestWinstreak: num(data, `best_${category}_winstreak`),
  };
}

function parseWinstreakGroup(
  data: Record<string, unknown>,
  category: string,
): DuelsWinstreakGroupStats {
  return {
    currentWinstreak: num(data, `current_${category}_winstreak`),
    bestWinstreak: num(data, `best_${category}_winstreak`),
  };
}

function parseAbility(
  data: Record<string, unknown>,
  base: string,
): DuelsMegaWallsAbility {
  return { total: num(data, base), standard: num(data, `${base}_standard`) };
}

function parseMegaWallsAbilities(
  data: Record<string, unknown>,
): DuelsMegaWallsAbilities {
  return {
    alliesHealed: parseAbility(data, "allies_healed"),
    amountHealed: parseAbility(data, "amount_healed"),
    angelDivineInterventions: parseAbility(data, "angel_divine_interventions"),
    arrowsFromRend: parseAbility(data, "arrows_from_rend"),
    blizzardSecondsSlow: parseAbility(data, "blizzard_seconds_slow"),
    blocksBroken: parseAbility(data, "blocks_broken"),
    bucketBarriersBroken: parseAbility(data, "bucket_barriers_broken"),
    divineInterventions: parseAbility(data, "divine_interventions"),
    energyFromGrapplingHook: parseAbility(data, "energy_from_grappling_hook"),
    heroismTriggers: parseAbility(data, "heroism_triggers"),
    innerInkBlinds: parseAbility(data, "inner_ink_blinds"),
    masterAlchemyHearts: parseAbility(data, "master_alechmy_hearts"),
    metersTravelled: parseAbility(data, "meters_travelled"),
    resistanceTimeSeconds: parseAbility(data, "resistance_time_seconds"),
    snowmenPlayersHit: parseAbility(data, "snowmen_players_hit"),
    strikesFromCloak: parseAbility(data, "strikes_from_cloak"),
    venomStrikePoisonDamage: parseAbility(data, "venom_strike_poison_damage"),
  };
}

const MEGA_WALLS_ABILITY_BASES = [
  "allies_healed",
  "amount_healed",
  "angel_divine_interventions",
  "arrows_from_rend",
  "blizzard_seconds_slow",
  "blocks_broken",
  "bucket_barriers_broken",
  "divine_interventions",
  "energy_from_grappling_hook",
  "heroism_triggers",
  "inner_ink_blinds",
  "master_alechmy_hearts",
  "meters_travelled",
  "resistance_time_seconds",
  "snowmen_players_hit",
  "strikes_from_cloak",
  "venom_strike_poison_damage",
] as const;

const MEGA_WALLS_ABILITY_BASE_SET = new Set<string>(MEGA_WALLS_ABILITY_BASES);

const NON_CLASS_ABILITY_PREFIXES = ["mw_", "spleef", "bedwars"];

function parseMegaWallsClassAbilities(
  data: Record<string, unknown>,
): Record<string, number> {
  const result: Record<string, number> = {};
  for (const [key, value] of Object.entries(data)) {
    if (typeof value !== "number" || MEGA_WALLS_ABILITY_BASE_SET.has(key)) {
      continue;
    }
    if (NON_CLASS_ABILITY_PREFIXES.some((prefix) => key.startsWith(prefix))) {
      continue;
    }
    if (
      MEGA_WALLS_ABILITY_BASES.some(
        (base) => key.endsWith(`_${base}`) || key.endsWith(`_${base}_standard`),
      )
    ) {
      result[key] = value;
    }
  }
  return result;
}

const MEGA_WALLS_MODE_ABILITY_PREFIXES = ["mw_duel_", "mw_doubles_"];

function parseMegaWallsModeAbilities(
  data: Record<string, unknown>,
): Record<string, number> {
  const result: Record<string, number> = {};
  for (const [key, value] of Object.entries(data)) {
    if (typeof value !== "number") {
      continue;
    }
    if (
      !MEGA_WALLS_MODE_ABILITY_PREFIXES.some((prefix) => key.startsWith(prefix))
    ) {
      continue;
    }
    if (
      MEGA_WALLS_ABILITY_BASES.some(
        (base) => key.endsWith(`_${base}`) || key.endsWith(`_${base}_standard`),
      )
    ) {
      result[key] = value;
    }
  }
  return result;
}

const RANKED_SEASON_PREFIX = "Duels_new_ranked__";

const RANKED_SEASON_FIELDS = [
  { suffix: "_overallBestStars", field: "overallBestStars" },
  { suffix: "_ranked_1_bestElo", field: "bestElo" },
  { suffix: "_ranked_1_bestStars", field: "bestStars" },
  { suffix: "_ranked_1_maxStars", field: "maxStars" },
] as const;

function parseRankedSeasons(
  data: Record<string, unknown>,
): Record<string, DuelsRankedSeason> {
  const accumulator: Record<
    string,
    {
      overallBestStars: number;
      bestElo: number;
      bestStars: number;
      maxStars: boolean;
    }
  > = {};
  for (const [key, value] of Object.entries(data)) {
    if (!key.startsWith(RANKED_SEASON_PREFIX)) {
      continue;
    }
    const rest = key.slice(RANKED_SEASON_PREFIX.length);
    for (const { suffix, field } of RANKED_SEASON_FIELDS) {
      if (!rest.endsWith(suffix)) {
        continue;
      }
      const season = rest.slice(0, rest.length - suffix.length);
      const entry =
        accumulator[season] ??
        (accumulator[season] = {
          overallBestStars: 0,
          bestElo: 0,
          bestStars: 0,
          maxStars: false,
        });
      if (field === "maxStars") {
        entry.maxStars = value === true;
      } else if (typeof value === "number") {
        entry[field] = value;
      }
      break;
    }
  }
  return accumulator;
}

function parsePrefixedWinstreaks(
  data: Record<string, unknown>,
  prefix: string,
  exclude?: string,
): Record<string, number> {
  const result: Record<string, number> = {};
  for (const [key, value] of Object.entries(data)) {
    if (typeof value !== "number" || !key.startsWith(prefix)) {
      continue;
    }
    if (exclude !== undefined && key.startsWith(exclude)) {
      continue;
    }
    result[key.slice(prefix.length)] = value;
  }
  return result;
}

const CURRENT_CATEGORY_WINSTREAK_PATTERN = /^current_(.+)_winstreak$/;
const BEST_CATEGORY_WINSTREAK_PATTERN = /^best_(.+)_winstreak$/;
const OVERALL_WINSTREAK_TOKEN = "overall";

function parseCategoryWinstreaks(
  data: Record<string, unknown>,
  pattern: RegExp,
): Record<string, number> {
  const result: Record<string, number> = {};
  for (const [key, value] of Object.entries(data)) {
    if (typeof value !== "number" || key.includes("_winstreak_mode_")) {
      continue;
    }
    const match = pattern.exec(key);
    if (match === null || match[1] === OVERALL_WINSTREAK_TOKEN) {
      continue;
    }
    result[match[1]] = value;
  }
  return result;
}

function parseBedwarsCause(
  data: Record<string, unknown>,
  metric: string,
): DuelsBedwarsCauseBreakdown {
  return {
    entityAttack: num(data, `entity_attack_${metric}_bedwars`),
    fall: num(data, `fall_${metric}_bedwars`),
    magic: num(data, `magic_${metric}_bedwars`),
    void: num(data, `void_${metric}_bedwars`),
  };
}

function parseCosmetics(data: Record<string, unknown>): DuelsCosmetics {
  return {
    auras: str(data, "active_auras"),
    cage: str(data, "active_cage"),
    cosmeticTitle: str(data, "active_cosmetictitle"),
    emblem: str(data, "active_emblem"),
    goal: str(data, "active_goal"),
    hat: str(data, "active_hat"),
    killEffect: str(data, "active_kill_effect"),
    killMessages: str(data, "active_killmessages"),
    prefixIcon: str(data, "active_prefix_icon"),
    projectileTrail: str(data, "active_projectile_trail"),
    startingWeapon: str(data, "active_starting_weapon"),
    title: str(data, "active_title"),
    victoryDance: str(data, "active_victory_dance"),
    weaponPacks: str(data, "active_weaponpacks"),
  };
}

function parseSettings(data: Record<string, unknown>): DuelsSettings {
  const settings = obj(data, "settings");
  return {
    lobbyScoreboardStats: str(settings, "lobby_scoreboard_stats"),
    rematchBehavior: str(settings, "rematch_behavior"),
    showInGameLeaderboards: bool(settings, "show_in_game_leaderboards"),
    enableProjectileTrails: bool(settings, "enable_projectile_trails"),
    viewChat: bool(settings, "view_chat"),
    showKitMenu: bool(settings, "show_kit_menu"),
  };
}

function parsePrivateGames(data: Record<string, unknown>): DuelsPrivateGames {
  const games = obj(data, "privategames");
  return {
    speed: str(games, "speed"),
    knockbackTen: bool(games, "duels_knockback_ten"),
    nightTime: str(games, "duels_night_time"),
    onlyTnt: bool(games, "duels_only_tnt"),
    moreGoals: str(games, "duels_more_goals"),
    enableOp: bool(games, "duels_enable_op"),
    giveSlowness: str(games, "duels_give_slowness"),
    giveRegen: str(games, "duels_give_regen"),
    lowGravity: bool(games, "low_gravity"),
    blockProtection: bool(games, "duels_block_protection"),
    changeWeapon: str(games, "duels_change_weapon"),
    roundTime: str(games, "duels_round_time"),
    healthBuff: str(games, "health_buff"),
  };
}

/** Parses a player's Duels stats (`stats.Duels`) into a typed object. */
export function parseDuels(stats: Record<string, unknown>): DuelsStats | null {
  const raw = stats.Duels;
  if (typeof raw !== "object" || raw === null || Array.isArray(raw)) {
    return null;
  }
  const data = raw as Record<string, unknown>;
  const leaderboardSettings = obj(data, "leaderboardSettings");
  return {
    coins: num(data, "coins") || num(data, "tokens"),
    titlePrestige: parseTitlePrestige(data, "all_modes"),
    pingPreference: num(data, "pingPreference"),
    currentWinstreak: num(data, "current_winstreak"),
    bestWinstreak: num(data, "best_overall_winstreak"),
    currentStreak: num(data, "currentStreak"),
    oldWinstreak: num(data, "old_winstreak"),
    currentWinstreakBridge: num(data, "current_winstreak_bridge"),
    legacyWinstreaks: parsePrefixedWinstreaks(
      data,
      "duels_winstreak_",
      "duels_winstreak_best_",
    ),
    legacyBestWinstreaks: parsePrefixedWinstreaks(
      data,
      "duels_winstreak_best_",
    ),
    categoryWinstreaks: parseCategoryWinstreaks(
      data,
      CURRENT_CATEGORY_WINSTREAK_PATTERN,
    ),
    bestCategoryWinstreaks: parseCategoryWinstreaks(
      data,
      BEST_CATEGORY_WINSTREAK_PATTERN,
    ),
    gamesPlayed: num(data, "games_played_duels"),
    roundsPlayed: num(data, "rounds_played"),
    kills: num(data, "kills"),
    deaths: num(data, "deaths"),
    wins: num(data, "wins"),
    losses: num(data, "losses"),
    meleeSwings: num(data, "melee_swings"),
    meleeHits: num(data, "melee_hits"),
    bowShots: num(data, "bow_shots"),
    bowHits: num(data, "bow_hits"),
    blocksPlaced: num(data, "blocks_placed"),
    healthRegenerated: num(data, "health_regenerated"),
    goldenApplesEaten: num(data, "golden_apples_eaten"),
    goldenHeadsEaten: num(data, "golden_heads_eaten"),
    healPotsUsed: num(data, "heal_pots_used"),
    potionsUsed: num(data, "potions_used"),
    damageDealt: num(data, "damage_dealt"),
    longestCombo: num(data, "longest_combo"),
    captures: num(data, "captures"),
    leaderboardPageCaptures: num(data, "leaderboardPage_captures"),
    leaderboardPageGoals: num(data, "leaderboardPage_goals"),
    leaderboardPageWins: num(data, "leaderboardPage_wins"),
    kitWins: parseTopKitWins(data),
    chests: num(data, "duels_chests"),
    openedChests: num(data, "Duels_openedChests"),
    openedCommons: num(data, "Duels_openedCommons"),
    openedRares: num(data, "Duels_openedRares"),
    openedEpics: num(data, "Duels_openedEpics"),
    openedLegendaries: num(data, "Duels_openedLegendaries"),
    leaderboardPageWinStreak: num(data, "leaderboardPage_win_streak"),
    challengesEnabled: bool(data, "challenges_enabled"),
    showQueueBook: bool(data, "duels_showqueuebook"),
    specialChallenger: bool(data, "special_challenger"),
    seasonOneRewardFixes: bool(data, "season_1_reward_fixes"),
    prefixTitleColor2: bool(data, "duels_prefix_title_color2"),
    shopSortOwnedFirst: bool(data, "shop_sort_enable_owned_first"),
    chatEnabled: str(data, "chat_enabled"),
    kitMenuOption: str(data, "kit_menu_option"),
    showLbOption: str(data, "show_lb_option"),
    showMapDetail: str(data, "show_map_detail"),
    toggleProjTrail: str(data, "toggle_proj_trail"),
    rematchOption1: str(data, "rematch_option_1"),
    progressMode: str(data, "progress_mode"),
    shopSort: str(data, "shop_sort"),
    statusField: str(data, "status_field"),
    favoriteGlyph: str(data, "favoriteGlyph"),
    equippedPrefixColor: str(data, "equipped_prefix_color"),
    equippedPrefixIcon: str(data, "equipped_prefix_icon"),
    equippedCustomTitle: str(data, "equipped_custom_titles"),
    equippedRankedTitles: num(data, "equipped_ranked_titles"),
    recentlyPlayed: str(data, "duels_recently_played"),
    recentlyPlayed2: str(data, "duels_recently_played2"),
    selected1: str(data, "selected_1"),
    selected1New: str(data, "selected_1_new"),
    selected2: str(data, "selected_2"),
    selected2New: str(data, "selected_2_new"),
    cosmetics: parseCosmetics(data),
    settings: parseSettings(data),
    leaderboardSettings: {
      mode: str(leaderboardSettings, "mode"),
      resetType: str(leaderboardSettings, "resetType"),
    },
    privateGames: parsePrivateGames(data),
    migrationFlags: {
      movedToRedis: bool(data, "moved_to_redis"),
      movedToRedis2: bool(data, "moved_to_redis2"),
      movedToRedis3: bool(data, "moved_to_redis3"),
      movedToRedisStage2: bool(data, "moved_to_redis_2"),
      movedToRedisStage3: bool(data, "moved_to_redis_3"),
      redisToPlayerDataSync: bool(data, "redis_to_player_data_sync"),
    },
    claimedOdysseyRewards: parseNumberRecord(data, "claimed_odyssey_rewards"),
    collectedSeasonRewards: parseSeasonRewards(data),
    packages: stringArray(data, "packages"),
    customTitles: stringArray(data, "custom_titles"),
    challengeSettings: stringArray(data, "challengeSettings"),
    bridgeMapWins: stringArray(data, "bridgeMapWins"),
    mapsWonOn: stringArray(data, "maps_won_on"),
    duelsChestHistory: stringArray(data, "duels_chest_history"),
    layouts: parseLayouts(data),
    uhc: {
      ...parseGroupHeader(data, "uhc"),
      solo: parseGamemode(data, "uhc_duel"),
      doubles: parseGamemode(data, "uhc_doubles"),
      fours: parseGamemode(data, "uhc_four"),
      deathmatch: parseGamemode(data, "uhc_meetup"),
    },
    skywars: {
      ...parseGroupHeader(data, "skywars"),
      selectedKit: str(data, "sw_duels_kit"),
      selectedKitNew: str(data, "sw_duels_kit_new"),
      selectedKitNew2: str(data, "sw_duels_kit_new2"),
      selectedKitNew3: str(data, "sw_duels_kit_new3"),
      solo: parseGamemode(data, "sw_duel"),
      doubles: parseGamemode(data, "sw_doubles"),
    },
    megaWalls: {
      ...parseGroupHeader(data, "mega_walls"),
      selectedClass: str(data, "mw_duels_class"),
      abilities: parseMegaWallsAbilities(data),
      classAbilities: parseMegaWallsClassAbilities(data),
      modeAbilities: parseMegaWallsModeAbilities(data),
      solo: parseGamemode(data, "mw_duel"),
      doubles: parseGamemode(data, "mw_doubles"),
      fours: parseGamemode(data, "mw_four"),
    },
    overPowered: {
      ...parseGroupHeader(data, "op"),
      solo: parseGamemode(data, "op_duel"),
      doubles: parseGamemode(data, "op_doubles"),
    },
    bridge: {
      ...parseGroupHeader(data, "bridge"),
      bridgeKills: num(data, "bridge_kills"),
      bridgeDeaths: num(data, "bridge_deaths"),
      goals: num(data, "goals"),
      solo: parseBridgeGamemode(data, "bridge_duel"),
      doubles: parseBridgeGamemode(data, "bridge_doubles"),
      threes: parseBridgeGamemode(data, "bridge_threes"),
      fours: parseBridgeGamemode(data, "bridge_four"),
      teamsOfTwo: parseBridgeGamemode(data, "bridge_2v2v2v2"),
      teamsOfThree: parseBridgeGamemode(data, "bridge_3v3v3v3"),
      captureSolo: parseBridgeGamemode(data, "capture_duel"),
      captureThrees: parseBridgeGamemode(data, "capture_threes"),
      tournament: parseBridgeGamemode(data, "bridge_tournament"),
    },
    tournament: {
      titlePrestige: parseTitlePrestige(data, "tournament"),
      uhc: parseGamemode(data, "uhc_tournament"),
      skywars: parseGamemode(data, "sw_tournament"),
      sumo: parseGamemode(data, "sumo_tournament"),
      bridge: parseBridgeGamemode(data, "bridge_tournament"),
    },
    bedwars: {
      ...parseWinstreakGroup(data, "bedwars"),
      wins: num(data, "wins_bedwars"),
      losses: num(data, "losses_bedwars"),
      kills: num(data, "kills_bedwars"),
      deaths: num(data, "deaths_bedwars"),
      finalKills: num(data, "final_kills_bedwars"),
      finalDeaths: num(data, "final_deaths_bedwars"),
      bedsBroken: num(data, "beds_broken_bedwars"),
      bedsLost: num(data, "beds_lost_bedwars"),
      gamesPlayed: num(data, "games_played_bedwars"),
      itemsPurchased: num(data, "items_purchased_bedwars"),
      itemsPurchasedAlt: num(data, "_items_purchased_bedwars"),
      permanentItemsPurchased: num(data, "permanent_items_purchased_bedwars"),
      killsByCause: parseBedwarsCause(data, "kills"),
      deathsByCause: parseBedwarsCause(data, "deaths"),
      finalKillsByCause: parseBedwarsCause(data, "final_kills"),
      finalDeathsByCause: parseBedwarsCause(data, "final_deaths"),
      solo: {
        ...parseGamemode(data, "bedwars_two_one_duels"),
        blocksBroken: num(data, "bedwars_two_one_duels_blocks_broken"),
      },
      rush: {
        ...parseGamemode(data, "bedwars_two_one_duels_rush"),
        blocksBroken: num(data, "bedwars_two_one_duels_rush_blocks_broken"),
      },
    },
    ranked: {
      currentWinstreak: num(data, "current_winstreak_mode_ranked_1"),
      bestWinstreak: num(data, "duels_winstreak_best_ranked_1"),
      winStreak: num(data, "ranked_streak_ranked_1"),
      lossStreak: num(data, "ranked_loss_streak_ranked_1"),
      equippedTitles: num(data, "equipped_ranked_titles"),
      healPotsUsed: num(data, "ranked_1_heal_pots_used"),
      stats: parseBridgeGamemode(data, "ranked_1"),
      seasons: parseRankedSeasons(data),
    },
    blitz: {
      ...parseMode(data, "blitz_duel", "blitz"),
      selectedKit: str(data, "blitz_duels_kit"),
    },
    classic: {
      ...parseGroupHeader(data, "classic"),
      solo: parseGamemode(data, "classic_duel"),
      doubles: parseGamemode(data, "classic_doubles"),
    },
    bow: parseMode(data, "bow_duel", "bow"),
    noDebuff: parseMode(data, "potion_duel", "no_debuff"),
    combo: {
      ...parseMode(data, "combo_duel", "combo"),
      longestCombo: num(data, "combo_duel_longest_combo"),
    },
    spleef: {
      ...parseWinstreakGroup(data, "spleef"),
      blocksBroken: num(data, "spleef_duel_blocks_broken"),
      solo: parseGamemode(data, "spleef_duel"),
    },
    bowSpleef: parseMode(data, "bowspleef_duel", "tnt_games"),
    quake: {
      ...parseWinstreakGroup(data, "quake"),
      gunType: str(data, "quakeGunType"),
      headshots: num(data, "quake_headshots"),
      shotHits: num(data, "quake_shot_hits"),
      shotsTaken: num(data, "quake_shots_taken"),
      solo: {
        ...parseGamemode(data, "quake_duel"),
        headshots: num(data, "quake_duel_quake_headshots"),
        shotHits: num(data, "quake_duel_quake_shot_hits"),
        shotsTaken: num(data, "quake_duel_quake_shots_taken"),
      },
    },
    sumo: parseMode(data, "sumo_duel", "sumo"),
    boxing: parseMode(data, "boxing_duel", "boxing"),
    parkour: {
      ...parseMode(data, "parkour_eight", "parkour"),
      checkpointsReached: num(data, "parkour_checkpoints_reached"),
      personalBest: num(data, "parkour_personal_best"),
      modeCheckpointsReached: num(
        data,
        "parkour_eight_parkour_checkpoints_reached",
      ),
      modePersonalBest: num(data, "parkour_eight_parkour_personal_best"),
      playersHidden: bool(data, "parkour_players_hidden"),
    },
    arena: {
      ...parseGamemode(data, "duel_arena"),
      modePreferences: {
        bow: str(data, "arena_mode_bow"),
        classic: str(data, "arena_mode_classic"),
        noDebuff: str(data, "arena_mode_no_debuff"),
        op: str(data, "arena_mode_op"),
        soup: str(data, "arena_mode_soup"),
        uhc: str(data, "arena_mode_uhc"),
      },
    },
  };
}

