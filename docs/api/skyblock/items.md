# SkyBlock Items

The `@breezil/hypixel-parsers` library converts the raw Hypixel SkyBlock item registry JSON into readonly, fully-typed objects. This page documents the `parseSkyBlockItems` parser and the complete type tree it returns, mirroring the raw API field-for-field with zero computed or derived values.

## parseSkyBlockItems

Parses the SkyBlock item registry (`/resources/skyblock/items`) into a typed object, mapping each raw item entry to a `SkyBlockItem`.

```ts
export function parseSkyBlockItems(items: unknown[]): SkyBlockItem[];
```

Iterates the provided array and pushes one `SkyBlockItem` per entry. Entries that are not plain objects (non-objects, `null`, or arrays) are skipped. An empty input array yields an empty result array; the function never returns `null`.

### SkyBlockItem

The top-level item type returned for each registry entry.

```ts
export interface SkyBlockItem {
  readonly id: string;
  readonly name: string;
  readonly material: string;
  readonly durability: number | string;
  readonly skin: SkyBlockItemSkin;
  readonly itemModel: string;
  readonly category: string;
  readonly categoryDisplay: string;
  readonly tier: string;
  readonly rarity: string;
  readonly npcSellPrice: number;
  readonly motesSellPrice: number;
  readonly salvages: ReadonlyArray<SkyBlockItemCost>;
  readonly salvage: SkyBlockItemCost;
  readonly raritySalvageable: boolean;
  readonly salvageableFromRecipe: boolean;
  readonly stats: Readonly<Record<string, number>>;
  readonly tieredStats: Readonly<Record<string, ReadonlyArray<number>>>;
  readonly miningFortune: number;
  readonly unstackable: boolean;
  readonly museumData: SkyBlockItemMuseumData;
  readonly museum: boolean;
  readonly color: string;
  readonly soulbound: string;
  readonly hasUuid: boolean | string;
  readonly gemstoneSlots: ReadonlyArray<SkyBlockItemGemstoneSlot>;
  readonly glowing: boolean;
  readonly canAuction: boolean;
  readonly canTrade: boolean;
  readonly requirements: ReadonlyArray<SkyBlockItemRequirement>;
  readonly catacombsRequirements: ReadonlyArray<SkyBlockItemRequirement>;
  readonly canPlace: boolean;
  readonly generator: string;
  readonly generatorTier: number;
  readonly furniture: string;
  readonly components: ReadonlyArray<SkyBlockItemComponent>;
  readonly itemSpecific: Readonly<Record<string, SkyBlockJsonValue>>;
  readonly description: string;
  readonly upgradeCosts: ReadonlyArray<ReadonlyArray<SkyBlockItemCost>>;
  readonly gearScore: number;
  readonly dungeonItem: boolean;
  readonly dungeonItemConversionCost: SkyBlockItemCost;
  readonly canHaveAttributes: boolean;
  readonly canHaveBooster: boolean;
  readonly canRecombobulate: boolean;
  readonly cannotReforge: boolean;
  readonly forceWipeRecomb: boolean;
  readonly enchantments: Readonly<Record<string, number>>;
  readonly riftTransferrable: boolean;
  readonly loseMotesValueOnTransfer: boolean;
  readonly origin: string;
  readonly editioned: boolean;
  readonly hideFromApi: boolean;
  readonly doubleTapToDrop: boolean;
  readonly hideFromViewRecipeCommand: boolean;
  readonly swordType: string;
  readonly abilityDamageScaling: number;
  readonly crystal: string;
  readonly canBurnInFurnace: boolean;
  readonly serializable: boolean;
  readonly canInteract: boolean;
  readonly canInteractRightClick: boolean;
  readonly canInteractEntity: boolean;
  readonly privateIsland: string;
  readonly canHavePowerScroll: boolean;
  readonly isUpgradeableWithoutSoulbinding: boolean;
  readonly recipes: ReadonlyArray<SkyBlockItemRecipe>;
  readonly prestige: SkyBlockItemPrestige;
}
```

Notable fields:

| Field                             | Type                                              | Notes                                                                                                 |
| --------------------------------- | ------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| `id`                              | `string`                                          | The item identifier (raw `id`).                                                                       |
| `name`                            | `string`                                          | The item display name.                                                                                |
| `material`                        | `string`                                          | The underlying material.                                                                              |
| `durability`                      | `number \| string`                                | Preserves the raw value's type; defaults to `0` when neither a string nor a number.                   |
| `itemModel`                       | `string`                                          | Raw `item_model`.                                                                                     |
| `categoryDisplay`                 | `string`                                          | Raw `category_display`.                                                                               |
| `tier` / `rarity`                 | `string`                                          | Raw `tier` and `rarity`.                                                                              |
| `npcSellPrice`                    | `number`                                          | Raw `npc_sell_price`.                                                                                 |
| `motesSellPrice`                  | `number`                                          | Raw `motes_sell_price`.                                                                               |
| `salvages`                        | `ReadonlyArray<SkyBlockItemCost>`                 | Raw `salvages`.                                                                                       |
| `salvage`                         | `SkyBlockItemCost`                                | Raw `salvage`.                                                                                        |
| `raritySalvageable`               | `boolean`                                         | Raw `rarity_salvageable`.                                                                             |
| `salvageableFromRecipe`           | `boolean`                                         | Raw `salvageable_from_recipe`.                                                                        |
| `stats`                           | `Readonly<Record<string, number>>`                | Numeric values only, from raw `stats`.                                                                |
| `tieredStats`                     | `Readonly<Record<string, ReadonlyArray<number>>>` | Arrays of numbers from raw `tiered_stats`.                                                            |
| `miningFortune`                   | `number`                                          | Raw `MINING_FORTUNE`.                                                                                 |
| `hasUuid`                         | `boolean \| string`                               | String when the raw `has_uuid` is a string; otherwise `true` only if the raw value is exactly `true`. |
| `requirements`                    | `ReadonlyArray<SkyBlockItemRequirement>`          | Raw `requirements`.                                                                                   |
| `catacombsRequirements`           | `ReadonlyArray<SkyBlockItemRequirement>`          | Raw `catacombs_requirements`.                                                                         |
| `generatorTier`                   | `number`                                          | Raw `generator_tier`.                                                                                 |
| `itemSpecific`                    | `Readonly<Record<string, SkyBlockJsonValue>>`     | Raw `item_specific` map, untyped JSON values.                                                         |
| `upgradeCosts`                    | `ReadonlyArray<ReadonlyArray<SkyBlockItemCost>>`  | Nested array of cost arrays, from raw `upgrade_costs`.                                                |
| `gearScore`                       | `number`                                          | Raw `gear_score`.                                                                                     |
| `dungeonItemConversionCost`       | `SkyBlockItemCost`                                | Raw `dungeon_item_conversion_cost`.                                                                   |
| `enchantments`                    | `Readonly<Record<string, number>>`                | Numeric values only, from raw `enchantments`.                                                         |
| `hideFromViewRecipeCommand`       | `boolean`                                         | Raw `hide_from_viewrecipe_command`.                                                                   |
| `abilityDamageScaling`            | `number`                                          | Raw `ability_damage_scaling`.                                                                         |
| `isUpgradeableWithoutSoulbinding` | `boolean`                                         | Raw `is_upgradeable_without_soulbinding`.                                                             |

### SkyBlockItemSkin

The item's texture skin, mapped from the raw `skin` object.

```ts
export interface SkyBlockItemSkin {
  readonly value: string;
  readonly signature: string;
}
```

Fields are populated from raw `value` and `signature`; default to empty strings when absent.

### SkyBlockItemCost

A single cost entry, used for salvages, gemstone slot costs, upgrade costs, prestige costs, and conversion costs.

```ts
export interface SkyBlockItemCost {
  readonly type: string;
  readonly essenceType: string;
  readonly itemId: string;
  readonly coins: number;
  readonly amount: number;
}
```

Mapped from raw `type`, `essence_type`, `item_id`, `coins`, and `amount`.

### SkyBlockItemMuseumData

Museum metadata for the item, mapped from the raw `museum_data` object.

```ts
export interface SkyBlockItemMuseumData {
  readonly donationXp: number;
  readonly category: string;
  readonly parent: Readonly<Record<string, string>>;
  readonly mappedItemIds: ReadonlyArray<string>;
  readonly gameStage: string;
  readonly armorSetDonationXp: Readonly<Record<string, number>>;
}
```

| Field                | Raw source              | Notes                   |
| -------------------- | ----------------------- | ----------------------- |
| `donationXp`         | `donation_xp`           | Number.                 |
| `category`           | `category`              | String.                 |
| `parent`             | `parent`                | String-valued map only. |
| `mappedItemIds`      | `mapped_item_ids`       | String entries only.    |
| `gameStage`          | `game_stage`            | String.                 |
| `armorSetDonationXp` | `armor_set_donation_xp` | Number-valued map only. |

### SkyBlockItemGemstoneSlot

A gemstone slot on the item, from entries of the raw `gemstone_slots` array.

```ts
export interface SkyBlockItemGemstoneSlot {
  readonly slotType: string;
  readonly costs: ReadonlyArray<SkyBlockItemCost>;
  readonly requirements: ReadonlyArray<SkyBlockItemGemstoneSlotRequirement>;
}
```

Mapped from raw `slot_type`, `costs`, and `requirements`.

### SkyBlockItemGemstoneSlotRequirement

A requirement entry for a gemstone slot, from a slot's raw `requirements` array.

```ts
export interface SkyBlockItemGemstoneSlotRequirement {
  readonly type: string;
  readonly dataKey: string;
  readonly value: string;
  readonly operator: string;
}
```

Mapped from raw `type`, `data_key`, `value`, and `operator`.

### SkyBlockItemRequirement

An item requirement, used by both `requirements` and `catacombsRequirements`. This type is recursive: its own `requirements` field holds nested requirements.

```ts
export interface SkyBlockItemRequirement {
  readonly type: string;
  readonly skill: string;
  readonly level: number;
  readonly tier: number;
  readonly dungeonType: string;
  readonly slayerBossType: string;
  readonly collection: string;
  readonly reward: string;
  readonly faction: string;
  readonly reputation: number;
  readonly trophyType: string;
  readonly rabbit: string;
  readonly mode: string;
  readonly kuudraTier: string;
  readonly profileType: string;
  readonly amount: number;
  readonly loreIndex: number;
  readonly minimumAge: number;
  readonly minimumAgeUnit: string;
  readonly requirements: ReadonlyArray<SkyBlockItemRequirement>;
}
```

| Field            | Raw source              |
| ---------------- | ----------------------- |
| `type`           | `type`                  |
| `skill`          | `skill`                 |
| `level`          | `level`                 |
| `tier`           | `tier`                  |
| `dungeonType`    | `dungeon_type`          |
| `slayerBossType` | `slayer_boss_type`      |
| `collection`     | `collection`            |
| `reward`         | `reward`                |
| `faction`        | `faction`               |
| `reputation`     | `reputation`            |
| `trophyType`     | `trophy_type`           |
| `rabbit`         | `rabbit`                |
| `mode`           | `mode`                  |
| `kuudraTier`     | `kuudra_tier`           |
| `profileType`    | `profile_type`          |
| `amount`         | `amount`                |
| `loreIndex`      | `lore_index`            |
| `minimumAge`     | `minimum_age`           |
| `minimumAgeUnit` | `minimum_age_unit`      |
| `requirements`   | `requirements` (nested) |

### SkyBlockItemComponent

A component descriptor from entries of the raw `components` array.

```ts
export interface SkyBlockItemComponent {
  readonly type: string;
  readonly showItemsFirst: ReadonlyArray<string>;
  readonly showItemsLast: ReadonlyArray<string>;
  readonly excludedItems: ReadonlyArray<string>;
  readonly sortByCategory: boolean;
  readonly allowDuplicates: boolean;
  readonly sortByAccessoryTier: boolean;
}
```

| Field                 | Raw source               |
| --------------------- | ------------------------ |
| `type`                | `type`                   |
| `showItemsFirst`      | `show_items_first`       |
| `showItemsLast`       | `show_items_last`        |
| `excludedItems`       | `excluded_items`         |
| `sortByCategory`      | `sort_by_category`       |
| `allowDuplicates`     | `allow_duplicates`       |
| `sortByAccessoryTier` | `sort_by_accessory_tier` |

### SkyBlockItemRecipe

A crafting recipe from entries of the raw `recipes` array.

```ts
export interface SkyBlockItemRecipe {
  readonly output: SkyBlockItemRecipeOutput;
  readonly ingredientSymbols: Readonly<Record<string, string>>;
  readonly matrix: ReadonlyArray<string>;
  readonly allowQuickCrafting: boolean;
}
```

Mapped from raw `output`, `ingredient_symbols` (string-valued map), `matrix` (string entries only), and `allow_quick_crafting`.

### SkyBlockItemRecipeOutput

The output item of a recipe, from the recipe's raw `output` object.

```ts
export interface SkyBlockItemRecipeOutput {
  readonly itemId: string;
}
```

Mapped from raw `item_id`.

### SkyBlockItemPrestige

The item's prestige progression, mapped from the raw `prestige` object.

```ts
export interface SkyBlockItemPrestige {
  readonly itemId: string;
  readonly costs: ReadonlyArray<SkyBlockItemCost>;
}
```

Mapped from raw `item_id` and `costs`.

### SkyBlockJsonValue

A recursive union representing arbitrary JSON used by the `itemSpecific` map, where the raw shape is open-ended.

```ts
export type SkyBlockJsonValue =
  | string
  | number
  | boolean
  | null
  | readonly SkyBlockJsonValue[]
  | { readonly [key: string]: SkyBlockJsonValue };
```

