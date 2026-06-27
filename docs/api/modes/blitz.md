# Blitz Survival Games

The Blitz Survival Games parser turns the raw `stats.HungerGames` block from the Hypixel Player API into a readonly, fully-typed `BlitzStats` object. It is strict-raw: every field mirrors the underlying API value field-for-field with zero derived or aggregated values.

## parseBlitz

Parses a player's Blitz Survival Games stats (`stats.HungerGames`) into a typed object.

```ts
export function parseBlitz(stats: Record<string, unknown>): BlitzStats | null;
```

Returns `null` when `stats.HungerGames` is absent, is not an object, or is an array. Otherwise it returns a `BlitzStats` object. Note that the `kits` map is always populated with an entry for every known kit id, and each kit's combat counters default to `0` when the underlying raw key is missing.

### BlitzStats

The top-level Blitz block. Extends [`BlitzCombatStats`](#blitzcombatstats).

```ts
export interface BlitzStats extends BlitzCombatStats {
  readonly coins: number;
  readonly blitzUses: number;
  readonly aura: string;
  readonly auraToggle: boolean;
  readonly blood: boolean;
  readonly chosenTaunt: string;
  readonly chosenVictoryDance: string;
  readonly chosenFinisher: string;
  readonly afterKillEffect: string;
  readonly afterKillEffectTourney: string;
  readonly packages: readonly string[];
  readonly killsSoloNormal: number;
  readonly killsTeamsNormal: number;
  readonly killsSoloChaos: number;
  readonly winsSoloNormal: number;
  readonly winsTeamsNormal: number;
  readonly winsSoloChaos: number;
  readonly ramboWin: number;
  readonly ramboWins: number;
  readonly randomWins: number;
  readonly tauntKills: number;
  readonly monthlyKillsA: number;
  readonly monthlyKillsB: number;
  readonly weeklyKillsA: number;
  readonly weeklyKillsB: number;
  readonly lastTourneyAd: number;
  readonly autoArmor: boolean;
  readonly defaultKit: string;
  readonly alternativeKillMessageEnabled: boolean;
  readonly prefersFullKitsMenu: boolean;
  readonly disablePrestigeFinisher: boolean;
  readonly toggled: boolean;
  readonly toggleKillCounter: number;
  readonly votes: Readonly<Record<string, number>>;
  readonly presentsCaps: Readonly<Record<string, number>>;
  readonly kitPermutations: Readonly<Record<string, string>>;
  readonly kitItemRenames: Readonly<Record<string, string>>;
  readonly leaderboardSettings: BlitzLeaderboardSettings;
  readonly privateGames: BlitzPrivateGamesSettings;
  readonly kits: Readonly<Record<string, BlitzKitStats>>;
  readonly tourneyInstances: Readonly<Record<string, BlitzTourneyStats>>;
}
```

| Field                           | Type                                                      | Notes                                                                |
| ------------------------------- | --------------------------------------------------------- | -------------------------------------------------------------------- |
| `coins`                         | `number`                                                  | Blitz coin balance (`coins`).                                        |
| `blitzUses`                     | `number`                                                  | Number of Blitz star uses (`blitz_uses`).                            |
| `aura`                          | `string`                                                  | Selected aura (`aura`).                                              |
| `auraToggle`                    | `boolean`                                                 | Aura toggle flag (`auratoggle`).                                     |
| `blood`                         | `boolean`                                                 | Blood effect flag (`blood`).                                         |
| `chosenTaunt`                   | `string`                                                  | Selected taunt (`chosen_taunt`).                                     |
| `chosenVictoryDance`            | `string`                                                  | Selected victory dance (`chosen_victorydance`).                      |
| `chosenFinisher`                | `string`                                                  | Selected finisher (`chosen_finisher`).                               |
| `afterKillEffect`               | `string`                                                  | After-kill effect (`afterkill`).                                     |
| `afterKillEffectTourney`        | `string`                                                  | After-kill effect for tourneys (`afterkill_tourney`).                |
| `packages`                      | `readonly string[]`                                       | Owned packages (`packages`); empty array when absent.                |
| `killsSoloNormal`               | `number`                                                  | Solo normal kills (`kills_solo_normal`).                             |
| `killsTeamsNormal`              | `number`                                                  | Teams normal kills (`kills_teams_normal`).                           |
| `killsSoloChaos`                | `number`                                                  | Solo chaos kills (`kills_solo_chaos`).                               |
| `winsSoloNormal`                | `number`                                                  | Solo normal wins (`wins_solo_normal`).                               |
| `winsTeamsNormal`               | `number`                                                  | Teams normal wins (`wins_teams_normal`).                             |
| `winsSoloChaos`                 | `number`                                                  | Solo chaos wins (`wins_solo_chaos`).                                 |
| `ramboWin`                      | `number`                                                  | Rambo win count (`rambo_win`).                                       |
| `ramboWins`                     | `number`                                                  | Rambo wins count (`rambo_wins`).                                     |
| `randomWins`                    | `number`                                                  | Wins with the random kit (`random_wins`).                            |
| `tauntKills`                    | `number`                                                  | Taunt kills (`taunt_kills`).                                         |
| `monthlyKillsA`                 | `number`                                                  | Monthly kills bucket A (`monthly_kills_a`).                          |
| `monthlyKillsB`                 | `number`                                                  | Monthly kills bucket B (`monthly_kills_b`).                          |
| `weeklyKillsA`                  | `number`                                                  | Weekly kills bucket A (`weekly_kills_a`).                            |
| `weeklyKillsB`                  | `number`                                                  | Weekly kills bucket B (`weekly_kills_b`).                            |
| `lastTourneyAd`                 | `number`                                                  | Last tourney ad timestamp (`lastTourneyAd`).                         |
| `autoArmor`                     | `boolean`                                                 | Auto-armor preference (`autoarmor`).                                 |
| `defaultKit`                    | `string`                                                  | Default kit id (`defaultkit`).                                       |
| `alternativeKillMessageEnabled` | `boolean`                                                 | Alternative kill message flag (`alternative_kill_message_enabled`).  |
| `prefersFullKitsMenu`           | `boolean`                                                 | Full kits menu preference (`prefers_full_kits_menu`).                |
| `disablePrestigeFinisher`       | `boolean`                                                 | Disable prestige finisher flag (`disableprestigefinisher`).          |
| `toggled`                       | `boolean`                                                 | Generic toggle flag (`toggled`).                                     |
| `toggleKillCounter`             | `number`                                                  | Kill counter toggle value (`togglekillcounter`).                     |
| `votes`                         | `Readonly<Record<string, number>>`                        | Collected from keys matching `votes_<name>`.                         |
| `presentsCaps`                  | `Readonly<Record<string, number>>`                        | Collected from keys matching `inGamePresentsCap_<name>`.             |
| `kitPermutations`               | `Readonly<Record<string, string>>`                        | Collected from keys matching `kit_permutations_<name>`.              |
| `kitItemRenames`                | `Readonly<Record<string, string>>`                        | Collected from keys matching `kit_item_rename_<name>`.               |
| `leaderboardSettings`           | [`BlitzLeaderboardSettings`](#blitzleaderboardsettings)   | Leaderboard configuration.                                           |
| `privateGames`                  | [`BlitzPrivateGamesSettings`](#blitzprivategamessettings) | Private game configuration.                                          |
| `kits`                          | `Readonly<Record<string, BlitzKitStats>>`                 | Per-kit stats keyed by kit id; always populated for every known kit. |
| `tourneyInstances`              | `Readonly<Record<string, BlitzTourneyStats>>`             | Per-tourney-instance stats keyed by instance id.                     |

### BlitzCombatStats

The shared base combat counters reused by every Blitz stat block.

```ts
export interface BlitzCombatStats {
  readonly wins: number;
  readonly winsTeams: number;
  readonly gamesPlayed: number;
  readonly arrowsHit: number;
  readonly arrowsFired: number;
  readonly chestsOpened: number;
  readonly damage: number;
  readonly damageTaken: number;
  readonly kills: number;
  readonly deaths: number;
  readonly mobsSpawned: number;
  readonly potionsDrunk: number;
  readonly potionsThrown: number;
  readonly timePlayed: number;
}
```

| Field           | Raw key suffix   |
| --------------- | ---------------- |
| `wins`          | `wins`           |
| `winsTeams`     | `wins_teams`     |
| `gamesPlayed`   | `games_played`   |
| `arrowsHit`     | `arrows_hit`     |
| `arrowsFired`   | `arrows_fired`   |
| `chestsOpened`  | `chests_opened`  |
| `damage`        | `damage`         |
| `damageTaken`   | `damage_taken`   |
| `kills`         | `kills`          |
| `deaths`        | `deaths`         |
| `mobsSpawned`   | `mobs_spawned`   |
| `potionsDrunk`  | `potions_drunk`  |
| `potionsThrown` | `potions_thrown` |
| `timePlayed`    | `time_played`    |

### BlitzKitCombatStats

Per-kit combat counters. Extends [`BlitzCombatStats`](#blitzcombatstats) with kit-specific raw keys suffixed by `_<kitId>`.

```ts
export interface BlitzKitCombatStats extends BlitzCombatStats {
  readonly exp: number;
  readonly tauntKills: number;
  readonly explosiveKills: number;
  readonly fallDamage: number;
  readonly itemsEnchanted: number;
  readonly bottlesThrown: number;
  readonly eggsCollected: number;
  readonly eggsThrown: number;
  readonly snowballsThrown: number;
  readonly railsPlaced: number;
  readonly tntPlaced: number;
  readonly blocksTraveledBoat: number;
  readonly blocksTraveledHorse: number;
  readonly blocksTraveledMinecart: number;
  readonly blocksTraveledPig: number;
}
```

| Field                    | Raw key suffix             |
| ------------------------ | -------------------------- |
| `exp`                    | `exp`                      |
| `tauntKills`             | `taunt_kills`              |
| `explosiveKills`         | `explosive_kills`          |
| `fallDamage`             | `fall_damage`              |
| `itemsEnchanted`         | `items_enchanted`          |
| `bottlesThrown`          | `bottles_thrown`           |
| `eggsCollected`          | `eggs_collected`           |
| `eggsThrown`             | `eggs_thrown`              |
| `snowballsThrown`        | `snowballs_thrown`         |
| `railsPlaced`            | `rails_placed`             |
| `tntPlaced`              | `tnt_placed`               |
| `blocksTraveledBoat`     | `blocks_traveled_boat`     |
| `blocksTraveledHorse`    | `blocks_traveled_horse`    |
| `blocksTraveledMinecart` | `blocks_traveled_minecart` |
| `blocksTraveledPig`      | `blocks_traveled_pig`      |

### BlitzKitStats

A single kit's full stats. Extends [`BlitzKitCombatStats`](#blitzkitcombatstats).

```ts
export interface BlitzKitStats extends BlitzKitCombatStats {
  readonly level: number;
  readonly prestige: number;
  readonly inventory: Readonly<Record<string, string>>;
}
```

| Field       | Notes                                                                                                |
| ----------- | ---------------------------------------------------------------------------------------------------- |
| `level`     | Kit level, read from the raw key equal to the kit id.                                                |
| `prestige`  | Kit prestige, read from the raw key `p<kitId>`.                                                      |
| `inventory` | String-to-string map of the kit's inventory layout; empty object when the inventory block is absent. |

### BlitzTourneyStats

Stats for a single tournament instance. Extends [`BlitzCombatStats`](#blitzcombatstats). Keyed in `BlitzStats.tourneyInstances` by the instance id parsed from `tourney_<id>_games_played` raw keys.

```ts
export interface BlitzTourneyStats extends BlitzCombatStats {
  readonly coins: number;
  readonly blitzUses: number;
  readonly tauntKills: number;
  readonly randomWins: number;
  readonly killsTeamsNormal: number;
  readonly winsTeamsNormal: number;
  readonly kits: Readonly<Record<string, BlitzKitCombatStats>>;
}
```

| Field              | Raw key suffix (under `tourney_<id>_`)                                                |
| ------------------ | ------------------------------------------------------------------------------------- |
| `coins`            | `coins`                                                                               |
| `blitzUses`        | `blitz_uses`                                                                          |
| `tauntKills`       | `taunt_kills`                                                                         |
| `randomWins`       | `random_wins`                                                                         |
| `killsTeamsNormal` | `kills_teams_normal`                                                                  |
| `winsTeamsNormal`  | `wins_teams_normal`                                                                   |
| `kits`             | Per-kit [`BlitzKitCombatStats`](#blitzkitcombatstats), populated for every known kit. |

### BlitzPrivateGamesSettings

Private games configuration, read from the raw `privategames` object.

```ts
export interface BlitzPrivateGamesSettings {
  readonly healthBuff: string;
  readonly speed: string;
  readonly extraBlitzStars: string;
  readonly nightTime: boolean;
  readonly noKits: boolean;
  readonly maxKitsAndKillEffects: boolean;
}
```

| Field                   | Raw key                            |
| ----------------------- | ---------------------------------- |
| `healthBuff`            | `health_buff`                      |
| `speed`                 | `speed`                            |
| `extraBlitzStars`       | `extra_blitz_stars`                |
| `nightTime`             | `enable_night_time`                |
| `noKits`                | `no_kits`                          |
| `maxKitsAndKillEffects` | `enable_max_kits_and_kill_effects` |

### BlitzLeaderboardSettings

Leaderboard configuration, read from the raw `leaderboardSettings` object.

```ts
export interface BlitzLeaderboardSettings {
  readonly mode: string;
  readonly resetType: string;
}
```

| Field       | Raw key     |
| ----------- | ----------- |
| `mode`      | `mode`      |
| `resetType` | `resetType` |

