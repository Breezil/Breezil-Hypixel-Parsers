import { num, str, bool } from "./common";

export interface SpeedUHCStats {
  readonly coins: number;
  readonly score: number;
  readonly salt: number;
  readonly kills: number;
  readonly deaths: number;
  readonly assists: number;
  readonly wins: number;
  readonly losses: number;
  readonly games: number;
  readonly quits: number;
  readonly killstreak: number;
  readonly highestKillstreak: number;
  readonly winStreak: number;
  readonly winstreak: number;
  readonly highestWinstreak: number;
  readonly survivedPlayers: number;
  readonly arrowsHit: number;
  readonly arrowsShot: number;
  readonly blocksBroken: number;
  readonly blocksPlaced: number;
  readonly itemsEnchanted: number;
  readonly extraWheels: number;
  readonly tears: number;
  readonly tearsGathered: number;
  readonly tearWellUses: number;
  readonly eggThrown: number;
  readonly enderpearlsThrown: number;
  readonly firstJoinLobby: boolean;
  readonly firstJoinLobbyInt: number;
  readonly movedOver: boolean;
  readonly combatTracker: boolean;
  readonly votedInsaneGrace: boolean;
  readonly shopSort: string;
  readonly shopSortEnableOwnedFirst: boolean;
  readonly masteryBerserk: number;
  readonly masteryFortune: number;
  readonly masteryGuardian: number;
  readonly masteryHuntsman: number;
  readonly masteryInvigorate: number;
  readonly masteryMasterBaker: number;
  readonly masterySniper: number;
  readonly masteryVampirism: number;
  readonly activeKitInsane: string;
  readonly activeKitNormal: string;
  readonly activeMasterPerk: string;
  readonly activeCage: string;
  readonly activeKillEffect: string;
  readonly activeProjectileTrail: string;
  readonly activeVictoryDance: string;
  readonly packages: readonly string[];
  readonly found: Readonly<Record<string, number>>;
  readonly drops: Readonly<Record<string, number>>;
  readonly votes: Readonly<Record<string, number>>;
  readonly rollingKills: Readonly<Record<string, number>>;
  readonly kitStats: Readonly<Record<string, number>>;
  readonly masteryStats: Readonly<Record<string, number>>;
  readonly perkLevels: Readonly<Record<string, number>>;
  readonly modeStats: Readonly<Record<string, number>>;
}

const EXPLICIT_KEYS = new Set<string>([
  "coins",
  "score",
  "salt",
  "kills",
  "deaths",
  "assists",
  "wins",
  "losses",
  "games",
  "quits",
  "killstreak",
  "highestKillstreak",
  "win_streak",
  "winstreak",
  "highestWinstreak",
  "survived_players",
  "arrows_hit",
  "arrows_shot",
  "blocks_broken",
  "blocks_placed",
  "items_enchanted",
  "extra_wheels",
  "tears",
  "tears_gathered",
  "tearWellUses",
  "egg_thrown",
  "enderpearls_thrown",
  "firstJoinLobby",
  "firstJoinLobbyInt",
  "movedOver",
  "combatTracker",
  "voted_insane_grace",
  "shop_sort",
  "shop_sort_enable_owned_first",
  "mastery_berserk",
  "mastery_fortune",
  "mastery_guardian",
  "mastery_huntsman",
  "mastery_invigorate",
  "mastery_master_baker",
  "mastery_sniper",
  "mastery_vampirism",
  "activeKit_INSANE",
  "activeKit_NORMAL",
  "activeMasterPerk",
  "active_cage",
  "active_killeffect",
  "active_projectiletrail",
  "active_victorydance",
  "packages",
]);

interface SpeedUHCFamilies {
  readonly found: Record<string, number>;
  readonly drops: Record<string, number>;
  readonly votes: Record<string, number>;
  readonly rollingKills: Record<string, number>;
  readonly kitStats: Record<string, number>;
  readonly masteryStats: Record<string, number>;
  readonly perkLevels: Record<string, number>;
  readonly modeStats: Record<string, number>;
}

function collectFamilies(block: Record<string, unknown>): SpeedUHCFamilies {
  const families: SpeedUHCFamilies = {
    found: {},
    drops: {},
    votes: {},
    rollingKills: {},
    kitStats: {},
    masteryStats: {},
    perkLevels: {},
    modeStats: {},
  };
  for (const [key, value] of Object.entries(block)) {
    if (typeof value !== "number" || EXPLICIT_KEYS.has(key)) {
      continue;
    }
    if (key.startsWith("found_")) {
      families.found[key] = value;
    } else if (key.endsWith("_drop")) {
      families.drops[key] = value;
    } else if (key.startsWith("votes_")) {
      families.votes[key] = value;
    } else if (key.includes("_kit_basic_")) {
      families.kitStats[key] = value;
    } else if (key.includes("_mastery_")) {
      families.masteryStats[key] = value;
    } else if (key.includes("_monthly_") || key.includes("_weekly_")) {
      families.rollingKills[key] = value;
    } else if (key.startsWith("insane_") || key.startsWith("normal_")) {
      families.perkLevels[key] = value;
    } else {
      families.modeStats[key] = value;
    }
  }
  return families;
}

function stringList(value: unknown): string[] {
  return Array.isArray(value)
    ? value.filter((entry): entry is string => typeof entry === "string")
    : [];
}

/** Parses a player's SpeedUHC stats (`stats.SpeedUHC`) into a typed object. */
export function parseSpeedUHC(
  block: Record<string, unknown>,
): SpeedUHCStats | null {
  if (!block || Object.keys(block).length === 0) {
    return null;
  }
  const families = collectFamilies(block);
  return {
    coins: num(block, "coins"),
    score: num(block, "score"),
    salt: num(block, "salt"),
    kills: num(block, "kills"),
    deaths: num(block, "deaths"),
    assists: num(block, "assists"),
    wins: num(block, "wins"),
    losses: num(block, "losses"),
    games: num(block, "games"),
    quits: num(block, "quits"),
    killstreak: num(block, "killstreak"),
    highestKillstreak: num(block, "highestKillstreak"),
    winStreak: num(block, "win_streak"),
    winstreak: num(block, "winstreak"),
    highestWinstreak: num(block, "highestWinstreak"),
    survivedPlayers: num(block, "survived_players"),
    arrowsHit: num(block, "arrows_hit"),
    arrowsShot: num(block, "arrows_shot"),
    blocksBroken: num(block, "blocks_broken"),
    blocksPlaced: num(block, "blocks_placed"),
    itemsEnchanted: num(block, "items_enchanted"),
    extraWheels: num(block, "extra_wheels"),
    tears: num(block, "tears"),
    tearsGathered: num(block, "tears_gathered"),
    tearWellUses: num(block, "tearWellUses"),
    eggThrown: num(block, "egg_thrown"),
    enderpearlsThrown: num(block, "enderpearls_thrown"),
    firstJoinLobby: bool(block, "firstJoinLobby"),
    firstJoinLobbyInt: num(block, "firstJoinLobbyInt"),
    movedOver: bool(block, "movedOver"),
    combatTracker: bool(block, "combatTracker"),
    votedInsaneGrace: bool(block, "voted_insane_grace"),
    shopSort: str(block, "shop_sort"),
    shopSortEnableOwnedFirst: bool(block, "shop_sort_enable_owned_first"),
    masteryBerserk: num(block, "mastery_berserk"),
    masteryFortune: num(block, "mastery_fortune"),
    masteryGuardian: num(block, "mastery_guardian"),
    masteryHuntsman: num(block, "mastery_huntsman"),
    masteryInvigorate: num(block, "mastery_invigorate"),
    masteryMasterBaker: num(block, "mastery_master_baker"),
    masterySniper: num(block, "mastery_sniper"),
    masteryVampirism: num(block, "mastery_vampirism"),
    activeKitInsane: str(block, "activeKit_INSANE"),
    activeKitNormal: str(block, "activeKit_NORMAL"),
    activeMasterPerk: str(block, "activeMasterPerk"),
    activeCage: str(block, "active_cage"),
    activeKillEffect: str(block, "active_killeffect"),
    activeProjectileTrail: str(block, "active_projectiletrail"),
    activeVictoryDance: str(block, "active_victorydance"),
    packages: stringList(block.packages),
    found: families.found,
    drops: families.drops,
    votes: families.votes,
    rollingKills: families.rollingKills,
    kitStats: families.kitStats,
    masteryStats: families.masteryStats,
    perkLevels: families.perkLevels,
    modeStats: families.modeStats,
  };
}

