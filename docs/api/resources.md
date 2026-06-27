# Resources

Parsers for the Hypixel `/resources/*` registry endpoints. Each function turns raw resource JSON into readonly, fully-typed objects, mirroring the API field-for-field with zero computation.

## parseAchievements

Parses the achievement registry (`/resources/achievements`) into a typed object keyed by game.

```ts
function parseAchievements(
  achievements: Record<string, unknown>,
): Record<string, AchievementsGame>;
```

Returns a record keyed by game name. Each game maps to an `AchievementsGame`.

```ts
interface AchievementsGame {
  readonly totalPoints: number;
  readonly totalLegacyPoints: number;
  readonly oneTime: Record<string, AchievementOneTime>;
  readonly tiered: Record<string, AchievementTiered>;
}
```

```ts
interface AchievementOneTime {
  readonly name: string;
  readonly description: string;
  readonly secret: boolean;
  readonly legacy: boolean;
  readonly points: number;
  readonly gamePercentUnlocked: number;
  readonly globalPercentUnlocked: number;
}
```

```ts
interface AchievementTiered {
  readonly name: string;
  readonly description: string;
  readonly legacy: boolean;
  readonly tiers: readonly AchievementTier[];
}
```

```ts
interface AchievementTier {
  readonly tier: number;
  readonly points: number;
  readonly amount: number;
}
```

| Field                   | Meaning                                                         |
| ----------------------- | --------------------------------------------------------------- |
| `totalPoints`           | Total achievement points for the game (raw `total_points`).     |
| `totalLegacyPoints`     | Total legacy achievement points (raw `total_legacy_points`).    |
| `oneTime`               | One-time achievements keyed by achievement id (raw `one_time`). |
| `tiered`                | Tiered achievements keyed by achievement id.                    |
| `gamePercentUnlocked`   | Percent of players in the game who unlocked it.                 |
| `globalPercentUnlocked` | Percent of all players who unlocked it.                         |
| `secret`                | Whether the achievement is hidden.                              |
| `legacy`                | Whether the achievement is legacy.                              |

Null/empty behavior: never returns null. Missing or non-object game values yield an `AchievementsGame` with default numeric fields and empty `oneTime`/`tiered` records. Missing `tiers` yields an empty array.

## parseChallenges

Parses the challenge registry (`/resources/challenges`) into a typed object keyed by game.

```ts
function parseChallenges(
  challenges: Record<string, unknown>,
): Record<string, readonly ResourceChallenge[]>;
```

Returns a record keyed by game name. Each game maps to a readonly array of `ResourceChallenge`.

```ts
interface ResourceChallenge {
  readonly id: string;
  readonly name: string;
  readonly rewards: readonly ResourceChallengeReward[];
}
```

```ts
interface ResourceChallengeReward {
  readonly type: string;
  readonly amount: number;
}
```

Null/empty behavior: never returns null. A non-object input resolves to an empty record. Non-array game values and missing `rewards` resolve to empty arrays.

## parseQuests

Parses the quest registry (`/resources/quests`) into a typed object keyed by game.

```ts
function parseQuests(
  quests: Record<string, unknown>,
): Record<string, ResourceQuest[]>;
```

Returns a record keyed by game name. Each game maps to an array of `ResourceQuest`.

```ts
interface ResourceQuest {
  readonly id: string;
  readonly name: string;
  readonly description: string;
  readonly rewards: readonly ResourceQuestReward[];
  readonly objectives: readonly ResourceQuestObjective[];
  readonly requirements: readonly ResourceQuestRequirement[];
}
```

```ts
interface ResourceQuestReward {
  readonly type: string;
  readonly amount: number;
}
```

```ts
interface ResourceQuestObjective {
  readonly id: string;
  readonly type: string;
  readonly integer: number;
}
```

```ts
interface ResourceQuestRequirement {
  readonly type: string;
}
```

Null/empty behavior: never returns null. Non-array game values and missing `rewards`/`objectives`/`requirements` resolve to empty arrays.

## parseGuildAchievements

Parses the guild achievement registry (`/resources/guilds/achievements`) into a typed object.

```ts
function parseGuildAchievements(
  raw: Record<string, unknown>,
): GuildAchievements | null;
```

```ts
interface GuildAchievements {
  readonly success: boolean;
  readonly lastUpdated: Date | null;
  readonly oneTime: Record<string, GuildOneTimeAchievement>;
  readonly tiered: Record<string, GuildTieredAchievement>;
}
```

```ts
interface GuildOneTimeAchievement {
  readonly name: string;
  readonly description: string;
  readonly points: number;
}
```

```ts
interface GuildTieredAchievement {
  readonly name: string;
  readonly description: string;
  readonly tiers: readonly GuildAchievementTier[];
}
```

```ts
interface GuildAchievementTier {
  readonly tier: number;
  readonly amount: number;
}
```

| Field         | Meaning                                                   |
| ------------- | --------------------------------------------------------- |
| `success`     | Raw API success flag.                                     |
| `lastUpdated` | Last update timestamp, or `null` when absent.             |
| `oneTime`     | One-time guild achievements keyed by id (raw `one_time`). |
| `tiered`      | Tiered guild achievements keyed by id.                    |

Null/empty behavior: returns `null` when `raw` is not a non-null, non-array object. `lastUpdated` is `null` when the raw timestamp is absent. Missing `one_time`/`tiered` yield empty records; missing `tiers` yields an empty array.

## parseGames

Parses the game registry (`/resources/games`) into a typed object keyed by game.

```ts
function parseGames(
  games: Record<string, unknown>,
): Readonly<Record<string, GameDefinition>>;
```

Returns a readonly record keyed by game name. Each game maps to a `GameDefinition`.

```ts
interface GameDefinition {
  readonly id: number;
  readonly name: string;
  readonly databaseName: string;
  readonly legacy: boolean;
  readonly modeNames: Readonly<Record<string, string>>;
}
```

| Field          | Meaning                       |
| -------------- | ----------------------------- |
| `id`           | Numeric game id.              |
| `name`         | Display name of the game.     |
| `databaseName` | Internal database name.       |
| `legacy`       | Whether the game is legacy.   |
| `modeNames`    | Mode key to display-name map. |

Null/empty behavior: never returns null. Missing `modeNames` yields an empty record.

## parseVanityPets

Parses the vanity pet registry (`/resources/vanity/pets`) into a typed object.

```ts
function parseVanityPets(data: Record<string, unknown>): VanityResource;
```

Returns a `VanityResource` (see type tree below).

## parseVanityCompanions

Parses the vanity companion registry (`/resources/vanity/companions`) into a typed object.

```ts
function parseVanityCompanions(data: Record<string, unknown>): VanityResource;
```

Both vanity parsers return the same `VanityResource` shape.

```ts
interface VanityResource {
  readonly types: readonly VanityItem[];
  readonly rarities: readonly VanityRarity[];
}
```

```ts
interface VanityItem {
  readonly key: string;
  readonly name: string;
  readonly rarity: string;
  readonly package: string;
}
```

```ts
interface VanityRarity {
  readonly name: string;
  readonly color: string;
}
```

Null/empty behavior: never returns null. Non-array `types`/`rarities` resolve to empty arrays; non-object entries within those arrays are filtered out.

