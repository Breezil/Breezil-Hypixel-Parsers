import { num, str, bool, obj, date } from "./common";

export interface BuildBattleLeaderboardSettings {
  readonly mode: string;
  readonly resetType: string;
}

export interface BuildBattleLastWin {
  readonly guessTheBuild: Date | null;
  readonly soloNormal: Date | null;
  readonly soloPro: Date | null;
  readonly speedBuilders: Date | null;
  readonly teamsNormal: Date | null;
}

export interface BuildBattlePeriodCoins {
  readonly coinsA: number;
  readonly coinsB: number;
}

export interface BuildBattleFavorites {
  readonly backdrops: readonly string[];
  readonly island: readonly string[];
}

export interface BuildBattleStats {
  readonly coins: number;
  readonly score: number;
  readonly gamesPlayed: number;
  readonly wins: number;
  readonly winsSoloNormal: number;
  readonly winsSoloPro: number;
  readonly winsTeamsNormal: number;
  readonly winsGuessTheBuild: number;
  readonly winsSpeedBuilders: number;
  readonly winsHalloween: number;
  readonly winsBuildBattle: number;
  readonly seasonalWins: number;
  readonly seasonalWinsSoloNormal: number;
  readonly seasonalWinsSpeedBuilders: number;
  readonly seasonalWinsTeamsNormal: number;
  readonly correctGuesses: number;
  readonly firstGuesses: number;
  readonly totalVotes: number;
  readonly superVotes: number;
  readonly soloMostPoints: number;
  readonly teamsMostPoints: number;
  readonly monthlyCoins: BuildBattlePeriodCoins;
  readonly weeklyCoins: BuildBattlePeriodCoins;
  readonly music: boolean;
  readonly loadout: readonly string[];
  readonly packages: readonly string[];
  readonly perfectInsaneBuilds: readonly string[];
  readonly activeMovementTrail: string;
  readonly activeIsland: string;
  readonly selectedHat: string;
  readonly suit: string;
  readonly victoryDance: string;
  readonly selectedBackdrop: string;
  readonly selectedPrefixIcon: string;
  readonly selectedIconColor: string;
  readonly lastPurchasedSong: string;
  readonly shopSort: string;
  readonly shopSortOwnedFirst: boolean;
  readonly leaderboardSettings: BuildBattleLeaderboardSettings;
  readonly lastWin: BuildBattleLastWin;
  readonly favorites: BuildBattleFavorites;
  readonly votesByTheme: Readonly<Record<string, number>>;
  readonly votesReceived: Readonly<Record<string, number>>;
  readonly backdropWins: Readonly<Record<string, number>>;
}

function stringList(
  buildBattle: Record<string, unknown>,
  key: string,
): readonly string[] {
  const value = buildBattle[key];
  return Array.isArray(value)
    ? value.filter((item): item is string => typeof item === "string")
    : [];
}

function periodCoins(
  buildBattle: Record<string, unknown>,
  period: "monthly" | "weekly",
): BuildBattlePeriodCoins {
  return {
    coinsA: num(buildBattle, `${period}_coins_a`),
    coinsB: num(buildBattle, `${period}_coins_b`),
  };
}

function parseLastWin(
  buildBattle: Record<string, unknown>,
): BuildBattleLastWin {
  const lastWon = obj(buildBattle, "last_won");
  return {
    guessTheBuild: date(lastWon, "GUESS_THE_BUILD"),
    soloNormal: date(lastWon, "SOLO_NORMAL"),
    soloPro: date(lastWon, "SOLO_PRO"),
    speedBuilders: date(lastWon, "SPEED_BUILDERS"),
    teamsNormal: date(lastWon, "TEAMS_NORMAL"),
  };
}

function parseVotesByTheme(
  buildBattle: Record<string, unknown>,
): Record<string, number> {
  const votes: Record<string, number> = {};
  for (const [key, value] of Object.entries(buildBattle)) {
    if (key.startsWith("votes_") && typeof value === "number") {
      votes[key.slice("votes_".length)] = value;
    }
  }
  return votes;
}

function numberRecord(record: Record<string, unknown>): Record<string, number> {
  const result: Record<string, number> = {};
  for (const [key, value] of Object.entries(record)) {
    if (typeof value === "number") {
      result[key] = value;
    }
  }
  return result;
}

function parseFavorites(
  buildBattle: Record<string, unknown>,
): BuildBattleFavorites {
  const favorites = obj(buildBattle, "favorites");
  return {
    backdrops: stringList(favorites, "backdrops"),
    island: stringList(favorites, "island"),
  };
}

/** Parses a player's Build Battle stats (`stats.BuildBattle`) into a typed object. */
export function parseBuildBattle(
  stats: Record<string, unknown>,
): BuildBattleStats | null {
  const raw = stats.BuildBattle;
  if (typeof raw !== "object" || raw === null || Array.isArray(raw)) {
    return null;
  }
  const buildBattle = raw as Record<string, unknown>;
  return {
    coins: num(buildBattle, "coins"),
    score: num(buildBattle, "score"),
    gamesPlayed: num(buildBattle, "games_played"),
    wins: num(buildBattle, "wins"),
    winsSoloNormal: num(buildBattle, "wins_solo_normal"),
    winsSoloPro: num(buildBattle, "wins_solo_pro"),
    winsTeamsNormal: num(buildBattle, "wins_teams_normal"),
    winsGuessTheBuild: num(buildBattle, "wins_guess_the_build"),
    winsSpeedBuilders: num(buildBattle, "wins_speed_builders"),
    winsHalloween: num(buildBattle, "wins_halloween"),
    winsBuildBattle: num(buildBattle, "wins_buildbattle"),
    seasonalWins: num(buildBattle, "seasonal_wins"),
    seasonalWinsSoloNormal: num(buildBattle, "seasonal_wins_solo_normal"),
    seasonalWinsSpeedBuilders: num(buildBattle, "seasonal_wins_speed_builders"),
    seasonalWinsTeamsNormal: num(buildBattle, "seasonal_wins_teams_normal"),
    correctGuesses: num(buildBattle, "correct_guesses"),
    firstGuesses: num(buildBattle, "first_guesses"),
    totalVotes: num(buildBattle, "total_votes"),
    superVotes: num(buildBattle, "super_votes"),
    soloMostPoints: num(buildBattle, "solo_most_points"),
    teamsMostPoints: num(buildBattle, "teams_most_points"),
    monthlyCoins: periodCoins(buildBattle, "monthly"),
    weeklyCoins: periodCoins(buildBattle, "weekly"),
    music: bool(buildBattle, "music"),
    loadout: stringList(buildBattle, "buildbattle_loadout"),
    packages: stringList(buildBattle, "packages"),
    perfectInsaneBuilds: stringList(buildBattle, "perfect_insane_builds"),
    activeMovementTrail: str(buildBattle, "active_movement_trail"),
    activeIsland: str(buildBattle, "active_island"),
    selectedHat: str(buildBattle, "new_selected_hat"),
    suit: str(buildBattle, "new_suit"),
    victoryDance: str(buildBattle, "new_victory_dance"),
    selectedBackdrop: str(buildBattle, "selected_backdrop"),
    selectedPrefixIcon: str(buildBattle, "selected_prefix_icon"),
    selectedIconColor: str(buildBattle, "selected_icon_color"),
    lastPurchasedSong: str(buildBattle, "last_purchased_song"),
    shopSort: str(buildBattle, "shop_sort"),
    shopSortOwnedFirst: bool(buildBattle, "shop_sort_enable_owned_first"),
    leaderboardSettings: {
      mode: str(obj(buildBattle, "leaderboardSettings"), "mode"),
      resetType: str(obj(buildBattle, "leaderboardSettings"), "resetType"),
    },
    lastWin: parseLastWin(buildBattle),
    favorites: parseFavorites(buildBattle),
    votesByTheme: parseVotesByTheme(buildBattle),
    votesReceived: numberRecord(obj(buildBattle, "votes_received")),
    backdropWins: numberRecord(obj(buildBattle, "backdrop_wins")),
  };
}

