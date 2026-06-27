# The Pit

Parser for a player's Pit statistics from the Hypixel API. Like every parser in `@breezil/hypixel-parsers`, it is strict-raw: it mirrors the raw API fields one-for-one and performs no computation, no derived values, and no aggregation.

## parsePit

Parses a player's Pit stats (`stats.Pit`) into a typed object.

```ts
export function parsePit(stats: Record<string, unknown>): PitStats | null;
```

Returns `null` when `stats.Pit` is absent, is not an object, or is an array. Otherwise it returns a `PitStats` object. The top-level `combat` block is read from the raw `pit_stats_ptl` key, and `profile` is read from the raw `profile` key.

### PitStats

```ts
export interface PitStats {
  readonly profile: PitProfile;
  readonly combat: PitCombatStats;
  readonly statsMove1: number;
  readonly packages: readonly string[];
}
```

| Field        | Raw source          | Notes                                                     |
| ------------ | ------------------- | --------------------------------------------------------- |
| `profile`    | `Pit.profile`       | Parsed `PitProfile` block.                                |
| `combat`     | `Pit.pit_stats_ptl` | Parsed `PitCombatStats` block.                            |
| `statsMove1` | `Pit.stats_move_1`  | Raw numeric value.                                        |
| `packages`   | `Pit.packages`      | Filtered to string entries only; empty array when absent. |

### PitProfile

The main profile block, read from `Pit.profile`. String/number/boolean fields default to their type's zero value when absent. Array-style indexed keys (for example `selected_perk_0`, `selected_perk_1`) are collected in numeric order into the corresponding arrays.

```ts
export interface PitProfile {
  readonly xp: number;
  readonly lastPassiveXp: number;
  readonly zeroPointTwoXp: number;
  readonly cash: number;
  readonly renown: number;
  readonly hatColor: number;
  readonly hatEnabled: boolean;
  readonly impatientEnabled: boolean;
  readonly nightQuestsEnabled: boolean;
  readonly supporterStarEnabled: boolean;
  readonly cheapMilk: boolean;
  readonly disableSpawnItems: boolean;
  readonly refundedGoldenPickaxe: boolean;
  readonly lastSave: number;
  readonly lastContract: number;
  readonly lastMidfightDisconnect: number;
  readonly zeroPointThreeGoldTransfer: boolean;
  readonly selectedLaunchTrail: string;
  readonly selectedLeaderboard: string;
  readonly selectedMegastreakExceptUber: string;
  readonly movedAchievements: readonly boolean[];
  readonly selectedPerks: readonly string[];
  readonly selectedKillstreaks: readonly string[];
  readonly cashDuringPrestige: readonly number[];
  readonly hotbarFavorites: readonly number[];
  readonly chatOptions: PitChatOptions;
  readonly genesis: PitGenesis;
  readonly kingQuest: PitKingQuest;
  readonly leaderboardStats: Readonly<Record<string, number>>;
  readonly itemsLastBuy: Readonly<Record<string, number>>;
  readonly prestiges: readonly PitPrestige[];
  readonly bounties: readonly PitBounty[];
  readonly goldTransactions: readonly PitGoldTransaction[];
  readonly endedContracts: readonly PitEndedContract[];
  readonly contractChoices: readonly unknown[];
  readonly outgoingOffers: readonly unknown[];
  readonly autobuyItems: readonly unknown[];
  readonly tradeTimestamps: readonly number[];
  readonly loginMessages: readonly string[];
  readonly unlocks: readonly PitUnlock[];
  readonly prestigeUnlocks: readonly (readonly PitUnlock[])[];
  readonly renownUnlocks: readonly PitUnlock[];
  readonly inventory: PitInventory;
  readonly armor: PitInventory;
  readonly enderChest: PitInventory;
  readonly itemStash: PitInventory;
  readonly mysticWellItem: PitInventory;
  readonly spireStash: PitInventory;
  readonly spireStashArmor: PitInventory;
  readonly deathRecaps: PitInventory;
}
```

| Field                          | Raw source                        | Notes                                                                               |
| ------------------------------ | --------------------------------- | ----------------------------------------------------------------------------------- |
| `xp`                           | `xp`                              | Profile XP.                                                                         |
| `lastPassiveXp`                | `last_passive_xp`                 |                                                                                     |
| `zeroPointTwoXp`               | `zero_point_two_xp`               |                                                                                     |
| `cash`                         | `cash`                            |                                                                                     |
| `renown`                       | `renown`                          |                                                                                     |
| `hatColor`                     | `hat_color`                       |                                                                                     |
| `hatEnabled`                   | `hat_enabled`                     |                                                                                     |
| `impatientEnabled`             | `impatient_enabled`               |                                                                                     |
| `nightQuestsEnabled`           | `night_quests_enabled`            |                                                                                     |
| `supporterStarEnabled`         | `supporter_star_enabled`          |                                                                                     |
| `cheapMilk`                    | `cheap_milk`                      |                                                                                     |
| `disableSpawnItems`            | `disable_spawn_items`             |                                                                                     |
| `refundedGoldenPickaxe`        | `refunded_golden_pickaxe`         |                                                                                     |
| `lastSave`                     | `last_save`                       |                                                                                     |
| `lastContract`                 | `last_contract`                   |                                                                                     |
| `lastMidfightDisconnect`       | `last_midfight_disconnect`        |                                                                                     |
| `zeroPointThreeGoldTransfer`   | `zero_point_three_gold_transfer`  |                                                                                     |
| `selectedLaunchTrail`          | `selected_launch_trail`           |                                                                                     |
| `selectedLeaderboard`          | `selected_leaderboard`            |                                                                                     |
| `selectedMegastreakExceptUber` | `selected_megastreak_except_uber` |                                                                                     |
| `movedAchievements`            | `moved_achievements_<n>`          | Indexed boolean keys collected in numeric order.                                    |
| `selectedPerks`                | `selected_perk_<n>`               | Indexed string keys collected in numeric order.                                     |
| `selectedKillstreaks`          | `selected_killstreak_<n>`         | Indexed string keys collected in numeric order.                                     |
| `cashDuringPrestige`           | `cash_during_prestige_<n>`        | Indexed number keys collected in numeric order.                                     |
| `hotbarFavorites`              | `hotbar_favorites`                | Filtered to number entries.                                                         |
| `chatOptions`                  | `chat_option_*`                   | Parsed `PitChatOptions` block.                                                      |
| `genesis`                      | `genesis_*`                       | Parsed `PitGenesis` block.                                                          |
| `kingQuest`                    | `king_quest`                      | Parsed `PitKingQuest` block.                                                        |
| `leaderboardStats`             | `leaderboard_stats`               | Number-valued map; non-number values dropped.                                       |
| `itemsLastBuy`                 | `items_last_buy`                  | Number-valued map; non-number values dropped.                                       |
| `prestiges`                    | `prestiges`                       | Array of `PitPrestige`.                                                             |
| `bounties`                     | `bounties`                        | Array of `PitBounty`.                                                               |
| `goldTransactions`             | `gold_transactions`               | Array of `PitGoldTransaction`.                                                      |
| `endedContracts`               | `ended_contracts`                 | Array of `PitEndedContract`.                                                        |
| `contractChoices`              | `contract_choices`                | Passed through unparsed; empty array when not an array.                             |
| `outgoingOffers`               | `outgoing_offers`                 | Passed through unparsed; empty array when not an array.                             |
| `autobuyItems`                 | `autobuy_items`                   | Passed through unparsed; empty array when not an array.                             |
| `tradeTimestamps`              | `trade_timestamps`                | Filtered to number entries.                                                         |
| `loginMessages`                | `login_messages`                  | Filtered to string entries.                                                         |
| `unlocks`                      | `unlocks`                         | Array of `PitUnlock`.                                                               |
| `prestigeUnlocks`              | `unlocks_<n>`                     | Each indexed key parsed into its own `PitUnlock` array, collected in numeric order. |
| `renownUnlocks`                | `renown_unlocks`                  | Array of `PitUnlock`.                                                               |
| `inventory`                    | `inv_contents`                    | Parsed `PitInventory`.                                                              |
| `armor`                        | `inv_armor`                       | Parsed `PitInventory`.                                                              |
| `enderChest`                   | `inv_enderchest`                  | Parsed `PitInventory`.                                                              |
| `itemStash`                    | `item_stash`                      | Parsed `PitInventory`.                                                              |
| `mysticWellItem`               | `mystic_well_item`                | Parsed `PitInventory`.                                                              |
| `spireStash`                   | `spire_stash_inv`                 | Parsed `PitInventory`.                                                              |
| `spireStashArmor`              | `spire_stash_armor`               | Parsed `PitInventory`.                                                              |
| `deathRecaps`                  | `death_recaps`                    | Parsed `PitInventory`.                                                              |

### PitChatOptions

Booleans read from the `chat_option_*` keys of the profile.

```ts
export interface PitChatOptions {
  readonly bounties: boolean;
  readonly killFeed: boolean;
  readonly minorEvents: boolean;
  readonly misc: boolean;
  readonly playerChat: boolean;
  readonly prestigeAnnouncements: boolean;
  readonly streaks: boolean;
}
```

| Field                   | Raw source                           |
| ----------------------- | ------------------------------------ |
| `bounties`              | `chat_option_bounties`               |
| `killFeed`              | `chat_option_kill_feed`              |
| `minorEvents`           | `chat_option_minor_events`           |
| `misc`                  | `chat_option_misc`                   |
| `playerChat`            | `chat_option_player_chat`            |
| `prestigeAnnouncements` | `chat_option_prestige_announcements` |
| `streaks`               | `chat_option_streaks`                |

### PitGenesis

Values read from the `genesis_*` keys of the profile.

```ts
export interface PitGenesis {
  readonly allegiance: string;
  readonly allegianceTime: number;
  readonly permaAngel: number;
  readonly permaDemon: number;
  readonly points: number;
  readonly spawnInBase: boolean;
  readonly weeklyPerksClaimItemAngel: number;
  readonly weeklyPerksClaimItemDemon: number;
  readonly weeklyPerksPermaGold: number;
  readonly weeklyPerksPermaXp: number;
}
```

| Field                       | Raw source                              |
| --------------------------- | --------------------------------------- |
| `allegiance`                | `genesis_allegiance`                    |
| `allegianceTime`            | `genesis_allegiance_time`               |
| `permaAngel`                | `genesis_perma_angel`                   |
| `permaDemon`                | `genesis_perma_demon`                   |
| `points`                    | `genesis_points`                        |
| `spawnInBase`               | `genesis_spawn_in_base`                 |
| `weeklyPerksClaimItemAngel` | `genesis_weekly_perks_claim_item_angel` |
| `weeklyPerksClaimItemDemon` | `genesis_weekly_perks_claim_item_demon` |
| `weeklyPerksPermaGold`      | `genesis_weekly_perks_perma_gold`       |
| `weeklyPerksPermaXp`        | `genesis_weekly_perks_perma_xp`         |

### PitKingQuest

Read from the `king_quest` object of the profile.

```ts
export interface PitKingQuest {
  readonly kills: number;
  readonly renown: number;
  readonly lastCompleted: number;
  readonly lastAccepted: number;
}
```

| Field           | Raw source                  |
| --------------- | --------------------------- |
| `kills`         | `king_quest.kills`          |
| `renown`        | `king_quest.renown`         |
| `lastCompleted` | `king_quest.last_completed` |
| `lastAccepted`  | `king_quest.last_accepted`  |

### PitPrestige

One entry per object in the `prestiges` array.

```ts
export interface PitPrestige {
  readonly index: number;
  readonly xpOnPrestige: number;
  readonly timestamp: number;
}
```

| Field          | Raw source       |
| -------------- | ---------------- |
| `index`        | `index`          |
| `xpOnPrestige` | `xp_on_prestige` |
| `timestamp`    | `timestamp`      |

### PitBounty

One entry per object in the `bounties` array.

```ts
export interface PitBounty {
  readonly amount: number;
  readonly remainingTicks: number;
  readonly timestamp: number;
  readonly issuer: string | null;
}
```

| Field            | Raw source       | Notes                                      |
| ---------------- | ---------------- | ------------------------------------------ |
| `amount`         | `amount`         |                                            |
| `remainingTicks` | `remainingTicks` |                                            |
| `timestamp`      | `timestamp`      |                                            |
| `issuer`         | `issuer`         | `null` when the raw value is not a string. |

### PitGoldTransaction

One entry per object in the `gold_transactions` array.

```ts
export interface PitGoldTransaction {
  readonly amount: number;
  readonly timestamp: number;
}
```

| Field       | Raw source  |
| ----------- | ----------- |
| `amount`    | `amount`    |
| `timestamp` | `timestamp` |

### PitEndedContract

One entry per object in the `ended_contracts` array.

```ts
export interface PitEndedContract {
  readonly difficulty: string;
  readonly goldReward: number;
  readonly chunkOfVilesReward: number;
  readonly requirements: Readonly<Record<string, number>>;
  readonly progress: Readonly<Record<string, number>>;
  readonly completionDate: number;
  readonly remainingTicks: number;
  readonly key: string;
}
```

| Field                | Raw source              | Notes                                         |
| -------------------- | ----------------------- | --------------------------------------------- |
| `difficulty`         | `difficulty`            |                                               |
| `goldReward`         | `gold_reward`           |                                               |
| `chunkOfVilesReward` | `chunk_of_viles_reward` |                                               |
| `requirements`       | `requirements`          | Number-valued map; non-number values dropped. |
| `progress`           | `progress`              | Number-valued map; non-number values dropped. |
| `completionDate`     | `completion_date`       |                                               |
| `remainingTicks`     | `remaining_ticks`       |                                               |
| `key`                | `key`                   |                                               |

### PitUnlock

One entry per object in an unlocks array (`unlocks`, `renown_unlocks`, and each indexed `unlocks_<n>`).

```ts
export interface PitUnlock {
  readonly tier: number;
  readonly acquireDate: number;
  readonly key: string;
}
```

| Field         | Raw source    |
| ------------- | ------------- |
| `tier`        | `tier`        |
| `acquireDate` | `acquireDate` |
| `key`         | `key`         |

### PitInventory

A container with a numeric type and decoded NBT items. The raw `data` (a base64 string or a byte array) is decoded into `NbtItem` entries; a byte array is first converted to base64 before decoding.

```ts
export interface PitInventory {
  readonly type: number;
  readonly items: readonly NbtItem[];
}
```

| Field   | Raw source         | Notes                                                      |
| ------- | ------------------ | ---------------------------------------------------------- |
| `type`  | `<container>.type` |                                                            |
| `items` | `<container>.data` | Decoded NBT items. `NbtItem` is defined in the NBT module. |

### PitCombatStats

Combat counters read from `Pit.pit_stats_ptl`. Every field is a raw numeric value defaulting to `0` when absent.

```ts
export interface PitCombatStats {
  readonly kills: number;
  readonly deaths: number;
  readonly assists: number;
  readonly maxStreak: number;
  readonly joins: number;
  readonly playtimeMinutes: number;
  readonly damageDealt: number;
  readonly damageReceived: number;
  readonly meleeDamageDealt: number;
  readonly meleeDamageReceived: number;
  readonly bowDamageDealt: number;
  readonly bowDamageReceived: number;
  readonly swordHits: number;
  readonly arrowHits: number;
  readonly arrowsFired: number;
  readonly leftClicks: number;
  readonly blocksPlaced: number;
  readonly blocksBroken: number;
  readonly obsidianBroken: number;
  readonly cashEarned: number;
  readonly goldFromFarming: number;
  readonly chatMessages: number;
  readonly contractsStarted: number;
  readonly contractsCompleted: number;
  readonly diamondItemsPurchased: number;
  readonly enderchestOpened: number;
  readonly ingotsCash: number;
  readonly ingotsPickedUp: number;
  readonly jumpedIntoPit: number;
  readonly launchedByLaunchers: number;
  readonly launchedByAngelSpawn: number;
  readonly launchedByDemonSpawn: number;
  readonly nightQuestsCompleted: number;
  readonly kingQuestCompletion: number;
  readonly vampireHealedHp: number;
  readonly bountiesOf500gWithBh: number;
  readonly ramboKills: number;
  readonly darkPantsCrated: number;
  readonly darkPantsT2: number;
  readonly ragePantsCrafted: number;
  readonly ragePotatoesEaten: number;
  readonly enchantedTier1: number;
  readonly enchantedTier2: number;
  readonly enchantedTier3: number;
  readonly endlessQuiverArrows: number;
  readonly extraFromTrickleDown: number;
  readonly fishedAnything: number;
  readonly fishesFished: number;
  readonly fishingRodLaunched: number;
  readonly gappleEaten: number;
  readonly gheadEaten: number;
  readonly soupsDrank: number;
  readonly lavaBucketEmptied: number;
  readonly luckyDiamondPieces: number;
  readonly sewerTreasuresFound: number;
  readonly wheatFarmed: number;
}
```

| Field                   | Raw source                 |
| ----------------------- | -------------------------- |
| `kills`                 | `kills`                    |
| `deaths`                | `deaths`                   |
| `assists`               | `assists`                  |
| `maxStreak`             | `max_streak`               |
| `joins`                 | `joins`                    |
| `playtimeMinutes`       | `playtime_minutes`         |
| `damageDealt`           | `damage_dealt`             |
| `damageReceived`        | `damage_received`          |
| `meleeDamageDealt`      | `melee_damage_dealt`       |
| `meleeDamageReceived`   | `melee_damage_received`    |
| `bowDamageDealt`        | `bow_damage_dealt`         |
| `bowDamageReceived`     | `bow_damage_received`      |
| `swordHits`             | `sword_hits`               |
| `arrowHits`             | `arrow_hits`               |
| `arrowsFired`           | `arrows_fired`             |
| `leftClicks`            | `left_clicks`              |
| `blocksPlaced`          | `blocks_placed`            |
| `blocksBroken`          | `blocks_broken`            |
| `obsidianBroken`        | `obsidian_broken`          |
| `cashEarned`            | `cash_earned`              |
| `goldFromFarming`       | `gold_from_farming`        |
| `chatMessages`          | `chat_messages`            |
| `contractsStarted`      | `contracts_started`        |
| `contractsCompleted`    | `contracts_completed`      |
| `diamondItemsPurchased` | `diamond_items_purchased`  |
| `enderchestOpened`      | `enderchest_opened`        |
| `ingotsCash`            | `ingots_cash`              |
| `ingotsPickedUp`        | `ingots_picked_up`         |
| `jumpedIntoPit`         | `jumped_into_pit`          |
| `launchedByLaunchers`   | `launched_by_launchers`    |
| `launchedByAngelSpawn`  | `launched_by_angel_spawn`  |
| `launchedByDemonSpawn`  | `launched_by_demon_spawn`  |
| `nightQuestsCompleted`  | `night_quests_completed`   |
| `kingQuestCompletion`   | `king_quest_completion`    |
| `vampireHealedHp`       | `vampire_healed_hp`        |
| `bountiesOf500gWithBh`  | `bounties_of_500g_with_bh` |
| `ramboKills`            | `rambo_kills`              |
| `darkPantsCrated`       | `dark_pants_crated`        |
| `darkPantsT2`           | `dark_pants_t2`            |
| `ragePantsCrafted`      | `rage_pants_crafted`       |
| `ragePotatoesEaten`     | `rage_potatoes_eaten`      |
| `enchantedTier1`        | `enchanted_tier1`          |
| `enchantedTier2`        | `enchanted_tier2`          |
| `enchantedTier3`        | `enchanted_tier3`          |
| `endlessQuiverArrows`   | `endless_quiver_arrows`    |
| `extraFromTrickleDown`  | `extra_from_trickle_down`  |
| `fishedAnything`        | `fished_anything`          |
| `fishesFished`          | `fishes_fished`            |
| `fishingRodLaunched`    | `fishing_rod_launched`     |
| `gappleEaten`           | `gapple_eaten`             |
| `gheadEaten`            | `ghead_eaten`              |
| `soupsDrank`            | `soups_drank`              |
| `lavaBucketEmptied`     | `lava_bucket_emptied`      |
| `luckyDiamondPieces`    | `lucky_diamond_pieces`     |
| `sewerTreasuresFound`   | `sewer_treasures_found`    |
| `wheatFarmed`           | `wheat_farmed`             |

