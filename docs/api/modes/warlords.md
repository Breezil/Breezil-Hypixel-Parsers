# Warlords

Parser for the Hypixel Warlords mode. It maps the raw `stats.Battleground` block field-for-field into readonly, fully-typed objects with zero computation.

## parseWarlords

Parses a player's Warlords stats (`stats.Battleground`) into a typed object.

```ts
export function parseWarlords(
  stats: Record<string, unknown>,
): WarlordsStats | null;
```

Returns `null` when the passed object has no keys (an empty `stats.Battleground` block). All nested numeric/string/boolean fields default to their zero values when absent. Array-backed fields (`weaponInventory`, `prestiged`, `packages`) default to `[]` when the raw value is not an array.

### WarlordsStats

```ts
export interface WarlordsStats {
  readonly coins: number;
  readonly magicDust: number;
  readonly voidShards: number;
  readonly kills: number;
  readonly deaths: number;
  readonly assists: number;
  readonly wins: number;
  readonly losses: number;
  readonly winsBlu: number;
  readonly winsRed: number;
  readonly winStreak: number;
  readonly playStreak: number;
  readonly damage: number;
  readonly healing: number;
  readonly damagePrevented: number;
  readonly damageTaken: number;
  readonly penalty: number;
  readonly mvpCount: number;
  readonly powerupsCollected: number;
  readonly afkWarned: number;
  readonly brokenInventory: number;
  readonly legendaryBrokenInventory: number;
  readonly rewardInventory: number;
  readonly currentWeapon: number;
  readonly chosenClass: string;
  readonly selectedMount: string;
  readonly hints: boolean;
  readonly hotkeyMode: boolean;
  readonly hidePrestige: boolean;
  readonly firstDiscountUsed: boolean;
  readonly autoStrikeMode: boolean;
  readonly energyPowerups: boolean;
  readonly simplifiedResourcePack: boolean;
  readonly lifeLeech: WarlordsLifeLeech;
  readonly damageDelayed: WarlordsDamageDelayed;
  readonly abilities: WarlordsAbilities;
  readonly crafting: WarlordsCrafting;
  readonly repair: WarlordsRepair;
  readonly salvage: WarlordsSalvage;
  readonly modes: WarlordsModes;
  readonly classes: Readonly<Record<WarlordsClassId, WarlordsClassStats>>;
  readonly loadouts: Readonly<Record<WarlordsBaseClassId, WarlordsLoadout>>;
  readonly activeBoosts: Readonly<Record<WarlordsSpecClassId, string>>;
  readonly chatOptions: WarlordsChatOptions;
  readonly leaderboardSettings: WarlordsLeaderboardSettings;
  readonly privateGames: WarlordsPrivateGames;
  readonly weaponInventory: readonly WarlordsWeapon[];
  readonly boundWeapon: WarlordsBoundWeapons;
  readonly prestiged: readonly string[];
  readonly packages: readonly string[];
}
```

| Field                      | Type                                                     | Raw source                                                       |
| -------------------------- | -------------------------------------------------------- | ---------------------------------------------------------------- |
| `coins`                    | `number`                                                 | `coins`                                                          |
| `magicDust`                | `number`                                                 | `magic_dust`                                                     |
| `voidShards`               | `number`                                                 | `void_shards`                                                    |
| `kills`                    | `number`                                                 | `kills`                                                          |
| `deaths`                   | `number`                                                 | `deaths`                                                         |
| `assists`                  | `number`                                                 | `assists`                                                        |
| `wins`                     | `number`                                                 | `wins`                                                           |
| `losses`                   | `number`                                                 | `losses`                                                         |
| `winsBlu`                  | `number`                                                 | `wins_blu`                                                       |
| `winsRed`                  | `number`                                                 | `wins_red`                                                       |
| `winStreak`                | `number`                                                 | `win_streak`                                                     |
| `playStreak`               | `number`                                                 | `play_streak`                                                    |
| `damage`                   | `number`                                                 | `damage`                                                         |
| `healing`                  | `number`                                                 | `heal`                                                           |
| `damagePrevented`          | `number`                                                 | `damage_prevented`                                               |
| `damageTaken`              | `number`                                                 | `damage_taken`                                                   |
| `penalty`                  | `number`                                                 | `penalty`                                                        |
| `mvpCount`                 | `number`                                                 | `mvp_count`                                                      |
| `powerupsCollected`        | `number`                                                 | `powerups_collected`                                             |
| `afkWarned`                | `number`                                                 | `afk_warned`                                                     |
| `brokenInventory`          | `number`                                                 | `broken_inventory`                                               |
| `legendaryBrokenInventory` | `number`                                                 | `legendary_broken_inventory`                                     |
| `rewardInventory`          | `number`                                                 | `reward_inventory`                                               |
| `currentWeapon`            | `number`                                                 | `current_weapon`                                                 |
| `chosenClass`              | `string`                                                 | `chosen_class`                                                   |
| `selectedMount`            | `string`                                                 | `selected_mount`                                                 |
| `hints`                    | `boolean`                                                | `hints`                                                          |
| `hotkeyMode`               | `boolean`                                                | `hotkeymode`                                                     |
| `hidePrestige`             | `boolean`                                                | `hide_prestige`                                                  |
| `firstDiscountUsed`        | `boolean`                                                | `first-discount-used`                                            |
| `autoStrikeMode`           | `boolean`                                                | `autostrikemode`                                                 |
| `energyPowerups`           | `boolean`                                                | `energyPowerups`                                                 |
| `simplifiedResourcePack`   | `boolean`                                                | `simplifiedresourcepack`                                         |
| `lifeLeech`                | `WarlordsLifeLeech`                                      | `life_leeched*` fields                                           |
| `damageDelayed`            | `WarlordsDamageDelayed`                                  | `damage_delayed*` fields                                         |
| `abilities`                | `WarlordsAbilities`                                      | ability fields                                                   |
| `crafting`                 | `WarlordsCrafting`                                       | crafting fields                                                  |
| `repair`                   | `WarlordsRepair`                                         | `repaired*` fields                                               |
| `salvage`                  | `WarlordsSalvage`                                        | `salvaged_*` fields                                              |
| `modes`                    | `WarlordsModes`                                          | per-mode fields                                                  |
| `classes`                  | `Readonly<Record<WarlordsClassId, WarlordsClassStats>>`  | per-class fields                                                 |
| `loadouts`                 | `Readonly<Record<WarlordsBaseClassId, WarlordsLoadout>>` | `<class>_*` loadout fields                                       |
| `activeBoosts`             | `Readonly<Record<WarlordsSpecClassId, string>>`          | `active_boost.<spec>`                                            |
| `chatOptions`              | `WarlordsChatOptions`                                    | `chat_option_*` fields                                           |
| `leaderboardSettings`      | `WarlordsLeaderboardSettings`                            | `leaderboardSettings`                                            |
| `privateGames`             | `WarlordsPrivateGames`                                   | `privategames`                                                   |
| `weaponInventory`          | `readonly WarlordsWeapon[]`                              | `weapon_inventory` (object entries only; `[]` when not an array) |
| `boundWeapon`              | `WarlordsBoundWeapons`                                   | `bound_weapon`                                                   |
| `prestiged`                | `readonly string[]`                                      | `prestiged` (string entries only; `[]` when not an array)        |
| `packages`                 | `readonly string[]`                                      | `packages` (string entries only; `[]` when not an array)         |

## Key types

The `classes`, `loadouts`, and `activeBoosts` records are keyed by string-literal union types derived from the Warlords class roster.

```ts
type WarlordsClassId =
  | "pyromancer"
  | "mage"
  | "thunderlord"
  | "shaman"
  | "earthwarden"
  | "aquamancer"
  | "paladin"
  | "avenger"
  | "warrior"
  | "defender"
  | "cryomancer"
  | "crusader"
  | "berserker"
  | "protector"
  | "revenant"
  | "spiritguard";

type WarlordsBaseClassId = "mage" | "warrior" | "paladin" | "shaman";

type WarlordsMageSpec = "pyromancer" | "cryomancer" | "aquamancer";
type WarlordsWarriorSpec = "berserker" | "defender" | "revenant";
type WarlordsPaladinSpec = "avenger" | "crusader" | "protector";
type WarlordsShamanSpec = "thunderlord" | "earthwarden" | "spiritguard";

type WarlordsSpecClassId =
  | WarlordsMageSpec
  | WarlordsWarriorSpec
  | WarlordsPaladinSpec
  | WarlordsShamanSpec;
```

These helper type aliases are internal (not exported); they are shown here to document the record key sets used by `WarlordsStats`.

### WarlordsClassStats

Per-class aggregate stats. One entry exists for each `WarlordsClassId`.

```ts
export interface WarlordsClassStats {
  readonly wins: number;
  readonly losses: number;
  readonly gamesPlayed: number;
  readonly damage: number;
  readonly healing: number;
  readonly damagePrevented: number;
}
```

| Field             | Raw source                 |
| ----------------- | -------------------------- |
| `wins`            | `wins_<class>`             |
| `losses`          | `losses_<class>`           |
| `gamesPlayed`     | `<class>_plays`            |
| `damage`          | `damage_<class>`           |
| `healing`         | `heal_<class>`             |
| `damagePrevented` | `damage_prevented_<class>` |

### WarlordsLoadout

Per-base-class loadout configuration. One entry exists for each `WarlordsBaseClassId`.

```ts
export interface WarlordsLoadout {
  readonly spec: string;
  readonly armorSelection: number;
  readonly helmetSelection: number;
  readonly cooldown: number;
  readonly critChance: number;
  readonly critMultiplier: number;
  readonly energy: number;
  readonly health: number;
  readonly skill1: number;
  readonly skill2: number;
  readonly skill3: number;
  readonly skill4: number;
  readonly skill5: number;
}
```

| Field              | Raw source                           |
| ------------------ | ------------------------------------ |
| `spec`             | `<class>_spec`                       |
| `armorSelection`   | `<class>_armor_selection`            |
| `helmetSelection`  | `<class>_helmet_selection`           |
| `cooldown`         | `<class>_cooldown`                   |
| `critChance`       | `<class>_critchance`                 |
| `critMultiplier`   | `<class>_critmultiplier`             |
| `energy`           | `<class>_energy`                     |
| `health`           | `<class>_health`                     |
| `skill1`..`skill5` | `<class>_skill1` .. `<class>_skill5` |

### WarlordsWeapon

A single weapon entry within `weaponInventory`.

```ts
export interface WarlordsWeapon {
  readonly id: number;
  readonly spec: WarlordsWeaponSpec;
  readonly material: string;
  readonly category: string;
  readonly ability: number;
  readonly abilityBoost: number;
  readonly damage: number;
  readonly energy: number;
  readonly chance: number;
  readonly multiplier: number;
  readonly health: number;
  readonly cooldown: number;
  readonly movement: number;
  readonly crafted: boolean;
  readonly playStreak: boolean;
  readonly upgradeMax: number;
  readonly upgradeTimes: number;
}
```

Each field maps to the raw key of the same name on the weapon entry. `spec` is read from the nested `spec` object; `crafted` maps to `crafted` and `playStreak` to `playStreak`.

### WarlordsWeaponSpec

The nested `spec` object of a weapon.

```ts
export interface WarlordsWeaponSpec {
  readonly spec: number;
  readonly playerClass: number;
}
```

| Field         | Raw source         |
| ------------- | ------------------ |
| `spec`        | `spec.spec`        |
| `playerClass` | `spec.playerClass` |

### WarlordsModes

Per-game-mode stat groups.

```ts
export interface WarlordsModes {
  readonly captureTheFlag: WarlordsCaptureTheFlagStats;
  readonly domination: WarlordsDominationStats;
  readonly teamDeathmatch: WarlordsTeamDeathmatchStats;
}
```

### WarlordsCaptureTheFlagStats

```ts
export interface WarlordsCaptureTheFlagStats {
  readonly kills: number;
  readonly wins: number;
  readonly winsTeamA: number;
  readonly winsTeamB: number;
  readonly winsBlu: number;
  readonly winsRed: number;
  readonly flagConquerSelf: number;
  readonly flagConquerTeam: number;
  readonly flagReturns: number;
}
```

| Field             | Raw source                |
| ----------------- | ------------------------- |
| `kills`           | `kills_capturetheflag`    |
| `wins`            | `wins_capturetheflag`     |
| `winsTeamA`       | `wins_capturetheflag_a`   |
| `winsTeamB`       | `wins_capturetheflag_b`   |
| `winsBlu`         | `wins_capturetheflag_blu` |
| `winsRed`         | `wins_capturetheflag_red` |
| `flagConquerSelf` | `flag_conquer_self`       |
| `flagConquerTeam` | `flag_conquer_team`       |
| `flagReturns`     | `flag_returns`            |

### WarlordsDominationStats

```ts
export interface WarlordsDominationStats {
  readonly kills: number;
  readonly wins: number;
  readonly winsTeamA: number;
  readonly winsTeamB: number;
  readonly winsBlu: number;
  readonly winsRed: number;
  readonly pointCaptures: number;
  readonly pointDefends: number;
  readonly totalScore: number;
}
```

| Field           | Raw source               |
| --------------- | ------------------------ |
| `kills`         | `kills_domination`       |
| `wins`          | `wins_domination`        |
| `winsTeamA`     | `wins_domination_a`      |
| `winsTeamB`     | `wins_domination_b`      |
| `winsBlu`       | `wins_domination_blu`    |
| `winsRed`       | `wins_domination_red`    |
| `pointCaptures` | `dom_point_captures`     |
| `pointDefends`  | `dom_point_defends`      |
| `totalScore`    | `total_domination_score` |

### WarlordsTeamDeathmatchStats

```ts
export interface WarlordsTeamDeathmatchStats {
  readonly kills: number;
  readonly wins: number;
  readonly winsTeamA: number;
  readonly winsTeamB: number;
  readonly winsBlu: number;
  readonly winsRed: number;
}
```

| Field       | Raw source                |
| ----------- | ------------------------- |
| `kills`     | `kills_teamdeathmatch`    |
| `wins`      | `wins_teamdeathmatch`     |
| `winsTeamA` | `wins_teamdeathmatch_a`   |
| `winsTeamB` | `wins_teamdeathmatch_b`   |
| `winsBlu`   | `wins_teamdeathmatch_blu` |
| `winsRed`   | `wins_teamdeathmatch_red` |

### WarlordsLifeLeech

```ts
export interface WarlordsLifeLeech {
  readonly total: number;
  readonly warrior: number;
  readonly berserker: number;
}
```

| Field       | Raw source               |
| ----------- | ------------------------ |
| `total`     | `life_leeched`           |
| `warrior`   | `life_leeched_warrior`   |
| `berserker` | `life_leeched_berserker` |

### WarlordsDamageDelayed

```ts
export interface WarlordsDamageDelayed {
  readonly total: number;
  readonly shaman: number;
  readonly spiritguard: number;
}
```

| Field         | Raw source                   |
| ------------- | ---------------------------- |
| `total`       | `damage_delayed`             |
| `shaman`      | `damage_delayed_shaman`      |
| `spiritguard` | `damage_delayed_spiritguard` |

### WarlordsAbilities

```ts
export interface WarlordsAbilities {
  readonly arcaneShatter: number;
  readonly burstChain: number;
  readonly dimensionalWarp: number;
  readonly flameBreath: number;
  readonly meteor: number;
}
```

| Field             | Raw source         |
| ----------------- | ------------------ |
| `arcaneShatter`   | `arcane_shatter`   |
| `burstChain`      | `burst_chain`      |
| `dimensionalWarp` | `dimensional_warp` |
| `flameBreath`     | `flame_breath`     |
| `meteor`          | `meteor`           |

### WarlordsCrafting

```ts
export interface WarlordsCrafting {
  readonly crafted: number;
  readonly craftedRare: number;
  readonly craftedEpic: number;
  readonly craftedLegendary: number;
  readonly reroll: number;
  readonly rerollCommon: number;
  readonly rerollRare: number;
  readonly rerollEpic: number;
  readonly rerollLegendary: number;
  readonly upgradeCrafted: number;
  readonly upgradeCraftedEpic: number;
  readonly upgradeCraftedLegendary: number;
  readonly upgradeRandom: number;
  readonly upgradeRandomEpic: number;
  readonly upgradePlayStreak: number;
  readonly upgradePlayStreakEpic: number;
  readonly upgradePlayStreakLegendary: number;
  readonly unlockCrafted: number;
  readonly unlockCraftedLegendary: number;
  readonly unlockPlayStreak: number;
  readonly unlockPlayStreakLegendary: number;
}
```

| Field                        | Raw source                     |
| ---------------------------- | ------------------------------ |
| `crafted`                    | `crafted`                      |
| `craftedRare`                | `crafted_rare`                 |
| `craftedEpic`                | `crafted_epic`                 |
| `craftedLegendary`           | `crafted_legendary`            |
| `reroll`                     | `reroll`                       |
| `rerollCommon`               | `reroll_common`                |
| `rerollRare`                 | `reroll_rare`                  |
| `rerollEpic`                 | `reroll_epic`                  |
| `rerollLegendary`            | `reroll_legendary`             |
| `upgradeCrafted`             | `upgrade_crafted`              |
| `upgradeCraftedEpic`         | `upgrade_crafted_epic`         |
| `upgradeCraftedLegendary`    | `upgrade_crafted_legendary`    |
| `upgradeRandom`              | `upgrade_random`               |
| `upgradeRandomEpic`          | `upgrade_random_epic`          |
| `upgradePlayStreak`          | `upgrade_playstreak`           |
| `upgradePlayStreakEpic`      | `upgrade_playstreak_epic`      |
| `upgradePlayStreakLegendary` | `upgrade_playstreak_legendary` |
| `unlockCrafted`              | `unlock_crafted`               |
| `unlockCraftedLegendary`     | `unlock_crafted_legendary`     |
| `unlockPlayStreak`           | `unlock_playstreak`            |
| `unlockPlayStreakLegendary`  | `unlock_playstreak_legendary`  |

### WarlordsRepair

```ts
export interface WarlordsRepair {
  readonly total: number;
  readonly common: number;
  readonly rare: number;
  readonly epic: number;
  readonly legendary: number;
}
```

| Field       | Raw source           |
| ----------- | -------------------- |
| `total`     | `repaired`           |
| `common`    | `repaired_common`    |
| `rare`      | `repaired_rare`      |
| `epic`      | `repaired_epic`      |
| `legendary` | `repaired_legendary` |

### WarlordsSalvage

```ts
export interface WarlordsSalvage {
  readonly weapons: number;
  readonly weaponsCommon: number;
  readonly weaponsRare: number;
  readonly weaponsEpic: number;
  readonly weaponsLegendary: number;
  readonly dustReward: number;
  readonly shardsReward: number;
}
```

| Field              | Raw source                   |
| ------------------ | ---------------------------- |
| `weapons`          | `salvaged_weapons`           |
| `weaponsCommon`    | `salvaged_weapons_common`    |
| `weaponsRare`      | `salvaged_weapons_rare`      |
| `weaponsEpic`      | `salvaged_weapons_epic`      |
| `weaponsLegendary` | `salvaged_weapons_legendary` |
| `dustReward`       | `salvaged_dust_reward`       |
| `shardsReward`     | `salvaged_shards_reward`     |

### WarlordsChatOptions

```ts
export interface WarlordsChatOptions {
  readonly damage: string;
  readonly errorMessages: string;
  readonly heal: string;
  readonly killFeed: string;
  readonly misc: string;
}
```

| Field           | Raw source                   |
| --------------- | ---------------------------- |
| `damage`        | `chat_option_damage`         |
| `errorMessages` | `chat_option_error_messages` |
| `heal`          | `chat_option_heal`           |
| `killFeed`      | `chat_option_kill_feed`      |
| `misc`          | `chat_option_misc`           |

### WarlordsLeaderboardSettings

Read from the raw `leaderboardSettings` object.

```ts
export interface WarlordsLeaderboardSettings {
  readonly mode: string;
  readonly resetType: string;
}
```

| Field       | Raw source                      |
| ----------- | ------------------------------- |
| `mode`      | `leaderboardSettings.mode`      |
| `resetType` | `leaderboardSettings.resetType` |

### WarlordsPrivateGames

Read from the raw `privategames` object.

```ts
export interface WarlordsPrivateGames {
  readonly teamSelector: boolean;
  readonly noRegeneration: boolean;
  readonly nobleSteeds: boolean;
  readonly weapon: string;
  readonly level: string;
  readonly horseSpeed: string;
  readonly health: string;
  readonly points: string;
}
```

| Field            | Raw source        |
| ---------------- | ----------------- |
| `teamSelector`   | `team_selector`   |
| `noRegeneration` | `no_regeneration` |
| `nobleSteeds`    | `noble_steeds`    |
| `weapon`         | `weapon`          |
| `level`          | `level`           |
| `horseSpeed`     | `horse_speed`     |
| `health`         | `health`          |
| `points`         | `points`          |

### WarlordsBoundWeapons

Bound weapon ids per base class and spec, read from the raw `bound_weapon` object.

```ts
export interface WarlordsBoundWeapons {
  readonly mage: Readonly<Record<WarlordsMageSpec, number>>;
  readonly warrior: Readonly<Record<WarlordsWarriorSpec, number>>;
  readonly paladin: Readonly<Record<WarlordsPaladinSpec, number>>;
  readonly shaman: Readonly<Record<WarlordsShamanSpec, number>>;
}
```

| Field     | Keys                                        | Raw source                    |
| --------- | ------------------------------------------- | ----------------------------- |
| `mage`    | `pyromancer`, `cryomancer`, `aquamancer`    | `bound_weapon.mage.<spec>`    |
| `warrior` | `berserker`, `defender`, `revenant`         | `bound_weapon.warrior.<spec>` |
| `paladin` | `avenger`, `crusader`, `protector`          | `bound_weapon.paladin.<spec>` |
| `shaman`  | `thunderlord`, `earthwarden`, `spiritguard` | `bound_weapon.shaman.<spec>`  |

