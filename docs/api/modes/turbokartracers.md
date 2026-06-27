# Turbo Kart Racers

Parser for Hypixel Turbo Kart Racers (Gingerbread Mario Kart) statistics. It mirrors the raw `stats.GingerBread` API block field-for-field into readonly, fully-typed objects with zero computed or derived values.

## parseTurboKartRacers

Parses a player's Turbo Kart Racers stats (`stats.GingerBread`) into a typed object.

```ts
export function parseTurboKartRacers(
  stats: Record<string, unknown>,
): TurboKartRacersStats | null;
```

Returns `null` when the input block is empty (no keys). Otherwise it returns a fully populated `TurboKartRacersStats`.

### Constants and unions

```ts
export const turboKartRacersHorns = [
  "DEFAULT",
  "SHY",
  "ALIEN",
  "TAXI",
  "KLAXON",
  "TRICYCLE",
  "ALARM",
  "KLOON",
  "TEDDY",
  "TRUCK",
  "JERRY",
] as const;

export type TurboKartRacersHorn = (typeof turboKartRacersHorns)[number];
```

```ts
export const turboKartRacersMapIds = [
  "retro",
  "hypixelgp",
  "olympus",
  "junglerush",
  "canyon",
] as const;

export type TurboKartRacersMapId = (typeof turboKartRacersMapIds)[number];
```

Note: `horn` falls back to `"DEFAULT"` when the raw value is not one of the known `turboKartRacersHorns`.

### TurboKartRacersStats

```ts
export interface TurboKartRacersStats {
  readonly coins: number;
  readonly coinsPickedUp: number;
  readonly wins: number;
  readonly completedLaps: number;
  readonly boxPickups: number;
  readonly goldTrophies: number;
  readonly silverTrophies: number;
  readonly bronzeTrophies: number;
  readonly horn: TurboKartRacersHorn;
  readonly bananaHitsReceived: number;
  readonly bananaHitsSent: number;
  readonly blueTorpedoHits: number;
  readonly grandPrix: boolean;
  readonly grandPrixTokens: number;
  readonly lastTourneyAd: Date | null;
  readonly packages: readonly string[];
  readonly lobbyResourcePack: boolean;
  readonly showWinPrefix: boolean;
  readonly prefixColor: string;
  readonly itemMessages: boolean;
  readonly temperatureGaugeIndicator: boolean;
  readonly loadout: TurboKartRacersLoadout;
  readonly maps: Readonly<
    Record<TurboKartRacersMapId, TurboKartRacersMapStats>
  >;
  readonly periods: TurboKartRacersPeriods;
  readonly monthlyPoints: Readonly<
    Record<string, TurboKartRacersMonthlyPoints>
  >;
  readonly tourneys: Readonly<Record<string, TurboKartRacersTourneyStats>>;
}
```

| Field                       | Type                                                    | Notes                                                              |
| --------------------------- | ------------------------------------------------------- | ------------------------------------------------------------------ |
| `coins`                     | `number`                                                | Turbo Kart Racers coin balance                                     |
| `coinsPickedUp`             | `number`                                                | Coins picked up across races                                       |
| `wins`                      | `number`                                                | Total wins                                                         |
| `completedLaps`             | `number`                                                | Laps completed                                                     |
| `boxPickups`                | `number`                                                | Item box pickups                                                   |
| `goldTrophies`              | `number`                                                | Gold trophies earned                                               |
| `silverTrophies`            | `number`                                                | Silver trophies earned                                             |
| `bronzeTrophies`            | `number`                                                | Bronze trophies earned                                             |
| `horn`                      | `TurboKartRacersHorn`                                   | Active horn, falls back to `"DEFAULT"`                             |
| `bananaHitsReceived`        | `number`                                                | Banana hits received                                               |
| `bananaHitsSent`            | `number`                                                | Banana hits sent                                                   |
| `blueTorpedoHits`           | `number`                                                | Blue torpedo hits                                                  |
| `grandPrix`                 | `boolean`                                               | Grand Prix flag                                                    |
| `grandPrixTokens`           | `number`                                                | Grand Prix tokens                                                  |
| `lastTourneyAd`             | `Date \| null`                                          | Last tournament ad timestamp, `null` when absent                   |
| `packages`                  | `readonly string[]`                                     | Owned package identifiers, empty array when absent or not an array |
| `lobbyResourcePack`         | `boolean`                                               | Lobby resource pack toggle                                         |
| `showWinPrefix`             | `boolean`                                               | Win prefix display toggle                                          |
| `prefixColor`               | `string`                                                | Prefix color                                                       |
| `itemMessages`              | `boolean`                                               | Item messages toggle                                               |
| `temperatureGaugeIndicator` | `boolean`                                               | Temperature gauge indicator toggle                                 |
| `loadout`                   | `TurboKartRacersLoadout`                                | Active cosmetics and parts                                         |
| `maps`                      | `Record<TurboKartRacersMapId, TurboKartRacersMapStats>` | Per-map lifetime stats, one entry per known map id                 |
| `periods`                   | `TurboKartRacersPeriods`                                | Rolling period stats                                               |
| `monthlyPoints`             | `Record<string, TurboKartRacersMonthlyPoints>`          | Keyed by `month_year` (e.g. `"1_2024"`)                            |
| `tourneys`                  | `Record<string, TurboKartRacersTourneyStats>`           | Keyed by `solo_<index>`                                            |

### TurboKartRacersLoadout

```ts
export interface TurboKartRacersLoadout {
  readonly boosterActive: string;
  readonly engineActive: string;
  readonly frameActive: string;
  readonly helmetActive: string;
  readonly jacketActive: string;
  readonly pantsActive: string;
  readonly shoesActive: string;
  readonly skinActive: string;
  readonly particleTrail: string;
  readonly parts: string;
}
```

### TurboKartRacersMapStats

Per-map stats. The `maps` record always contains one entry for each id in `turboKartRacersMapIds`.

```ts
export interface TurboKartRacersMapStats {
  readonly map: TurboKartRacersMapId;
  readonly plays: number;
  readonly boxPickups: number;
  readonly bronzeTrophies: number;
  readonly silverTrophies: number;
  readonly goldTrophies: number;
}
```

### TurboKartRacersPeriods

```ts
export interface TurboKartRacersPeriods {
  readonly monthlyA: TurboKartRacersPeriodStats;
  readonly monthlyB: TurboKartRacersPeriodStats;
  readonly weeklyA: TurboKartRacersPeriodStats;
  readonly weeklyB: TurboKartRacersPeriodStats;
}
```

### TurboKartRacersPeriodStats

```ts
export interface TurboKartRacersPeriodStats {
  readonly boxPickups: number;
  readonly bronzeTrophies: number;
  readonly silverTrophies: number;
  readonly goldTrophies: number;
}
```

### TurboKartRacersMonthlyPoints

Keyed by month identifier (`<month>_<year>`) derived from `GingerBread_tkr_points__<month>_points` / `_position` keys.

```ts
export interface TurboKartRacersMonthlyPoints {
  readonly points: number;
  readonly position: number;
}
```

### TurboKartRacersTourneyStats

Keyed by `solo_<index>`, derived from `tourney_gingerbread_solo_<index>_*` keys.

```ts
export interface TurboKartRacersTourneyStats {
  readonly wins: number;
  readonly lapsCompleted: number;
  readonly coinsPickedUp: number;
  readonly boxPickups: number;
  readonly goldTrophies: number;
  readonly silverTrophies: number;
  readonly bronzeTrophies: number;
  readonly bananaHitsReceived: number;
  readonly bananaHitsSent: number;
  readonly blueTorpedoHits: number;
  readonly maps: Readonly<
    Record<TurboKartRacersMapId, TurboKartRacersMapStats>
  >;
  readonly periods: TurboKartRacersPeriods;
}
```

