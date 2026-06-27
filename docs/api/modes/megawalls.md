# Mega Walls

The Mega Walls parser turns the raw `stats.Walls3` block from the Hypixel Player API into a readonly, fully-typed object. Like the rest of `@breezil/hypixel-parsers`, it is strict-raw: every field mirrors the API one-for-one with zero derived, computed, or aggregated values.

## parseMegaWalls

Parses a player's Mega Walls stats (`stats.Walls3`) into a typed object.

```ts
export function parseMegaWalls(
  stats: Record<string, unknown>,
): MegaWallsStats | null;
```

Returns `null` when `stats` is not an object (`null` or non-object input). Otherwise it always returns a fully populated `MegaWallsStats`; missing fields fall back to their zero/empty values (`0` for numbers, `""` for strings, `false` for booleans, `{}`/`[]` for records and arrays).

### MegaWallsStats

The root object returned by `parseMegaWalls`.

```ts
export interface MegaWallsStats {
  readonly coins: number;
  readonly witherCoins: number;
  readonly classPoints: number;
  readonly classPointsVersion: number;
  readonly mythicFavor: number;
  readonly exchangeFavorBought: number;
  readonly exchangeFavorSold: number;
  readonly newEnderchest: number;
  readonly newPrestige: number;
  readonly pickaxeLevel: number;
  readonly pickaxeRefunded: number;
  readonly playStreak: number;
  readonly refundedCoinsPp: number;
  readonly shoutTotal: number;
  readonly chosenClass: string;
  readonly chosenKillSign: string;
  readonly killMessage: string;
  readonly dreadlordEffect: string;
  readonly activeChallengeMap: string;
  readonly warCry: string;
  readonly smileyKills: string;
  readonly blood: boolean;
  readonly mutationsVisibility: boolean;
  readonly gvgDecide: boolean;
  readonly faceOffJoinNoParty: boolean;
  readonly toggleHints: boolean;
  readonly toggleNotifications: boolean;
  readonly witherHealthHearts: boolean;
  readonly colorblind: MegaWallsColorblindSettings;
  readonly packages: readonly string[];
  readonly cakesFoundByName: readonly string[];
  readonly votes: Readonly<Record<string, number>>;
  readonly chosenSkins: Readonly<Record<string, string>>;
  readonly finalKillsLegacy: number;
  readonly finalAssistsLegacy: number;
  readonly finalDeathsLegacy: number;
  readonly witherDamageLegacy: number;
  readonly killsNewLegacy: number;
  readonly deathsNewLegacy: number;
  readonly cakesFound: MegaWallsModeStats;
  readonly plays: MegaWallsPlays;
  readonly stats: MegaWallsActivityStats;
  readonly byClass: Readonly<Record<MegaWallsClass, MegaWallsClassBreakdown>>;
  readonly weekly: MegaWallsWeeklyStats;
  readonly monthly: MegaWallsMonthlyStats;
  readonly classes: Readonly<Record<string, MegaWallsClassProgress>>;
  readonly kits: Readonly<Record<string, MegaWallsKitStats>>;
  readonly kitInventories: Readonly<
    Record<string, Readonly<Record<string, string>>>
  >;
  readonly leaderboardSettings: MegaWallsLeaderboardSettings;
}
```

Notable fields:

| Field                                                     | Meaning                                                                                                                                      |
| --------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| `coins` / `witherCoins`                                   | Standard coins and wither coins balances.                                                                                                    |
| `classPoints` / `classPointsVersion`                      | Current class points and the class-points schema version.                                                                                    |
| `mythicFavor`, `exchangeFavorBought`, `exchangeFavorSold` | Mythic favor balance and favor exchange totals.                                                                                              |
| `packages`                                                | Raw `packages` array of cosmetic/package identifiers.                                                                                        |
| `cakesFoundByName`                                        | Raw `cakes_found_by_name` array of cake identifiers.                                                                                         |
| `votes`                                                   | Map of vote keys (the `votes_` prefix stripped) to counts.                                                                                   |
| `chosenSkins`                                             | Map of skin keys (the `chosen_skin_` prefix stripped) to chosen skin values.                                                                 |
| `*Legacy`                                                 | Legacy top-level kill/assist/death/damage counters (`finalKills`, `finalAssists`, `finalDeaths`, `witherDamage`, `kills_new`, `deaths_new`). |
| `stats`                                                   | Overall (non-kit) activity statistics.                                                                                                       |
| `byClass`                                                 | Per-class lifetime breakdown, keyed by the 15 `MegaWallsClass` values.                                                                       |
| `kits`                                                    | Per-kit statistics, keyed by kit identifier (see kit list below).                                                                            |
| `kitInventories`                                          | Per-kit inventory maps from any raw key ending in `Inventory`.                                                                               |

The `kits` record is populated for each of these kit identifiers: `cow`, `hunter`, `shark`, `arcanist`, `dreadlord`, `golem`, `herobrine`, `pigman`, `zombie`, `blaze`, `enderman`, `shaman`, `squid`, `creeper`, `pirate`, `sheep`, `skeleton`, `spider`, `werewolf`, `angel`, `assassin`, `automaton`, `moleman`, `phoenix`, `renegade`, `snowman`, `dragon`.

### MegaWallsClass

Union of the 15 recognized Mega Walls class names. Used as the key type for `byClass`, `weekly.byClass`, and the tier breakdown records.

```ts
export type MegaWallsClass =
  | "Arcanist"
  | "Blaze"
  | "Creeper"
  | "Dreadlord"
  | "Enderman"
  | "Golem"
  | "Herobrine"
  | "Hunter"
  | "Pigman"
  | "Pirate"
  | "Shaman"
  | "Skeleton"
  | "Spider"
  | "Squid"
  | "Zombie";
```

### MegaWallsModeStats

A single statistic split across the overall total and the three game modes (standard, face-off, GvG).

```ts
export interface MegaWallsModeStats {
  readonly overall: number;
  readonly standard: number;
  readonly faceOff: number;
  readonly gvg: number;
}
```

### MegaWallsRecordStats

A win/loss-style record split across modes, plus a practice total.

```ts
export interface MegaWallsRecordStats {
  readonly overall: number;
  readonly standard: number;
  readonly faceOff: number;
  readonly gvg: number;
  readonly practice: number;
}
```

### MegaWallsKillStats

A kill statistic split across modes, plus nested melee and behind-melee breakdowns.

```ts
export interface MegaWallsKillStats {
  readonly overall: number;
  readonly standard: number;
  readonly faceOff: number;
  readonly gvg: number;
  readonly melee: MegaWallsModeStats;
  readonly meleeBehind: MegaWallsModeStats;
}
```

### MegaWallsActivationStats

Ability activation counts split across modes, plus a deathmatch breakdown.

```ts
export interface MegaWallsActivationStats {
  readonly overall: number;
  readonly standard: number;
  readonly faceOff: number;
  readonly gvg: number;
  readonly deathmatch: MegaWallsModeStats;
}
```

### MegaWallsBlocksPlacedStats

Blocks-placed counts split across modes, plus a preparation-phase breakdown.

```ts
export interface MegaWallsBlocksPlacedStats {
  readonly overall: number;
  readonly standard: number;
  readonly faceOff: number;
  readonly gvg: number;
  readonly preparation: MegaWallsModeStats;
}
```

### MegaWallsDistanceStats

Distance (meters walked) split across modes, plus a speed breakdown.

```ts
export interface MegaWallsDistanceStats {
  readonly overall: number;
  readonly standard: number;
  readonly faceOff: number;
  readonly gvg: number;
  readonly speed: MegaWallsModeStats;
}
```

### MegaWallsActivityStats

The full activity statistics block, used both for the overall `stats` and for each kit's `stats`. Every plain entry is a `MegaWallsModeStats`; the trailing entries use the richer kill, activation, blocks-placed, distance, and record shapes.

```ts
export interface MegaWallsActivityStats {
  readonly absorptionPotionsDrunk: MegaWallsModeStats;
  readonly alliesHealed: MegaWallsModeStats;
  readonly amountHealed: MegaWallsModeStats;
  readonly applesEaten: MegaWallsModeStats;
  readonly arrowsFired: MegaWallsModeStats;
  readonly arrowsFromRend: MegaWallsModeStats;
  readonly arrowsHit: MegaWallsModeStats;
  readonly assists: MegaWallsModeStats;
  readonly bedsCrafted: MegaWallsModeStats;
  readonly bedsPlaced: MegaWallsModeStats;
  readonly berserkedKills: MegaWallsModeStats;
  readonly blazesSpawned: MegaWallsModeStats;
  readonly blizzardSecondsSlow: MegaWallsModeStats;
  readonly blocksBroken: MegaWallsModeStats;
  readonly breadCrafted: MegaWallsModeStats;
  readonly breadEaten: MegaWallsModeStats;
  readonly bucketBarriersBroken: MegaWallsModeStats;
  readonly damageDealt: MegaWallsModeStats;
  readonly darkMatterArmor: MegaWallsModeStats;
  readonly deaths: MegaWallsModeStats;
  readonly defenderAssists: MegaWallsModeStats;
  readonly defenderFinalAssists: MegaWallsModeStats;
  readonly defenderFinalKills: MegaWallsModeStats;
  readonly defenderKills: MegaWallsModeStats;
  readonly diamondOreBroken: MegaWallsModeStats;
  readonly divineInterventions: MegaWallsModeStats;
  readonly endurancedFinalKills: MegaWallsModeStats;
  readonly enemiesHit: MegaWallsModeStats;
  readonly energyFromGrapplingHook: MegaWallsModeStats;
  readonly energySyphoned: MegaWallsModeStats;
  readonly finalAssists: MegaWallsModeStats;
  readonly finalAssistsAfterFinalKilled: MegaWallsModeStats;
  readonly finalAssistsMelee: MegaWallsModeStats;
  readonly finalDeaths: MegaWallsModeStats;
  readonly finalKillsAfterFinalKilled: MegaWallsModeStats;
  readonly finalKillsAfterGrapplingHook: MegaWallsModeStats;
  readonly finalKillsBelow10Hp: MegaWallsModeStats;
  readonly finalKillsBelow5Hp: MegaWallsModeStats;
  readonly finalKillsRanged: MegaWallsModeStats;
  readonly finalKillsRanged30: MegaWallsModeStats;
  readonly finalKillsRanged50: MegaWallsModeStats;
  readonly finalKillsWithFire: MegaWallsModeStats;
  readonly finalWaterKills: MegaWallsModeStats;
  readonly finalsWithStrength: MegaWallsModeStats;
  readonly fishEaten: MegaWallsModeStats;
  readonly foodEaten: MegaWallsModeStats;
  readonly forceOfNatureFinalAssists: MegaWallsModeStats;
  readonly forceOfNatureFinalKills: MegaWallsModeStats;
  readonly gamesBedsPlaced: MegaWallsModeStats;
  readonly gamesPlayed: MegaWallsModeStats;
  readonly goldenApplesEaten: MegaWallsModeStats;
  readonly healedLowTeammates: MegaWallsModeStats;
  readonly heroismTriggers: MegaWallsModeStats;
  readonly heroismTriggersInDm: MegaWallsModeStats;
  readonly innerInkBlinds: MegaWallsModeStats;
  readonly ironArmorGifted: MegaWallsModeStats;
  readonly ironArmorGiftedDecember: MegaWallsModeStats;
  readonly ironHeartAbsorption: MegaWallsModeStats;
  readonly ironOreBroken: MegaWallsModeStats;
  readonly ironSwordCrafted: MegaWallsModeStats;
  readonly junkItemsEaten: MegaWallsModeStats;
  readonly killsRanged: MegaWallsModeStats;
  readonly killsWithStrength: MegaWallsModeStats;
  readonly masterAlechmyHearts: MegaWallsModeStats;
  readonly metersFallen: MegaWallsModeStats;
  readonly metersTravelled: MegaWallsModeStats;
  readonly onFireFinalKills: MegaWallsModeStats;
  readonly onFireKills: MegaWallsModeStats;
  readonly perfectDisguises: MegaWallsModeStats;
  readonly playersHealed: MegaWallsModeStats;
  readonly potionsDrunk: MegaWallsModeStats;
  readonly potionsSplashed: MegaWallsModeStats;
  readonly primedTntKills: MegaWallsModeStats;
  readonly resistanceTimeSeconds: MegaWallsModeStats;
  readonly selfHealed: MegaWallsModeStats;
  readonly snowmenBuilt: MegaWallsModeStats;
  readonly snowmenPlayersHit: MegaWallsModeStats;
  readonly steaksEaten: MegaWallsModeStats;
  readonly strikesFromCloak: MegaWallsModeStats;
  readonly swordCrafted: MegaWallsModeStats;
  readonly timePlayed: MegaWallsModeStats;
  readonly totalDeaths: MegaWallsModeStats;
  readonly totalFinalKills: MegaWallsModeStats;
  readonly totalKills: MegaWallsModeStats;
  readonly treasuresFound: MegaWallsModeStats;
  readonly ultraPasteurizedDrank: MegaWallsModeStats;
  readonly venomStrikePoisonDamage: MegaWallsModeStats;
  readonly waterKills: MegaWallsModeStats;
  readonly witherDamage: MegaWallsModeStats;
  readonly witherKills: MegaWallsModeStats;
  readonly witherKillsLastAlive: MegaWallsModeStats;
  readonly woodChopped: MegaWallsModeStats;
  readonly kills: MegaWallsKillStats;
  readonly finalKills: MegaWallsKillStats;
  readonly activations: MegaWallsActivationStats;
  readonly blocksPlaced: MegaWallsBlocksPlacedStats;
  readonly metersWalked: MegaWallsDistanceStats;
  readonly wins: MegaWallsRecordStats;
  readonly losses: MegaWallsRecordStats;
}
```

### MegaWallsAbilitySlotStats

Per-ability-slot statistics for the `a`, `b`, and `c` slots of a kit. A subset of the activity stats relevant to ability usage.

```ts
export interface MegaWallsAbilitySlotStats {
  readonly alliesHealed: MegaWallsModeStats;
  readonly amountHealed: MegaWallsModeStats;
  readonly assists: MegaWallsModeStats;
  readonly blazesSpawned: MegaWallsModeStats;
  readonly blocksBroken: MegaWallsModeStats;
  readonly damageDealt: MegaWallsModeStats;
  readonly defenderAssists: MegaWallsModeStats;
  readonly defenderFinalAssists: MegaWallsModeStats;
  readonly defenderFinalKills: MegaWallsModeStats;
  readonly defenderKills: MegaWallsModeStats;
  readonly endurancedFinalKills: MegaWallsModeStats;
  readonly enemiesHit: MegaWallsModeStats;
  readonly finalAssists: MegaWallsModeStats;
  readonly finalAssistsAfterFinalKilled: MegaWallsModeStats;
  readonly finalAssistsMelee: MegaWallsModeStats;
  readonly finalKillsAfterFinalKilled: MegaWallsModeStats;
  readonly finalKillsAfterGrapplingHook: MegaWallsModeStats;
  readonly finalKillsBelow10Hp: MegaWallsModeStats;
  readonly finalKillsBelow5Hp: MegaWallsModeStats;
  readonly healedLowTeammates: MegaWallsModeStats;
  readonly heroismTriggers: MegaWallsModeStats;
  readonly heroismTriggersInDm: MegaWallsModeStats;
  readonly innerInkBlinds: MegaWallsModeStats;
  readonly ironHeartAbsorption: MegaWallsModeStats;
  readonly ironOreBroken: MegaWallsModeStats;
  readonly junkItemsEaten: MegaWallsModeStats;
  readonly metersTravelled: MegaWallsModeStats;
  readonly onFireFinalKills: MegaWallsModeStats;
  readonly onFireKills: MegaWallsModeStats;
  readonly perfectDisguises: MegaWallsModeStats;
  readonly playersHealed: MegaWallsModeStats;
  readonly resistanceTimeSeconds: MegaWallsModeStats;
  readonly selfHealed: MegaWallsModeStats;
  readonly totalFinalKills: MegaWallsModeStats;
  readonly totalKills: MegaWallsModeStats;
  readonly venomStrikePoisonDamage: MegaWallsModeStats;
  readonly kills: MegaWallsKillStats;
  readonly finalKills: MegaWallsKillStats;
  readonly activations: MegaWallsActivationStats;
}
```

### MegaWallsAbilityGSlotStats

Statistics for the `g` (ultimate) ability slot of a kit.

```ts
export interface MegaWallsAbilityGSlotStats {
  readonly activations: MegaWallsActivationStats;
  readonly amountHealed: MegaWallsModeStats;
  readonly darkMatterArmor: MegaWallsModeStats;
}
```

### MegaWallsKitTiers

Tier levels for a kit's `a`, `b`, `c`, `d`, and `g` skill slots. Used for the base tiers, the new tiers, and the infused tiers.

```ts
export interface MegaWallsKitTiers {
  readonly a: number;
  readonly b: number;
  readonly c: number;
  readonly d: number;
  readonly g: number;
}
```

### MegaWallsKitAbilitySlots

The per-slot ability statistics container for a kit.

```ts
export interface MegaWallsKitAbilitySlots {
  readonly a: MegaWallsAbilitySlotStats;
  readonly b: MegaWallsAbilitySlotStats;
  readonly c: MegaWallsAbilitySlotStats;
  readonly g: MegaWallsAbilityGSlotStats;
}
```

### MegaWallsKitStats

All statistics for a single kit, including its activity block, tier sets, and ability slots.

```ts
export interface MegaWallsKitStats {
  readonly stats: MegaWallsActivityStats;
  readonly tiers: MegaWallsKitTiers;
  readonly newTiers: MegaWallsKitTiers;
  readonly infused: MegaWallsKitTiers;
  readonly enderchestLevel: number;
  readonly classPoints: number;
  readonly prestigeLevel: number;
  readonly reclaimed: number;
  readonly abilitySlots: MegaWallsKitAbilitySlots;
}
```

### MegaWallsClassBreakdown

Lifetime per-class breakdown, keyed in `MegaWallsStats.byClass` by `MegaWallsClass`.

```ts
export interface MegaWallsClassBreakdown {
  readonly kills: number;
  readonly killsNew: number;
  readonly deaths: number;
  readonly deathsNew: number;
  readonly wins: number;
  readonly losses: number;
  readonly assists: number;
  readonly finalKills: number;
  readonly finalAssists: number;
  readonly faceOffWins: number;
  readonly faceOffLosses: number;
  readonly practiceWins: number;
  readonly practiceLosses: number;
}
```

### MegaWallsPeriodTierFinalKills

Final-kill counts split by tier `a` and tier `b` for a weekly or monthly period.

```ts
export interface MegaWallsPeriodTierFinalKills {
  readonly a: number;
  readonly b: number;
}
```

### MegaWallsWeeklyClassBreakdown

Per-class weekly breakdown, keyed in `MegaWallsWeeklyStats.byClass` by `MegaWallsClass`.

```ts
export interface MegaWallsWeeklyClassBreakdown {
  readonly kills: number;
  readonly deaths: number;
  readonly wins: number;
  readonly losses: number;
  readonly finalKills: number;
  readonly faceOffWins: number;
  readonly faceOffLosses: number;
  readonly practiceWins: number;
  readonly practiceLosses: number;
}
```

### MegaWallsWeeklyStats

Weekly aggregate stats plus per-class and per-tier breakdowns.

```ts
export interface MegaWallsWeeklyStats {
  readonly kills: number;
  readonly deaths: number;
  readonly wins: number;
  readonly losses: number;
  readonly finalKills: number;
  readonly faceOffWins: number;
  readonly faceOffLosses: number;
  readonly practiceWins: number;
  readonly practiceLosses: number;
  readonly byClass: Readonly<
    Record<MegaWallsClass, MegaWallsWeeklyClassBreakdown>
  >;
  readonly finalKillsByTier: MegaWallsPeriodTierFinalKills;
  readonly finalKillsByClassTier: Readonly<
    Record<MegaWallsClass, MegaWallsPeriodTierFinalKills>
  >;
}
```

### MegaWallsMonthlyStats

Monthly tier breakdowns for final kills.

```ts
export interface MegaWallsMonthlyStats {
  readonly finalKillsByTier: MegaWallsPeriodTierFinalKills;
  readonly finalKillsByClassTier: Readonly<
    Record<MegaWallsClass, MegaWallsPeriodTierFinalKills>
  >;
}
```

### MegaWallsPlays

Games-played counts by mode.

```ts
export interface MegaWallsPlays {
  readonly standard: number;
  readonly faceOff: number;
  readonly practice: number;
}
```

### MegaWallsClassSkillLevels

Skill levels for a class's `a`, `b`, `c`, `d`, and `g` slots.

```ts
export interface MegaWallsClassSkillLevels {
  readonly a: number;
  readonly b: number;
  readonly c: number;
  readonly d: number;
  readonly g: number;
}
```

### MegaWallsClassSkillFlags

Per-slot boolean flags for a class's skill slots. Used for both the `Checked4` and `Checked5` flag sets.

```ts
export interface MegaWallsClassSkillFlags {
  readonly a: boolean;
  readonly b: boolean;
  readonly c: boolean;
  readonly d: boolean;
  readonly g: boolean;
}
```

### MegaWallsPrestigeTag

A class's prestige tag settings.

```ts
export interface MegaWallsPrestigeTag {
  readonly classPointsShowcase: boolean;
  readonly type: string;
}
```

When the raw `prestige_tag` is missing or not a plain object, the fields fall back to `false` and `""`.

### MegaWallsClassProgress

Per-class progression entry, keyed in `MegaWallsStats.classes` by the raw class name string.

```ts
export interface MegaWallsClassProgress {
  readonly unlocked: boolean;
  readonly prestige: number;
  readonly enderchestRows: number;
  readonly checked4: boolean;
  readonly prestigeChecked4: boolean;
  readonly skillLevels: MegaWallsClassSkillLevels;
  readonly skillLevelsChecked4: MegaWallsClassSkillFlags;
  readonly skillLevelsChecked5: MegaWallsClassSkillFlags;
  readonly prestigeTag: MegaWallsPrestigeTag;
}
```

The `classes` record is empty (`{}`) when the raw `classes` value is absent or not a plain object; individual entries that are not plain objects are skipped.

### MegaWallsColorblindSettings

Colorblind display settings.

```ts
export interface MegaWallsColorblindSettings {
  readonly enabled: boolean;
  readonly bold: boolean;
  readonly italic: boolean;
  readonly red: string;
  readonly green: string;
  readonly blue: string;
  readonly yellow: string;
}
```

### MegaWallsLeaderboardSettings

Leaderboard preferences.

```ts
export interface MegaWallsLeaderboardSettings {
  readonly resetType: string;
  readonly class: string;
}
```

When the raw `leaderboardSettings` is missing or not a plain object, both fields fall back to `""`.

