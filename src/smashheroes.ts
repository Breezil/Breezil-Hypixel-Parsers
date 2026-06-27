import { bool, date, num, obj, str } from "./common";

export interface SmashHeroesModeStats {
  readonly games: number;
  readonly wins: number;
  readonly losses: number;
  readonly kills: number;
  readonly deaths: number;
  readonly smashed: number;
  readonly smasher: number;
  readonly damageDealt: number;
}

export interface SmashHeroesPeriodStats {
  readonly games: number;
  readonly wins: number;
  readonly losses: number;
  readonly kills: number;
}

export interface SmashHeroesPeriodPair {
  readonly a: SmashHeroesPeriodStats;
  readonly b: SmashHeroesPeriodStats;
}

export interface SmashHeroesHeroLevelBooster {
  readonly key: string;
  readonly multiplier: number;
  readonly value: number;
  readonly plays: number;
}

export interface SmashHeroesAbilityModeStats {
  readonly kills: number;
  readonly smashed: number;
  readonly smasher: number;
  readonly damageDealt: number;
}

export interface SmashHeroesAbilityStats {
  readonly overall: SmashHeroesAbilityModeStats;
  readonly normal: SmashHeroesAbilityModeStats;
  readonly twoVsTwo: SmashHeroesAbilityModeStats;
  readonly threeVsThree: SmashHeroesAbilityModeStats;
  readonly teams: SmashHeroesAbilityModeStats;
}

export interface SmashHeroesHeroModeStats {
  readonly games: number;
  readonly wins: number;
  readonly losses: number;
  readonly kills: number;
  readonly deaths: number;
  readonly smashed: number;
  readonly smasher: number;
  readonly damageDealt: number;
  readonly winStreak: number;
}

export interface SmashHeroesHeroStats {
  readonly hero: string;
  readonly lastLevel: number;
  readonly experience: number;
  readonly prestige: number;
  readonly overall: SmashHeroesHeroModeStats;
  readonly normal: SmashHeroesHeroModeStats;
  readonly twoVsTwo: SmashHeroesHeroModeStats;
  readonly threeVsThree: SmashHeroesHeroModeStats;
  readonly teams: SmashHeroesHeroModeStats;
  readonly friendWins: number;
  readonly friendWinsNormal: number;
  readonly friendLosses: number;
  readonly friendLossesNormal: number;
  readonly oneVOneWins: number;
  readonly oneVOneWinsNormal: number;
  readonly oneVOneLosses: number;
  readonly oneVOneLossesNormal: number;
  readonly masterArmor: boolean;
  readonly abilities: Readonly<Record<string, SmashHeroesAbilityStats>>;
}

export interface SmashHeroesLeaderboardSettings {
  readonly resetType: string;
  readonly mode: string;
}

export interface SmashHeroesStats {
  readonly coins: number;
  readonly smashLevel: number;
  readonly smashLevelTotal: number;
  readonly winStreak: number;
  readonly activeClass: string;
  readonly quits: number;
  readonly smashPlayStreak: number;
  readonly expiredBooster: boolean;
  readonly expBoosterPurchases10Plays: number;
  readonly expBoosterPurchases30Plays: number;
  readonly expBoosterPurchases50Plays: number;
  readonly expBoosterPurchases100Plays: number;
  readonly friendsFirstGame: Date | null;
  readonly friendsGamesDay: number;
  readonly oneVJuanFirstGame: Date | null;
  readonly oneVJuanGamesDay: number;
  readonly games: number;
  readonly wins: number;
  readonly losses: number;
  readonly kills: number;
  readonly deaths: number;
  readonly assists: number;
  readonly assistsNormal: number;
  readonly smashed: number;
  readonly smasher: number;
  readonly damageDealt: number;
  readonly friendWins: number;
  readonly friendWinsNormal: number;
  readonly friendLosses: number;
  readonly friendLossesNormal: number;
  readonly oneVOneWins: number;
  readonly oneVOneWinsNormal: number;
  readonly oneVOneLosses: number;
  readonly oneVOneLossesNormal: number;
  readonly packages: readonly string[];
  readonly classes: Readonly<Record<string, boolean>>;
  readonly leaderboardSettings: SmashHeroesLeaderboardSettings;
  readonly heroLevelBoosterActive: SmashHeroesHeroLevelBooster;
  readonly votes: Readonly<Record<string, number>>;
  readonly normal: SmashHeroesModeStats;
  readonly twoVsTwo: SmashHeroesModeStats;
  readonly threeVsThree: SmashHeroesModeStats;
  readonly teams: SmashHeroesModeStats;
  readonly monthly: SmashHeroesPeriodPair;
  readonly weekly: SmashHeroesPeriodPair;
  readonly heroes: Readonly<Record<string, SmashHeroesHeroStats>>;
}

const MODE_SUFFIX = {
  normal: "normal",
  twoVsTwo: "2v2",
  threeVsThree: "3v3",
  teams: "teams",
} as const;

type SmashHeroesMode = keyof typeof MODE_SUFFIX;

const modeKey = (base: string, suffix: string): string =>
  suffix === "" ? base : `${base}_${suffix}`;

function parseMode(
  smashHeroes: Record<string, unknown>,
  suffix: string,
): SmashHeroesModeStats {
  return {
    games: num(smashHeroes, modeKey("games", suffix)),
    wins: num(smashHeroes, modeKey("wins", suffix)),
    losses: num(smashHeroes, modeKey("losses", suffix)),
    kills: num(smashHeroes, modeKey("kills", suffix)),
    deaths: num(smashHeroes, modeKey("deaths", suffix)),
    smashed: num(smashHeroes, modeKey("smashed", suffix)),
    smasher: num(smashHeroes, modeKey("smasher", suffix)),
    damageDealt: num(smashHeroes, modeKey("damage_dealt", suffix)),
  };
}

function parsePeriod(
  smashHeroes: Record<string, unknown>,
  suffix: string,
): SmashHeroesPeriodStats {
  return {
    games: num(smashHeroes, `games_${suffix}`),
    wins: num(smashHeroes, `wins_${suffix}`),
    losses: num(smashHeroes, `losses_${suffix}`),
    kills: num(smashHeroes, `kills_${suffix}`),
  };
}

function parseAbilityMode(
  ability: Record<string, unknown>,
  suffix: string,
): SmashHeroesAbilityModeStats {
  return {
    kills: num(ability, modeKey("kills", suffix)),
    smashed: num(ability, modeKey("smashed", suffix)),
    smasher: num(ability, modeKey("smasher", suffix)),
    damageDealt: num(ability, modeKey("damage_dealt", suffix)),
  };
}

function parseAbility(
  ability: Record<string, unknown>,
): SmashHeroesAbilityStats {
  return {
    overall: parseAbilityMode(ability, ""),
    normal: parseAbilityMode(ability, "normal"),
    twoVsTwo: parseAbilityMode(ability, "2v2"),
    threeVsThree: parseAbilityMode(ability, "3v3"),
    teams: parseAbilityMode(ability, "teams"),
  };
}

function parseHeroMode(
  classStats: Record<string, unknown>,
  suffix: string,
): SmashHeroesHeroModeStats {
  return {
    games: num(classStats, modeKey("games", suffix)),
    wins: num(classStats, modeKey("wins", suffix)),
    losses: num(classStats, modeKey("losses", suffix)),
    kills: num(classStats, modeKey("kills", suffix)),
    deaths: num(classStats, modeKey("deaths", suffix)),
    smashed: num(classStats, modeKey("smashed", suffix)),
    smasher: num(classStats, modeKey("smasher", suffix)),
    damageDealt: num(classStats, modeKey("damage_dealt", suffix)),
    winStreak: num(classStats, modeKey("win_streak", suffix)),
  };
}

function parseHero(
  smashHeroes: Record<string, unknown>,
  hero: string,
): SmashHeroesHeroStats {
  const classStats = obj(obj(smashHeroes, "class_stats"), hero);
  const abilities: Record<string, SmashHeroesAbilityStats> = {};
  for (const [name, value] of Object.entries(classStats)) {
    if (typeof value === "object" && value !== null && !Array.isArray(value)) {
      abilities[name] = parseAbility(value as Record<string, unknown>);
    }
  }
  return {
    hero,
    lastLevel: num(smashHeroes, `lastLevel_${hero}`),
    experience: num(smashHeroes, `xp_${hero}`),
    prestige: num(smashHeroes, `pg_${hero}`),
    overall: parseHeroMode(classStats, ""),
    normal: parseHeroMode(classStats, "normal"),
    twoVsTwo: parseHeroMode(classStats, "2v2"),
    threeVsThree: parseHeroMode(classStats, "3v3"),
    teams: parseHeroMode(classStats, "teams"),
    friendWins: num(classStats, "friend_wins"),
    friendWinsNormal: num(classStats, "friend_wins_normal"),
    friendLosses: num(classStats, "friend_losses"),
    friendLossesNormal: num(classStats, "friend_losses_normal"),
    oneVOneWins: num(classStats, "one_v_one_wins"),
    oneVOneWinsNormal: num(classStats, "one_v_one_wins_normal"),
    oneVOneLosses: num(classStats, "one_v_one_losses"),
    oneVOneLossesNormal: num(classStats, "one_v_one_losses_normal"),
    masterArmor: bool(smashHeroes, `masterArmor_${hero}`),
    abilities,
  };
}

function parsePackages(
  smashHeroes: Record<string, unknown>,
): readonly string[] {
  const value = smashHeroes.packages;
  return Array.isArray(value)
    ? value.filter((entry): entry is string => typeof entry === "string")
    : [];
}

function parseHeroLevelBooster(
  smashHeroes: Record<string, unknown>,
): SmashHeroesHeroLevelBooster {
  const booster = obj(smashHeroes, "hero_level_booster_active");
  return {
    key: str(booster, "key"),
    multiplier: num(booster, "multiplier"),
    value: num(booster, "value"),
    plays: num(booster, "plays"),
  };
}

function parseClasses(
  smashHeroes: Record<string, unknown>,
): Readonly<Record<string, boolean>> {
  const classes: Record<string, boolean> = {};
  for (const [name, value] of Object.entries(obj(smashHeroes, "classes"))) {
    classes[name] = value === true;
  }
  return classes;
}

function parseLeaderboardSettings(
  smashHeroes: Record<string, unknown>,
): SmashHeroesLeaderboardSettings {
  const settings = obj(smashHeroes, "leaderboardSettings");
  return {
    resetType: str(settings, "resetType"),
    mode: str(settings, "mode"),
  };
}

function parseVotes(
  smashHeroes: Record<string, unknown>,
): Readonly<Record<string, number>> {
  const votes: Record<string, number> = {};
  for (const [name, value] of Object.entries(smashHeroes)) {
    if (name.startsWith("votes_") && typeof value === "number") {
      votes[name.slice("votes_".length)] = value;
    }
  }
  return votes;
}

const HERO_NAME_KEY = /^(?:lastLevel|xp|pg|masterArmor)_(.+)$/;

function collectHeroNames(
  smashHeroes: Record<string, unknown>,
): readonly string[] {
  const names = new Set<string>(Object.keys(obj(smashHeroes, "class_stats")));
  for (const key of Object.keys(smashHeroes)) {
    const match = HERO_NAME_KEY.exec(key);
    if (match) {
      names.add(match[1]);
    }
  }
  return [...names].sort((a, b) => a.localeCompare(b));
}

/** Parses a player's Smash Heroes stats (`stats.SuperSmash`) into a typed object. */
export function parseSmashHeroes(
  stats: Record<string, unknown>,
): SmashHeroesStats | null {
  if (typeof stats !== "object" || stats === null) {
    return null;
  }

  const modes = {} as Record<SmashHeroesMode, SmashHeroesModeStats>;
  for (const [name, suffix] of Object.entries(MODE_SUFFIX) as Array<
    [SmashHeroesMode, string]
  >) {
    modes[name] = parseMode(stats, suffix);
  }

  const heroes: Record<string, SmashHeroesHeroStats> = {};
  for (const hero of collectHeroNames(stats)) {
    heroes[hero] = parseHero(stats, hero);
  }

  return {
    coins: num(stats, "coins"),
    smashLevel: num(stats, "smashLevel"),
    smashLevelTotal: num(stats, "smash_level_total"),
    winStreak: num(stats, "win_streak"),
    activeClass: str(stats, "active_class"),
    quits: num(stats, "quits"),
    smashPlayStreak: num(stats, "smash_play_streak"),
    expiredBooster: stats.expired_booster === true,
    expBoosterPurchases10Plays: num(stats, "expBooster_purchases_10_plays"),
    expBoosterPurchases30Plays: num(stats, "expBooster_purchases_30_plays"),
    expBoosterPurchases50Plays: num(stats, "expBooster_purchases_50_plays"),
    expBoosterPurchases100Plays: num(stats, "expBooster_purchases_100_plays"),
    friendsFirstGame: date(stats, "FRIENDS_firstGame"),
    friendsGamesDay: num(stats, "FRIENDS_gamesDay"),
    oneVJuanFirstGame: date(stats, "ONE_V_JUAN_firstGame"),
    oneVJuanGamesDay: num(stats, "ONE_V_JUAN_gamesDay"),
    games: num(stats, "games"),
    wins: num(stats, "wins"),
    losses: num(stats, "losses"),
    kills: num(stats, "kills"),
    deaths: num(stats, "deaths"),
    assists: num(stats, "assists"),
    assistsNormal: num(stats, "assists_normal"),
    smashed: num(stats, "smashed"),
    smasher: num(stats, "smasher"),
    damageDealt: num(stats, "damage_dealt"),
    friendWins: num(stats, "friend_wins"),
    friendWinsNormal: num(stats, "friend_wins_normal"),
    friendLosses: num(stats, "friend_losses"),
    friendLossesNormal: num(stats, "friend_losses_normal"),
    oneVOneWins: num(stats, "one_v_one_wins"),
    oneVOneWinsNormal: num(stats, "one_v_one_wins_normal"),
    oneVOneLosses: num(stats, "one_v_one_losses"),
    oneVOneLossesNormal: num(stats, "one_v_one_losses_normal"),
    packages: parsePackages(stats),
    classes: parseClasses(stats),
    leaderboardSettings: parseLeaderboardSettings(stats),
    heroLevelBoosterActive: parseHeroLevelBooster(stats),
    votes: parseVotes(stats),
    ...modes,
    monthly: {
      a: parsePeriod(stats, "monthly_a"),
      b: parsePeriod(stats, "monthly_b"),
    },
    weekly: {
      a: parsePeriod(stats, "weekly_a"),
      b: parsePeriod(stats, "weekly_b"),
    },
    heroes,
  };
}

