# Arena Brawl

Parser for the Hypixel Arena Brawl game mode. It mirrors the raw `stats.Arena` block field-for-field into readonly, fully-typed objects, performing zero computation or derivation.

## parseArenaBrawl

Parses a player's Arena Brawl stats (`stats.Arena`) into a typed object.

```ts
export function parseArenaBrawl(
  stats: Record<string, unknown>,
): ArenaBrawlStats | null;
```

Returns `null` when `stats.Arena` is absent, is not an object, is `null`, or is an array.

### ArenaBrawlStats

```ts
export interface ArenaBrawlStats {
  readonly coins: number;
  readonly coinsSpent: number;
  readonly wins: number;
  readonly keys: number;
  readonly chests: number;
  readonly rating: number;
  readonly penalty: number;
  readonly hat: string;
  readonly selectedSword: string;
  readonly activeRune: string;
  readonly activeKillEffect: string;
  readonly activeMeleeTrail: string;
  readonly prefixColor: string;
  readonly shortenedPrefix: boolean;
  readonly showWinPrefix: boolean;
  readonly pregameArmor: boolean;
  readonly packages: readonly string[];
  readonly runes: Readonly<Record<string, number>>;
  readonly datedRatings: Readonly<Record<string, ArenaBrawlDatedRating>>;
  readonly upgrades: ArenaBrawlUpgradeLevels;
  readonly abilities: ArenaBrawlAbilities;
  readonly modes: Readonly<Record<ArenaBrawlModeId, ArenaBrawlModeStats>>;
}
```

| Field              | Type                                                      | Raw source / notes                                                                        |
| ------------------ | --------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| `coins`            | `number`                                                  | Reads `coins`, falling back to `tokens` when `coins` is zero/absent.                      |
| `coinsSpent`       | `number`                                                  | `coins_spent`                                                                             |
| `wins`             | `number`                                                  | `wins`                                                                                    |
| `keys`             | `number`                                                  | `keys`                                                                                    |
| `chests`           | `number`                                                  | `magical_chest`                                                                           |
| `rating`           | `number`                                                  | `rating`                                                                                  |
| `penalty`          | `number`                                                  | `penalty`                                                                                 |
| `hat`              | `string`                                                  | `hat`                                                                                     |
| `selectedSword`    | `string`                                                  | `selected_sword`                                                                          |
| `activeRune`       | `string`                                                  | `active_rune`                                                                             |
| `activeKillEffect` | `string`                                                  | `active_kill_effect`                                                                      |
| `activeMeleeTrail` | `string`                                                  | `active_melee_trail`                                                                      |
| `prefixColor`      | `string`                                                  | `prefix_color`                                                                            |
| `shortenedPrefix`  | `boolean`                                                 | `shortened_prefix`                                                                        |
| `showWinPrefix`    | `boolean`                                                 | `show_win_prefix`                                                                         |
| `pregameArmor`     | `boolean`                                                 | `pregame_armor`                                                                           |
| `packages`         | `readonly string[]`                                       | `packages` array, filtered to string entries; empty array when absent or not an array.    |
| `runes`            | `Readonly<Record<string, number>>`                        | All numeric keys prefixed with `rune_`, with the prefix stripped from the key.            |
| `datedRatings`     | `Readonly<Record<string, ArenaBrawlDatedRating>>`         | Keyed by date string, built from `Arena_arena_rating_<date>_rating` and `_position` keys. |
| `upgrades`         | `ArenaBrawlUpgradeLevels`                                 | See below.                                                                                |
| `abilities`        | `ArenaBrawlAbilities`                                     | See below.                                                                                |
| `modes`            | `Readonly<Record<ArenaBrawlModeId, ArenaBrawlModeStats>>` | Per-mode stats keyed by mode id.                                                          |

### ArenaBrawlModeId

The mode keys present in `modes` are a fixed set:

```ts
type ArenaBrawlModeId = "ffa" | "1v1" | "2v2" | "4v4";
```

This type is internal (not exported); `modes` always contains an entry for each of the four ids.

### ArenaBrawlModeStats

Per-mode stats, where each field reads the raw key suffixed with the mode id (for example `damage_1v1`, `win_streaks_2v2`).

```ts
export interface ArenaBrawlModeStats {
  readonly damage: number;
  readonly kills: number;
  readonly deaths: number;
  readonly healed: number;
  readonly wins: number;
  readonly losses: number;
  readonly games: number;
  readonly winStreak: number;
}
```

| Field       | Raw source           |
| ----------- | -------------------- |
| `damage`    | `damage_<mode>`      |
| `kills`     | `kills_<mode>`       |
| `deaths`    | `deaths_<mode>`      |
| `healed`    | `healed_<mode>`      |
| `wins`      | `wins_<mode>`        |
| `losses`    | `losses_<mode>`      |
| `games`     | `games_<mode>`       |
| `winStreak` | `win_streaks_<mode>` |

### ArenaBrawlUpgradeLevels

Upgrade levels, read from `lvl_*` keys.

```ts
export interface ArenaBrawlUpgradeLevels {
  readonly cooldown: number;
  readonly damage: number;
  readonly energy: number;
  readonly health: number;
}
```

| Field      | Raw source     |
| ---------- | -------------- |
| `cooldown` | `lvl_cooldown` |
| `damage`   | `lvl_damage`   |
| `energy`   | `lvl_energy`   |
| `health`   | `lvl_health`   |

### ArenaBrawlAbilities

Selected ability slots, read directly from their named keys.

```ts
export interface ArenaBrawlAbilities {
  readonly offensive: string;
  readonly support: string;
  readonly utility: string;
  readonly ultimate: string;
}
```

| Field       | Raw source  |
| ----------- | ----------- |
| `offensive` | `offensive` |
| `support`   | `support`   |
| `utility`   | `utility`   |
| `ultimate`  | `ultimate`  |

### ArenaBrawlDatedRating

A single dated rating snapshot, keyed by date within `datedRatings`.

```ts
export interface ArenaBrawlDatedRating {
  readonly rating: number;
  readonly position: number;
}
```

| Field      | Raw source                           |
| ---------- | ------------------------------------ |
| `rating`   | `Arena_arena_rating_<date>_rating`   |
| `position` | `Arena_arena_rating_<date>_position` |

Each entry defaults missing `rating` or `position` to `0`. The `datedRatings` map is empty when no matching keys are present.

