# Murder Mystery

Parser for Hypixel Murder Mystery statistics. Like every parser in `@breezil/hypixel-parsers`, it is strict-raw: it mirrors the raw API field-for-field and performs zero computation (no ratios, levels, or derived values).

## parseMurderMystery

Parses a player's Murder Mystery stats (`stats.MurderMystery`) into a typed object.

```ts
export function parseMurderMystery(
  stats: Record<string, unknown>,
): MurderMysteryStats | null;
```

### Returned type

`MurderMysteryStats` extends `MurderMysteryModeStats`, so it carries every field of the shared mode-stat block (parsed from the unsuffixed raw keys) plus the Murder-Mystery-specific fields below.

```ts
export interface MurderMysteryStats extends MurderMysteryModeStats {
  readonly coins: number;
  readonly grantedChests: number;
  readonly chests: number;
  readonly christmasChests: number;
  readonly easterChests: number;
  readonly halloweenChests: number;
  readonly lunarChests: number;
  readonly openedChests: number;
  readonly openedCommons: number;
  readonly openedEpics: number;
  readonly openedLegendaries: number;
  readonly openedRares: number;
  readonly spookyOpenAchievements: number;
  readonly activeAnimatedHat: string;
  readonly activeDeathCry: string;
  readonly activeGesture: string;
  readonly activeGravestone: string;
  readonly activeKillNote: string;
  readonly activeKnifeSkin: string;
  readonly activeLastWords: string;
  readonly activeProjectileTrail: string;
  readonly activeProjectileTrailLegacy: string;
  readonly activeVictoryDance: string;
  readonly activePrefixIcon: string;
  readonly activePrefixScheme: string;
  readonly activePrefixStat: string;
  readonly shopSort: string;
  readonly shopSortEnableOwnedFirst: boolean;
  readonly doEmblemsInGame: boolean;
  readonly doHeartbeatSounds: boolean;
  readonly doHints: boolean;
  readonly doPrefixesInGame: boolean;
  readonly convertedEmblemIcons: boolean;
  readonly showQueueBook: boolean;
  readonly chestHistory: readonly string[];
  readonly chestHistoryNew: readonly string[];
  readonly mapsConsumablesUsed: readonly string[];
  readonly mapsMurdererTrapKills: readonly string[];
  readonly books: readonly string[];
  readonly packages: readonly string[];
  readonly emblem: MurderMysteryEmblem;
  readonly descent: MurderMysteryDescent;
  readonly knifeSkinPrestiges: MurderMysteryKnifeSkinPrestiges;
  readonly leaderboardSettings: MurderMysteryLeaderboardSettings;
  readonly settings: MurderMysterySettings;
  readonly assassinsHotbarLayout: MurderMysteryHotbarLayout;
  readonly classicHotbarLayout: MurderMysteryHotbarLayout;
  readonly freeEventKeys: MurderMysteryFreeEventKeys;
  readonly gamemodes: MurderMysteryGamemodeBreakdown;
  readonly maps: MurderMysteryMaps;
}
```

#### Field reference

| Field                         | Raw key                           | Notes                                |
| ----------------------------- | --------------------------------- | ------------------------------------ |
| `coins`                       | `coins`                           | Murder Mystery coin balance.         |
| `grantedChests`               | `granted_chests`                  | Chests granted to the player.        |
| `chests`                      | `mm_chests`                       | Chest count.                         |
| `christmasChests`             | `mm_christmas_chests`             | Christmas chest count.               |
| `easterChests`                | `mm_easter_chests`                | Easter chest count.                  |
| `halloweenChests`             | `mm_halloween_chests`             | Halloween chest count.               |
| `lunarChests`                 | `mm_lunar_chests`                 | Lunar chest count.                   |
| `openedChests`                | `MurderMystery_openedChests`      | Total chests opened.                 |
| `openedCommons`               | `MurderMystery_openedCommons`     | Common items opened.                 |
| `openedEpics`                 | `MurderMystery_openedEpics`       | Epic items opened.                   |
| `openedLegendaries`           | `MurderMystery_openedLegendaries` | Legendary items opened.              |
| `openedRares`                 | `MurderMystery_openedRares`       | Rare items opened.                   |
| `spookyOpenAchievements`      | `spooky_open_ach`                 | Spooky open achievement count.       |
| `activeAnimatedHat`           | `active_animated_hat`             | Active animated hat cosmetic.        |
| `activeDeathCry`              | `active_deathcry`                 | Active death cry cosmetic.           |
| `activeGesture`               | `active_gesture`                  | Active gesture cosmetic.             |
| `activeGravestone`            | `active_gravestone`               | Active gravestone cosmetic.          |
| `activeKillNote`              | `active_kill_note`                | Active kill note cosmetic.           |
| `activeKnifeSkin`             | `active_knife_skin`               | Active knife skin cosmetic.          |
| `activeLastWords`             | `active_last_words`               | Active last words cosmetic.          |
| `activeProjectileTrail`       | `active_projectile_trail`         | Active projectile trail cosmetic.    |
| `activeProjectileTrailLegacy` | `activeProjectileTrail`           | Legacy projectile trail key.         |
| `activeVictoryDance`          | `active_victory_dance`            | Active victory dance cosmetic.       |
| `activePrefixIcon`            | `active_prefixicon`               | Active prefix icon.                  |
| `activePrefixScheme`          | `active_prefixscheme`             | Active prefix color scheme.          |
| `activePrefixStat`            | `active_prefixstat`               | Active prefix stat.                  |
| `shopSort`                    | `shop_sort`                       | Shop sort preference.                |
| `shopSortEnableOwnedFirst`    | `shop_sort_enable_owned_first`    | Whether owned items sort first.      |
| `doEmblemsInGame`             | `doEmblemsInGame`                 | Whether emblems show in game.        |
| `doHeartbeatSounds`           | `doHeartbeatSounds`               | Whether heartbeat sounds play.       |
| `doHints`                     | `doHints`                         | Whether hints are shown.             |
| `doPrefixesInGame`            | `doPrefixesInGame`                | Whether prefixes show in game.       |
| `convertedEmblemIcons`        | `convertedEmblemIcons`            | Whether emblem icons were converted. |
| `showQueueBook`               | `showqueuebook`                   | Whether the queue book is shown.     |
| `chestHistory`                | `mm_chest_history`                | Chest history entries.               |
| `chestHistoryNew`             | `chest_history_new`               | New-format chest history entries.    |
| `mapsConsumablesUsed`         | `mapsConsumablesUsed`             | Maps where consumables were used.    |
| `mapsMurdererTrapKills`       | `mapsMurdererTrapKills`           | Maps with murderer trap kills.       |
| `books`                       | `murdermystery_books`             | Owned books.                         |
| `packages`                    | `packages`                        | Owned packages.                      |
| `emblem`                      | `emblem`                          | Emblem cosmetic block.               |
| `descent`                     | `descent`                         | Descent progression block.           |
| `knifeSkinPrestiges`          | `knifeSkinPrestiges`              | Knife skin prestige block.           |
| `leaderboardSettings`         | `leaderboardSettings`             | Leaderboard display settings.        |
| `settings`                    | `settings`                        | Player settings block.               |
| `assassinsHotbarLayout`       | `assassins`                       | Assassins mode hotbar layout.        |
| `classicHotbarLayout`         | `classic`                         | Classic mode hotbar layout.          |
| `freeEventKeys`               | (top-level keys)                  | Per-event free key flags.            |
| `gamemodes`                   | (suffixed keys)                   | Per-gamemode stat breakdown.         |
| `maps`                        | (suffixed keys)                   | Per-map stat breakdown.              |

## Shared mode-stat block

`MurderMysteryModeStats` is the common stat shape reused for the top-level totals, every per-gamemode entry, and every per-map entry. Each field maps from the raw key shown, optionally appended with a suffix (gamemode and/or map) when read as part of a breakdown.

```ts
export interface MurderMysteryModeStats {
  readonly alphaWins: number;
  readonly bowKills: number;
  readonly coinsPickedUp: number;
  readonly deaths: number;
  readonly detectiveWins: number;
  readonly games: number;
  readonly kills: number;
  readonly killsAsAlpha: number;
  readonly killsAsInfected: number;
  readonly killsAsMurderer: number;
  readonly killsAsSurvivor: number;
  readonly knifeKills: number;
  readonly lastOneAlive: number;
  readonly longestTimeAsSurvivorSeconds: number;
  readonly murdererWins: number;
  readonly quickestDetectiveWinTimeSeconds: number;
  readonly quickestMurdererWinTimeSeconds: number;
  readonly quickestShowdownWinTimeSeconds: number;
  readonly showdownPotg: number;
  readonly suicides: number;
  readonly survivorWins: number;
  readonly thrownKnifeKills: number;
  readonly totalTimeSurvivedSeconds: number;
  readonly trapKills: number;
  readonly wasHero: number;
  readonly wins: number;
}
```

| Field                             | Raw base key                          |
| --------------------------------- | ------------------------------------- |
| `alphaWins`                       | `alpha_wins`                          |
| `bowKills`                        | `bow_kills`                           |
| `coinsPickedUp`                   | `coins_pickedup`                      |
| `deaths`                          | `deaths`                              |
| `detectiveWins`                   | `detective_wins`                      |
| `games`                           | `games`                               |
| `kills`                           | `kills`                               |
| `killsAsAlpha`                    | `kills_as_alpha`                      |
| `killsAsInfected`                 | `kills_as_infected`                   |
| `killsAsMurderer`                 | `kills_as_murderer`                   |
| `killsAsSurvivor`                 | `kills_as_survivor`                   |
| `knifeKills`                      | `knife_kills`                         |
| `lastOneAlive`                    | `last_one_alive`                      |
| `longestTimeAsSurvivorSeconds`    | `longest_time_as_survivor_seconds`    |
| `murdererWins`                    | `murderer_wins`                       |
| `quickestDetectiveWinTimeSeconds` | `quickest_detective_win_time_seconds` |
| `quickestMurdererWinTimeSeconds`  | `quickest_murderer_win_time_seconds`  |
| `quickestShowdownWinTimeSeconds`  | `quickest_showdown_win_time_seconds`  |
| `showdownPotg`                    | `showdown_potg`                       |
| `suicides`                        | `suicides`                            |
| `survivorWins`                    | `survivor_wins`                       |
| `thrownKnifeKills`                | `thrown_knife_kills`                  |
| `totalTimeSurvivedSeconds`        | `total_time_survived_seconds`         |
| `trapKills`                       | `trap_kills`                          |
| `wasHero`                         | `was_hero`                            |
| `wins`                            | `wins`                                |

When read for a gamemode or map, the base key is suffixed with the gamemode and/or map identifier (for example `wins_MURDER_CLASSIC` or `wins_ancient_tomb_MURDER_CLASSIC`). The top-level `MurderMysteryStats` block uses the unsuffixed base keys.

## Gamemode breakdown

`MurderMysteryGamemodeBreakdown` maps each Murder Mystery gamemode to a `MurderMysteryModeStats` block.

```ts
export type MurderMysteryGamemodeBreakdown = Readonly<
  Record<keyof typeof GAMEMODE_SUFFIX, MurderMysteryModeStats>
>;
```

Keys and their raw suffixes:

| Key         | Raw suffix         |
| ----------- | ------------------ |
| `assassins` | `MURDER_ASSASSINS` |
| `classic`   | `MURDER_CLASSIC`   |
| `doubleUp`  | `MURDER_DOUBLE_UP` |
| `hardcore`  | `MURDER_HARDCORE`  |
| `infection` | `MURDER_INFECTION` |
| `showdown`  | `MURDER_SHOWDOWN`  |

## Map breakdown

`MurderMysteryMapStats` extends `MurderMysteryModeStats` with a nested per-gamemode breakdown scoped to that map.

```ts
export interface MurderMysteryMapStats extends MurderMysteryModeStats {
  readonly gamemodes: MurderMysteryGamemodeBreakdown;
}
```

`MurderMysteryMaps` maps each map name to a `MurderMysteryMapStats` block.

```ts
export type MurderMysteryMaps = Readonly<
  Record<keyof typeof MAP_SUFFIX, MurderMysteryMapStats>
>;
```

Keys and their raw suffixes:

| Key                | Raw suffix           |
| ------------------ | -------------------- |
| `ancientTomb`      | `ancient_tomb`       |
| `aquarium`         | `aquarium`           |
| `archives`         | `archives`           |
| `archivesTopFloor` | `archives_top_floor` |
| `cattleridgeFarm`  | `cattleridge_farm`   |
| `cruiseShip`       | `cruise_ship`        |
| `darkfall`         | `darkfall`           |
| `easterWorld`      | `easter_world`       |
| `goldRush`         | `gold_rush`          |
| `headquarters`     | `headquarters`       |
| `hollywood`        | `hollywood`          |
| `hypixelWorld`     | `hypixel_world`      |
| `library`          | `library`            |
| `mountain`         | `mountain`           |
| `sanPeratico`      | `san_peratico`       |
| `sanPeraticoV2`    | `san_peratico_v2`    |
| `skywayPier`       | `skyway_pier`        |
| `snowfall`         | `snowfall`           |
| `snowglobe`        | `snowglobe`          |
| `spookyMansion`    | `spooky_mansion`     |
| `subway`           | `subway`             |
| `towerfall`        | `towerfall`          |
| `transport`        | `transport`          |
| `villa`            | `villa`              |
| `widowsDen`        | `widow's_den`        |

## Emblem

```ts
export interface MurderMysteryEmblem {
  readonly colorUnlocked: MurderMysteryEmblemColors;
  readonly selectedColor: string;
  readonly selectedIcon: string;
}
```

Built from the raw `emblem` object. `selectedColor` maps from `selected_color` and `selectedIcon` from `selected_icon`. `colorUnlocked` is built from the nested `color_unlocked` object.

```ts
export type MurderMysteryEmblemColors = Readonly<
  Record<keyof typeof EMBLEM_COLORS, boolean>
>;
```

Keys and their raw keys:

| Key           | Raw key        |
| ------------- | -------------- |
| `aqua`        | `aqua`         |
| `black`       | `black`        |
| `blue`        | `blue`         |
| `darkAqua`    | `dark_aqua`    |
| `darkBlue`    | `dark_blue`    |
| `darkGray`    | `dark_gray`    |
| `darkGreen`   | `dark_green`   |
| `darkPurple`  | `dark_purple`  |
| `darkRed`     | `dark_red`     |
| `gray`        | `gray`         |
| `green`       | `green`        |
| `lightPurple` | `light_purple` |
| `red`         | `red`          |
| `yellow`      | `yellow`       |

## Hotbar layout

`MurderMysteryHotbarLayout` maps each of the nine hotbar slots to a string. Used by both `assassinsHotbarLayout` (raw `assassins` object) and `classicHotbarLayout` (raw `classic` object).

```ts
export type MurderMysteryHotbarLayout = Readonly<
  Record<keyof typeof HOTBAR_SLOT_KEYS, string>
>;
```

Keys `slot0` through `slot8` map from raw string keys `"0"` through `"8"`.

## Free event keys

`MurderMysteryFreeEventKeys` maps each free-event key flag to a boolean, read from the top-level Murder Mystery object.

```ts
export type MurderMysteryFreeEventKeys = Readonly<
  Record<keyof typeof FREE_EVENT_KEY_KEYS, boolean>
>;
```

Keys and their raw keys:

| Key             | Raw key                                   |
| --------------- | ----------------------------------------- |
| `christmas2019` | `free_event_key_mm_christmas_chests_2019` |
| `christmas2020` | `free_event_key_mm_christmas_chests_2020` |
| `christmas2021` | `free_event_key_mm_christmas_chests_2021` |
| `christmas2022` | `free_event_key_mm_christmas_chests_2022` |
| `christmas2023` | `free_event_key_mm_christmas_chests_2023` |
| `easter2020`    | `free_event_key_mm_easter_chests_2020`    |
| `easter2021`    | `free_event_key_mm_easter_chests_2021`    |
| `easter2022`    | `free_event_key_mm_easter_chests_2022`    |
| `easter2023`    | `free_event_key_mm_easter_chests_2023`    |
| `halloween2019` | `free_event_key_mm_halloween_chests_2019` |
| `halloween2020` | `free_event_key_mm_halloween_chests_2020` |
| `halloween2021` | `free_event_key_mm_halloween_chests_2021` |
| `halloween2022` | `free_event_key_mm_halloween_chests_2022` |
| `halloween2023` | `free_event_key_mm_halloween_chests_2023` |
| `lunar2020`     | `free_event_key_mm_lunar_chests_2020`     |

## Settings

```ts
export interface MurderMysterySettings {
  readonly doPrefixesInGame: boolean;
}
```

Built from the raw `settings` object's `doPrefixesInGame` field.

## Knife skin prestiges

```ts
export interface MurderMysteryKnifeSkinPrestiges {
  readonly usePrestige: readonly string[];
  readonly experience: MurderMysteryKnifeSkinExperience;
}
```

Built from the raw `knifeSkinPrestiges` object. `usePrestige` maps from the raw `usePrestige` array, and `experience` is built from the nested `xp` object.

```ts
export type MurderMysteryKnifeSkinExperience = Readonly<
  Record<keyof typeof KNIFE_SKIN_XP_KEYS, number>
>;
```

Keys and their raw keys:

| Key                  | Raw key                |
| -------------------- | ---------------------- |
| `tenThousandSpoons`  | `10000_spoons`         |
| `apple`              | `apple`                |
| `bastedTurkey`       | `basted_turkey`        |
| `blazeStick`         | `blaze_stick`          |
| `bloodyBrick`        | `bloody_brick`         |
| `bone`               | `bone`                 |
| `campfireLeftovers`  | `campfire_leftovers`   |
| `carrotOnStick`      | `carrot_on_stick`      |
| `cheapo`             | `cheapo`               |
| `cheese`             | `cheese`               |
| `chewedBush`         | `chewed_bush`          |
| `diamondShovel`      | `diamond_shovel`       |
| `doubleDeathScythe`  | `double_death_scythe`  |
| `dragonEgg`          | `dragon_egg`           |
| `earthenDagger`      | `earthen_dagger`       |
| `easterBasket`       | `easter_basket`        |
| `farmingImplement`   | `farming_implement`    |
| `feather`            | `feather`              |
| `fragilePlant`       | `fragile_plant`        |
| `frisbee`            | `frisbee`              |
| `glisteningMelon`    | `glistening_melon`     |
| `goldDigger`         | `gold_digger`          |
| `grilledSteak`       | `grilled_steak`        |
| `grimoire`           | `grimoire`             |
| `iceShard`           | `ice_shard`            |
| `mouseTrap`          | `mouse_trap`           |
| `mvp`                | `mvp`                  |
| `prickly`            | `prickly`              |
| `pumpkinPie`         | `pumpkin_pie`          |
| `rudolphsNose`       | `rudolphs_nose`        |
| `rudolphsSnack`      | `rudolphs_snack`       |
| `salmon`             | `salmon`               |
| `scythe`             | `scythe`               |
| `shears`             | `shears`               |
| `shinySnack`         | `shiny_snack`          |
| `shovel`             | `shovel`               |
| `shred`              | `shred`                |
| `sprayPaintedShovel` | `spray_painted_shovel` |
| `stake`              | `stake`                |
| `stick`              | `stick`                |
| `stickWithHat`       | `stick_with_hat`       |
| `sweetTreat`         | `sweet_treat`          |
| `timber`             | `timber`               |
| `vip`                | `vip`                  |
| `woodAxe`            | `wood_axe`             |

## Descent

`MurderMysteryDescentItem` is the per-item progression shape.

```ts
export interface MurderMysteryDescentItem {
  readonly claimed: boolean;
  readonly progress: number;
}
```

Each item maps `claimed` from the raw `claimed` field and `progress` from the raw `progress` field.

`MurderMysteryDescent` maps each descent item name to a `MurderMysteryDescentItem`, read from the raw `descent` object.

```ts
export type MurderMysteryDescent = Readonly<
  Record<keyof typeof DESCENT_ITEMS, MurderMysteryDescentItem>
>;
```

Keys and their raw keys:

| Key                   | Raw key               |
| --------------------- | --------------------- |
| `armed`               | `Armed`               |
| `bloodLust`           | `Bloodlust`           |
| `bountyHunter`        | `Bountyhunter`        |
| `cleanJob`            | `Cleanjob`            |
| `collateral`          | `Collateral`          |
| `contagionContained`  | `Contagioncontained`  |
| `cornucopia`          | `Cornucopia`          |
| `crimsonJoy`          | `Crimsonjoy`          |
| `crowdControl`        | `Crowdcontrol`        |
| `cuttingTheRoots`     | `Cuttingtheroots`     |
| `deadlyPrecision`     | `Deadlyprecision`     |
| `deadOrAlive`         | `Deadoralive`         |
| `deathDefy`           | `Deathdefy`           |
| `distantTransmission` | `Distanttransmission` |
| `doubleDosage`        | `Doubledosage`        |
| `dualProficiency`     | `Dualproficiency`     |
| `exponentiation`      | `Exponentiation`      |
| `eyeOnPrey`           | `Eyeonprey`           |
| `firstJob`            | `Firstjob`            |
| `firstOfMany`         | `Firstofmany`         |
| `firstSteps`          | `Firststeps`          |
| `grandSlam`           | `Grandslam`           |
| `hero`                | `Hero`                |
| `highRoller`          | `Highroller`          |
| `holdGround`          | `Holdground`          |
| `huntsman`            | `Huntsman`            |
| `jobSearch`           | `Jobsearch`           |
| `lawMaker`            | `Lawmaker`            |
| `legacy`              | `Legacy`              |
| `localSpecialty`      | `Localspecialty`      |
| `lurkingContagion`    | `Lurkingcontagion`    |
| `makeshiftShield`     | `Makeshiftshield`     |
| `mowingDown`          | `Mowingdown`          |
| `oneOfUs`             | `Oneofus`             |
| `paneKiller`          | `Panekiller`          |
| `patientZero`         | `Patientzero`         |
| `postPandemic`        | `Postpandemic`        |
| `pythagoreanDisposal` | `Pythagoreandisposal` |
| `quickDraw`           | `Quickdraw`           |
| `reloaded`            | `Reloaded`            |
| `seasonedHitman`      | `Seasonedhitman`      |
| `selfDefense`         | `Selfdefense`         |
| `serialTrapper`       | `Serialtrapper`       |
| `silverBullet`        | `Silverbullet`        |
| `slaughterHouse`      | `Slaughterhouse`      |
| `sneaky`              | `Sneaky`              |
| `survival`            | `Survival`            |
| `totalOutbreak`       | `Totaloutbreak`       |
| `trapping101`         | `Trapping101`         |
| `trulyMad`            | `Trulymad`            |
| `viralKnife`          | `Viralknife`          |

## Leaderboard settings

```ts
export interface MurderMysteryLeaderboardSettings {
  readonly mode: string;
  readonly resetType: string;
}
```

Built from the raw `leaderboardSettings` object's `mode` and `resetType` fields.

## Null and empty behavior

- `parseMurderMystery` returns `null` when `stats.MurderMystery` is absent, not an object, `null`, or an array.
- `usePrestige`, `chestHistory`, `chestHistoryNew`, `mapsConsumablesUsed`, `mapsMurdererTrapKills`, `books`, and `packages` return an empty array when the raw value is not an array; non-string entries are filtered out.
- Numeric, string, and boolean fields fall back to the defaults provided by the shared `num`, `str`, and `bool` helpers when their raw keys are missing.
- Nested objects (`emblem`, `descent`, `knifeSkinPrestiges`, `leaderboardSettings`, `settings`, `assassins`, `classic`, and the `color_unlocked` / `xp` sub-objects) are read via the shared `obj` helper, so a missing block yields a fully default-populated record rather than `null`.
- Every key in the record types (`gamemodes`, `maps`, `emblem.colorUnlocked`, `freeEventKeys`, `knifeSkinPrestiges.experience`, `descent`, and the hotbar layouts) is always present; absent raw keys produce default values.

