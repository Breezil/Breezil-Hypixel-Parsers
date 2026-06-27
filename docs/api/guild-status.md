# Guild, Status & Recent Games

This page documents the guild, player status, and recent games parsers from `@breezil/hypixel-parsers`. Each parser is strict-raw: it mirrors the raw Hypixel API fields exactly, with no computed, derived, or aggregated values.

## parseGuild

Parses a guild (the `/guild` endpoint) into a typed object.

```ts
export function parseGuild(guild: Record<string, unknown>): Guild | null;
```

Returns `null` when the supplied guild object is empty (no keys). Otherwise returns a fully populated `Guild`.

### Guild

```ts
export interface Guild {
  readonly id: string;
  readonly name: string;
  readonly nameLower: string;
  readonly description: string;
  readonly tag: string;
  readonly tagColor: string;
  readonly exp: number;
  readonly createdAt: Date | null;
  readonly coins: number;
  readonly coinsEver: number;
  readonly members: readonly GuildMember[];
  readonly ranks: readonly GuildRank[];
  readonly preferredGames: readonly string[];
  readonly publiclyListed: boolean;
  readonly joinable: boolean;
  readonly hideGmTag: boolean;
  readonly chatMuteUntil: Date | null;
  readonly banner: GuildBanner;
  readonly legacyRanking: number;
  readonly achievements: Record<string, number>;
  readonly guildExpByGameType: Record<string, number>;
}
```

| Field                | Raw key              | Notes                                      |
| -------------------- | -------------------- | ------------------------------------------ |
| `id`                 | `_id`                | Guild identifier.                          |
| `name`               | `name`               | Guild display name.                        |
| `nameLower`          | `name_lower`         | Lowercased name.                           |
| `description`        | `description`        | Guild description text.                    |
| `tag`                | `tag`                | Guild tag.                                 |
| `tagColor`           | `tagColor`           | Color of the guild tag.                    |
| `exp`                | `exp`                | Raw guild experience value.                |
| `createdAt`          | `created`            | Creation date, or `null` when absent.      |
| `coins`              | `coins`              | Current coin balance.                      |
| `coinsEver`          | `coinsEver`          | Total coins ever earned.                   |
| `members`            | `members`            | List of guild members.                     |
| `ranks`              | `ranks`              | List of guild ranks.                       |
| `preferredGames`     | `preferredGames`     | List of preferred game names.              |
| `publiclyListed`     | `publiclyListed`     | Whether the guild is publicly listed.      |
| `joinable`           | `joinable`           | Whether the guild is joinable.             |
| `hideGmTag`          | `hideGmTag`          | Whether the GM tag is hidden.              |
| `chatMuteUntil`      | `chatMute`           | Chat mute expiry date, or `null`.          |
| `banner`             | `banner`             | Guild banner definition.                   |
| `legacyRanking`      | `legacyRanking`      | Raw legacy ranking value.                  |
| `achievements`       | `achievements`       | Map of achievement keys to numeric values. |
| `guildExpByGameType` | `guildExpByGameType` | Map of game type to raw guild experience.  |

### GuildMember

```ts
export interface GuildMember {
  readonly uuid: string;
  readonly rank: string;
  readonly joinedAt: Date | null;
  readonly questParticipation: number;
  readonly expHistory: Record<string, number>;
  readonly mutedTill: Date | null;
}
```

| Field                | Raw key              | Notes                                          |
| -------------------- | -------------------- | ---------------------------------------------- |
| `uuid`               | `uuid`               | Member UUID.                                   |
| `rank`               | `rank`               | Member's rank name.                            |
| `joinedAt`           | `joined`             | Join date, or `null` when absent.              |
| `questParticipation` | `questParticipation` | Raw quest participation value.                 |
| `expHistory`         | `expHistory`         | Map of date keys to numeric experience values. |
| `mutedTill`          | `mutedTill`          | Mute expiry date, or `null`.                   |

### GuildRank

```ts
export interface GuildRank {
  readonly name: string;
  readonly tag: string;
  readonly default: boolean;
  readonly priority: number;
  readonly createdAt: Date | null;
}
```

| Field       | Raw key    | Notes                             |
| ----------- | ---------- | --------------------------------- |
| `name`      | `name`     | Rank name.                        |
| `tag`       | `tag`      | Rank tag.                         |
| `default`   | `default`  | Whether this is the default rank. |
| `priority`  | `priority` | Raw rank priority value.          |
| `createdAt` | `created`  | Rank creation date, or `null`.    |

### GuildBanner

```ts
export interface GuildBanner {
  readonly base: string;
  readonly patterns: readonly GuildBannerPattern[];
}
```

| Field      | Raw key    | Notes                     |
| ---------- | ---------- | ------------------------- |
| `base`     | `Base`     | Base color of the banner. |
| `patterns` | `Patterns` | List of banner patterns.  |

### GuildBannerPattern

```ts
export interface GuildBannerPattern {
  readonly pattern: string;
  readonly color: string;
}
```

| Field     | Raw key   | Notes               |
| --------- | --------- | ------------------- |
| `pattern` | `Pattern` | Pattern identifier. |
| `color`   | `Color`   | Pattern color.      |

Empty-array behavior: `members`, `ranks`, `preferredGames`, and `banner.patterns` return empty arrays when the corresponding raw value is missing or not an array. The `achievements`, `guildExpByGameType`, and `expHistory` maps include only entries whose values are numbers.

## parseStatus

Parses a player's status (the `/status` endpoint) into a typed object.

```ts
export function parseStatus(session: Record<string, unknown>): PlayerStatus;
```

Always returns a `PlayerStatus` object (never `null`). The `gameType`, `mode`, and `map` fields are `null` when the raw string value is empty (`""`).

### PlayerStatus

```ts
export interface PlayerStatus {
  readonly online: boolean;
  readonly gameType: string | null;
  readonly mode: string | null;
  readonly map: string | null;
}
```

| Field      | Raw key    | Notes                                    |
| ---------- | ---------- | ---------------------------------------- |
| `online`   | `online`   | Whether the player is currently online.  |
| `gameType` | `gameType` | Current game type, or `null` when empty. |
| `mode`     | `mode`     | Current mode, or `null` when empty.      |
| `map`      | `map`      | Current map, or `null` when empty.       |

## parseRecentGames

Parses a player's recent games (the `/recentgames` endpoint) into a typed object.

```ts
export function parseRecentGames(games: unknown[]): RecentGame[];
```

Returns an array of `RecentGame`. Entries that are not plain objects (non-objects, `null`, or arrays) are skipped, so the result can be an empty array when no valid entries are present.

### RecentGame

```ts
export interface RecentGame {
  readonly gameType: string;
  readonly mode: string | null;
  readonly map: string | null;
  readonly startedAt: Date | null;
  readonly endedAt: Date | null;
}
```

| Field       | Raw key    | Notes                              |
| ----------- | ---------- | ---------------------------------- |
| `gameType`  | `gameType` | Game type identifier.              |
| `mode`      | `mode`     | Game mode, or `null` when empty.   |
| `map`       | `map`      | Map name, or `null` when empty.    |
| `startedAt` | `date`     | Start date, or `null` when absent. |
| `endedAt`   | `ended`    | End date, or `null` when absent.   |

