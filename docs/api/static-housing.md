# Static & Housing

Parsers for Hypixel's network-wide static endpoints (boosters, leaderboards, counts, punishment stats) and the Housing endpoints. Every parser is strict-raw: it mirrors the raw API JSON field-for-field with no computed, derived, or aggregated values.

## parseBoosters

Parses the network boosters (`/boosters`) into a typed object.

```ts
export function parseBoosters(boosters: unknown[]): StaticBooster[];
```

Iterates the input array and skips any entry that is not a plain object (non-objects, `null`, and arrays are ignored), so the returned array may be shorter than the input.

```ts
export interface StaticBooster {
  readonly id: string;
  readonly purchaserUuid: string;
  readonly amount: number;
  readonly originalLength: number;
  readonly length: number;
  readonly gameType: number;
  readonly dateActivated: Date | null;
  readonly stacked: boolean | readonly string[];
}
```

| Field            | Type                           | Notes                                                                                                                      |
| ---------------- | ------------------------------ | -------------------------------------------------------------------------------------------------------------------------- |
| `id`             | `string`                       | Mapped from the raw `_id` field.                                                                                           |
| `purchaserUuid`  | `string`                       | UUID of the booster purchaser.                                                                                             |
| `amount`         | `number`                       | Booster multiplier amount.                                                                                                 |
| `originalLength` | `number`                       | Original duration.                                                                                                         |
| `length`         | `number`                       | Remaining duration.                                                                                                        |
| `gameType`       | `number`                       | Numeric game type id.                                                                                                      |
| `dateActivated`  | `Date \| null`                 | `null` when the raw value is absent or not a valid date.                                                                   |
| `stacked`        | `boolean \| readonly string[]` | An array of UUID strings when stacked is a list, otherwise `true` only when the raw value is exactly `true`, else `false`. |

## parseLeaderboards

Parses the leaderboards (`/leaderboards`) into a typed object.

```ts
export function parseLeaderboards(
  raw: Record<string, unknown>,
): Record<string, StaticLeaderboard[]>;
```

Reads the `leaderboards` object and returns a map keyed by game name to an array of leaderboards. List values that are not arrays are skipped, and individual entries that are not plain objects are skipped. Returns an empty object when no `leaderboards` object is present.

```ts
export interface StaticLeaderboard {
  readonly path: string;
  readonly prefix: string;
  readonly title: string;
  readonly location: string;
  readonly count: number;
  readonly leaders: readonly string[];
}
```

| Field      | Type                | Notes                                                                                       |
| ---------- | ------------------- | ------------------------------------------------------------------------------------------- |
| `path`     | `string`            | Leaderboard path identifier.                                                                |
| `prefix`   | `string`            | Display prefix.                                                                             |
| `title`    | `string`            | Display title.                                                                              |
| `location` | `string`            | In-world location string.                                                                   |
| `count`    | `number`            | Number of leaders.                                                                          |
| `leaders`  | `readonly string[]` | Filtered to string entries only; empty array when the raw value is missing or not an array. |

## parseGameCounts

Parses the player counts (`/counts`) into a typed object.

```ts
export function parseGameCounts(raw: Record<string, unknown>): StaticGameCounts;
```

Reads the `games` object and builds a per-game map. Game values that are not plain objects are skipped. Always returns an object; `games` is empty when no game entries are present.

```ts
export interface StaticGameCounts {
  readonly playerCount: number;
  readonly games: Record<string, StaticGameCount>;
}

export interface StaticGameCount {
  readonly players: number;
  readonly modes: Record<string, number>;
}
```

| Field                     | Type                              | Notes                                                     |
| ------------------------- | --------------------------------- | --------------------------------------------------------- |
| `playerCount`             | `number`                          | Total network player count.                               |
| `games`                   | `Record<string, StaticGameCount>` | Per-game counts keyed by game name.                       |
| `StaticGameCount.players` | `number`                          | Players in that game.                                     |
| `StaticGameCount.modes`   | `Record<string, number>`          | Per-mode player counts; only numeric values are included. |

## parseWatchdogStats

Parses the punishment stats (`/punishmentstats`) into a typed object.

```ts
export function parseWatchdogStats(
  raw: Record<string, unknown>,
): StaticWatchdogStats;
```

Always returns an object with all five fields mapped from their raw snake_case keys.

```ts
export interface StaticWatchdogStats {
  readonly watchdogLastMinute: number;
  readonly watchdogDaily: number;
  readonly watchdogTotal: number;
  readonly staffDaily: number;
  readonly staffTotal: number;
}
```

| Field                | Type     | Raw source              |
| -------------------- | -------- | ----------------------- |
| `watchdogLastMinute` | `number` | `watchdog_lastMinute`   |
| `watchdogDaily`      | `number` | `watchdog_rollingDaily` |
| `watchdogTotal`      | `number` | `watchdog_total`        |
| `staffDaily`         | `number` | `staff_rollingDaily`    |
| `staffTotal`         | `number` | `staff_total`           |

## parseHouse

Parses a house (`/housing/house`) into a typed object.

```ts
export function parseHouse(raw: Record<string, unknown>): HousingHouse;
```

Always returns an object. The nested `cookies` object is read from the raw `cookies` field via an internal helper.

```ts
export interface HousingHouse {
  readonly uuid: string;
  readonly owner: string;
  readonly name: string;
  readonly createdAt: Date | null;
  readonly players: number;
  readonly cookies: HousingCookies;
}

export interface HousingCookies {
  readonly current: number;
}
```

| Field                    | Type             | Notes                                                    |
| ------------------------ | ---------------- | -------------------------------------------------------- |
| `uuid`                   | `string`         | House UUID.                                              |
| `owner`                  | `string`         | Owner UUID.                                              |
| `name`                   | `string`         | House name.                                              |
| `createdAt`              | `Date \| null`   | `null` when the raw value is absent or not a valid date. |
| `players`                | `number`         | Current player count.                                    |
| `cookies`                | `HousingCookies` | Nested cookie totals.                                    |
| `HousingCookies.current` | `number`         | Current cookie count, read from `cookies.current`.       |

## parseHouses

Parses a list of houses (`/housing/houses`) into a typed object.

```ts
export function parseHouses(houses: unknown[]): HousingHouse[];
```

Iterates the input array and skips any entry that is not a plain object (non-objects, `null`, and arrays are ignored), delegating each valid entry to [`parseHouse`](#parsehouse). Returns an empty array when no valid entries are present. Each element is a `HousingHouse` (see above).

