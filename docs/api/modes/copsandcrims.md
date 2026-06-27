# Cops and Crims

The Cops and Crims parser turns the raw `stats.MCGO` block from the Hypixel player API into a readonly, fully-typed object. It is strict-raw: every field is copied directly from the API with no derived, computed, or aggregated values.

## parseCopsAndCrims

Parses a player's Cops and Crims stats (`stats.MCGO`) into a typed object.

```ts
export function parseCopsAndCrims(
  stats: Record<string, unknown>,
): CopsAndCrimsStats | null;
```

### Null / empty behavior

- Returns `null` when `stats.MCGO` is missing, not an object, or is an array.
- When present, every numeric field defaults to `0`, every string field to `""`, and every boolean field to `false` when its underlying key is absent.
- `packages` and `claimedLevelRewards` return empty arrays when their keys are missing or are not arrays; non-matching array elements are filtered out by type.
- The `datedSnapshots` records return empty objects (`{}`) when no matching dated keys are present.

### CopsAndCrimsStats

The top-level returned type.

```ts
export interface CopsAndCrimsStats {
  readonly coins: number;
  readonly score: number;
  readonly level: number;
  readonly kills: number;
  readonly killsNew: number;
  readonly criminalKills: number;
  readonly copKills: number;
  readonly assists: number;
  readonly headshotKills: number;
  readonly grenadeKills: number;
  readonly grenadeKillsAlt: number;
  readonly monthlyKillsA: number;
  readonly monthlyKillsB: number;
  readonly weeklyKillsA: number;
  readonly weeklyKillsB: number;
  readonly deaths: number;
  readonly wins: number;
  readonly roundWins: number;
  readonly gamePlays: number;
  readonly bombsPlanted: number;
  readonly bombsDefused: number;
  readonly shotsFired: number;
  readonly shoutTotal: number;
  readonly lastTourneyAd: number;
  readonly activeEmblem: string;
  readonly activeGlyph: string;
  readonly activeScheme: string;
  readonly selectedLobbyPrefix: string;
  readonly lobbyPrefixColor: string;
  readonly showLobbyPrefix: boolean;
  readonly showKillsInPrefix: boolean;
  readonly shopSort: string;
  readonly packages: readonly string[];
  readonly claimedLevelRewards: readonly number[];
  readonly settings: CopsAndCrimsSettings;
  readonly leaderboardSettings: CopsAndCrimsLeaderboardSettings;
  readonly privateGames: CopsAndCrimsPrivateGames;
  readonly perks: CopsAndCrimsPerks;
  readonly upgrades: CopsAndCrimsUpgrades;
  readonly selected: CopsAndCrimsSelectedCosmetics;
  readonly mcgo: CopsAndCrimsMcgo;
  readonly datedSnapshots: CopsAndCrimsDatedSnapshots;
  readonly winsByMap: CopsAndCrimsWinsByMap;
  readonly guns: CopsAndCrimsGuns;
  readonly deathmatch: CopsAndCrimsGamemodeStats;
  readonly gungame: CopsAndCrimsGungameStats;
  readonly tourneyDefusalA: CopsAndCrimsTourneyStats;
  readonly tourneyDefusalB: CopsAndCrimsTourneyStats;
}
```

| Field                                           | Notes                                                             |
| ----------------------------------------------- | ----------------------------------------------------------------- |
| `kills` / `killsNew`                            | Maps the raw `kills` and `killsNew` keys.                         |
| `grenadeKills` / `grenadeKillsAlt`              | Map the raw `grenade_kills` and `grenadeKills` keys respectively. |
| `monthlyKillsA` / `monthlyKillsB`               | Map `monthly_kills_a` / `monthly_kills_b`.                        |
| `weeklyKillsA` / `weeklyKillsB`                 | Map `weekly_kills_a` / `weekly_kills_b`.                          |
| `wins`                                          | Maps the raw `game_wins` key.                                     |
| `activeEmblem` / `activeGlyph` / `activeScheme` | Cosmetic identifiers.                                             |
| `deathmatch` / `gungame`                        | Per-gamemode stat blocks.                                         |
| `tourneyDefusalA` / `tourneyDefusalB`           | Tournament defusal blocks, suffixes `0` and `1`.                  |

## Nested types

### CopsAndCrimsSettings

```ts
export interface CopsAndCrimsSettings {
  readonly animatedSmoke: boolean;
  readonly defuseTipHologram: boolean;
  readonly hints: boolean;
  readonly moneyMessages: boolean;
  readonly screenTint: boolean;
  readonly spawnArea: boolean;
}
```

### CopsAndCrimsLeaderboardSettings

Read from the nested `leaderboardSettings` object.

```ts
export interface CopsAndCrimsLeaderboardSettings {
  readonly mode: string;
  readonly resetType: string;
}
```

### CopsAndCrimsPrivateGames

Read from the nested `privategames` object.

```ts
export interface CopsAndCrimsPrivateGames {
  readonly mcgoPrivateChallengeMode: boolean;
}
```

### CopsAndCrimsPerks

Read from the nested `perk` object.

```ts
export interface CopsAndCrimsPerks {
  readonly baseCoin: CopsAndCrimsPerkBaseCoin;
}
```

### CopsAndCrimsPerkBaseCoin

Read from the nested `perk.base_coin` object.

```ts
export interface CopsAndCrimsPerkBaseCoin {
  readonly kills: number;
  readonly assists: number;
  readonly allSources: number;
  readonly defusalRoundWins: number;
  readonly bombDefuses: number;
  readonly deathmatchChallenges: number;
  readonly bombPlants: number;
}
```

### CopsAndCrimsUpgrades

```ts
export interface CopsAndCrimsUpgrades {
  readonly bodyArmorCost: number;
  readonly bountyHunter: number;
  readonly pocketChange: number;
  readonly strengthTraining: number;
}
```

### CopsAndCrimsSelectedCosmetics

Selected cosmetic identifiers, each mapping a `selected*Dev` key.

```ts
export interface CopsAndCrimsSelectedCosmetics {
  readonly autoShotgun: string;
  readonly bullpup: string;
  readonly carbine: string;
  readonly creeperChestplate: string;
  readonly creeperHelmet: string;
  readonly handgun: string;
  readonly knife: string;
  readonly magnum: string;
  readonly ocelotChestplate: string;
  readonly ocelotHelmet: string;
  readonly pistol: string;
  readonly rifle: string;
  readonly scopedRifle: string;
  readonly shotgun: string;
  readonly smg: string;
}
```

### CopsAndCrimsMcgo

Read from the nested `mcgo` object.

```ts
export interface CopsAndCrimsMcgo {
  readonly points: number;
}
```

### CopsAndCrimsDatedSnapshots

Each record collects dated keys (matching the pattern `^<prefix>_(\d+_)?\d+_2014$`) into a `Record<string, number>` keyed by the date suffix.

```ts
export interface CopsAndCrimsDatedSnapshots {
  readonly kills: Readonly<Record<string, number>>;
  readonly killsNew: Readonly<Record<string, number>>;
  readonly gamesWins: Readonly<Record<string, number>>;
}
```

| Field       | Source prefix |
| ----------- | ------------- |
| `kills`     | `kills`       |
| `killsNew`  | `killsNew`    |
| `gamesWins` | `games_wins`  |

### CopsAndCrimsWinsByMap

Each field maps a `game_wins_<map>` key.

```ts
export interface CopsAndCrimsWinsByMap {
  readonly temple: number;
  readonly carrier: number;
  readonly atomic: number;
  readonly alleyway: number;
  readonly sandstorm: number;
  readonly reserve: number;
  readonly overgrown: number;
  readonly bazaar: number;
  readonly junction: number;
  readonly derailed: number;
  readonly castle: number;
  readonly ruins: number;
  readonly riviera: number;
  readonly harbor: number;
  readonly atomicV1: number;
  readonly atomicV2: number;
  readonly melonFactory: number;
  readonly melonFactoryV2: number;
}
```

| Field            | Source key                   |
| ---------------- | ---------------------------- |
| `atomicV1`       | `game_wins_atomic v1`        |
| `atomicV2`       | `game_wins_atomic v2`        |
| `melonFactory`   | `game_wins_melon factory`    |
| `melonFactoryV2` | `game_wins_melon factory v2` |

### CopsAndCrimsGuns

```ts
export interface CopsAndCrimsGuns {
  readonly smg: CopsAndCrimsGunStats;
  readonly rifle: CopsAndCrimsGunStats;
  readonly carbine: CopsAndCrimsGunStats;
  readonly magnum: CopsAndCrimsGunStats;
  readonly shotgun: CopsAndCrimsGunStats;
  readonly sniper: CopsAndCrimsSniperStats;
  readonly scopedRifle: CopsAndCrimsGunStats;
  readonly autoShotgun: CopsAndCrimsGunStats;
  readonly bullpup: CopsAndCrimsGunStats;
  readonly handgun: CopsAndCrimsGunStats;
  readonly pistol: CopsAndCrimsPistolStats;
  readonly knife: CopsAndCrimsKnifeStats;
}
```

### CopsAndCrimsGunStats

Standard gun stat block.

```ts
export interface CopsAndCrimsGunStats {
  readonly damageIncrease: number;
  readonly recoilReduction: number;
  readonly reloadSpeedReduction: number;
  readonly costReduction: number;
  readonly kills: number;
  readonly headshots: number;
}
```

### CopsAndCrimsPistolStats

Pistol stat block (no `costReduction`).

```ts
export interface CopsAndCrimsPistolStats {
  readonly damageIncrease: number;
  readonly recoilReduction: number;
  readonly reloadSpeedReduction: number;
  readonly kills: number;
  readonly headshots: number;
}
```

### CopsAndCrimsSniperStats

Sniper stat block (no `recoilReduction`).

```ts
export interface CopsAndCrimsSniperStats {
  readonly damageIncrease: number;
  readonly reloadSpeedReduction: number;
  readonly costReduction: number;
  readonly kills: number;
  readonly headshots: number;
}
```

### CopsAndCrimsKnifeStats

```ts
export interface CopsAndCrimsKnifeStats {
  readonly damageIncrease: number;
  readonly attackDelay: number;
  readonly kills: number;
}
```

### CopsAndCrimsGamemodeStats

Per-gamemode stat block (used for `deathmatch` and extended by `gungame`).

```ts
export interface CopsAndCrimsGamemodeStats {
  readonly kills: number;
  readonly criminalKills: number;
  readonly copKills: number;
  readonly deaths: number;
  readonly wins: number;
  readonly assists: number;
  readonly gamePlays: number;
}
```

### CopsAndCrimsGungameStats

Extends `CopsAndCrimsGamemodeStats` with gungame-specific fields.

```ts
export interface CopsAndCrimsGungameStats extends CopsAndCrimsGamemodeStats {
  readonly armorPacksCollected: number;
  readonly carePackagesCollected: number;
  readonly speedBoostsCollected: number;
  readonly fastestWin: number;
}
```

### CopsAndCrimsTourneyStats

Tournament defusal stat block. The `tourneyDefusalA` and `tourneyDefusalB` fields use the raw key suffixes `0` and `1`.

```ts
export interface CopsAndCrimsTourneyStats {
  readonly kills: number;
  readonly criminalKills: number;
  readonly copKills: number;
  readonly deaths: number;
  readonly wins: number;
  readonly gamePlays: number;
  readonly roundWins: number;
  readonly bombsPlanted: number;
  readonly bombsDefused: number;
  readonly grenadeKills: number;
  readonly headshotKills: number;
  readonly shotsFired: number;
}
```

