# Quakecraft

Parser for a player's Quakecraft statistics from the Hypixel API. It mirrors the raw `stats.Quake` block field-for-field with no computed or derived values.

## parseQuakecraft

Parses a player's Quakecraft stats (`stats.Quake`) into a typed object.

```ts
export function parseQuakecraft(
  stats: Record<string, unknown>,
): QuakecraftStats | null;
```

Returns `null` when `stats.Quake` is absent, is not an object, is `null`, or is an array. Otherwise returns a fully populated `QuakecraftStats` object. Missing scalar fields fall back to their type defaults (numbers default to `0`, strings to `""`, booleans to `false`); `lastTourneyAd` is `null` when absent, and `packages` is an empty array when absent or not an array.

### QuakecraftStats

```ts
export interface QuakecraftStats {
  readonly coins: number;
  readonly highestKillstreak: number;
  readonly killsDeathmatch: number;
  readonly killsDeathmatchTeams: number;
  readonly killsTimeAttack: number;
  readonly killsTourneyUnknown: number;
  readonly monthlyKillsA: number;
  readonly monthlyKillsB: number;
  readonly weeklyKillsA: number;
  readonly weeklyKillsB: number;
  readonly lastTourneyAd: Date | null;
  readonly packages: readonly string[];
  readonly solo: QuakecraftModeStats;
  readonly teams: QuakecraftModeStats;
  readonly soloTourney: QuakecraftModeStats;
  readonly tourneyQuakeSolo2: QuakecraftModeStats;
  readonly mapVotes: QuakecraftMapVotes;
  readonly cosmetics: QuakecraftCosmetics;
  readonly settings: QuakecraftSettings;
}
```

| Field                  | Raw key                         | Notes                                  |
| ---------------------- | ------------------------------- | -------------------------------------- |
| `coins`                | `coins`                         | Quakecraft coin balance                |
| `highestKillstreak`    | `highest_killstreak`            | Highest killstreak reached             |
| `killsDeathmatch`      | `kills_dm`                      | Deathmatch kills                       |
| `killsDeathmatchTeams` | `kills_dm_teams`                | Teams deathmatch kills                 |
| `killsTimeAttack`      | `kills_timeattack`              | Time attack kills                      |
| `killsTourneyUnknown`  | `kills_tourney_unknown`         | Tourney kills (unknown variant)        |
| `monthlyKillsA`        | `monthly_kills_a`               | Monthly kills bucket A                 |
| `monthlyKillsB`        | `monthly_kills_b`               | Monthly kills bucket B                 |
| `weeklyKillsA`         | `weekly_kills_a`                | Weekly kills bucket A                  |
| `weeklyKillsB`         | `weekly_kills_b`                | Weekly kills bucket B                  |
| `lastTourneyAd`        | `lastTourneyAd`                 | Parsed as a `Date`, `null` when absent |
| `packages`             | `packages`                      | List of owned package identifiers      |
| `solo`                 | (no suffix)                     | Solo mode stats                        |
| `teams`                | `_teams` suffix                 | Teams mode stats                       |
| `soloTourney`          | `_solo_tourney` suffix          | Solo tourney mode stats                |
| `tourneyQuakeSolo2`    | `_tourney_quake_solo2_1` suffix | Tourney Quake Solo2 mode stats         |
| `mapVotes`             | `votes_*`                       | Per-map vote counts                    |
| `cosmetics`            | various                         | Selected cosmetics                     |
| `settings`             | various                         | Player gameplay/UI settings            |

### QuakecraftModeStats

Per-mode statistics. Each field maps to a raw key built from the base name plus a mode-specific suffix (`solo` uses no suffix, `teams` uses `_teams`, `soloTourney` uses `_solo_tourney`, `tourneyQuakeSolo2` uses `_tourney_quake_solo2_1`).

```ts
export interface QuakecraftModeStats {
  readonly wins: number;
  readonly kills: number;
  readonly deaths: number;
  readonly killstreaks: number;
  readonly distanceTravelled: number;
  readonly shotsFired: number;
  readonly headshots: number;
  readonly killsSinceUpdateFeb2017: number;
}
```

| Field                     | Raw key base                          |
| ------------------------- | ------------------------------------- |
| `wins`                    | `wins{suffix}`                        |
| `kills`                   | `kills{suffix}`                       |
| `deaths`                  | `deaths{suffix}`                      |
| `killstreaks`             | `killstreaks{suffix}`                 |
| `distanceTravelled`       | `distance_travelled{suffix}`          |
| `shotsFired`              | `shots_fired{suffix}`                 |
| `headshots`               | `headshots{suffix}`                   |
| `killsSinceUpdateFeb2017` | `kills_since_update_feb_2017{suffix}` |

### QuakecraftMapVotes

Per-map vote counts.

```ts
export interface QuakecraftMapVotes {
  readonly ascended: number;
  readonly belmorn: number;
  readonly coldWar: number;
  readonly faarah: number;
  readonly reactor: number;
  readonly town: number;
}
```

| Field      | Raw key          |
| ---------- | ---------------- |
| `ascended` | `votes_Ascended` |
| `belmorn`  | `votes_Belmorn`  |
| `coldWar`  | `votes_Cold_War` |
| `faarah`   | `votes_Faarah`   |
| `reactor`  | `votes_Reactor`  |
| `town`     | `votes_Town`     |

### QuakecraftCosmetics

Selected cosmetic items.

```ts
export interface QuakecraftCosmetics {
  readonly killSound: string;
  readonly barrel: string;
  readonly case: string;
  readonly muzzle: string;
  readonly sight: string;
  readonly trigger: string;
  readonly beam: string;
  readonly armor: string;
  readonly hat: string;
  readonly boots: string;
  readonly leggings: string;
  readonly compass: string;
  readonly killPrefixColor: string;
}
```

| Field             | Raw key              |
| ----------------- | -------------------- |
| `killSound`       | `killsound`          |
| `barrel`          | `barrel`             |
| `case`            | `case`               |
| `muzzle`          | `muzzle`             |
| `sight`           | `sight`              |
| `trigger`         | `trigger`            |
| `beam`            | `beam`               |
| `armor`           | `armor`              |
| `hat`             | `hat`                |
| `boots`           | `boots`              |
| `leggings`        | `leggings`           |
| `compass`         | `null`               |
| `killPrefixColor` | `selectedKillPrefix` |

### QuakecraftSettings

Player gameplay and UI settings.

```ts
export interface QuakecraftSettings {
  readonly instantRespawn: boolean;
  readonly showPrefix: boolean;
  readonly showDashCooldown: boolean;
  readonly enableSound: boolean;
  readonly compassSelected: boolean;
  readonly alternativeGunCooldownIndicator: boolean;
  readonly dashCooldown: string;
  readonly dashPower: string;
  readonly messageCoin: boolean;
  readonly messageCoinMessages: boolean;
  readonly messageKillstreaks: boolean;
  readonly messageMultiKills: boolean;
  readonly messageOthersKillsDeaths: boolean;
  readonly messagePowerupCollections: boolean;
  readonly messageYourDeaths: boolean;
  readonly messageYourKills: boolean;
}
```

| Field                             | Raw key                              |
| --------------------------------- | ------------------------------------ |
| `instantRespawn`                  | `instantRespawn`                     |
| `showPrefix`                      | `showKillPrefix`                     |
| `showDashCooldown`                | `showDashCooldown`                   |
| `enableSound`                     | `enable_sound`                       |
| `compassSelected`                 | `compass_selected`                   |
| `alternativeGunCooldownIndicator` | `alternative_gun_cooldown_indicator` |
| `dashCooldown`                    | `dash_cooldown`                      |
| `dashPower`                       | `dash_power`                         |
| `messageCoin`                     | `messageCoin`                        |
| `messageCoinMessages`             | `messageCoin Messages`               |
| `messageKillstreaks`              | `messageKillstreaks`                 |
| `messageMultiKills`               | `messageMulti-kills`                 |
| `messageOthersKillsDeaths`        | `messageOthers' Kills/deaths`        |
| `messagePowerupCollections`       | `messagePowerup Collections`         |
| `messageYourDeaths`               | `messageYour Deaths`                 |
| `messageYourKills`                | `messageYour Kills`                  |

