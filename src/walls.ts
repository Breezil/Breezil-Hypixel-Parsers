import { num, bool, obj } from "./common";

export interface WallsStats {
  readonly coins: number;
  readonly kills: number;
  readonly deaths: number;
  readonly assists: number;
  readonly wins: number;
  readonly losses: number;
  readonly insaneFarmer: number;
  readonly blood: boolean;
  readonly combatTracker: boolean;
  readonly noStartingArmor: boolean;
  readonly noStartingItems: boolean;
  readonly noStartingTools: boolean;
  readonly shoutCount: number;
  readonly votesFantasy: number;
  readonly monthlyAssistsA: number;
  readonly monthlyAssistsB: number;
  readonly weeklyAssistsA: number;
  readonly weeklyAssistsB: number;
  readonly monthlyKillsA: number;
  readonly monthlyKillsB: number;
  readonly weeklyKillsA: number;
  readonly weeklyKillsB: number;
  readonly monthlyWinsA: number;
  readonly monthlyWinsB: number;
  readonly weeklyWinsA: number;
  readonly weeklyWinsB: number;
  readonly adrenaline: number;
  readonly artisan: number;
  readonly attractor: number;
  readonly bacon: number;
  readonly berserk: number;
  readonly blacksmith: number;
  readonly blacksmithStarter: number;
  readonly bomberman: number;
  readonly bossDigger: number;
  readonly bossGuardian: number;
  readonly bossSkills: number;
  readonly burnBabyBurn: number;
  readonly canadian: number;
  readonly catsEye: number;
  readonly chainkiller: number;
  readonly chef: number;
  readonly chemist: number;
  readonly creeperEgg: number;
  readonly dwarwenSkills: number;
  readonly ecologist: number;
  readonly einstein: number;
  readonly escapist: number;
  readonly excavator: number;
  readonly expertMiner: number;
  readonly farmer: number;
  readonly finalForm: number;
  readonly fireproof: number;
  readonly fisherman: number;
  readonly fortune: number;
  readonly getToTheChoppa: number;
  readonly goldRush: number;
  readonly graveDigger: number;
  readonly grimReaper: number;
  readonly guitarist: number;
  readonly haste: number;
  readonly hunter: number;
  readonly lazyman: number;
  readonly leatherWorker: number;
  readonly masterTroll: number;
  readonly necromancer: number;
  readonly opportunity: number;
  readonly pyromaniac: number;
  readonly ready: number;
  readonly reallyShiny: number;
  readonly redstoneExpert: number;
  readonly sage: number;
  readonly scotsman: number;
  readonly skybaseKing: number;
  readonly smartBoy: number;
  readonly snackLover: number;
  readonly soupDrinker: number;
  readonly step: number;
  readonly stoneGuardian: number;
  readonly swift: number;
  readonly tenacity: number;
  readonly thatsHot: number;
  readonly tragedy: number;
  readonly trapEngineer: number;
  readonly vampirism: number;
  readonly veryFortunate: number;
  readonly vitality: number;
  readonly packages: readonly string[];
  readonly inventory: Readonly<Record<string, string>>;
  readonly inventoryLayout: Readonly<Record<string, string>>;
  readonly inventoryLayout2: Readonly<Record<string, string>>;
}

function strList(
  block: Record<string, unknown>,
  key: string,
): readonly string[] {
  const value = block[key];
  return Array.isArray(value)
    ? value.filter((item): item is string => typeof item === "string")
    : [];
}

function strMap(
  parent: Record<string, unknown>,
  key: string,
): Readonly<Record<string, string>> {
  const value = obj(parent, key);
  const result: Record<string, string> = {};
  for (const [slot, item] of Object.entries(value)) {
    if (typeof item === "string") {
      result[slot] = item;
    }
  }
  return result;
}

/** Parses a player's Walls stats (`stats.Walls`) into a typed object. */
export function parseWalls(stats: Record<string, unknown>): WallsStats | null {
  const raw = stats.Walls;
  if (typeof raw !== "object" || raw === null || Array.isArray(raw)) {
    return null;
  }
  const walls = raw as Record<string, unknown>;
  return {
    coins: num(walls, "coins") || num(walls, "tokens"),
    kills: num(walls, "kills"),
    deaths: num(walls, "deaths"),
    assists: num(walls, "assists"),
    wins: num(walls, "wins"),
    losses: num(walls, "losses"),
    insaneFarmer: num(walls, "insane_farmer"),
    blood: bool(walls, "blood"),
    combatTracker: bool(walls, "combatTracker"),
    noStartingArmor: bool(walls, "no_starting_armor"),
    noStartingItems: bool(walls, "no_starting_items"),
    noStartingTools: bool(walls, "no_starting_tools"),
    shoutCount: num(walls, "shout_count"),
    votesFantasy: num(walls, "votes_Fantasy"),
    monthlyAssistsA: num(walls, "monthly_assists_a"),
    monthlyAssistsB: num(walls, "monthly_assists_b"),
    weeklyAssistsA: num(walls, "weekly_assists_a"),
    weeklyAssistsB: num(walls, "weekly_assists_b"),
    monthlyKillsA: num(walls, "monthly_kills_a"),
    monthlyKillsB: num(walls, "monthly_kills_b"),
    weeklyKillsA: num(walls, "weekly_kills_a"),
    weeklyKillsB: num(walls, "weekly_kills_b"),
    monthlyWinsA: num(walls, "monthly_wins_a"),
    monthlyWinsB: num(walls, "monthly_wins_b"),
    weeklyWinsA: num(walls, "weekly_wins_a"),
    weeklyWinsB: num(walls, "weekly_wins_b"),
    adrenaline: num(walls, "adrenaline"),
    artisan: num(walls, "artisan"),
    attractor: num(walls, "attractor"),
    bacon: num(walls, "bacon"),
    berserk: num(walls, "berserk"),
    blacksmith: num(walls, "blacksmith"),
    blacksmithStarter: num(walls, "blacksmith_starter"),
    bomberman: num(walls, "bomberman"),
    bossDigger: num(walls, "boss_digger"),
    bossGuardian: num(walls, "boss_guardian"),
    bossSkills: num(walls, "boss_skills"),
    burnBabyBurn: num(walls, "burn_baby_burn"),
    canadian: num(walls, "canadian"),
    catsEye: num(walls, "cats_eye"),
    chainkiller: num(walls, "chainkiller"),
    chef: num(walls, "chef"),
    chemist: num(walls, "chemist"),
    creeperEgg: num(walls, "creeper_egg"),
    dwarwenSkills: num(walls, "dwarwen_skills"),
    ecologist: num(walls, "ecologist"),
    einstein: num(walls, "einstein"),
    escapist: num(walls, "escapist"),
    excavator: num(walls, "excavator"),
    expertMiner: num(walls, "expert_miner"),
    farmer: num(walls, "farmer"),
    finalForm: num(walls, "final_form"),
    fireproof: num(walls, "fireproof"),
    fisherman: num(walls, "fisherman"),
    fortune: num(walls, "fortune"),
    getToTheChoppa: num(walls, "get_to_the_choppa"),
    goldRush: num(walls, "gold_rush"),
    graveDigger: num(walls, "grave_digger"),
    grimReaper: num(walls, "grim_reaper"),
    guitarist: num(walls, "guitarist"),
    haste: num(walls, "haste"),
    hunter: num(walls, "hunter"),
    lazyman: num(walls, "lazyman"),
    leatherWorker: num(walls, "leather_worker"),
    masterTroll: num(walls, "master_troll"),
    necromancer: num(walls, "necromancer"),
    opportunity: num(walls, "opportunity"),
    pyromaniac: num(walls, "pyromaniac"),
    ready: num(walls, "ready"),
    reallyShiny: num(walls, "really_shiny"),
    redstoneExpert: num(walls, "redstone_expert"),
    sage: num(walls, "sage"),
    scotsman: num(walls, "scotsman"),
    skybaseKing: num(walls, "skybase_king"),
    smartBoy: num(walls, "smart_boy"),
    snackLover: num(walls, "snack_lover"),
    soupDrinker: num(walls, "soup_drinker"),
    step: num(walls, "step"),
    stoneGuardian: num(walls, "stone_guardian"),
    swift: num(walls, "swift"),
    tenacity: num(walls, "tenacity"),
    thatsHot: num(walls, "thats_hot"),
    tragedy: num(walls, "tragedy"),
    trapEngineer: num(walls, "trap_engineer"),
    vampirism: num(walls, "vampirism"),
    veryFortunate: num(walls, "very_fortunate"),
    vitality: num(walls, "vitality"),
    packages: strList(walls, "packages"),
    inventory: strMap(walls, "Inventory"),
    inventoryLayout: strMap(walls, "InventoryLayout"),
    inventoryLayout2: strMap(walls, "InventoryLayout2"),
  };
}

