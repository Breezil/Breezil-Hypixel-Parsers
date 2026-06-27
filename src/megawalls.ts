import { num, str, bool } from "./common";

export type MegaWallsClass =
  | "Arcanist"
  | "Blaze"
  | "Creeper"
  | "Dreadlord"
  | "Enderman"
  | "Golem"
  | "Herobrine"
  | "Hunter"
  | "Pigman"
  | "Pirate"
  | "Shaman"
  | "Skeleton"
  | "Spider"
  | "Squid"
  | "Zombie";

export interface MegaWallsModeStats {
  readonly overall: number;
  readonly standard: number;
  readonly faceOff: number;
  readonly gvg: number;
}

export interface MegaWallsRecordStats {
  readonly overall: number;
  readonly standard: number;
  readonly faceOff: number;
  readonly gvg: number;
  readonly practice: number;
}

export interface MegaWallsKillStats {
  readonly overall: number;
  readonly standard: number;
  readonly faceOff: number;
  readonly gvg: number;
  readonly melee: MegaWallsModeStats;
  readonly meleeBehind: MegaWallsModeStats;
}

export interface MegaWallsActivationStats {
  readonly overall: number;
  readonly standard: number;
  readonly faceOff: number;
  readonly gvg: number;
  readonly deathmatch: MegaWallsModeStats;
}

export interface MegaWallsBlocksPlacedStats {
  readonly overall: number;
  readonly standard: number;
  readonly faceOff: number;
  readonly gvg: number;
  readonly preparation: MegaWallsModeStats;
}

export interface MegaWallsDistanceStats {
  readonly overall: number;
  readonly standard: number;
  readonly faceOff: number;
  readonly gvg: number;
  readonly speed: MegaWallsModeStats;
}

export interface MegaWallsActivityStats {
  readonly absorptionPotionsDrunk: MegaWallsModeStats;
  readonly alliesHealed: MegaWallsModeStats;
  readonly amountHealed: MegaWallsModeStats;
  readonly applesEaten: MegaWallsModeStats;
  readonly arrowsFired: MegaWallsModeStats;
  readonly arrowsFromRend: MegaWallsModeStats;
  readonly arrowsHit: MegaWallsModeStats;
  readonly assists: MegaWallsModeStats;
  readonly bedsCrafted: MegaWallsModeStats;
  readonly bedsPlaced: MegaWallsModeStats;
  readonly berserkedKills: MegaWallsModeStats;
  readonly blazesSpawned: MegaWallsModeStats;
  readonly blizzardSecondsSlow: MegaWallsModeStats;
  readonly blocksBroken: MegaWallsModeStats;
  readonly breadCrafted: MegaWallsModeStats;
  readonly breadEaten: MegaWallsModeStats;
  readonly bucketBarriersBroken: MegaWallsModeStats;
  readonly damageDealt: MegaWallsModeStats;
  readonly darkMatterArmor: MegaWallsModeStats;
  readonly deaths: MegaWallsModeStats;
  readonly defenderAssists: MegaWallsModeStats;
  readonly defenderFinalAssists: MegaWallsModeStats;
  readonly defenderFinalKills: MegaWallsModeStats;
  readonly defenderKills: MegaWallsModeStats;
  readonly diamondOreBroken: MegaWallsModeStats;
  readonly divineInterventions: MegaWallsModeStats;
  readonly endurancedFinalKills: MegaWallsModeStats;
  readonly enemiesHit: MegaWallsModeStats;
  readonly energyFromGrapplingHook: MegaWallsModeStats;
  readonly energySyphoned: MegaWallsModeStats;
  readonly finalAssists: MegaWallsModeStats;
  readonly finalAssistsAfterFinalKilled: MegaWallsModeStats;
  readonly finalAssistsMelee: MegaWallsModeStats;
  readonly finalDeaths: MegaWallsModeStats;
  readonly finalKillsAfterFinalKilled: MegaWallsModeStats;
  readonly finalKillsAfterGrapplingHook: MegaWallsModeStats;
  readonly finalKillsBelow10Hp: MegaWallsModeStats;
  readonly finalKillsBelow5Hp: MegaWallsModeStats;
  readonly finalKillsRanged: MegaWallsModeStats;
  readonly finalKillsRanged30: MegaWallsModeStats;
  readonly finalKillsRanged50: MegaWallsModeStats;
  readonly finalKillsWithFire: MegaWallsModeStats;
  readonly finalWaterKills: MegaWallsModeStats;
  readonly finalsWithStrength: MegaWallsModeStats;
  readonly fishEaten: MegaWallsModeStats;
  readonly foodEaten: MegaWallsModeStats;
  readonly forceOfNatureFinalAssists: MegaWallsModeStats;
  readonly forceOfNatureFinalKills: MegaWallsModeStats;
  readonly gamesBedsPlaced: MegaWallsModeStats;
  readonly gamesPlayed: MegaWallsModeStats;
  readonly goldenApplesEaten: MegaWallsModeStats;
  readonly healedLowTeammates: MegaWallsModeStats;
  readonly heroismTriggers: MegaWallsModeStats;
  readonly heroismTriggersInDm: MegaWallsModeStats;
  readonly innerInkBlinds: MegaWallsModeStats;
  readonly ironArmorGifted: MegaWallsModeStats;
  readonly ironArmorGiftedDecember: MegaWallsModeStats;
  readonly ironHeartAbsorption: MegaWallsModeStats;
  readonly ironOreBroken: MegaWallsModeStats;
  readonly ironSwordCrafted: MegaWallsModeStats;
  readonly junkItemsEaten: MegaWallsModeStats;
  readonly killsRanged: MegaWallsModeStats;
  readonly killsWithStrength: MegaWallsModeStats;
  readonly masterAlechmyHearts: MegaWallsModeStats;
  readonly metersFallen: MegaWallsModeStats;
  readonly metersTravelled: MegaWallsModeStats;
  readonly onFireFinalKills: MegaWallsModeStats;
  readonly onFireKills: MegaWallsModeStats;
  readonly perfectDisguises: MegaWallsModeStats;
  readonly playersHealed: MegaWallsModeStats;
  readonly potionsDrunk: MegaWallsModeStats;
  readonly potionsSplashed: MegaWallsModeStats;
  readonly primedTntKills: MegaWallsModeStats;
  readonly resistanceTimeSeconds: MegaWallsModeStats;
  readonly selfHealed: MegaWallsModeStats;
  readonly snowmenBuilt: MegaWallsModeStats;
  readonly snowmenPlayersHit: MegaWallsModeStats;
  readonly steaksEaten: MegaWallsModeStats;
  readonly strikesFromCloak: MegaWallsModeStats;
  readonly swordCrafted: MegaWallsModeStats;
  readonly timePlayed: MegaWallsModeStats;
  readonly totalDeaths: MegaWallsModeStats;
  readonly totalFinalKills: MegaWallsModeStats;
  readonly totalKills: MegaWallsModeStats;
  readonly treasuresFound: MegaWallsModeStats;
  readonly ultraPasteurizedDrank: MegaWallsModeStats;
  readonly venomStrikePoisonDamage: MegaWallsModeStats;
  readonly waterKills: MegaWallsModeStats;
  readonly witherDamage: MegaWallsModeStats;
  readonly witherKills: MegaWallsModeStats;
  readonly witherKillsLastAlive: MegaWallsModeStats;
  readonly woodChopped: MegaWallsModeStats;
  readonly kills: MegaWallsKillStats;
  readonly finalKills: MegaWallsKillStats;
  readonly activations: MegaWallsActivationStats;
  readonly blocksPlaced: MegaWallsBlocksPlacedStats;
  readonly metersWalked: MegaWallsDistanceStats;
  readonly wins: MegaWallsRecordStats;
  readonly losses: MegaWallsRecordStats;
}

export interface MegaWallsAbilitySlotStats {
  readonly alliesHealed: MegaWallsModeStats;
  readonly amountHealed: MegaWallsModeStats;
  readonly assists: MegaWallsModeStats;
  readonly blazesSpawned: MegaWallsModeStats;
  readonly blocksBroken: MegaWallsModeStats;
  readonly damageDealt: MegaWallsModeStats;
  readonly defenderAssists: MegaWallsModeStats;
  readonly defenderFinalAssists: MegaWallsModeStats;
  readonly defenderFinalKills: MegaWallsModeStats;
  readonly defenderKills: MegaWallsModeStats;
  readonly endurancedFinalKills: MegaWallsModeStats;
  readonly enemiesHit: MegaWallsModeStats;
  readonly finalAssists: MegaWallsModeStats;
  readonly finalAssistsAfterFinalKilled: MegaWallsModeStats;
  readonly finalAssistsMelee: MegaWallsModeStats;
  readonly finalKillsAfterFinalKilled: MegaWallsModeStats;
  readonly finalKillsAfterGrapplingHook: MegaWallsModeStats;
  readonly finalKillsBelow10Hp: MegaWallsModeStats;
  readonly finalKillsBelow5Hp: MegaWallsModeStats;
  readonly healedLowTeammates: MegaWallsModeStats;
  readonly heroismTriggers: MegaWallsModeStats;
  readonly heroismTriggersInDm: MegaWallsModeStats;
  readonly innerInkBlinds: MegaWallsModeStats;
  readonly ironHeartAbsorption: MegaWallsModeStats;
  readonly ironOreBroken: MegaWallsModeStats;
  readonly junkItemsEaten: MegaWallsModeStats;
  readonly metersTravelled: MegaWallsModeStats;
  readonly onFireFinalKills: MegaWallsModeStats;
  readonly onFireKills: MegaWallsModeStats;
  readonly perfectDisguises: MegaWallsModeStats;
  readonly playersHealed: MegaWallsModeStats;
  readonly resistanceTimeSeconds: MegaWallsModeStats;
  readonly selfHealed: MegaWallsModeStats;
  readonly totalFinalKills: MegaWallsModeStats;
  readonly totalKills: MegaWallsModeStats;
  readonly venomStrikePoisonDamage: MegaWallsModeStats;
  readonly kills: MegaWallsKillStats;
  readonly finalKills: MegaWallsKillStats;
  readonly activations: MegaWallsActivationStats;
}

export interface MegaWallsAbilityGSlotStats {
  readonly activations: MegaWallsActivationStats;
  readonly amountHealed: MegaWallsModeStats;
  readonly darkMatterArmor: MegaWallsModeStats;
}

export interface MegaWallsKitTiers {
  readonly a: number;
  readonly b: number;
  readonly c: number;
  readonly d: number;
  readonly g: number;
}

export interface MegaWallsKitAbilitySlots {
  readonly a: MegaWallsAbilitySlotStats;
  readonly b: MegaWallsAbilitySlotStats;
  readonly c: MegaWallsAbilitySlotStats;
  readonly g: MegaWallsAbilityGSlotStats;
}

export interface MegaWallsKitStats {
  readonly stats: MegaWallsActivityStats;
  readonly tiers: MegaWallsKitTiers;
  readonly newTiers: MegaWallsKitTiers;
  readonly infused: MegaWallsKitTiers;
  readonly enderchestLevel: number;
  readonly classPoints: number;
  readonly prestigeLevel: number;
  readonly reclaimed: number;
  readonly abilitySlots: MegaWallsKitAbilitySlots;
}

export interface MegaWallsClassBreakdown {
  readonly kills: number;
  readonly killsNew: number;
  readonly deaths: number;
  readonly deathsNew: number;
  readonly wins: number;
  readonly losses: number;
  readonly assists: number;
  readonly finalKills: number;
  readonly finalAssists: number;
  readonly faceOffWins: number;
  readonly faceOffLosses: number;
  readonly practiceWins: number;
  readonly practiceLosses: number;
}

export interface MegaWallsPeriodTierFinalKills {
  readonly a: number;
  readonly b: number;
}

export interface MegaWallsWeeklyClassBreakdown {
  readonly kills: number;
  readonly deaths: number;
  readonly wins: number;
  readonly losses: number;
  readonly finalKills: number;
  readonly faceOffWins: number;
  readonly faceOffLosses: number;
  readonly practiceWins: number;
  readonly practiceLosses: number;
}

export interface MegaWallsWeeklyStats {
  readonly kills: number;
  readonly deaths: number;
  readonly wins: number;
  readonly losses: number;
  readonly finalKills: number;
  readonly faceOffWins: number;
  readonly faceOffLosses: number;
  readonly practiceWins: number;
  readonly practiceLosses: number;
  readonly byClass: Readonly<
    Record<MegaWallsClass, MegaWallsWeeklyClassBreakdown>
  >;
  readonly finalKillsByTier: MegaWallsPeriodTierFinalKills;
  readonly finalKillsByClassTier: Readonly<
    Record<MegaWallsClass, MegaWallsPeriodTierFinalKills>
  >;
}

export interface MegaWallsMonthlyStats {
  readonly finalKillsByTier: MegaWallsPeriodTierFinalKills;
  readonly finalKillsByClassTier: Readonly<
    Record<MegaWallsClass, MegaWallsPeriodTierFinalKills>
  >;
}

export interface MegaWallsPlays {
  readonly standard: number;
  readonly faceOff: number;
  readonly practice: number;
}

export interface MegaWallsClassSkillLevels {
  readonly a: number;
  readonly b: number;
  readonly c: number;
  readonly d: number;
  readonly g: number;
}

export interface MegaWallsClassSkillFlags {
  readonly a: boolean;
  readonly b: boolean;
  readonly c: boolean;
  readonly d: boolean;
  readonly g: boolean;
}

export interface MegaWallsPrestigeTag {
  readonly classPointsShowcase: boolean;
  readonly type: string;
}

export interface MegaWallsClassProgress {
  readonly unlocked: boolean;
  readonly prestige: number;
  readonly enderchestRows: number;
  readonly checked4: boolean;
  readonly prestigeChecked4: boolean;
  readonly skillLevels: MegaWallsClassSkillLevels;
  readonly skillLevelsChecked4: MegaWallsClassSkillFlags;
  readonly skillLevelsChecked5: MegaWallsClassSkillFlags;
  readonly prestigeTag: MegaWallsPrestigeTag;
}

export interface MegaWallsColorblindSettings {
  readonly enabled: boolean;
  readonly bold: boolean;
  readonly italic: boolean;
  readonly red: string;
  readonly green: string;
  readonly blue: string;
  readonly yellow: string;
}

export interface MegaWallsLeaderboardSettings {
  readonly resetType: string;
  readonly class: string;
}

export interface MegaWallsStats {
  readonly coins: number;
  readonly witherCoins: number;
  readonly classPoints: number;
  readonly classPointsVersion: number;
  readonly mythicFavor: number;
  readonly exchangeFavorBought: number;
  readonly exchangeFavorSold: number;
  readonly newEnderchest: number;
  readonly newPrestige: number;
  readonly pickaxeLevel: number;
  readonly pickaxeRefunded: number;
  readonly playStreak: number;
  readonly refundedCoinsPp: number;
  readonly shoutTotal: number;
  readonly chosenClass: string;
  readonly chosenKillSign: string;
  readonly killMessage: string;
  readonly dreadlordEffect: string;
  readonly activeChallengeMap: string;
  readonly warCry: string;
  readonly smileyKills: string;
  readonly blood: boolean;
  readonly mutationsVisibility: boolean;
  readonly gvgDecide: boolean;
  readonly faceOffJoinNoParty: boolean;
  readonly toggleHints: boolean;
  readonly toggleNotifications: boolean;
  readonly witherHealthHearts: boolean;
  readonly colorblind: MegaWallsColorblindSettings;
  readonly packages: readonly string[];
  readonly cakesFoundByName: readonly string[];
  readonly votes: Readonly<Record<string, number>>;
  readonly chosenSkins: Readonly<Record<string, string>>;
  readonly finalKillsLegacy: number;
  readonly finalAssistsLegacy: number;
  readonly finalDeathsLegacy: number;
  readonly witherDamageLegacy: number;
  readonly killsNewLegacy: number;
  readonly deathsNewLegacy: number;
  readonly cakesFound: MegaWallsModeStats;
  readonly plays: MegaWallsPlays;
  readonly stats: MegaWallsActivityStats;
  readonly byClass: Readonly<Record<MegaWallsClass, MegaWallsClassBreakdown>>;
  readonly weekly: MegaWallsWeeklyStats;
  readonly monthly: MegaWallsMonthlyStats;
  readonly classes: Readonly<Record<string, MegaWallsClassProgress>>;
  readonly kits: Readonly<Record<string, MegaWallsKitStats>>;
  readonly kitInventories: Readonly<
    Record<string, Readonly<Record<string, string>>>
  >;
  readonly leaderboardSettings: MegaWallsLeaderboardSettings;
}

const CLASSES: readonly MegaWallsClass[] = [
  "Arcanist",
  "Blaze",
  "Creeper",
  "Dreadlord",
  "Enderman",
  "Golem",
  "Herobrine",
  "Hunter",
  "Pigman",
  "Pirate",
  "Shaman",
  "Skeleton",
  "Spider",
  "Squid",
  "Zombie",
];

const KITS: readonly string[] = [
  "cow",
  "hunter",
  "shark",
  "arcanist",
  "dreadlord",
  "golem",
  "herobrine",
  "pigman",
  "zombie",
  "blaze",
  "enderman",
  "shaman",
  "squid",
  "creeper",
  "pirate",
  "sheep",
  "skeleton",
  "spider",
  "werewolf",
  "angel",
  "assassin",
  "automaton",
  "moleman",
  "phoenix",
  "renegade",
  "snowman",
  "dragon",
];

const ACTIVITY_STATS: readonly string[] = [
  "absorption_potions_drunk",
  "allies_healed",
  "amount_healed",
  "apples_eaten",
  "arrows_fired",
  "arrows_from_rend",
  "arrows_hit",
  "assists",
  "beds_crafted",
  "beds_placed",
  "berserked_kills",
  "blazes_spawned",
  "blizzard_seconds_slow",
  "blocks_broken",
  "bread_crafted",
  "bread_eaten",
  "bucket_barriers_broken",
  "damage_dealt",
  "dark_matter_armor",
  "deaths",
  "defender_assists",
  "defender_final_assists",
  "defender_final_kills",
  "defender_kills",
  "diamond_ore_broken",
  "divine_interventions",
  "enduranced_final_kills",
  "enemies_hit",
  "energy_from_grappling_hook",
  "energy_syphoned",
  "final_assists",
  "final_assists_after_final_killed",
  "final_assists_melee",
  "final_deaths",
  "final_kills_after_final_killed",
  "final_kills_after_grappling_hook",
  "final_kills_below_10_hp",
  "final_kills_below_5_hp",
  "final_kills_ranged",
  "final_kills_ranged_30",
  "final_kills_ranged_50",
  "final_kills_with_fire",
  "final_water_kills",
  "finals_with_strength",
  "fish_eaten",
  "food_eaten",
  "force_of_nature_final_assists",
  "force_of_nature_final_kills",
  "games_beds_placed",
  "games_played",
  "golden_apples_eaten",
  "healed_low_teammates",
  "heroism_triggers",
  "heroism_triggers_in_dm",
  "inner_ink_blinds",
  "iron_armor_gifted",
  "iron_armor_gifted_december",
  "iron_heart_absorption",
  "iron_ore_broken",
  "iron_sword_crafted",
  "junk_items_eaten",
  "kills_ranged",
  "kills_with_strength",
  "master_alechmy_hearts",
  "meters_fallen",
  "meters_travelled",
  "on_fire_final_kills",
  "on_fire_kills",
  "perfect_disguises",
  "players_healed",
  "potions_drunk",
  "potions_splashed",
  "primed_tnt_kills",
  "resistance_time_seconds",
  "self_healed",
  "snowmen_built",
  "snowmen_players_hit",
  "steaks_eaten",
  "strikes_from_cloak",
  "sword_crafted",
  "time_played",
  "total_deaths",
  "total_final_kills",
  "total_kills",
  "treasures_found",
  "ultra_pasteurized_drank",
  "venom_strike_poison_damage",
  "water_kills",
  "wither_damage",
  "wither_kills",
  "wither_kills_last_alive",
  "wood_chopped",
];

const ABILITY_SLOT_STATS: readonly string[] = [
  "allies_healed",
  "amount_healed",
  "assists",
  "blazes_spawned",
  "blocks_broken",
  "damage_dealt",
  "defender_assists",
  "defender_final_assists",
  "defender_final_kills",
  "defender_kills",
  "enduranced_final_kills",
  "enemies_hit",
  "final_assists",
  "final_assists_after_final_killed",
  "final_assists_melee",
  "final_kills_after_final_killed",
  "final_kills_after_grappling_hook",
  "final_kills_below_10_hp",
  "final_kills_below_5_hp",
  "healed_low_teammates",
  "heroism_triggers",
  "heroism_triggers_in_dm",
  "inner_ink_blinds",
  "iron_heart_absorption",
  "iron_ore_broken",
  "junk_items_eaten",
  "meters_travelled",
  "on_fire_final_kills",
  "on_fire_kills",
  "perfect_disguises",
  "players_healed",
  "resistance_time_seconds",
  "self_healed",
  "total_final_kills",
  "total_kills",
  "venom_strike_poison_damage",
];

const STAT_KEYS: readonly (keyof MegaWallsActivityStats)[] = [
  "absorptionPotionsDrunk",
  "alliesHealed",
  "amountHealed",
  "applesEaten",
  "arrowsFired",
  "arrowsFromRend",
  "arrowsHit",
  "assists",
  "bedsCrafted",
  "bedsPlaced",
  "berserkedKills",
  "blazesSpawned",
  "blizzardSecondsSlow",
  "blocksBroken",
  "breadCrafted",
  "breadEaten",
  "bucketBarriersBroken",
  "damageDealt",
  "darkMatterArmor",
  "deaths",
  "defenderAssists",
  "defenderFinalAssists",
  "defenderFinalKills",
  "defenderKills",
  "diamondOreBroken",
  "divineInterventions",
  "endurancedFinalKills",
  "enemiesHit",
  "energyFromGrapplingHook",
  "energySyphoned",
  "finalAssists",
  "finalAssistsAfterFinalKilled",
  "finalAssistsMelee",
  "finalDeaths",
  "finalKillsAfterFinalKilled",
  "finalKillsAfterGrapplingHook",
  "finalKillsBelow10Hp",
  "finalKillsBelow5Hp",
  "finalKillsRanged",
  "finalKillsRanged30",
  "finalKillsRanged50",
  "finalKillsWithFire",
  "finalWaterKills",
  "finalsWithStrength",
  "fishEaten",
  "foodEaten",
  "forceOfNatureFinalAssists",
  "forceOfNatureFinalKills",
  "gamesBedsPlaced",
  "gamesPlayed",
  "goldenApplesEaten",
  "healedLowTeammates",
  "heroismTriggers",
  "heroismTriggersInDm",
  "innerInkBlinds",
  "ironArmorGifted",
  "ironArmorGiftedDecember",
  "ironHeartAbsorption",
  "ironOreBroken",
  "ironSwordCrafted",
  "junkItemsEaten",
  "killsRanged",
  "killsWithStrength",
  "masterAlechmyHearts",
  "metersFallen",
  "metersTravelled",
  "onFireFinalKills",
  "onFireKills",
  "perfectDisguises",
  "playersHealed",
  "potionsDrunk",
  "potionsSplashed",
  "primedTntKills",
  "resistanceTimeSeconds",
  "selfHealed",
  "snowmenBuilt",
  "snowmenPlayersHit",
  "steaksEaten",
  "strikesFromCloak",
  "swordCrafted",
  "timePlayed",
  "totalDeaths",
  "totalFinalKills",
  "totalKills",
  "treasuresFound",
  "ultraPasteurizedDrank",
  "venomStrikePoisonDamage",
  "waterKills",
  "witherDamage",
  "witherKills",
  "witherKillsLastAlive",
  "woodChopped",
];

const ABILITY_SLOT_KEYS: readonly (keyof MegaWallsAbilitySlotStats)[] = [
  "alliesHealed",
  "amountHealed",
  "assists",
  "blazesSpawned",
  "blocksBroken",
  "damageDealt",
  "defenderAssists",
  "defenderFinalAssists",
  "defenderFinalKills",
  "defenderKills",
  "endurancedFinalKills",
  "enemiesHit",
  "finalAssists",
  "finalAssistsAfterFinalKilled",
  "finalAssistsMelee",
  "finalKillsAfterFinalKilled",
  "finalKillsAfterGrapplingHook",
  "finalKillsBelow10Hp",
  "finalKillsBelow5Hp",
  "healedLowTeammates",
  "heroismTriggers",
  "heroismTriggersInDm",
  "innerInkBlinds",
  "ironHeartAbsorption",
  "ironOreBroken",
  "junkItemsEaten",
  "metersTravelled",
  "onFireFinalKills",
  "onFireKills",
  "perfectDisguises",
  "playersHealed",
  "resistanceTimeSeconds",
  "selfHealed",
  "totalFinalKills",
  "totalKills",
  "venomStrikePoisonDamage",
];

function modeStats(
  data: Record<string, unknown>,
  base: string,
): MegaWallsModeStats {
  return {
    overall: num(data, base),
    standard: num(data, `${base}_standard`),
    faceOff: num(data, `${base}_face_off`),
    gvg: num(data, `${base}_gvg`),
  };
}

function recordStats(
  data: Record<string, unknown>,
  base: string,
): MegaWallsRecordStats {
  return {
    overall: num(data, base),
    standard: num(data, `${base}_standard`),
    faceOff: num(data, `${base}_face_off`),
    gvg: num(data, `${base}_gvg`),
    practice: num(data, `${base}_practice`),
  };
}

function killStats(
  data: Record<string, unknown>,
  base: string,
): MegaWallsKillStats {
  return {
    overall: num(data, base),
    standard: num(data, `${base}_standard`),
    faceOff: num(data, `${base}_face_off`),
    gvg: num(data, `${base}_gvg`),
    melee: modeStats(data, `${base}_melee`),
    meleeBehind: modeStats(data, `${base}_melee_behind`),
  };
}

function activationStats(
  data: Record<string, unknown>,
  prefix: string,
): MegaWallsActivationStats {
  const base = `${prefix}activations`;
  return {
    overall: num(data, base),
    standard: num(data, `${base}_standard`),
    faceOff: num(data, `${base}_face_off`),
    gvg: num(data, `${base}_gvg`),
    deathmatch: modeStats(data, `${base}_deathmatch`),
  };
}

function blocksPlacedStats(
  data: Record<string, unknown>,
  prefix: string,
): MegaWallsBlocksPlacedStats {
  const base = `${prefix}blocks_placed`;
  return {
    overall: num(data, base),
    standard: num(data, `${base}_standard`),
    faceOff: num(data, `${base}_face_off`),
    gvg: num(data, `${base}_gvg`),
    preparation: modeStats(data, `${base}_preparation`),
  };
}

function distanceStats(
  data: Record<string, unknown>,
  prefix: string,
): MegaWallsDistanceStats {
  const base = `${prefix}meters_walked`;
  return {
    overall: num(data, base),
    standard: num(data, `${base}_standard`),
    faceOff: num(data, `${base}_face_off`),
    gvg: num(data, `${base}_gvg`),
    speed: modeStats(data, `${base}_speed`),
  };
}

function activityStats(
  data: Record<string, unknown>,
  prefix: string,
): MegaWallsActivityStats {
  const out = {} as Record<keyof MegaWallsActivityStats, unknown>;
  STAT_KEYS.forEach((key, index) => {
    out[key] = modeStats(data, `${prefix}${ACTIVITY_STATS[index]}`);
  });
  out.kills = killStats(data, `${prefix}kills`);
  out.finalKills = killStats(data, `${prefix}final_kills`);
  out.activations = activationStats(data, prefix);
  out.blocksPlaced = blocksPlacedStats(data, prefix);
  out.metersWalked = distanceStats(data, prefix);
  out.wins = recordStats(data, `${prefix}wins`);
  out.losses = recordStats(data, `${prefix}losses`);
  return out as MegaWallsActivityStats;
}

function abilitySlotStats(
  data: Record<string, unknown>,
  prefix: string,
): MegaWallsAbilitySlotStats {
  const out = {} as Record<keyof MegaWallsAbilitySlotStats, unknown>;
  ABILITY_SLOT_KEYS.forEach((key, index) => {
    out[key] = modeStats(data, `${prefix}${ABILITY_SLOT_STATS[index]}`);
  });
  out.kills = killStats(data, `${prefix}kills`);
  out.finalKills = killStats(data, `${prefix}final_kills`);
  out.activations = activationStats(data, prefix);
  return out as MegaWallsAbilitySlotStats;
}

function abilityGSlotStats(
  data: Record<string, unknown>,
  prefix: string,
): MegaWallsAbilityGSlotStats {
  return {
    activations: activationStats(data, prefix),
    amountHealed: modeStats(data, `${prefix}amount_healed`),
    darkMatterArmor: modeStats(data, `${prefix}dark_matter_armor`),
  };
}

function kitTiers(
  data: Record<string, unknown>,
  prefix: string,
): MegaWallsKitTiers {
  return {
    a: num(data, `${prefix}a`),
    b: num(data, `${prefix}b`),
    c: num(data, `${prefix}c`),
    d: num(data, `${prefix}d`),
    g: num(data, `${prefix}g`),
  };
}

function kitInfused(
  data: Record<string, unknown>,
  kit: string,
): MegaWallsKitTiers {
  return {
    a: num(data, `${kit}_a_infused`),
    b: num(data, `${kit}_b_infused`),
    c: num(data, `${kit}_c_infused`),
    d: num(data, `${kit}_d_infused`),
    g: num(data, `${kit}_g_infused`),
  };
}

function kitStats(
  data: Record<string, unknown>,
  kit: string,
): MegaWallsKitStats {
  const prefix = `${kit}_`;
  return {
    stats: activityStats(data, prefix),
    tiers: kitTiers(data, prefix),
    newTiers: kitTiers(data, `${kit}_new_`),
    infused: kitInfused(data, kit),
    enderchestLevel: num(data, `${prefix}enderchest_level`),
    classPoints: num(data, `${prefix}class_points`),
    prestigeLevel: num(data, `${prefix}prestige_level`),
    reclaimed: num(data, `${prefix}reclaimed`),
    abilitySlots: {
      a: abilitySlotStats(data, `${prefix}a_`),
      b: abilitySlotStats(data, `${prefix}b_`),
      c: abilitySlotStats(data, `${prefix}c_`),
      g: abilityGSlotStats(data, `${prefix}g_`),
    },
  };
}

function classBreakdown(
  data: Record<string, unknown>,
  klass: MegaWallsClass,
): MegaWallsClassBreakdown {
  return {
    kills: num(data, `kills_${klass}`),
    killsNew: num(data, `kills_new_${klass}`),
    deaths: num(data, `deaths_${klass}`),
    deathsNew: num(data, `deaths_new_${klass}`),
    wins: num(data, `wins_${klass}`),
    losses: num(data, `losses_${klass}`),
    assists: num(data, `assists_${klass}`),
    finalKills: num(data, `finalKills_${klass}`),
    finalAssists: num(data, `finalAssists_${klass}`),
    faceOffWins: num(data, `wins_face_off_${klass}`),
    faceOffLosses: num(data, `losses_face_off_${klass}`),
    practiceWins: num(data, `wins_practice_${klass}`),
    practiceLosses: num(data, `losses_practice_${klass}`),
  };
}

function weeklyClassBreakdown(
  data: Record<string, unknown>,
  klass: MegaWallsClass,
): MegaWallsWeeklyClassBreakdown {
  return {
    kills: num(data, `weeklyKills_${klass}`),
    deaths: num(data, `weeklyDeaths_${klass}`),
    wins: num(data, `weeklyWins_${klass}`),
    losses: num(data, `weeklyLosses_${klass}`),
    finalKills: num(data, `weeklyFinalKills_${klass}`),
    faceOffWins: num(data, `weeklyWins_face_off_${klass}`),
    faceOffLosses: num(data, `weeklyLosses_face_off_${klass}`),
    practiceWins: num(data, `weeklyWins_practice_${klass}`),
    practiceLosses: num(data, `weeklyLosses_practice_${klass}`),
  };
}

function periodTierFinalKills(
  data: Record<string, unknown>,
  period: string,
  klass: MegaWallsClass,
): MegaWallsPeriodTierFinalKills {
  return {
    a: num(data, `${period}_finalKills_${klass}_a`),
    b: num(data, `${period}_finalKills_${klass}_b`),
  };
}

function mapClasses<T>(
  build: (klass: MegaWallsClass) => T,
): Readonly<Record<MegaWallsClass, T>> {
  const out = {} as Record<MegaWallsClass, T>;
  for (const klass of CLASSES) {
    out[klass] = build(klass);
  }
  return out;
}

function classSkillLevels(
  progress: Record<string, unknown>,
): MegaWallsClassSkillLevels {
  return {
    a: num(progress, "skill_level_a"),
    b: num(progress, "skill_level_b"),
    c: num(progress, "skill_level_c"),
    d: num(progress, "skill_level_d"),
    g: num(progress, "skill_level_g"),
  };
}

function classSkillFlags(
  progress: Record<string, unknown>,
  suffix: string,
): MegaWallsClassSkillFlags {
  return {
    a: bool(progress, `skill_level_a${suffix}`),
    b: bool(progress, `skill_level_b${suffix}`),
    c: bool(progress, `skill_level_c${suffix}`),
    d: bool(progress, `skill_level_d${suffix}`),
    g: bool(progress, `skill_level_g${suffix}`),
  };
}

function prestigeTag(progress: Record<string, unknown>): MegaWallsPrestigeTag {
  const raw = progress.prestige_tag;
  const tag =
    typeof raw === "object" && raw !== null && !Array.isArray(raw)
      ? (raw as Record<string, unknown>)
      : {};
  return {
    classPointsShowcase: bool(tag, "class_points_showcase"),
    type: str(tag, "type"),
  };
}

function parseClasses(
  stats: Record<string, unknown>,
): Readonly<Record<string, MegaWallsClassProgress>> {
  const raw = stats.classes;
  if (typeof raw !== "object" || raw === null || Array.isArray(raw)) {
    return {};
  }
  const out: Record<string, MegaWallsClassProgress> = {};
  for (const [name, value] of Object.entries(raw as Record<string, unknown>)) {
    if (typeof value !== "object" || value === null || Array.isArray(value)) {
      continue;
    }
    const progress = value as Record<string, unknown>;
    out[name] = {
      unlocked: bool(progress, "unlocked"),
      prestige: num(progress, "prestige"),
      enderchestRows: num(progress, "enderchest_rows"),
      checked4: bool(progress, "checked4"),
      prestigeChecked4: bool(progress, "prestigeChecked4"),
      skillLevels: classSkillLevels(progress),
      skillLevelsChecked4: classSkillFlags(progress, "Checked4"),
      skillLevelsChecked5: classSkillFlags(progress, "Checked5"),
      prestigeTag: prestigeTag(progress),
    };
  }
  return out;
}

function parseKitInventories(
  stats: Record<string, unknown>,
): Readonly<Record<string, Readonly<Record<string, string>>>> {
  const out: Record<string, Record<string, string>> = {};
  for (const key of Object.keys(stats)) {
    if (!key.endsWith("Inventory")) {
      continue;
    }
    const raw = stats[key];
    if (typeof raw !== "object" || raw === null || Array.isArray(raw)) {
      continue;
    }
    const inventory: Record<string, string> = {};
    for (const [slot, value] of Object.entries(
      raw as Record<string, unknown>,
    )) {
      if (typeof value === "string") {
        inventory[slot] = value;
      }
    }
    out[key] = inventory;
  }
  return out;
}

function parseStringArray(value: unknown): readonly string[] {
  return Array.isArray(value)
    ? value.filter((entry): entry is string => typeof entry === "string")
    : [];
}

function parseVotes(
  stats: Record<string, unknown>,
): Readonly<Record<string, number>> {
  const out: Record<string, number> = {};
  for (const key of Object.keys(stats)) {
    if (key.startsWith("votes_") && typeof stats[key] === "number") {
      out[key.slice("votes_".length)] = stats[key];
    }
  }
  return out;
}

function parseChosenSkins(
  stats: Record<string, unknown>,
): Readonly<Record<string, string>> {
  const out: Record<string, string> = {};
  for (const key of Object.keys(stats)) {
    if (key.startsWith("chosen_skin_") && typeof stats[key] === "string") {
      out[key.slice("chosen_skin_".length)] = stats[key];
    }
  }
  return out;
}

function parseLeaderboardSettings(
  stats: Record<string, unknown>,
): MegaWallsLeaderboardSettings {
  const raw = stats.leaderboardSettings;
  const settings =
    typeof raw === "object" && raw !== null && !Array.isArray(raw)
      ? (raw as Record<string, unknown>)
      : {};
  return {
    resetType: str(settings, "resetType"),
    class: str(settings, "class"),
  };
}

/** Parses a player's Mega Walls stats (`stats.Walls3`) into a typed object. */
export function parseMegaWalls(
  stats: Record<string, unknown>,
): MegaWallsStats | null {
  if (typeof stats !== "object" || stats === null) {
    return null;
  }

  const kits: Record<string, MegaWallsKitStats> = {};
  for (const kit of KITS) {
    kits[kit] = kitStats(stats, kit);
  }

  return {
    coins: num(stats, "coins"),
    witherCoins: num(stats, "witherCoins"),
    classPoints: num(stats, "class_points"),
    classPointsVersion: num(stats, "class_points_version"),
    mythicFavor: num(stats, "mythic_favor"),
    exchangeFavorBought: num(stats, "exchange_favor_bought"),
    exchangeFavorSold: num(stats, "exchange_favor_sold"),
    newEnderchest: num(stats, "new_echest"),
    newPrestige: num(stats, "new_prestige"),
    pickaxeLevel: num(stats, "pickaxeLevel"),
    pickaxeRefunded: num(stats, "pickaxe_refunded"),
    playStreak: num(stats, "play_streak"),
    refundedCoinsPp: num(stats, "refundedCoinsPP"),
    shoutTotal: num(stats, "shoutTotal"),
    chosenClass: str(stats, "chosen_class"),
    chosenKillSign: str(stats, "chosen_kill_sign"),
    killMessage: str(stats, "kill_message"),
    dreadlordEffect: str(stats, "Dreadlord_effect"),
    activeChallengeMap: str(stats, "activeChallengeMap"),
    warCry: str(stats, "war_cry"),
    smileyKills: str(stats, "smiley_kills"),
    blood: bool(stats, "blood"),
    mutationsVisibility: bool(stats, "mutations_visibility"),
    gvgDecide: bool(stats, "gvg_decide"),
    faceOffJoinNoParty: bool(stats, "faceoff_join_noparty"),
    toggleHints: bool(stats, "toggle_hints"),
    toggleNotifications: bool(stats, "toggle_notifications"),
    witherHealthHearts: bool(stats, "wither_health_hearts"),
    colorblind: {
      enabled: bool(stats, "colorblind"),
      bold: bool(stats, "colorblind_bold"),
      italic: bool(stats, "colorblind_italic"),
      red: str(stats, "colorblind_red"),
      green: str(stats, "colorblind_green"),
      blue: str(stats, "colorblind_blue"),
      yellow: str(stats, "colorblind_yellow"),
    },
    packages: parseStringArray(stats.packages),
    cakesFoundByName: parseStringArray(stats.cakes_found_by_name),
    votes: parseVotes(stats),
    chosenSkins: parseChosenSkins(stats),
    finalKillsLegacy: num(stats, "finalKills"),
    finalAssistsLegacy: num(stats, "finalAssists"),
    finalDeathsLegacy: num(stats, "finalDeaths"),
    witherDamageLegacy: num(stats, "witherDamage"),
    killsNewLegacy: num(stats, "kills_new"),
    deathsNewLegacy: num(stats, "deaths_new"),
    cakesFound: modeStats(stats, "cakes_found"),
    plays: {
      standard: num(stats, "plays_standard"),
      faceOff: num(stats, "plays_face_off"),
      practice: num(stats, "plays_practice"),
    },
    stats: activityStats(stats, ""),
    byClass: mapClasses((klass) => classBreakdown(stats, klass)),
    weekly: {
      kills: num(stats, "weeklyKills"),
      deaths: num(stats, "weeklyDeaths"),
      wins: num(stats, "weeklyWins"),
      losses: num(stats, "weeklyLosses"),
      finalKills: num(stats, "weeklyFinalKills"),
      faceOffWins: num(stats, "weeklyWins_face_off"),
      faceOffLosses: num(stats, "weeklyLosses_face_off"),
      practiceWins: num(stats, "weeklyWins_practice"),
      practiceLosses: num(stats, "weeklyLosses_practice"),
      byClass: mapClasses((klass) => weeklyClassBreakdown(stats, klass)),
      finalKillsByTier: {
        a: num(stats, "weekly_finalKills_a"),
        b: num(stats, "weekly_finalKills_b"),
      },
      finalKillsByClassTier: mapClasses((klass) =>
        periodTierFinalKills(stats, "weekly", klass),
      ),
    },
    monthly: {
      finalKillsByTier: {
        a: num(stats, "monthly_finalKills_a"),
        b: num(stats, "monthly_finalKills_b"),
      },
      finalKillsByClassTier: mapClasses((klass) =>
        periodTierFinalKills(stats, "monthly", klass),
      ),
    },
    classes: parseClasses(stats),
    kits,
    kitInventories: parseKitInventories(stats),
    leaderboardSettings: parseLeaderboardSettings(stats),
  };
}

