# Build Battle

Parser for Hypixel Build Battle statistics. Like every parser in `@breezil/hypixel-parsers`, it is strict-raw: it mirrors the raw API field-for-field and performs zero computation (no ratios, levels, or derived values).

## parseBuildBattle

Parses a player's Build Battle stats (`stats.BuildBattle`) into a typed object.

```ts
export function parseBuildBattle(
  stats: Record<string, unknown>,
): BuildBattleStats | null;
```

### Returned type

```ts
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
  readonly selectedHat: string;
  readonly suit: string;
  readonly victoryDance: string;
  readonly selectedBackdrop: string;
  readonly selectedPrefixIcon: string;
  readonly lastPurchasedSong: string;
  readonly shopSort: string;
  readonly leaderboardSettings: BuildBattleLeaderboardSettings;
  readonly lastWin: BuildBattleLastWin;
  readonly votesByTheme: Readonly<Record<string, number>>;
  readonly votesReceived: Readonly<Record<string, number>>;
}
```

#### Field reference

| Field                 | Raw key                               | Notes                               |
| --------------------- | ------------------------------------- | ----------------------------------- |
| `coins`               | `coins`                               | Build Battle coin balance.          |
| `score`               | `score`                               | Build Battle score.                 |
| `gamesPlayed`         | `games_played`                        | Total games played.                 |
| `wins`                | `wins`                                | Total wins.                         |
| `winsSoloNormal`      | `wins_solo_normal`                    | Wins in Solo Normal.                |
| `winsSoloPro`         | `wins_solo_pro`                       | Wins in Solo Pro.                   |
| `winsTeamsNormal`     | `wins_teams_normal`                   | Wins in Teams Normal.               |
| `winsGuessTheBuild`   | `wins_guess_the_build`                | Wins in Guess The Build.            |
| `winsSpeedBuilders`   | `wins_speed_builders`                 | Wins in Speed Builders.             |
| `winsHalloween`       | `wins_halloween`                      | Wins in the Halloween mode.         |
| `correctGuesses`      | `correct_guesses`                     | Correct guesses in Guess The Build. |
| `firstGuesses`        | `first_guesses`                       | First-place guesses.                |
| `totalVotes`          | `total_votes`                         | Total votes cast.                   |
| `superVotes`          | `super_votes`                         | Super votes cast.                   |
| `soloMostPoints`      | `solo_most_points`                    | Most points in a Solo game.         |
| `teamsMostPoints`     | `teams_most_points`                   | Most points in a Teams game.        |
| `monthlyCoins`        | `monthly_coins_a` / `monthly_coins_b` | Monthly coin period buckets.        |
| `weeklyCoins`         | `weekly_coins_a` / `weekly_coins_b`   | Weekly coin period buckets.         |
| `music`               | `music`                               | Whether music is enabled.           |
| `loadout`             | `buildbattle_loadout`                 | Equipped loadout entries.           |
| `packages`            | `packages`                            | Owned packages.                     |
| `perfectInsaneBuilds` | `perfect_insane_builds`               | Perfect Insane build entries.       |
| `activeMovementTrail` | `active_movement_trail`               | Active movement trail.              |
| `selectedHat`         | `new_selected_hat`                    | Selected hat cosmetic.              |
| `suit`                | `new_suit`                            | Selected suit cosmetic.             |
| `victoryDance`        | `new_victory_dance`                   | Selected victory dance.             |
| `selectedBackdrop`    | `selected_backdrop`                   | Selected backdrop.                  |
| `selectedPrefixIcon`  | `selected_prefix_icon`                | Selected prefix icon.               |
| `lastPurchasedSong`   | `last_purchased_song`                 | Last purchased song.                |
| `shopSort`            | `shop_sort`                           | Shop sort preference.               |
| `leaderboardSettings` | `leaderboardSettings`                 | Leaderboard display settings.       |
| `lastWin`             | `last_won`                            | Last win timestamps per mode.       |
| `votesByTheme`        | `votes_*`                             | Map of theme name to vote count.    |
| `votesReceived`       | `votes_received`                      | Map of source to votes received.    |

### Nested types

```ts
export interface BuildBattlePeriodCoins {
  readonly coinsA: number;
  readonly coinsB: number;
}
```

`monthlyCoins` maps from `monthly_coins_a` / `monthly_coins_b`, and `weeklyCoins` maps from `weekly_coins_a` / `weekly_coins_b`.

```ts
export interface BuildBattleLeaderboardSettings {
  readonly mode: string;
  readonly resetType: string;
}
```

Built from the raw `leaderboardSettings` object's `mode` and `resetType` fields.

```ts
export interface BuildBattleLastWin {
  readonly guessTheBuild: Date | null;
  readonly soloNormal: Date | null;
  readonly soloPro: Date | null;
  readonly speedBuilders: Date | null;
  readonly teamsNormal: Date | null;
}
```

Built from the raw `last_won` object. Each field maps from an uppercase raw key (`GUESS_THE_BUILD`, `SOLO_NORMAL`, `SOLO_PRO`, `SPEED_BUILDERS`, `TEAMS_NORMAL`) and is a `Date` or `null` when the timestamp is absent.

### Dynamic maps

- `votesByTheme` is a `Readonly<Record<string, number>>` collected from every raw key prefixed with `votes_` whose value is a number; the `votes_` prefix is stripped from the resulting keys.
- `votesReceived` is a `Readonly<Record<string, number>>` collected from the raw `votes_received` object, keeping only numeric values.

## Null and empty behavior

- `parseBuildBattle` returns `null` when `stats.BuildBattle` is absent, not an object, `null`, or an array.
- `loadout`, `packages`, and `perfectInsaneBuilds` return an empty array when the raw value is not an array; non-string entries are filtered out.
- `votesByTheme` and `votesReceived` return an empty object when no matching keys exist.
- `BuildBattleLastWin` fields are `null` when the corresponding timestamp is missing.
- Numeric, string, and boolean fields fall back to the defaults provided by the shared `num`, `str`, and `bool` helpers when their raw keys are missing.

