import { parseMurderMystery, type MurderMysteryStats } from "./murdermystery";
import { parseCopsAndCrims, type CopsAndCrimsStats } from "./copsandcrims";
import { parseSkyBlockStats, type SkyBlockStats } from "./skyblockstats";
import { parseBuildBattle, type BuildBattleStats } from "./buildbattle";
import { parseSmashHeroes, type SmashHeroesStats } from "./smashheroes";
import { parseHousingStats, type HousingStats } from "./housingstats";
import { parseArenaBrawl, type ArenaBrawlStats } from "./arenabrawl";
import { parseQuakecraft, type QuakecraftStats } from "./quakecraft";
import { parseTrueCombat, type TrueCombatStats } from "./truecombat";
import { parseMainLobby, type MainLobbyStats } from "./mainlobby";
import { parsePaintball, type PaintballStats } from "./paintball";
import { parseWoolGames, type WoolGamesStats } from "./woolgames";
import { parseMegaWalls, type MegaWallsStats } from "./megawalls";
import { parseSpeedUHC, type SpeedUHCStats } from "./speeduhc";
import { parseSkyClash, type SkyClashStats } from "./skyclash";
import { parseVampireZ, type VampireZStats } from "./vampirez";
import { parseTNTGames, type TNTGamesStats } from "./tntgames";
import { parseWarlords, type WarlordsStats } from "./warlords";
import { parseBedWars, type BedWarsStats } from "./bedwars";
import { parseSkyWars, type SkyWarsStats } from "./skywars";
import { parseArcade, type ArcadeStats } from "./arcade";
import { parseLegacy, type LegacyStats } from "./legacy";
import { parseDuels, type DuelsStats } from "./duels";
import { parseWalls, type WallsStats } from "./walls";
import { parseBlitz, type BlitzStats } from "./blitz";
import { bool, date, num, obj, str } from "./common";
import { parsePit, type PitStats } from "./pit";
import { parseUHC, type UHCStats } from "./uhc";
import {
  parseTurboKartRacers,
  type TurboKartRacersStats,
} from "./turbokartracers";

export interface HypixelPlayerStats {
  readonly bedwars: BedWarsStats | null;
  readonly skywars: SkyWarsStats | null;
  readonly duels: DuelsStats | null;
  readonly arcade: ArcadeStats | null;
  readonly buildBattle: BuildBattleStats | null;
  readonly murderMystery: MurderMysteryStats | null;
  readonly tntGames: TNTGamesStats | null;
  readonly pit: PitStats | null;
  readonly megaWalls: MegaWallsStats | null;
  readonly blitz: BlitzStats | null;
  readonly uhc: UHCStats | null;
  readonly smashHeroes: SmashHeroesStats | null;
  readonly copsAndCrims: CopsAndCrimsStats | null;
  readonly paintball: PaintballStats | null;
  readonly quakecraft: QuakecraftStats | null;
  readonly vampireZ: VampireZStats | null;
  readonly walls: WallsStats | null;
  readonly warlords: WarlordsStats | null;
  readonly turboKartRacers: TurboKartRacersStats | null;
  readonly arenaBrawl: ArenaBrawlStats | null;
  readonly woolGames: WoolGamesStats | null;
  readonly speedUHC: SpeedUHCStats | null;
  readonly skyClash: SkyClashStats | null;
  readonly trueCombat: TrueCombatStats | null;
  readonly legacy: LegacyStats | null;
  readonly mainLobby: MainLobbyStats | null;
  readonly housing: HousingStats | null;
  readonly skyblock: SkyBlockStats | null;
}

export interface HypixelPlayerAchievementsTotem {
  readonly canCustomize: boolean;
  readonly allowedMaxHeight: number;
  readonly unlockedParts: readonly string[];
  readonly selectedParts: Record<string, string>;
  readonly unlockedColors: readonly string[];
  readonly selectedColors: Record<string, string>;
}

export interface HypixelPlayerAchievements {
  readonly points: number;
  readonly rewards: Record<string, number>;
  readonly tracking: readonly string[];
  readonly tiered: Record<string, number>;
  readonly oneTime: readonly string[];
  readonly oneTimeMenuSort: string;
  readonly tieredMenuSort: string;
  readonly sync: Record<string, number>;
  readonly totem: HypixelPlayerAchievementsTotem;
}

export interface HypixelPlayerPetConsumables {
  readonly cake: number;
  readonly cookie: number;
  readonly feather: number;
  readonly goldRecord: number;
  readonly hayBlock: number;
  readonly lavaBucket: number;
  readonly leash: number;
  readonly magmaCream: number;
  readonly melon: number;
  readonly milkBucket: number;
  readonly mushroomSoup: number;
  readonly pork: number;
  readonly pumpkinPie: number;
  readonly rawFish: number;
  readonly slimeBall: number;
  readonly stick: number;
  readonly waterBucket: number;
  readonly woodSword: number;
  readonly apple: number;
  readonly bakedPotato: number;
  readonly cookedBeef: number;
  readonly redRose: number;
  readonly wheat: number;
  readonly bread: number;
  readonly carrot: number;
  readonly rottenFlesh: number;
  readonly bone: number;
}

export interface HypixelPlayerPet {
  readonly name: string;
  readonly nickname: string;
  readonly experience: number;
  readonly hunger: number;
  readonly lastFedAt: Date | null;
  readonly thirst: number;
  readonly lastDrankAt: Date | null;
  readonly exercise: number;
  readonly lastExercisedAt: Date | null;
}

export interface HypixelPlayerPets {
  readonly currentPet: string;
  readonly favorites: string;
  readonly autoSpawn: boolean;
  readonly lastJourneyAt: Date | null;
  readonly consumables: HypixelPlayerPetConsumables;
  readonly owned: readonly HypixelPlayerPet[];
}

export interface HypixelPlayerCosmetics {
  readonly menuSort: string;
  readonly rankPlusColor: string;
  readonly monthlyRankColor: string;
  readonly selectedGadget: string;
  readonly gadget: string;
  readonly selectedParticlePack: string;
  readonly clickEffect: string;
  readonly cloak: string;
  readonly emote: string;
  readonly disguise: string;
  readonly transformation: string;
  readonly wardrobe: string;
  readonly outfit: Record<string, string>;
  readonly boxesConvertedToday: number;
  readonly firstBoxConvertedAt: Date | null;
  readonly packages: readonly string[];
  readonly pets: HypixelPlayerPets;
}

export interface HypixelPlayerRankPurchase {
  readonly vipAt: Date | null;
  readonly vipPlusAt: Date | null;
  readonly mvpAt: Date | null;
  readonly mvpPlusAt: Date | null;
}

export interface HypixelPlayerMonthlyCrate {
  readonly date: string;
  readonly regular: boolean;
  readonly vip: boolean;
  readonly vipPlus: boolean;
  readonly mvp: boolean;
  readonly mvpPlus: boolean;
}

export interface HypixelPlayerRewards {
  readonly rewardTokens: number;
  readonly lastAdsenseGenerateTimeAt: Date | null;
  readonly lastClaimedReward: number;
  readonly rewardHighScore: number;
  readonly rewardScore: number;
  readonly rewardStreak: number;
  readonly rewardConsumed: boolean;
  readonly totalDailyRewards: number;
  readonly totalRewards: number;
  readonly monthlyCrates: readonly HypixelPlayerMonthlyCrate[];
  readonly dmCrates: readonly HypixelPlayerMonthlyCrate[];
}

export interface HypixelPlayerGifting {
  readonly bundlesReceived: number;
  readonly realBundlesReceived: number;
  readonly realBundlesReceivedInc: number;
  readonly bundlesGiven: number;
  readonly realBundlesGiven: number;
  readonly giftsGiven: number;
  readonly ranksGiven: number;
  readonly milestones: readonly string[];
  readonly rankGiftingMilestones: readonly string[];
}

export interface HypixelPlayerSocialMedia {
  readonly discord: string;
  readonly youtube: string;
  readonly twitch: string;
  readonly hypixel: string;
  readonly twitter: string;
  readonly instagram: string;
  readonly tiktok: string;
  readonly prompt: boolean;
  readonly verification: Record<string, string>;
}

export interface HypixelPlayerGivenCookies {
  readonly date: string;
  readonly houses: readonly string[];
}

export interface HypixelPlayerHousing {
  readonly allowedBlocks: readonly string[];
  readonly packages: readonly string[];
  readonly tutorialStage: string;
  readonly playlist: string;
  readonly plotSize: string;
  readonly firstHouseJoinAt: Date | null;
  readonly visibilityDisabled: boolean;
  readonly selectedChannels: readonly string[];
  readonly playerSettings: Record<string, string>;
  readonly givenCookies: readonly HypixelPlayerGivenCookies[];
}

export interface HypixelPlayerQuestCompletion {
  readonly completedAt: Date | null;
}

export interface HypixelPlayerQuest {
  readonly name: string;
  readonly completions: readonly HypixelPlayerQuestCompletion[];
}

export interface HypixelPlayerParkour {
  readonly location: string;
  readonly timeStart: number;
  readonly timeTook: number;
  readonly checkpoints: readonly number[];
}

export interface HypixelPlayerAdventDay {
  readonly day: number;
  readonly claimedAt: Date | null;
}

export interface HypixelPlayerAdventRewards {
  readonly year: number;
  readonly days: readonly HypixelPlayerAdventDay[];
}

export interface HypixelPlayerSeasonalEvent {
  readonly year: string;
  readonly experience: number;
  readonly adventRewards: Record<string, number>;
  readonly presents: Record<string, boolean>;
  readonly completedHolidayQuests: number;
  readonly bedWarsWinsAchievement: number;
  readonly duelsWinsAchievement: number;
  readonly skyBlockAlchemistIntro: boolean;
  readonly eggs: Record<string, boolean>;
  readonly mainLobbyEgghunt: Record<string, boolean>;
  readonly candyHuntBaskets: readonly number[];
  readonly bingoPinned: string;
  readonly bingo: Record<string, Record<string, number>>;
}

export interface HypixelPlayerSeasonalEventShopSorting {
  readonly currentSort: string;
  readonly ownedFirst: boolean;
}

export interface HypixelPlayerSeasonal {
  readonly silver: number;
  readonly eventShopSorting: HypixelPlayerSeasonalEventShopSorting;
  readonly christmas: readonly HypixelPlayerSeasonalEvent[];
  readonly easter: readonly HypixelPlayerSeasonalEvent[];
  readonly halloween: readonly HypixelPlayerSeasonalEvent[];
  readonly summer: readonly HypixelPlayerSeasonalEvent[];
  readonly anniversary: readonly HypixelPlayerSeasonalEvent[];
  readonly christmasAdventRewards: readonly HypixelPlayerAdventRewards[];
}

export interface HypixelPlayerScorpiusBribe {
  readonly year: number;
  readonly claimedAt: Date | null;
}

export interface HypixelPlayerAnniversary {
  readonly npcProgress2020: number;
  readonly npcVisited2020: readonly number[];
}

export interface HypixelPlayerLeveling {
  readonly claimedRewards: readonly number[];
}

export type HypixelPlayerCooldowns = Record<string, Record<string, boolean>>;

export interface HypixelPlayerTournamentEntry {
  readonly key: string;
  readonly gamesPlayed: number;
  readonly playtime: number;
  readonly tributesEarned: number;
  readonly firstWinAt: Date | null;
  readonly firstGameAt: Date | null;
  readonly claimedRankingRewardAt: Date | null;
  readonly seenRewardBook: boolean;
}

export interface HypixelPlayerTourney {
  readonly firstJoinLobbyAt: Date | null;
  readonly totalTributes: number;
  readonly entries: readonly HypixelPlayerTournamentEntry[];
}

export interface HypixelPlayerFirework {
  readonly flightDuration: number;
  readonly shape: string;
  readonly trail: boolean;
  readonly twinkle: boolean;
  readonly colors: string;
  readonly fadeColors: string;
  readonly selected: boolean;
}

export interface HypixelPlayerFlashingSale {
  readonly clicks: number;
  readonly opens: number;
  readonly poppedUp: number;
  readonly lastPopupAt: Date | null;
}

export interface HypixelPlayerCachedSuperstarMonths {
  readonly value: number;
  readonly lastUpdatedAt: Date | null;
}

export interface HypixelPlayerCachedData {
  readonly superstarMonths: HypixelPlayerCachedSuperstarMonths;
}

export interface HypixelPlayerSkyBlockExtra {
  readonly ozanneCoins: number;
}

export interface HypixelPlayer {
  readonly id: string;
  readonly uuid: string;
  readonly nickname: string;
  readonly playerName: string;
  readonly prefix: string;
  readonly staffRank: string;
  readonly packageRank: string;
  readonly newPackageRank: string;
  readonly monthlyPackageRank: string;
  readonly mostRecentMonthlyPackageRank: string;
  readonly networkExp: number;
  readonly karma: number;
  readonly language: string;
  readonly channel: string;
  readonly networkUpdateBook: string;
  readonly mostRecentMinecraftVersion: number;
  readonly timePlaying: number;
  readonly tournamentTokens: number;
  readonly fortuneBuff: number;
  readonly giftsGrinch: number;
  readonly thanksReceived: number;
  readonly thanksSent: number;
  readonly mostRecentlyThanked: string;
  readonly mostRecentlyThankedUuid: string;
  readonly mostRecentlyTipped: string;
  readonly mostRecentlyTippedUuid: string;
  readonly santaQuestStarted: boolean;
  readonly autoSpawnPet: boolean;
  readonly battlePassGlowStatus: boolean;
  readonly clock: boolean;
  readonly main2017Tutorial: boolean;
  readonly mostRecentGameType: string;
  readonly mapVotes: Record<string, Record<string, number>>;
  readonly cachedData: HypixelPlayerCachedData;
  readonly skyblockExtra: HypixelPlayerSkyBlockExtra;
  readonly chatEnabled: boolean;
  readonly disableTipMessages: boolean;
  readonly disabledProjectileTrails: boolean;
  readonly eulaCoins: boolean;
  readonly seeRequests: boolean;
  readonly testPass: boolean;
  readonly questAutoActivate: boolean;
  readonly firstLoginAt: Date | null;
  readonly lastLoginAt: Date | null;
  readonly lastLogoutAt: Date | null;
  readonly claimedCenturyCakeAt: Date | null;
  readonly claimedCenturyCake200At: Date | null;
  readonly claimedYear143CakeAt: Date | null;
  readonly claimedPotatoWarCrownAt: Date | null;
  readonly claimedPotatoBasketAt: Date | null;
  readonly claimedPotatoTalismanAt: Date | null;
  readonly claimedSoloBank: Record<string, number>;
  readonly skyBlockFreeCookieAt: Date | null;
  readonly lastMapVoteAt: Date | null;
  readonly flashingSale: HypixelPlayerFlashingSale;
  readonly challenges: Record<string, Record<string, number>>;
  readonly compassStats: Record<string, Record<string, number>>;
  readonly voting: Record<string, number>;
  readonly leveling: HypixelPlayerLeveling;
  readonly dailyTwoKExpAt: Date | null;
  readonly anniversary: HypixelPlayerAnniversary;
  readonly cooldowns: HypixelPlayerCooldowns;
  readonly xmas2019: Record<string, boolean>;
  readonly achievements: HypixelPlayerAchievements;
  readonly cosmetics: HypixelPlayerCosmetics;
  readonly rankPurchase: HypixelPlayerRankPurchase;
  readonly rewards: HypixelPlayerRewards;
  readonly gifting: HypixelPlayerGifting;
  readonly socialMedia: HypixelPlayerSocialMedia;
  readonly housing: HypixelPlayerHousing;
  readonly quests: readonly HypixelPlayerQuest[];
  readonly parkour: readonly HypixelPlayerParkour[];
  readonly adventRewards: readonly HypixelPlayerAdventRewards[];
  readonly seasonal: HypixelPlayerSeasonal;
  readonly scorpiusBribes: readonly HypixelPlayerScorpiusBribe[];
  readonly tourney: HypixelPlayerTourney;
  readonly fireworkStorage: readonly HypixelPlayerFirework[];
  readonly friendRequests: readonly string[];
  readonly stats: HypixelPlayerStats;
}

function stringList(value: unknown): readonly string[] {
  return Array.isArray(value)
    ? value.filter((entry): entry is string => typeof entry === "string")
    : [];
}

function numberList(value: unknown): readonly number[] {
  return Array.isArray(value)
    ? value.filter((entry): entry is number => typeof entry === "number")
    : [];
}

function numberValues(source: Record<string, unknown>): readonly number[] {
  return Object.values(source).filter(
    (entry): entry is number => typeof entry === "number",
  );
}

function numberMap(source: Record<string, unknown>): Record<string, number> {
  const result: Record<string, number> = {};
  for (const key of Object.keys(source)) {
    const value = source[key];
    if (typeof value === "number") {
      result[key] = value;
    }
  }
  return result;
}

function stringMap(source: Record<string, unknown>): Record<string, string> {
  const result: Record<string, string> = {};
  for (const key of Object.keys(source)) {
    const value = source[key];
    if (typeof value === "string") {
      result[key] = value;
    }
  }
  return result;
}

function boolMap(source: Record<string, unknown>): Record<string, boolean> {
  const result: Record<string, boolean> = {};
  for (const key of Object.keys(source)) {
    if (typeof source[key] === "boolean") {
      result[key] = source[key];
    }
  }
  return result;
}

function nestedNumberMap(
  source: Record<string, unknown>,
): Record<string, Record<string, number>> {
  const result: Record<string, Record<string, number>> = {};
  for (const key of Object.keys(source)) {
    result[key] = numberMap(obj(source, key));
  }
  return result;
}

function dateFrom(value: unknown): Date | null {
  return typeof value === "number" && value > 0 ? new Date(value) : null;
}

function toCrate(
  date: string,
  crate: Record<string, unknown>,
): HypixelPlayerMonthlyCrate {
  return {
    date,
    regular: bool(crate, "REGULAR") || bool(crate, "NORMAL"),
    vip: bool(crate, "VIP"),
    vipPlus: bool(crate, "VIP_PLUS"),
    mvp: bool(crate, "MVP"),
    mvpPlus: bool(crate, "MVP_PLUS"),
  };
}

function adventDays(source: Record<string, unknown>): HypixelPlayerAdventDay[] {
  const days: HypixelPlayerAdventDay[] = [];
  for (let day = 1; day <= 25; day += 1) {
    days.push({ day, claimedAt: date(source, `day${day}`) });
  }
  return days;
}

function parseAchievements(
  raw: Record<string, unknown>,
): HypixelPlayerAchievements {
  const rewardsSource = obj(raw, "achievementRewardsNew");
  const rewards: Record<string, number> = {};
  for (const key of Object.keys(rewardsSource)) {
    if (key.startsWith("for_points_")) {
      const value = rewardsSource[key];
      if (typeof value === "number") {
        rewards[key.replace("for_points_", "")] = value;
      }
    }
  }
  const totem = obj(raw, "achievementTotem");
  return {
    points:
      num(obj(raw, "achievements"), "_legacy_achievement_points") ||
      num(raw, "achievementPoints"),
    rewards,
    tracking: stringList(raw.achievementTracking),
    tiered: numberMap(obj(raw, "achievements")),
    oneTime: stringList(raw.achievementsOneTime),
    oneTimeMenuSort: str(raw, "onetime_achievement_menu_sort"),
    tieredMenuSort: str(raw, "tiered_achievement_menu_sort"),
    sync: numberMap(obj(raw, "achievementSync")),
    totem: {
      canCustomize: bool(totem, "canCustomize"),
      allowedMaxHeight: num(totem, "allowed_max_height"),
      unlockedParts: stringList(totem.unlockedParts),
      selectedParts: stringMap(obj(totem, "selectedParts")),
      unlockedColors: stringList(totem.unlockedColors),
      selectedColors: stringMap(obj(totem, "selectedColors")),
    },
  };
}

function parsePetConsumables(
  source: Record<string, unknown>,
): HypixelPlayerPetConsumables {
  return {
    cake: num(source, "CAKE"),
    cookie: num(source, "COOKIE"),
    feather: num(source, "FEATHER"),
    goldRecord: num(source, "GOLD_RECORD"),
    hayBlock: num(source, "HAY_BLOCK"),
    lavaBucket: num(source, "LAVA_BUCKET"),
    leash: num(source, "LEASH"),
    magmaCream: num(source, "MAGMA_CREAM"),
    melon: num(source, "MELON"),
    milkBucket: num(source, "MILK_BUCKET"),
    mushroomSoup: num(source, "MUSHROOM_SOUP"),
    pork: num(source, "PORK"),
    pumpkinPie: num(source, "PUMPKIN_PIE"),
    rawFish: num(source, "RAW_FISH"),
    slimeBall: num(source, "SLIME_BALL"),
    stick: num(source, "STICK"),
    waterBucket: num(source, "WATER_BUCKET"),
    woodSword: num(source, "WOOD_SWORD"),
    apple: num(source, "APPLE"),
    bakedPotato: num(source, "BAKED_POTATO"),
    cookedBeef: num(source, "COOKED_BEEF"),
    redRose: num(source, "RED_ROSE"),
    wheat: num(source, "WHEAT"),
    bread: num(source, "BREAD"),
    carrot: num(source, "CARROT_ITEM"),
    rottenFlesh: num(source, "ROTTEN_FLESH"),
    bone: num(source, "BONE"),
  };
}

function parsePet(
  packageName: string,
  raw: Record<string, unknown>,
): HypixelPlayerPet {
  const name = packageName.replace("pet_", "");
  const key = name.toUpperCase();
  const stats = obj(obj(raw, "petStats"), key);
  const hunger = obj(stats, "HUNGER");
  const thirst = obj(stats, "THIRST");
  const exercise = obj(stats, "EXERCISE");
  return {
    name,
    nickname: str(stats, "name"),
    experience: num(stats, "experience"),
    hunger: num(hunger, "value"),
    lastFedAt: date(hunger, "timestamp"),
    thirst: num(thirst, "value"),
    lastDrankAt: date(thirst, "timestamp"),
    exercise: num(exercise, "value"),
    lastExercisedAt: date(exercise, "timestamp"),
  };
}

function parseCosmetics(raw: Record<string, unknown>): HypixelPlayerCosmetics {
  const packages = stringList(obj(raw, "vanityMeta").packages);
  return {
    menuSort: str(raw, "collectibles_menu_sort"),
    rankPlusColor: str(raw, "rankPlusColor"),
    monthlyRankColor: str(raw, "monthlyRankColor"),
    selectedGadget: str(raw, "currentGadget"),
    gadget: str(raw, "gadget"),
    selectedParticlePack: str(raw, "particlePack"),
    clickEffect: str(raw, "currentClickEffect"),
    cloak: str(raw, "currentCloak"),
    emote: str(raw, "currentEmote"),
    disguise: str(raw, "disguise"),
    transformation: str(raw, "transformation"),
    wardrobe: str(raw, "wardrobe"),
    outfit: stringMap(obj(raw, "outfit")),
    boxesConvertedToday: num(raw, "vanityConvertedBoxToday"),
    firstBoxConvertedAt: date(raw, "vanityFirstConvertedBox"),
    packages,
    pets: {
      currentPet: str(raw, "currentPet"),
      favorites: str(raw, "vanityFavorites"),
      autoSpawn: bool(raw, "auto_spawn_pet"),
      lastJourneyAt: date(raw, "petJourneyTimestamp"),
      consumables: parsePetConsumables(obj(raw, "petConsumables")),
      owned: packages
        .filter((entry) => entry.startsWith("pet_"))
        .map((entry) => parsePet(entry, raw)),
    },
  };
}

function parseRewards(raw: Record<string, unknown>): HypixelPlayerRewards {
  const crates = obj(raw, "monthlycrates");
  return {
    rewardTokens: num(raw, "adsense_tokens"),
    lastAdsenseGenerateTimeAt: date(raw, "lastAdsenseGenerateTime"),
    lastClaimedReward: num(raw, "lastClaimedReward"),
    rewardHighScore: num(raw, "rewardHighScore"),
    rewardScore: num(raw, "rewardScore"),
    rewardStreak: num(raw, "rewardStreak"),
    rewardConsumed: bool(raw, "rewardConsumed"),
    totalDailyRewards: num(raw, "totalDailyRewards"),
    totalRewards: num(raw, "totalRewards"),
    monthlyCrates: Object.keys(crates).map((month) =>
      toCrate(month, obj(crates, month)),
    ),
    dmCrates: Object.keys(raw)
      .filter((key) => key.startsWith("dmcrates-"))
      .map((key) => toCrate(key.replace("dmcrates-", ""), obj(raw, key))),
  };
}

function parseGifting(source: Record<string, unknown>): HypixelPlayerGifting {
  return {
    bundlesReceived: num(source, "bundlesReceived"),
    realBundlesReceived: num(source, "realBundlesReceived"),
    realBundlesReceivedInc: num(source, "realBundlesReceivedInc"),
    bundlesGiven: num(source, "bundlesGiven"),
    realBundlesGiven: num(source, "realBundlesGiven"),
    giftsGiven: num(source, "giftsGiven"),
    ranksGiven: num(source, "ranksGiven"),
    milestones: stringList(source.milestones),
    rankGiftingMilestones: stringList(source.rankgiftingmilestones),
  };
}

function parseSocialMedia(
  raw: Record<string, unknown>,
): HypixelPlayerSocialMedia {
  const socialMedia = obj(raw, "socialMedia");
  const links = obj(socialMedia, "links");
  const verification: Record<string, string> = {};
  for (const key of Object.keys(socialMedia)) {
    const value = socialMedia[key];
    if (key !== "links" && typeof value === "string") {
      verification[key] = value;
    }
  }
  return {
    discord: str(links, "DISCORD"),
    youtube: str(links, "YOUTUBE"),
    twitch: str(links, "TWITCH"),
    hypixel: str(links, "HYPIXEL"),
    twitter: str(links, "TWITTER"),
    instagram: str(links, "INSTAGRAM"),
    tiktok: str(links, "TIKTOK"),
    prompt: bool(socialMedia, "prompt"),
    verification,
  };
}

function parseHousing(source: Record<string, unknown>): HypixelPlayerHousing {
  return {
    allowedBlocks: stringList(source.allowedBlocks),
    packages: stringList(source.packages),
    tutorialStage: str(source, "tutorialStep"),
    playlist: str(source, "playlist"),
    plotSize: str(source, "plotSize"),
    firstHouseJoinAt: date(source, "firstHouseJoinMs"),
    visibilityDisabled: bool(source, "visibilityDisabled"),
    selectedChannels: stringList(source.selectedChannels_v3),
    playerSettings: stringMap(obj(source, "playerSettings")),
    givenCookies: Object.keys(source)
      .filter((key) => key.startsWith("given_cookies_"))
      .map((key) => ({
        date: key.replace("given_cookies_", ""),
        houses: stringList(source[key]),
      })),
  };
}

function parseQuests(
  source: Record<string, unknown>,
): readonly HypixelPlayerQuest[] {
  return Object.keys(source).map((name) => {
    const completions = obj(source, name).completions;
    return {
      name,
      completions: Array.isArray(completions)
        ? completions.map((entry) => ({
            completedAt: dateFrom(
              typeof entry === "object" && entry !== null
                ? (entry as Record<string, unknown>).time
                : undefined,
            ),
          }))
        : [],
    };
  });
}

function parseParkour(
  raw: Record<string, unknown>,
): readonly HypixelPlayerParkour[] {
  const completions = obj(raw, "parkourCompletions");
  const checkpoints = obj(raw, "parkourCheckpointBests");
  return Object.keys(completions).map((location) => {
    const runs = completions[location];
    const first =
      Array.isArray(runs) && typeof runs[0] === "object" && runs[0] !== null
        ? (runs[0] as Record<string, unknown>)
        : {};
    return {
      location,
      timeStart: num(first, "timeStart"),
      timeTook: num(first, "timeTook"),
      checkpoints: numberValues(obj(checkpoints, location)),
    };
  });
}

const ADVENT_YEAR_KEY = /(\d{4})/;

function parseAdventRewards(
  raw: Record<string, unknown>,
): readonly HypixelPlayerAdventRewards[] {
  return Object.keys(raw)
    .filter((key) => key.startsWith("adventRewards"))
    .map((key) => {
      const source = obj(raw, key);
      const year = ADVENT_YEAR_KEY.exec(key);
      return { year: year ? Number(year[1]) : 0, days: adventDays(source) };
    });
}

function parseSeasonalBingo(
  source: Record<string, unknown>,
): Record<string, Record<string, number>> {
  const result: Record<string, Record<string, number>> = {};
  for (const key of Object.keys(source)) {
    const value = source[key];
    if (typeof value === "object" && value !== null && !Array.isArray(value)) {
      result[key] = numberMap(
        obj(value as Record<string, unknown>, "objectives"),
      );
    }
  }
  return result;
}

function parseSeasonalEvent(
  year: string,
  source: Record<string, unknown>,
): HypixelPlayerSeasonalEvent {
  const bingo = obj(source, "bingo");
  const mainLobbyEgghunt: Record<string, boolean> = {};
  for (const key of Object.keys(source)) {
    if (
      key.startsWith("mainlobby_egghunt_") &&
      typeof source[key] === "boolean"
    ) {
      mainLobbyEgghunt[key.replace("mainlobby_egghunt_", "")] = source[
        key
      ] as boolean;
    }
  }
  return {
    year,
    experience: num(obj(source, "levelling"), "experience"),
    adventRewards: numberMap(obj(source, "adventRewards")),
    presents: boolMap(obj(source, "presents")),
    completedHolidayQuests: num(source, "completed_holiday_quests"),
    bedWarsWinsAchievement: num(source, "bedWarsWinsAchievement"),
    duelsWinsAchievement: num(source, "duelsWinsAchievement"),
    skyBlockAlchemistIntro: bool(source, "skyBlockAlchemistIntro"),
    eggs: boolMap(obj(obj(source, "egghunt"), "eggs")),
    mainLobbyEgghunt,
    candyHuntBaskets: numberList(obj(source, "candyhunt").baskets),
    bingoPinned: str(bingo, "pinned"),
    bingo: parseSeasonalBingo(bingo),
  };
}

function parseSeasonalEvents(
  seasonal: Record<string, unknown>,
  key: string,
): readonly HypixelPlayerSeasonalEvent[] {
  const source = obj(seasonal, key);
  return Object.keys(source).map((year) =>
    parseSeasonalEvent(year, obj(source, year)),
  );
}

function parseSeasonal(raw: Record<string, unknown>): HypixelPlayerSeasonal {
  const seasonal = obj(raw, "seasonal");
  const christmas = obj(seasonal, "christmas");
  const eventShop = obj(seasonal, "eventShopSorting");
  return {
    silver: num(seasonal, "silver"),
    eventShopSorting: {
      currentSort: str(eventShop, "currentSort"),
      ownedFirst: bool(eventShop, "ownedFirst"),
    },
    christmas: parseSeasonalEvents(seasonal, "christmas"),
    easter: parseSeasonalEvents(seasonal, "easter"),
    halloween: parseSeasonalEvents(seasonal, "halloween"),
    summer: parseSeasonalEvents(seasonal, "summer"),
    anniversary: parseSeasonalEvents(seasonal, "anniversary"),
    christmasAdventRewards: Object.keys(christmas).map((year) => ({
      year: Number(year) || 0,
      days: adventDays(obj(obj(christmas, year), "adventRewards")),
    })),
  };
}

function parseScorpiusBribes(
  raw: Record<string, unknown>,
): readonly HypixelPlayerScorpiusBribe[] {
  return Object.keys(raw)
    .filter((key) => key.startsWith("scorpius_bribe_"))
    .map((key) => ({
      year: Number(key.replace("scorpius_bribe_", "")) || 0,
      claimedAt: date(raw, key),
    }));
}

function parseTourney(source: Record<string, unknown>): HypixelPlayerTourney {
  const entries: HypixelPlayerTournamentEntry[] = [];
  for (const key of Object.keys(source)) {
    const value = source[key];
    if (typeof value === "object" && value !== null && !Array.isArray(value)) {
      const entry = value as Record<string, unknown>;
      entries.push({
        key,
        gamesPlayed: num(entry, "games_played"),
        playtime: num(entry, "playtime"),
        tributesEarned: num(entry, "tributes_earned"),
        firstWinAt: date(entry, "first_win"),
        firstGameAt: date(entry, "first_game"),
        claimedRankingRewardAt: date(entry, "claimed_ranking_reward"),
        seenRewardBook: bool(entry, "seenRPbook"),
      });
    }
  }
  return {
    firstJoinLobbyAt: date(source, "first_join_lobby"),
    totalTributes: num(source, "total_tributes"),
    entries,
  };
}

function parseFireworks(value: unknown): readonly HypixelPlayerFirework[] {
  if (!Array.isArray(value)) {
    return [];
  }
  const result: HypixelPlayerFirework[] = [];
  for (const entry of value) {
    if (typeof entry === "object" && entry !== null && !Array.isArray(entry)) {
      const firework = entry as Record<string, unknown>;
      result.push({
        flightDuration: num(firework, "flight_duration"),
        shape: str(firework, "shape"),
        trail: bool(firework, "trail"),
        twinkle: bool(firework, "twinkle"),
        colors: str(firework, "colors"),
        fadeColors: str(firework, "fade_colors"),
        selected: bool(firework, "selected"),
      });
    }
  }
  return result;
}

function parseSoloBank(raw: Record<string, unknown>): Record<string, number> {
  const result: Record<string, number> = {};
  for (const key of Object.keys(raw)) {
    if (key.startsWith("claimed_solo_bank_") && typeof raw[key] === "number") {
      result[key.replace("claimed_solo_bank_", "")] = raw[key];
    }
  }
  return result;
}

function parseXmas2019(raw: Record<string, unknown>): Record<string, boolean> {
  const result: Record<string, boolean> = {};
  for (const key of Object.keys(raw)) {
    if (key.startsWith("xmas2019_") && typeof raw[key] === "boolean") {
      result[key.replace("xmas2019_", "")] = raw[key];
    }
  }
  return result;
}

const COOLDOWN_KEY = /Cooldowns2?$/;

function parseCooldowns(
  raw: Record<string, unknown>,
): Record<string, Record<string, boolean>> {
  const result: Record<string, Record<string, boolean>> = {};
  for (const key of Object.keys(raw)) {
    if (COOLDOWN_KEY.test(key)) {
      result[key.replace(COOLDOWN_KEY, "")] = boolMap(obj(raw, key));
    }
  }
  return result;
}

function parseStats(
  stats: Record<string, unknown>,
  achievements: Record<string, unknown>,
): HypixelPlayerStats {
  const bedwarsRaw = obj(stats, "Bedwars");
  return {
    bedwars:
      Object.keys(bedwarsRaw).length > 0
        ? parseBedWars(bedwarsRaw, num(achievements, "bedwars_level"))
        : null,
    skywars: parseSkyWars(stats),
    duels: parseDuels(stats),
    arcade: parseArcade(stats),
    buildBattle: parseBuildBattle(stats),
    murderMystery: parseMurderMystery(stats),
    tntGames: parseTNTGames(stats),
    pit: parsePit(stats),
    megaWalls: parseMegaWalls(obj(stats, "Walls3")),
    blitz: parseBlitz(stats),
    uhc: parseUHC(stats),
    smashHeroes: parseSmashHeroes(obj(stats, "SuperSmash")),
    copsAndCrims: parseCopsAndCrims(stats),
    paintball: parsePaintball(stats),
    quakecraft: parseQuakecraft(stats),
    vampireZ: parseVampireZ(stats),
    walls: parseWalls(stats),
    warlords: parseWarlords(obj(stats, "Battleground")),
    turboKartRacers: parseTurboKartRacers(obj(stats, "GingerBread")),
    arenaBrawl: parseArenaBrawl(stats),
    woolGames: parseWoolGames(obj(stats, "WoolGames")),
    speedUHC: parseSpeedUHC(obj(stats, "SpeedUHC")),
    skyClash: parseSkyClash(obj(stats, "SkyClash")),
    trueCombat: parseTrueCombat(obj(stats, "TrueCombat")),
    legacy: parseLegacy(obj(stats, "Legacy")),
    mainLobby: parseMainLobby(obj(stats, "MainLobby")),
    housing: parseHousingStats(obj(stats, "Housing")),
    skyblock: parseSkyBlockStats(obj(stats, "SkyBlock")),
  };
}

/** Parses a player (`/player`) into a typed object. */
export function parsePlayer(raw: Record<string, unknown>): HypixelPlayer {
  return {
    id: str(raw, "_id"),
    uuid: str(raw, "uuid") || "UNKNOWN",
    nickname: str(raw, "displayname") || "UNKNOWN",
    playerName: str(raw, "playername"),
    prefix: str(raw, "prefix"),
    staffRank: str(raw, "rank"),
    packageRank: str(raw, "packageRank"),
    newPackageRank: str(raw, "newPackageRank"),
    monthlyPackageRank: str(raw, "monthlyPackageRank"),
    mostRecentMonthlyPackageRank: str(raw, "mostRecentMonthlyPackageRank"),
    networkExp: num(raw, "networkExp"),
    karma: num(raw, "karma"),
    language: str(raw, "userLanguage") || "ENGLISH",
    channel: str(raw, "channel") || "ALL",
    networkUpdateBook: str(raw, "network_update_book"),
    mostRecentMinecraftVersion: num(raw, "mostRecentMinecraftVersion"),
    timePlaying: num(raw, "timePlaying"),
    tournamentTokens: num(raw, "tournamentTokens"),
    fortuneBuff: num(raw, "fortuneBuff"),
    giftsGrinch: num(raw, "gifts_grinch"),
    thanksReceived: num(raw, "thanksReceived"),
    thanksSent: num(raw, "thanksSent"),
    mostRecentlyThanked: str(raw, "mostRecentlyThanked"),
    mostRecentlyThankedUuid: str(raw, "mostRecentlyThankedUuid"),
    mostRecentlyTipped: str(raw, "mostRecentlyTipped"),
    mostRecentlyTippedUuid: str(raw, "mostRecentlyTippedUuid"),
    santaQuestStarted: bool(raw, "SANTA_QUEST_STARTED"),
    autoSpawnPet: bool(raw, "auto_spawn_pet"),
    battlePassGlowStatus: bool(raw, "battlePassGlowStatus"),
    clock: bool(raw, "clock"),
    main2017Tutorial: bool(raw, "main2017Tutorial"),
    mostRecentGameType: str(raw, "mostRecentGameType"),
    mapVotes: nestedNumberMap(obj(raw, "map_votes")),
    cachedData: {
      superstarMonths: {
        value: num(obj(obj(raw, "cachedData"), "superstarMonths"), "value"),
        lastUpdatedAt: date(
          obj(obj(raw, "cachedData"), "superstarMonths"),
          "lastUpdated",
        ),
      },
    },
    skyblockExtra: {
      ozanneCoins: num(obj(raw, "skyblock_extra"), "ozanne_coins"),
    },
    chatEnabled: bool(raw, "chat"),
    disableTipMessages: bool(raw, "disableTipMessages"),
    disabledProjectileTrails: bool(raw, "disabledProjectileTrails"),
    eulaCoins: bool(raw, "eulaCoins"),
    seeRequests: bool(raw, "seeRequests"),
    testPass: bool(raw, "testPass"),
    questAutoActivate: bool(obj(raw, "questSettings"), "autoActivate"),
    firstLoginAt: date(raw, "firstLogin"),
    lastLoginAt: date(raw, "lastLogin"),
    lastLogoutAt: date(raw, "lastLogout"),
    claimedCenturyCakeAt: date(raw, "claimed_century_cake"),
    claimedCenturyCake200At: date(raw, "claimed_century_cake200"),
    claimedYear143CakeAt: date(raw, "claimed_year143_cake"),
    claimedPotatoWarCrownAt: date(raw, "claim_potato_war_crown"),
    claimedPotatoBasketAt: date(raw, "claimed_potato_basket"),
    claimedPotatoTalismanAt: date(raw, "claimed_potato_talisman"),
    claimedSoloBank: parseSoloBank(raw),
    skyBlockFreeCookieAt: date(raw, "skyblock_free_cookie"),
    lastMapVoteAt: date(raw, "lastMapVote"),
    flashingSale: {
      clicks: num(raw, "flashingSaleClicks"),
      opens: num(raw, "flashingSaleOpens"),
      poppedUp: num(raw, "flashingSalePoppedUp"),
      lastPopupAt: date(raw, "flashingSalePopup"),
    },
    challenges: nestedNumberMap(obj(raw, "challenges")),
    compassStats: nestedNumberMap(obj(raw, "compassStats")),
    voting: numberMap(obj(raw, "voting")),
    leveling: {
      claimedRewards: numberList(obj(raw, "leveling").claimedRewards),
    },
    dailyTwoKExpAt: date(obj(raw, "eugene"), "dailyTwoKExp"),
    anniversary: {
      npcProgress2020: num(raw, "anniversaryNPCProgress2020"),
      npcVisited2020: numberList(raw.anniversaryNPCVisited2020),
    },
    cooldowns: parseCooldowns(raw),
    xmas2019: parseXmas2019(raw),
    achievements: parseAchievements(raw),
    cosmetics: parseCosmetics(raw),
    rankPurchase: {
      vipAt: date(raw, "levelUp_VIP"),
      vipPlusAt: date(raw, "levelUp_VIP_PLUS"),
      mvpAt: date(raw, "levelUp_MVP"),
      mvpPlusAt: date(raw, "levelUp_MVP_PLUS"),
    },
    rewards: parseRewards(raw),
    gifting: parseGifting(obj(raw, "giftingMeta")),
    socialMedia: parseSocialMedia(raw),
    housing: parseHousing(obj(raw, "housingMeta")),
    quests: parseQuests(obj(raw, "quests")),
    parkour: parseParkour(raw),
    adventRewards: parseAdventRewards(raw),
    seasonal: parseSeasonal(raw),
    scorpiusBribes: parseScorpiusBribes(raw),
    tourney: parseTourney(obj(raw, "tourney")),
    fireworkStorage: parseFireworks(raw.fireworkStorage),
    friendRequests: stringList(raw.friendRequests),
    stats: parseStats(obj(raw, "stats"), obj(raw, "achievements")),
  };
}

