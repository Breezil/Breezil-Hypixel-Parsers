import { decodeItemBytes, NbtItem } from "./nbt";

import { num, str, bool, obj } from "./common";

export interface PitUnlock {
  readonly tier: number;
  readonly acquireDate: number;
  readonly key: string;
}

export interface PitPrestige {
  readonly index: number;
  readonly xpOnPrestige: number;
  readonly timestamp: number;
}

export interface PitBounty {
  readonly amount: number;
  readonly remainingTicks: number;
  readonly timestamp: number;
  readonly issuer: string | null;
}

export interface PitGoldTransaction {
  readonly amount: number;
  readonly timestamp: number;
}

export interface PitKingQuest {
  readonly kills: number;
  readonly renown: number;
  readonly lastCompleted: number;
  readonly lastAccepted: number;
}

export interface PitEndedContract {
  readonly difficulty: string;
  readonly goldReward: number;
  readonly chunkOfVilesReward: number;
  readonly requirements: Readonly<Record<string, number>>;
  readonly progress: Readonly<Record<string, number>>;
  readonly completionDate: number;
  readonly remainingTicks: number;
  readonly key: string;
}

export interface PitChatOptions {
  readonly bounties: boolean;
  readonly killFeed: boolean;
  readonly minorEvents: boolean;
  readonly misc: boolean;
  readonly playerChat: boolean;
  readonly prestigeAnnouncements: boolean;
  readonly streaks: boolean;
}

export interface PitGenesis {
  readonly allegiance: string;
  readonly allegianceTime: number;
  readonly permaAngel: number;
  readonly permaDemon: number;
  readonly points: number;
  readonly spawnInBase: boolean;
  readonly weeklyPerksClaimItemAngel: number;
  readonly weeklyPerksClaimItemDemon: number;
  readonly weeklyPerksPermaGold: number;
  readonly weeklyPerksPermaXp: number;
}

export interface PitInventory {
  readonly type: number;
  readonly items: readonly NbtItem[];
}

export interface PitCombatStats {
  readonly kills: number;
  readonly deaths: number;
  readonly assists: number;
  readonly maxStreak: number;
  readonly joins: number;
  readonly playtimeMinutes: number;
  readonly damageDealt: number;
  readonly damageReceived: number;
  readonly meleeDamageDealt: number;
  readonly meleeDamageReceived: number;
  readonly bowDamageDealt: number;
  readonly bowDamageReceived: number;
  readonly swordHits: number;
  readonly arrowHits: number;
  readonly arrowsFired: number;
  readonly leftClicks: number;
  readonly blocksPlaced: number;
  readonly blocksBroken: number;
  readonly obsidianBroken: number;
  readonly cashEarned: number;
  readonly goldFromFarming: number;
  readonly chatMessages: number;
  readonly contractsStarted: number;
  readonly contractsCompleted: number;
  readonly diamondItemsPurchased: number;
  readonly enderchestOpened: number;
  readonly ingotsCash: number;
  readonly ingotsPickedUp: number;
  readonly jumpedIntoPit: number;
  readonly launchedByLaunchers: number;
  readonly launchedByAngelSpawn: number;
  readonly launchedByDemonSpawn: number;
  readonly nightQuestsCompleted: number;
  readonly kingQuestCompletion: number;
  readonly vampireHealedHp: number;
  readonly bountiesOf500gWithBh: number;
  readonly ramboKills: number;
  readonly darkPantsCrated: number;
  readonly darkPantsT2: number;
  readonly ragePantsCrafted: number;
  readonly ragePotatoesEaten: number;
  readonly enchantedTier1: number;
  readonly enchantedTier2: number;
  readonly enchantedTier3: number;
  readonly endlessQuiverArrows: number;
  readonly extraFromTrickleDown: number;
  readonly fishedAnything: number;
  readonly fishesFished: number;
  readonly fishingRodLaunched: number;
  readonly gappleEaten: number;
  readonly gheadEaten: number;
  readonly soupsDrank: number;
  readonly lavaBucketEmptied: number;
  readonly luckyDiamondPieces: number;
  readonly sewerTreasuresFound: number;
  readonly wheatFarmed: number;
}

export interface PitProfile {
  readonly xp: number;
  readonly lastPassiveXp: number;
  readonly zeroPointTwoXp: number;
  readonly cash: number;
  readonly renown: number;
  readonly hatColor: number;
  readonly hatEnabled: boolean;
  readonly impatientEnabled: boolean;
  readonly nightQuestsEnabled: boolean;
  readonly supporterStarEnabled: boolean;
  readonly cheapMilk: boolean;
  readonly disableSpawnItems: boolean;
  readonly refundedGoldenPickaxe: boolean;
  readonly lastSave: number;
  readonly lastContract: number;
  readonly lastMidfightDisconnect: number;
  readonly zeroPointThreeGoldTransfer: boolean;
  readonly selectedLaunchTrail: string;
  readonly selectedLeaderboard: string;
  readonly selectedMegastreakExceptUber: string;
  readonly movedAchievements: readonly boolean[];
  readonly selectedPerks: readonly string[];
  readonly selectedKillstreaks: readonly string[];
  readonly cashDuringPrestige: readonly number[];
  readonly hotbarFavorites: readonly number[];
  readonly chatOptions: PitChatOptions;
  readonly genesis: PitGenesis;
  readonly kingQuest: PitKingQuest;
  readonly leaderboardStats: Readonly<Record<string, number>>;
  readonly itemsLastBuy: Readonly<Record<string, number>>;
  readonly prestiges: readonly PitPrestige[];
  readonly bounties: readonly PitBounty[];
  readonly goldTransactions: readonly PitGoldTransaction[];
  readonly endedContracts: readonly PitEndedContract[];
  readonly contractChoices: readonly unknown[];
  readonly outgoingOffers: readonly unknown[];
  readonly autobuyItems: readonly unknown[];
  readonly tradeTimestamps: readonly number[];
  readonly loginMessages: readonly string[];
  readonly unlocks: readonly PitUnlock[];
  readonly prestigeUnlocks: readonly (readonly PitUnlock[])[];
  readonly renownUnlocks: readonly PitUnlock[];
  readonly inventory: PitInventory;
  readonly armor: PitInventory;
  readonly enderChest: PitInventory;
  readonly itemStash: PitInventory;
  readonly mysticWellItem: PitInventory;
  readonly spireStash: PitInventory;
  readonly spireStashArmor: PitInventory;
  readonly deathRecaps: PitInventory;
}

export interface PitStats {
  readonly profile: PitProfile;
  readonly combat: PitCombatStats;
  readonly statsMove1: number;
  readonly packages: readonly string[];
}

function objectArray(value: unknown): readonly Record<string, unknown>[] {
  if (!Array.isArray(value)) {
    return [];
  }
  return value.filter(
    (entry): entry is Record<string, unknown> =>
      typeof entry === "object" && entry !== null && !Array.isArray(entry),
  );
}

function numberArray(value: unknown): readonly number[] {
  return Array.isArray(value)
    ? value.filter((entry): entry is number => typeof entry === "number")
    : [];
}

function stringArray(value: unknown): readonly string[] {
  return Array.isArray(value)
    ? value.filter((entry): entry is string => typeof entry === "string")
    : [];
}

function unknownArray(value: unknown): readonly unknown[] {
  return Array.isArray(value) ? value : [];
}

function numberMap(raw: Record<string, unknown>): Record<string, number> {
  const result: Record<string, number> = {};
  for (const key of Object.keys(raw)) {
    const value = raw[key];
    if (typeof value === "number") {
      result[key] = value;
    }
  }
  return result;
}

function indexedKeys(
  profile: Record<string, unknown>,
  prefix: string,
): readonly string[] {
  return Object.keys(profile)
    .filter(
      (key) => key.startsWith(prefix) && /^\d+$/.test(key.slice(prefix.length)),
    )
    .sort(
      (a, b) => Number(a.slice(prefix.length)) - Number(b.slice(prefix.length)),
    );
}

function dataToBase64(data: unknown): string {
  if (typeof data === "string") {
    return data;
  }
  if (Array.isArray(data)) {
    const bytes = Buffer.allocUnsafe(data.length);
    for (let i = 0; i < data.length; i += 1) {
      const byte = data[i];
      bytes[i] = typeof byte === "number" ? byte & 0xff : 0;
    }
    return bytes.toString("base64");
  }
  return "";
}

function parseInventory(
  profile: Record<string, unknown>,
  key: string,
): PitInventory {
  const container = obj(profile, key);
  return {
    type: num(container, "type"),
    items: decodeItemBytes(dataToBase64(container.data)),
  };
}

function parseUnlocks(value: unknown): readonly PitUnlock[] {
  return objectArray(value).map((entry) => ({
    tier: num(entry, "tier"),
    acquireDate: num(entry, "acquireDate"),
    key: str(entry, "key"),
  }));
}

function parsePrestiges(
  profile: Record<string, unknown>,
): readonly PitPrestige[] {
  return objectArray(profile.prestiges).map((entry) => ({
    index: num(entry, "index"),
    xpOnPrestige: num(entry, "xp_on_prestige"),
    timestamp: num(entry, "timestamp"),
  }));
}

function parseBounties(profile: Record<string, unknown>): readonly PitBounty[] {
  return objectArray(profile.bounties).map((entry) => {
    const issuer = entry.issuer;
    return {
      amount: num(entry, "amount"),
      remainingTicks: num(entry, "remainingTicks"),
      timestamp: num(entry, "timestamp"),
      issuer: typeof issuer === "string" ? issuer : null,
    };
  });
}

function parseGoldTransactions(
  profile: Record<string, unknown>,
): readonly PitGoldTransaction[] {
  return objectArray(profile.gold_transactions).map((entry) => ({
    amount: num(entry, "amount"),
    timestamp: num(entry, "timestamp"),
  }));
}

function parseEndedContracts(
  profile: Record<string, unknown>,
): readonly PitEndedContract[] {
  return objectArray(profile.ended_contracts).map((entry) => ({
    difficulty: str(entry, "difficulty"),
    goldReward: num(entry, "gold_reward"),
    chunkOfVilesReward: num(entry, "chunk_of_viles_reward"),
    requirements: numberMap(obj(entry, "requirements")),
    progress: numberMap(obj(entry, "progress")),
    completionDate: num(entry, "completion_date"),
    remainingTicks: num(entry, "remaining_ticks"),
    key: str(entry, "key"),
  }));
}

function parseChatOptions(profile: Record<string, unknown>): PitChatOptions {
  return {
    bounties: bool(profile, "chat_option_bounties"),
    killFeed: bool(profile, "chat_option_kill_feed"),
    minorEvents: bool(profile, "chat_option_minor_events"),
    misc: bool(profile, "chat_option_misc"),
    playerChat: bool(profile, "chat_option_player_chat"),
    prestigeAnnouncements: bool(profile, "chat_option_prestige_announcements"),
    streaks: bool(profile, "chat_option_streaks"),
  };
}

function parseGenesis(profile: Record<string, unknown>): PitGenesis {
  return {
    allegiance: str(profile, "genesis_allegiance"),
    allegianceTime: num(profile, "genesis_allegiance_time"),
    permaAngel: num(profile, "genesis_perma_angel"),
    permaDemon: num(profile, "genesis_perma_demon"),
    points: num(profile, "genesis_points"),
    spawnInBase: bool(profile, "genesis_spawn_in_base"),
    weeklyPerksClaimItemAngel: num(
      profile,
      "genesis_weekly_perks_claim_item_angel",
    ),
    weeklyPerksClaimItemDemon: num(
      profile,
      "genesis_weekly_perks_claim_item_demon",
    ),
    weeklyPerksPermaGold: num(profile, "genesis_weekly_perks_perma_gold"),
    weeklyPerksPermaXp: num(profile, "genesis_weekly_perks_perma_xp"),
  };
}

function parseProfile(profile: Record<string, unknown>): PitProfile {
  return {
    xp: num(profile, "xp"),
    lastPassiveXp: num(profile, "last_passive_xp"),
    zeroPointTwoXp: num(profile, "zero_point_two_xp"),
    cash: num(profile, "cash"),
    renown: num(profile, "renown"),
    hatColor: num(profile, "hat_color"),
    hatEnabled: bool(profile, "hat_enabled"),
    impatientEnabled: bool(profile, "impatient_enabled"),
    nightQuestsEnabled: bool(profile, "night_quests_enabled"),
    supporterStarEnabled: bool(profile, "supporter_star_enabled"),
    cheapMilk: bool(profile, "cheap_milk"),
    disableSpawnItems: bool(profile, "disable_spawn_items"),
    refundedGoldenPickaxe: bool(profile, "refunded_golden_pickaxe"),
    lastSave: num(profile, "last_save"),
    lastContract: num(profile, "last_contract"),
    lastMidfightDisconnect: num(profile, "last_midfight_disconnect"),
    zeroPointThreeGoldTransfer: bool(profile, "zero_point_three_gold_transfer"),
    selectedLaunchTrail: str(profile, "selected_launch_trail"),
    selectedLeaderboard: str(profile, "selected_leaderboard"),
    selectedMegastreakExceptUber: str(
      profile,
      "selected_megastreak_except_uber",
    ),
    movedAchievements: indexedKeys(profile, "moved_achievements_").map((key) =>
      bool(profile, key),
    ),
    selectedPerks: indexedKeys(profile, "selected_perk_").map((key) =>
      str(profile, key),
    ),
    selectedKillstreaks: indexedKeys(profile, "selected_killstreak_").map(
      (key) => str(profile, key),
    ),
    cashDuringPrestige: indexedKeys(profile, "cash_during_prestige_").map(
      (key) => num(profile, key),
    ),
    hotbarFavorites: numberArray(profile.hotbar_favorites),
    chatOptions: parseChatOptions(profile),
    genesis: parseGenesis(profile),
    kingQuest: {
      kills: num(obj(profile, "king_quest"), "kills"),
      renown: num(obj(profile, "king_quest"), "renown"),
      lastCompleted: num(obj(profile, "king_quest"), "last_completed"),
      lastAccepted: num(obj(profile, "king_quest"), "last_accepted"),
    },
    leaderboardStats: numberMap(obj(profile, "leaderboard_stats")),
    itemsLastBuy: numberMap(obj(profile, "items_last_buy")),
    prestiges: parsePrestiges(profile),
    bounties: parseBounties(profile),
    goldTransactions: parseGoldTransactions(profile),
    endedContracts: parseEndedContracts(profile),
    contractChoices: unknownArray(profile.contract_choices),
    outgoingOffers: unknownArray(profile.outgoing_offers),
    autobuyItems: unknownArray(profile.autobuy_items),
    tradeTimestamps: numberArray(profile.trade_timestamps),
    loginMessages: stringArray(profile.login_messages),
    unlocks: parseUnlocks(profile.unlocks),
    prestigeUnlocks: indexedKeys(profile, "unlocks_").map((key) =>
      parseUnlocks(profile[key]),
    ),
    renownUnlocks: parseUnlocks(profile.renown_unlocks),
    inventory: parseInventory(profile, "inv_contents"),
    armor: parseInventory(profile, "inv_armor"),
    enderChest: parseInventory(profile, "inv_enderchest"),
    itemStash: parseInventory(profile, "item_stash"),
    mysticWellItem: parseInventory(profile, "mystic_well_item"),
    spireStash: parseInventory(profile, "spire_stash_inv"),
    spireStashArmor: parseInventory(profile, "spire_stash_armor"),
    deathRecaps: parseInventory(profile, "death_recaps"),
  };
}

function parseCombat(combat: Record<string, unknown>): PitCombatStats {
  return {
    kills: num(combat, "kills"),
    deaths: num(combat, "deaths"),
    assists: num(combat, "assists"),
    maxStreak: num(combat, "max_streak"),
    joins: num(combat, "joins"),
    playtimeMinutes: num(combat, "playtime_minutes"),
    damageDealt: num(combat, "damage_dealt"),
    damageReceived: num(combat, "damage_received"),
    meleeDamageDealt: num(combat, "melee_damage_dealt"),
    meleeDamageReceived: num(combat, "melee_damage_received"),
    bowDamageDealt: num(combat, "bow_damage_dealt"),
    bowDamageReceived: num(combat, "bow_damage_received"),
    swordHits: num(combat, "sword_hits"),
    arrowHits: num(combat, "arrow_hits"),
    arrowsFired: num(combat, "arrows_fired"),
    leftClicks: num(combat, "left_clicks"),
    blocksPlaced: num(combat, "blocks_placed"),
    blocksBroken: num(combat, "blocks_broken"),
    obsidianBroken: num(combat, "obsidian_broken"),
    cashEarned: num(combat, "cash_earned"),
    goldFromFarming: num(combat, "gold_from_farming"),
    chatMessages: num(combat, "chat_messages"),
    contractsStarted: num(combat, "contracts_started"),
    contractsCompleted: num(combat, "contracts_completed"),
    diamondItemsPurchased: num(combat, "diamond_items_purchased"),
    enderchestOpened: num(combat, "enderchest_opened"),
    ingotsCash: num(combat, "ingots_cash"),
    ingotsPickedUp: num(combat, "ingots_picked_up"),
    jumpedIntoPit: num(combat, "jumped_into_pit"),
    launchedByLaunchers: num(combat, "launched_by_launchers"),
    launchedByAngelSpawn: num(combat, "launched_by_angel_spawn"),
    launchedByDemonSpawn: num(combat, "launched_by_demon_spawn"),
    nightQuestsCompleted: num(combat, "night_quests_completed"),
    kingQuestCompletion: num(combat, "king_quest_completion"),
    vampireHealedHp: num(combat, "vampire_healed_hp"),
    bountiesOf500gWithBh: num(combat, "bounties_of_500g_with_bh"),
    ramboKills: num(combat, "rambo_kills"),
    darkPantsCrated: num(combat, "dark_pants_crated"),
    darkPantsT2: num(combat, "dark_pants_t2"),
    ragePantsCrafted: num(combat, "rage_pants_crafted"),
    ragePotatoesEaten: num(combat, "rage_potatoes_eaten"),
    enchantedTier1: num(combat, "enchanted_tier1"),
    enchantedTier2: num(combat, "enchanted_tier2"),
    enchantedTier3: num(combat, "enchanted_tier3"),
    endlessQuiverArrows: num(combat, "endless_quiver_arrows"),
    extraFromTrickleDown: num(combat, "extra_from_trickle_down"),
    fishedAnything: num(combat, "fished_anything"),
    fishesFished: num(combat, "fishes_fished"),
    fishingRodLaunched: num(combat, "fishing_rod_launched"),
    gappleEaten: num(combat, "gapple_eaten"),
    gheadEaten: num(combat, "ghead_eaten"),
    soupsDrank: num(combat, "soups_drank"),
    lavaBucketEmptied: num(combat, "lava_bucket_emptied"),
    luckyDiamondPieces: num(combat, "lucky_diamond_pieces"),
    sewerTreasuresFound: num(combat, "sewer_treasures_found"),
    wheatFarmed: num(combat, "wheat_farmed"),
  };
}

/** Parses a player's Pit stats (`stats.Pit`) into a typed object. */
export function parsePit(stats: Record<string, unknown>): PitStats | null {
  const raw = stats.Pit;
  if (typeof raw !== "object" || raw === null || Array.isArray(raw)) {
    return null;
  }
  const pit = raw as Record<string, unknown>;
  return {
    profile: parseProfile(obj(pit, "profile")),
    combat: parseCombat(obj(pit, "pit_stats_ptl")),
    statsMove1: num(pit, "stats_move_1"),
    packages: stringArray(pit.packages),
  };
}

