# Player

The player parser turns the raw Hypixel `/player` JSON into a single readonly, fully-typed `HypixelPlayer` object. It is strict-raw: every field mirrors the API exactly, with no computed levels, ratios, or aggregates of any kind.

## parsePlayer

Parses a player (`/player`) into a typed object, mapping the raw player payload field-for-field into a `HypixelPlayer`.

```ts
export function parsePlayer(raw: Record<string, unknown>): HypixelPlayer;
```

### Null and empty behavior

- `parsePlayer` always returns a fully-populated `HypixelPlayer`; it never returns `null`.
- Missing string fields become `""`; missing numeric fields become `0`; missing booleans become `false`.
- `uuid` falls back to `"UNKNOWN"`, `nickname` falls back to `"UNKNOWN"`, `language` falls back to `"ENGLISH"`, and `channel` falls back to `"ALL"` when absent.
- All `Date | null` fields are `null` when the raw timestamp is absent or non-positive.
- Array fields (quests, parkour, advent rewards, firework storage, friend requests, etc.) become `[]` when absent.
- Each per-game block in `stats` is `null` when that game's data is absent (see [HypixelPlayerStats](#hypixelplayerstats)).

## HypixelPlayer

The root object returned by `parsePlayer`.

```ts
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
  readonly claimedYear143CakeAt: Date | null;
  readonly claimedPotatoWarCrownAt: Date | null;
  readonly claimedPotatoBasketAt: Date | null;
  readonly claimedPotatoTalismanAt: Date | null;
  readonly claimedSoloBank: Record<string, number>;
  readonly skyBlockFreeCookieAt: Date | null;
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
```

Notable top-level fields:

| Field                                                 | Meaning                                             |
| ----------------------------------------------------- | --------------------------------------------------- |
| `id`                                                  | Internal Hypixel document id (raw `_id`).           |
| `uuid`                                                | Player UUID, `"UNKNOWN"` when absent.               |
| `nickname`                                            | Display name, `"UNKNOWN"` when absent.              |
| `playerName`                                          | Raw `playername` value.                             |
| `staffRank`                                           | Raw `rank` (staff rank) value.                      |
| `packageRank` / `newPackageRank`                      | Purchased rank fields.                              |
| `monthlyPackageRank` / `mostRecentMonthlyPackageRank` | Monthly (MVP++) rank fields.                        |
| `networkExp`                                          | Network experience (raw, not a derived level).      |
| `language`                                            | User language, `"ENGLISH"` when absent.             |
| `channel`                                             | Chat channel, `"ALL"` when absent.                  |
| `claimedSoloBank`                                     | Map keyed by the suffix after `claimed_solo_bank_`. |
| `xmas2019`                                            | Map keyed by the suffix after `xmas2019_`.          |
| `stats`                                               | Per-game statistics blocks (see below).             |

## HypixelPlayerStats

Per-game statistics container. Each field is `null` when that game's block is absent in the raw stats. The per-game types are documented on their own pages.

```ts
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
}
```

Each per-game type is imported from its own module (`BedWarsStats` from `./bedwars`, `SkyWarsStats` from `./skywars`, and so on) and documented on the corresponding API page.

## HypixelPlayerFlashingSale

Flashing-sale popup interaction counters.

```ts
export interface HypixelPlayerFlashingSale {
  readonly clicks: number;
  readonly opens: number;
  readonly poppedUp: number;
  readonly lastPopupAt: Date | null;
}
```

## HypixelPlayerLeveling

Network leveling reward claim state.

```ts
export interface HypixelPlayerLeveling {
  readonly claimedRewards: readonly number[];
}
```

## HypixelPlayerAnniversary

Anniversary NPC progress for the 2020 event.

```ts
export interface HypixelPlayerAnniversary {
  readonly npcProgress2020: number;
  readonly npcVisited2020: readonly number[];
}
```

## HypixelPlayerCooldowns

Per-event cooldown maps. Each field is a `Record<string, boolean>` keyed by the raw cooldown identifiers.

```ts
export interface HypixelPlayerCooldowns {
  readonly specialty: Record<string, boolean>;
  readonly holiday2016: Record<string, boolean>;
  readonly halloween2016: Record<string, boolean>;
  readonly halloween2019: Record<string, boolean>;
  readonly halloween2021: Record<string, boolean>;
  readonly christmas2019: Record<string, boolean>;
  readonly easter2021: Record<string, boolean>;
  readonly summer2020: Record<string, boolean>;
}
```

Note: `easter2021` maps from the raw `easter2021Cooldowns2` field.

## HypixelPlayerAchievements

Achievement points, rewards, tracking, and totem state.

```ts
export interface HypixelPlayerAchievements {
  readonly points: number;
  readonly rewards: Record<string, number>;
  readonly tracking: readonly string[];
  readonly tiered: Record<string, number>;
  readonly oneTime: readonly string[];
  readonly oneTimeMenuSort: string;
  readonly sync: Record<string, number>;
  readonly totem: HypixelPlayerAchievementsTotem;
}
```

| Field             | Meaning                                                                        |
| ----------------- | ------------------------------------------------------------------------------ |
| `points`          | Achievement points (from `_legacy_achievement_points` or `achievementPoints`). |
| `rewards`         | Reward map keyed by the suffix after `for_points_`.                            |
| `tracking`        | List of currently tracked achievements.                                        |
| `tiered`          | Tiered achievement progress map.                                               |
| `oneTime`         | List of unlocked one-time achievements.                                        |
| `oneTimeMenuSort` | Raw menu sort preference.                                                      |
| `sync`            | Achievement sync map.                                                          |
| `totem`           | Totem customization state.                                                     |

## HypixelPlayerAchievementsTotem

Totem of corruption customization state.

```ts
export interface HypixelPlayerAchievementsTotem {
  readonly canCustomize: boolean;
  readonly allowedMaxHeight: number;
  readonly unlockedParts: readonly string[];
  readonly selectedParts: Record<string, string>;
  readonly unlockedColors: readonly string[];
  readonly selectedColors: Record<string, string>;
}
```

## HypixelPlayerCosmetics

Cosmetic selections, vanity state, and pets.

```ts
export interface HypixelPlayerCosmetics {
  readonly menuSort: string;
  readonly rankPlusColor: string;
  readonly monthlyRankColor: string;
  readonly selectedGadget: string;
  readonly gadget: string;
  readonly selectedParticlePack: string;
  readonly clickEffect: string;
  readonly disguise: string;
  readonly transformation: string;
  readonly wardrobe: string;
  readonly outfit: Record<string, string>;
  readonly boxesConvertedToday: number;
  readonly firstBoxConvertedAt: Date | null;
  readonly packages: readonly string[];
  readonly pets: HypixelPlayerPets;
}
```

## HypixelPlayerPets

Pet container: current pet, favorites, consumables, and owned pets.

```ts
export interface HypixelPlayerPets {
  readonly currentPet: string;
  readonly favorites: string;
  readonly autoSpawn: boolean;
  readonly lastJourneyAt: Date | null;
  readonly consumables: HypixelPlayerPetConsumables;
  readonly owned: readonly HypixelPlayerPet[];
}
```

## HypixelPlayerPet

A single owned pet with its stats.

```ts
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
```

## HypixelPlayerPetConsumables

Counts of each pet consumable item.

```ts
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
```

Note: `carrot` maps from the raw `CARROT_ITEM` field.

## HypixelPlayerRankPurchase

Timestamps of when each rank was purchased / leveled up to.

```ts
export interface HypixelPlayerRankPurchase {
  readonly vipAt: Date | null;
  readonly vipPlusAt: Date | null;
  readonly mvpAt: Date | null;
  readonly mvpPlusAt: Date | null;
}
```

## HypixelPlayerRewards

Daily reward streak and crate state.

```ts
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
```

| Field           | Meaning                                                   |
| --------------- | --------------------------------------------------------- |
| `rewardTokens`  | Token balance (raw `adsense_tokens`).                     |
| `monthlyCrates` | One entry per key in raw `monthlycrates`, keyed by month. |
| `dmCrates`      | One entry per raw key starting with `dmcrates-`.          |

## HypixelPlayerMonthlyCrate

A single monthly or DM crate, keyed by date string, with a flag per rank tier.

```ts
export interface HypixelPlayerMonthlyCrate {
  readonly date: string;
  readonly regular: boolean;
  readonly vip: boolean;
  readonly vipPlus: boolean;
  readonly mvp: boolean;
  readonly mvpPlus: boolean;
}
```

Note: `regular` is `true` when either the raw `REGULAR` or `NORMAL` flag is set.

## HypixelPlayerGifting

Gifting and bundle statistics.

```ts
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
```

## HypixelPlayerSocialMedia

Linked social media handles plus a raw verification map.

```ts
export interface HypixelPlayerSocialMedia {
  readonly discord: string;
  readonly youtube: string;
  readonly twitch: string;
  readonly hypixel: string;
  readonly twitter: string;
  readonly instagram: string;
  readonly tiktok: string;
  readonly verification: Record<string, string>;
}
```

The named fields come from `socialMedia.links`; `verification` contains every other string-valued key under `socialMedia` (excluding `links`).

## HypixelPlayerHousing

Housing meta: unlocked content, settings, and given-cookie history.

```ts
export interface HypixelPlayerHousing {
  readonly allowedBlocks: readonly string[];
  readonly packages: readonly string[];
  readonly tutorialStage: string;
  readonly firstHouseJoinAt: Date | null;
  readonly visibilityDisabled: boolean;
  readonly selectedChannels: readonly string[];
  readonly playerSettings: Record<string, string>;
  readonly givenCookies: readonly HypixelPlayerGivenCookies[];
}
```

Note: `tutorialStage` maps from raw `tutorialStep`; `selectedChannels` maps from raw `selectedChannels_v3`.

## HypixelPlayerGivenCookies

A given-cookies record for a single date, listing the houses cookies were given to.

```ts
export interface HypixelPlayerGivenCookies {
  readonly date: string;
  readonly houses: readonly string[];
}
```

One entry is produced per raw key starting with `given_cookies_`; `date` is the suffix after that prefix.

## HypixelPlayerQuest

A quest with its completion history.

```ts
export interface HypixelPlayerQuest {
  readonly name: string;
  readonly completions: readonly HypixelPlayerQuestCompletion[];
}
```

## HypixelPlayerQuestCompletion

A single quest completion timestamp.

```ts
export interface HypixelPlayerQuestCompletion {
  readonly completedAt: Date | null;
}
```

## HypixelPlayerParkour

A parkour run record for one location.

```ts
export interface HypixelPlayerParkour {
  readonly location: string;
  readonly timeStart: number;
  readonly timeTook: number;
  readonly checkpoints: readonly number[];
}
```

| Field         | Meaning                                                               |
| ------------- | --------------------------------------------------------------------- |
| `location`    | Parkour location key (raw key under `parkourCompletions`).            |
| `timeStart`   | Start time of the first recorded run.                                 |
| `timeTook`    | Duration of the first recorded run.                                   |
| `checkpoints` | Best checkpoint times from `parkourCheckpointBests` for the location. |

## HypixelPlayerAdventRewards

Advent calendar reward claims for a given year.

```ts
export interface HypixelPlayerAdventRewards {
  readonly year: number;
  readonly days: readonly HypixelPlayerAdventDay[];
}
```

Entries come from raw keys starting with `adventRewards`; the four-digit year is parsed from the key (`0` when none is found). `days` always contains 25 entries (day 1 through day 25).

## HypixelPlayerAdventDay

A single advent calendar day claim.

```ts
export interface HypixelPlayerAdventDay {
  readonly day: number;
  readonly claimedAt: Date | null;
}
```

## HypixelPlayerSeasonal

Seasonal event data.

```ts
export interface HypixelPlayerSeasonal {
  readonly christmasAdventRewards: readonly HypixelPlayerAdventRewards[];
}
```

`christmasAdventRewards` is built from `seasonal.christmas`, one entry per year, each with its 25 advent days.

## HypixelPlayerScorpiusBribe

A Scorpius bribe claim for a given year.

```ts
export interface HypixelPlayerScorpiusBribe {
  readonly year: number;
  readonly claimedAt: Date | null;
}
```

One entry is produced per raw key starting with `scorpius_bribe_`; `year` is parsed from the suffix (`0` when not numeric).

## HypixelPlayerTourney

Tournament meta: first lobby join, total tributes, and per-tournament entries.

```ts
export interface HypixelPlayerTourney {
  readonly firstJoinLobbyAt: Date | null;
  readonly totalTributes: number;
  readonly entries: readonly HypixelPlayerTournamentEntry[];
}
```

## HypixelPlayerTournamentEntry

A single tournament entry, keyed by the raw tournament key.

```ts
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
```

Note: `seenRewardBook` maps from raw `seenRPbook`.

## HypixelPlayerFirework

A stored firework configuration.

```ts
export interface HypixelPlayerFirework {
  readonly flightDuration: number;
  readonly shape: string;
  readonly trail: boolean;
  readonly twinkle: boolean;
  readonly colors: string;
  readonly fadeColors: string;
  readonly selected: boolean;
}
```

Note: `flightDuration` maps from raw `flight_duration` and `fadeColors` from raw `fade_colors`.

