# UHC

The UHC parser turns the raw `stats.UHC` block from the Hypixel API into a readonly, fully-typed `UHCStats` object. It is strict-raw: every field mirrors the API value as-is, with no computed, derived, or aggregated values.

## parseUHC

Parses a player's UHC stats (`stats.UHC`) into a typed object.

```ts
export function parseUHC(stats: Record<string, unknown>): UHCStats | null;
```

Returns `null` when `stats.UHC` is absent, is not an object, or is an array.

### UHCStats

```ts
export interface UHCStats {
  readonly coins: number;
  readonly score: number;
  readonly equippedKit: string;
  readonly clearupAchievement: boolean;
  readonly cache3: boolean;
  readonly savedStats: boolean;
  readonly teammateDamage: boolean;
  readonly uhcParkour1: boolean;
  readonly uhcParkour2: boolean;
  readonly uhcStarDisplay: boolean;
  readonly perks: Readonly<Record<string, number>>;
  readonly kits: Readonly<Record<string, number>>;
  readonly monthly: Readonly<Record<string, number>>;
  readonly packages: readonly string[];
  readonly leaderboardSettings: UHCLeaderboardSettings;
  readonly privateGames: UHCPrivateGames;
  readonly solo: UHCModeStats;
  readonly team: UHCModeStats;
  readonly redVsBlue: UHCModeStats;
  readonly noDiamonds: UHCModeStats;
  readonly vanillaDoubles: UHCModeStats;
  readonly brawl: UHCModeStats;
  readonly soloBrawl: UHCModeStats;
  readonly duoBrawl: UHCModeStats;
}
```

| Field                 | Type                               | Raw source / notes                               |
| --------------------- | ---------------------------------- | ------------------------------------------------ |
| `coins`               | `number`                           | `coins`                                          |
| `score`               | `number`                           | `score`                                          |
| `equippedKit`         | `string`                           | `equippedKit`, falls back to `"None"` when empty |
| `clearupAchievement`  | `boolean`                          | `clearup_achievement`                            |
| `cache3`              | `boolean`                          | `cache3`                                         |
| `savedStats`          | `boolean`                          | `saved_stats`                                    |
| `teammateDamage`      | `boolean`                          | `teammate_damage`                                |
| `uhcParkour1`         | `boolean`                          | `uhc_parkour_1`                                  |
| `uhcParkour2`         | `boolean`                          | `uhc_parkour_2`                                  |
| `uhcStarDisplay`      | `boolean`                          | `uhc_star_display`                               |
| `perks`               | `Readonly<Record<string, number>>` | all numeric keys prefixed with `perk_`           |
| `kits`                | `Readonly<Record<string, number>>` | all numeric keys prefixed with `kit_`            |
| `monthly`             | `Readonly<Record<string, number>>` | all numeric keys prefixed with `monthly_`        |
| `packages`            | `readonly string[]`                | `packages`, filtered to string entries           |
| `leaderboardSettings` | `UHCLeaderboardSettings`           | `leaderboardSettings`                            |
| `privateGames`        | `UHCPrivateGames`                  | `privategames`                                   |
| `solo`                | `UHCModeStats`                     | suffix `_solo`                                   |
| `team`                | `UHCModeStats`                     | no suffix                                        |
| `redVsBlue`           | `UHCModeStats`                     | suffix `_red_vs_blue`                            |
| `noDiamonds`          | `UHCModeStats`                     | suffix `_no_diamonds`                            |
| `vanillaDoubles`      | `UHCModeStats`                     | suffix `_vanilla_doubles`                        |
| `brawl`               | `UHCModeStats`                     | suffix `_brawl`                                  |
| `soloBrawl`           | `UHCModeStats`                     | suffix `_solo_brawl`                             |
| `duoBrawl`            | `UHCModeStats`                     | suffix `_duo_brawl`                              |

The `perks`, `kits`, and `monthly` maps are collected by scanning the raw block for keys that start with the respective prefix and whose value is a number. They are empty objects when no matching keys exist. `packages` is an empty array when the raw value is missing or not an array.

### UHCModeStats

Per-mode statistics. Each mode reads the listed base keys with a mode-specific suffix appended (the `team` mode uses no suffix).

```ts
export interface UHCModeStats {
  readonly wins: number;
  readonly kills: number;
  readonly deaths: number;
  readonly headsEaten: number;
  readonly ultimatesCrafted: number;
  readonly extraUltimatesCrafted: number;
  readonly kills2: number;
  readonly wins2: number;
}
```

| Field                   | Type     | Raw source / notes                |
| ----------------------- | -------- | --------------------------------- |
| `wins`                  | `number` | `wins{suffix}`                    |
| `kills`                 | `number` | `kills{suffix}`                   |
| `deaths`                | `number` | `deaths{suffix}`                  |
| `headsEaten`            | `number` | `heads_eaten{suffix}`             |
| `ultimatesCrafted`      | `number` | `ultimates_crafted{suffix}`       |
| `extraUltimatesCrafted` | `number` | `extra_ultimates_crafted{suffix}` |
| `kills2`                | `number` | `kills{suffix}2`                  |
| `wins2`                 | `number` | `wins{suffix}2`                   |

### UHCLeaderboardSettings

Maps the raw `leaderboardSettings` object.

```ts
export interface UHCLeaderboardSettings {
  readonly resetType: string;
  readonly suhcMode: string;
  readonly uhcMode: string;
}
```

| Field       | Type     | Raw source  |
| ----------- | -------- | ----------- |
| `resetType` | `string` | `resetType` |
| `suhcMode`  | `string` | `suhcMode`  |
| `uhcMode`   | `string` | `uhcMode`   |

### UHCPrivateGames

Maps the raw `privategames` object.

```ts
export interface UHCPrivateGames {
  readonly allRecipes: boolean;
  readonly disableRecipes: boolean;
  readonly infiniteCrafts: boolean;
  readonly borderShrink: string;
  readonly gameLength: string;
  readonly gracePeriod: string;
  readonly health: string;
  readonly mode: string;
  readonly teamSize: string;
}
```

| Field            | Type      | Raw source        |
| ---------------- | --------- | ----------------- |
| `allRecipes`     | `boolean` | `all_recipes`     |
| `disableRecipes` | `boolean` | `disable_recipes` |
| `infiniteCrafts` | `boolean` | `infinite_crafts` |
| `borderShrink`   | `string`  | `border_shrink`   |
| `gameLength`     | `string`  | `game_length`     |
| `gracePeriod`    | `string`  | `grace_period`    |
| `health`         | `string`  | `health`          |
| `mode`           | `string`  | `mode`            |
| `teamSize`       | `string`  | `team_size`       |

