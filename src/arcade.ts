import { num, str, bool, obj } from "./common";

const DROPPER_MAP_KEYS = {
  atlantis: "atlantis",
  balloons: "balloons",
  bbq: "bbq",
  beanstalk: "beanstalk",
  birdcage: "birdcage",
  boardGames: "boardgames",
  bridges: "bridges",
  butterflies: "butterflies",
  cabin: "cabin",
  castle: "castle",
  city: "city",
  distance: "distance",
  distortion: "distortion",
  drainage: "drainage",
  emoji: "emoji",
  factory: "factory",
  floatingIslands: "floatingislands",
  flytrap: "flytrap",
  frogspawn: "frogspawn",
  gears: "gears",
  geometry: "geometry",
  glacier: "glacier",
  hellgate: "hellgate",
  illusion: "illusion",
  iris: "iris",
  kingDommines: "kingdommines",
  kingsPass: "kingspass",
  kraken: "kraken",
  launchZone: "launchzone",
  lavaFall: "lavafall",
  lily: "lily",
  maelstrom: "maelstrom",
  mainframe: "mainframe",
  microscope: "microscope",
  mineshaft: "mineshaft",
  mushroom: "mushroom",
  nightlife: "nightlife",
  ocean: "ocean",
  overgrown: "overgrown",
  painted: "painted",
  paradigm: "paradigm",
  plughole: "plughole",
  raindrops: "raindrops",
  ravine: "ravine",
  retro: "retro",
  revolve: "revolve",
  sandWorm: "sandworm",
  sewer: "sewer",
  space: "space",
  stratocumulus: "stratocumulus",
  sweets: "sweets",
  tangle: "tangle",
  time: "time",
  toilet: "toilet",
  ufo: "ufo",
  upsideDown: "upsidedown",
  vintage: "vintage",
  vortex: "vortex",
  warp: "warp",
  warPortal: "warportal",
  well: "well",
  western: "western",
} as const;

const PARTY_GAME_KEYS = {
  animalSlaughter: "animal_slaughter",
  anvilSpleef: "anvil_spleef",
  avalanche: "avalanche",
  bombardment: "bombardment",
  cannonPainting: "cannon_painting",
  chickenRings: "chicken_rings",
  dive: "dive",
  fireLeapers: "fire_leapers",
  frozenFloor: "frozen_floor",
  highGround: "high_ground",
  hoeHoeHoe: "hoe_hoe_hoe",
  jigsawRush: "jigsaw_rush",
  jungleJump: "jungle_jump",
  labEscape: "lab_escape",
  lawnMoower: "lawn_moower",
  minecartRacing: "minecart_racing",
  pigFishing: "pig_fishing",
  pigJousting: "pig_jousting",
  rpg16: "rpg_16",
  shootingRange: "shooting_range",
  spiderMaze: "spider_maze",
  superSheep: "super_sheep",
  theFloorIsLava: "the_floor_is_lava",
  trampolinio: "trampolinio",
  volcano: "volcano",
  workshop: "workshop",
} as const;

const ZOMBIES_ENEMY_KEYS = {
  basic: "basic_zombie_kills_zombies",
  basketball: "basketball_zombie_zombie_kills_zombies",
  blaze: "blaze_zombie_kills_zombies",
  blob: "blob_zombie_kills_zombies",
  bomb: "bomb_zombie_kills_zombies",
  broodmother: "broodmother_zombie_kills_zombies",
  caveSpider: "cave_spider_zombie_kills_zombies",
  chargedCreeper: "charged_creeper_zombie_kills_zombies",
  chgluglu: "chgluglu_zombie_kills_zombies",
  clown: "clown_zombie_kills_zombies",
  corruptedPigman: "corrupted_pigman_zombie_kills_zombies",
  creeper: "creeper_zombie_kills_zombies",
  daBomb: "da_bomb_zombie_kills_zombies",
  drowned: "drowned_zombie_kills_zombies",
  empowered: "empowered_zombie_kills_zombies",
  ender: "ender_zombie_kills_zombies",
  endermite: "endermite_zombie_kills_zombies",
  familyDaughter: "family_daughter_zombie_kills_zombies",
  familyFather: "family_father_zombie_kills_zombies",
  familyMother: "family_mother_zombie_kills_zombies",
  familyTwinBlue: "family_twin_blue_zombie_kills_zombies",
  familyTwinRed: "family_twin_red_zombie_kills_zombies",
  fireLord: "fire_lord_zombie_kills_zombies",
  fire: "fire_zombie_kills_zombies",
  frostZombie: "frost_zombie_zombie_kills_zombies",
  ghast: "ghast_zombie_kills_zombies",
  giantRainbow: "giant_rainbow_zombie_kills_zombies",
  giant: "giant_zombie_kills_zombies",
  guardZombie: "guard_zombie_zombie_kills_zombies",
  guardian: "guardian_zombie_kills_zombies",
  headlessPigman: "headless_pigman_zombie_kills_zombies",
  herobrineMinion: "herobrine_minion_zombie_kills_zombies",
  herobrine: "herobrine_zombie_kills_zombies",
  human: "human_zombie_zombie_kills_zombies",
  infernoPigman: "inferno_pigman_zombie_kills_zombies",
  inferno: "inferno_zombie_kills_zombies",
  invisible: "invisible_zombie_kills_zombies",
  ironGolem: "iron_golem_zombie_kills_zombies",
  kingDrowned: "king_drowned_zombie_kills_zombies",
  kingSlime: "king_slime_zombie_kills_zombies",
  knightDrowned: "knight_drowned_zombie_kills_zombies",
  magmaCube: "magma_cube_zombie_kills_zombies",
  magma: "magma_zombie_kills_zombies",
  mcdonaldsPigman: "mcdonalds_pigman_zombie_kills_zombies",
  mcdonaldsZombie: "mcdonalds_zombie_zombie_kills_zombies",
  megaBlob: "mega_blob_zombie_kills_zombies",
  megaMagma: "mega_magma_zombie_kills_zombies",
  molten: "molten_zombie_kills_zombies",
  murderPigman: "murder_pigman_zombie_kills_zombies",
  murderZombie: "murder_zombie_zombie_kills_zombies",
  nurseZombie: "nurse_zombie_zombie_kills_zombies",
  pigZombie: "pig_zombie_zombie_kills_zombies",
  prisonerPigman2Cell: "prisoner_pigman_2_cell_zombie_kills_zombies",
  prisonerPigman2: "prisoner_pigman_2_zombie_kills_zombies",
  prisonerPigmanCell: "prisoner_pigman_cell_zombie_kills_zombies",
  prisonerPigman: "prisoner_pigman_zombie_kills_zombies",
  prisonerSkeleton: "prisoner_skeleton_zombie_kills_zombies",
  prisonerZombieAngry2: "prisoner_zombie_angry_2_zombie_kills_zombies",
  prisonerZombieAngry3: "prisoner_zombie_angry_3_zombie_kills_zombies",
  prisonerZombieAngry: "prisoner_zombie_angry_zombie_kills_zombies",
  prisonerZombieCell: "prisoner_zombie_cell_zombie_kills_zombies",
  prisoner: "prisoner_zombie_zombie_kills_zombies",
  rainbow: "rainbow_zombie_kills_zombies",
  scuba: "scuba_zombie_zombie_kills_zombies",
  sentinel: "sentinel_zombie_kills_zombies",
  shadySkeleton: "shady_skeleton_zombie_kills_zombies",
  silverfish: "silverfish_zombie_kills_zombies",
  skelefish: "skelefish_zombie_kills_zombies",
  skeleton: "skeleton_zombie_kills_zombies",
  slime: "slime_zombie_kills_zombies",
  slimeZombie: "slime_zombie_zombie_kills_zombies",
  spaceBlaster: "space_blaster_zombie_kills_zombies",
  spaceGrunt: "space_grunt_zombie_kills_zombies",
  tankDrowned: "tank_drowned_zombie_kills_zombies",
  tankZombie: "tank_zombie_zombie_kills_zombies",
  theOldOne: "the_old_one_zombie_kills_zombies",
  theWarden: "the_warden_zombie_kills_zombies",
  tntBaby: "tnt_baby_zombie_kills_zombies",
  tnt: "tnt_zombie_kills_zombies",
  werewolf: "werewolf_zombie_kills_zombies",
  witch: "witch_zombie_kills_zombies",
  witherSkeleton: "wither_skeleton_zombie_kills_zombies",
  wither: "wither_zombie_kills_zombies",
  witherZombie: "wither_zombie_zombie_kills_zombies",
  wolfDrowned: "wolf_drowned_zombie_kills_zombies",
  wolfPet: "wolf_pet_zombie_kills_zombies",
  wolf: "wolf_zombie_kills_zombies",
  worldEnder: "world_ender_zombie_kills_zombies",
  wormSmall: "worm_small_zombie_kills_zombies",
  worm: "worm_zombie_kills_zombies",
} as const;

type ArcadeDropperMapName = keyof typeof DROPPER_MAP_KEYS;
type ArcadePartyGameName = keyof typeof PARTY_GAME_KEYS;
type ArcadeZombiesEnemyName = keyof typeof ZOMBIES_ENEMY_KEYS;

export interface ArcadeOptions {
  readonly showTutorialBook: boolean;
  readonly showTips: boolean;
  readonly showTipHologram: boolean;
  readonly showAllKillfeed: boolean;
  readonly showOwnWoolPickedUp: boolean;
  readonly showOwnWoolDropped: boolean;
  readonly showEnemyWoolPickedUp: boolean;
  readonly showEnemyWoolDropped: boolean;
}

export interface ArcadePrivateGamesSettings {
  readonly healthBuff: string;
  readonly naturalRegeneration: string;
  readonly noFallDamage: boolean;
  readonly permanentPvp: boolean;
  readonly powerUpAbundance: string;
  readonly mapsForEasy: string;
  readonly mapsForMedium: string;
  readonly mapsForHard: string;
}

export interface ArcadeBlockingDeadStats {
  readonly wins: number;
  readonly kills: number;
  readonly headshots: number;
}

export interface ArcadeDragonWarsStats {
  readonly wins: number;
  readonly kills: number;
}

export interface ArcadePixelPaintersStats {
  readonly wins: number;
  readonly paintedBlocks: number;
}

export interface ArcadePixelPartyModeStats {
  readonly gamesPlayed: number;
  readonly wins: number;
  readonly powerUpsCollected: number;
  readonly roundsCompleted: number;
}

export interface ArcadePixelPartyStats {
  readonly gamesPlayed: number;
  readonly wins: number;
  readonly highestRound: number;
  readonly powerUpsCollected: number;
  readonly roundsCompleted: number;
  readonly language: string;
  readonly normal: ArcadePixelPartyModeStats;
  readonly hyper: ArcadePixelPartyModeStats;
}

export interface ArcadePixelPartyColorblind {
  readonly preset: string;
  readonly customPresets: Readonly<Record<string, readonly string[]>>;
}

export interface ArcadeDisastersStats {
  readonly gamesPlayed: number;
  readonly wins: number;
  readonly losses: number;
  readonly timeSurvived: number;
  readonly deaths: Readonly<Record<string, number>>;
  readonly survived: Readonly<Record<string, number>>;
}

export interface ArcadeLeaderboardSettings {
  readonly mode: string;
  readonly resetType: string;
}

export interface ArcadeDttSettings {
  readonly dropdown: boolean;
  readonly filter: boolean;
  readonly music: boolean;
}

export interface ArcadeDropperMap {
  readonly bestTime: number;
  readonly completions: number;
}

export interface ArcadeDropperStats {
  readonly wins: number;
  readonly fails: number;
  readonly fastestGame: number;
  readonly flawlessGames: number;
  readonly gamesPlayed: number;
  readonly gamesFinished: number;
  readonly mapsCompleted: number;
  readonly maps: Readonly<Record<ArcadeDropperMapName, ArcadeDropperMap>>;
}

export interface ArcadeEasterSimulatorStats {
  readonly wins: number;
  readonly eggsFound: number;
}

export interface ArcadeEnderSpleefStats {
  readonly wins: number;
  readonly blocksDestroyed: number;
  readonly spleefTrail: string;
  readonly powerupActivations: number;
  readonly bigshotPowerupActivations: number;
  readonly tripleshotPowerupActivations: number;
}

export interface ArcadeFarmHuntStats {
  readonly wins: number;
  readonly kills: number;
  readonly poopCollected: number;
  readonly bowKills: number;
  readonly animalWins: number;
  readonly animalKills: number;
  readonly animalBowKills: number;
  readonly animalsBowKills: number;
  readonly hunterWins: number;
  readonly hunterKills: number;
  readonly hunterBowKills: number;
  readonly huntersBowKills: number;
  readonly tauntsUsed: number;
  readonly safeTauntsUsed: number;
  readonly riskyTauntsUsed: number;
  readonly dangerousTauntsUsed: number;
  readonly fireworkTauntsUsed: number;
}

export interface ArcadeGalaxyWarsStats {
  readonly gameWins: number;
  readonly kills: number;
  readonly deaths: number;
  readonly empireKills: number;
  readonly rebelKills: number;
  readonly shotsFired: number;
  readonly monthlyKillsA: number;
  readonly monthlyKillsB: number;
  readonly weeklyKillsA: number;
  readonly weeklyKillsB: number;
}

export interface ArcadeGrinchSimulatorStats {
  readonly wins: number;
  readonly gifts: number;
  readonly winsTourney: number;
  readonly giftsTourney: number;
  readonly lossesTourney: number;
  readonly winsTourneyGrinchSimulatorOne: number;
  readonly giftsTourneyGrinchSimulatorOne: number;
  readonly lossesTourneyGrinchSimulatorOne: number;
}

export interface ArcadeHalloweenSimulatorStats {
  readonly wins: number;
  readonly candyFound: number;
}

export interface ArcadeHideAndSeekStats {
  readonly hiderWins: number;
  readonly seekerWins: number;
  readonly partyPooperHiderWins: number;
  readonly partyPooperSeekerWins: number;
  readonly propHuntHiderWins: number;
  readonly propHuntSeekerWins: number;
  readonly showQueueBook: boolean;
}

export interface ArcadeHoleInTheWallStats {
  readonly wins: number;
  readonly rounds: number;
  readonly color: string;
  readonly recordFinish: number;
  readonly recordQualification: number;
  readonly perfectTitle: boolean;
}

export interface ArcadeHypixelSportsStats {
  readonly wins: number;
}

export interface ArcadeMiniWallsStats {
  readonly wins: number;
  readonly kills: number;
  readonly finalKills: number;
  readonly deaths: number;
  readonly witherKills: number;
  readonly witherDamage: number;
  readonly arrowsHit: number;
  readonly arrowsShot: number;
  readonly winsTourney: number;
  readonly killsTourney: number;
  readonly finalKillsTourney: number;
  readonly deathsTourney: number;
  readonly witherKillsTourney: number;
  readonly witherDamageTourney: number;
  readonly arrowsHitTourney: number;
  readonly arrowsShotTourney: number;
  readonly activeKit: string;
  readonly inventoryLayout: Readonly<Record<string, number>>;
}

export interface ArcadeBountyHuntersStats {
  readonly wins: number;
  readonly kills: number;
  readonly deaths: number;
  readonly bowKills: number;
  readonly swordKills: number;
  readonly bountyKills: number;
}

export interface ArcadePartyGameStats {
  readonly bestScore: number;
  readonly bestTime: number;
  readonly kills: number;
  readonly roundWins: number;
  readonly totalScore: number;
}

export interface ArcadePartyGamesStats {
  readonly wins: number;
  readonly wins2: number;
  readonly wins3: number;
  readonly roundWins: number;
  readonly totalStars: number;
  readonly games: Readonly<Record<ArcadePartyGameName, ArcadePartyGameStats>>;
}

export interface ArcadeSantaSaysStats {
  readonly wins: number;
  readonly rounds: number;
  readonly roundWins: number;
  readonly topScore: number;
}

export interface ArcadeSantaSimulatorStats {
  readonly wins: number;
  readonly delivered: number;
  readonly spotted: number;
}

export interface ArcadeSantaSimulatorSeasonalStats {
  readonly wins: number;
  readonly delivered: number;
  readonly spotted: number;
}

export interface ArcadeScubaSimulatorStats {
  readonly wins: number;
  readonly itemsFound: number;
  readonly totalPoints: number;
}

export interface ArcadeHypixelSaysStats {
  readonly wins: number;
  readonly rounds: number;
  readonly roundWins: number;
  readonly topScore: number;
  readonly song: boolean;
}

export interface ArcadeSoccerStats {
  readonly wins: number;
  readonly goals: number;
  readonly kicks: number;
  readonly powerKicks: number;
  readonly fbGoals: number;
  readonly fbKicks: number;
  readonly fbPowerKicks: number;
}

export interface ArcadeThrowOutStats {
  readonly wins: number;
  readonly kills: number;
  readonly deaths: number;
  readonly disguise: string;
}

export interface ArcadeGrindStats {
  readonly wins: number;
  readonly kills: number;
  readonly deaths: number;
}

export interface ArcadeSplatoonStats {
  readonly wins: number;
  readonly kills: number;
  readonly deaths: number;
}

export interface ArcadeVolleyballStats {
  readonly wins: number;
  readonly kills: number;
  readonly deaths: number;
}

export interface ArcadeSpaceRaidersStats {
  readonly wins: number;
  readonly kills: number;
}

export interface ArcadePumpkinSpleefStats {
  readonly wins: number;
}

export interface ArcadeWoolHuntStats {
  readonly participatedWins: number;
  readonly participatedLosses: number;
  readonly experiencedWins: number;
  readonly experiencedLosses: number;
  readonly kills: number;
  readonly killsWithWool: number;
  readonly killsOnWoolholder: number;
  readonly deaths: number;
  readonly deathsWithWool: number;
  readonly deathsToWoolholder: number;
  readonly assists: number;
  readonly woolsCaptured: number;
  readonly woolsStolen: number;
  readonly goldEarned: number;
  readonly goldSpent: number;
  readonly mostGoldEarned: number;
  readonly mostKillsAndAssists: number;
  readonly fastestWin: number;
  readonly fastestWoolCapture: number;
  readonly longestGame: number;
  readonly inventoryLayout: Readonly<Record<string, number>>;
}

export interface ArcadeZombiesMapMode {
  readonly wins: number;
  readonly deaths: number;
  readonly bestRound: number;
  readonly zombieKills: number;
  readonly doorsOpened: number;
  readonly windowsRepaired: number;
  readonly playersRevived: number;
  readonly timesKnockedDown: number;
  readonly totalRoundsSurvived: number;
  readonly fastestTime10: number;
  readonly fastestTime20: number;
  readonly fastestTime30: number;
}

export interface ArcadeZombiesMap {
  readonly wins: number;
  readonly deaths: number;
  readonly bestRound: number;
  readonly zombieKills: number;
  readonly doorsOpened: number;
  readonly windowsRepaired: number;
  readonly playersRevived: number;
  readonly timesKnockedDown: number;
  readonly totalRoundsSurvived: number;
  readonly normal: ArcadeZombiesMapMode;
  readonly hard: ArcadeZombiesMapMode;
  readonly rip: ArcadeZombiesMapMode;
}

export interface ArcadeZombiesAlienArcadium {
  readonly wins: number;
  readonly deaths: number;
  readonly bestRound: number;
  readonly zombieKills: number;
  readonly doorsOpened: number;
  readonly windowsRepaired: number;
  readonly playersRevived: number;
  readonly timesKnockedDown: number;
  readonly totalRoundsSurvived: number;
  readonly normal: ArcadeZombiesMapMode;
}

export interface ArcadeZombiesStats {
  readonly wins: number;
  readonly deaths: number;
  readonly zombieKills: number;
  readonly bestRound: number;
  readonly bulletsHit: number;
  readonly bulletsShot: number;
  readonly headshots: number;
  readonly doorsOpened: number;
  readonly windowsRepaired: number;
  readonly playersRevived: number;
  readonly timesKnockedDown: number;
  readonly totalRoundsSurvived: number;
  readonly fastestTime10: number;
  readonly fastestTime20: number;
  readonly fastestTime30: number;
  readonly hideTutorials: boolean;
  readonly enemyKills: Readonly<Record<ArcadeZombiesEnemyName, number>>;
  readonly alienArcadium: ArcadeZombiesAlienArcadium;
  readonly badBlood: ArcadeZombiesMap;
  readonly deadEnd: ArcadeZombiesMap;
  readonly prison: ArcadeZombiesMap;
}

export interface ArcadeStats {
  readonly coins: number;
  readonly monthlyTokensA: number;
  readonly monthlyTokensB: number;
  readonly weeklyTokensA: number;
  readonly weeklyTokensB: number;
  readonly mysteryGiftsObtained: number;
  readonly poopCollected: number;
  readonly maxWave: number;
  readonly stampLevel: number;
  readonly timestamp: number;
  readonly lastTourneyAd: number;
  readonly blood: boolean;
  readonly flash: boolean;
  readonly hints: boolean;
  readonly music: boolean;
  readonly showInfoBook: boolean;
  readonly persistArcadeResourcePack: string;
  readonly dec2016Achievements: boolean;
  readonly dec2016Achievements2: boolean;
  readonly bountyHead: string;
  readonly meleeWeapon: string;
  readonly language: string;
  readonly shopSort: string;
  readonly shopSortEnableOwnedFirst: boolean;
  readonly activeMovementTrail: string;
  readonly activeProjectileTrail: string;
  readonly activeVictoryDance: string;
  readonly pixelPartyHelmet: string;
  readonly pixelPartyPants: string;
  readonly pixelPartyMusicVolume: number;
  readonly packages: readonly string[];
  readonly leaderboardSettings: ArcadeLeaderboardSettings;
  readonly options: ArcadeOptions;
  readonly privateGames: ArcadePrivateGamesSettings;
  readonly blockingDead: ArcadeBlockingDeadStats;
  readonly dragonWars: ArcadeDragonWarsStats;
  readonly pixelPainters: ArcadePixelPaintersStats;
  readonly pixelParty: ArcadePixelPartyStats;
  readonly pixelPartyColorblind: ArcadePixelPartyColorblind;
  readonly disasters: ArcadeDisastersStats;
  readonly dtt: ArcadeDttSettings;
  readonly dropper: ArcadeDropperStats;
  readonly easterSimulator: ArcadeEasterSimulatorStats;
  readonly enderSpleef: ArcadeEnderSpleefStats;
  readonly farmHunt: ArcadeFarmHuntStats;
  readonly galaxyWars: ArcadeGalaxyWarsStats;
  readonly grinchSimulator: ArcadeGrinchSimulatorStats;
  readonly halloweenSimulator: ArcadeHalloweenSimulatorStats;
  readonly hideAndSeek: ArcadeHideAndSeekStats;
  readonly holeInTheWall: ArcadeHoleInTheWallStats;
  readonly hypixelSports: ArcadeHypixelSportsStats;
  readonly miniWalls: ArcadeMiniWallsStats;
  readonly bountyHunters: ArcadeBountyHuntersStats;
  readonly partyGames: ArcadePartyGamesStats;
  readonly santaSays: ArcadeSantaSaysStats;
  readonly santaSimulator: ArcadeSantaSimulatorStats;
  readonly santaSimulatorSeasonal: ArcadeSantaSimulatorSeasonalStats;
  readonly scubaSimulator: ArcadeScubaSimulatorStats;
  readonly hypixelSays: ArcadeHypixelSaysStats;
  readonly soccer: ArcadeSoccerStats;
  readonly throwOut: ArcadeThrowOutStats;
  readonly grind: ArcadeGrindStats;
  readonly splatoon: ArcadeSplatoonStats;
  readonly volleyball: ArcadeVolleyballStats;
  readonly spaceRaiders: ArcadeSpaceRaidersStats;
  readonly pumpkinSpleef: ArcadePumpkinSpleefStats;
  readonly woolHunt: ArcadeWoolHuntStats;
  readonly zombies: ArcadeZombiesStats;
}

function buildMap<Key extends string, Value>(
  keys: Readonly<Record<Key, string>>,
  make: (rawKey: string, name: Key) => Value,
): Readonly<Record<Key, Value>> {
  const out = {} as Record<Key, Value>;
  for (const name of Object.keys(keys) as Key[]) {
    out[name] = make(keys[name], name);
  }
  return out;
}

function optionOn(arcade: Record<string, unknown>, key: string): boolean {
  return str(arcade, key) === "on";
}

function stringList(
  arcade: Record<string, unknown>,
  key: string,
): readonly string[] {
  const value = arcade[key];
  return Array.isArray(value)
    ? value.filter((entry): entry is string => typeof entry === "string")
    : [];
}

function numberMap(
  arcade: Record<string, unknown>,
  key: string,
): Readonly<Record<string, number>> {
  const source = obj(arcade, key);
  const out: Record<string, number> = {};
  for (const entry of Object.keys(source)) {
    const value = source[entry];
    if (typeof value === "number") {
      out[entry] = value;
    }
  }
  return out;
}

function numberMapOf(
  source: Record<string, unknown>,
): Readonly<Record<string, number>> {
  const out: Record<string, number> = {};
  for (const entry of Object.keys(source)) {
    const value = source[entry];
    if (typeof value === "number") {
      out[entry] = value;
    }
  }
  return out;
}

function stringListMap(
  source: Record<string, unknown>,
): Readonly<Record<string, readonly string[]>> {
  const out: Record<string, readonly string[]> = {};
  for (const entry of Object.keys(source)) {
    const value = source[entry];
    if (Array.isArray(value)) {
      out[entry] = value.filter(
        (item): item is string => typeof item === "string",
      );
    }
  }
  return out;
}

function parsePartyGame(
  arcade: Record<string, unknown>,
  game: string,
): ArcadePartyGameStats {
  return {
    bestScore: num(arcade, `${game}_best_score_party`),
    bestTime: num(arcade, `${game}_best_time_party`),
    kills: num(arcade, `${game}_kills_party`),
    roundWins: num(arcade, `${game}_round_wins_party`),
    totalScore: num(arcade, `${game}_total_score_party`),
  };
}

function parsePixelPartyMode(
  pixelParty: Record<string, unknown>,
  suffix: "" | "_normal" | "_hyper",
): ArcadePixelPartyModeStats {
  return {
    gamesPlayed: num(pixelParty, `games_played${suffix}`),
    wins: num(pixelParty, `wins${suffix}`),
    powerUpsCollected: num(pixelParty, `power_ups_collected${suffix}`),
    roundsCompleted: num(pixelParty, `rounds_completed${suffix}`),
  };
}

function parseZombiesMapMode(
  arcade: Record<string, unknown>,
  map: string,
  mode: "normal" | "hard" | "rip",
): ArcadeZombiesMapMode {
  const suffix = `zombies_${map}_${mode}`;
  return {
    wins: num(arcade, `wins_${suffix}`),
    deaths: num(arcade, `deaths_${suffix}`),
    bestRound: num(arcade, `best_round_${suffix}`),
    zombieKills: num(arcade, `zombie_kills_${suffix}`),
    doorsOpened: num(arcade, `doors_opened_${suffix}`),
    windowsRepaired: num(arcade, `windows_repaired_${suffix}`),
    playersRevived: num(arcade, `players_revived_${suffix}`),
    timesKnockedDown: num(arcade, `times_knocked_down_${suffix}`),
    totalRoundsSurvived: num(arcade, `total_rounds_survived_${suffix}`),
    fastestTime10: num(arcade, `fastest_time_10_${suffix}`),
    fastestTime20: num(arcade, `fastest_time_20_${suffix}`),
    fastestTime30: num(arcade, `fastest_time_30_${suffix}`),
  };
}

function parseZombiesMap(
  arcade: Record<string, unknown>,
  map: string,
): ArcadeZombiesMap {
  const suffix = `zombies_${map}`;
  return {
    wins: num(arcade, `wins_${suffix}`),
    deaths: num(arcade, `deaths_${suffix}`),
    bestRound: num(arcade, `best_round_${suffix}`),
    zombieKills: num(arcade, `zombie_kills_${suffix}`),
    doorsOpened: num(arcade, `doors_opened_${suffix}`),
    windowsRepaired: num(arcade, `windows_repaired_${suffix}`),
    playersRevived: num(arcade, `players_revived_${suffix}`),
    timesKnockedDown: num(arcade, `times_knocked_down_${suffix}`),
    totalRoundsSurvived: num(arcade, `total_rounds_survived_${suffix}`),
    normal: parseZombiesMapMode(arcade, map, "normal"),
    hard: parseZombiesMapMode(arcade, map, "hard"),
    rip: parseZombiesMapMode(arcade, map, "rip"),
  };
}

function parseZombiesAlienArcadium(
  arcade: Record<string, unknown>,
): ArcadeZombiesAlienArcadium {
  const map = "alienarcadium";
  const suffix = `zombies_${map}`;
  return {
    wins: num(arcade, `wins_${suffix}`),
    deaths: num(arcade, `deaths_${suffix}`),
    bestRound: num(arcade, `best_round_${suffix}`),
    zombieKills: num(arcade, `zombie_kills_${suffix}`),
    doorsOpened: num(arcade, `doors_opened_${suffix}`),
    windowsRepaired: num(arcade, `windows_repaired_${suffix}`),
    playersRevived: num(arcade, `players_revived_${suffix}`),
    timesKnockedDown: num(arcade, `times_knocked_down_${suffix}`),
    totalRoundsSurvived: num(arcade, `total_rounds_survived_${suffix}`),
    normal: parseZombiesMapMode(arcade, map, "normal"),
  };
}

/** Parses a player's Arcade stats (`stats.Arcade`) into a typed object. */
export function parseArcade(
  stats: Record<string, unknown>,
): ArcadeStats | null {
  const arcade = obj(stats, "Arcade");
  if (Object.keys(arcade).length === 0) {
    return null;
  }

  const dropper = obj(arcade, "dropper");
  const dropperMaps = obj(dropper, "map_stats");
  const pixelParty = obj(arcade, "pixel_party");
  const pixelPartyColorblind = obj(arcade, "pixelparty");
  const leaderboardSettings = obj(arcade, "leaderboardSettings");
  const privateGames = obj(arcade, "privategames");
  const disastersStats = obj(obj(arcade, "disasters"), "stats");

  return {
    coins: num(arcade, "coins") || num(arcade, "tokens"),
    monthlyTokensA: num(arcade, "monthly_coins_a"),
    monthlyTokensB: num(arcade, "monthly_coins_b"),
    weeklyTokensA:
      num(arcade, "weekly_tokens_a") || num(arcade, "weekly_coins_a"),
    weeklyTokensB:
      num(arcade, "weekly_tokens_b") || num(arcade, "weekly_coins_b"),
    mysteryGiftsObtained: num(arcade, "mystery_gifts_obtained"),
    poopCollected: num(arcade, "poop_collected"),
    maxWave: num(arcade, "max_wave"),
    stampLevel: num(arcade, "stamp_level"),
    timestamp: num(arcade, "time_stamp"),
    lastTourneyAd: num(arcade, "lastTourneyAd"),
    blood: bool(arcade, "blood"),
    flash: bool(arcade, "flash"),
    hints: bool(arcade, "hints"),
    music: bool(arcade, "music"),
    showInfoBook: bool(arcade, "showinfobook"),
    persistArcadeResourcePack: str(arcade, "persistArcadeResourcePack"),
    dec2016Achievements: bool(arcade, "dec2016_achievements"),
    dec2016Achievements2: bool(arcade, "dec2016_achievements2"),
    bountyHead: str(arcade, "bounty_head"),
    meleeWeapon: str(arcade, "melee_weapon"),
    language: str(arcade, "language"),
    shopSort: str(arcade, "shop_sort"),
    shopSortEnableOwnedFirst: bool(arcade, "shop_sort_enable_owned_first"),
    activeMovementTrail: str(arcade, "active_movement_trail"),
    activeProjectileTrail: str(arcade, "active_projectile_trail"),
    activeVictoryDance: str(arcade, "active_victory_dance"),
    pixelPartyHelmet: str(arcade, "pixelparty_helmet"),
    pixelPartyPants: str(arcade, "pixelparty_pants"),
    pixelPartyMusicVolume: num(arcade, "pixel_party_music_volume"),
    packages: stringList(arcade, "packages"),
    leaderboardSettings: {
      mode: str(leaderboardSettings, "mode"),
      resetType: str(leaderboardSettings, "resetType"),
    },
    options: {
      showTutorialBook: optionOn(arcade, "option_show_tutorial_book"),
      showTips: optionOn(arcade, "option_show_tips"),
      showTipHologram: optionOn(arcade, "option_show_tip_hologram"),
      showAllKillfeed: optionOn(arcade, "option_show_all_killfeed"),
      showOwnWoolPickedUp: optionOn(arcade, "option_show_own_wool_picked_up"),
      showOwnWoolDropped: optionOn(arcade, "option_show_own_wool_dropped"),
      showEnemyWoolPickedUp: optionOn(
        arcade,
        "option_show_enemy_wool_picked_up",
      ),
      showEnemyWoolDropped: optionOn(arcade, "option_show_enemy_wool_dropped"),
    },
    privateGames: {
      healthBuff: str(privateGames, "health_buff"),
      naturalRegeneration: str(privateGames, "natural_regeneration"),
      noFallDamage: bool(privateGames, "no_fall_damage"),
      permanentPvp: bool(privateGames, "permanent_pvp"),
      powerUpAbundance: str(privateGames, "power_up_abundance"),
      mapsForEasy: str(privateGames, "maps_for_easy"),
      mapsForMedium: str(privateGames, "maps_for_medium"),
      mapsForHard: str(privateGames, "maps_for_hard"),
    },
    blockingDead: {
      wins: num(arcade, "wins_dayone"),
      kills: num(arcade, "kills_dayone"),
      headshots: num(arcade, "headshots_dayone"),
    },
    dragonWars: {
      wins: num(arcade, "wins_dragonwars2"),
      kills: num(arcade, "kills_dragonwars2"),
    },
    pixelPainters: {
      wins: num(arcade, "wins_draw_their_thing"),
      paintedBlocks: num(arcade, "paintedBlocks"),
    },
    pixelParty: {
      gamesPlayed: num(pixelParty, "games_played"),
      wins: num(pixelParty, "wins"),
      highestRound: num(pixelParty, "highest_round"),
      powerUpsCollected: num(pixelParty, "power_ups_collected"),
      roundsCompleted: num(pixelParty, "rounds_completed"),
      language: str(arcade, "pp_language"),
      normal: parsePixelPartyMode(pixelParty, "_normal"),
      hyper: parsePixelPartyMode(pixelParty, "_hyper"),
    },
    pixelPartyColorblind: {
      preset: str(pixelPartyColorblind, "colorblind_preset"),
      customPresets: stringListMap(
        obj(pixelPartyColorblind, "colorblind_custom_presets"),
      ),
    },
    disasters: {
      gamesPlayed: num(disastersStats, "games_played"),
      wins: num(disastersStats, "wins"),
      losses: num(disastersStats, "losses"),
      timeSurvived: num(disastersStats, "time_survived"),
      deaths: numberMapOf(obj(disastersStats, "deaths")),
      survived: numberMapOf(obj(disastersStats, "survived")),
    },
    dtt: {
      dropdown: bool(arcade, "dtt_dropdown"),
      filter: bool(arcade, "dtt_filter"),
      music: bool(arcade, "dtt_music"),
    },
    dropper: {
      wins: num(dropper, "wins"),
      fails: num(dropper, "fails"),
      fastestGame: num(dropper, "fastest_game"),
      flawlessGames: num(dropper, "flawless_games"),
      gamesPlayed: num(dropper, "games_played"),
      gamesFinished: num(dropper, "games_finished"),
      mapsCompleted: num(dropper, "maps_completed"),
      maps: buildMap(DROPPER_MAP_KEYS, (rawKey) => {
        const map = obj(dropperMaps, rawKey);
        return {
          bestTime: num(map, "best_time"),
          completions: num(map, "completions"),
        };
      }),
    },
    easterSimulator: {
      wins: num(arcade, "wins_easter_simulator"),
      eggsFound: num(arcade, "eggs_found_easter_simulator"),
    },
    enderSpleef: {
      wins: num(arcade, "wins_ender"),
      blocksDestroyed: num(arcade, "blocks_destroyed_ender"),
      spleefTrail: str(arcade, "enderspleef_trail"),
      powerupActivations: num(arcade, "powerup_activations_ender"),
      bigshotPowerupActivations: num(
        arcade,
        "bigshot_powerup_activations_ender",
      ),
      tripleshotPowerupActivations: num(
        arcade,
        "tripleshot_powerup_activations_ender",
      ),
    },
    farmHunt: {
      wins: num(arcade, "wins_farm_hunt"),
      kills: num(arcade, "kills_farm_hunt"),
      poopCollected: num(arcade, "poop_collected_farm_hunt"),
      bowKills: num(arcade, "bow_kills_farm_hunt"),
      animalWins: num(arcade, "animal_wins_farm_hunt"),
      animalKills: num(arcade, "animal_kills_farm_hunt"),
      animalBowKills: num(arcade, "animal_bow_kills_farm_hunt"),
      animalsBowKills: num(arcade, "animals_bow_kills_farm_hunt"),
      hunterWins: num(arcade, "hunter_wins_farm_hunt"),
      hunterKills: num(arcade, "hunter_kills_farm_hunt"),
      hunterBowKills: num(arcade, "hunter_bow_kills_farm_hunt"),
      huntersBowKills: num(arcade, "hunters_bow_kills_farm_hunt"),
      tauntsUsed: num(arcade, "taunts_used_farm_hunt"),
      safeTauntsUsed: num(arcade, "safe_taunts_used_farm_hunt"),
      riskyTauntsUsed: num(arcade, "risky_taunts_used_farm_hunt"),
      dangerousTauntsUsed: num(arcade, "dangerous_taunts_used_farm_hunt"),
      fireworkTauntsUsed: num(arcade, "firework_taunts_used_farm_hunt"),
    },
    galaxyWars: {
      gameWins: num(arcade, "sw_game_wins"),
      kills: num(arcade, "sw_kills"),
      deaths: num(arcade, "sw_deaths"),
      empireKills: num(arcade, "sw_empire_kills"),
      rebelKills: num(arcade, "sw_rebel_kills"),
      shotsFired: num(arcade, "sw_shots_fired"),
      monthlyKillsA: num(arcade, "sw_monthly_kills_a"),
      monthlyKillsB: num(arcade, "sw_monthly_kills_b"),
      weeklyKillsA: num(arcade, "sw_weekly_kills_a"),
      weeklyKillsB: num(arcade, "sw_weekly_kills_b"),
    },
    grinchSimulator: {
      wins: num(arcade, "wins_grinch_simulator_v2"),
      gifts: num(arcade, "gifts_grinch_simulator_v2"),
      winsTourney: num(arcade, "wins_grinch_simulator_v2_tourney"),
      giftsTourney: num(arcade, "gifts_grinch_simulator_v2_tourney"),
      lossesTourney: num(arcade, "losses_grinch_simulator_v2_tourney"),
      winsTourneyGrinchSimulatorOne: num(
        arcade,
        "wins_grinch_simulator_v2_tourney_grinch_simulator_1",
      ),
      giftsTourneyGrinchSimulatorOne: num(
        arcade,
        "gifts_grinch_simulator_v2_tourney_grinch_simulator_1",
      ),
      lossesTourneyGrinchSimulatorOne: num(
        arcade,
        "losses_grinch_simulator_v2_tourney_grinch_simulator_1",
      ),
    },
    halloweenSimulator: {
      wins: num(arcade, "wins_halloween_simulator"),
      candyFound: num(arcade, "candy_found_halloween_simulator"),
    },
    hideAndSeek: {
      hiderWins: num(arcade, "hider_wins_hide_and_seek"),
      seekerWins: num(arcade, "seeker_wins_hide_and_seek"),
      partyPooperHiderWins: num(
        arcade,
        "party_pooper_hider_wins_hide_and_seek",
      ),
      partyPooperSeekerWins: num(
        arcade,
        "party_pooper_seeker_wins_hide_and_seek",
      ),
      propHuntHiderWins: num(arcade, "prop_hunt_hider_wins_hide_and_seek"),
      propHuntSeekerWins: num(arcade, "prop_hunt_seeker_wins_hide_and_seek"),
      showQueueBook: bool(arcade, "hideandseek_showqueuebook"),
    },
    holeInTheWall: {
      wins: num(arcade, "wins_hole_in_the_wall"),
      rounds: num(arcade, "rounds_hole_in_the_wall"),
      color: str(arcade, "hitw_color"),
      recordFinish: num(arcade, "hitw_record_f"),
      recordQualification: num(arcade, "hitw_record_q"),
      perfectTitle: bool(arcade, "hitwPerfectTitle"),
    },
    hypixelSports: {
      wins: num(arcade, "wins_hypixel_sports"),
    },
    miniWalls: {
      wins: num(arcade, "wins_mini_walls"),
      kills: num(arcade, "kills_mini_walls"),
      finalKills: num(arcade, "final_kills_mini_walls"),
      deaths: num(arcade, "deaths_mini_walls"),
      witherKills: num(arcade, "wither_kills_mini_walls"),
      witherDamage: num(arcade, "wither_damage_mini_walls"),
      arrowsHit: num(arcade, "arrows_hit_mini_walls"),
      arrowsShot: num(arcade, "arrows_shot_mini_walls"),
      winsTourney: num(arcade, "wins_tourney_mini_walls_0"),
      killsTourney: num(arcade, "kills_tourney_mini_walls_0"),
      finalKillsTourney: num(arcade, "final_kills_tourney_mini_walls_0"),
      deathsTourney: num(arcade, "deaths_tourney_mini_walls_0"),
      witherKillsTourney: num(arcade, "wither_kills_tourney_mini_walls_0"),
      witherDamageTourney: num(arcade, "wither_damage_tourney_mini_walls_0"),
      arrowsHitTourney: num(arcade, "arrows_hit_tourney_mini_walls_0"),
      arrowsShotTourney: num(arcade, "arrows_shot_tourney_mini_walls_0"),
      activeKit: str(arcade, "miniwalls_activeKit"),
      inventoryLayout: numberMap(arcade, "mini_walls_inventory_layout"),
    },
    bountyHunters: {
      wins: num(arcade, "wins_oneinthequiver"),
      kills: num(arcade, "kills_oneinthequiver"),
      deaths: num(arcade, "deaths_oneinthequiver"),
      bowKills: num(arcade, "bow_kills_oneinthequiver"),
      swordKills: num(arcade, "sword_kills_oneinthequiver"),
      bountyKills: num(arcade, "bounty_kills_oneinthequiver"),
    },
    partyGames: {
      wins: num(arcade, "wins_party"),
      wins2: num(arcade, "wins_party_2"),
      wins3: num(arcade, "wins_party_3"),
      roundWins: num(arcade, "round_wins_party"),
      totalStars: num(arcade, "total_stars_party"),
      games: buildMap(PARTY_GAME_KEYS, (rawKey, name) => {
        const base = parsePartyGame(arcade, rawKey);
        if (name === "lawnMoower") {
          return {
            ...base,
            bestScore: num(arcade, "lawn_moower_mowed_best_score_party"),
            totalScore: num(arcade, "lawn_moower_mowed_total_score_party"),
          };
        }
        if (name === "rpg16") {
          return {
            ...base,
            bestScore: num(arcade, "rpg_16_kills_best_score_party"),
          };
        }
        return base;
      }),
    },
    santaSays: {
      wins: num(arcade, "wins_santa_says"),
      rounds: num(arcade, "rounds_santa_says"),
      roundWins: num(arcade, "round_wins_santa_says"),
      topScore: num(arcade, "top_score_santa_says"),
    },
    santaSimulator: {
      wins: num(arcade, "wins_santa_simulator"),
      delivered: num(arcade, "delivered_santa_simulator"),
      spotted: num(arcade, "spotted_santa_simulator"),
    },
    santaSimulatorSeasonal: {
      wins: num(arcade, "wins_ss_SANTA_SIMULATOR"),
      delivered: num(arcade, "delivered_ss_SANTA_SIMULATOR"),
      spotted: num(arcade, "spotted_ss_SANTA_SIMULATOR"),
    },
    scubaSimulator: {
      wins: num(arcade, "wins_scuba_simulator"),
      itemsFound: num(arcade, "items_found_scuba_simulator"),
      totalPoints: num(arcade, "total_points_scuba_simulator"),
    },
    hypixelSays: {
      wins: num(arcade, "wins_simon_says"),
      rounds: num(arcade, "rounds_simon_says"),
      roundWins: num(arcade, "round_wins_simon_says"),
      topScore: num(arcade, "top_score_simon_says"),
      song: bool(arcade, "simon_song"),
    },
    soccer: {
      wins: num(arcade, "wins_soccer"),
      goals: num(arcade, "goals_soccer"),
      kicks: num(arcade, "kicks_soccer"),
      powerKicks: num(arcade, "powerkicks_soccer"),
      fbGoals: num(arcade, "fb_goals"),
      fbKicks: num(arcade, "fb_kicks"),
      fbPowerKicks: num(arcade, "fb_powerkicks"),
    },
    throwOut: {
      wins: num(arcade, "wins_throw_out"),
      kills: num(arcade, "kills_throw_out"),
      deaths: num(arcade, "deaths_throw_out"),
      disguise: str(arcade, "throwout_disguise"),
    },
    grind: {
      wins: num(arcade, "wins_grind"),
      kills: num(arcade, "kills_grind"),
      deaths: num(arcade, "deaths_grind"),
    },
    splatoon: {
      wins: num(arcade, "wins_splatoon"),
      kills: num(arcade, "kills_splatoon"),
      deaths: num(arcade, "deaths_splatoon"),
    },
    volleyball: {
      wins: num(arcade, "wins_volleyball"),
      kills: num(arcade, "kills_volleyball"),
      deaths: num(arcade, "deaths_volleyball"),
    },
    spaceRaiders: {
      wins: num(arcade, "wins_spaceraiders"),
      kills: num(arcade, "kills_spaceraiders"),
    },
    pumpkinSpleef: {
      wins: num(arcade, "wins_pspleef"),
    },
    woolHunt: {
      participatedWins: num(arcade, "woolhunt_participated_wins"),
      participatedLosses: num(arcade, "woolhunt_participated_losses"),
      experiencedWins: num(arcade, "woolhunt_experienced_wins"),
      experiencedLosses: num(arcade, "woolhunt_experienced_losses"),
      kills: num(arcade, "woolhunt_kills"),
      killsWithWool: num(arcade, "woolhunt_kills_with_wool"),
      killsOnWoolholder: num(arcade, "woolhunt_kills_on_woolholder"),
      deaths: num(arcade, "woolhunt_deaths"),
      deathsWithWool: num(arcade, "woolhunt_deaths_with_wool"),
      deathsToWoolholder: num(arcade, "woolhunt_deaths_to_woolholder"),
      assists: num(arcade, "woolhunt_assists"),
      woolsCaptured: num(arcade, "woolhunt_wools_captured"),
      woolsStolen: num(arcade, "woolhunt_wools_stolen"),
      goldEarned: num(arcade, "woolhunt_gold_earned"),
      goldSpent: num(arcade, "woolhunt_gold_spent"),
      mostGoldEarned: num(arcade, "woolhunt_most_gold_earned"),
      mostKillsAndAssists: num(arcade, "woolhunt_most_kills_and_assists"),
      fastestWin: num(arcade, "woolhunt_fastest_win"),
      fastestWoolCapture: num(arcade, "woolhunt_fastest_wool_capture"),
      longestGame: num(arcade, "woolhunt_longest_game"),
      inventoryLayout: numberMap(arcade, "woolhunt_inventorylayout"),
    },
    zombies: {
      wins: num(arcade, "wins_zombies"),
      deaths: num(arcade, "deaths_zombies"),
      zombieKills: num(arcade, "zombie_kills_zombies"),
      bestRound: num(arcade, "best_round_zombies"),
      bulletsHit: num(arcade, "bullets_hit_zombies"),
      bulletsShot: num(arcade, "bullets_shot_zombies"),
      headshots: num(arcade, "headshots_zombies"),
      doorsOpened: num(arcade, "doors_opened_zombies"),
      windowsRepaired: num(arcade, "windows_repaired_zombies"),
      playersRevived: num(arcade, "players_revived_zombies"),
      timesKnockedDown: num(arcade, "times_knocked_down_zombies"),
      totalRoundsSurvived: num(arcade, "total_rounds_survived_zombies"),
      fastestTime10: num(arcade, "fastest_time_10_zombies"),
      fastestTime20: num(arcade, "fastest_time_20_zombies"),
      fastestTime30: num(arcade, "fastest_time_30_zombies"),
      hideTutorials: bool(arcade, "zombies_hideTutorials"),
      enemyKills: buildMap(ZOMBIES_ENEMY_KEYS, (rawKey) => num(arcade, rawKey)),
      alienArcadium: parseZombiesAlienArcadium(arcade),
      badBlood: parseZombiesMap(arcade, "badblood"),
      deadEnd: parseZombiesMap(arcade, "deadend"),
      prison: parseZombiesMap(arcade, "prison"),
    },
  };
}

