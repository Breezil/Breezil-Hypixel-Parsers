# SkyBlock Resources

Parsers for the static SkyBlock resource endpoints (`/resources/skyblock/*`). Each function turns the raw Hypixel API JSON into a readonly, fully-typed object that mirrors the response field-for-field, with no computed or derived values.

## parseSkyBlockSkills

Parses the SkyBlock skill registry (`/resources/skyblock/skills`) into a typed object.

```ts
export function parseSkyBlockSkills(
  raw: Record<string, unknown>,
): SkyBlockSkillsResource | null;
```

### Returned types

```ts
export interface SkyBlockSkillsResource {
  readonly lastUpdated: Date | null;
  readonly version: string;
  readonly skills: Record<string, SkyBlockSkill>;
}

export interface SkyBlockSkill {
  readonly name: string;
  readonly description: string;
  readonly maxLevel: number;
  readonly levels: SkyBlockSkillLevel[];
}

export interface SkyBlockSkillLevel {
  readonly level: number;
  readonly totalExpRequired: number;
  readonly unlocks: string[];
}
```

### Fields

| Field                                 | Description                                                      |
| ------------------------------------- | ---------------------------------------------------------------- |
| `lastUpdated`                         | Timestamp the resource was last updated, or `null` if absent.    |
| `version`                             | Resource version string.                                         |
| `skills`                              | Map keyed by skill identifier to its `SkyBlockSkill` definition. |
| `SkyBlockSkill.name`                  | Display name of the skill.                                       |
| `SkyBlockSkill.description`           | Description text for the skill.                                  |
| `SkyBlockSkill.maxLevel`              | Maximum attainable level.                                        |
| `SkyBlockSkill.levels`                | Ordered list of level definitions.                               |
| `SkyBlockSkillLevel.level`            | Level number.                                                    |
| `SkyBlockSkillLevel.totalExpRequired` | Cumulative experience required to reach the level.               |
| `SkyBlockSkillLevel.unlocks`          | Strings describing what the level unlocks.                       |

### Null and empty behavior

Returns `null` when `raw` is not an object. `lastUpdated` is `null` when the field is missing or unparseable. `skills` is an empty object when the block is absent, and each skill's `levels`/`unlocks` arrays are empty when those keys are absent.

## parseSkyBlockCollections

Parses the SkyBlock collection registry (`/resources/skyblock/collections`) into a typed object.

```ts
export function parseSkyBlockCollections(
  raw: Record<string, unknown>,
): SkyBlockCollectionsResource | null;
```

### Returned types

```ts
export interface SkyBlockCollectionsResource {
  readonly lastUpdated: Date | null;
  readonly version: string;
  readonly collections: Record<string, SkyBlockCollectionCategory>;
}

export interface SkyBlockCollectionCategory {
  readonly name: string;
  readonly items: Record<string, SkyBlockCollectionDefinition>;
}

export interface SkyBlockCollectionDefinition {
  readonly name: string;
  readonly maxTiers: number;
  readonly tiers: SkyBlockCollectionTier[];
}

export interface SkyBlockCollectionTier {
  readonly tier: number;
  readonly amountRequired: number;
  readonly unlocks: string[];
}
```

### Fields

| Field                                   | Description                                                                      |
| --------------------------------------- | -------------------------------------------------------------------------------- |
| `lastUpdated`                           | Timestamp the resource was last updated, or `null` if absent.                    |
| `version`                               | Resource version string.                                                         |
| `collections`                           | Map keyed by collection category identifier to its `SkyBlockCollectionCategory`. |
| `SkyBlockCollectionCategory.name`       | Display name of the category.                                                    |
| `SkyBlockCollectionCategory.items`      | Map keyed by item identifier to its `SkyBlockCollectionDefinition`.              |
| `SkyBlockCollectionDefinition.name`     | Display name of the collection item.                                             |
| `SkyBlockCollectionDefinition.maxTiers` | Maximum number of tiers.                                                         |
| `SkyBlockCollectionDefinition.tiers`    | Ordered list of tier definitions.                                                |
| `SkyBlockCollectionTier.tier`           | Tier number.                                                                     |
| `SkyBlockCollectionTier.amountRequired` | Amount required to reach the tier.                                               |
| `SkyBlockCollectionTier.unlocks`        | Strings describing what the tier unlocks.                                        |

### Null and empty behavior

Returns `null` when `raw` is not an object. `lastUpdated` is `null` when the field is missing or unparseable. `collections`, each category's `items`, and each definition's `tiers`/`unlocks` arrays are empty when their corresponding keys are absent.

## parseSkyBlockElection

Parses the SkyBlock election (`/resources/skyblock/election`) into a typed object.

```ts
export function parseSkyBlockElection(
  raw: Record<string, unknown>,
): SkyBlockElectionResource | null;
```

### Returned types

```ts
export interface SkyBlockElectionResource {
  readonly lastUpdated: Date | null;
  readonly mayor: SkyBlockElectionMayor | null;
  readonly lastElection: SkyBlockElection;
  readonly currentElection: SkyBlockElection | null;
}

export interface SkyBlockElectionMayor {
  readonly name: string;
  readonly keyBenefit: string;
  readonly perks: SkyBlockElectionPerk[];
  readonly minister: SkyBlockElectionMinister | null;
}

export interface SkyBlockElectionMinister {
  readonly name: string;
  readonly keyBenefit: string;
  readonly perk: SkyBlockElectionPerk | null;
}

export interface SkyBlockElection {
  readonly year: number;
  readonly candidates: SkyBlockElectionCandidate[];
}

export interface SkyBlockElectionCandidate {
  readonly name: string;
  readonly keyBenefit: string;
  readonly perks: SkyBlockElectionPerk[];
  readonly votesReceived: number;
}

export interface SkyBlockElectionPerk {
  readonly name: string;
  readonly description: string;
  readonly minister: boolean;
}
```

### Fields

| Field                                     | Description                                                         |
| ----------------------------------------- | ------------------------------------------------------------------- |
| `lastUpdated`                             | Timestamp the resource was last updated, or `null` if absent.       |
| `mayor`                                   | The current mayor, or `null` when no mayor name is present.         |
| `lastElection`                            | The most recent completed election (sourced from `mayor.election`). |
| `currentElection`                         | The election currently in progress, or `null` when absent.          |
| `SkyBlockElectionMayor.name`              | Mayor name.                                                         |
| `SkyBlockElectionMayor.keyBenefit`        | Mapped from the raw `key` field; the mayor's key benefit.           |
| `SkyBlockElectionMayor.perks`             | List of the mayor's perks.                                          |
| `SkyBlockElectionMayor.minister`          | The mayor's minister, or `null` when absent.                        |
| `SkyBlockElectionMinister.name`           | Minister name.                                                      |
| `SkyBlockElectionMinister.keyBenefit`     | Mapped from the raw `key` field; the minister's key benefit.        |
| `SkyBlockElectionMinister.perk`           | The minister's single perk, or `null` when absent.                  |
| `SkyBlockElection.year`                   | Election year.                                                      |
| `SkyBlockElection.candidates`             | List of candidates.                                                 |
| `SkyBlockElectionCandidate.name`          | Candidate name.                                                     |
| `SkyBlockElectionCandidate.keyBenefit`    | Mapped from the raw `key` field; the candidate's key benefit.       |
| `SkyBlockElectionCandidate.perks`         | List of the candidate's perks.                                      |
| `SkyBlockElectionCandidate.votesReceived` | Mapped from the raw `votes` field; votes received.                  |
| `SkyBlockElectionPerk.name`               | Perk name.                                                          |
| `SkyBlockElectionPerk.description`        | Perk description text.                                              |
| `SkyBlockElectionPerk.minister`           | Whether the perk is a minister perk.                                |

### Null and empty behavior

Returns `null` when `raw` is not an object. `mayor` is `null` when the mayor name resolves to an empty string. `mayor.minister` is `null` when the `minister` block is not an object, and `minister.perk` is `null` when its `perk` block is not an object. `currentElection` is `null` when the raw `current` field is not an object. `lastElection` is always present (parsed from `mayor.election`, defaulting to empty values when absent). All `perks`/`candidates` arrays are empty when their keys are absent.

## parseSkyBlockBingo

Parses the SkyBlock bingo event (`/resources/skyblock/bingo`) into a typed object.

```ts
export function parseSkyBlockBingo(
  raw: Record<string, unknown>,
): SkyBlockBingoResource | null;
```

### Returned types

```ts
export interface SkyBlockBingoResource {
  readonly lastUpdated: Date | null;
  readonly id: number;
  readonly name: string;
  readonly start: Date | null;
  readonly end: Date | null;
  readonly modifier: string;
  readonly goals: SkyBlockBingoGoal[];
}

export interface SkyBlockBingoGoal {
  readonly id: string;
  readonly name: string;
  readonly lore: string;
  readonly fullLore: string[];
  readonly progress: number;
  readonly tiers: number[];
  readonly requiredAmount: number | null;
}
```

### Fields

| Field                              | Description                                                   |
| ---------------------------------- | ------------------------------------------------------------- |
| `lastUpdated`                      | Timestamp the resource was last updated, or `null` if absent. |
| `id`                               | Bingo event id.                                               |
| `name`                             | Bingo event name.                                             |
| `start`                            | Event start timestamp, or `null` if absent.                   |
| `end`                              | Event end timestamp, or `null` if absent.                     |
| `modifier`                         | Event modifier string.                                        |
| `goals`                            | List of bingo goals.                                          |
| `SkyBlockBingoGoal.id`             | Goal identifier.                                              |
| `SkyBlockBingoGoal.name`           | Goal display name.                                            |
| `SkyBlockBingoGoal.lore`           | Single lore string.                                           |
| `SkyBlockBingoGoal.fullLore`       | Full lore as a list of strings.                               |
| `SkyBlockBingoGoal.progress`       | Goal progress value.                                          |
| `SkyBlockBingoGoal.tiers`          | List of tier threshold numbers.                               |
| `SkyBlockBingoGoal.requiredAmount` | Required amount when present as a number, otherwise `null`.   |

### Null and empty behavior

Returns `null` when `raw` is not an object. `lastUpdated`, `start`, and `end` are `null` when missing or unparseable. Each goal's `requiredAmount` is `null` unless the raw value is a number. `goals` and each goal's `fullLore`/`tiers` arrays are empty when their keys are absent.

