import { num, str, bool, obj } from "./common";

export interface CopsAndCrimsGunStats {
  readonly damageIncrease: number;
  readonly recoilReduction: number;
  readonly reloadSpeedReduction: number;
  readonly costReduction: number;
  readonly kills: number;
  readonly headshots: number;
}

export interface CopsAndCrimsPistolStats {
  readonly damageIncrease: number;
  readonly recoilReduction: number;
  readonly reloadSpeedReduction: number;
  readonly kills: number;
  readonly headshots: number;
}

export interface CopsAndCrimsSniperStats {
  readonly damageIncrease: number;
  readonly reloadSpeedReduction: number;
  readonly costReduction: number;
  readonly kills: number;
  readonly headshots: number;
}

export interface CopsAndCrimsKnifeStats {
  readonly damageIncrease: number;
  readonly attackDelay: number;
  readonly kills: number;
}

export interface CopsAndCrimsGamemodeStats {
  readonly kills: number;
  readonly criminalKills: number;
  readonly copKills: number;
  readonly deaths: number;
  readonly wins: number;
  readonly assists: number;
  readonly gamePlays: number;
}

export interface CopsAndCrimsGungameStats extends CopsAndCrimsGamemodeStats {
  readonly armorPacksCollected: number;
  readonly carePackagesCollected: number;
  readonly speedBoostsCollected: number;
  readonly fastestWin: number;
}

export interface CopsAndCrimsTourneyStats {
  readonly kills: number;
  readonly criminalKills: number;
  readonly copKills: number;
  readonly deaths: number;
  readonly wins: number;
  readonly assists: number;
  readonly gamePlays: number;
  readonly roundWins: number;
  readonly bombsPlanted: number;
  readonly bombsDefused: number;
  readonly grenadeKills: number;
  readonly headshotKills: number;
  readonly shotsFired: number;
}

export interface CopsAndCrimsWinsByMap {
  readonly temple: number;
  readonly carrier: number;
  readonly atomic: number;
  readonly alleyway: number;
  readonly sandstorm: number;
  readonly reserve: number;
  readonly overgrown: number;
  readonly bazaar: number;
  readonly junction: number;
  readonly derailed: number;
  readonly castle: number;
  readonly ruins: number;
  readonly riviera: number;
  readonly harbor: number;
  readonly atomicV1: number;
  readonly atomicV2: number;
  readonly melonFactory: number;
  readonly melonFactoryV2: number;
  readonly melonfactory: number;
  readonly cobblestone: number;
  readonly test: number;
}

export interface CopsAndCrimsGuns {
  readonly smg: CopsAndCrimsGunStats;
  readonly rifle: CopsAndCrimsGunStats;
  readonly carbine: CopsAndCrimsGunStats;
  readonly magnum: CopsAndCrimsGunStats;
  readonly shotgun: CopsAndCrimsGunStats;
  readonly sniper: CopsAndCrimsSniperStats;
  readonly scopedRifle: CopsAndCrimsGunStats;
  readonly autoShotgun: CopsAndCrimsGunStats;
  readonly bullpup: CopsAndCrimsGunStats;
  readonly handgun: CopsAndCrimsGunStats;
  readonly pistol: CopsAndCrimsPistolStats;
  readonly knife: CopsAndCrimsKnifeStats;
}

export interface CopsAndCrimsSelectedCosmetics {
  readonly autoShotgun: string;
  readonly bullpup: string;
  readonly carbine: string;
  readonly creeperChestplate: string;
  readonly creeperHelmet: string;
  readonly handgun: string;
  readonly knife: string;
  readonly magnum: string;
  readonly ocelotChestplate: string;
  readonly ocelotHelmet: string;
  readonly pistol: string;
  readonly rifle: string;
  readonly scopedRifle: string;
  readonly shotgun: string;
  readonly smg: string;
}

export interface CopsAndCrimsUpgrades {
  readonly bodyArmorCost: number;
  readonly bountyHunter: number;
  readonly pocketChange: number;
  readonly strengthTraining: number;
}

export interface CopsAndCrimsSettings {
  readonly animatedSmoke: boolean;
  readonly defuseTipHologram: boolean;
  readonly hints: boolean;
  readonly moneyMessages: boolean;
  readonly screenTint: boolean;
  readonly spawnArea: boolean;
  readonly soundsBodyshot: boolean;
  readonly soundsHeadshot: boolean;
  readonly soundsDefuseProgress: boolean;
}

export interface CopsAndCrimsLeaderboardSettings {
  readonly mode: string;
  readonly resetType: string;
}

export interface CopsAndCrimsPrivateGames {
  readonly mcgoPrivateChallengeMode: boolean;
  readonly mcgoPrivateAfk: boolean;
  readonly mcgoPrivateGunUpgrades: boolean;
  readonly mcgoPrivateInfiniteAmmo: boolean;
  readonly mcgoPrivateInstakill: boolean;
  readonly mcgoPrivateMoneybags: boolean;
}

export interface CopsAndCrimsLegacyWeaponUpgrades {
  readonly ak47DamageIncrease: number;
  readonly ak47RecoilReduction: number;
  readonly ak47ReloadSpeedReduction: number;
  readonly ak47CostReduction: number;
  readonly uspDamageIncrease: number;
}

export interface CopsAndCrimsPerkBaseCoin {
  readonly kills: number;
  readonly assists: number;
  readonly allSources: number;
  readonly defusalRoundWins: number;
  readonly bombDefuses: number;
  readonly deathmatchChallenges: number;
  readonly bombPlants: number;
}

export interface CopsAndCrimsPerks {
  readonly baseCoin: CopsAndCrimsPerkBaseCoin;
}

export interface CopsAndCrimsMcgo {
  readonly points: number;
}

export interface CopsAndCrimsDatedSnapshots {
  readonly kills: Readonly<Record<string, number>>;
  readonly killsNew: Readonly<Record<string, number>>;
  readonly gamesWins: Readonly<Record<string, number>>;
}

export interface CopsAndCrimsStats {
  readonly coins: number;
  readonly score: number;
  readonly level: number;
  readonly kills: number;
  readonly killsNew: number;
  readonly criminalKills: number;
  readonly copKills: number;
  readonly assists: number;
  readonly headshotKills: number;
  readonly grenadeKills: number;
  readonly grenadeKillsAlt: number;
  readonly monthlyKillsA: number;
  readonly monthlyKillsB: number;
  readonly weeklyKillsA: number;
  readonly weeklyKillsB: number;
  readonly deaths: number;
  readonly wins: number;
  readonly roundWins: number;
  readonly gamePlays: number;
  readonly bombsPlanted: number;
  readonly bombsDefused: number;
  readonly shotsFired: number;
  readonly shoutTotal: number;
  readonly lastTourneyAd: number;
  readonly activeEmblem: string;
  readonly activeGlyph: string;
  readonly activeScheme: string;
  readonly selectedLobbyPrefix: string;
  readonly lobbyPrefixColor: string;
  readonly showLobbyPrefix: boolean;
  readonly showKillsInPrefix: boolean;
  readonly shopSort: string;
  readonly shopSortEnableOwnedFirst: boolean;
  readonly packages: readonly string[];
  readonly claimedLevelRewards: readonly number[];
  readonly settings: CopsAndCrimsSettings;
  readonly leaderboardSettings: CopsAndCrimsLeaderboardSettings;
  readonly privateGames: CopsAndCrimsPrivateGames;
  readonly legacyWeaponUpgrades: CopsAndCrimsLegacyWeaponUpgrades;
  readonly perks: CopsAndCrimsPerks;
  readonly upgrades: CopsAndCrimsUpgrades;
  readonly selected: CopsAndCrimsSelectedCosmetics;
  readonly mcgo: CopsAndCrimsMcgo;
  readonly datedSnapshots: CopsAndCrimsDatedSnapshots;
  readonly winsByMap: CopsAndCrimsWinsByMap;
  readonly guns: CopsAndCrimsGuns;
  readonly deathmatch: CopsAndCrimsGamemodeStats;
  readonly deathmatchParty: CopsAndCrimsGamemodeStats;
  readonly gungame: CopsAndCrimsGungameStats;
  readonly tourneyDefusalA: CopsAndCrimsTourneyStats;
  readonly tourneyDefusalB: CopsAndCrimsTourneyStats;
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

function numList(
  block: Record<string, unknown>,
  key: string,
): readonly number[] {
  const value = block[key];
  return Array.isArray(value)
    ? value.filter((item): item is number => typeof item === "number")
    : [];
}

function parseGun(
  block: Record<string, unknown>,
  snakeId: string,
  camelId: string,
): CopsAndCrimsGunStats {
  return {
    damageIncrease: num(block, `${snakeId}_damage_increase`),
    recoilReduction: num(block, `${snakeId}_recoil_reduction`),
    reloadSpeedReduction: num(block, `${snakeId}_reload_speed_reduction`),
    costReduction: num(block, `${snakeId}_cost_reduction`),
    kills: num(block, `${camelId}Kills`),
    headshots: num(block, `${camelId}Headshots`),
  };
}

function parsePistol(block: Record<string, unknown>): CopsAndCrimsPistolStats {
  return {
    damageIncrease: num(block, "pistol_damage_increase"),
    recoilReduction: num(block, "pistol_recoil_reduction"),
    reloadSpeedReduction: num(block, "pistol_reload_speed_reduction"),
    kills: num(block, "pistolKills"),
    headshots: num(block, "pistolHeadshots"),
  };
}

function parseSniper(block: Record<string, unknown>): CopsAndCrimsSniperStats {
  return {
    damageIncrease: num(block, "sniper_damage_increase"),
    reloadSpeedReduction: num(block, "sniper_reload_speed_reduction"),
    costReduction: num(block, "sniper_cost_reduction"),
    kills: num(block, "sniperKills"),
    headshots: num(block, "sniperHeadshots"),
  };
}

function parseKnife(block: Record<string, unknown>): CopsAndCrimsKnifeStats {
  return {
    damageIncrease: num(block, "knife_damage_increase"),
    attackDelay: num(block, "knife_attack_delay"),
    kills: num(block, "knife_kills"),
  };
}

function parseGamemode(
  block: Record<string, unknown>,
  mode: string,
): CopsAndCrimsGamemodeStats {
  return {
    kills: num(block, `kills_${mode}`),
    criminalKills: num(block, `criminal_kills_${mode}`),
    copKills: num(block, `cop_kills_${mode}`),
    deaths: num(block, `deaths_${mode}`),
    wins: num(block, `game_wins_${mode}`),
    assists: num(block, `assists_${mode}`),
    gamePlays: num(block, `game_plays_${mode}`),
  };
}

function parseGungame(
  block: Record<string, unknown>,
): CopsAndCrimsGungameStats {
  return {
    ...parseGamemode(block, "gungame"),
    armorPacksCollected: num(block, "armor_packs_collected_gungame"),
    carePackagesCollected: num(block, "care_packages_collected_gungame"),
    speedBoostsCollected: num(block, "speed_boosts_collected_gungame"),
    fastestWin: num(block, "fastest_win_gungame"),
  };
}

function parseTourney(
  block: Record<string, unknown>,
  suffix: string,
): CopsAndCrimsTourneyStats {
  return {
    kills: num(block, `kills_tourney_mcgo_defusal_${suffix}`),
    criminalKills: num(block, `criminal_kills_tourney_mcgo_defusal_${suffix}`),
    copKills: num(block, `cop_kills_tourney_mcgo_defusal_${suffix}`),
    deaths: num(block, `deaths_tourney_mcgo_defusal_${suffix}`),
    wins: num(block, `game_wins_tourney_mcgo_defusal_${suffix}`),
    assists: num(block, `assists_tourney_mcgo_defusal_${suffix}`),
    gamePlays: num(block, `game_plays_tourney_mcgo_defusal_${suffix}`),
    roundWins: num(block, `round_wins_tourney_mcgo_defusal_${suffix}`),
    bombsPlanted: num(block, `bombs_planted_tourney_mcgo_defusal_${suffix}`),
    bombsDefused: num(block, `bombs_defused_tourney_mcgo_defusal_${suffix}`),
    grenadeKills: num(block, `grenade_kills_tourney_mcgo_defusal_${suffix}`),
    headshotKills: num(block, `headshot_kills_tourney_mcgo_defusal_${suffix}`),
    shotsFired: num(block, `shots_fired_tourney_mcgo_defusal_${suffix}`),
  };
}

function parseWinsByMap(block: Record<string, unknown>): CopsAndCrimsWinsByMap {
  return {
    temple: num(block, "game_wins_temple"),
    carrier: num(block, "game_wins_carrier"),
    atomic: num(block, "game_wins_atomic"),
    alleyway: num(block, "game_wins_alleyway"),
    sandstorm: num(block, "game_wins_sandstorm"),
    reserve: num(block, "game_wins_reserve"),
    overgrown: num(block, "game_wins_overgrown"),
    bazaar: num(block, "game_wins_bazaar"),
    junction: num(block, "game_wins_junction"),
    derailed: num(block, "game_wins_derailed"),
    castle: num(block, "game_wins_castle"),
    ruins: num(block, "game_wins_ruins"),
    riviera: num(block, "game_wins_riviera"),
    harbor: num(block, "game_wins_harbor"),
    atomicV1: num(block, "game_wins_atomic v1"),
    atomicV2: num(block, "game_wins_atomic v2"),
    melonFactory: num(block, "game_wins_melon factory"),
    melonFactoryV2: num(block, "game_wins_melon factory v2"),
    melonfactory: num(block, "game_wins_melonfactory"),
    cobblestone: num(block, "game_wins_cobblestone"),
    test: num(block, "game_wins_test"),
  };
}

function parseGuns(block: Record<string, unknown>): CopsAndCrimsGuns {
  return {
    smg: parseGun(block, "smg", "smg"),
    rifle: parseGun(block, "rifle", "rifle"),
    carbine: parseGun(block, "carbine", "carbine"),
    magnum: parseGun(block, "magnum", "magnum"),
    shotgun: parseGun(block, "shotgun", "shotgun"),
    sniper: parseSniper(block),
    scopedRifle: parseGun(block, "scoped_rifle", "scopedRifle"),
    autoShotgun: parseGun(block, "auto_shotgun", "autoShotgun"),
    bullpup: parseGun(block, "bullpup", "bullpup"),
    handgun: parseGun(block, "handgun", "handgun"),
    pistol: parsePistol(block),
    knife: parseKnife(block),
  };
}

function parseSelected(
  block: Record<string, unknown>,
): CopsAndCrimsSelectedCosmetics {
  return {
    autoShotgun: str(block, "selectedAutoShotgunDev"),
    bullpup: str(block, "selectedBullpupDev"),
    carbine: str(block, "selectedCarbineDev"),
    creeperChestplate: str(block, "selectedCreeperChestplateDev"),
    creeperHelmet: str(block, "selectedCreeperHelmetDev"),
    handgun: str(block, "selectedHandgunDev"),
    knife: str(block, "selectedKnifeDev"),
    magnum: str(block, "selectedMagnumDev"),
    ocelotChestplate: str(block, "selectedOcelotChestplateDev"),
    ocelotHelmet: str(block, "selectedOcelotHelmetDev"),
    pistol: str(block, "selectedPistolDev"),
    rifle: str(block, "selectedRifleDev"),
    scopedRifle: str(block, "selectedScopedRifleDev"),
    shotgun: str(block, "selectedShotgunDev"),
    smg: str(block, "selectedSmgDev"),
  };
}

function parseUpgrades(block: Record<string, unknown>): CopsAndCrimsUpgrades {
  return {
    bodyArmorCost: num(block, "body_armor_cost"),
    bountyHunter: num(block, "bounty_hunter"),
    pocketChange: num(block, "pocket_change"),
    strengthTraining: num(block, "strength_training"),
  };
}

function parseSettings(block: Record<string, unknown>): CopsAndCrimsSettings {
  return {
    animatedSmoke: bool(block, "setting_animated_smoke"),
    defuseTipHologram: bool(block, "setting_defuse_tip_hologram"),
    hints: bool(block, "setting_hints"),
    moneyMessages: bool(block, "setting_money_messages"),
    screenTint: bool(block, "setting_screen_tint"),
    spawnArea: bool(block, "setting_spawn_area"),
    soundsBodyshot: bool(block, "setting_sounds_bodyshot"),
    soundsHeadshot: bool(block, "setting_sounds_headshot"),
    soundsDefuseProgress: bool(block, "setting_sounds_defuse_progress"),
  };
}

function parseLeaderboardSettings(
  block: Record<string, unknown>,
): CopsAndCrimsLeaderboardSettings {
  const settings = obj(block, "leaderboardSettings");
  return {
    mode: str(settings, "mode"),
    resetType: str(settings, "resetType"),
  };
}

function parsePrivateGames(
  block: Record<string, unknown>,
): CopsAndCrimsPrivateGames {
  const privategames = obj(block, "privategames");
  return {
    mcgoPrivateChallengeMode: bool(privategames, "mcgo_private_challenge_mode"),
    mcgoPrivateAfk: bool(privategames, "mcgo_private_afk"),
    mcgoPrivateGunUpgrades: bool(privategames, "mcgo_private_gun_upgrades"),
    mcgoPrivateInfiniteAmmo: bool(privategames, "mcgo_private_infinite_ammo"),
    mcgoPrivateInstakill: bool(privategames, "mcgo_private_instakill"),
    mcgoPrivateMoneybags: bool(privategames, "mcgo_private_moneybags"),
  };
}

function parseLegacyWeaponUpgrades(
  block: Record<string, unknown>,
): CopsAndCrimsLegacyWeaponUpgrades {
  return {
    ak47DamageIncrease: num(block, "ak_47_damage_increase"),
    ak47RecoilReduction: num(block, "ak_47_recoil_reduction"),
    ak47ReloadSpeedReduction: num(block, "ak_47_reload_speed_reduction"),
    ak47CostReduction: num(block, "ak_47_cost_reduction"),
    uspDamageIncrease: num(block, "usp_damage_increase"),
  };
}

function parsePerks(block: Record<string, unknown>): CopsAndCrimsPerks {
  const baseCoin = obj(obj(block, "perk"), "base_coin");
  return {
    baseCoin: {
      kills: num(baseCoin, "kills"),
      assists: num(baseCoin, "assists"),
      allSources: num(baseCoin, "all_sources"),
      defusalRoundWins: num(baseCoin, "defusal_round_wins"),
      bombDefuses: num(baseCoin, "bomb_defuses"),
      deathmatchChallenges: num(baseCoin, "deathmatch_challenges"),
      bombPlants: num(baseCoin, "bomb_plants"),
    },
  };
}

function parseMcgo(block: Record<string, unknown>): CopsAndCrimsMcgo {
  return {
    points: num(obj(block, "mcgo"), "points"),
  };
}

function parseDatedMap(
  block: Record<string, unknown>,
  prefix: string,
): Readonly<Record<string, number>> {
  const pattern = new RegExp(String.raw`^${prefix}_(\d+_)?\d+_2014$`);
  const out: Record<string, number> = {};
  for (const key of Object.keys(block)) {
    if (pattern.test(key) && typeof block[key] === "number") {
      out[key.slice(prefix.length + 1)] = block[key];
    }
  }
  return out;
}

function parseDatedSnapshots(
  block: Record<string, unknown>,
): CopsAndCrimsDatedSnapshots {
  return {
    kills: parseDatedMap(block, "kills"),
    killsNew: parseDatedMap(block, "killsNew"),
    gamesWins: parseDatedMap(block, "games_wins"),
  };
}

/** Parses a player's Cops and Crims stats (`stats.MCGO`) into a typed object. */
export function parseCopsAndCrims(
  stats: Record<string, unknown>,
): CopsAndCrimsStats | null {
  const raw = stats.MCGO;
  if (typeof raw !== "object" || raw === null || Array.isArray(raw)) {
    return null;
  }
  const block = raw as Record<string, unknown>;
  return {
    coins: num(block, "coins"),
    score: num(block, "score"),
    level: num(block, "level"),
    kills: num(block, "kills"),
    killsNew: num(block, "killsNew"),
    criminalKills: num(block, "criminal_kills"),
    copKills: num(block, "cop_kills"),
    assists: num(block, "assists"),
    headshotKills: num(block, "headshot_kills"),
    grenadeKills: num(block, "grenade_kills"),
    grenadeKillsAlt: num(block, "grenadeKills"),
    monthlyKillsA: num(block, "monthly_kills_a"),
    monthlyKillsB: num(block, "monthly_kills_b"),
    weeklyKillsA: num(block, "weekly_kills_a"),
    weeklyKillsB: num(block, "weekly_kills_b"),
    deaths: num(block, "deaths"),
    wins: num(block, "game_wins"),
    roundWins: num(block, "round_wins"),
    gamePlays: num(block, "game_plays"),
    bombsPlanted: num(block, "bombs_planted"),
    bombsDefused: num(block, "bombs_defused"),
    shotsFired: num(block, "shots_fired"),
    shoutTotal: num(block, "shoutTotal"),
    lastTourneyAd: num(block, "lastTourneyAd"),
    activeEmblem: str(block, "active_emblem"),
    activeGlyph: str(block, "active_glyph"),
    activeScheme: str(block, "active_scheme"),
    selectedLobbyPrefix: str(block, "selected_lobby_prefix"),
    lobbyPrefixColor: str(block, "lobbyPrefixColor"),
    showLobbyPrefix: bool(block, "show_lobby_prefix"),
    showKillsInPrefix: bool(block, "show_kills_in_prefix"),
    shopSort: str(block, "shop_sort"),
    shopSortEnableOwnedFirst: bool(block, "shop_sort_enable_owned_first"),
    packages: strList(block, "packages"),
    claimedLevelRewards: numList(block, "claimed_level_rewards"),
    settings: parseSettings(block),
    leaderboardSettings: parseLeaderboardSettings(block),
    privateGames: parsePrivateGames(block),
    legacyWeaponUpgrades: parseLegacyWeaponUpgrades(block),
    perks: parsePerks(block),
    upgrades: parseUpgrades(block),
    selected: parseSelected(block),
    mcgo: parseMcgo(block),
    datedSnapshots: parseDatedSnapshots(block),
    winsByMap: parseWinsByMap(block),
    guns: parseGuns(block),
    deathmatch: parseGamemode(block, "deathmatch"),
    deathmatchParty: parseGamemode(block, "deathmatch_party"),
    gungame: parseGungame(block),
    tourneyDefusalA: parseTourney(block, "0"),
    tourneyDefusalB: parseTourney(block, "1"),
  };
}

