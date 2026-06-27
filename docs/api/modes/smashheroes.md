# Smash Heroes

Parser for the Hypixel Smash Heroes (`SuperSmash`) game mode. It maps the raw `stats.SuperSmash` JSON object field-for-field into readonly, fully-typed objects with no derived or computed values.

## parseSmashHeroes

Parses a player's Smash Heroes stats (`stats.SuperSmash`) into a typed object.

```ts
export function parseSmashHeroes(
  stats: Record<string, unknown>,
): SmashHeroesStats | null;
```

Returns `null` when `stats` is not a non-null object. Otherwise it always returns a fully-populated `SmashHeroesStats`; absent numeric fields default to `0`, absent strings to `""`, absent booleans to `false`, absent dates to `null`, and absent collections to empty arrays/records.

### SmashHeroesStats

The top-level returned object.

```ts
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
```

| Field                         | Raw key                          | Notes                                                  |
| ----------------------------- | -------------------------------- | ------------------------------------------------------ |
| `coins`                       | `coins`                          | Smash Heroes coin balance.                             |
| `smashLevel`                  | `smashLevel`                     | Current smash level.                                   |
| `smashLevelTotal`             | `smash_level_total`              | Total smash level.                                     |
| `winStreak`                   | `win_streak`                     | Current win streak.                                    |
| `activeClass`                 | `active_class`                   | Currently selected class/hero.                         |
| `quits`                       | `quits`                          | Number of games quit.                                  |
| `smashPlayStreak`             | `smash_play_streak`              | Current play streak.                                   |
| `expiredBooster`              | `expired_booster`                | True only when the raw value is exactly `true`.        |
| `expBoosterPurchases10Plays`  | `expBooster_purchases_10_plays`  | XP booster purchases (10 plays).                       |
| `expBoosterPurchases30Plays`  | `expBooster_purchases_30_plays`  | XP booster purchases (30 plays).                       |
| `expBoosterPurchases50Plays`  | `expBooster_purchases_50_plays`  | XP booster purchases (50 plays).                       |
| `expBoosterPurchases100Plays` | `expBooster_purchases_100_plays` | XP booster purchases (100 plays).                      |
| `friendsFirstGame`            | `FRIENDS_firstGame`              | Parsed `Date` or `null`.                               |
| `friendsGamesDay`             | `FRIENDS_gamesDay`               | Friends games played today.                            |
| `oneVJuanFirstGame`           | `ONE_V_JUAN_firstGame`           | Parsed `Date` or `null`.                               |
| `oneVJuanGamesDay`            | `ONE_V_JUAN_gamesDay`            | 1v1 (Juan) games played today.                         |
| `assists`                     | `assists`                        | Overall assists.                                       |
| `assistsNormal`               | `assists_normal`                 | Normal-mode assists.                                   |
| `smashed`                     | `smashed`                        | Times this player smashed others.                      |
| `smasher`                     | `smasher`                        | Times this player was smashed.                         |
| `damageDealt`                 | `damage_dealt`                   | Total damage dealt.                                    |
| `packages`                    | `packages`                       | Owned cosmetic/package ids (string entries only).      |
| `classes`                     | `classes`                        | Map of class name to ownership boolean.                |
| `votes`                       | `votes_*`                        | Map of map name (suffix after `votes_`) to vote count. |
| `normal`                      | `*` (no suffix)                  | Per-mode stats; see `SmashHeroesModeStats`.            |
| `twoVsTwo`                    | `*_2v2`                          | Per-mode stats.                                        |
| `threeVsThree`                | `*_3v3`                          | Per-mode stats.                                        |
| `teams`                       | `*_teams`                        | Per-mode stats.                                        |
| `monthly`                     | `*_monthly_a` / `*_monthly_b`    | Period pair; see `SmashHeroesPeriodPair`.              |
| `weekly`                      | `*_weekly_a` / `*_weekly_b`      | Period pair.                                           |
| `heroes`                      | `class_stats` + per-hero keys    | Map of hero name to `SmashHeroesHeroStats`.            |

Hero names in `heroes` are collected from the keys of `class_stats` plus any top-level key matching `^(?:lastLevel|xp|pg|masterArmor)_(.+)$`, deduplicated and sorted by `localeCompare`.

### SmashHeroesModeStats

Per-mode statistics for the base, `2v2`, `3v3`, and `teams` modes. Used by `normal`, `twoVsTwo`, `threeVsThree`, and `teams`.

```ts
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
```

### SmashHeroesPeriodPair

A pair of period buckets (`a` and `b`) used by `monthly` and `weekly`.

```ts
export interface SmashHeroesPeriodPair {
  readonly a: SmashHeroesPeriodStats;
  readonly b: SmashHeroesPeriodStats;
}
```

### SmashHeroesPeriodStats

Reduced statistics for a monthly/weekly bucket.

```ts
export interface SmashHeroesPeriodStats {
  readonly games: number;
  readonly wins: number;
  readonly losses: number;
  readonly kills: number;
}
```

### SmashHeroesLeaderboardSettings

Player leaderboard configuration, mapped from `leaderboardSettings`.

```ts
export interface SmashHeroesLeaderboardSettings {
  readonly resetType: string;
  readonly mode: string;
}
```

### SmashHeroesHeroLevelBooster

The active hero-level booster, mapped from `hero_level_booster_active`.

```ts
export interface SmashHeroesHeroLevelBooster {
  readonly key: string;
  readonly multiplier: number;
  readonly value: number;
  readonly plays: number;
}
```

### SmashHeroesHeroStats

Per-hero statistics. Keyed by hero name in `SmashHeroesStats.heroes`.

```ts
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
```

| Field          | Raw source                       | Notes                                                                               |
| -------------- | -------------------------------- | ----------------------------------------------------------------------------------- |
| `hero`         | (key name)                       | The hero's identifier.                                                              |
| `lastLevel`    | `lastLevel_<hero>`               | Last recorded hero level.                                                           |
| `experience`   | `xp_<hero>`                      | Hero experience.                                                                    |
| `prestige`     | `pg_<hero>`                      | Hero prestige.                                                                      |
| `overall`      | `class_stats.<hero>` (no suffix) | Per-mode hero stats.                                                                |
| `normal`       | `class_stats.<hero>` (`normal`)  | Per-mode hero stats.                                                                |
| `twoVsTwo`     | `class_stats.<hero>` (`2v2`)     | Per-mode hero stats.                                                                |
| `threeVsThree` | `class_stats.<hero>` (`3v3`)     | Per-mode hero stats.                                                                |
| `teams`        | `class_stats.<hero>` (`teams`)   | Per-mode hero stats.                                                                |
| `masterArmor`  | `masterArmor_<hero>`             | Whether master armor is owned.                                                      |
| `abilities`    | `class_stats.<hero>.*`           | Each nested non-array object becomes a `SmashHeroesAbilityStats` keyed by its name. |

### SmashHeroesHeroModeStats

Per-mode statistics within a single hero. Used by the hero's `overall`, `normal`, `twoVsTwo`, `threeVsThree`, and `teams`.

```ts
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
```

### SmashHeroesAbilityStats

Per-ability statistics broken down by mode. Keyed by ability name in `SmashHeroesHeroStats.abilities`.

```ts
export interface SmashHeroesAbilityStats {
  readonly overall: SmashHeroesAbilityModeStats;
  readonly normal: SmashHeroesAbilityModeStats;
  readonly twoVsTwo: SmashHeroesAbilityModeStats;
  readonly threeVsThree: SmashHeroesAbilityModeStats;
  readonly teams: SmashHeroesAbilityModeStats;
}
```

### SmashHeroesAbilityModeStats

Per-mode statistics for a single ability.

```ts
export interface SmashHeroesAbilityModeStats {
  readonly kills: number;
  readonly smashed: number;
  readonly smasher: number;
  readonly damageDealt: number;
}
```

