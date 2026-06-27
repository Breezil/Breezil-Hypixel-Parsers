# SkyBlock Profile

The SkyBlock parsers turn the raw `/skyblock/profile` and `/skyblock/profiles` Hypixel API JSON into readonly, fully-typed objects. They are strict-raw: fields are mirrored from the API one-for-one, with no derived, computed, or aggregated values.

This page documents every export of `src/skyblock.ts`: both parse functions and the complete tree of interfaces and types they return.

## parseSkyBlockProfile

Parses a single SkyBlock profile (`/skyblock/profile`) into a typed object.

```ts
export function parseSkyBlockProfile(
  profile: Record<string, unknown>,
  forUuid?: string,
): SkyBlockProfile | null;
```

Returns `null` when `profile` is not a non-array object. When `forUuid` is supplied, the matching member is resolved into the `member` field (or `null` if that uuid is not present in `members`); when `forUuid` is omitted, `member` is always `null`. The full `members` map is populated regardless.

The complete returned type tree is documented in [Returned type tree](#returned-type-tree) below.

## parseSkyBlockProfiles

Parses a player's SkyBlock profiles (`/skyblock/profiles`) into a typed object.

```ts
export function parseSkyBlockProfiles(
  data: Record<string, unknown>,
  forUuid?: string,
): readonly SkyBlockProfile[];
```

Reads `data.profiles`. Returns an empty array when `data.profiles` is not an array. Each array entry is parsed via `parseSkyBlockProfile` (with the same `forUuid` semantics); non-object entries and any entry that parses to `null` are filtered out. Every element of the result is a [`SkyBlockProfile`](#skyblockprofile).

## Returned type tree

### SkyBlockProfile

The root object returned by `parseSkyBlockProfile`.

```ts
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
```

| Field       | Meaning                                               |
| ----------- | ----------------------------------------------------- |
| `id`        | Raw `profile_id`.                                     |
| `cuteName`  | Raw `cute_name` (profile display name).               |
| `gameMode`  | Raw `game_mode`.                                      |
| `selected`  | Whether this is the selected profile.                 |
| `createdAt` | Profile creation date, or `null` when absent/invalid. |
| `member`    | The resolved member for `forUuid`, or `null`.         |
| `members`   | All members keyed by uuid.                            |

### SkyBlockBanking

```ts
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
```

### SkyBlockCommunityUpgrades

```ts
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
```

`currentlyUpgrading` is `null` when no upgrade is in progress.

### SkyBlockMember

The per-member object stored in `SkyBlockProfile.members` and `SkyBlockProfile.member`.

```ts
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
```

## Shared types

### SkyBlockScalarMap

A map of scalar values (number, string, or boolean) used by various raw quest/state blocks.

```ts
export type SkyBlockScalarMap = Record<string, number | string | boolean>;
```

### SkyBlockInventory and SkyBlockItemBytes

```ts
export interface SkyBlockInventory {
  readonly type: number;
  readonly items: readonly NbtItem[];
}

export interface SkyBlockItemBytes {
  readonly type: number;
  readonly data: string;
}
```

`SkyBlockInventory` holds decoded NBT items (`items` are decoded from the raw item bytes). `NbtItem` is documented with the NBT parsers. Inventory fields elsewhere in the tree are `null` when the raw `data` string is missing or empty. `SkyBlockItemBytes` keeps the raw, undecoded item-bytes string.

## Currencies, fairy souls, leveling

### SkyBlockCurrencies

```ts
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
```

### SkyBlockFairySouls

```ts
export interface SkyBlockFairySouls {
  readonly exchanges: number;
  readonly collected: number;
  readonly unspent: number;
}
```

### SkyBlockLeveling

```ts
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
```

### SkyBlockProfileStats

```ts
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
```

`firstJoin` is `null` when absent. `coopInvitation` is `null` when there is no co-op invitation block.

### SkyBlockItemData

```ts
export interface SkyBlockItemData {
  readonly soulflow: number;
  readonly favoriteArrow: string;
  readonly teleporterPillConsumed: boolean;
}
```

### SkyBlockSkillExperience

Shared by `SkyBlockMember.skillExperience` and `SkyBlockPlayerData.skillExperience`.

```ts
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
```

## Slayers

```ts
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
```

`activeQuest` is `null` when no slayer quest is active. `bosses` is keyed by slayer name.

## Dungeons

```ts
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
```

## Player data

```ts
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
```

## Player stats

```ts
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
```

`rift` and `races` values are either a number or a nested numeric record.

## Jacob contests

```ts
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
```

## Accessory bag and bestiary

```ts
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
```

`selectedPower` is `null` when no power is selected.

## Toolkit and garden

`SkyBlockToolkit` is shared by `SkyBlockMemberGarden.farmingToolkit` and `SkyBlockForaging.huntingToolkit`.

```ts
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
```

## Mining core

```ts
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
```

## Forge and glacite

```ts
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
```

`oldItem` is `null` when not present.

## Pets

`SkyBlockPet` is also reused by the Rift dead-cats quest (`SkyBlockRiftDeadCats.montezuma`).

```ts
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
```

The nullable string fields (`uuid`, `uniqueId`, `heldItem`, `heldItemUuid`, `skin`) are `null` when absent.

## Chocolate factory

```ts
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
```

## Crimson Isle

```ts
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
```

## Trophy fish, objectives, quests

`SkyBlockObjective` is also used by `SkyBlockCrimsonIsleQuests.questData`.

```ts
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
```

## Experimentation

```ts
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
```

## Skill tree

```ts
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
```

## Rift

```ts
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
```

The inventory fields are `null` when the corresponding raw item-bytes string is missing or empty.

## Inventories

```ts
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
```

Each `SkyBlockInventory | null` field is `null` when its raw bytes are missing or empty. `backpackContents` and `backpackIcons` only contain entries that decoded successfully.

## Foraging

`SkyBlockHarpQuest` (documented under Quests) is reused here for `SkyBlockForagingSongs.harp`. `SkyBlockToolkit` is reused for `huntingToolkit`.

```ts
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
```

## Shards

```ts
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
```

## Winter, temples, attributes, loadout

```ts
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
```

