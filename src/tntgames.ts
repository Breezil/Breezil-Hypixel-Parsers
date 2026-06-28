import { num, str, bool, date, obj } from "./common";

export interface TNTGamesTNTRunStats {
  readonly wins: number;
  readonly deaths: number;
  readonly bestTime: number;
  readonly doubleJumpTier: number;
  readonly doubleJumps: number;
  readonly doubleJumpsLegacy: number;
  readonly slownessPotions: number;
  readonly speedPotions: number;
  readonly potionsSplashedOnPlayers: number;
  readonly prefix: string;
}

export interface TNTGamesTournamentRound {
  readonly round: number;
  readonly wins: number;
  readonly deaths: number;
}

export interface TNTGamesPVPRunStats {
  readonly wins: number;
  readonly kills: number;
  readonly deaths: number;
  readonly bestTime: number;
  readonly regeneration: number;
  readonly notoriety: number;
  readonly fortitude: number;
  readonly doubleJumps: number;
  readonly doubleJumpsLegacy: number;
  readonly prefix: string;
}

export interface TNTGamesBowSpleefStats {
  readonly wins: number;
  readonly deaths: number;
  readonly tags: number;
  readonly doubleJumpTier: number;
  readonly repulsorTier: number;
  readonly tripleShotTier: number;
  readonly doubleJumps: number;
  readonly doubleJumpsLegacy: number;
  readonly repulsor: number;
  readonly repulsorLegacy: number;
  readonly tripleShot: number;
  readonly tripleShotLegacy: number;
  readonly arrowRain: number;
  readonly explosiveDash: number;
  readonly fireFlurry: number;
  readonly fireFlurryCapitalized: number;
  readonly arrowTrail: string;
  readonly arrowTrailLegacy: string;
  readonly prefix: string;
}

export interface TNTGamesTNTTagStats {
  readonly wins: number;
  readonly kills: number;
  readonly deaths: number;
  readonly speedy: number;
  readonly speed: number;
  readonly blastProtection: number;
  readonly speedItUp: number;
  readonly slowItDown: number;
  readonly suit: string;
  readonly suitLegacy: string;
  readonly prefix: string;
}

export interface TNTGamesWizardBase {
  readonly explode: number;
  readonly regen: number;
  readonly kills: number;
  readonly deaths: number;
  readonly assists: number;
  readonly healing: number;
  readonly damageTaken: number;
  readonly alternateEffectsStatus: boolean;
  readonly alternateEffects: string;
}

export interface TNTGamesWizardPrestige {
  readonly prestigeField: string;
}

export interface TNTGamesWizardLegacy {
  readonly explodeLegacy: number;
  readonly regenLegacy: number;
}

export interface TNTGamesWizardTier {
  readonly explodeTier: number;
  readonly regenTier: number;
  readonly prestigeFieldLegacy: string;
}

export interface TNTGamesAncientWizard
  extends TNTGamesWizardBase, TNTGamesWizardPrestige {}

export interface TNTGamesArcaneWizard extends TNTGamesWizardBase {}

export interface TNTGamesBloodWizard
  extends
    TNTGamesWizardBase,
    TNTGamesWizardPrestige,
    TNTGamesWizardLegacy,
    TNTGamesWizardTier {}

export interface TNTGamesFireWizard
  extends
    TNTGamesWizardBase,
    TNTGamesWizardPrestige,
    TNTGamesWizardLegacy,
    TNTGamesWizardTier {}

export interface TNTGamesHydroWizard
  extends TNTGamesWizardBase, TNTGamesWizardPrestige {}

export interface TNTGamesIceWizard
  extends
    TNTGamesWizardBase,
    TNTGamesWizardPrestige,
    TNTGamesWizardLegacy,
    TNTGamesWizardTier {}

export interface TNTGamesKineticWizard
  extends
    TNTGamesWizardBase,
    TNTGamesWizardPrestige,
    TNTGamesWizardLegacy,
    TNTGamesWizardTier {}

export interface TNTGamesStormWizard
  extends TNTGamesWizardBase, TNTGamesWizardPrestige {}

export interface TNTGamesToxicWizard
  extends
    TNTGamesWizardBase,
    TNTGamesWizardPrestige,
    TNTGamesWizardLegacy,
    TNTGamesWizardTier {}

export interface TNTGamesWitherWizard
  extends
    TNTGamesWizardBase,
    TNTGamesWizardPrestige,
    TNTGamesWizardLegacy,
    TNTGamesWizardTier {}

export interface TNTGamesWizardsStats {
  readonly wins: number;
  readonly kills: number;
  readonly assists: number;
  readonly deaths: number;
  readonly points: number;
  readonly kineticHealing: number;
  readonly airTime: number;
  readonly captureClass: string;
  readonly selectedClass: string;
  readonly prefix: string;
  readonly ancient: TNTGamesAncientWizard;
  readonly arcane: TNTGamesArcaneWizard;
  readonly blood: TNTGamesBloodWizard;
  readonly fire: TNTGamesFireWizard;
  readonly hydro: TNTGamesHydroWizard;
  readonly ice: TNTGamesIceWizard;
  readonly kinetic: TNTGamesKineticWizard;
  readonly storm: TNTGamesStormWizard;
  readonly toxic: TNTGamesToxicWizard;
  readonly wither: TNTGamesWitherWizard;
}

export interface TNTGamesFlags {
  readonly enableExplosiveDash: boolean;
  readonly giveDjFeather: boolean;
  readonly showPreGameHints: boolean;
  readonly showTipHolograms: boolean;
  readonly showTntRunActionbarInfo: boolean;
  readonly showTntTagActionbarInfo: boolean;
  readonly showWinPrefixes: boolean;
  readonly showWizPres: boolean;
  readonly showWizardsActionbarInfo: boolean;
  readonly showWizardsCooldownNotifications: boolean;
}

export interface TNTGamesPrivateGames {
  readonly bowSpleefHeavyArrows: boolean;
  readonly bowSpleefQuintuple: boolean;
  readonly bowSpleefDjMultiplier: string;
  readonly healthBuff: string;
  readonly lowGravity: boolean;
  readonly maxedPerks: boolean;
  readonly oneHitOneKill: boolean;
  readonly pvpRunArmorType: string;
  readonly pvpRunKnockback: boolean;
  readonly pvpRunSwordType: string;
  readonly speed: string;
  readonly tntRunHeavyFeet: boolean;
  readonly tntRunSnowballs: boolean;
  readonly tntTagDeathmatch: boolean;
  readonly tntTagNoPowerups: boolean;
  readonly wizardsCaptureSpeed: string;
  readonly wizardsDeathPenalty: string;
  readonly wizardsManaRegen: string;
  readonly wizardsMaxClasses: boolean;
  readonly wizardsNoRegen: boolean;
}

export interface TNTGamesLeaderboardSettings {
  readonly mode: string;
  readonly resetType: string;
}

export interface TNTGamesMapVote {
  readonly map: string;
  readonly votes: number;
}

export interface TNTGamesFavorites {
  readonly deathEffect: readonly string[];
}

export interface TNTGamesStats {
  readonly coins: number;
  readonly wins: number;
  readonly winstreak: number;
  readonly lastTourneyAd: Date | null;
  readonly activeArrowTrail: string;
  readonly activeDeathEffect: string;
  readonly activeDoubleJump: string;
  readonly activeParticle: string;
  readonly activeParticleEffect: string;
  readonly activeVoidMessage: string;
  readonly doubleJumpEffect: string;
  readonly newActiveDeathEffect: string;
  readonly newActiveParticleEffect: string;
  readonly newDoubleJumpEffect: string;
  readonly newSelectedHat: string;
  readonly selectedHat: string;
  readonly runDoubleJumps: number;
  readonly shopSort: string;
  readonly shopSortEnableOwnedFirst: boolean;
  readonly packages: readonly string[];
  readonly favorites: TNTGamesFavorites;
  readonly mapVotes: readonly TNTGamesMapVote[];
  readonly flags: TNTGamesFlags;
  readonly privateGames: TNTGamesPrivateGames;
  readonly leaderboardSettings: TNTGamesLeaderboardSettings;
  readonly tntRun: TNTGamesTNTRunStats;
  readonly tntRunTournament: readonly TNTGamesTournamentRound[];
  readonly pvpRun: TNTGamesPVPRunStats;
  readonly bowSpleef: TNTGamesBowSpleefStats;
  readonly tntTag: TNTGamesTNTTagStats;
  readonly wizards: TNTGamesWizardsStats;
  readonly tntRunHotbar: Readonly<Record<string, string>>;
  readonly pvpRunHotbar: Readonly<Record<string, string>>;
  readonly bowSpleefHotbar: Readonly<Record<string, string>>;
  readonly tntTagHotbar: Readonly<Record<string, string>>;
  readonly wizardsHotbar: Readonly<Record<string, string>>;
}

function parseTNTRun(tntGames: Record<string, unknown>): TNTGamesTNTRunStats {
  return {
    wins: num(tntGames, "wins_tntrun"),
    deaths: num(tntGames, "deaths_tntrun"),
    bestTime: num(tntGames, "record_tntrun"),
    doubleJumpTier: num(tntGames, "doublejump_tntrun"),
    doubleJumps: num(tntGames, "new_tntrun_double_jumps"),
    doubleJumpsLegacy: num(tntGames, "new_tntrun_double_jumps_legacy"),
    slownessPotions: num(tntGames, "new_tntrun_slowness_potions"),
    speedPotions: num(tntGames, "new_tntrun_speed_potions"),
    potionsSplashedOnPlayers: num(tntGames, "run_potions_splashed_on_players"),
    prefix: str(tntGames, "prefix_tntrun"),
  };
}

function parseTNTRunTournament(
  tntGames: Record<string, unknown>,
): readonly TNTGamesTournamentRound[] {
  const rounds: TNTGamesTournamentRound[] = [];
  for (const key of Object.keys(tntGames)) {
    const match = new RegExp(/^wins_tourney_tnt_run_(\d+)$/).exec(key);
    if (match === null) {
      continue;
    }
    const suffix = match[1];
    rounds.push({
      round: Number(suffix),
      wins: num(tntGames, `wins_tourney_tnt_run_${suffix}`),
      deaths: num(tntGames, `deaths_tourney_tnt_run_${suffix}`),
    });
  }
  return rounds;
}

function parsePVPRun(tntGames: Record<string, unknown>): TNTGamesPVPRunStats {
  return {
    wins: num(tntGames, "wins_pvprun"),
    kills: num(tntGames, "kills_pvprun"),
    deaths: num(tntGames, "deaths_pvprun"),
    bestTime: num(tntGames, "record_pvprun"),
    regeneration: num(tntGames, "new_pvprun_regeneration"),
    notoriety: num(tntGames, "new_pvprun_notoriety"),
    fortitude: num(tntGames, "new_pvprun_fortitude"),
    doubleJumps: num(tntGames, "new_pvprun_double_jumps"),
    doubleJumpsLegacy: num(tntGames, "new_pvprun_double_jumps_legacy"),
    prefix: str(tntGames, "prefix_pvprun"),
  };
}

function parseBowSpleef(
  tntGames: Record<string, unknown>,
): TNTGamesBowSpleefStats {
  return {
    wins: num(tntGames, "wins_bowspleef"),
    deaths: num(tntGames, "deaths_bowspleef"),
    tags: num(tntGames, "tags_bowspleef"),
    doubleJumpTier: num(tntGames, "spleef_doublejump"),
    repulsorTier: num(tntGames, "spleef_repulse"),
    tripleShotTier: num(tntGames, "spleef_triple"),
    doubleJumps: num(tntGames, "new_spleef_double_jumps"),
    doubleJumpsLegacy: num(tntGames, "new_spleef_double_jumps_legacy"),
    repulsor: num(tntGames, "new_spleef_repulsor"),
    repulsorLegacy: num(tntGames, "new_spleef_repulsor_legacy"),
    tripleShot: num(tntGames, "new_spleef_tripleshot"),
    tripleShotLegacy: num(tntGames, "new_spleef_tripleshot_legacy"),
    arrowRain: num(tntGames, "new_spleef_arrowrain"),
    explosiveDash: num(tntGames, "new_spleef_exlosive_dash"),
    fireFlurry: num(tntGames, "new_spleef_fireflurry"),
    fireFlurryCapitalized: num(tntGames, "new_spleef_FireFlurry"),
    arrowTrail: str(tntGames, "new_spleef_arrowtrail"),
    arrowTrailLegacy: str(tntGames, "spleef_arrowtrail"),
    prefix: str(tntGames, "prefix_bowspleef"),
  };
}

function parseTNTTag(tntGames: Record<string, unknown>): TNTGamesTNTTagStats {
  return {
    wins: num(tntGames, "wins_tntag"),
    kills: num(tntGames, "kills_tntag"),
    deaths: num(tntGames, "deaths_tntag"),
    speedy: num(tntGames, "new_tntag_speedy"),
    speed: num(tntGames, "tag_speed"),
    blastProtection: num(tntGames, "tag_blastprotection"),
    speedItUp: num(tntGames, "tag_speeditup"),
    slowItDown: num(tntGames, "tag_slowitdown"),
    suit: str(tntGames, "new_tag_suit"),
    suitLegacy: str(tntGames, "tag_suit"),
    prefix: str(tntGames, "prefix_tntag"),
  };
}

function wizardBase(
  tntGames: Record<string, unknown>,
  prefix: string,
): TNTGamesWizardBase {
  return {
    explode: num(tntGames, `${prefix}_explode`),
    regen: num(tntGames, `${prefix}_regen`),
    kills: num(tntGames, `${prefix}_kills`),
    deaths: num(tntGames, `${prefix}_deaths`),
    assists: num(tntGames, `${prefix}_assists`),
    healing: num(tntGames, `${prefix}_healing`),
    damageTaken: num(tntGames, `${prefix}_damage_taken`),
    alternateEffectsStatus: bool(
      tntGames,
      `${prefix}_alternate_effects_status`,
    ),
    alternateEffects: str(tntGames, `${prefix}_alternate_effects`),
  };
}

function wizardPrestige(
  tntGames: Record<string, unknown>,
  prefix: string,
): TNTGamesWizardPrestige {
  return {
    prestigeField: str(tntGames, `${prefix}_prestige_field`),
  };
}

function wizardLegacy(
  tntGames: Record<string, unknown>,
  prefix: string,
): TNTGamesWizardLegacy {
  return {
    explodeLegacy: num(tntGames, `${prefix}_explode_legacy`),
    regenLegacy: num(tntGames, `${prefix}_regen_legacy`),
  };
}

function wizardTier(
  tntGames: Record<string, unknown>,
  wizard: string,
): TNTGamesWizardTier {
  return {
    explodeTier: num(tntGames, `${wizard}_explode`),
    regenTier: num(tntGames, `${wizard}_regen`),
    prestigeFieldLegacy: str(tntGames, `${wizard}_prestige_field`),
  };
}

function parseWizards(tntGames: Record<string, unknown>): TNTGamesWizardsStats {
  return {
    wins: num(tntGames, "wins_capture"),
    kills: num(tntGames, "kills_capture"),
    assists: num(tntGames, "assists_capture"),
    deaths: num(tntGames, "deaths_capture"),
    points: num(tntGames, "points_capture"),
    kineticHealing: num(tntGames, "kinetic_healing_capture"),
    airTime: num(tntGames, "air_time_capture"),
    captureClass: str(tntGames, "capture_class"),
    selectedClass: str(tntGames, "wizards_selected_class"),
    prefix: str(tntGames, "prefix_capture"),
    ancient: {
      ...wizardBase(tntGames, "new_ancientwizard"),
      ...wizardPrestige(tntGames, "new_ancientwizard"),
    },
    arcane: {
      ...wizardBase(tntGames, "arcane_wizard"),
    },
    blood: {
      ...wizardBase(tntGames, "new_bloodwizard"),
      ...wizardPrestige(tntGames, "new_bloodwizard"),
      ...wizardLegacy(tntGames, "new_bloodwizard"),
      ...wizardTier(tntGames, "bloodwizard"),
    },
    fire: {
      ...wizardBase(tntGames, "new_firewizard"),
      ...wizardPrestige(tntGames, "new_firewizard"),
      ...wizardLegacy(tntGames, "new_firewizard"),
      ...wizardTier(tntGames, "firewizard"),
    },
    hydro: {
      ...wizardBase(tntGames, "new_hydrowizard"),
      ...wizardPrestige(tntGames, "new_hydrowizard"),
    },
    ice: {
      ...wizardBase(tntGames, "new_icewizard"),
      ...wizardPrestige(tntGames, "new_icewizard"),
      ...wizardLegacy(tntGames, "new_icewizard"),
      ...wizardTier(tntGames, "icewizard"),
    },
    kinetic: {
      ...wizardBase(tntGames, "new_kineticwizard"),
      ...wizardPrestige(tntGames, "new_kineticwizard"),
      ...wizardLegacy(tntGames, "new_kineticwizard"),
      ...wizardTier(tntGames, "kineticwizard"),
    },
    storm: {
      ...wizardBase(tntGames, "new_stormwizard"),
      ...wizardPrestige(tntGames, "new_stormwizard"),
    },
    toxic: {
      ...wizardBase(tntGames, "new_toxicwizard"),
      ...wizardPrestige(tntGames, "new_toxicwizard"),
      ...wizardLegacy(tntGames, "new_toxicwizard"),
      ...wizardTier(tntGames, "toxicwizard"),
    },
    wither: {
      ...wizardBase(tntGames, "new_witherwizard"),
      ...wizardPrestige(tntGames, "new_witherwizard"),
      ...wizardLegacy(tntGames, "new_witherwizard"),
      ...wizardTier(tntGames, "witherwizard"),
    },
  };
}

function parseFlags(tntGames: Record<string, unknown>): TNTGamesFlags {
  const flags = tntGames.flags;
  const raw =
    typeof flags === "object" && flags !== null && !Array.isArray(flags)
      ? (flags as Record<string, unknown>)
      : {};
  return {
    enableExplosiveDash: bool(raw, "enable_explosive_dash"),
    giveDjFeather: bool(raw, "give_dj_feather"),
    showPreGameHints: bool(raw, "show_pre_game_hints"),
    showTipHolograms: bool(raw, "show_tip_holograms"),
    showTntRunActionbarInfo: bool(raw, "show_tntrun_actionbar_info"),
    showTntTagActionbarInfo: bool(raw, "show_tnttag_actionbar_info"),
    showWinPrefixes: bool(raw, "show_win_prefixes"),
    showWizPres: bool(raw, "show_wiz_pres"),
    showWizardsActionbarInfo: bool(raw, "show_wizards_actionbar_info"),
    showWizardsCooldownNotifications: bool(
      raw,
      "show_wizards_cooldown_notifications",
    ),
  };
}

function parsePrivateGames(
  tntGames: Record<string, unknown>,
): TNTGamesPrivateGames {
  const games = tntGames.privategames;
  const raw =
    typeof games === "object" && games !== null && !Array.isArray(games)
      ? (games as Record<string, unknown>)
      : {};
  return {
    bowSpleefHeavyArrows: bool(raw, "bow_spleef_heavy_arrows"),
    bowSpleefQuintuple: bool(raw, "bow_spleef_quintuple"),
    bowSpleefDjMultiplier: str(raw, "bowspleef_dj_multiplier"),
    healthBuff: str(raw, "health_buff"),
    lowGravity: bool(raw, "low_gravity"),
    maxedPerks: bool(raw, "maxed_perks"),
    oneHitOneKill: bool(raw, "one_hit_one_kill"),
    pvpRunArmorType: str(raw, "pvp_run_armor_type"),
    pvpRunKnockback: bool(raw, "pvp_run_knockback"),
    pvpRunSwordType: str(raw, "pvp_run_sword_type"),
    speed: str(raw, "speed"),
    tntRunHeavyFeet: bool(raw, "tnt_run_heavy_feet"),
    tntRunSnowballs: bool(raw, "tnt_run_snowballs"),
    tntTagDeathmatch: bool(raw, "tnt_tag_deathmatch"),
    tntTagNoPowerups: bool(raw, "tnt_tag_no_powerups"),
    wizardsCaptureSpeed: str(raw, "wizards_capture_speed"),
    wizardsDeathPenalty: str(raw, "wizards_death_penalty"),
    wizardsManaRegen: str(raw, "wizards_mana_regen"),
    wizardsMaxClasses: bool(raw, "wizards_max_classes"),
    wizardsNoRegen: bool(raw, "wizards_no_regen"),
  };
}

function parseLeaderboardSettings(
  tntGames: Record<string, unknown>,
): TNTGamesLeaderboardSettings {
  const settings = tntGames.leaderboardSettings;
  const raw =
    typeof settings === "object" &&
    settings !== null &&
    !Array.isArray(settings)
      ? (settings as Record<string, unknown>)
      : {};
  return {
    mode: str(raw, "mode"),
    resetType: str(raw, "resetType"),
  };
}

function parsePackages(tntGames: Record<string, unknown>): readonly string[] {
  const value = tntGames.packages;
  return Array.isArray(value)
    ? value.filter((entry): entry is string => typeof entry === "string")
    : [];
}

function parseFavorites(tntGames: Record<string, unknown>): TNTGamesFavorites {
  const raw = obj(tntGames, "favorites");
  const deathEffect = raw.death_effect;
  return {
    deathEffect: Array.isArray(deathEffect)
      ? deathEffect.filter(
          (entry): entry is string => typeof entry === "string",
        )
      : [],
  };
}

function parseHotbar(
  tntGames: Record<string, unknown>,
  key: string,
): Readonly<Record<string, string>> {
  const raw = obj(tntGames, key);
  const hotbar: Record<string, string> = {};
  for (const slot of Object.keys(raw)) {
    const value = raw[slot];
    if (typeof value === "string") {
      hotbar[slot] = value;
    }
  }
  return hotbar;
}

function parseMapVotes(
  tntGames: Record<string, unknown>,
): readonly TNTGamesMapVote[] {
  const votes: TNTGamesMapVote[] = [];
  for (const key of Object.keys(tntGames)) {
    if (!key.startsWith("votes_")) {
      continue;
    }
    votes.push({
      map: key.slice("votes_".length),
      votes: num(tntGames, key),
    });
  }
  return votes;
}

/** Parses a player's TNT Games stats (`stats.TNTGames`) into a typed object. */
export function parseTNTGames(
  stats: Record<string, unknown>,
): TNTGamesStats | null {
  const raw = stats.TNTGames;
  if (typeof raw !== "object" || raw === null || Array.isArray(raw)) {
    return null;
  }
  const tntGames = raw as Record<string, unknown>;
  return {
    coins: num(tntGames, "coins") || num(tntGames, "tokens"),
    wins: num(tntGames, "wins"),
    winstreak: num(tntGames, "winstreak"),
    lastTourneyAd: date(tntGames, "lastTourneyAd"),
    activeArrowTrail: str(tntGames, "active_arrow_trail"),
    activeDeathEffect: str(tntGames, "active_death_effect"),
    activeDoubleJump: str(tntGames, "active_double_jump"),
    activeParticle: str(tntGames, "active_particle"),
    activeParticleEffect: str(tntGames, "active_particle_effect"),
    activeVoidMessage: str(tntGames, "active_void_message"),
    doubleJumpEffect: str(tntGames, "double_jump_effect"),
    newActiveDeathEffect: str(tntGames, "new_active_death_effect"),
    newActiveParticleEffect: str(tntGames, "new_active_particle_effect"),
    newDoubleJumpEffect: str(tntGames, "new_double_jump_effect"),
    newSelectedHat: str(tntGames, "new_selected_hat"),
    selectedHat: str(tntGames, "selected_hat"),
    runDoubleJumps: num(tntGames, "new_run_double_jumps"),
    shopSort: str(tntGames, "shop_sort"),
    shopSortEnableOwnedFirst: bool(tntGames, "shop_sort_enable_owned_first"),
    packages: parsePackages(tntGames),
    favorites: parseFavorites(tntGames),
    mapVotes: parseMapVotes(tntGames),
    flags: parseFlags(tntGames),
    privateGames: parsePrivateGames(tntGames),
    leaderboardSettings: parseLeaderboardSettings(tntGames),
    tntRun: parseTNTRun(tntGames),
    tntRunTournament: parseTNTRunTournament(tntGames),
    pvpRun: parsePVPRun(tntGames),
    bowSpleef: parseBowSpleef(tntGames),
    tntTag: parseTNTTag(tntGames),
    wizards: parseWizards(tntGames),
    tntRunHotbar: parseHotbar(tntGames, "tntrun"),
    pvpRunHotbar: parseHotbar(tntGames, "pvprun"),
    bowSpleefHotbar: parseHotbar(tntGames, "spleef"),
    tntTagHotbar: parseHotbar(tntGames, "tnttag"),
    wizardsHotbar: parseHotbar(tntGames, "wizards"),
  };
}

