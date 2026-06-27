import { num, str, bool, obj } from "./common";

export interface WarlordsClassStats {
  readonly wins: number;
  readonly losses: number;
  readonly gamesPlayed: number;
  readonly damage: number;
  readonly healing: number;
  readonly damagePrevented: number;
}

export interface WarlordsLoadout {
  readonly spec: string;
  readonly armorSelection: number;
  readonly helmetSelection: number;
  readonly cooldown: number;
  readonly critChance: number;
  readonly critMultiplier: number;
  readonly energy: number;
  readonly health: number;
  readonly skill1: number;
  readonly skill2: number;
  readonly skill3: number;
  readonly skill4: number;
  readonly skill5: number;
}

export interface WarlordsWeaponSpec {
  readonly spec: number;
  readonly playerClass: number;
}

export interface WarlordsWeapon {
  readonly id: number;
  readonly spec: WarlordsWeaponSpec;
  readonly material: string;
  readonly category: string;
  readonly ability: number;
  readonly abilityBoost: number;
  readonly damage: number;
  readonly energy: number;
  readonly chance: number;
  readonly multiplier: number;
  readonly health: number;
  readonly cooldown: number;
  readonly movement: number;
  readonly crafted: boolean;
  readonly playStreak: boolean;
  readonly upgradeMax: number;
  readonly upgradeTimes: number;
}

export interface WarlordsCaptureTheFlagStats {
  readonly kills: number;
  readonly wins: number;
  readonly winsTeamA: number;
  readonly winsTeamB: number;
  readonly winsBlu: number;
  readonly winsRed: number;
  readonly flagConquerSelf: number;
  readonly flagConquerTeam: number;
  readonly flagReturns: number;
}

export interface WarlordsDominationStats {
  readonly kills: number;
  readonly wins: number;
  readonly winsTeamA: number;
  readonly winsTeamB: number;
  readonly winsBlu: number;
  readonly winsRed: number;
  readonly pointCaptures: number;
  readonly pointDefends: number;
  readonly totalScore: number;
}

export interface WarlordsTeamDeathmatchStats {
  readonly kills: number;
  readonly wins: number;
  readonly winsTeamA: number;
  readonly winsTeamB: number;
  readonly winsBlu: number;
  readonly winsRed: number;
}

export interface WarlordsModes {
  readonly captureTheFlag: WarlordsCaptureTheFlagStats;
  readonly domination: WarlordsDominationStats;
  readonly teamDeathmatch: WarlordsTeamDeathmatchStats;
}

export interface WarlordsLifeLeech {
  readonly total: number;
  readonly warrior: number;
  readonly berserker: number;
}

export interface WarlordsDamageDelayed {
  readonly total: number;
  readonly shaman: number;
  readonly spiritguard: number;
}

export interface WarlordsAbilities {
  readonly arcaneShatter: number;
  readonly burstChain: number;
  readonly dimensionalWarp: number;
  readonly flameBreath: number;
  readonly meteor: number;
}

export interface WarlordsCrafting {
  readonly crafted: number;
  readonly craftedRare: number;
  readonly craftedEpic: number;
  readonly craftedLegendary: number;
  readonly reroll: number;
  readonly rerollCommon: number;
  readonly rerollRare: number;
  readonly rerollEpic: number;
  readonly rerollLegendary: number;
  readonly upgradeCrafted: number;
  readonly upgradeCraftedEpic: number;
  readonly upgradeCraftedLegendary: number;
  readonly upgradeRandom: number;
  readonly upgradeRandomEpic: number;
  readonly upgradePlayStreak: number;
  readonly upgradePlayStreakEpic: number;
  readonly upgradePlayStreakLegendary: number;
  readonly unlockCrafted: number;
  readonly unlockCraftedLegendary: number;
  readonly unlockPlayStreak: number;
  readonly unlockPlayStreakLegendary: number;
}

export interface WarlordsRepair {
  readonly total: number;
  readonly common: number;
  readonly rare: number;
  readonly epic: number;
  readonly legendary: number;
}

export interface WarlordsSalvage {
  readonly weapons: number;
  readonly weaponsCommon: number;
  readonly weaponsRare: number;
  readonly weaponsEpic: number;
  readonly weaponsLegendary: number;
  readonly dustReward: number;
  readonly shardsReward: number;
}

export interface WarlordsChatOptions {
  readonly damage: string;
  readonly errorMessages: string;
  readonly heal: string;
  readonly killFeed: string;
  readonly misc: string;
}

export interface WarlordsLeaderboardSettings {
  readonly mode: string;
  readonly resetType: string;
}

export interface WarlordsPrivateGames {
  readonly teamSelector: boolean;
  readonly noRegeneration: boolean;
  readonly nobleSteeds: boolean;
  readonly weapon: string;
  readonly level: string;
  readonly horseSpeed: string;
  readonly health: string;
  readonly points: string;
}

const CLASSES = [
  "pyromancer",
  "mage",
  "thunderlord",
  "shaman",
  "earthwarden",
  "aquamancer",
  "paladin",
  "avenger",
  "warrior",
  "defender",
  "cryomancer",
  "crusader",
  "berserker",
  "protector",
  "revenant",
  "spiritguard",
] as const;

type WarlordsClassId = (typeof CLASSES)[number];

const BASE_CLASSES = ["mage", "warrior", "paladin", "shaman"] as const;

type WarlordsBaseClassId = (typeof BASE_CLASSES)[number];

type WarlordsMageSpec = "pyromancer" | "cryomancer" | "aquamancer";
type WarlordsWarriorSpec = "berserker" | "defender" | "revenant";
type WarlordsPaladinSpec = "avenger" | "crusader" | "protector";
type WarlordsShamanSpec = "thunderlord" | "earthwarden" | "spiritguard";
type WarlordsSpecClassId =
  | WarlordsMageSpec
  | WarlordsWarriorSpec
  | WarlordsPaladinSpec
  | WarlordsShamanSpec;

const SPEC_CLASSES = [
  "pyromancer",
  "cryomancer",
  "aquamancer",
  "berserker",
  "defender",
  "revenant",
  "avenger",
  "crusader",
  "protector",
  "thunderlord",
  "earthwarden",
  "spiritguard",
] as const;

export interface WarlordsBoundWeapons {
  readonly mage: Readonly<Record<WarlordsMageSpec, number>>;
  readonly warrior: Readonly<Record<WarlordsWarriorSpec, number>>;
  readonly paladin: Readonly<Record<WarlordsPaladinSpec, number>>;
  readonly shaman: Readonly<Record<WarlordsShamanSpec, number>>;
}

export interface WarlordsStats {
  readonly coins: number;
  readonly magicDust: number;
  readonly voidShards: number;
  readonly kills: number;
  readonly deaths: number;
  readonly assists: number;
  readonly wins: number;
  readonly losses: number;
  readonly winsBlu: number;
  readonly winsRed: number;
  readonly winStreak: number;
  readonly playStreak: number;
  readonly damage: number;
  readonly healing: number;
  readonly damagePrevented: number;
  readonly damageTaken: number;
  readonly penalty: number;
  readonly mvpCount: number;
  readonly powerupsCollected: number;
  readonly afkWarned: number;
  readonly brokenInventory: number;
  readonly legendaryBrokenInventory: number;
  readonly rewardInventory: number;
  readonly currentWeapon: number;
  readonly chosenClass: string;
  readonly selectedMount: string;
  readonly hints: boolean;
  readonly hotkeyMode: boolean;
  readonly hidePrestige: boolean;
  readonly firstDiscountUsed: boolean;
  readonly autoStrikeMode: boolean;
  readonly energyPowerups: boolean;
  readonly simplifiedResourcePack: boolean;
  readonly lifeLeech: WarlordsLifeLeech;
  readonly damageDelayed: WarlordsDamageDelayed;
  readonly abilities: WarlordsAbilities;
  readonly crafting: WarlordsCrafting;
  readonly repair: WarlordsRepair;
  readonly salvage: WarlordsSalvage;
  readonly modes: WarlordsModes;
  readonly classes: Readonly<Record<WarlordsClassId, WarlordsClassStats>>;
  readonly loadouts: Readonly<Record<WarlordsBaseClassId, WarlordsLoadout>>;
  readonly activeBoosts: Readonly<Record<WarlordsSpecClassId, string>>;
  readonly chatOptions: WarlordsChatOptions;
  readonly leaderboardSettings: WarlordsLeaderboardSettings;
  readonly privateGames: WarlordsPrivateGames;
  readonly weaponInventory: readonly WarlordsWeapon[];
  readonly boundWeapon: WarlordsBoundWeapons;
  readonly prestiged: readonly string[];
  readonly packages: readonly string[];
}

function parseClass(
  warlords: Record<string, unknown>,
  className: WarlordsClassId,
): WarlordsClassStats {
  return {
    wins: num(warlords, `wins_${className}`),
    losses: num(warlords, `losses_${className}`),
    gamesPlayed: num(warlords, `${className}_plays`),
    damage: num(warlords, `damage_${className}`),
    healing: num(warlords, `heal_${className}`),
    damagePrevented: num(warlords, `damage_prevented_${className}`),
  };
}

function parseLoadout(
  warlords: Record<string, unknown>,
  baseClass: WarlordsBaseClassId,
): WarlordsLoadout {
  return {
    spec: str(warlords, `${baseClass}_spec`),
    armorSelection: num(warlords, `${baseClass}_armor_selection`),
    helmetSelection: num(warlords, `${baseClass}_helmet_selection`),
    cooldown: num(warlords, `${baseClass}_cooldown`),
    critChance: num(warlords, `${baseClass}_critchance`),
    critMultiplier: num(warlords, `${baseClass}_critmultiplier`),
    energy: num(warlords, `${baseClass}_energy`),
    health: num(warlords, `${baseClass}_health`),
    skill1: num(warlords, `${baseClass}_skill1`),
    skill2: num(warlords, `${baseClass}_skill2`),
    skill3: num(warlords, `${baseClass}_skill3`),
    skill4: num(warlords, `${baseClass}_skill4`),
    skill5: num(warlords, `${baseClass}_skill5`),
  };
}

function parseWeapon(raw: Record<string, unknown>): WarlordsWeapon {
  const spec = obj(raw, "spec");
  return {
    id: num(raw, "id"),
    spec: {
      spec: num(spec, "spec"),
      playerClass: num(spec, "playerClass"),
    },
    material: str(raw, "material"),
    category: str(raw, "category"),
    ability: num(raw, "ability"),
    abilityBoost: num(raw, "abilityBoost"),
    damage: num(raw, "damage"),
    energy: num(raw, "energy"),
    chance: num(raw, "chance"),
    multiplier: num(raw, "multiplier"),
    health: num(raw, "health"),
    cooldown: num(raw, "cooldown"),
    movement: num(raw, "movement"),
    crafted: bool(raw, "crafted"),
    playStreak: bool(raw, "playStreak"),
    upgradeMax: num(raw, "upgradeMax"),
    upgradeTimes: num(raw, "upgradeTimes"),
  };
}

function parseWeaponInventory(
  warlords: Record<string, unknown>,
): readonly WarlordsWeapon[] {
  const value = warlords.weapon_inventory;
  return Array.isArray(value)
    ? value
        .filter(
          (entry): entry is Record<string, unknown> =>
            typeof entry === "object" &&
            entry !== null &&
            !Array.isArray(entry),
        )
        .map(parseWeapon)
    : [];
}

function parseBoundWeapons(
  warlords: Record<string, unknown>,
): WarlordsBoundWeapons {
  const root = obj(warlords, "bound_weapon");
  const mage = obj(root, "mage");
  const warrior = obj(root, "warrior");
  const paladin = obj(root, "paladin");
  const shaman = obj(root, "shaman");
  return {
    mage: {
      pyromancer: num(mage, "pyromancer"),
      cryomancer: num(mage, "cryomancer"),
      aquamancer: num(mage, "aquamancer"),
    },
    warrior: {
      berserker: num(warrior, "berserker"),
      defender: num(warrior, "defender"),
      revenant: num(warrior, "revenant"),
    },
    paladin: {
      avenger: num(paladin, "avenger"),
      crusader: num(paladin, "crusader"),
      protector: num(paladin, "protector"),
    },
    shaman: {
      thunderlord: num(shaman, "thunderlord"),
      earthwarden: num(shaman, "earthwarden"),
      spiritguard: num(shaman, "spiritguard"),
    },
  };
}

function parseActiveBoosts(
  warlords: Record<string, unknown>,
): Readonly<Record<WarlordsSpecClassId, string>> {
  const root = obj(warlords, "active_boost");
  const result = {} as Record<WarlordsSpecClassId, string>;
  for (const spec of SPEC_CLASSES) {
    result[spec] = str(root, spec);
  }
  return result;
}

function parseStringList(value: unknown): readonly string[] {
  return Array.isArray(value)
    ? value.filter((entry): entry is string => typeof entry === "string")
    : [];
}

/** Parses a player's Warlords stats (`stats.Battleground`) into a typed object. */
export function parseWarlords(
  stats: Record<string, unknown>,
): WarlordsStats | null {
  if (Object.keys(stats).length === 0) {
    return null;
  }
  const classes = {} as Record<WarlordsClassId, WarlordsClassStats>;
  for (const className of CLASSES) {
    classes[className] = parseClass(stats, className);
  }
  const loadouts = {} as Record<WarlordsBaseClassId, WarlordsLoadout>;
  for (const baseClass of BASE_CLASSES) {
    loadouts[baseClass] = parseLoadout(stats, baseClass);
  }
  const leaderboard = obj(stats, "leaderboardSettings");
  const privateGames = obj(stats, "privategames");
  return {
    coins: num(stats, "coins"),
    magicDust: num(stats, "magic_dust"),
    voidShards: num(stats, "void_shards"),
    kills: num(stats, "kills"),
    deaths: num(stats, "deaths"),
    assists: num(stats, "assists"),
    wins: num(stats, "wins"),
    losses: num(stats, "losses"),
    winsBlu: num(stats, "wins_blu"),
    winsRed: num(stats, "wins_red"),
    winStreak: num(stats, "win_streak"),
    playStreak: num(stats, "play_streak"),
    damage: num(stats, "damage"),
    healing: num(stats, "heal"),
    damagePrevented: num(stats, "damage_prevented"),
    damageTaken: num(stats, "damage_taken"),
    penalty: num(stats, "penalty"),
    mvpCount: num(stats, "mvp_count"),
    powerupsCollected: num(stats, "powerups_collected"),
    afkWarned: num(stats, "afk_warned"),
    brokenInventory: num(stats, "broken_inventory"),
    legendaryBrokenInventory: num(stats, "legendary_broken_inventory"),
    rewardInventory: num(stats, "reward_inventory"),
    currentWeapon: num(stats, "current_weapon"),
    chosenClass: str(stats, "chosen_class"),
    selectedMount: str(stats, "selected_mount"),
    hints: bool(stats, "hints"),
    hotkeyMode: bool(stats, "hotkeymode"),
    hidePrestige: bool(stats, "hide_prestige"),
    firstDiscountUsed: bool(stats, "first-discount-used"),
    autoStrikeMode: bool(stats, "autostrikemode"),
    energyPowerups: bool(stats, "energyPowerups"),
    simplifiedResourcePack: bool(stats, "simplifiedresourcepack"),
    lifeLeech: {
      total: num(stats, "life_leeched"),
      warrior: num(stats, "life_leeched_warrior"),
      berserker: num(stats, "life_leeched_berserker"),
    },
    damageDelayed: {
      total: num(stats, "damage_delayed"),
      shaman: num(stats, "damage_delayed_shaman"),
      spiritguard: num(stats, "damage_delayed_spiritguard"),
    },
    abilities: {
      arcaneShatter: num(stats, "arcane_shatter"),
      burstChain: num(stats, "burst_chain"),
      dimensionalWarp: num(stats, "dimensional_warp"),
      flameBreath: num(stats, "flame_breath"),
      meteor: num(stats, "meteor"),
    },
    crafting: {
      crafted: num(stats, "crafted"),
      craftedRare: num(stats, "crafted_rare"),
      craftedEpic: num(stats, "crafted_epic"),
      craftedLegendary: num(stats, "crafted_legendary"),
      reroll: num(stats, "reroll"),
      rerollCommon: num(stats, "reroll_common"),
      rerollRare: num(stats, "reroll_rare"),
      rerollEpic: num(stats, "reroll_epic"),
      rerollLegendary: num(stats, "reroll_legendary"),
      upgradeCrafted: num(stats, "upgrade_crafted"),
      upgradeCraftedEpic: num(stats, "upgrade_crafted_epic"),
      upgradeCraftedLegendary: num(stats, "upgrade_crafted_legendary"),
      upgradeRandom: num(stats, "upgrade_random"),
      upgradeRandomEpic: num(stats, "upgrade_random_epic"),
      upgradePlayStreak: num(stats, "upgrade_playstreak"),
      upgradePlayStreakEpic: num(stats, "upgrade_playstreak_epic"),
      upgradePlayStreakLegendary: num(stats, "upgrade_playstreak_legendary"),
      unlockCrafted: num(stats, "unlock_crafted"),
      unlockCraftedLegendary: num(stats, "unlock_crafted_legendary"),
      unlockPlayStreak: num(stats, "unlock_playstreak"),
      unlockPlayStreakLegendary: num(stats, "unlock_playstreak_legendary"),
    },
    repair: {
      total: num(stats, "repaired"),
      common: num(stats, "repaired_common"),
      rare: num(stats, "repaired_rare"),
      epic: num(stats, "repaired_epic"),
      legendary: num(stats, "repaired_legendary"),
    },
    salvage: {
      weapons: num(stats, "salvaged_weapons"),
      weaponsCommon: num(stats, "salvaged_weapons_common"),
      weaponsRare: num(stats, "salvaged_weapons_rare"),
      weaponsEpic: num(stats, "salvaged_weapons_epic"),
      weaponsLegendary: num(stats, "salvaged_weapons_legendary"),
      dustReward: num(stats, "salvaged_dust_reward"),
      shardsReward: num(stats, "salvaged_shards_reward"),
    },
    modes: {
      captureTheFlag: {
        kills: num(stats, "kills_capturetheflag"),
        wins: num(stats, "wins_capturetheflag"),
        winsTeamA: num(stats, "wins_capturetheflag_a"),
        winsTeamB: num(stats, "wins_capturetheflag_b"),
        winsBlu: num(stats, "wins_capturetheflag_blu"),
        winsRed: num(stats, "wins_capturetheflag_red"),
        flagConquerSelf: num(stats, "flag_conquer_self"),
        flagConquerTeam: num(stats, "flag_conquer_team"),
        flagReturns: num(stats, "flag_returns"),
      },
      domination: {
        kills: num(stats, "kills_domination"),
        wins: num(stats, "wins_domination"),
        winsTeamA: num(stats, "wins_domination_a"),
        winsTeamB: num(stats, "wins_domination_b"),
        winsBlu: num(stats, "wins_domination_blu"),
        winsRed: num(stats, "wins_domination_red"),
        pointCaptures: num(stats, "dom_point_captures"),
        pointDefends: num(stats, "dom_point_defends"),
        totalScore: num(stats, "total_domination_score"),
      },
      teamDeathmatch: {
        kills: num(stats, "kills_teamdeathmatch"),
        wins: num(stats, "wins_teamdeathmatch"),
        winsTeamA: num(stats, "wins_teamdeathmatch_a"),
        winsTeamB: num(stats, "wins_teamdeathmatch_b"),
        winsBlu: num(stats, "wins_teamdeathmatch_blu"),
        winsRed: num(stats, "wins_teamdeathmatch_red"),
      },
    },
    classes,
    loadouts,
    activeBoosts: parseActiveBoosts(stats),
    chatOptions: {
      damage: str(stats, "chat_option_damage"),
      errorMessages: str(stats, "chat_option_error_messages"),
      heal: str(stats, "chat_option_heal"),
      killFeed: str(stats, "chat_option_kill_feed"),
      misc: str(stats, "chat_option_misc"),
    },
    leaderboardSettings: {
      mode: str(leaderboard, "mode"),
      resetType: str(leaderboard, "resetType"),
    },
    privateGames: {
      teamSelector: bool(privateGames, "team_selector"),
      noRegeneration: bool(privateGames, "no_regeneration"),
      nobleSteeds: bool(privateGames, "noble_steeds"),
      weapon: str(privateGames, "weapon"),
      level: str(privateGames, "level"),
      horseSpeed: str(privateGames, "horse_speed"),
      health: str(privateGames, "health"),
      points: str(privateGames, "points"),
    },
    weaponInventory: parseWeaponInventory(stats),
    boundWeapon: parseBoundWeapons(stats),
    prestiged: parseStringList(stats.prestiged),
    packages: parseStringList(stats.packages),
  };
}

