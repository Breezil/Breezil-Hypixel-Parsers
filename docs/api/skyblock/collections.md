# Museum, Garden, News, Fire Sales & Bingo

This page documents the SkyBlock parsers for museum donations, the garden, the news feed, global fire sales, and a player's bingo events. Every parser is strict-raw: it mirrors the raw Hypixel API JSON field-for-field into readonly, fully-typed objects and performs zero computation.

## parseMuseum

Parses a SkyBlock museum (`/skyblock/museum`) into a typed object, keyed by member UUID.

```ts
export function parseMuseum(members: Record<string, unknown>): SkyBlockMuseum;
```

### Returned types

```ts
export interface SkyBlockMuseum {
  readonly members: Record<string, SkyBlockMuseumMember>;
}
```

```ts
export interface SkyBlockMuseumMember {
  readonly value: number;
  readonly appraisal: boolean;
  readonly items: readonly SkyBlockMuseumItem[];
  readonly special: readonly SkyBlockMuseumDonation[];
}
```

```ts
export interface SkyBlockMuseumItem extends SkyBlockMuseumDonation {
  readonly name: string;
}
```

```ts
export interface SkyBlockMuseumDonation {
  readonly donatedAt: Date | null;
  readonly featuredSlot: string | null;
  readonly borrowing: boolean;
  readonly type: number;
  readonly data: string | null;
  readonly items: readonly NbtItem[];
}
```

| Field          | Notes                                                          |
| -------------- | -------------------------------------------------------------- |
| `donatedAt`    | Mapped from `donated_time`; `null` when absent.                |
| `featuredSlot` | Mapped from `featured_slot`; `null` when empty.                |
| `borrowing`    | Mapped from `borrowing`.                                       |
| `type`         | Read from the nested `items.type`.                             |
| `data`         | The raw item byte string from `items.data`; `null` when empty. |
| `items`        | The decoded NBT items from `data` (see `NbtItem` below).       |

The `name` field on `SkyBlockMuseumItem` is the museum item key (the object key under `items`).

#### Referenced NBT types

`SkyBlockMuseumDonation.items` is a list of `NbtItem`, defined in the NBT module and reproduced here for completeness.

```ts
export interface NbtItem {
  readonly id: number;
  readonly count: number;
  readonly damage: number;
  readonly tag: NbtItemTag;
}
```

```ts
export interface NbtItemTag {
  readonly display: NbtItemDisplay;
  readonly enchantments: readonly NbtEnchantment[];
  readonly extraAttributes: NbtExtraAttributes;
  readonly raw: NbtCompound;
}
```

```ts
export interface NbtItemDisplay {
  readonly name: string;
  readonly lore: readonly string[];
  readonly color: number | null;
}
```

```ts
export interface NbtEnchantment {
  readonly id: number;
  readonly level: number;
}
```

```ts
export interface NbtExtraAttributes {
  readonly id: string;
  readonly uuid: string | null;
  readonly timestamp: string | number | readonly [number, number] | null;
  readonly rarity_upgrades: number;
  readonly modifier: string | null;
  readonly enchantments: Readonly<Record<string, number>>;
  readonly hot_potato_count: number;
  readonly [key: string]: unknown;
}
```

```ts
export type NbtCompound = Readonly<Record<string, unknown>>;
```

**Null/empty behavior:** Each member entry is parsed from the input record. `special` is an empty array when the raw `special` value is not an array. `items` (decoded NBT) is an empty array when `data` is empty or cannot be decoded.

## parseGarden

Parses a SkyBlock garden (`/skyblock/garden`) into a typed object.

```ts
export function parseGarden(garden: Record<string, unknown>): SkyBlockGarden;
```

### Returned types

```ts
export interface SkyBlockGarden {
  readonly uuid: string;
  readonly gardenExperience: number;
  readonly barnSkin: string;
  readonly unlockedBarnSkins: readonly string[];
  readonly unlockedPlots: readonly string[];
  readonly visitors: SkyBlockGardenVisitors;
  readonly currentVisitors: readonly SkyBlockGardenActiveVisitor[];
  readonly cropMilestones: SkyBlockGardenCropMilestones;
  readonly composter: SkyBlockGardenComposter;
  readonly cropUpgrades: SkyBlockGardenCropMilestones;
  readonly gardenUpgrades: SkyBlockGardenUpgrades;
  readonly greenhouseSlots: readonly SkyBlockGardenGreenhouseSlot[];
  readonly lastGrowthStageTimestamp: number;
  readonly lastGrowthStageAt: Date | null;
}
```

| Field                      | Raw source                              |
| -------------------------- | --------------------------------------- |
| `uuid`                     | `uuid`                                  |
| `gardenExperience`         | `garden_experience`                     |
| `barnSkin`                 | `selected_barn_skin`                    |
| `unlockedBarnSkins`        | `unlocked_barn_skins`                   |
| `unlockedPlots`            | `unlocked_plots_ids`                    |
| `visitors`                 | `commission_data`                       |
| `currentVisitors`          | `active_commissions` (each keyed entry) |
| `cropMilestones`           | `resources_collected`                   |
| `composter`                | `composter_data`                        |
| `cropUpgrades`             | `crop_upgrade_levels`                   |
| `gardenUpgrades`           | `garden_upgrades`                       |
| `greenhouseSlots`          | `greenhouse_slots`                      |
| `lastGrowthStageTimestamp` | `last_growth_stage_time`                |
| `lastGrowthStageAt`        | `last_growth_stage_time` (as `Date`)    |

```ts
export interface SkyBlockGardenVisitors {
  readonly visited: Record<string, number>;
  readonly completed: Record<string, number>;
  readonly totalCompleted: number;
  readonly uniqueNpcsServed: number;
}
```

`visited` maps from `visits`, `completed` from `completed`, `totalCompleted` from `total_completed`, and `uniqueNpcsServed` from `unique_npcs_served`. Both record fields keep only numeric values.

```ts
export interface SkyBlockGardenActiveVisitor {
  readonly visitor: string;
  readonly requirements: readonly SkyBlockGardenVisitorRequirement[];
  readonly status: string;
  readonly position: number;
}
```

`visitor` is the active commission key. `requirements` is parsed from the raw `requirement` array and is empty when that value is not an array.

```ts
export interface SkyBlockGardenVisitorRequirement {
  readonly originalItem: string;
  readonly originalAmount: number;
  readonly item: string;
  readonly amount: number;
}
```

Mapped from `original_item`, `original_amount`, `item`, and `amount`.

```ts
export interface SkyBlockGardenCropMilestones extends SkyBlockGardenCrops {
  readonly moonFlower: number;
  readonly sunFlower: number;
  readonly wildRose: number;
}
```

```ts
export interface SkyBlockGardenCrops {
  readonly wheat: number;
  readonly carrot: number;
  readonly sugarCane: number;
  readonly potato: number;
  readonly pumpkin: number;
  readonly melon: number;
  readonly cactus: number;
  readonly cocoaBeans: number;
  readonly mushroom: number;
  readonly netherWart: number;
}
```

Both `cropMilestones` and `cropUpgrades` use the `SkyBlockGardenCropMilestones` type. The crop fields map from raw item keys:

| Field        | Raw key               |
| ------------ | --------------------- |
| `wheat`      | `WHEAT`               |
| `carrot`     | `CARROT_ITEM`         |
| `sugarCane`  | `SUGAR_CANE`          |
| `potato`     | `POTATO_ITEM`         |
| `pumpkin`    | `PUMPKIN`             |
| `melon`      | `MELON`               |
| `cactus`     | `CACTUS`              |
| `cocoaBeans` | `INK_SACK:3`          |
| `mushroom`   | `MUSHROOM_COLLECTION` |
| `netherWart` | `NETHER_STALK`        |
| `moonFlower` | `MOONFLOWER`          |
| `sunFlower`  | `DOUBLE_PLANT`        |
| `wildRose`   | `WILD_ROSE`           |

```ts
export interface SkyBlockGardenComposter {
  readonly organicMatter: number;
  readonly fuelUnits: number;
  readonly compostUnits: number;
  readonly compostItems: number;
  readonly conversionTicks: number;
  readonly lastSaveTimestamp: number;
  readonly lastSaveAt: Date | null;
  readonly upgrades: SkyBlockGardenComposterUpgrades;
}
```

| Field               | Raw source              |
| ------------------- | ----------------------- |
| `organicMatter`     | `organic_matter`        |
| `fuelUnits`         | `fuel_units`            |
| `compostUnits`      | `compost_units`         |
| `compostItems`      | `compost_items`         |
| `conversionTicks`   | `conversion_ticks`      |
| `lastSaveTimestamp` | `last_save`             |
| `lastSaveAt`        | `last_save` (as `Date`) |
| `upgrades`          | `upgrades`              |

```ts
export interface SkyBlockGardenComposterUpgrades {
  readonly speed: number;
  readonly multiDrop: number;
  readonly fuelCap: number;
  readonly organicMatterCap: number;
  readonly costReduction: number;
}
```

Mapped from `speed`, `multi_drop`, `fuel_cap`, `organic_matter_cap`, and `cost_reduction`.

```ts
export interface SkyBlockGardenUpgrades {
  readonly growthSpeed: number;
  readonly yield: number;
  readonly plotLimit: number;
}
```

Mapped from `GROWTH_SPEED`, `YIELD`, and `PLOT_LIMIT`.

```ts
export interface SkyBlockGardenGreenhouseSlot {
  readonly x: number;
  readonly z: number;
}
```

Each greenhouse slot maps from `x` and `z`.

**Null/empty behavior:** `unlockedBarnSkins`, `unlockedPlots`, `currentVisitors`, `greenhouseSlots`, and each visitor's `requirements` are empty arrays when the corresponding raw value is missing or not an array. Date fields are `null` when the timestamp is absent.

## parseFireSales

Parses the SkyBlock fire sales (`/skyblock/firesales`) into a typed object.

```ts
export function parseFireSales(sales: unknown[]): SkyBlockFireSale[];
```

### Returned types

```ts
export interface SkyBlockFireSale {
  readonly itemId: string;
  readonly amount: number;
  readonly price: number;
  readonly startTimestamp: number;
  readonly startAt: Date | null;
  readonly endTimestamp: number;
  readonly endAt: Date | null;
}
```

| Field            | Raw source          |
| ---------------- | ------------------- |
| `itemId`         | `item_id`           |
| `amount`         | `amount`            |
| `price`          | `price`             |
| `startTimestamp` | `start`             |
| `startAt`        | `start` (as `Date`) |
| `endTimestamp`   | `end`               |
| `endAt`          | `end` (as `Date`)   |

**Null/empty behavior:** Non-object entries in the input array are skipped. The result is an empty array when no valid entries are present. `startAt` and `endAt` are `null` when their timestamps are absent.

## parseSkyBlockNews

Parses the SkyBlock news (`/skyblock/news`) into a typed object.

```ts
export function parseSkyBlockNews(items: unknown[]): SkyBlockNewsItem[];
```

### Returned types

```ts
export interface SkyBlockNewsItem {
  readonly title: string;
  readonly link: string;
  readonly text: string;
  readonly item: SkyBlockNewsDisplayItem;
}
```

```ts
export interface SkyBlockNewsDisplayItem {
  readonly material: string;
}
```

`title`, `link`, and `text` map from the same raw keys. `item.material` maps from the nested `item.material`.

**Null/empty behavior:** Non-object entries in the input array are skipped, yielding an empty array when none are valid.

## parsePlayerBingo

Parses a player's SkyBlock bingo (`/skyblock/bingo`) into a list of bingo events.

```ts
export function parsePlayerBingo(
  data: Record<string, unknown>,
): readonly PlayerBingoEvent[];
```

### Returned types

```ts
export interface PlayerBingoEvent {
  readonly key: number;
  readonly points: number;
  readonly completedGoals: readonly string[];
}
```

| Field            | Raw source                              |
| ---------------- | --------------------------------------- |
| `key`            | `key`                                   |
| `points`         | `points`                                |
| `completedGoals` | `completed_goals` (string entries only) |

**Null/empty behavior:** Events are read from the raw `events` array, defaulting to empty when it is missing or not an array; non-object events are skipped. `completedGoals` is an empty array when `completed_goals` is missing or not an array, and keeps only string entries.

