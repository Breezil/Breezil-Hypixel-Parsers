import { num, str, bool, obj } from "./common";

export type SkyBlockJsonValue =
  | string
  | number
  | boolean
  | null
  | readonly SkyBlockJsonValue[]
  | { readonly [key: string]: SkyBlockJsonValue };

export interface SkyBlockItemSkin {
  readonly value: string;
  readonly signature: string;
}

export interface SkyBlockItemCost {
  readonly type: string;
  readonly essenceType: string;
  readonly itemId: string;
  readonly coins: number;
  readonly amount: number;
}

export interface SkyBlockItemMuseumData {
  readonly donationXp: number;
  readonly category: string;
  readonly parent: Readonly<Record<string, string>>;
  readonly mappedItemIds: ReadonlyArray<string>;
  readonly gameStage: string;
  readonly armorSetDonationXp: Readonly<Record<string, number>>;
}

export interface SkyBlockItemGemstoneSlotRequirement {
  readonly type: string;
  readonly dataKey: string;
  readonly value: string;
  readonly operator: string;
}

export interface SkyBlockItemGemstoneSlot {
  readonly slotType: string;
  readonly costs: ReadonlyArray<SkyBlockItemCost>;
  readonly requirements: ReadonlyArray<SkyBlockItemGemstoneSlotRequirement>;
}

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

export interface SkyBlockItemRecipeOutput {
  readonly itemId: string;
}

export interface SkyBlockItemRecipe {
  readonly output: SkyBlockItemRecipeOutput;
  readonly ingredientSymbols: Readonly<Record<string, string>>;
  readonly matrix: ReadonlyArray<string>;
  readonly allowQuickCrafting: boolean;
}

export interface SkyBlockItemComponent {
  readonly type: string;
  readonly showItemsFirst: ReadonlyArray<string>;
  readonly showItemsLast: ReadonlyArray<string>;
  readonly excludedItems: ReadonlyArray<string>;
  readonly sortByCategory: boolean;
  readonly allowDuplicates: boolean;
  readonly sortByAccessoryTier: boolean;
}

export interface SkyBlockItemPrestige {
  readonly itemId: string;
  readonly costs: ReadonlyArray<SkyBlockItemCost>;
}

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

function isPlainObject(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function objectArray(
  item: Record<string, unknown>,
  key: string,
): readonly Record<string, unknown>[] {
  const value = item[key];
  return Array.isArray(value) ? value.filter(isPlainObject) : [];
}

function nestedObjectArray(
  item: Record<string, unknown>,
  key: string,
): readonly (readonly Record<string, unknown>[])[] {
  const value = item[key];
  if (!Array.isArray(value)) {
    return [];
  }
  return value.map((inner) =>
    Array.isArray(inner) ? inner.filter(isPlainObject) : [],
  );
}

function stringList(value: unknown): readonly string[] {
  if (!Array.isArray(value)) {
    return [];
  }
  return value.filter((entry): entry is string => typeof entry === "string");
}

function numberMap(
  parent: Record<string, unknown>,
  key: string,
): Record<string, number> {
  const result: Record<string, number> = {};
  for (const [name, value] of Object.entries(obj(parent, key))) {
    if (typeof value === "number") {
      result[name] = value;
    }
  }
  return result;
}

function numberArrayMap(
  parent: Record<string, unknown>,
  key: string,
): Record<string, readonly number[]> {
  const result: Record<string, readonly number[]> = {};
  for (const [name, value] of Object.entries(obj(parent, key))) {
    if (Array.isArray(value)) {
      result[name] = value.filter(
        (entry): entry is number => typeof entry === "number",
      );
    }
  }
  return result;
}

function stringMap(
  parent: Record<string, unknown>,
  key: string,
): Record<string, string> {
  const result: Record<string, string> = {};
  for (const [name, value] of Object.entries(obj(parent, key))) {
    if (typeof value === "string") {
      result[name] = value;
    }
  }
  return result;
}

function jsonMap(
  parent: Record<string, unknown>,
  key: string,
): Record<string, SkyBlockJsonValue> {
  return obj(parent, key) as Record<string, SkyBlockJsonValue>;
}

function durabilityValue(item: Record<string, unknown>): number | string {
  const value = item.durability;
  if (typeof value === "string") {
    return value;
  }
  return typeof value === "number" ? value : 0;
}

function parseCost(cost: Record<string, unknown>): SkyBlockItemCost {
  return {
    type: str(cost, "type"),
    essenceType: str(cost, "essence_type"),
    itemId: str(cost, "item_id"),
    coins: num(cost, "coins"),
    amount: num(cost, "amount"),
  };
}

function costArray(
  parent: Record<string, unknown>,
  key: string,
): ReadonlyArray<SkyBlockItemCost> {
  return objectArray(parent, key).map(parseCost);
}

function parseSkin(item: Record<string, unknown>): SkyBlockItemSkin {
  const skin = obj(item, "skin");
  return {
    value: str(skin, "value"),
    signature: str(skin, "signature"),
  };
}

function parseMuseumData(
  item: Record<string, unknown>,
): SkyBlockItemMuseumData {
  const museum = obj(item, "museum_data");
  return {
    donationXp: num(museum, "donation_xp"),
    category: str(museum, "category"),
    parent: stringMap(museum, "parent"),
    mappedItemIds: stringList(museum.mapped_item_ids),
    gameStage: str(museum, "game_stage"),
    armorSetDonationXp: numberMap(museum, "armor_set_donation_xp"),
  };
}

function parseGemstoneSlotRequirements(
  slot: Record<string, unknown>,
): ReadonlyArray<SkyBlockItemGemstoneSlotRequirement> {
  return objectArray(slot, "requirements").map((requirement) => ({
    type: str(requirement, "type"),
    dataKey: str(requirement, "data_key"),
    value: str(requirement, "value"),
    operator: str(requirement, "operator"),
  }));
}

function parseGemstoneSlots(
  item: Record<string, unknown>,
): ReadonlyArray<SkyBlockItemGemstoneSlot> {
  return objectArray(item, "gemstone_slots").map((slot) => ({
    slotType: str(slot, "slot_type"),
    costs: costArray(slot, "costs"),
    requirements: parseGemstoneSlotRequirements(slot),
  }));
}

function parseRequirement(
  requirement: Record<string, unknown>,
): SkyBlockItemRequirement {
  return {
    type: str(requirement, "type"),
    skill: str(requirement, "skill"),
    level: num(requirement, "level"),
    tier: num(requirement, "tier"),
    dungeonType: str(requirement, "dungeon_type"),
    slayerBossType: str(requirement, "slayer_boss_type"),
    collection: str(requirement, "collection"),
    reward: str(requirement, "reward"),
    faction: str(requirement, "faction"),
    reputation: num(requirement, "reputation"),
    trophyType: str(requirement, "trophy_type"),
    rabbit: str(requirement, "rabbit"),
    mode: str(requirement, "mode"),
    kuudraTier: str(requirement, "kuudra_tier"),
    profileType: str(requirement, "profile_type"),
    amount: num(requirement, "amount"),
    loreIndex: num(requirement, "lore_index"),
    minimumAge: num(requirement, "minimum_age"),
    minimumAgeUnit: str(requirement, "minimum_age_unit"),
    requirements: objectArray(requirement, "requirements").map(
      parseRequirement,
    ),
  };
}

function parseRequirements(
  item: Record<string, unknown>,
  key: string,
): ReadonlyArray<SkyBlockItemRequirement> {
  return objectArray(item, key).map(parseRequirement);
}

function parseComponents(
  item: Record<string, unknown>,
): ReadonlyArray<SkyBlockItemComponent> {
  return objectArray(item, "components").map((component) => ({
    type: str(component, "type"),
    showItemsFirst: stringList(component.show_items_first),
    showItemsLast: stringList(component.show_items_last),
    excludedItems: stringList(component.excluded_items),
    sortByCategory: bool(component, "sort_by_category"),
    allowDuplicates: bool(component, "allow_duplicates"),
    sortByAccessoryTier: bool(component, "sort_by_accessory_tier"),
  }));
}

function parseRecipe(recipe: Record<string, unknown>): SkyBlockItemRecipe {
  return {
    output: { itemId: str(obj(recipe, "output"), "item_id") },
    ingredientSymbols: stringMap(recipe, "ingredient_symbols"),
    matrix: stringList(recipe.matrix),
    allowQuickCrafting: bool(recipe, "allow_quick_crafting"),
  };
}

function parsePrestige(item: Record<string, unknown>): SkyBlockItemPrestige {
  const prestige = obj(item, "prestige");
  return {
    itemId: str(prestige, "item_id"),
    costs: costArray(prestige, "costs"),
  };
}

function hasUuid(item: Record<string, unknown>): boolean | string {
  const value = item.has_uuid;
  return typeof value === "string" ? value : value === true;
}

function parseItem(item: Record<string, unknown>): SkyBlockItem {
  return {
    id: str(item, "id"),
    name: str(item, "name"),
    material: str(item, "material"),
    durability: durabilityValue(item),
    skin: parseSkin(item),
    itemModel: str(item, "item_model"),
    category: str(item, "category"),
    categoryDisplay: str(item, "category_display"),
    tier: str(item, "tier"),
    rarity: str(item, "rarity"),
    npcSellPrice: num(item, "npc_sell_price"),
    motesSellPrice: num(item, "motes_sell_price"),
    salvages: costArray(item, "salvages"),
    salvage: parseCost(obj(item, "salvage")),
    raritySalvageable: bool(item, "rarity_salvageable"),
    salvageableFromRecipe: bool(item, "salvageable_from_recipe"),
    stats: numberMap(item, "stats"),
    tieredStats: numberArrayMap(item, "tiered_stats"),
    miningFortune: num(item, "MINING_FORTUNE"),
    unstackable: bool(item, "unstackable"),
    museumData: parseMuseumData(item),
    museum: bool(item, "museum"),
    color: str(item, "color"),
    soulbound: str(item, "soulbound"),
    hasUuid: hasUuid(item),
    gemstoneSlots: parseGemstoneSlots(item),
    glowing: bool(item, "glowing"),
    canAuction: bool(item, "can_auction"),
    canTrade: bool(item, "can_trade"),
    requirements: parseRequirements(item, "requirements"),
    catacombsRequirements: parseRequirements(item, "catacombs_requirements"),
    canPlace: bool(item, "can_place"),
    generator: str(item, "generator"),
    generatorTier: num(item, "generator_tier"),
    furniture: str(item, "furniture"),
    components: parseComponents(item),
    itemSpecific: jsonMap(item, "item_specific"),
    description: str(item, "description"),
    upgradeCosts: nestedObjectArray(item, "upgrade_costs").map((inner) =>
      inner.map(parseCost),
    ),
    gearScore: num(item, "gear_score"),
    dungeonItem: bool(item, "dungeon_item"),
    dungeonItemConversionCost: parseCost(
      obj(item, "dungeon_item_conversion_cost"),
    ),
    canHaveAttributes: bool(item, "can_have_attributes"),
    canHaveBooster: bool(item, "can_have_booster"),
    canRecombobulate: bool(item, "can_recombobulate"),
    cannotReforge: bool(item, "cannot_reforge"),
    forceWipeRecomb: bool(item, "force_wipe_recomb"),
    enchantments: numberMap(item, "enchantments"),
    riftTransferrable: bool(item, "rift_transferrable"),
    loseMotesValueOnTransfer: bool(item, "lose_motes_value_on_transfer"),
    origin: str(item, "origin"),
    editioned: bool(item, "editioned"),
    hideFromApi: bool(item, "hide_from_api"),
    doubleTapToDrop: bool(item, "double_tap_to_drop"),
    hideFromViewRecipeCommand: bool(item, "hide_from_viewrecipe_command"),
    swordType: str(item, "sword_type"),
    abilityDamageScaling: num(item, "ability_damage_scaling"),
    crystal: str(item, "crystal"),
    canBurnInFurnace: bool(item, "can_burn_in_furnace"),
    serializable: bool(item, "serializable"),
    canInteract: bool(item, "can_interact"),
    canInteractRightClick: bool(item, "can_interact_right_click"),
    canInteractEntity: bool(item, "can_interact_entity"),
    privateIsland: str(item, "private_island"),
    canHavePowerScroll: bool(item, "can_have_power_scroll"),
    isUpgradeableWithoutSoulbinding: bool(
      item,
      "is_upgradeable_without_soulbinding",
    ),
    recipes: objectArray(item, "recipes").map(parseRecipe),
    prestige: parsePrestige(item),
  };
}

/** Parses the SkyBlock item registry (`/resources/skyblock/items`) into a typed object. */
export function parseSkyBlockItems(items: unknown[]): SkyBlockItem[] {
  const result: SkyBlockItem[] = [];
  for (const entry of items) {
    if (!isPlainObject(entry)) {
      continue;
    }
    result.push(parseItem(entry));
  }
  return result;
}

