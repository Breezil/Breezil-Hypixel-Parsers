import { num, str, bool, obj, date } from "./common";

export interface WoolGamesLeaderboardSettings {
  readonly mode: string;
  readonly resetType: string;
}

export interface WoolGamesProgression {
  readonly availableLayers: number;
  readonly experience: number;
}

export interface WoolGamesPrivateGames {
  readonly blockPlace: boolean;
  readonly gameSpeed: string;
  readonly healthBuff: string;
  readonly jumpBoost: string;
  readonly magicWoolSpawnRate: string;
  readonly mapDestructibility: string;
  readonly noBlockBreak: boolean;
  readonly noClass: boolean;
  readonly noKits: boolean;
  readonly noPowerups: boolean;
  readonly oneHitOneKill: boolean;
  readonly rainbowWool: boolean;
  readonly respawnEnable: boolean;
  readonly sheepSpawnRate: string;
  readonly speed: string;
}

export interface WoolWarsOverallStats {
  readonly gamesPlayed: number;
  readonly wins: number;
  readonly kills: number;
  readonly deaths: number;
  readonly assists: number;
  readonly powerupsGotten: number;
  readonly woolPlaced: number;
  readonly blocksBroken: number;
}

export interface WoolWarsClassStats {
  readonly gamesPlayed: number;
  readonly wins: number;
  readonly kills: number;
  readonly deaths: number;
  readonly assists: number;
  readonly woolPlaced: number;
  readonly blocksBroken: number;
  readonly powerupsGotten: number;
}

export interface WoolWarsTourneyStats {
  readonly gamesPlayed: number;
  readonly wins: number;
  readonly kills: number;
  readonly deaths: number;
  readonly assists: number;
  readonly woolPlaced: number;
  readonly blocksBroken: number;
  readonly powerupsGotten: number;
}

export interface WoolWarsSettings {
  readonly preroundBow: boolean;
  readonly preroundPotion: boolean;
}

export interface WoolWarsStats {
  readonly selectedClass: string;
  readonly settings: WoolWarsSettings;
  readonly stats: WoolWarsOverallStats;
  readonly classes: Readonly<Record<string, WoolWarsClassStats>>;
  readonly tourney: Readonly<Record<string, WoolWarsTourneyStats>>;
  readonly layouts: Readonly<Record<string, Readonly<Record<string, string>>>>;
}

export interface SheepWarsOverallStats {
  readonly gamesPlayed: number;
  readonly wins: number;
  readonly losses: number;
  readonly kills: number;
  readonly killsBow: number;
  readonly killsExplosive: number;
  readonly killsMelee: number;
  readonly killsVoid: number;
  readonly deaths: number;
  readonly deathsBow: number;
  readonly deathsExplosive: number;
  readonly deathsMelee: number;
  readonly deathsVoid: number;
  readonly damageDealt: number;
  readonly sheepThrown: number;
  readonly magicWoolHit: number;
}

export interface SheepWarsLayout {
  readonly opened: boolean;
  readonly slot: Readonly<Record<string, string>>;
}

export interface SheepWarsSettings {
  readonly projectileTrail: string;
}

export interface SheepWarsStats {
  readonly defaultKit: string;
  readonly settings: SheepWarsSettings;
  readonly stats: SheepWarsOverallStats;
  readonly layout: SheepWarsLayout;
}

export interface SheepWarsLegacyLayout {
  readonly opened: boolean;
}

export interface SheepWarsLegacyStats {
  readonly layout: SheepWarsLegacyLayout;
}

export interface CaptureTheWoolSettings {
  readonly showAllKillfeed: boolean;
  readonly showEnemyWoolDropped: boolean;
  readonly showEnemyWoolPickedUp: boolean;
  readonly showOwnWoolDropped: boolean;
  readonly showOwnWoolPickedUp: boolean;
  readonly showTipHologram: boolean;
  readonly showTips: boolean;
  readonly showTutorialBook: boolean;
}

export interface CaptureTheWoolOverallStats {
  readonly participatedWins: number;
  readonly participatedLosses: number;
  readonly participatedDraws: number;
  readonly experiencedWins: number;
  readonly experiencedLosses: number;
  readonly experiencedDraws: number;
  readonly kills: number;
  readonly deaths: number;
  readonly assists: number;
  readonly killsWithWool: number;
  readonly deathsWithWool: number;
  readonly killsOnWoolholder: number;
  readonly deathsToWoolholder: number;
  readonly woolsCaptured: number;
  readonly woolsStolen: number;
  readonly goldEarned: number;
  readonly goldSpent: number;
  readonly mostGoldEarned: number;
  readonly mostKillsAndAssists: number;
  readonly fastestWin: number;
  readonly fastestWoolCapture: number;
  readonly longestGame: number;
}

export interface CaptureTheWoolStats {
  readonly settings: CaptureTheWoolSettings;
  readonly stats: CaptureTheWoolOverallStats;
  readonly layout: Readonly<Record<string, number>>;
}

export interface WoolGamesStats {
  readonly coins: number;
  readonly dataMigrationVersion: number;
  readonly playtime: number;
  readonly lastTourneyAd: Date | null;
  readonly hat: string;
  readonly cage: string;
  readonly glyph: string;
  readonly barrier: string;
  readonly deathcry: string;
  readonly killmessages: string;
  readonly preroundBow: string;
  readonly projectileTrail: string;
  readonly woolWarsPrestigeIcon: string;
  readonly shopSort: string;
  readonly shopSortEnableOwnedFirst: boolean;
  readonly packages: readonly string[];
  readonly leaderboardSettings: WoolGamesLeaderboardSettings;
  readonly privateGames: WoolGamesPrivateGames;
  readonly progression: WoolGamesProgression;
  readonly woolWars: WoolWarsStats;
  readonly sheepWars: SheepWarsStats;
  readonly sheepWarsLegacy: SheepWarsLegacyStats;
  readonly captureTheWool: CaptureTheWoolStats;
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

function strMap(
  value: Record<string, unknown>,
): Readonly<Record<string, string>> {
  const result: Record<string, string> = {};
  for (const [slot, item] of Object.entries(value)) {
    if (typeof item === "string") {
      result[slot] = item;
    }
  }
  return result;
}

function numMap(
  value: Record<string, unknown>,
): Readonly<Record<string, number>> {
  const result: Record<string, number> = {};
  for (const [slot, item] of Object.entries(value)) {
    if (typeof item === "number") {
      result[slot] = item;
    }
  }
  return result;
}

function parseLeaderboardSettings(
  woolGames: Record<string, unknown>,
): WoolGamesLeaderboardSettings {
  const settings = obj(woolGames, "leaderboardSettings");
  return {
    mode: str(settings, "mode"),
    resetType: str(settings, "resetType"),
  };
}

function parsePrivateGames(
  woolGames: Record<string, unknown>,
): WoolGamesPrivateGames {
  const privateGames = obj(woolGames, "privategames");
  return {
    blockPlace: bool(privateGames, "block_place"),
    gameSpeed: str(privateGames, "game_speed"),
    healthBuff: str(privateGames, "health_buff"),
    jumpBoost: str(privateGames, "jump_boost"),
    magicWoolSpawnRate: str(privateGames, "magic_wool_spawn_rate"),
    mapDestructibility: str(privateGames, "map_destructibility"),
    noBlockBreak: bool(privateGames, "no_block_break"),
    noClass: bool(privateGames, "no_class"),
    noKits: bool(privateGames, "no_kits"),
    noPowerups: bool(privateGames, "no_powerups"),
    oneHitOneKill: bool(privateGames, "one_hit_one_kill"),
    rainbowWool: bool(privateGames, "rainbow_wool"),
    respawnEnable: bool(privateGames, "respawn_enable"),
    sheepSpawnRate: str(privateGames, "sheep_spawn_rate"),
    speed: str(privateGames, "speed"),
  };
}

function parseProgression(
  woolGames: Record<string, unknown>,
): WoolGamesProgression {
  const progression = obj(woolGames, "progression");
  return {
    availableLayers: num(progression, "available_layers"),
    experience: num(progression, "experience"),
  };
}

function parseWoolWarsOverall(
  stats: Record<string, unknown>,
): WoolWarsOverallStats {
  return {
    gamesPlayed: num(stats, "games_played"),
    wins: num(stats, "wins"),
    kills: num(stats, "kills"),
    deaths: num(stats, "deaths"),
    assists: num(stats, "assists"),
    powerupsGotten: num(stats, "powerups_gotten"),
    woolPlaced: num(stats, "wool_placed"),
    blocksBroken: num(stats, "blocks_broken"),
  };
}

function parseWoolWarsClasses(
  stats: Record<string, unknown>,
): Readonly<Record<string, WoolWarsClassStats>> {
  const classes = obj(stats, "classes");
  const result: Record<string, WoolWarsClassStats> = {};
  for (const name of Object.keys(classes)) {
    const entry = obj(classes, name);
    result[name] = {
      gamesPlayed: num(entry, "games_played"),
      wins: num(entry, "wins"),
      kills: num(entry, "kills"),
      deaths: num(entry, "deaths"),
      assists: num(entry, "assists"),
      woolPlaced: num(entry, "wool_placed"),
      blocksBroken: num(entry, "blocks_broken"),
      powerupsGotten: num(entry, "powerups_gotten"),
    };
  }
  return result;
}

function parseWoolWarsTourney(
  stats: Record<string, unknown>,
): Readonly<Record<string, WoolWarsTourneyStats>> {
  const tourney = obj(stats, "tourney");
  const result: Record<string, WoolWarsTourneyStats> = {};
  for (const id of Object.keys(tourney)) {
    const entry = obj(tourney, id);
    result[id] = {
      gamesPlayed: num(entry, "games_played"),
      wins: num(entry, "wins"),
      kills: num(entry, "kills"),
      deaths: num(entry, "deaths"),
      assists: num(entry, "assists"),
      woolPlaced: num(entry, "wool_placed"),
      blocksBroken: num(entry, "blocks_broken"),
      powerupsGotten: num(entry, "powerups_gotten"),
    };
  }
  return result;
}

function parseWoolWarsLayouts(
  woolWars: Record<string, unknown>,
): Readonly<Record<string, Readonly<Record<string, string>>>> {
  const layouts = obj(woolWars, "layouts");
  const result: Record<string, Readonly<Record<string, string>>> = {};
  for (const name of Object.keys(layouts)) {
    result[name] = strMap(obj(layouts, name));
  }
  return result;
}

function parseWoolWars(woolGames: Record<string, unknown>): WoolWarsStats {
  const woolWars = obj(woolGames, "wool_wars");
  const stats = obj(woolWars, "stats");
  const settings = obj(woolWars, "settings");
  return {
    selectedClass: str(woolWars, "selected_class"),
    settings: {
      preroundBow: bool(settings, "preround_bow"),
      preroundPotion: bool(settings, "preround_potion"),
    },
    stats: parseWoolWarsOverall(stats),
    classes: parseWoolWarsClasses(stats),
    tourney: parseWoolWarsTourney(stats),
    layouts: parseWoolWarsLayouts(woolWars),
  };
}

function parseSheepWars(woolGames: Record<string, unknown>): SheepWarsStats {
  const sheepWars = obj(woolGames, "sheep_wars");
  const stats = obj(sheepWars, "stats");
  const settings = obj(sheepWars, "settings");
  const layout = obj(sheepWars, "layout");
  return {
    defaultKit: str(sheepWars, "default_kit"),
    settings: {
      projectileTrail: str(settings, "projectile_trail"),
    },
    stats: {
      gamesPlayed: num(stats, "games_played"),
      wins: num(stats, "wins"),
      losses: num(stats, "losses"),
      kills: num(stats, "kills"),
      killsBow: num(stats, "kills_bow"),
      killsExplosive: num(stats, "kills_explosive"),
      killsMelee: num(stats, "kills_melee"),
      killsVoid: num(stats, "kills_void"),
      deaths: num(stats, "deaths"),
      deathsBow: num(stats, "deaths_bow"),
      deathsExplosive: num(stats, "deaths_explosive"),
      deathsMelee: num(stats, "deaths_melee"),
      deathsVoid: num(stats, "deaths_void"),
      damageDealt: num(stats, "damage_dealt"),
      sheepThrown: num(stats, "sheep_thrown"),
      magicWoolHit: num(stats, "magic_wool_hit"),
    },
    layout: {
      opened: bool(layout, "opened"),
      slot: strMap(obj(layout, "slot")),
    },
  };
}

function parseSheepWarsLegacy(
  woolGames: Record<string, unknown>,
): SheepWarsLegacyStats {
  const sheepWars = obj(woolGames, "sheepwars");
  const layout = obj(sheepWars, "layout");
  return {
    layout: {
      opened: bool(layout, "opened"),
    },
  };
}

function parseCaptureTheWool(
  woolGames: Record<string, unknown>,
): CaptureTheWoolStats {
  const captureTheWool = obj(woolGames, "capture_the_wool");
  const settings = obj(captureTheWool, "settings");
  const stats = obj(captureTheWool, "stats");
  return {
    settings: {
      showAllKillfeed: bool(settings, "show_all_killfeed"),
      showEnemyWoolDropped: bool(settings, "show_enemy_wool_dropped"),
      showEnemyWoolPickedUp: bool(settings, "show_enemy_wool_picked_up"),
      showOwnWoolDropped: bool(settings, "show_own_wool_dropped"),
      showOwnWoolPickedUp: bool(settings, "show_own_wool_picked_up"),
      showTipHologram: bool(settings, "show_tip_hologram"),
      showTips: bool(settings, "show_tips"),
      showTutorialBook: bool(settings, "show_tutorial_book"),
    },
    stats: {
      participatedWins: num(stats, "participated_wins"),
      participatedLosses: num(stats, "participated_losses"),
      participatedDraws: num(stats, "participated_draws"),
      experiencedWins: num(stats, "experienced_wins"),
      experiencedLosses: num(stats, "experienced_losses"),
      experiencedDraws: num(stats, "experienced_draws"),
      kills: num(stats, "kills"),
      deaths: num(stats, "deaths"),
      assists: num(stats, "assists"),
      killsWithWool: num(stats, "kills_with_wool"),
      deathsWithWool: num(stats, "deaths_with_wool"),
      killsOnWoolholder: num(stats, "kills_on_woolholder"),
      deathsToWoolholder: num(stats, "deaths_to_woolholder"),
      woolsCaptured: num(stats, "wools_captured"),
      woolsStolen: num(stats, "wools_stolen"),
      goldEarned: num(stats, "gold_earned"),
      goldSpent: num(stats, "gold_spent"),
      mostGoldEarned: num(stats, "most_gold_earned"),
      mostKillsAndAssists: num(stats, "most_kills_and_assists"),
      fastestWin: num(stats, "fastest_win"),
      fastestWoolCapture: num(stats, "fastest_wool_capture"),
      longestGame: num(stats, "longest_game"),
    },
    layout: numMap(obj(captureTheWool, "layout")),
  };
}

/** Parses a player's WoolGames stats (`stats.WoolGames`) into a typed object. */
export function parseWoolGames(
  block: Record<string, unknown>,
): WoolGamesStats | null {
  if (Object.keys(block).length === 0) {
    return null;
  }
  return {
    coins: num(block, "coins"),
    dataMigrationVersion: num(block, "data_migration_version"),
    playtime: num(block, "playtime"),
    lastTourneyAd: date(block, "lastTourneyAd"),
    hat: str(block, "hat"),
    cage: str(block, "cage"),
    glyph: str(block, "glyph"),
    barrier: str(block, "barrier"),
    deathcry: str(block, "deathcry"),
    killmessages: str(block, "killmessages"),
    preroundBow: str(block, "preround_bow"),
    projectileTrail: str(block, "projectiletrail"),
    woolWarsPrestigeIcon: str(block, "wool_wars_prestige_icon"),
    shopSort: str(block, "shop_sort"),
    shopSortEnableOwnedFirst: bool(block, "shop_sort_enable_owned_first"),
    packages: strList(block, "packages"),
    leaderboardSettings: parseLeaderboardSettings(block),
    privateGames: parsePrivateGames(block),
    progression: parseProgression(block),
    woolWars: parseWoolWars(block),
    sheepWars: parseSheepWars(block),
    sheepWarsLegacy: parseSheepWarsLegacy(block),
    captureTheWool: parseCaptureTheWool(block),
  };
}

