import { bool, date, num, obj, str } from "./common";
import { decodeItemBytes, NbtItem } from "./nbt";

export type SkyBlockScalarMap = Record<string, number | string | boolean>;

export interface SkyBlockInventory {
  readonly type: number;
  readonly items: readonly NbtItem[];
}

export interface SkyBlockItemBytes {
  readonly type: number;
  readonly data: string;
}

export interface SkyBlockEssences {
  readonly wither: number;
  readonly dragon: number;
  readonly spider: number;
  readonly undead: number;
  readonly diamond: number;
  readonly gold: number;
  readonly ice: number;
  readonly crimson: number;
}

export interface SkyBlockCurrencies {
  readonly coinPurse: number;
  readonly motesPurse: number;
  readonly essences: SkyBlockEssences;
}

export interface SkyBlockFairySouls {
  readonly exchanges: number;
  readonly collected: number;
  readonly unspent: number;
}

export interface SkyBlockLeveling {
  readonly experience: number;
  readonly highestPetScore: number;
  readonly miningFiestaOresMined: number;
  readonly fishingFestivalSharksKilled: number;
  readonly taskSort: string;
  readonly selectedSymbol: string;
  readonly bopBonus: string;
  readonly claimedTalisman: boolean;
  readonly migrated: boolean;
  readonly migratedCompletions2: boolean;
  readonly completedTasks: readonly string[];
  readonly lastViewedTasks: readonly string[];
  readonly emblemUnlocks: readonly string[];
  readonly categoryExpanded: boolean;
  readonly completions: Record<string, number>;
}

export interface SkyBlockCoopInvitation {
  readonly timestamp: number;
  readonly invitedBy: string;
  readonly confirmed: boolean;
  readonly confirmedTimestamp: number;
}

export interface SkyBlockProfileStats {
  readonly firstJoin: Date | null;
  readonly personalBankUpgrade: number;
  readonly bankAccount: number;
  readonly hasCookieBuff: boolean;
  readonly coopInvitation: SkyBlockCoopInvitation | null;
}

export interface SkyBlockItemData {
  readonly soulflow: number;
  readonly favoriteArrow: string;
  readonly teleporterPillConsumed: boolean;
}

export interface SkyBlockSlayerBoss {
  readonly xp: number;
  readonly bossKillsTier0: number;
  readonly bossKillsTier1: number;
  readonly bossKillsTier2: number;
  readonly bossKillsTier3: number;
  readonly bossKillsTier4: number;
  readonly bossAttemptsTier1: number;
  readonly bossAttemptsTier2: number;
  readonly bossAttemptsTier3: number;
  readonly bossAttemptsTier4: number;
  readonly claimedLevels: Record<string, boolean>;
}

export interface SkyBlockSlayerRecentKill {
  readonly xp: number;
  readonly timestamp: number;
}

export interface SkyBlockSlayerQuest {
  readonly type: string;
  readonly tier: number;
  readonly startTimestamp: number;
  readonly completionState: number;
  readonly usedArmor: boolean;
  readonly solo: boolean;
  readonly combatXp: number;
  readonly recentMobKills: readonly SkyBlockSlayerRecentKill[];
  readonly lastKilledMobIsland: string;
  readonly xpOnLastFollowerSpawn: number;
  readonly spawnTimestamp: number;
}

export interface SkyBlockSlayers {
  readonly activeQuest: SkyBlockSlayerQuest | null;
  readonly bosses: Record<string, SkyBlockSlayerBoss>;
}

export interface SkyBlockDungeonRun {
  readonly timestamp: number;
  readonly scoreExploration: number;
  readonly scoreSpeed: number;
  readonly scoreSkill: number;
  readonly scoreBonus: number;
  readonly dungeonClass: string;
  readonly teammates: readonly string[];
  readonly elapsedTime: number;
  readonly damageDealt: number;
  readonly deaths: number;
  readonly mobsKilled: number;
  readonly secretsFound: number;
  readonly damageMitigated: number;
  readonly allyHealing: number;
}

export interface SkyBlockDungeonMode {
  readonly experience: number;
  readonly highestTierCompleted: number;
  readonly timesPlayed: Record<string, number>;
  readonly tierCompletions: Record<string, number>;
  readonly milestoneCompletions: Record<string, number>;
  readonly bestScore: Record<string, number>;
  readonly mobsKilled: Record<string, number>;
  readonly mostMobsKilled: Record<string, number>;
  readonly mostDamageBerserk: Record<string, number>;
  readonly mostDamageMage: Record<string, number>;
  readonly mostDamageHealer: Record<string, number>;
  readonly mostDamageTank: Record<string, number>;
  readonly mostDamageArcher: Record<string, number>;
  readonly mostHealingDealt: Record<string, number>;
  readonly watcherKills: Record<string, number>;
  readonly fastestTime: Record<string, number>;
  readonly fastestTimeS: Record<string, number>;
  readonly fastestTimeSPlus: Record<string, number>;
  readonly bestRuns: Record<string, readonly SkyBlockDungeonRun[]>;
}

export interface SkyBlockDungeonClass {
  readonly experience: number;
}

export interface SkyBlockDungeonDailyRuns {
  readonly currentDayStamp: number;
  readonly completedRunsCount: number;
}

export interface SkyBlockDungeonTreasureParticipant {
  readonly playerUuid: string;
  readonly displayName: string;
  readonly classMilestone: number;
}

export interface SkyBlockDungeonTreasureRun {
  readonly runId: string;
  readonly completionTimestamp: number;
  readonly type: string;
  readonly dungeonTier: number;
  readonly participants: readonly SkyBlockDungeonTreasureParticipant[];
}

export interface SkyBlockDungeonTreasureChest {
  readonly runId: string;
  readonly chestId: string;
  readonly treasureType: string;
  readonly quality: number;
  readonly shinyEligible: boolean;
  readonly paid: boolean;
  readonly rerolls: number;
  readonly rewards: readonly string[];
  readonly rolledRngMeterRandomly: boolean;
}

export interface SkyBlockDungeonTreasures {
  readonly runs: readonly SkyBlockDungeonTreasureRun[];
  readonly chests: readonly SkyBlockDungeonTreasureChest[];
}

export interface SkyBlockDungeonHubRaceSettings {
  readonly selectedRace: string;
  readonly selectedSetting: string;
  readonly runback: boolean;
}

export interface SkyBlockDungeons {
  readonly catacombs: SkyBlockDungeonMode;
  readonly masterCatacombs: SkyBlockDungeonMode;
  readonly selectedClass: string;
  readonly classExperience: Record<string, SkyBlockDungeonClass>;
  readonly secrets: number;
  readonly lastDungeonRun: string;
  readonly dungeonsBlahBlah: readonly string[];
  readonly hubRaceSettings: SkyBlockDungeonHubRaceSettings;
  readonly dailyRuns: SkyBlockDungeonDailyRuns;
  readonly unlockedJournals: readonly string[];
  readonly treasures: SkyBlockDungeonTreasures;
}

export interface SkyBlockSkillExperience {
  readonly farming: number;
  readonly mining: number;
  readonly combat: number;
  readonly foraging: number;
  readonly fishing: number;
  readonly enchanting: number;
  readonly alchemy: number;
  readonly carpentry: number;
  readonly runecrafting: number;
  readonly social: number;
  readonly taming: number;
  readonly hunting: number;
}

export interface SkyBlockActiveEffectModifier {
  readonly key: string;
  readonly amp: number;
}

export interface SkyBlockActiveEffect {
  readonly effect: string;
  readonly level: number;
  readonly modifiers: readonly SkyBlockActiveEffectModifier[];
  readonly ticksRemaining: number;
  readonly infinite: boolean;
}

export interface SkyBlockTemporaryStatBuff {
  readonly stat: number;
  readonly key: string;
  readonly amount: number;
  readonly expireAt: number;
}

export interface SkyBlockPlayerData {
  readonly deaths: number;
  readonly lastDeath: number;
  readonly reaperPeppersEaten: number;
  readonly fishingTreasureCaught: number;
  readonly fastestTargetPractice: number;
  readonly visitedZones: readonly string[];
  readonly visitedModes: readonly string[];
  readonly achievementSpawnedIslandTypes: readonly string[];
  readonly unlockedCollectionTiers: readonly string[];
  readonly craftedGenerators: readonly string[];
  readonly pausedEffects: readonly string[];
  readonly disabledPotionEffects: readonly string[];
  readonly activeEffects: readonly SkyBlockActiveEffect[];
  readonly temporaryStatBuffs: readonly SkyBlockTemporaryStatBuff[];
  readonly perks: Record<string, number>;
  readonly gardenChips: Record<string, number>;
  readonly skillExperience: SkyBlockSkillExperience;
  readonly experience: Record<string, number>;
}

export interface SkyBlockJacobContestsPerks {
  readonly doubleDrops: number;
  readonly farmingLevelCap: number;
  readonly personalBests: boolean;
}

export interface SkyBlockJacobContestEntry {
  readonly collected: number;
  readonly claimedRewards: boolean;
  readonly claimedPosition: number;
  readonly claimedParticipants: number;
  readonly claimedMedal: string;
}

export interface SkyBlockJacobContests {
  readonly medalsInventory: Record<string, number>;
  readonly perks: SkyBlockJacobContestsPerks;
  readonly uniqueBrackets: Record<string, readonly string[]>;
  readonly personalBests: Record<string, number>;
  readonly talkedToJacob: boolean;
  readonly migration: boolean;
  readonly contests: Record<string, SkyBlockJacobContestEntry>;
}

export interface SkyBlockAccessoryBag {
  readonly selectedPower: string | null;
  readonly unlockedPowers: readonly string[];
  readonly bagUpgradesPurchased: number;
  readonly highestMagicalPower: number;
  readonly highestUnlockedTuningSlot: number;
  readonly tuningSlots: Record<string, Record<string, number>>;
}

export interface SkyBlockBestiary {
  readonly migration: boolean;
  readonly migratedStats: boolean;
  readonly lastClaimedMilestone: number;
  readonly maxKillsVisible: boolean;
  readonly kills: Record<string, number>;
  readonly deaths: Record<string, number>;
}

export interface SkyBlockToolkit {
  readonly isUnlocked: boolean;
  readonly inUse: Record<string, Record<string, boolean>>;
  readonly tools: Record<string, readonly SkyBlockItemBytes[]>;
}

export interface SkyBlockMemberGarden {
  readonly copper: number;
  readonly larvaConsumed: number;
  readonly analyzedGreenhouseCrops: readonly string[];
  readonly discoveredGreenhouseCrops: readonly string[];
  readonly farmingToolkit: SkyBlockToolkit;
}

export interface SkyBlockMiningCrystal {
  readonly state: string;
  readonly totalPlaced: number;
  readonly totalFound: number;
}

export interface SkyBlockMiningBiomePrecursor {
  readonly partsDelivered: readonly string[];
}

export interface SkyBlockMiningBiomeDwarven {
  readonly statuesPlaced: Record<string, string>;
}

export interface SkyBlockMiningBiomeGoblin {
  readonly kingQuestActive: boolean;
  readonly kingQuestsCompleted: number;
}

export interface SkyBlockMiningBiomes {
  readonly precursor: SkyBlockMiningBiomePrecursor;
  readonly dwarven: SkyBlockMiningBiomeDwarven;
  readonly goblin: SkyBlockMiningBiomeGoblin;
}

export interface SkyBlockMiningCore {
  readonly experience: number;
  readonly tokens: number;
  readonly tokensSpent: number;
  readonly receivedFreeTier: boolean;
  readonly powderMithril: number;
  readonly powderMithrilTotal: number;
  readonly powderSpentMithril: number;
  readonly powderGemstone: number;
  readonly powderGemstoneTotal: number;
  readonly powderSpentGemstone: number;
  readonly powderGlacite: number;
  readonly powderGlaciteTotal: number;
  readonly powderSpentGlacite: number;
  readonly selectedPickaxeAbility: string;
  readonly dailyEffect: string;
  readonly dailyEffectLastChanged: number;
  readonly retroactiveTier2Token: boolean;
  readonly dailyOresMined: number;
  readonly dailyOresMinedDay: number;
  readonly dailyOresMinedMithrilOre: number;
  readonly dailyOresMinedDayMithrilOre: number;
  readonly dailyOresMinedGemstone: number;
  readonly dailyOresMinedDayGemstone: number;
  readonly dailyOresMinedGlacite: number;
  readonly dailyOresMinedDayGlacite: number;
  readonly greaterMinesLastAccess: number;
  readonly nodes: Record<string, number | boolean>;
  readonly crystals: Record<string, SkyBlockMiningCrystal>;
  readonly biomes: SkyBlockMiningBiomes;
}

export interface SkyBlockForgeProcess {
  readonly type: string;
  readonly id: string;
  readonly startTime: number;
  readonly slot: number;
  readonly notified: boolean;
  readonly oldItem: string | null;
}

export interface SkyBlockForge {
  readonly forgeProcesses: Record<string, Record<string, SkyBlockForgeProcess>>;
}

export interface SkyBlockGlacitePlayerData {
  readonly fossilsDonated: readonly string[];
  readonly fossilDust: number;
  readonly corpsesLooted: Record<string, number>;
  readonly mineshaftsEntered: number;
}

export interface SkyBlockPet {
  readonly uuid: string | null;
  readonly uniqueId: string | null;
  readonly type: string;
  readonly experience: number;
  readonly active: boolean;
  readonly tier: string;
  readonly heldItem: string | null;
  readonly heldItemUuid: string | null;
  readonly candyUsed: number;
  readonly soulbound: boolean;
  readonly skin: string | null;
  readonly extra: Record<string, number>;
}

export interface SkyBlockAutopetRuleException {
  readonly id: string;
  readonly data: SkyBlockScalarMap;
}

export interface SkyBlockAutopetRule {
  readonly uuid: string;
  readonly id: string;
  readonly name: string;
  readonly uniqueId: string;
  readonly exceptions: readonly SkyBlockAutopetRuleException[];
  readonly disabled: boolean;
  readonly data: SkyBlockScalarMap;
}

export interface SkyBlockPets {
  readonly pets: readonly SkyBlockPet[];
  readonly coinsSpentOnPetCare: number;
  readonly sacrificedPetTypes: readonly string[];
  readonly autopetRulesLimit: number;
  readonly autopetRules: readonly SkyBlockAutopetRule[];
  readonly autopetMigrated: boolean;
  readonly autopetMigrated2: boolean;
}

export interface SkyBlockChocolateUpgrades {
  readonly clickUpgrades: number;
  readonly chocolateMultiplierUpgrades: number;
  readonly rabbitRarityUpgrades: number;
}

export interface SkyBlockChocolateTimeTower {
  readonly charges: number;
  readonly level: number;
  readonly activationTime: number;
  readonly lastChargeTime: number;
}

export interface SkyBlockChocolateHitmen {
  readonly rabbitHitmenSlots: number;
  readonly missedUncollectedEggs: number;
  readonly eggSlotCooldownMark: number;
  readonly eggSlotCooldownSum: number;
}

export interface SkyBlockChocolateCollectedEggs {
  readonly breakfast: number;
  readonly lunch: number;
  readonly dinner: number;
  readonly brunch: number;
  readonly dejeuner: number;
  readonly supper: number;
}

export interface SkyBlockChocolateRabbits {
  readonly collectedEggs: SkyBlockChocolateCollectedEggs;
  readonly collectedLocations: Record<string, readonly string[]>;
  readonly found: Record<string, number>;
}

export interface SkyBlockChocolateShop {
  readonly year: number;
  readonly rabbits: readonly string[];
  readonly chocolateSpent: number;
  readonly cocoaFortuneUpgrades: number;
  readonly rabbitsPurchased: readonly string[];
}

export interface SkyBlockChocolateFactory {
  readonly chocolate: number;
  readonly chocolateSincePrestige: number;
  readonly totalChocolate: number;
  readonly prestigeLevel: number;
  readonly barnCapacityLevel: number;
  readonly supremeChocolateBars: number;
  readonly refinedDarkCacaoTruffles: number;
  readonly rabbitSort: string;
  readonly rabbitFilter: string;
  readonly lastViewed: number;
  readonly employees: Record<string, number>;
  readonly upgrades: SkyBlockChocolateUpgrades;
  readonly timeTower: SkyBlockChocolateTimeTower;
  readonly rabbitHitmen: SkyBlockChocolateHitmen;
  readonly rabbits: SkyBlockChocolateRabbits;
  readonly shop: SkyBlockChocolateShop;
}

export interface SkyBlockKuudraPartyFinder {
  readonly searchTier: string;
  readonly groupBuildTier: string;
  readonly groupBuildNote: string;
  readonly groupBuildRequiredCombatLevel: number;
}

export interface SkyBlockAbiphoneContact {
  readonly talkedTo: boolean;
  readonly completedQuest: boolean;
  readonly incomingCallsCount: number;
  readonly lastCallIncoming: number;
}

export interface SkyBlockAbiphone {
  readonly contactData: Record<string, SkyBlockAbiphoneContact>;
  readonly activeContacts: readonly string[];
  readonly selectedRingtone: string;
  readonly selectedSort: string;
  readonly games: Record<string, number>;
  readonly operatorChip: Record<string, number>;
  readonly trioContactAddons: number;
  readonly hasUsedSiriusPersonalPhoneNumberItem: boolean;
  readonly lastDyeCalledYear: number;
}

export interface SkyBlockMatriarch {
  readonly pearlsCollected: number;
  readonly lastAttempt: number;
  readonly recentRefreshes: readonly number[];
}

export interface SkyBlockCrimsonIsleChickenQuest {
  readonly start: boolean;
  readonly progress: number;
  readonly collected: readonly string[];
}

export interface SkyBlockCrimsonIsleQuests {
  readonly questData: Record<string, SkyBlockObjective>;
  readonly minibossKills: Record<string, boolean>;
  readonly minibossDaily: SkyBlockScalarMap;
  readonly kuudraBossDaily: SkyBlockScalarMap;
  readonly questRewards: SkyBlockScalarMap;
  readonly alchemistQuest: SkyBlockScalarMap;
  readonly rulenor: SkyBlockScalarMap;
  readonly chickenQuest: SkyBlockCrimsonIsleChickenQuest;
  readonly pomtairQuest: SkyBlockScalarMap;
  readonly suusQuest: SkyBlockScalarMap;
  readonly pabloQuest: SkyBlockScalarMap;
  readonly duelTrainingQuest: SkyBlockScalarMap;
  readonly sirihQuest: SkyBlockScalarMap;
  readonly edelisQuest: SkyBlockScalarMap;
  readonly mollimQuest: SkyBlockScalarMap;
  readonly aranyaQuest: SkyBlockScalarMap;
  readonly lastReset: number;
  readonly paidBruuh: boolean;
  readonly chickenQuestHandedIn: number;
  readonly foundKuudraBook: boolean;
  readonly foundKuudraLeggings: boolean;
  readonly foundKuudraBoots: boolean;
  readonly foundKuudraChestplate: boolean;
  readonly lastKuudraRelic: number;
  readonly kuudraLoremaster: boolean;
}

export interface SkyBlockCrimsonIsle {
  readonly selectedFaction: string;
  readonly magesReputation: number;
  readonly magesReputationHighest: number;
  readonly barbariansReputation: number;
  readonly barbariansReputationHighest: number;
  readonly lastMinibossesKilled: readonly string[];
  readonly kuudraCompletedTiers: Record<string, number>;
  readonly kuudraPartyFinder: SkyBlockKuudraPartyFinder;
  readonly dojo: Record<string, number>;
  readonly abiphone: SkyBlockAbiphone;
  readonly matriarch: SkyBlockMatriarch;
  readonly quests: SkyBlockCrimsonIsleQuests;
}

export interface SkyBlockTrophyFish {
  readonly rewards: readonly number[];
  readonly totalCaught: number;
  readonly lastCaught: string;
  readonly catches: Record<string, number>;
}

export interface SkyBlockObjective {
  readonly status: string;
  readonly progress: number;
  readonly completedAt: number;
}

export interface SkyBlockObjectives {
  readonly tutorial: readonly string[];
  readonly objectives: Record<string, SkyBlockObjective>;
}

export interface SkyBlockHarpQuest {
  readonly selectedSong: string;
  readonly selectedSongEpoch: number;
  readonly claimedTalisman: boolean;
  readonly songs: Record<string, number>;
}

export interface SkyBlockTrapperQuest {
  readonly peltCount: number;
  readonly lastTaskTime: number;
}

export interface SkyBlockQuests {
  readonly trapper: SkyBlockTrapperQuest;
}

export interface SkyBlockPlayerStatsAuctions {
  readonly bids: number;
  readonly highestBid: number;
  readonly won: number;
  readonly goldSpent: number;
  readonly created: number;
  readonly fees: number;
  readonly completed: number;
  readonly goldEarned: number;
  readonly noBids: number;
  readonly totalBought: Record<string, number>;
  readonly totalSold: Record<string, number>;
}

export interface SkyBlockSpookyFestivalCandy {
  readonly greenCandy: number;
  readonly purpleCandy: number;
}

export interface SkyBlockPlayerStatsCandy {
  readonly total: number;
  readonly greenCandy: number;
  readonly purpleCandy: number;
  readonly festivals: Record<string, SkyBlockSpookyFestivalCandy>;
}

export interface SkyBlockPlayerStatsGifts {
  readonly totalReceived: number;
  readonly totalGiven: number;
}

export interface SkyBlockPlayerStatsMythos {
  readonly kills: number;
  readonly burrowsDugNext: Record<string, number>;
  readonly burrowsDugCombat: Record<string, number>;
  readonly burrowsDugTreasure: Record<string, number>;
  readonly burrowsChainsComplete: Record<string, number>;
}

export interface SkyBlockPlayerStatsWinter {
  readonly mostSnowballsHit: number;
  readonly mostDamageDealt: number;
  readonly mostMagmaDamageDealt: number;
  readonly mostCannonballsHit: number;
}

export interface SkyBlockPlayerStatsDragonFight {
  readonly enderCrystalsDestroyed: number;
  readonly mostDamage: Record<string, number>;
  readonly highestRank: Record<string, number>;
  readonly fastestKill: Record<string, number>;
  readonly amountSummoned: Record<string, number>;
  readonly summoningEyesContributed: Record<string, number>;
}

export interface SkyBlockPlayerStatsEndIsland {
  readonly summoningEyesCollected: number;
  readonly specialZealotLootCollected: number;
  readonly dragonFight: SkyBlockPlayerStatsDragonFight;
}

export interface SkyBlockPlayerStatsSpooky {
  readonly batsSpawned: Record<string, number>;
}

export interface SkyBlockPlayerStats {
  readonly highestDamage: number;
  readonly highestCriticalDamage: number;
  readonly glowingMushroomsBroken: number;
  readonly seaCreatureKills: number;
  readonly kills: Record<string, number>;
  readonly deaths: Record<string, number>;
  readonly itemsFished: Record<string, number>;
  readonly auctions: SkyBlockPlayerStatsAuctions;
  readonly candyCollected: SkyBlockPlayerStatsCandy;
  readonly gifts: SkyBlockPlayerStatsGifts;
  readonly mythos: SkyBlockPlayerStatsMythos;
  readonly winter: SkyBlockPlayerStatsWinter;
  readonly endIsland: SkyBlockPlayerStatsEndIsland;
  readonly spooky: SkyBlockPlayerStatsSpooky;
  readonly rift: Record<string, number | Record<string, number>>;
  readonly shardCombatHunts: number;
  readonly shardFishingHunts: number;
  readonly shardTrapHunts: number;
  readonly shardForestHunts: number;
  readonly shardSaltHunts: number;
  readonly uniqueShards: number;
  readonly races: Record<string, number | Record<string, number>>;
  readonly pets: Record<string, number>;
}

export interface SkyBlockExperimentation {
  readonly claimsResets: number;
  readonly claimsResetsTimestamp: number;
  readonly serumsDrank: number;
  readonly claimedRetroactiveRng: boolean;
  readonly chargeTrackTimestamp: number;
  readonly pairings: Record<string, number>;
  readonly simon: Record<string, number>;
  readonly numbers: Record<string, number>;
}

export interface SkyBlockRiftAccess {
  readonly lastFree: number;
  readonly chargeTrackTimestamp: number;
}

export interface SkyBlockRiftMurder {
  readonly stepIndex: number;
  readonly roomClues: readonly string[];
  readonly stepIndexPt2: number;
  readonly stepIndexPt3: number;
}

export interface SkyBlockRiftBarry {
  readonly firstTalkToBarry: boolean;
  readonly convinced: readonly string[];
  readonly receivedReward: boolean;
}

export interface SkyBlockRiftCowboy {
  readonly stage: number;
  readonly hayEaten: number;
  readonly rabbitName: string;
}

export interface SkyBlockRiftVillagePlaza {
  readonly murder: SkyBlockRiftMurder;
  readonly barry: SkyBlockRiftBarry;
  readonly cowboy: SkyBlockRiftCowboy;
  readonly barterBank: SkyBlockScalarMap;
  readonly lonely: SkyBlockScalarMap;
  readonly seraphine: SkyBlockScalarMap;
  readonly gotScammed: boolean;
}

export interface SkyBlockRiftWitherCage {
  readonly killedEyes: readonly string[];
}

export interface SkyBlockRiftBlackLagoon {
  readonly talkedToEdwin: boolean;
  readonly receivedSciencePaper: boolean;
  readonly deliveredSciencePaper: boolean;
  readonly completedStep: number;
}

export interface SkyBlockRiftDeadCats {
  readonly talkedToJacquelle: boolean;
  readonly pickedUpDetector: boolean;
  readonly foundCats: readonly string[];
  readonly unlockedPet: boolean;
  readonly montezuma: SkyBlockPet;
}

export interface SkyBlockRiftWizardTower {
  readonly wizardQuestStep: number;
  readonly crumbsLaidOut: number;
}

export interface SkyBlockRiftEnigma {
  readonly boughtCloak: boolean;
  readonly foundSouls: readonly string[];
  readonly claimedBonusIndex: number;
}

export interface SkyBlockRiftGalleryTrophy {
  readonly type: string;
  readonly timestamp: number;
  readonly visits: number;
}

export interface SkyBlockRiftGallery {
  readonly eliseStep: number;
  readonly sentTrophyDialogues: readonly string[];
  readonly securedTrophies: readonly SkyBlockRiftGalleryTrophy[];
}

export interface SkyBlockRiftCastle {
  readonly unlockedPathwaySkip: boolean;
  readonly fairyStep: number;
}

export interface SkyBlockRiftCrazyKloon {
  readonly selectedColors: Record<string, string>;
  readonly talked: boolean;
  readonly hackedTerminals: readonly string[];
  readonly questComplete: boolean;
}

export interface SkyBlockRiftMirrorverse {
  readonly visitedRooms: readonly string[];
  readonly upsideDownHard: boolean;
  readonly claimedChestItems: readonly string[];
  readonly claimedReward: boolean;
}

export interface SkyBlockRiftKatHouse {
  readonly binCollectedSilverfish: number;
  readonly binCollectedSpider: number;
  readonly binCollectedMosquito: number;
}

export interface SkyBlockRiftGlyphs {
  readonly claimedWand: boolean;
  readonly currentGlyphDelivered: boolean;
  readonly currentGlyphCompleted: boolean;
  readonly currentGlyph: number;
  readonly completed: boolean;
  readonly claimedBracelet: boolean;
}

export interface SkyBlockRiftWestVillage {
  readonly crazyKloon: SkyBlockRiftCrazyKloon;
  readonly mirrorverse: SkyBlockRiftMirrorverse;
  readonly katHouse: SkyBlockRiftKatHouse;
  readonly glyphs: SkyBlockRiftGlyphs;
}

export interface SkyBlockRiftDreadFarm {
  readonly shaniaStage: number;
  readonly caducousFeederUses: readonly number[];
}

export interface SkyBlockRiftWyldWoods {
  readonly siriusStartedQA: boolean;
  readonly bughunterStep: number;
  readonly siriusQAChainDone: boolean;
  readonly talkedThreebrothers: readonly string[];
  readonly siriusCompletedQA: boolean;
  readonly siriusClaimedDoubloon: boolean;
}

export interface SkyBlockRift {
  readonly access: SkyBlockRiftAccess;
  readonly villagePlaza: SkyBlockRiftVillagePlaza;
  readonly witherCage: SkyBlockRiftWitherCage;
  readonly blackLagoon: SkyBlockRiftBlackLagoon;
  readonly deadCats: SkyBlockRiftDeadCats;
  readonly wizardTower: SkyBlockRiftWizardTower;
  readonly enigma: SkyBlockRiftEnigma;
  readonly gallery: SkyBlockRiftGallery;
  readonly castle: SkyBlockRiftCastle;
  readonly westVillage: SkyBlockRiftWestVillage;
  readonly wyldWoods: SkyBlockRiftWyldWoods;
  readonly dreadFarm: SkyBlockRiftDreadFarm;
  readonly lifetimePurchasedBoundaries: readonly string[];
  readonly inventory: SkyBlockInventory | null;
  readonly enderChest: SkyBlockInventory | null;
  readonly enderChestPageIcons: readonly (SkyBlockInventory | null)[];
  readonly armor: SkyBlockInventory | null;
  readonly equipment: SkyBlockInventory | null;
}

export interface SkyBlockSkillTreeNodes {
  readonly mining: Record<string, number | boolean>;
  readonly foraging: Record<string, number | boolean>;
}

export interface SkyBlockSkillTreeAbilities {
  readonly mining: string;
  readonly foraging: string;
}

export interface SkyBlockSkillTreeTokens {
  readonly mountain: number;
  readonly forest: number;
}

export interface SkyBlockSkillTreeValues {
  readonly mining: number;
  readonly foraging: number;
}

export interface SkyBlockSkillTree {
  readonly nodes: SkyBlockSkillTreeNodes;
  readonly selectedAbility: SkyBlockSkillTreeAbilities;
  readonly tokensSpent: SkyBlockSkillTreeTokens;
  readonly experience: SkyBlockSkillTreeValues;
  readonly lastReset: SkyBlockSkillTreeValues;
  readonly refundAbilityFree: boolean;
}

export interface SkyBlockInventories {
  readonly inventory: SkyBlockInventory | null;
  readonly armor: SkyBlockInventory | null;
  readonly equipment: SkyBlockInventory | null;
  readonly enderChest: SkyBlockInventory | null;
  readonly personalVault: SkyBlockInventory | null;
  readonly wardrobe: SkyBlockInventory | null;
  readonly wardrobeEquippedSlot: number;
  readonly talismanBag: SkyBlockInventory | null;
  readonly potionBag: SkyBlockInventory | null;
  readonly fishingBag: SkyBlockInventory | null;
  readonly sacksBag: SkyBlockInventory | null;
  readonly quiver: SkyBlockInventory | null;
  readonly candyInventory: SkyBlockInventory | null;
  readonly carnivalMaskInventory: SkyBlockInventory | null;
  readonly backpackContents: Record<string, SkyBlockInventory>;
  readonly backpackIcons: Record<string, SkyBlockInventory>;
  readonly sacksCounts: Record<string, number>;
}

export interface SkyBlockForagingStarlyn {
  readonly personalBests: Record<string, number>;
}

export interface SkyBlockForagingHinaTasks {
  readonly completedTasks: readonly string[];
  readonly taskProgress: Record<string, number>;
  readonly claimedRewards: readonly string[];
  readonly tierClaimed: number;
}

export interface SkyBlockForagingHina {
  readonly tasks: SkyBlockForagingHinaTasks;
}

export interface SkyBlockForagingTreeGifts {
  readonly gifts: Record<string, number>;
  readonly milestoneTierClaimed: Record<string, number>;
}

export interface SkyBlockForagingSongs {
  readonly harp: SkyBlockHarpQuest;
}

export interface SkyBlockForaging {
  readonly starlyn: SkyBlockForagingStarlyn;
  readonly fishFamily: readonly string[];
  readonly hina: SkyBlockForagingHina;
  readonly treeGifts: SkyBlockForagingTreeGifts;
  readonly songs: SkyBlockForagingSongs;
  readonly huntingToolkit: SkyBlockToolkit;
}

export interface SkyBlockForagingCore {
  readonly dailyTreesCutDay: number;
  readonly dailyTreesCut: number;
  readonly dailyGifts: number;
  readonly dailyLogCutDay: number;
  readonly dailyLogCut: readonly string[];
  readonly forestsWhispers: number;
  readonly forestsWhispersSpent: number;
  readonly currentDailyEffect: string;
  readonly currentDailyEffectLastChanged: number;
}

export interface SkyBlockShardOwned {
  readonly type: string;
  readonly amountOwned: number;
  readonly captured: number;
}

export interface SkyBlockShardTrap {
  readonly trapItem: string;
  readonly captureTime: number;
  readonly mode: string;
  readonly location: string;
  readonly placedAt: number;
  readonly shard: string;
  readonly captured: boolean;
  readonly uuid: string;
}

export interface SkyBlockShards {
  readonly shardSort: string;
  readonly fusionResultSort: string;
  readonly owned: readonly SkyBlockShardOwned[];
  readonly activeTraps: readonly SkyBlockShardTrap[];
}

export interface SkyBlockWinterPlayerData {
  readonly refinedJyrreUses: number;
}

export interface SkyBlockTemples {
  readonly unlockedTemples: readonly string[];
}

export interface SkyBlockAttributes {
  readonly stacks: Record<string, number>;
}

export interface SkyBlockLoadoutArmorSet {
  readonly id: number;
  readonly pieces: Record<string, SkyBlockInventory>;
}

export interface SkyBlockLoadout {
  readonly armor: Record<string, SkyBlockLoadoutArmorSet>;
}

export interface SkyBlockMember {
  readonly playerId: string;
  readonly currencies: SkyBlockCurrencies;
  readonly fairySouls: SkyBlockFairySouls;
  readonly leveling: SkyBlockLeveling;
  readonly profileStats: SkyBlockProfileStats;
  readonly itemData: SkyBlockItemData;
  readonly skillExperience: SkyBlockSkillExperience;
  readonly slayers: SkyBlockSlayers;
  readonly dungeons: SkyBlockDungeons;
  readonly playerData: SkyBlockPlayerData;
  readonly playerStats: SkyBlockPlayerStats;
  readonly collections: Record<string, number>;
  readonly jacobContests: SkyBlockJacobContests;
  readonly accessoryBag: SkyBlockAccessoryBag;
  readonly bestiary: SkyBlockBestiary;
  readonly garden: SkyBlockMemberGarden;
  readonly miningCore: SkyBlockMiningCore;
  readonly forge: SkyBlockForge;
  readonly glacitePlayerData: SkyBlockGlacitePlayerData;
  readonly pets: SkyBlockPets;
  readonly chocolateFactory: SkyBlockChocolateFactory;
  readonly crimsonIsle: SkyBlockCrimsonIsle;
  readonly trophyFish: SkyBlockTrophyFish;
  readonly objectives: SkyBlockObjectives;
  readonly quests: SkyBlockQuests;
  readonly experimentation: SkyBlockExperimentation;
  readonly skillTree: SkyBlockSkillTree;
  readonly rift: SkyBlockRift;
  readonly inventories: SkyBlockInventories;
  readonly foraging: SkyBlockForaging;
  readonly foragingCore: SkyBlockForagingCore;
  readonly shards: SkyBlockShards;
  readonly winterPlayerData: SkyBlockWinterPlayerData;
  readonly temples: SkyBlockTemples;
  readonly attributes: SkyBlockAttributes;
  readonly loadout: SkyBlockLoadout;
}

export interface SkyBlockBankTransaction {
  readonly amount: number;
  readonly timestamp: number;
  readonly action: string;
  readonly initiatorName: string;
}

export interface SkyBlockBanking {
  readonly balance: number;
  readonly transactions: readonly SkyBlockBankTransaction[];
}

export interface SkyBlockCommunityUpgradeInProgress {
  readonly upgrade: string;
  readonly newTier: number;
  readonly startedMs: number;
  readonly startedBy: string;
}

export interface SkyBlockCommunityUpgradeState {
  readonly upgrade: string;
  readonly tier: number;
  readonly startedMs: number;
  readonly startedBy: string;
  readonly claimedMs: number;
  readonly claimedBy: string;
  readonly fastTracked: boolean;
}

export interface SkyBlockCommunityUpgrades {
  readonly currentlyUpgrading: SkyBlockCommunityUpgradeInProgress | null;
  readonly upgradeStates: readonly SkyBlockCommunityUpgradeState[];
}

export interface SkyBlockProfile {
  readonly id: string;
  readonly cuteName: string;
  readonly gameMode: string;
  readonly selected: boolean;
  readonly createdAt: Date | null;
  readonly banking: SkyBlockBanking;
  readonly communityUpgrades: SkyBlockCommunityUpgrades;
  readonly member: SkyBlockMember | null;
  readonly members: Record<string, SkyBlockMember>;
}

const SKILL_KEYS: Record<keyof SkyBlockSkillExperience, string> = {
  farming: "SKILL_FARMING",
  mining: "SKILL_MINING",
  combat: "SKILL_COMBAT",
  foraging: "SKILL_FORAGING",
  fishing: "SKILL_FISHING",
  enchanting: "SKILL_ENCHANTING",
  alchemy: "SKILL_ALCHEMY",
  carpentry: "SKILL_CARPENTRY",
  runecrafting: "SKILL_RUNECRAFTING",
  social: "SKILL_SOCIAL",
  taming: "SKILL_TAMING",
  hunting: "SKILL_HUNTING",
};

const SLAYER_NAMES: readonly string[] = [
  "zombie",
  "spider",
  "wolf",
  "enderman",
  "blaze",
  "vampire",
];

const DUNGEON_CLASS_NAMES: readonly string[] = [
  "healer",
  "berserk",
  "mage",
  "archer",
  "tank",
];

function stringArray(
  source: Record<string, unknown>,
  key: string,
): readonly string[] {
  const value = source[key];
  return Array.isArray(value)
    ? value.filter((entry): entry is string => typeof entry === "string")
    : [];
}

function objectArray(
  source: Record<string, unknown>,
  key: string,
): readonly Record<string, unknown>[] {
  const value = source[key];
  if (!Array.isArray(value)) {
    return [];
  }
  return value.filter(
    (entry): entry is Record<string, unknown> =>
      typeof entry === "object" && entry !== null && !Array.isArray(entry),
  );
}

function numberArray(
  source: Record<string, unknown>,
  key: string,
): readonly number[] {
  const value = source[key];
  return Array.isArray(value)
    ? value.filter((entry): entry is number => typeof entry === "number")
    : [];
}

function numberRecord(source: Record<string, unknown>): Record<string, number> {
  const result: Record<string, number> = {};
  for (const key of Object.keys(source)) {
    const value = source[key];
    if (typeof value === "number") {
      result[key] = value;
    }
  }
  return result;
}

function booleanRecord(
  source: Record<string, unknown>,
): Record<string, boolean> {
  const result: Record<string, boolean> = {};
  for (const key of Object.keys(source)) {
    result[key] = source[key] === true;
  }
  return result;
}

function stringRecord(source: Record<string, unknown>): Record<string, string> {
  const result: Record<string, string> = {};
  for (const key of Object.keys(source)) {
    const value = source[key];
    if (typeof value === "string") {
      result[key] = value;
    }
  }
  return result;
}

function numberBooleanRecord(
  source: Record<string, unknown>,
): Record<string, number | boolean> {
  const result: Record<string, number | boolean> = {};
  for (const key of Object.keys(source)) {
    const value = source[key];
    if (typeof value === "number" || typeof value === "boolean") {
      result[key] = value;
    }
  }
  return result;
}

function scalarRecord(source: Record<string, unknown>): SkyBlockScalarMap {
  const result: Record<string, number | string | boolean> = {};
  for (const key of Object.keys(source)) {
    const value = source[key];
    if (
      typeof value === "number" ||
      typeof value === "string" ||
      typeof value === "boolean"
    ) {
      result[key] = value;
    }
  }
  return result;
}

function raceRecord(
  source: Record<string, unknown>,
): Record<string, number | Record<string, number>> {
  const result: Record<string, number | Record<string, number>> = {};
  for (const key of Object.keys(source)) {
    const value = source[key];
    if (typeof value === "number") {
      result[key] = value;
    } else if (
      typeof value === "object" &&
      value !== null &&
      !Array.isArray(value)
    ) {
      result[key] = numberRecord(value as Record<string, unknown>);
    }
  }
  return result;
}

function recordOf<T>(
  source: Record<string, unknown>,
  parse: (value: Record<string, unknown>) => T,
): Record<string, T> {
  const result: Record<string, T> = {};
  for (const key of Object.keys(source)) {
    result[key] = parse(obj(source, key));
  }
  return result;
}

function stringArrayRecord(
  source: Record<string, unknown>,
): Record<string, readonly string[]> {
  const result: Record<string, readonly string[]> = {};
  for (const key of Object.keys(source)) {
    const value = source[key];
    result[key] = Array.isArray(value)
      ? value.filter((entry): entry is string => typeof entry === "string")
      : [];
  }
  return result;
}

function decodeInventory(
  node: Record<string, unknown>,
): SkyBlockInventory | null {
  const data = node.data;
  if (typeof data !== "string" || data.length === 0) {
    return null;
  }
  return { type: num(node, "type"), items: decodeItemBytes(data) };
}

function inventory(
  parent: Record<string, unknown>,
  key: string,
): SkyBlockInventory | null {
  return decodeInventory(obj(parent, key));
}

function inventoryRecord(
  source: Record<string, unknown>,
): Record<string, SkyBlockInventory> {
  const result: Record<string, SkyBlockInventory> = {};
  for (const key of Object.keys(source)) {
    const decoded = decodeInventory(obj(source, key));
    if (decoded !== null) {
      result[key] = decoded;
    }
  }
  return result;
}

function parseToolkit(toolkit: Record<string, unknown>): SkyBlockToolkit {
  const inUseRaw = obj(toolkit, "IN_USE");
  const inUse: Record<string, Record<string, boolean>> = {};
  for (const key of Object.keys(inUseRaw)) {
    inUse[key] = booleanRecord(obj(inUseRaw, key));
  }
  const tools: Record<string, readonly SkyBlockItemBytes[]> = {};
  for (const key of Object.keys(toolkit)) {
    if (key === "IN_USE" || key === "IS_UNLOCKED") {
      continue;
    }
    const value = toolkit[key];
    if (Array.isArray(value)) {
      tools[key] = value
        .filter(
          (entry): entry is Record<string, unknown> =>
            typeof entry === "object" &&
            entry !== null &&
            !Array.isArray(entry),
        )
        .map((entry) => ({
          type: num(entry, "type"),
          data: str(entry, "data"),
        }));
    }
  }
  return { isUnlocked: bool(toolkit, "IS_UNLOCKED"), inUse, tools };
}

function parseCurrencies(member: Record<string, unknown>): SkyBlockCurrencies {
  const currencies = obj(member, "currencies");
  const essence = obj(currencies, "essence");
  return {
    coinPurse: num(currencies, "coin_purse"),
    motesPurse: num(currencies, "motes_purse"),
    essences: {
      wither: num(obj(essence, "WITHER"), "current"),
      dragon: num(obj(essence, "DRAGON"), "current"),
      spider: num(obj(essence, "SPIDER"), "current"),
      undead: num(obj(essence, "UNDEAD"), "current"),
      diamond: num(obj(essence, "DIAMOND"), "current"),
      gold: num(obj(essence, "GOLD"), "current"),
      ice: num(obj(essence, "ICE"), "current"),
      crimson: num(obj(essence, "CRIMSON"), "current"),
    },
  };
}

function parseFairySouls(member: Record<string, unknown>): SkyBlockFairySouls {
  const fairySoul = obj(member, "fairy_soul");
  return {
    exchanges: num(fairySoul, "fairy_exchanges"),
    collected: num(fairySoul, "total_collected"),
    unspent: num(fairySoul, "unspent_souls"),
  };
}

function parseLeveling(member: Record<string, unknown>): SkyBlockLeveling {
  const leveling = obj(member, "leveling");
  return {
    experience: num(leveling, "experience"),
    highestPetScore: num(leveling, "highest_pet_score"),
    miningFiestaOresMined: num(leveling, "mining_fiesta_ores_mined"),
    fishingFestivalSharksKilled: num(
      leveling,
      "fishing_festival_sharks_killed",
    ),
    taskSort: str(leveling, "task_sort"),
    selectedSymbol: str(leveling, "selected_symbol"),
    bopBonus: str(leveling, "bop_bonus"),
    claimedTalisman: bool(leveling, "claimed_talisman"),
    migrated: bool(leveling, "migrated"),
    migratedCompletions2: bool(leveling, "migrated_completions_2"),
    completedTasks: stringArray(leveling, "completed_tasks"),
    lastViewedTasks: stringArray(leveling, "last_viewed_tasks"),
    emblemUnlocks: stringArray(leveling, "emblem_unlocks"),
    categoryExpanded: bool(leveling, "category_expanded"),
    completions: numberRecord(obj(leveling, "completions")),
  };
}

function parseProfileStats(
  member: Record<string, unknown>,
): SkyBlockProfileStats {
  const profile = obj(member, "profile");
  const coopInvitation = profile.coop_invitation;
  return {
    firstJoin: date(profile, "first_join"),
    personalBankUpgrade: num(profile, "personal_bank_upgrade"),
    bankAccount: num(profile, "bank_account"),
    hasCookieBuff: bool(profile, "cookie_buff_active"),
    coopInvitation:
      typeof coopInvitation === "object" &&
      coopInvitation !== null &&
      !Array.isArray(coopInvitation)
        ? {
            timestamp: num(
              coopInvitation as Record<string, unknown>,
              "timestamp",
            ),
            invitedBy: str(
              coopInvitation as Record<string, unknown>,
              "invited_by",
            ),
            confirmed: bool(
              coopInvitation as Record<string, unknown>,
              "confirmed",
            ),
            confirmedTimestamp: num(
              coopInvitation as Record<string, unknown>,
              "confirmed_timestamp",
            ),
          }
        : null,
  };
}

function parseItemData(member: Record<string, unknown>): SkyBlockItemData {
  const itemData = obj(member, "item_data");
  return {
    soulflow: num(itemData, "soulflow"),
    favoriteArrow: str(itemData, "favorite_arrow"),
    teleporterPillConsumed: bool(itemData, "teleporter_pill_consumed"),
  };
}

function parseSkillExperience(
  experience: Record<string, unknown>,
): SkyBlockSkillExperience {
  return {
    farming: num(experience, SKILL_KEYS.farming),
    mining: num(experience, SKILL_KEYS.mining),
    combat: num(experience, SKILL_KEYS.combat),
    foraging: num(experience, SKILL_KEYS.foraging),
    fishing: num(experience, SKILL_KEYS.fishing),
    enchanting: num(experience, SKILL_KEYS.enchanting),
    alchemy: num(experience, SKILL_KEYS.alchemy),
    carpentry: num(experience, SKILL_KEYS.carpentry),
    runecrafting: num(experience, SKILL_KEYS.runecrafting),
    social: num(experience, SKILL_KEYS.social),
    taming: num(experience, SKILL_KEYS.taming),
    hunting: num(experience, SKILL_KEYS.hunting),
  };
}

function parseSlayerBoss(boss: Record<string, unknown>): SkyBlockSlayerBoss {
  return {
    xp: num(boss, "xp"),
    bossKillsTier0: num(boss, "boss_kills_tier_0"),
    bossKillsTier1: num(boss, "boss_kills_tier_1"),
    bossKillsTier2: num(boss, "boss_kills_tier_2"),
    bossKillsTier3: num(boss, "boss_kills_tier_3"),
    bossKillsTier4: num(boss, "boss_kills_tier_4"),
    bossAttemptsTier1: num(boss, "boss_attempts_tier_1"),
    bossAttemptsTier2: num(boss, "boss_attempts_tier_2"),
    bossAttemptsTier3: num(boss, "boss_attempts_tier_3"),
    bossAttemptsTier4: num(boss, "boss_attempts_tier_4"),
    claimedLevels: booleanRecord(obj(boss, "claimed_levels")),
  };
}

function parseSlayerQuest(quest: Record<string, unknown>): SkyBlockSlayerQuest {
  return {
    type: str(quest, "type"),
    tier: num(quest, "tier"),
    startTimestamp: num(quest, "start_timestamp"),
    completionState: num(quest, "completion_state"),
    usedArmor: bool(quest, "used_armor"),
    solo: bool(quest, "solo"),
    combatXp: num(quest, "combat_xp"),
    recentMobKills: objectArray(quest, "recent_mob_kills").map((kill) => ({
      xp: num(kill, "xp"),
      timestamp: num(kill, "timestamp"),
    })),
    lastKilledMobIsland: str(quest, "last_killed_mob_island"),
    xpOnLastFollowerSpawn: num(quest, "xp_on_last_follower_spawn"),
    spawnTimestamp: num(quest, "spawn_timestamp"),
  };
}

function parseSlayers(member: Record<string, unknown>): SkyBlockSlayers {
  const slayer = obj(member, "slayer");
  const bosses = obj(slayer, "slayer_bosses");
  const parsed: Record<string, SkyBlockSlayerBoss> = {};
  for (const name of SLAYER_NAMES) {
    parsed[name] = parseSlayerBoss(obj(bosses, name));
  }
  const quest = slayer.slayer_quest;
  return {
    activeQuest:
      typeof quest === "object" && quest !== null && !Array.isArray(quest)
        ? parseSlayerQuest(quest as Record<string, unknown>)
        : null,
    bosses: parsed,
  };
}

function parseDungeonRun(run: Record<string, unknown>): SkyBlockDungeonRun {
  return {
    timestamp: num(run, "timestamp"),
    scoreExploration: num(run, "score_exploration"),
    scoreSpeed: num(run, "score_speed"),
    scoreSkill: num(run, "score_skill"),
    scoreBonus: num(run, "score_bonus"),
    dungeonClass: str(run, "dungeon_class"),
    teammates: stringArray(run, "teammates"),
    elapsedTime: num(run, "elapsed_time"),
    damageDealt: num(run, "damage_dealt"),
    deaths: num(run, "deaths"),
    mobsKilled: num(run, "mobs_killed"),
    secretsFound: num(run, "secrets_found"),
    damageMitigated: num(run, "damage_mitigated"),
    allyHealing: num(run, "ally_healing"),
  };
}

function parseDungeonMode(mode: Record<string, unknown>): SkyBlockDungeonMode {
  const rawBestRuns = obj(mode, "best_runs");
  const bestRuns: Record<string, readonly SkyBlockDungeonRun[]> = {};
  for (const floor of Object.keys(rawBestRuns)) {
    bestRuns[floor] = objectArray(rawBestRuns, floor).map(parseDungeonRun);
  }
  return {
    experience: num(mode, "experience"),
    highestTierCompleted: num(mode, "highest_tier_completed"),
    timesPlayed: numberRecord(obj(mode, "times_played")),
    tierCompletions: numberRecord(obj(mode, "tier_completions")),
    milestoneCompletions: numberRecord(obj(mode, "milestone_completions")),
    bestScore: numberRecord(obj(mode, "best_score")),
    mobsKilled: numberRecord(obj(mode, "mobs_killed")),
    mostMobsKilled: numberRecord(obj(mode, "most_mobs_killed")),
    mostDamageBerserk: numberRecord(obj(mode, "most_damage_berserk")),
    mostDamageMage: numberRecord(obj(mode, "most_damage_mage")),
    mostDamageHealer: numberRecord(obj(mode, "most_damage_healer")),
    mostDamageTank: numberRecord(obj(mode, "most_damage_tank")),
    mostDamageArcher: numberRecord(obj(mode, "most_damage_archer")),
    mostHealingDealt: numberRecord(obj(mode, "most_healing")),
    watcherKills: numberRecord(obj(mode, "watcher_kills")),
    fastestTime: numberRecord(obj(mode, "fastest_time")),
    fastestTimeS: numberRecord(obj(mode, "fastest_time_s")),
    fastestTimeSPlus: numberRecord(obj(mode, "fastest_time_s_plus")),
    bestRuns,
  };
}

function parseTreasureRun(
  run: Record<string, unknown>,
): SkyBlockDungeonTreasureRun {
  return {
    runId: str(run, "run_id"),
    completionTimestamp: num(run, "completion_ts"),
    type: str(run, "type"),
    dungeonTier: num(run, "dungeon_tier"),
    participants: objectArray(run, "participants").map((participant) => ({
      playerUuid: str(participant, "player_uuid"),
      displayName: str(participant, "display_name"),
      classMilestone: num(participant, "class_milestone"),
    })),
  };
}

function parseTreasureChest(
  chest: Record<string, unknown>,
): SkyBlockDungeonTreasureChest {
  const rewards = obj(chest, "rewards");
  return {
    runId: str(chest, "run_id"),
    chestId: str(chest, "chest_id"),
    treasureType: str(chest, "treasure_type"),
    quality: num(chest, "quality"),
    shinyEligible: bool(chest, "shiny_eligible"),
    paid: bool(chest, "paid"),
    rerolls: num(chest, "rerolls"),
    rewards: stringArray(rewards, "rewards"),
    rolledRngMeterRandomly: bool(rewards, "rolled_rng_meter_randomly"),
  };
}

function parseDungeons(member: Record<string, unknown>): SkyBlockDungeons {
  const dungeons = obj(member, "dungeons");
  const dungeonTypes = obj(dungeons, "dungeon_types");
  const playerClasses = obj(dungeons, "player_classes");
  const dailyRuns = obj(dungeons, "daily_runs");
  const raceSettings = obj(dungeons, "dungeon_hub_race_settings");
  const treasures = obj(dungeons, "treasures");
  const classExperience: Record<string, SkyBlockDungeonClass> = {};
  for (const name of DUNGEON_CLASS_NAMES) {
    classExperience[name] = {
      experience: num(obj(playerClasses, name), "experience"),
    };
  }
  return {
    catacombs: parseDungeonMode(obj(dungeonTypes, "catacombs")),
    masterCatacombs: parseDungeonMode(obj(dungeonTypes, "master_catacombs")),
    selectedClass: str(dungeons, "selected_dungeon_class"),
    classExperience,
    secrets: num(dungeons, "secrets"),
    lastDungeonRun: str(dungeons, "last_dungeon_run"),
    dungeonsBlahBlah: stringArray(dungeons, "dungeons_blah_blah"),
    hubRaceSettings: {
      selectedRace: str(raceSettings, "selected_race"),
      selectedSetting: str(raceSettings, "selected_setting"),
      runback: bool(raceSettings, "runback"),
    },
    dailyRuns: {
      currentDayStamp: num(dailyRuns, "current_day_stamp"),
      completedRunsCount: num(dailyRuns, "completed_runs_count"),
    },
    unlockedJournals: stringArray(
      obj(dungeons, "dungeon_journal"),
      "unlocked_journals",
    ),
    treasures: {
      runs: objectArray(treasures, "runs").map(parseTreasureRun),
      chests: objectArray(treasures, "chests").map(parseTreasureChest),
    },
  };
}

function parsePlayerData(member: Record<string, unknown>): SkyBlockPlayerData {
  const playerData = obj(member, "player_data");
  const experience = obj(playerData, "experience");
  return {
    deaths: num(playerData, "death_count"),
    lastDeath: num(playerData, "last_death"),
    reaperPeppersEaten: num(playerData, "reaper_peppers_eaten"),
    fishingTreasureCaught: num(playerData, "fishing_treasure_caught"),
    fastestTargetPractice: num(playerData, "fastest_target_practice"),
    visitedZones: stringArray(playerData, "visited_zones"),
    visitedModes: stringArray(playerData, "visited_modes"),
    achievementSpawnedIslandTypes: stringArray(
      playerData,
      "achievement_spawned_island_types",
    ),
    unlockedCollectionTiers: stringArray(playerData, "unlocked_coll_tiers"),
    craftedGenerators: stringArray(playerData, "crafted_generators"),
    pausedEffects: stringArray(playerData, "paused_effects"),
    disabledPotionEffects: stringArray(playerData, "disabled_potion_effects"),
    activeEffects: objectArray(playerData, "active_effects").map((effect) => ({
      effect: str(effect, "effect"),
      level: num(effect, "level"),
      modifiers: objectArray(effect, "modifiers").map((modifier) => ({
        key: str(modifier, "key"),
        amp: num(modifier, "amp"),
      })),
      ticksRemaining: num(effect, "ticks_remaining"),
      infinite: bool(effect, "infinite"),
    })),
    temporaryStatBuffs: objectArray(playerData, "temp_stat_buffs").map(
      (buff) => ({
        stat: num(buff, "stat"),
        key: str(buff, "key"),
        amount: num(buff, "amount"),
        expireAt: num(buff, "expire_at"),
      }),
    ),
    perks: numberRecord(obj(playerData, "perks")),
    gardenChips: numberRecord(obj(playerData, "garden_chips")),
    skillExperience: parseSkillExperience(experience),
    experience: numberRecord(experience),
  };
}

function parsePlayerStats(
  member: Record<string, unknown>,
): SkyBlockPlayerStats {
  const playerStats = obj(member, "player_stats");
  const auctions = obj(playerStats, "auctions");
  const candy = obj(playerStats, "candy_collected");
  const gifts = obj(playerStats, "gifts");
  const mythos = obj(playerStats, "mythos");
  const winter = obj(playerStats, "winter");
  const endIsland = obj(playerStats, "end_island");
  const dragonFight = obj(endIsland, "dragon_fight");
  const spooky = obj(playerStats, "spooky");
  const festivals: Record<string, SkyBlockSpookyFestivalCandy> = {};
  for (const key of Object.keys(candy)) {
    if (key.startsWith("spooky_festival_")) {
      const festival = obj(candy, key);
      festivals[key] = {
        greenCandy: num(festival, "green_candy"),
        purpleCandy: num(festival, "purple_candy"),
      };
    }
  }
  return {
    highestDamage: num(playerStats, "highest_damage"),
    highestCriticalDamage: num(playerStats, "highest_critical_damage"),
    glowingMushroomsBroken: num(playerStats, "glowing_mushrooms_broken"),
    seaCreatureKills: num(playerStats, "sea_creature_kills"),
    kills: numberRecord(obj(playerStats, "kills")),
    deaths: numberRecord(obj(playerStats, "deaths")),
    itemsFished: numberRecord(obj(playerStats, "items_fished")),
    auctions: {
      bids: num(auctions, "bids"),
      highestBid: num(auctions, "highest_bid"),
      won: num(auctions, "won"),
      goldSpent: num(auctions, "gold_spent"),
      created: num(auctions, "created"),
      fees: num(auctions, "fees"),
      completed: num(auctions, "completed"),
      goldEarned: num(auctions, "gold_earned"),
      noBids: num(auctions, "no_bids"),
      totalBought: numberRecord(obj(auctions, "total_bought")),
      totalSold: numberRecord(obj(auctions, "total_sold")),
    },
    candyCollected: {
      total: num(candy, "total"),
      greenCandy: num(candy, "green_candy"),
      purpleCandy: num(candy, "purple_candy"),
      festivals,
    },
    gifts: {
      totalReceived: num(gifts, "total_received"),
      totalGiven: num(gifts, "total_given"),
    },
    mythos: {
      kills: num(mythos, "kills"),
      burrowsDugNext: numberRecord(obj(mythos, "burrows_dug_next")),
      burrowsDugCombat: numberRecord(obj(mythos, "burrows_dug_combat")),
      burrowsDugTreasure: numberRecord(obj(mythos, "burrows_dug_treasure")),
      burrowsChainsComplete: numberRecord(
        obj(mythos, "burrows_chains_complete"),
      ),
    },
    winter: {
      mostSnowballsHit: num(winter, "most_snowballs_hit"),
      mostDamageDealt: num(winter, "most_damage_dealt"),
      mostMagmaDamageDealt: num(winter, "most_magma_damage_dealt"),
      mostCannonballsHit: num(winter, "most_cannonballs_hit"),
    },
    endIsland: {
      summoningEyesCollected: num(endIsland, "summoning_eyes_collected"),
      specialZealotLootCollected: num(
        endIsland,
        "special_zealot_loot_collected",
      ),
      dragonFight: {
        enderCrystalsDestroyed: num(dragonFight, "ender_crystals_destroyed"),
        mostDamage: numberRecord(obj(dragonFight, "most_damage")),
        highestRank: numberRecord(obj(dragonFight, "highest_rank")),
        fastestKill: numberRecord(obj(dragonFight, "fastest_kill")),
        amountSummoned: numberRecord(obj(dragonFight, "amount_summoned")),
        summoningEyesContributed: numberRecord(
          obj(dragonFight, "summoning_eyes_contributed"),
        ),
      },
    },
    spooky: {
      batsSpawned: numberRecord(obj(spooky, "bats_spawned")),
    },
    rift: raceRecord(obj(playerStats, "rift")),
    shardCombatHunts: num(playerStats, "shard_combat_hunts"),
    shardFishingHunts: num(playerStats, "shard_fishing_hunts"),
    shardTrapHunts: num(playerStats, "shard_trap_hunts"),
    shardForestHunts: num(playerStats, "shard_forest_hunts"),
    shardSaltHunts: num(playerStats, "shard_salt_hunts"),
    uniqueShards: num(playerStats, "unique_shards"),
    races: raceRecord(obj(playerStats, "races")),
    pets: numberRecord(obj(playerStats, "pets")),
  };
}

function parseJacobContests(
  member: Record<string, unknown>,
): SkyBlockJacobContests {
  const jacob = obj(member, "jacobs_contest");
  const perks = obj(jacob, "perks");
  return {
    medalsInventory: numberRecord(obj(jacob, "medals_inv")),
    perks: {
      doubleDrops: num(perks, "double_drops"),
      farmingLevelCap: num(perks, "farming_level_cap"),
      personalBests: bool(perks, "personal_bests"),
    },
    uniqueBrackets: stringArrayRecord(obj(jacob, "unique_brackets")),
    personalBests: numberRecord(obj(jacob, "personal_bests")),
    talkedToJacob: bool(jacob, "talked"),
    migration: bool(jacob, "migration"),
    contests: recordOf(obj(jacob, "contests"), (contest) => ({
      collected: num(contest, "collected"),
      claimedRewards: bool(contest, "claimed_rewards"),
      claimedPosition: num(contest, "claimed_position"),
      claimedParticipants: num(contest, "claimed_participants"),
      claimedMedal: str(contest, "claimed_medal"),
    })),
  };
}

function parseTuningSlots(
  tuning: Record<string, unknown>,
): Record<string, Record<string, number>> {
  const result: Record<string, Record<string, number>> = {};
  for (const key of Object.keys(tuning)) {
    if (key.startsWith("slot_")) {
      result[key] = numberRecord(obj(tuning, key));
    }
  }
  return result;
}

function parseAccessoryBag(
  member: Record<string, unknown>,
): SkyBlockAccessoryBag {
  const storage = obj(member, "accessory_bag_storage");
  const tuning = obj(storage, "tuning");
  const selectedPower = storage.selected_power;
  return {
    selectedPower: typeof selectedPower === "string" ? selectedPower : null,
    unlockedPowers: stringArray(storage, "unlocked_powers"),
    bagUpgradesPurchased: num(storage, "bag_upgrades_purchased"),
    highestMagicalPower: num(storage, "highest_magical_power"),
    highestUnlockedTuningSlot: num(tuning, "highest_unlocked_slot"),
    tuningSlots: parseTuningSlots(tuning),
  };
}

function parseBestiary(member: Record<string, unknown>): SkyBlockBestiary {
  const bestiary = obj(member, "bestiary");
  return {
    migration: bool(bestiary, "migration"),
    migratedStats: bool(bestiary, "migrated_stats"),
    lastClaimedMilestone: num(
      obj(bestiary, "milestone"),
      "last_claimed_milestone",
    ),
    maxKillsVisible: bool(obj(bestiary, "miscellaneous"), "max_kills_visible"),
    kills: numberRecord(obj(bestiary, "kills")),
    deaths: numberRecord(obj(bestiary, "deaths")),
  };
}

function parseGarden(member: Record<string, unknown>): SkyBlockMemberGarden {
  const garden = obj(member, "garden_player_data");
  return {
    copper: num(garden, "copper"),
    larvaConsumed: num(garden, "larva_consumed"),
    analyzedGreenhouseCrops: stringArray(garden, "analyzed_greenhouse_crops"),
    discoveredGreenhouseCrops: stringArray(
      garden,
      "discovered_greenhouse_crops",
    ),
    farmingToolkit: parseToolkit(obj(garden, "farming_toolkit")),
  };
}

function parseMiningBiomes(
  biomes: Record<string, unknown>,
): SkyBlockMiningBiomes {
  const precursor = obj(biomes, "precursor");
  const dwarven = obj(biomes, "dwarven");
  const goblin = obj(biomes, "goblin");
  return {
    precursor: { partsDelivered: stringArray(precursor, "parts_delivered") },
    dwarven: { statuesPlaced: stringRecord(obj(dwarven, "statues_placed")) },
    goblin: {
      kingQuestActive: bool(goblin, "king_quest_active"),
      kingQuestsCompleted: num(goblin, "king_quests_completed"),
    },
  };
}

function parseMiningCore(member: Record<string, unknown>): SkyBlockMiningCore {
  const miningCore = obj(member, "mining_core");
  return {
    experience: num(miningCore, "experience"),
    tokens: num(miningCore, "tokens"),
    tokensSpent: num(miningCore, "tokens_spent"),
    receivedFreeTier: bool(miningCore, "received_free_tier"),
    powderMithril: num(miningCore, "powder_mithril"),
    powderMithrilTotal: num(miningCore, "powder_mithril_total"),
    powderSpentMithril: num(miningCore, "powder_spent_mithril"),
    powderGemstone: num(miningCore, "powder_gemstone"),
    powderGemstoneTotal: num(miningCore, "powder_gemstone_total"),
    powderSpentGemstone: num(miningCore, "powder_spent_gemstone"),
    powderGlacite: num(miningCore, "powder_glacite"),
    powderGlaciteTotal: num(miningCore, "powder_glacite_total"),
    powderSpentGlacite: num(miningCore, "powder_spent_glacite"),
    selectedPickaxeAbility: str(miningCore, "selected_pickaxe_ability"),
    dailyEffect: str(miningCore, "current_daily_effect"),
    dailyEffectLastChanged: num(
      miningCore,
      "current_daily_effect_last_changed",
    ),
    retroactiveTier2Token: bool(miningCore, "retroactive_tier2_token"),
    dailyOresMined: num(miningCore, "daily_ores_mined"),
    dailyOresMinedDay: num(miningCore, "daily_ores_mined_day"),
    dailyOresMinedMithrilOre: num(miningCore, "daily_ores_mined_mithril_ore"),
    dailyOresMinedDayMithrilOre: num(
      miningCore,
      "daily_ores_mined_day_mithril_ore",
    ),
    dailyOresMinedGemstone: num(miningCore, "daily_ores_mined_gemstone"),
    dailyOresMinedDayGemstone: num(miningCore, "daily_ores_mined_day_gemstone"),
    dailyOresMinedGlacite: num(miningCore, "daily_ores_mined_glacite"),
    dailyOresMinedDayGlacite: num(miningCore, "daily_ores_mined_day_glacite"),
    greaterMinesLastAccess: num(miningCore, "greater_mines_last_access"),
    nodes: numberBooleanRecord(obj(miningCore, "nodes")),
    crystals: recordOf(obj(miningCore, "crystals"), (crystal) => ({
      state: str(crystal, "state"),
      totalPlaced: num(crystal, "total_placed"),
      totalFound: num(crystal, "total_found"),
    })),
    biomes: parseMiningBiomes(obj(miningCore, "biomes")),
  };
}

function parseForge(member: Record<string, unknown>): SkyBlockForge {
  const forge = obj(member, "forge");
  return {
    forgeProcesses: recordOf(obj(forge, "forge_processes"), (slots) =>
      recordOf(slots, (process) => ({
        type: str(process, "type"),
        id: str(process, "id"),
        startTime: num(process, "startTime"),
        slot: num(process, "slot"),
        notified: bool(process, "notified"),
        oldItem: typeof process.oldItem === "string" ? process.oldItem : null,
      })),
    ),
  };
}

function parseGlacitePlayerData(
  member: Record<string, unknown>,
): SkyBlockGlacitePlayerData {
  const glacite = obj(member, "glacite_player_data");
  return {
    fossilsDonated: stringArray(glacite, "fossils_donated"),
    fossilDust: num(glacite, "fossil_dust"),
    corpsesLooted: numberRecord(obj(glacite, "corpses_looted")),
    mineshaftsEntered: num(glacite, "mineshafts_entered"),
  };
}

function parsePet(pet: Record<string, unknown>): SkyBlockPet {
  const uuid = pet.uuid;
  const uniqueId = pet.uniqueId;
  const heldItem = pet.heldItem;
  const heldItemUuid = pet.heldItemUuid;
  const skin = pet.skin;
  return {
    uuid: typeof uuid === "string" ? uuid : null,
    uniqueId: typeof uniqueId === "string" ? uniqueId : null,
    type: str(pet, "type"),
    experience: num(pet, "exp"),
    active: bool(pet, "active"),
    tier: str(pet, "tier"),
    heldItem: typeof heldItem === "string" ? heldItem : null,
    heldItemUuid: typeof heldItemUuid === "string" ? heldItemUuid : null,
    candyUsed: num(pet, "candyUsed"),
    soulbound: bool(pet, "petSoulbound"),
    skin: typeof skin === "string" ? skin : null,
    extra: numberRecord(obj(pet, "extra")),
  };
}

function parseAutopetRule(rule: Record<string, unknown>): SkyBlockAutopetRule {
  return {
    uuid: str(rule, "uuid"),
    id: str(rule, "id"),
    name: str(rule, "name"),
    uniqueId: str(rule, "uniqueId"),
    exceptions: objectArray(rule, "exceptions").map((exception) => ({
      id: str(exception, "id"),
      data: scalarRecord(obj(exception, "data")),
    })),
    disabled: bool(rule, "disabled"),
    data: scalarRecord(obj(rule, "data")),
  };
}

function parsePets(member: Record<string, unknown>): SkyBlockPets {
  const petsData = obj(member, "pets_data");
  const petCare = obj(petsData, "pet_care");
  const autopet = obj(petsData, "autopet");
  return {
    pets: objectArray(petsData, "pets").map(parsePet),
    coinsSpentOnPetCare: num(petCare, "coins_spent"),
    sacrificedPetTypes: stringArray(petCare, "pet_types_sacrificed"),
    autopetRulesLimit: num(autopet, "rules_limit"),
    autopetRules: objectArray(autopet, "rules").map(parseAutopetRule),
    autopetMigrated: bool(autopet, "migrated"),
    autopetMigrated2: bool(autopet, "migrated_2"),
  };
}

function parseChocolateFactory(
  member: Record<string, unknown>,
): SkyBlockChocolateFactory {
  const easter = obj(obj(member, "events"), "easter");
  const timeTower = obj(easter, "time_tower");
  const hitmen = obj(easter, "rabbit_hitmen");
  const shop = obj(easter, "shop");
  const rabbits = obj(easter, "rabbits");
  const collectedEggs = obj(rabbits, "collected_eggs");
  const found: Record<string, number> = {};
  for (const key of Object.keys(rabbits)) {
    if (key === "collected_eggs" || key === "collected_locations") {
      continue;
    }
    const value = rabbits[key];
    if (typeof value === "number") {
      found[key] = value;
    }
  }
  return {
    chocolate: num(easter, "chocolate"),
    chocolateSincePrestige: num(easter, "chocolate_since_prestige"),
    totalChocolate: num(easter, "total_chocolate"),
    prestigeLevel: num(easter, "chocolate_level"),
    barnCapacityLevel: num(easter, "rabbit_barn_capacity_level"),
    supremeChocolateBars: num(easter, "supreme_chocolate_bars"),
    refinedDarkCacaoTruffles: num(easter, "refined_dark_cacao_truffles"),
    rabbitSort: str(easter, "rabbit_sort"),
    rabbitFilter: str(easter, "rabbit_filter"),
    lastViewed: num(easter, "last_viewed_chocolate_factory"),
    employees: numberRecord(obj(easter, "employees")),
    upgrades: {
      clickUpgrades: num(easter, "click_upgrades"),
      chocolateMultiplierUpgrades: num(easter, "chocolate_multiplier_upgrades"),
      rabbitRarityUpgrades: num(easter, "rabbit_rarity_upgrades"),
    },
    timeTower: {
      charges: num(timeTower, "charges"),
      level: num(timeTower, "level"),
      activationTime: num(timeTower, "activation_time"),
      lastChargeTime: num(timeTower, "last_charge_time"),
    },
    rabbitHitmen: {
      rabbitHitmenSlots: num(hitmen, "rabbit_hitmen_slots"),
      missedUncollectedEggs: num(hitmen, "missed_uncollected_eggs"),
      eggSlotCooldownMark: num(hitmen, "egg_slot_cooldown_mark"),
      eggSlotCooldownSum: num(hitmen, "egg_slot_cooldown_sum"),
    },
    rabbits: {
      collectedEggs: {
        breakfast: num(collectedEggs, "breakfast"),
        lunch: num(collectedEggs, "lunch"),
        dinner: num(collectedEggs, "dinner"),
        brunch: num(collectedEggs, "brunch"),
        dejeuner: num(collectedEggs, "dejeuner"),
        supper: num(collectedEggs, "supper"),
      },
      collectedLocations: stringArrayRecord(
        obj(rabbits, "collected_locations"),
      ),
      found,
    },
    shop: {
      year: num(shop, "year"),
      rabbits: stringArray(shop, "rabbits"),
      chocolateSpent: num(shop, "chocolate_spent"),
      cocoaFortuneUpgrades: num(shop, "cocoa_fortune_upgrades"),
      rabbitsPurchased: stringArray(shop, "rabbits_purchased"),
    },
  };
}

function parseAbiphone(abiphone: Record<string, unknown>): SkyBlockAbiphone {
  return {
    contactData: recordOf(obj(abiphone, "contact_data"), (contact) => ({
      talkedTo: bool(contact, "talked_to"),
      completedQuest: bool(contact, "completed_quest"),
      incomingCallsCount: num(contact, "incoming_calls_count"),
      lastCallIncoming: num(contact, "last_call_incoming"),
    })),
    activeContacts: stringArray(abiphone, "active_contacts"),
    selectedRingtone: str(abiphone, "selected_ringtone"),
    selectedSort: str(abiphone, "selected_sort"),
    games: numberRecord(obj(abiphone, "games")),
    operatorChip: numberRecord(obj(abiphone, "operator_chip")),
    trioContactAddons: num(abiphone, "trio_contact_addons"),
    hasUsedSiriusPersonalPhoneNumberItem: bool(
      abiphone,
      "has_used_sirius_personal_phone_number_item",
    ),
    lastDyeCalledYear: num(abiphone, "last_dye_called_year"),
  };
}

function parseKuudraPartyFinder(
  partyFinder: Record<string, unknown>,
): SkyBlockKuudraPartyFinder {
  const search = obj(partyFinder, "search_settings");
  const builder = obj(partyFinder, "group_builder");
  return {
    searchTier: str(search, "tier"),
    groupBuildTier: str(builder, "tier"),
    groupBuildNote: str(builder, "note"),
    groupBuildRequiredCombatLevel: num(builder, "combat_level_required"),
  };
}

function parseCrimsonIsleQuests(
  quests: Record<string, unknown>,
): SkyBlockCrimsonIsleQuests {
  const chickenQuest = obj(quests, "chicken_quest");
  return {
    questData: recordOf(obj(quests, "quest_data"), (entry) => ({
      status: str(entry, "status"),
      progress: num(entry, "progress"),
      completedAt: num(entry, "completed_at"),
    })),
    minibossKills: booleanRecord(obj(quests, "miniboss_data")),
    minibossDaily: scalarRecord(obj(quests, "miniboss_daily")),
    kuudraBossDaily: scalarRecord(obj(quests, "kuuda_boss_daily")),
    questRewards: scalarRecord(obj(quests, "quest_rewards")),
    alchemistQuest: scalarRecord(obj(quests, "alchemist_quest")),
    rulenor: scalarRecord(obj(quests, "rulenor")),
    chickenQuest: {
      start: bool(chickenQuest, "chicken_quest_start"),
      progress: num(chickenQuest, "chicken_quest_progress"),
      collected: stringArray(chickenQuest, "chicken_quest_collected"),
    },
    pomtairQuest: scalarRecord(obj(quests, "pomtair_quest")),
    suusQuest: scalarRecord(obj(quests, "suus_quest")),
    pabloQuest: scalarRecord(obj(quests, "pablo_quest")),
    duelTrainingQuest: scalarRecord(obj(quests, "duel_training_quest")),
    sirihQuest: scalarRecord(obj(quests, "sirih_quest")),
    edelisQuest: scalarRecord(obj(quests, "edelis_quest")),
    mollimQuest: scalarRecord(obj(quests, "mollim_quest")),
    aranyaQuest: scalarRecord(obj(quests, "aranya_quest")),
    lastReset: num(quests, "last_reset"),
    paidBruuh: bool(quests, "paid_bruuh"),
    chickenQuestHandedIn: num(quests, "chicken_quest_handed_in"),
    foundKuudraBook: bool(quests, "found_kuudra_book"),
    foundKuudraLeggings: bool(quests, "found_kuudra_leggings"),
    foundKuudraBoots: bool(quests, "found_kuudra_boots"),
    foundKuudraChestplate: bool(quests, "found_kuudra_chestplate"),
    lastKuudraRelic: num(quests, "last_kuudra_relic"),
    kuudraLoremaster: bool(quests, "kuudra_loremaster"),
  };
}

function parseCrimsonIsle(
  member: Record<string, unknown>,
): SkyBlockCrimsonIsle {
  const isle = obj(member, "nether_island_player_data");
  const matriarch = obj(isle, "matriarch");
  return {
    selectedFaction: str(isle, "selected_faction"),
    magesReputation: num(isle, "mages_reputation"),
    magesReputationHighest: num(isle, "mages_reputation_highest"),
    barbariansReputation: num(isle, "barbarians_reputation"),
    barbariansReputationHighest: num(isle, "barbarians_reputation_highest"),
    lastMinibossesKilled: stringArray(isle, "last_minibosses_killed"),
    kuudraCompletedTiers: numberRecord(obj(isle, "kuudra_completed_tiers")),
    kuudraPartyFinder: parseKuudraPartyFinder(obj(isle, "kuudra_party_finder")),
    dojo: numberRecord(obj(isle, "dojo")),
    abiphone: parseAbiphone(obj(isle, "abiphone")),
    matriarch: {
      pearlsCollected: num(matriarch, "pearls_collected"),
      lastAttempt: num(matriarch, "last_attempt"),
      recentRefreshes: numberArray(matriarch, "recent_refreshes"),
    },
    quests: parseCrimsonIsleQuests(obj(isle, "quests")),
  };
}

function parseTrophyFish(member: Record<string, unknown>): SkyBlockTrophyFish {
  const trophyFish = obj(member, "trophy_fish");
  return {
    rewards: numberArray(trophyFish, "rewards"),
    totalCaught: num(trophyFish, "total_caught"),
    lastCaught: str(trophyFish, "last_caught"),
    catches: numberRecord(trophyFish),
  };
}

function parseObjectives(member: Record<string, unknown>): SkyBlockObjectives {
  const objectives = obj(member, "objectives");
  const parsed: Record<string, SkyBlockObjective> = {};
  for (const key of Object.keys(objectives)) {
    if (key === "tutorial") {
      continue;
    }
    const objective = obj(objectives, key);
    parsed[key] = {
      status: str(objective, "status"),
      progress: num(objective, "progress"),
      completedAt: num(objective, "completed_at"),
    };
  }
  return {
    tutorial: stringArray(objectives, "tutorial"),
    objectives: parsed,
  };
}

function parseQuests(member: Record<string, unknown>): SkyBlockQuests {
  const quests = obj(member, "quests");
  const trapper = obj(quests, "trapper_quest");
  return {
    trapper: {
      peltCount: num(trapper, "pelt_count"),
      lastTaskTime: num(trapper, "last_task_time"),
    },
  };
}

function parseExperimentation(
  member: Record<string, unknown>,
): SkyBlockExperimentation {
  const experimentation = obj(member, "experimentation");
  return {
    claimsResets: num(experimentation, "claims_resets"),
    claimsResetsTimestamp: num(experimentation, "claims_resets_timestamp"),
    serumsDrank: num(experimentation, "serums_drank"),
    claimedRetroactiveRng: bool(experimentation, "claimed_retroactive_rng"),
    chargeTrackTimestamp: num(experimentation, "charge_track_timestamp"),
    pairings: numberRecord(obj(experimentation, "pairings")),
    simon: numberRecord(obj(experimentation, "simon")),
    numbers: numberRecord(obj(experimentation, "numbers")),
  };
}

function parseRiftVillagePlaza(
  plaza: Record<string, unknown>,
): SkyBlockRiftVillagePlaza {
  const murder = obj(plaza, "murder");
  const barry = obj(plaza, "barry_center");
  const cowboy = obj(plaza, "cowboy");
  return {
    murder: {
      stepIndex: num(murder, "step_index"),
      roomClues: stringArray(murder, "room_clues"),
      stepIndexPt2: num(murder, "step_index_pt2"),
      stepIndexPt3: num(murder, "step_index_pt3"),
    },
    barry: {
      firstTalkToBarry: bool(barry, "first_talk_to_barry"),
      convinced: stringArray(barry, "convinced"),
      receivedReward: bool(barry, "received_reward"),
    },
    cowboy: {
      stage: num(cowboy, "stage"),
      hayEaten: num(cowboy, "hay_eaten"),
      rabbitName: str(cowboy, "rabbit_name"),
    },
    barterBank: scalarRecord(obj(plaza, "barter_bank")),
    lonely: scalarRecord(obj(plaza, "lonely")),
    seraphine: scalarRecord(obj(plaza, "seraphine")),
    gotScammed: bool(plaza, "got_scammed"),
  };
}

function parseRiftWestVillage(
  west: Record<string, unknown>,
): SkyBlockRiftWestVillage {
  const crazyKloon = obj(west, "crazy_kloon");
  const mirrorverse = obj(west, "mirrorverse");
  const katHouse = obj(west, "kat_house");
  const glyphs = obj(west, "glyphs");
  return {
    crazyKloon: {
      selectedColors: stringRecord(obj(crazyKloon, "selected_colors")),
      talked: bool(crazyKloon, "talked"),
      hackedTerminals: stringArray(crazyKloon, "hacked_terminals"),
      questComplete: bool(crazyKloon, "quest_complete"),
    },
    mirrorverse: {
      visitedRooms: stringArray(mirrorverse, "visited_rooms"),
      upsideDownHard: bool(mirrorverse, "upside_down_hard"),
      claimedChestItems: stringArray(mirrorverse, "claimed_chest_items"),
      claimedReward: bool(mirrorverse, "claimed_reward"),
    },
    katHouse: {
      binCollectedSilverfish: num(katHouse, "bin_collected_silverfish"),
      binCollectedSpider: num(katHouse, "bin_collected_spider"),
      binCollectedMosquito: num(katHouse, "bin_collected_mosquito"),
    },
    glyphs: {
      claimedWand: bool(glyphs, "claimed_wand"),
      currentGlyphDelivered: bool(glyphs, "current_glyph_delivered"),
      currentGlyphCompleted: bool(glyphs, "current_glyph_completed"),
      currentGlyph: num(glyphs, "current_glyph"),
      completed: bool(glyphs, "completed"),
      claimedBracelet: bool(glyphs, "claimed_bracelet"),
    },
  };
}

function parseRift(member: Record<string, unknown>): SkyBlockRift {
  const rift = obj(member, "rift");
  const riftInventory = obj(rift, "inventory");
  const access = obj(rift, "access");
  const witherCage = obj(rift, "wither_cage");
  const blackLagoon = obj(rift, "black_lagoon");
  const deadCats = obj(rift, "dead_cats");
  const wizardTower = obj(rift, "wizard_tower");
  const enigma = obj(rift, "enigma");
  const gallery = obj(rift, "gallery");
  const castle = obj(rift, "castle");
  const wyldWoods = obj(rift, "wyld_woods");
  const dreadFarm = obj(rift, "dreadfarm");
  return {
    access: {
      lastFree: num(access, "last_free"),
      chargeTrackTimestamp: num(access, "charge_track_timestamp"),
    },
    villagePlaza: parseRiftVillagePlaza(obj(rift, "village_plaza")),
    witherCage: { killedEyes: stringArray(witherCage, "killed_eyes") },
    blackLagoon: {
      talkedToEdwin: bool(blackLagoon, "talked_to_edwin"),
      receivedSciencePaper: bool(blackLagoon, "received_science_paper"),
      deliveredSciencePaper: bool(blackLagoon, "delivered_science_paper"),
      completedStep: num(blackLagoon, "completed_step"),
    },
    deadCats: {
      talkedToJacquelle: bool(deadCats, "talked_to_jacquelle"),
      pickedUpDetector: bool(deadCats, "picked_up_detector"),
      foundCats: stringArray(deadCats, "found_cats"),
      unlockedPet: bool(deadCats, "unlocked_pet"),
      montezuma: parsePet(obj(deadCats, "montezuma")),
    },
    wizardTower: {
      wizardQuestStep: num(wizardTower, "wizard_quest_step"),
      crumbsLaidOut: num(wizardTower, "crumbs_laid_out"),
    },
    enigma: {
      boughtCloak: bool(enigma, "bought_cloak"),
      foundSouls: stringArray(enigma, "found_souls"),
      claimedBonusIndex: num(enigma, "claimed_bonus_index"),
    },
    gallery: {
      eliseStep: num(gallery, "elise_step"),
      sentTrophyDialogues: stringArray(gallery, "sent_trophy_dialogues"),
      securedTrophies: objectArray(gallery, "secured_trophies").map(
        (trophy) => ({
          type: str(trophy, "type"),
          timestamp: num(trophy, "timestamp"),
          visits: num(trophy, "visits"),
        }),
      ),
    },
    castle: {
      unlockedPathwaySkip: bool(castle, "unlocked_pathway_skip"),
      fairyStep: num(castle, "fairy_step"),
    },
    westVillage: parseRiftWestVillage(obj(rift, "west_village")),
    wyldWoods: {
      siriusStartedQA: bool(wyldWoods, "sirius_started_q_a"),
      bughunterStep: num(wyldWoods, "bughunter_step"),
      siriusQAChainDone: bool(wyldWoods, "sirius_q_a_chain_done"),
      talkedThreebrothers: stringArray(wyldWoods, "talked_threebrothers"),
      siriusCompletedQA: bool(wyldWoods, "sirius_completed_q_a"),
      siriusClaimedDoubloon: bool(wyldWoods, "sirius_claimed_doubloon"),
    },
    dreadFarm: {
      shaniaStage: num(dreadFarm, "shania_stage"),
      caducousFeederUses: numberArray(dreadFarm, "caducous_feeder_uses"),
    },
    lifetimePurchasedBoundaries: stringArray(
      rift,
      "lifetime_purchased_boundaries",
    ),
    inventory: inventory(riftInventory, "inv_contents"),
    enderChest: inventory(riftInventory, "ender_chest_contents"),
    enderChestPageIcons: Array.isArray(riftInventory.ender_chest_page_icons)
      ? riftInventory.ender_chest_page_icons.map((icon) =>
          typeof icon === "object" && icon !== null && !Array.isArray(icon)
            ? decodeInventory(icon as Record<string, unknown>)
            : null,
        )
      : [],
    armor: inventory(riftInventory, "inv_armor"),
    equipment: inventory(riftInventory, "equipment_contents"),
  };
}

function parseSkillTree(member: Record<string, unknown>): SkyBlockSkillTree {
  const skillTree = obj(member, "skill_tree");
  const nodes = obj(skillTree, "nodes");
  const selectedAbility = obj(skillTree, "selected_ability");
  const tokensSpent = obj(skillTree, "tokens_spent");
  const experience = obj(skillTree, "experience");
  const lastReset = obj(skillTree, "last_reset");
  return {
    nodes: {
      mining: numberBooleanRecord(obj(nodes, "mining")),
      foraging: numberBooleanRecord(obj(nodes, "foraging")),
    },
    selectedAbility: {
      mining: str(selectedAbility, "mining"),
      foraging: str(selectedAbility, "foraging"),
    },
    tokensSpent: {
      mountain: num(tokensSpent, "mountain"),
      forest: num(tokensSpent, "forest"),
    },
    experience: {
      mining: num(experience, "mining"),
      foraging: num(experience, "foraging"),
    },
    lastReset: {
      mining: num(lastReset, "mining"),
      foraging: num(lastReset, "foraging"),
    },
    refundAbilityFree: bool(skillTree, "refund_ability_free"),
  };
}

function parseInventories(
  member: Record<string, unknown>,
): SkyBlockInventories {
  const inventories = obj(member, "inventory");
  const sharedInventory = obj(member, "shared_inventory");
  const bagContents = obj(inventories, "bag_contents");
  return {
    inventory: inventory(inventories, "inv_contents"),
    armor: inventory(inventories, "inv_armor"),
    equipment: inventory(inventories, "equipment_contents"),
    enderChest: inventory(inventories, "ender_chest_contents"),
    personalVault: inventory(inventories, "personal_vault_contents"),
    wardrobe: inventory(inventories, "wardrobe_contents"),
    wardrobeEquippedSlot: num(inventories, "wardrobe_equipped_slot"),
    talismanBag: inventory(bagContents, "talisman_bag"),
    potionBag: inventory(bagContents, "potion_bag"),
    fishingBag: inventory(bagContents, "fishing_bag"),
    sacksBag: inventory(bagContents, "sacks_bag"),
    quiver: inventory(bagContents, "quiver"),
    candyInventory: inventory(sharedInventory, "candy_inventory_contents"),
    carnivalMaskInventory: inventory(
      sharedInventory,
      "carnival_mask_inventory_contents",
    ),
    backpackContents: inventoryRecord(obj(inventories, "backpack_contents")),
    backpackIcons: inventoryRecord(obj(inventories, "backpack_icons")),
    sacksCounts: numberRecord(obj(inventories, "sacks_counts")),
  };
}

function parseHarpSongs(harp: Record<string, unknown>): SkyBlockHarpQuest {
  const songs: Record<string, number> = {};
  for (const key of Object.keys(harp)) {
    if (key.startsWith("song_")) {
      const value = harp[key];
      if (typeof value === "number") {
        songs[key] = value;
      }
    }
  }
  return {
    selectedSong: str(harp, "selected_song"),
    selectedSongEpoch: num(harp, "selected_song_epoch"),
    claimedTalisman: bool(harp, "claimed_talisman"),
    songs,
  };
}

function parseForaging(member: Record<string, unknown>): SkyBlockForaging {
  const foraging = obj(member, "foraging");
  const hinaTasks = obj(obj(foraging, "hina"), "tasks");
  const treeGifts = obj(foraging, "tree_gifts");
  const gifts: Record<string, number> = {};
  for (const key of Object.keys(treeGifts)) {
    if (key === "milestone_tier_claimed") {
      continue;
    }
    const value = treeGifts[key];
    if (typeof value === "number") {
      gifts[key] = value;
    }
  }
  return {
    starlyn: {
      personalBests: numberRecord(
        obj(obj(foraging, "starlyn"), "personal_bests"),
      ),
    },
    fishFamily: stringArray(foraging, "fish_family"),
    hina: {
      tasks: {
        completedTasks: stringArray(hinaTasks, "completed_tasks"),
        taskProgress: numberRecord(obj(hinaTasks, "task_progress")),
        claimedRewards: stringArray(hinaTasks, "claimed_rewards"),
        tierClaimed: num(hinaTasks, "tier_claimed"),
      },
    },
    treeGifts: {
      gifts,
      milestoneTierClaimed: numberRecord(
        obj(treeGifts, "milestone_tier_claimed"),
      ),
    },
    songs: { harp: parseHarpSongs(obj(obj(foraging, "songs"), "harp")) },
    huntingToolkit: parseToolkit(obj(foraging, "hunting_toolkit")),
  };
}

function parseForagingCore(
  member: Record<string, unknown>,
): SkyBlockForagingCore {
  const core = obj(member, "foraging_core");
  return {
    dailyTreesCutDay: num(core, "daily_trees_cut_day"),
    dailyTreesCut: num(core, "daily_trees_cut"),
    dailyGifts: num(core, "daily_gifts"),
    dailyLogCutDay: num(core, "daily_log_cut_day"),
    dailyLogCut: stringArray(core, "daily_log_cut"),
    forestsWhispers: num(core, "forests_whispers"),
    forestsWhispersSpent: num(core, "forests_whispers_spent"),
    currentDailyEffect: str(core, "current_daily_effect"),
    currentDailyEffectLastChanged: num(
      core,
      "current_daily_effect_last_changed",
    ),
  };
}

function parseShards(member: Record<string, unknown>): SkyBlockShards {
  const shards = obj(member, "shards");
  return {
    shardSort: str(shards, "shard_sort"),
    fusionResultSort: str(shards, "fusion_result_sort"),
    owned: objectArray(shards, "owned").map((entry) => ({
      type: str(entry, "type"),
      amountOwned: num(entry, "amount_owned"),
      captured: num(entry, "captured"),
    })),
    activeTraps: objectArray(obj(shards, "traps"), "active_traps").map(
      (trap) => ({
        trapItem: str(trap, "trap_item"),
        captureTime: num(trap, "capture_time"),
        mode: str(trap, "mode"),
        location: str(trap, "location"),
        placedAt: num(trap, "placed_at"),
        shard: str(trap, "shard"),
        captured: bool(trap, "captured"),
        uuid: str(trap, "uuid"),
      }),
    ),
  };
}

function parseLoadout(member: Record<string, unknown>): SkyBlockLoadout {
  const armorRaw = obj(obj(member, "loadout"), "armor");
  const armor: Record<string, SkyBlockLoadoutArmorSet> = {};
  for (const key of Object.keys(armorRaw)) {
    const set = obj(armorRaw, key);
    const pieces: Record<string, SkyBlockInventory> = {};
    for (const slot of Object.keys(set)) {
      if (slot === "id") {
        continue;
      }
      const decoded = decodeInventory(obj(set, slot));
      if (decoded !== null) {
        pieces[slot] = decoded;
      }
    }
    armor[key] = { id: num(set, "id"), pieces };
  }
  return { armor };
}

function parseMember(member: Record<string, unknown>): SkyBlockMember {
  return {
    playerId: str(member, "player_id"),
    currencies: parseCurrencies(member),
    fairySouls: parseFairySouls(member),
    leveling: parseLeveling(member),
    profileStats: parseProfileStats(member),
    itemData: parseItemData(member),
    skillExperience: parseSkillExperience(
      obj(obj(member, "player_data"), "experience"),
    ),
    slayers: parseSlayers(member),
    dungeons: parseDungeons(member),
    playerData: parsePlayerData(member),
    playerStats: parsePlayerStats(member),
    collections: numberRecord(obj(member, "collection")),
    jacobContests: parseJacobContests(member),
    accessoryBag: parseAccessoryBag(member),
    bestiary: parseBestiary(member),
    garden: parseGarden(member),
    miningCore: parseMiningCore(member),
    forge: parseForge(member),
    glacitePlayerData: parseGlacitePlayerData(member),
    pets: parsePets(member),
    chocolateFactory: parseChocolateFactory(member),
    crimsonIsle: parseCrimsonIsle(member),
    trophyFish: parseTrophyFish(member),
    objectives: parseObjectives(member),
    quests: parseQuests(member),
    experimentation: parseExperimentation(member),
    skillTree: parseSkillTree(member),
    rift: parseRift(member),
    inventories: parseInventories(member),
    foraging: parseForaging(member),
    foragingCore: parseForagingCore(member),
    shards: parseShards(member),
    winterPlayerData: {
      refinedJyrreUses: num(
        obj(member, "winter_player_data"),
        "refined_jyrre_uses",
      ),
    },
    temples: {
      unlockedTemples: stringArray(obj(member, "temples"), "unlocked_temples"),
    },
    attributes: {
      stacks: numberRecord(obj(obj(member, "attributes"), "stacks")),
    },
    loadout: parseLoadout(member),
  };
}

function parseBanking(profile: Record<string, unknown>): SkyBlockBanking {
  const banking = obj(profile, "banking");
  return {
    balance: num(banking, "balance"),
    transactions: objectArray(banking, "transactions").map((transaction) => ({
      amount: num(transaction, "amount"),
      timestamp: num(transaction, "timestamp"),
      action: str(transaction, "action"),
      initiatorName: str(transaction, "initiator_name"),
    })),
  };
}

function parseCommunityUpgrades(
  profile: Record<string, unknown>,
): SkyBlockCommunityUpgrades {
  const communityUpgrades = obj(profile, "community_upgrades");
  const currentlyUpgrading = communityUpgrades.currently_upgrading;
  return {
    currentlyUpgrading:
      typeof currentlyUpgrading === "object" &&
      currentlyUpgrading !== null &&
      !Array.isArray(currentlyUpgrading)
        ? {
            upgrade: str(
              currentlyUpgrading as Record<string, unknown>,
              "upgrade",
            ),
            newTier: num(
              currentlyUpgrading as Record<string, unknown>,
              "new_tier",
            ),
            startedMs: num(
              currentlyUpgrading as Record<string, unknown>,
              "start_ms",
            ),
            startedBy: str(
              currentlyUpgrading as Record<string, unknown>,
              "who_started",
            ),
          }
        : null,
    upgradeStates: objectArray(communityUpgrades, "upgrade_states").map(
      (state) => ({
        upgrade: str(state, "upgrade"),
        tier: num(state, "tier"),
        startedMs: num(state, "started_ms"),
        startedBy: str(state, "started_by"),
        claimedMs: num(state, "claimed_ms"),
        claimedBy: str(state, "claimed_by"),
        fastTracked: bool(state, "fasttracked"),
      }),
    ),
  };
}

/** Parses a SkyBlock profile (`/skyblock/profile`) into a typed object. */
export function parseSkyBlockProfile(
  profile: Record<string, unknown>,
  forUuid?: string,
): SkyBlockProfile | null {
  if (
    typeof profile !== "object" ||
    profile === null ||
    Array.isArray(profile)
  ) {
    return null;
  }

  const rawMembers = obj(profile, "members");
  const members: Record<string, SkyBlockMember> = {};
  for (const uuid of Object.keys(rawMembers)) {
    members[uuid] = parseMember(obj(rawMembers, uuid));
  }

  const member = forUuid !== undefined ? (members[forUuid] ?? null) : null;

  return {
    id: str(profile, "profile_id"),
    cuteName: str(profile, "cute_name"),
    gameMode: str(profile, "game_mode"),
    selected: bool(profile, "selected"),
    createdAt: date(profile, "created_at"),
    banking: parseBanking(profile),
    communityUpgrades: parseCommunityUpgrades(profile),
    member,
    members,
  };
}

/** Parses a player's SkyBlock profiles (`/skyblock/profiles`) into a typed object. */
export function parseSkyBlockProfiles(
  data: Record<string, unknown>,
  forUuid?: string,
): readonly SkyBlockProfile[] {
  const profiles = Array.isArray(data.profiles) ? data.profiles : [];
  return profiles
    .filter(
      (profile): profile is Record<string, unknown> =>
        typeof profile === "object" &&
        profile !== null &&
        !Array.isArray(profile),
    )
    .map((profile) => parseSkyBlockProfile(profile, forUuid))
    .filter((profile): profile is SkyBlockProfile => profile !== null);
}

