import { date, num, obj, str } from "./common";

function stringArray(
  source: Record<string, unknown>,
  key: string,
): readonly string[] {
  const value = source[key];
  return Array.isArray(value)
    ? value.filter((entry): entry is string => typeof entry === "string")
    : [];
}

function numberRecord(
  source: Record<string, unknown>,
  key: string,
): Record<string, number> {
  const result: Record<string, number> = {};
  for (const [entryKey, value] of Object.entries(obj(source, key))) {
    if (typeof value === "number") {
      result[entryKey] = value;
    }
  }
  return result;
}

export interface SkyBlockGardenVisitors {
  readonly visited: Record<string, number>;
  readonly completed: Record<string, number>;
  readonly totalCompleted: number;
  readonly uniqueNpcsServed: number;
}

function parseVisitors(
  commission: Record<string, unknown>,
): SkyBlockGardenVisitors {
  return {
    visited: numberRecord(commission, "visits"),
    completed: numberRecord(commission, "completed"),
    totalCompleted: num(commission, "total_completed"),
    uniqueNpcsServed: num(commission, "unique_npcs_served"),
  };
}

export interface SkyBlockGardenVisitorRequirement {
  readonly originalItem: string;
  readonly originalAmount: number;
  readonly item: string;
  readonly amount: number;
}

export interface SkyBlockGardenActiveVisitor {
  readonly visitor: string;
  readonly requirements: readonly SkyBlockGardenVisitorRequirement[];
  readonly status: string;
  readonly position: number;
}

function parseVisitorRequirement(
  requirement: Record<string, unknown>,
): SkyBlockGardenVisitorRequirement {
  return {
    originalItem: str(requirement, "original_item"),
    originalAmount: num(requirement, "original_amount"),
    item: str(requirement, "item"),
    amount: num(requirement, "amount"),
  };
}

function parseActiveVisitor(
  visitor: Record<string, unknown>,
  name: string,
): SkyBlockGardenActiveVisitor {
  const requirements = visitor.requirement;
  return {
    visitor: name,
    requirements: Array.isArray(requirements)
      ? requirements
          .filter(
            (entry): entry is Record<string, unknown> =>
              typeof entry === "object" &&
              entry !== null &&
              !Array.isArray(entry),
          )
          .map(parseVisitorRequirement)
      : [],
    status: str(visitor, "status"),
    position: num(visitor, "position"),
  };
}

export interface SkyBlockGardenComposterUpgrades {
  readonly speed: number;
  readonly multiDrop: number;
  readonly fuelCap: number;
  readonly organicMatterCap: number;
  readonly costReduction: number;
}

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

function parseComposter(
  composter: Record<string, unknown>,
): SkyBlockGardenComposter {
  const upgrades = obj(composter, "upgrades");
  return {
    organicMatter: num(composter, "organic_matter"),
    fuelUnits: num(composter, "fuel_units"),
    compostUnits: num(composter, "compost_units"),
    compostItems: num(composter, "compost_items"),
    conversionTicks: num(composter, "conversion_ticks"),
    lastSaveTimestamp: num(composter, "last_save"),
    lastSaveAt: date(composter, "last_save"),
    upgrades: {
      speed: num(upgrades, "speed"),
      multiDrop: num(upgrades, "multi_drop"),
      fuelCap: num(upgrades, "fuel_cap"),
      organicMatterCap: num(upgrades, "organic_matter_cap"),
      costReduction: num(upgrades, "cost_reduction"),
    },
  };
}

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

export interface SkyBlockGardenCropMilestones extends SkyBlockGardenCrops {
  readonly moonFlower: number;
  readonly sunFlower: number;
  readonly wildRose: number;
}

function parseBaseCrops(source: Record<string, unknown>): SkyBlockGardenCrops {
  return {
    wheat: num(source, "WHEAT"),
    carrot: num(source, "CARROT_ITEM"),
    sugarCane: num(source, "SUGAR_CANE"),
    potato: num(source, "POTATO_ITEM"),
    pumpkin: num(source, "PUMPKIN"),
    melon: num(source, "MELON"),
    cactus: num(source, "CACTUS"),
    cocoaBeans: num(source, "INK_SACK:3"),
    mushroom: num(source, "MUSHROOM_COLLECTION"),
    netherWart: num(source, "NETHER_STALK"),
  };
}

function parseCropMilestones(
  resources: Record<string, unknown>,
): SkyBlockGardenCropMilestones {
  return {
    ...parseBaseCrops(resources),
    moonFlower: num(resources, "MOONFLOWER"),
    sunFlower: num(resources, "DOUBLE_PLANT"),
    wildRose: num(resources, "WILD_ROSE"),
  };
}

export interface SkyBlockGardenUpgrades {
  readonly growthSpeed: number;
  readonly yield: number;
  readonly plotLimit: number;
}

export interface SkyBlockGardenGreenhouseSlot {
  readonly x: number;
  readonly z: number;
}

function parseGreenhouseSlots(
  garden: Record<string, unknown>,
): readonly SkyBlockGardenGreenhouseSlot[] {
  const value = garden.greenhouse_slots;
  if (!Array.isArray(value)) {
    return [];
  }
  const result: SkyBlockGardenGreenhouseSlot[] = [];
  for (const entry of value) {
    if (typeof entry !== "object" || entry === null || Array.isArray(entry)) {
      continue;
    }
    const slot = entry as Record<string, unknown>;
    result.push({ x: num(slot, "x"), z: num(slot, "z") });
  }
  return result;
}

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

/** Parses a SkyBlock garden (`/skyblock/garden`) into a typed object. */
export function parseGarden(garden: Record<string, unknown>): SkyBlockGarden {
  const activeCommissions = obj(garden, "active_commissions");
  const currentVisitors: SkyBlockGardenActiveVisitor[] = [];
  for (const [name, value] of Object.entries(activeCommissions)) {
    if (typeof value === "object" && value !== null && !Array.isArray(value)) {
      currentVisitors.push(
        parseActiveVisitor(value as Record<string, unknown>, name),
      );
    }
  }

  const gardenUpgrades = obj(garden, "garden_upgrades");
  return {
    uuid: str(garden, "uuid"),
    gardenExperience: num(garden, "garden_experience"),
    barnSkin: str(garden, "selected_barn_skin"),
    unlockedBarnSkins: stringArray(garden, "unlocked_barn_skins"),
    unlockedPlots: stringArray(garden, "unlocked_plots_ids"),
    visitors: parseVisitors(obj(garden, "commission_data")),
    currentVisitors,
    cropMilestones: parseCropMilestones(obj(garden, "resources_collected")),
    composter: parseComposter(obj(garden, "composter_data")),
    cropUpgrades: parseCropMilestones(obj(garden, "crop_upgrade_levels")),
    gardenUpgrades: {
      growthSpeed: num(gardenUpgrades, "GROWTH_SPEED"),
      yield: num(gardenUpgrades, "YIELD"),
      plotLimit: num(gardenUpgrades, "PLOT_LIMIT"),
    },
    greenhouseSlots: parseGreenhouseSlots(garden),
    lastGrowthStageTimestamp: num(garden, "last_growth_stage_time"),
    lastGrowthStageAt: date(garden, "last_growth_stage_time"),
  };
}

export interface SkyBlockFireSale {
  readonly itemId: string;
  readonly amount: number;
  readonly price: number;
  readonly startTimestamp: number;
  readonly startAt: Date | null;
  readonly endTimestamp: number;
  readonly endAt: Date | null;
}

/** Parses the SkyBlock fire sales (`/skyblock/firesales`) into a typed object. */
export function parseFireSales(sales: unknown[]): SkyBlockFireSale[] {
  const result: SkyBlockFireSale[] = [];
  for (const entry of sales) {
    if (typeof entry !== "object" || entry === null || Array.isArray(entry)) {
      continue;
    }
    const raw = entry as Record<string, unknown>;
    result.push({
      itemId: str(raw, "item_id"),
      amount: num(raw, "amount"),
      price: num(raw, "price"),
      startTimestamp: num(raw, "start"),
      startAt: date(raw, "start"),
      endTimestamp: num(raw, "end"),
      endAt: date(raw, "end"),
    });
  }
  return result;
}

