import { num, str, bool, obj, date } from "./common";

export interface BedWarsKillsDeaths {
  readonly kills: number;
  readonly deaths: number;
}

const DAMAGE_TYPES = {
  total: "",
  custom: "custom_",
  drowning: "drowning_",
  entityAttack: "entity_attack_",
  entityExplosion: "entity_explosion_",
  fall: "fall_",
  fire: "fire_",
  fireTick: "fire_tick_",
  magic: "magic_",
  projectile: "projectile_",
  suffocation: "suffocation_",
  void: "void_",
  lava: "lava_",
  contact: "contact_",
  thorns: "thorns_",
} as const;

export type BedWarsCombatBreakdown = Readonly<
  Record<keyof typeof DAMAGE_TYPES, BedWarsKillsDeaths>
>;

export interface BedWarsBeds {
  readonly broken: number;
  readonly lost: number;
}

export interface BedWarsResources {
  readonly total: number;
  readonly iron: number;
  readonly gold: number;
  readonly diamond: number;
  readonly emerald: number;
  readonly bed: number;
  readonly wrappedPresent: number;
  readonly itemsPurchased: number;
  readonly itemsPurchasedLegacy: number;
  readonly permanentItemsPurchased: number;
  readonly permanentItemsPurchasedLegacy: number;
}

export interface BedWarsMode {
  readonly winstreak: number;
  readonly wins: number;
  readonly losses: number;
  readonly gamesPlayed: number;
  readonly beds: BedWarsBeds;
  readonly resources: BedWarsResources;
  readonly kills: BedWarsCombatBreakdown;
  readonly finals: BedWarsCombatBreakdown;
}

export interface BedWarsTourneyMode extends BedWarsMode {
  readonly winstreak2: number;
}

const SOLO_VARIANTS = {
  oneBlock: "eight_one_oneblock_",
  rush: "eight_one_rush_",
  ultimate: "eight_one_ultimate_",
} as const;

const DOUBLES_VARIANTS = {
  tourneyOne: "tourney_bedwars_eight_two_1_",
  tourneyZero: "tourney_bedwars_eight_two_0_",
  armed: "eight_two_armed_",
  lucky: "eight_two_lucky_",
  rush: "eight_two_rush_",
  swap: "eight_two_swap_",
  totallyNormal: "eight_two_totallynormal_",
  ultimate: "eight_two_ultimate_",
  underworld: "eight_two_underworld_",
  voidless: "eight_two_voidless_",
} as const;

const FOURS_VARIANTS = {
  tourneyOne: "tourney_bedwars4s_1_",
  tourneyZero: "tourney_bedwars4s_0_",
  armed: "four_four_armed_",
  lucky: "four_four_lucky_",
  rush: "four_four_rush_",
  swap: "four_four_swap_",
  ultimate: "four_four_ultimate_",
  underworld: "four_four_underworld_",
  voidless: "four_four_voidless_",
} as const;

const FOUR_VS_FOUR_VARIANTS = {
  tourney: "tourney_bedwars_two_four_0_",
} as const;

type BedWarsVariantModes<M extends Record<string, string>> = {
  readonly [K in keyof M]: M[K] extends `tourney${string}`
    ? BedWarsTourneyMode
    : BedWarsMode;
};

export type BedWarsSoloMode = BedWarsMode &
  BedWarsVariantModes<typeof SOLO_VARIANTS>;
export type BedWarsDoublesMode = BedWarsMode &
  BedWarsVariantModes<typeof DOUBLES_VARIANTS>;
export type BedWarsFoursMode = BedWarsMode &
  BedWarsVariantModes<typeof FOURS_VARIANTS>;
export type BedWarsFourVsFourMode = BedWarsMode &
  BedWarsVariantModes<typeof FOUR_VS_FOUR_VARIANTS>;

const BEDWARS_BOXES = {
  openedChests: "Bedwars_openedChests",
  openedCommons: "Bedwars_openedCommons",
  openedEpics: "Bedwars_openedEpics",
  openedLegendaries: "Bedwars_openedLegendaries",
  openedRares: "Bedwars_openedRares",
  box: "bedwars_box",
  commons: "bedwars_box_commons",
  epics: "bedwars_box_epics",
  legendaries: "bedwars_box_legendaries",
  rares: "bedwars_box_rares",
  total: "bedwars_boxes",
  christmas: "bedwars_christmas_boxes",
  easter: "bedwars_easter_boxes",
  golden: "bedwars_golden_boxes",
  halloween: "bedwars_halloween_boxes",
  lunar: "bedwars_lunar_boxes",
} as const;

export type BedWarsBoxes = Readonly<Record<keyof typeof BEDWARS_BOXES, number>>;

const BEDWARS_FREE_EVENT_KEYS = {
  christmasBoxes2017: "free_event_key_bedwars_christmas_boxes_2017",
  christmasBoxes2018: "free_event_key_bedwars_christmas_boxes_2018",
  christmasBoxes2019: "free_event_key_bedwars_christmas_boxes_2019",
  christmasBoxes2020: "free_event_key_bedwars_christmas_boxes_2020",
  christmasBoxes2021: "free_event_key_bedwars_christmas_boxes_2021",
  christmasBoxes2022: "free_event_key_bedwars_christmas_boxes_2022",
  christmasBoxes2023: "free_event_key_bedwars_christmas_boxes_2023",
  easterBoxes2018: "free_event_key_bedwars_easter_boxes_2018",
  easterBoxes2019: "free_event_key_bedwars_easter_boxes_2019",
  easterBoxes2020: "free_event_key_bedwars_easter_boxes_2020",
  easterBoxes2021: "free_event_key_bedwars_easter_boxes_2021",
  easterBoxes2022: "free_event_key_bedwars_easter_boxes_2022",
  easterBoxes2023: "free_event_key_bedwars_easter_boxes_2023",
  halloweenBoxes2017: "free_event_key_bedwars_halloween_boxes_2017",
  halloweenBoxes2018: "free_event_key_bedwars_halloween_boxes_2018",
  halloweenBoxes2019: "free_event_key_bedwars_halloween_boxes_2019",
  halloweenBoxes2020: "free_event_key_bedwars_halloween_boxes_2020",
  halloweenBoxes2021: "free_event_key_bedwars_halloween_boxes_2021",
  halloweenBoxes2022: "free_event_key_bedwars_halloween_boxes_2022",
  halloweenBoxes2023: "free_event_key_bedwars_halloween_boxes_2023",
  lunarBoxes2018: "free_event_key_bedwars_lunar_boxes_2018",
  lunarBoxes2019: "free_event_key_bedwars_lunar_boxes_2019",
  lunarBoxes2020: "free_event_key_bedwars_lunar_boxes_2020",
} as const;

export type BedWarsFreeEventKeys = Readonly<
  Record<keyof typeof BEDWARS_FREE_EVENT_KEYS, boolean>
>;

export interface BedWarsActiveCosmetics {
  readonly bedDestroy: string;
  readonly deathCry: string;
  readonly glyph: string;
  readonly islandTopper: string;
  readonly killEffect: string;
  readonly killMessages: string;
  readonly npcSkin: string;
  readonly projectileTrail: string;
  readonly sprays: string;
  readonly victoryDance: string;
  readonly woodType: string;
}

export interface BedWarsFavorites {
  readonly hotbarSlots: readonly string[];
  readonly shopSlots: readonly string[];
  readonly shopSlotsSecondary: readonly string[];
}

export interface BedWarsFigurines {
  readonly active: string;
  readonly featuredCommon: readonly string[];
  readonly featuredLegendary: readonly string[];
  readonly featuredRare: readonly string[];
}

export interface BedWarsPrivateGameSettings {
  readonly bedInstaBreak: boolean;
  readonly disableBlockProtection: boolean;
  readonly eventTime: string;
  readonly healthBuff: string;
  readonly lowGravity: boolean;
  readonly maxTeamUpgrades: boolean;
  readonly noDiamonds: boolean;
  readonly noEmeralds: boolean;
  readonly oneHitOneKill: boolean;
  readonly respawnTime: string;
  readonly speed: string;
}

export interface BedWarsSettings {
  readonly deposit: string;
  readonly slumberItemNotification: string;
  readonly slumberWalletFull: boolean;
  readonly trapRemoval: boolean;
}

export interface BedWarsPracticeMode {
  readonly blocksPlaced: number;
  readonly successfulAttempts: number;
  readonly failedAttempts: number;
}

export interface BedWarsPracticeBridgingElevation {
  readonly diagonal: number;
  readonly straight: number;
}

const PRACTICE_ELEVATIONS = {
  none: "NONE",
  slight: "SLIGHT",
  staircase: "STAIRCASE",
} as const;

const PRACTICE_DISTANCES = {
  blocks30: "30",
  blocks50: "50",
  blocks100: "100",
} as const;

export type BedWarsPracticeBridgingDistance = Readonly<
  Record<keyof typeof PRACTICE_ELEVATIONS, BedWarsPracticeBridgingElevation>
>;

export type BedWarsPracticeBridgingRecords = Readonly<
  Record<keyof typeof PRACTICE_DISTANCES, BedWarsPracticeBridgingDistance>
>;

export interface BedWarsPracticeBridging extends BedWarsPracticeMode {
  readonly records: BedWarsPracticeBridgingRecords;
}

export interface BedWarsPractice {
  readonly selected: string;
  readonly bridging: BedWarsPracticeBridging;
  readonly fireballJumping: BedWarsPracticeMode;
  readonly mlg: BedWarsPracticeMode;
  readonly pearlClutching: BedWarsPracticeMode;
}

export interface BedWarsChallenge {
  readonly bestTime: number;
  readonly timesCompleted: number;
}

const CHALLENGE_NAMES = {
  archerOnly: "archer_only",
  assassin: "assassin",
  cantTouchThis: "cant_touch_this",
  cappedResources: "capped_resources",
  collector: "collector",
  defuser: "defuser",
  delayedHitting: "delayed_hitting",
  hotbar: "hotbar",
  invisibleShop: "invisible_shop",
  knockbackStickOnly: "knockback_stick_only",
  masterAssassin: "master_assassin",
  miningFatigue: "mining_fatigue",
  noHealing: "no_healing",
  noHitting: "no_hitting",
  noShift: "no_shift",
  noSprint: "no_sprint",
  noSwords: "no_swords",
  noTeamUpgrades: "no_team_upgrades",
  noUtilities: "no_utilities",
  patriot: "patriot",
  protectThePresident: "protect_the_president",
  resetArmor: "reset_armor",
  selfish: "selfish",
  slowGenerator: "slow_generator",
  sponge: "sponge",
  stamina: "stamina",
  stopLight: "stop_light",
  toxicRain: "toxic_rain",
  weightedItems: "weighted_items",
  woodworker: "woodworker",
} as const;

export type BedWarsChallenges = {
  readonly uniqueChallengesCompleted: number;
  readonly selectedChallengeType: string;
  readonly totalChallengesCompleted: number;
} & Readonly<Record<keyof typeof CHALLENGE_NAMES, BedWarsChallenge>>;

const SLUMBER_MINION = {
  enderDust: "ender_dust",
  enderDustCollected: "ender_dust_collected",
  games: "games",
  tickets: "tickets",
  ticketsCollected: "tickets_collected",
} as const;

const SLUMBER_SANDMAN = {
  expMultiplier: "exp_multiplier",
  ticketMultiplier: "ticket_multiplier",
} as const;

const SLUMBER_ROOMS = {
  ownersOffice: "owners_office",
  room1: "room_1",
  room2: "room_2",
  room3: "room_3",
  room4: "room_4",
  room5: "room_5",
  room6: "room_6",
  room7: "room_7",
  room8: "room_8",
  room9: "room_9",
  room10: "room_10",
  room11: "room_11",
  room12: "room_12",
  roomArcade: "room_arcade",
  roomBlitz: "room_blitz",
  roomConcert: "room_concert",
  roomExecutives: "room_executives",
  roomGarage: "room_garage",
  roomHammer: "room_hammer",
  roomHousing: "room_housing",
  roomInspector: "room_inspector",
  roomIntricate: "room_intricate",
  roomLimbo: "room_limbo",
  roomMoon: "room_moon",
  roomOasis: "room_oasis",
  roomPyramid: "room_pyramid",
  roomQuiz: "room_quiz",
  roomRooftop: "room_rooftop",
  roomSkyblock: "room_skyblock",
} as const;

const SLUMBER_QUEST_NPCS = {
  dreamfeastAppetizers: "dreamfeast_appetizers",
  arcadePlayer: "npc_arcade_player",
  billStarr: "npc_bill_starr",
  blacksmith: "npc_blacksmith",
  blacksmithApprentice: "npc_blacksmith_apprentice",
  bucky: "npc_bucky",
  combatArtistSally: "npc_combat_artist_sally",
  donEspresso: "npc_don_espresso",
  electricianRussel: "npc_electrician_russel",
  executives: "npc_executives",
  gamblerGeorge: "npc_gambler_george",
  generalDaku: "npc_general_daku",
  gizzyMoonpowder: "npc_gizzy_moonpowder",
  hammer: "npc_hammer",
  hammerPartTwo: "npc_hammer_part_two",
  hermes: "npc_hermes",
  inspector: "npc_inspector",
  jeremyJagger: "npc_jeremy_jagger",
  jetsMcturbo: "npc_jets_mcturbo",
  jimmyBimmy: "npc_jimmy_bimmy",
  johnIndigosHammer: "npc_john_indigos_hammer",
  johnPireso: "npc_john_pireso",
  kingFlut: "npc_king_flut",
  ladySaichi: "npc_lady_saichi",
  laundry: "npc_laundry",
  laundryGal: "npc_laundry_gal",
  lesterBrody: "npc_lester_brody",
  masterMeyer: "npc_master_meyer",
  meetTheSandman: "npc_meet_the_sandman",
  oasis: "npc_oasis",
  peter: "npc_peter",
  quizShowHost: "npc_quiz_show_host",
  receptionStart: "npc_reception_start",
  skyblockPlayer: "npc_skyblock_player",
  spaceman: "npc_spaceman",
  theRatman: "npc_the_ratman",
  wally: "npc_wally",
  phaseFourAscensionQ1: "phase_four_ascension_q1",
  phaseFourAscensionQ2: "phase_four_ascension_q2",
  phaseFourAscensionQ3: "phase_four_ascension_q3",
  phaseFourAscensionQ4: "phase_four_ascension_q4",
  phaseFourAscensionQ5: "phase_four_ascension_q5",
  phaseFourAscensionWalletQ: "phase_four_ascension_wallet_q",
  phaseThreeAsc: "phase_three_asc",
  phaseTwoAsc: "phase_two_asc",
  staffWalletUpgrade: "staff_wallet_upgrade",
} as const;

const SLUMBER_QUEST_NPC_TALK = {
  aidenAllpillowNpc: "AidenAllpillowNpc",
  arcadePlayerNpc: "ArcadePlayerNpc",
  billStarrNpc: "BillStarrNpc",
  bimmyNpc: "BimmyNpc",
  blackSmithNpc: "BlackSmithNpc",
  blackSmithRobertoNpc: "BlackSmithRobertoNpc",
  ceoNpc: "CEONpc",
  chefBuckyNpc: "ChefBuckyNpc",
  chefGarryJamseyNpc: "ChefGarryJamseyNpc",
  combatArtistSallyNpc: "CombatArtistSallyNpc",
  donEspressoNpc: "DonEspressoNpc",
  doorManNpc: "DoorManNpc",
  electricianRusselNpc: "ElectricianRusselNpc",
  fredericFerntonNpc: "FredericFerntonNpc",
  gamblerGeorgeNpc: "GamblerGeorgeNpc",
  generalDakuNpc: "GeneralDakuNpc",
  gizzyMoonpowderNpc: "GizzyMoonpowderNpc",
  hammerNpc: "HammerNpc",
  hammerPartTwoNpc: "HammerPartTwoNpc",
  hermesNpc: "HermesNpc",
  hostessKatrinaNpc: "HostessKatrinaNpc",
  hotelReceptionistNpc: "HotelReceptionistNpc",
  inspectorMyaSterlingNpc: "InspectorMyaSterlingNpc",
  jeremyJaggerNpc: "JeremyJaggerNpc",
  jetsMcTurboNpc: "JetsMcTurboNpc",
  jimmyNpc: "JimmyNpc",
  johnIndigosNpc: "JohnIndigosNpc",
  johnIndigosPhaseThreeNpc: "JohnIndigosPhaseThreeNpc",
  johnIndigosPhaseTwoNpc: "JohnIndigosPhaseTwoNpc",
  kingFlutNpc: "KingFlutNpc",
  ladySaichiNpc: "LadySaichiNpc",
  laundryGalNpc: "LaundryGalNpc",
  laundryGuyNpc: "LaundryGuyNpc",
  lesterBrodyNpc: "LesterBrodyNpc",
  masterMeyerNpc: "MasterMeyerNpc",
  oasisSpiritNpc: "OasisSpiritNpc",
  peterNpc: "PeterNpc",
  quizShowHostNpc: "QuizShowHostNpc",
  ratmanNpc: "RatmanNpc",
  sandmanNpc: "SandmanNpc",
  skyBlockPlayerNpc: "SkyBlockPlayerNpc",
  slumberVillagerNpc: "SlumberVillagerNpc",
  spaceManNpc: "SpaceManNpc",
  ticketMachineNpc: "TicketMachineNpc",
  tranceNpc: "TranceNpc",
  wallyNpc: "WallyNpc",
} as const;

const SLUMBER_QUEST_OBJECTIVES = {
  arcadeIron: "arcade_iron",
  arcadeIronRepeat: "arcade_iron_repeat",
  arcadeQuarters: "arcade_quarters",
  arcadeQuartersRepeat: "arcade_quarters_repeat",
  bakeAFeastfood: "bake_a_feastfood",
  billStarrBlitz: "bill_starr_blitz",
  blacksmithAmulet: "blacksmith_amulet",
  blacksmithApprenticeCoins: "blacksmith_apprentice_coins",
  blacksmithApprenticeCoinsRepeat: "blacksmith_apprentice_coins_repeat",
  blacksmithApprenticeForgeCoal: "blacksmith_apprentice_forge_coal",
  blacksmithApprenticeForgeCoalRepeat:
    "blacksmith_apprentice_forge_coal_repeat",
  blacksmithApprenticeIron: "blacksmith_apprentice_iron",
  blacksmithApprenticeIronRepeat: "blacksmith_apprentice_iron_repeat",
  blacksmithGold: "blacksmith_gold",
  blacksmithGoldenTicket: "blacksmith_golden_ticket",
  blacksmithIronBars: "blacksmith_iron_bars",
  blacksmithMold: "blacksmith_mold",
  blacksmithWater: "blacksmith_water",
  buckyEnderDust: "bucky_ender_dust",
  buckyEnderDustRepeat: "bucky_ender_dust_repeat",
  buckyFragments: "bucky_fragments",
  buckyFragmentsRepeat: "bucky_fragments_repeat",
  buckySkyTeaLeaves: "bucky_sky_tea_leaves",
  buckySkyTeaLeavesRepeat: "bucky_sky_tea_leaves_repeat",
  buckySouls: "bucky_souls",
  buckySpiceRepeat: "bucky_spice_repeat",
  checkersCoal: "checkers_coal",
  checkersSheets: "checkers_sheets",
  chessTickets: "chess_tickets",
  chessTokensOfFerocity: "chess_tokens_of_ferocity",
  chessWoolCables: "chess_wool_cables",
  combatArtistSally: "combat_artist_sally",
  combatArtistSallyRepeat: "combat_artist_sally_repeat",
  combatArtistSallySouls: "combat_artist_sally_souls",
  donEspressoDiamond: "don_espresso_diamond",
  donEspressoGold: "don_espresso_gold",
  electricianRussel: "electrician_russel",
  electricianRusselRepeat: "electrician_russel_repeat",
  executivesMeetingNumbers: "executives_meeting_numbers",
  gamblerGeorgeWin: "gambler_george_win",
  generalDakuTea: "general_daku_tea",
  generalDakuTeaRepeat: "general_daku_tea_repeat",
  gizzyMoonpowder: "gizzy_moonpowder",
  gizzyMoonpowderRepeat: "gizzy_moonpowder_repeat",
  hammerCoins: "hammer_coins",
  hammerIron: "hammer_iron",
  hammerPartTwoSilverBlade: "hammer_part_two_silver_blade",
  hermesMysteryBoxes: "hermes_mystery_boxes",
  inspectorAirFreshener: "inspector_air_freshener",
  inspectorClueWeapon: "inspector_clue_weapon",
  inspectorGloves: "inspector_gloves",
  inspectorPhoto: "inspector_photo",
  inspectorWorkBoots: "inspector_work_boots",
  jaggerDiamond: "jagger_diamond",
  jaggerEmerald: "jagger_emerald",
  jaggerGold: "jagger_gold",
  jaggerIron: "jagger_iron",
  jaggerSpice: "jagger_spice",
  jaggerWool: "jagger_wool",
  jetsCables: "jets_cables",
  jetsEmeralds: "jets_emeralds",
  jetsGold: "jets_gold",
  jetsHusks: "jets_husks",
  jetsIron: "jets_iron",
  jetsIronBars: "jets_iron_bars",
  jetsNetherStars: "jets_nether_stars",
  johnIndigosHammer: "john_indigos_hammer",
  johnPiresoMap: "john_pireso_map",
  kingFlutAmulet: "king_flut_amulet",
  kingFlutDiamond: "king_flut_diamond",
  kingFlutPillow: "king_flut_pillow",
  ladySaichiMattress: "lady_saichi_mattress",
  ladySaichiSheets: "lady_saichi_sheets",
  laundryGalBottles: "laundry_gal_bottles",
  laundryGalBottlesRepeat: "laundry_gal_bottles_repeat",
  laundryGalPillows: "laundry_gal_pillows",
  laundryManagerSheets: "laundry_manager_sheets",
  laundryManagerSheetsRepeat: "laundry_manager_sheets_repeat",
  lesterBrody: "lester_brody",
  lesterBrodyRepeat: "lester_brody_repeat",
  masterMeyer: "master_meyer",
  masterMeyerRepeat: "master_meyer_repeat",
  meetTheSandman: "meet_the_sandman",
  oasisHusks: "oasis_husks",
  oasisHusksRepeat: "oasis_husks_repeat",
  oasisSouls: "oasis_souls",
  peterEscape: "peter_escape",
  phaseFourAscensionO1: "phase_four_ascension_o1",
  phaseFourAscensionO2: "phase_four_ascension_o2",
  phaseFourAscensionO3: "phase_four_ascension_o3",
  phaseFourAscensionO4: "phase_four_ascension_o4",
  phaseFourAscensionO5: "phase_four_ascension_o5",
  phaseFourAscensionWalletO: "phase_four_ascension_wallet_o",
  phaseThreeRecp: "phase_three_recp",
  phaseTwoRecp: "phase_two_recp",
  ratmanBedsheets: "ratman_bedsheets",
  ratmanForgeCoal: "ratman_forge_coal",
  ratmanIronBars: "ratman_iron_bars",
  ratmanPillow: "ratman_pillow",
  ratmanSparkPlug: "ratman_spark_plug",
  receptionistIntroduction: "receptionist_introduction",
  skyblockPlayerDust: "skyblock_player_dust",
  skyblockPlayerLeaves: "skyblock_player_leaves",
  spacemanNetherStars: "spaceman_nether_stars",
  spacemanShopSpice: "spaceman_shop_spice",
  unlockAnUpgrade: "unlock_an_upgrade",
  wallyBedSheets: "wally_bed_sheets",
  wallyEnderDust: "wally_ender_dust",
  wallyNetherStars: "wally_nether_stars",
} as const;

const SLUMBER_QUEST_ITEMS = {
  airFreshener: "slumber_item_air_freshener",
  amulet: "slumber_item_amulet",
  bedSheets: "slumber_item_bed_sheets",
  blitzStar: "slumber_item_blitz_star",
  blockOfMegaWallsObsidian: "slumber_item_block_of_mega_walls_obsidian",
  boots: "slumber_item_boots",
  cable: "slumber_item_cable",
  chaliceOfSand: "slumber_item_chalice_of_sand",
  cleanedUpMurderKnife: "slumber_item_cleaned_up_murder_knife",
  comfyPillow: "slumber_item_comfy_pillow",
  diamondEssence: "slumber_item_diamond_essence",
  diamondFragment: "slumber_item_diamond_fragment",
  discardedKartWheel: "slumber_item_discarded_kart_wheel",
  dwarvenMithril: "slumber_item_dwarven_mithril",
  emeraldEssence: "slumber_item_emerald_essence",
  emeraldShard: "slumber_item_emerald_shard",
  enchantedHammer: "slumber_item_enchanted_hammer",
  enderDust: "slumber_item_ender_dust",
  fadedBlitzStar: "slumber_item_faded_blitz_star",
  forgeCoal: "slumber_item_forge_coal",
  gloves: "slumber_item_gloves",
  glowingSandPaper: "slumber_item_glowing_sand_paper",
  goldBar: "slumber_item_gold_bar",
  goldEssence: "slumber_item_gold_essence",
  goldenTicket: "slumber_item_golden_ticket",
  imperialLeather: "slumber_item_imperial_leather",
  indigosMap: "slumber_item_indigos_map",
  ironEssence: "slumber_item_iron_essence",
  ironNugget: "slumber_item_iron_nugget",
  limboDust: "slumber_item_limbo_dust",
  megaWallsObsidian: "slumber_item_mega_walls_obsidian",
  missingAmulet: "slumber_item_missing_amulet",
  moonStoneNugget: "slumber_item_moon_stone_nugget",
  murderWeapon: "slumber_item_murder_weapon",
  netherStar: "slumber_item_nether_star",
  nightmareNoodles: "slumber_item_nightmare_noodles",
  oasisWater: "slumber_item_oasis_water",
  perfume: "slumber_item_perfume",
  playerSoul: "slumber_item_player_soul",
  potionBottle: "slumber_item_potion_bottle",
  proofOfSuccess: "slumber_item_proof_of_success",
  ratmanMask: "slumber_item_ratman_mask",
  shopSpice: "slumber_item_shop_spice",
  silverBladeReplay: "slumber_item_silver_blade_replay",
  silverCoins: "slumber_item_silver_coins",
  snoringNachos: "slumber_item_snoring_nachos",
  soul: "slumber_item_soul",
  soulSalsa: "slumber_item_soul_salsa",
  spareKartWheel: "slumber_item_spare_kart_wheel",
  sparkPlug: "slumber_item_spark_plug",
  ticketTart: "slumber_item_ticket_tart",
  timewornMysteryBox: "slumber_item_timeworn_mystery_box",
  tokenOfFerocity: "slumber_item_token_of_ferocity",
  trustyRope: "slumber_item_trusty_rope",
  unusedBombMaterials: "slumber_item_unused_bomb_materials",
  victimPhoto: "slumber_item_victim_photo",
  voidHusk: "slumber_item_void_husk",
  weaponMold: "slumber_item_weapon_mold",
} as const;

export type BedWarsSlumberMinion = Readonly<
  Record<keyof typeof SLUMBER_MINION, number>
>;
export type BedWarsSlumberSandman = Readonly<
  Record<keyof typeof SLUMBER_SANDMAN, number>
>;
export type BedWarsSlumberRooms = Readonly<
  Record<keyof typeof SLUMBER_ROOMS, boolean>
>;
export type BedWarsSlumberNpcFlags = Readonly<
  Record<keyof typeof SLUMBER_QUEST_NPCS, boolean>
>;
export type BedWarsSlumberNpcCounts = Readonly<
  Record<keyof typeof SLUMBER_QUEST_NPCS, number>
>;
export type BedWarsSlumberQuestNpcTalk = Readonly<
  Record<keyof typeof SLUMBER_QUEST_NPC_TALK, boolean>
>;
export type BedWarsSlumberQuestObjectives = Readonly<
  Record<keyof typeof SLUMBER_QUEST_OBJECTIVES, boolean>
>;
export type BedWarsSlumberQuestItems = Readonly<
  Record<keyof typeof SLUMBER_QUEST_ITEMS, number>
>;

export interface BedWarsSlumberGamblerGeorge {
  readonly betAmount: number;
  readonly gambleGamesWon: number;
  readonly lostBet: boolean;
  readonly lostBetTime: number;
  readonly shouldReward: boolean;
  readonly wonLastGame: boolean;
}

export interface BedWarsSlumberQuest {
  readonly completed: BedWarsSlumberNpcFlags;
  readonly started: BedWarsSlumberNpcFlags;
  readonly lastCompleted: BedWarsSlumberNpcCounts;
  readonly lastStarted: BedWarsSlumberNpcCounts;
  readonly lastTraded: number;
  readonly npcTalk: BedWarsSlumberQuestNpcTalk;
  readonly objective: BedWarsSlumberQuestObjectives;
  readonly item: BedWarsSlumberQuestItems;
  readonly gamblerGeorge: BedWarsSlumberGamblerGeorge;
}

export interface BedWarsSlumberFredgie {
  readonly dialogueIndex: number;
  readonly shouldUpdateIndex: boolean;
}

export interface BedWarsSlumber {
  readonly bagType: string;
  readonly boonMultiplier: number;
  readonly currentCosmeticSorting: string;
  readonly doublers: number;
  readonly tickets: number;
  readonly ticketsGivenToDoorman: number;
  readonly ticketsRequirementMet: boolean;
  readonly totalTicketsEarned: number;
  readonly walletFullWarning: boolean;
  readonly currentPhase: number;
  readonly phaseThreeCompletedQuests: number;
  readonly fredgie: BedWarsSlumberFredgie;
  readonly minion: BedWarsSlumberMinion;
  readonly sandman: BedWarsSlumberSandman;
  readonly rooms: BedWarsSlumberRooms;
  readonly quest: BedWarsSlumberQuest;
}

const BEDWARS_BOON = {
  appetizer: "appetizer",
  firstCourse: "first_course",
  oasis: "oasis",
  slumber: "slumber",
} as const;

const BEDWARS_DREAMFEAST = {
  appetizerBoon: "appetizer_boon",
  challengeWoolWarrior: "challenge_wool_warrior",
  dreamOfAnimals: "dream_of_animals",
  dreamOfPrestigeStars: "dream_of_prestige_stars",
  firstCourseBoon: "first_course_boon",
  firstDreamOfWoodSkins: "first_dream_of_wood_skins",
  firstNightmareOfChallenges: "first_nightmare_of_challenges",
  killmessagesGlorious: "killmessages_glorious",
  npcskinCluckStack: "npcskin_cluck_stack",
  woodSkinAcaciaLog: "woodSkin_acacia_log",
  woodSkinBirchLog: "woodSkin_birch_log",
  woodSkinDarkOakLog: "woodSkin_dark_oak_log",
  woodSkinJungleLog: "woodSkin_jungle_log",
  woodSkinOakLog: "woodSkin_oak_log",
  woodSkinSpruceLog: "woodSkin_spruce_log",
} as const;

const BEDWARS_FEASTFOOD_COOKED = {
  nightmareNoodles: "nightmare_noodles",
  snoringNachos: "snoring_nachos",
  soulSalsa: "soul_salsa",
  ticketTart: "ticket_tart",
} as const;

const HALLOWEEN_PUMPKIN_REWARD_TIERS = {
  i: "I",
  ii: "II",
  iii: "III",
  iv: "IV",
  v: "V",
} as const;

export type BedWarsBoon = Readonly<Record<keyof typeof BEDWARS_BOON, boolean>>;
export type BedWarsDreamfeast = Readonly<
  Record<keyof typeof BEDWARS_DREAMFEAST, boolean>
>;

export interface BedWarsFeastfood {
  readonly cooked: Readonly<
    Record<keyof typeof BEDWARS_FEASTFOOD_COOKED, boolean>
  >;
}

export interface BedWarsLeaderboardSettings {
  readonly mode: string;
  readonly resetType: string;
}

export type BedWarsHalloweenPumpkinRewardTier = Readonly<
  Record<keyof typeof HALLOWEEN_PUMPKIN_REWARD_TIERS, boolean>
>;

export interface BedWarsHalloweenPumpkinMilestone {
  readonly counts: Readonly<Record<string, number>>;
  readonly rewards: Readonly<Record<string, BedWarsHalloweenPumpkinRewardTier>>;
}

export interface BedWarsHalloween {
  readonly talkedToPatches: boolean;
  readonly pumpkinMilestone: BedWarsHalloweenPumpkinMilestone;
}

export interface BedWarsSeasonalChristmasProgressQuest {
  readonly claimed: number;
  readonly progression: number;
}

export interface BedWarsSeasonalChristmasListQuest {
  readonly claimed: number;
  readonly progression: readonly string[];
}

export interface BedWarsSeasonalChristmasMegagift {
  readonly received: number;
  readonly sent: number;
}

export interface BedWarsSeasonalChristmasYear {
  readonly talkedToNpc: boolean;
  readonly candyCaneChallenger: BedWarsSeasonalChristmasListQuest;
  readonly festiveFrenzy: BedWarsSeasonalChristmasProgressQuest;
  readonly giftExchange: BedWarsSeasonalChristmasProgressQuest;
  readonly happyHolidays: BedWarsSeasonalChristmasProgressQuest;
  readonly holidayShopping: BedWarsSeasonalChristmasProgressQuest;
  readonly megagift: BedWarsSeasonalChristmasMegagift;
  readonly seasonOfGiving: BedWarsSeasonalChristmasProgressQuest;
  readonly sneakySanta: BedWarsSeasonalChristmasProgressQuest;
  readonly twoWeekPhase: BedWarsSeasonalChristmasProgressQuest;
  readonly winterVacation: BedWarsSeasonalChristmasListQuest;
}

export interface BedWarsSeasonal {
  readonly christmas: Readonly<Record<string, BedWarsSeasonalChristmasYear>>;
}

export interface BedWarsStats {
  readonly coins: number;
  readonly experience: number;
  readonly experienceNew: number;
  readonly level: number;
  readonly firstJoinSeason7: boolean;
  readonly seenBetaMenu: boolean;
  readonly understandsResourceBank: boolean;
  readonly understandsStreaks: boolean;
  readonly shopSort: string;
  readonly shopSortOwnedFirst: boolean;
  readonly quickbuyPrivacy: string;
  readonly selectedUltimate: string;
  readonly activePrestigeScheme: string;
  readonly activeStar: string;
  readonly dataVersion: number;
  readonly pianistEnabled: boolean;
  readonly votedSnowman: boolean;
  readonly votedSugarCookie2: boolean;
  readonly spookyOpenAchievements: number;
  readonly gamesPlayedLegacy: number;
  readonly lastHytaleAd: Date | null;
  readonly lastTourneyAd: Date | null;
  readonly glyphStorage: readonly string[];
  readonly sprayGlyphField: readonly string[];
  readonly sprayStorage: readonly string[];
  readonly packages: readonly string[];
  readonly chestHistory: readonly string[];
  readonly chestHistoryNew: readonly string[];
  readonly freeEventKeys: BedWarsFreeEventKeys;
  readonly activeCosmetics: BedWarsActiveCosmetics;
  readonly boxes: BedWarsBoxes;
  readonly favorites: BedWarsFavorites;
  readonly favoriteCosmetics: Readonly<Record<string, readonly string[]>>;
  readonly figurines: BedWarsFigurines;
  readonly boon: BedWarsBoon;
  readonly dreamfeast: BedWarsDreamfeast;
  readonly feastfood: BedWarsFeastfood;
  readonly halloween: BedWarsHalloween;
  readonly leaderboardSettings: BedWarsLeaderboardSettings;
  readonly seasonal: BedWarsSeasonal;
  readonly privateGameSettings: BedWarsPrivateGameSettings;
  readonly settings: BedWarsSettings;
  readonly slumber: BedWarsSlumber;
  readonly practice: BedWarsPractice;
  readonly challenges: BedWarsChallenges;
  readonly overall: BedWarsMode;
  readonly solo: BedWarsSoloMode;
  readonly doubles: BedWarsDoublesMode;
  readonly threes: BedWarsMode;
  readonly fours: BedWarsFoursMode;
  readonly fourVsFour: BedWarsFourVsFourMode;
  readonly castle: BedWarsMode;
}

function commaList(
  raw: Record<string, unknown>,
  key: string,
): readonly string[] {
  const value = str(raw, key);
  return value ? value.split(",") : [];
}

function stringArray(
  raw: Record<string, unknown>,
  key: string,
): readonly string[] {
  const value = raw[key];
  return Array.isArray(value)
    ? value.filter((item): item is string => typeof item === "string")
    : [];
}

function readCounts<M extends Record<string, string>>(
  raw: Record<string, unknown>,
  map: M,
): { readonly [K in keyof M]: number } {
  const result = {} as { [K in keyof M]: number };
  for (const name of Object.keys(map) as Array<keyof M & string>) {
    result[name] = num(raw, map[name]);
  }
  return result;
}

function readFlags<M extends Record<string, string>>(
  raw: Record<string, unknown>,
  map: M,
): { readonly [K in keyof M]: boolean } {
  const result = {} as { [K in keyof M]: boolean };
  for (const name of Object.keys(map) as Array<keyof M & string>) {
    result[name] = bool(raw, map[name]);
  }
  return result;
}

function parseCombat(
  raw: Record<string, unknown>,
  mode: string,
  final: boolean,
): BedWarsCombatBreakdown {
  const result = {} as Record<keyof typeof DAMAGE_TYPES, BedWarsKillsDeaths>;
  const suffix = final ? "final_" : "";
  for (const name of Object.keys(DAMAGE_TYPES) as Array<
    keyof typeof DAMAGE_TYPES
  >) {
    const type = DAMAGE_TYPES[name];
    result[name] = {
      kills: num(raw, `${mode}${type}${suffix}kills_bedwars`),
      deaths: num(raw, `${mode}${type}${suffix}deaths_bedwars`),
    };
  }
  return result;
}

function parseMode(raw: Record<string, unknown>, mode: string): BedWarsMode {
  return {
    winstreak: num(raw, `${mode}winstreak`),
    wins: num(raw, `${mode}wins_bedwars`),
    losses: num(raw, `${mode}losses_bedwars`),
    gamesPlayed: num(raw, `${mode}games_played_bedwars`),
    beds: {
      broken: num(raw, `${mode}beds_broken_bedwars`),
      lost: num(raw, `${mode}beds_lost_bedwars`),
    },
    resources: {
      total: num(raw, `${mode}resources_collected_bedwars`),
      iron: num(raw, `${mode}iron_resources_collected_bedwars`),
      gold: num(raw, `${mode}gold_resources_collected_bedwars`),
      diamond: num(raw, `${mode}diamond_resources_collected_bedwars`),
      emerald: num(raw, `${mode}emerald_resources_collected_bedwars`),
      bed: num(raw, `${mode}bed_resources_collected_bedwars`),
      wrappedPresent: num(
        raw,
        `${mode}wrapped_present_resources_collected_bedwars`,
      ),
      itemsPurchased: num(raw, `${mode}items_purchased_bedwars`),
      itemsPurchasedLegacy: num(raw, `${mode}_items_purchased_bedwars`),
      permanentItemsPurchased: num(
        raw,
        `${mode}permanent_items_purchased_bedwars`,
      ),
      permanentItemsPurchasedLegacy: num(
        raw,
        `${mode}permanent _items_purchased_bedwars`,
      ),
    },
    kills: parseCombat(raw, mode, false),
    finals: parseCombat(raw, mode, true),
  };
}

function parseTourneyMode(
  raw: Record<string, unknown>,
  mode: string,
): BedWarsTourneyMode {
  return {
    ...parseMode(raw, mode),
    winstreak2: num(raw, `${mode}winstreak2`),
  };
}

function withVariants<M extends Record<string, string>>(
  raw: Record<string, unknown>,
  base: string,
  map: M,
): BedWarsMode & BedWarsVariantModes<M> {
  const variants: Record<string, BedWarsMode | BedWarsTourneyMode> = {};
  for (const name of Object.keys(map) as Array<keyof M & string>) {
    const prefix = map[name];
    variants[name] = prefix.startsWith("tourney")
      ? parseTourneyMode(raw, prefix)
      : parseMode(raw, prefix);
  }
  return { ...parseMode(raw, base), ...variants } as BedWarsMode &
    BedWarsVariantModes<M>;
}

function parseActiveCosmetics(
  raw: Record<string, unknown>,
): BedWarsActiveCosmetics {
  return {
    bedDestroy: str(raw, "activeBedDestroy"),
    deathCry: str(raw, "activeDeathCry"),
    glyph: str(raw, "activeGlyph"),
    islandTopper: str(raw, "activeIslandTopper"),
    killEffect: str(raw, "activeKillEffect"),
    killMessages: str(raw, "activeKillMessages"),
    npcSkin: str(raw, "activeNPCSkin"),
    projectileTrail: str(raw, "activeProjectileTrail"),
    sprays: str(raw, "activeSprays"),
    victoryDance: str(raw, "activeVictoryDance"),
    woodType: str(raw, "activeWoodType"),
  };
}

function parseFavorites(raw: Record<string, unknown>): BedWarsFavorites {
  return {
    hotbarSlots: commaList(raw, "favorite_slots"),
    shopSlots: commaList(raw, "favourites_1"),
    shopSlotsSecondary: commaList(raw, "favourites_2"),
  };
}

function parseFavoriteCosmetics(
  raw: Record<string, unknown>,
): Readonly<Record<string, readonly string[]>> {
  const favorites = obj(raw, "favorites");
  const result = {} as Record<string, readonly string[]>;
  for (const category of Object.keys(favorites)) {
    result[category] = stringArray(favorites, category);
  }
  return result;
}

function parseFigurines(raw: Record<string, unknown>): BedWarsFigurines {
  const figurines = obj(raw, "figurines");
  const featured = obj(figurines, "featured");
  return {
    active: str(figurines, "active"),
    featuredCommon: stringArray(featured, "COMMON"),
    featuredLegendary: stringArray(featured, "LEGENDARY"),
    featuredRare: stringArray(featured, "RARE"),
  };
}

function parsePrivateGameSettings(
  raw: Record<string, unknown>,
): BedWarsPrivateGameSettings {
  const settings = obj(raw, "privategames");
  return {
    bedInstaBreak: bool(settings, "bed_instabreak"),
    disableBlockProtection: bool(settings, "disable_block_protection"),
    eventTime: str(settings, "event_time"),
    healthBuff: str(settings, "health_buff"),
    lowGravity: bool(settings, "low_gravity"),
    maxTeamUpgrades: bool(settings, "max_team_upgrades"),
    noDiamonds: bool(settings, "no_diamonds"),
    noEmeralds: bool(settings, "no_emeralds"),
    oneHitOneKill: bool(settings, "one_hit_one_kill"),
    respawnTime: str(settings, "respawn_time"),
    speed: str(settings, "speed"),
  };
}

function parseSettings(raw: Record<string, unknown>): BedWarsSettings {
  const settings = obj(raw, "settings");
  return {
    deposit: str(settings, "deposit"),
    slumberItemNotification: str(settings, "slumberItemNotification"),
    slumberWalletFull: bool(settings, "slumberWalletFull"),
    trapRemoval: bool(settings, "trapRemoval"),
  };
}

function parseSlumberQuest(raw: Record<string, unknown>): BedWarsSlumberQuest {
  const gambler = obj(raw, "gambler_george");
  return {
    completed: readFlags(obj(raw, "completed"), SLUMBER_QUEST_NPCS),
    started: readFlags(obj(raw, "started"), SLUMBER_QUEST_NPCS),
    lastCompleted: readCounts(obj(raw, "lastCompleted"), SLUMBER_QUEST_NPCS),
    lastStarted: readCounts(obj(raw, "lastStarted"), SLUMBER_QUEST_NPCS),
    lastTraded: num(raw, "lastTraded"),
    npcTalk: readFlags(obj(obj(raw, "npc"), "talk"), SLUMBER_QUEST_NPC_TALK),
    objective: readFlags(obj(raw, "objective"), SLUMBER_QUEST_OBJECTIVES),
    item: readCounts(obj(raw, "item"), SLUMBER_QUEST_ITEMS),
    gamblerGeorge: {
      betAmount: num(gambler, "bet_amount"),
      gambleGamesWon: num(gambler, "gamble_games_won"),
      lostBet: bool(gambler, "lost_bet"),
      lostBetTime: num(gambler, "lost_bet_time"),
      shouldReward: bool(gambler, "should_reward"),
      wonLastGame: bool(gambler, "won_last_game"),
    },
  };
}

function parseSlumber(raw: Record<string, unknown>): BedWarsSlumber {
  const slumber = obj(raw, "slumber");
  return {
    bagType: str(slumber, "bag_type"),
    boonMultiplier: num(slumber, "boon_multiplier"),
    currentCosmeticSorting: str(slumber, "currentCosmeticSorting"),
    doublers: num(slumber, "doublers"),
    tickets: num(slumber, "tickets"),
    ticketsGivenToDoorman: num(slumber, "tickets_given_doorman"),
    ticketsRequirementMet: bool(slumber, "tickets_requirement_met"),
    totalTicketsEarned: num(slumber, "total_tickets_earned"),
    walletFullWarning: bool(slumber, "wallet_full_warning"),
    currentPhase: num(obj(slumber, "phase"), "current"),
    phaseThreeCompletedQuests: num(
      obj(slumber, "phasethree"),
      "completed_quests",
    ),
    fredgie: {
      dialogueIndex: num(obj(slumber, "fredgie"), "dialogue_index"),
      shouldUpdateIndex: bool(obj(slumber, "fredgie"), "should_update_index"),
    },
    minion: readCounts(obj(slumber, "minion"), SLUMBER_MINION),
    sandman: readCounts(obj(slumber, "sandman"), SLUMBER_SANDMAN),
    rooms: readFlags(obj(slumber, "room"), SLUMBER_ROOMS),
    quest: parseSlumberQuest(obj(slumber, "quest")),
  };
}

function parsePracticeMode(raw: Record<string, unknown>): BedWarsPracticeMode {
  return {
    blocksPlaced: num(raw, "blocks_placed"),
    successfulAttempts: num(raw, "successful_attempts"),
    failedAttempts: num(raw, "failed_attempts"),
  };
}

function parseBridgingRecords(
  raw: Record<string, unknown>,
): BedWarsPracticeBridgingRecords {
  const records = {} as Record<
    keyof typeof PRACTICE_DISTANCES,
    BedWarsPracticeBridgingDistance
  >;
  for (const distanceName of Object.keys(PRACTICE_DISTANCES) as Array<
    keyof typeof PRACTICE_DISTANCES
  >) {
    const distance = PRACTICE_DISTANCES[distanceName];
    const elevations = {} as Record<
      keyof typeof PRACTICE_ELEVATIONS,
      BedWarsPracticeBridgingElevation
    >;
    for (const elevationName of Object.keys(PRACTICE_ELEVATIONS) as Array<
      keyof typeof PRACTICE_ELEVATIONS
    >) {
      const elevation = PRACTICE_ELEVATIONS[elevationName];
      const prefix = `bridging_distance_${distance}:elevation_${elevation}:angle_`;
      elevations[elevationName] = {
        diagonal: num(raw, `${prefix}DIAGONAL:`),
        straight: num(raw, `${prefix}STRAIGHT:`),
      };
    }
    records[distanceName] = elevations;
  }
  return records;
}

function parsePractice(raw: Record<string, unknown>): BedWarsPractice {
  const practice = obj(raw, "practice");
  return {
    selected: str(practice, "selected"),
    bridging: {
      ...parsePracticeMode(obj(practice, "bridging")),
      records: parseBridgingRecords(obj(practice, "records")),
    },
    fireballJumping: parsePracticeMode(obj(practice, "fireball_jumping")),
    mlg: parsePracticeMode(obj(practice, "mlg")),
    pearlClutching: parsePracticeMode(obj(practice, "pearl_clutching")),
  };
}

function parseChallenges(raw: Record<string, unknown>): BedWarsChallenges {
  const bestTimes = obj(raw, "challenges");
  const challenges = {} as Record<
    keyof typeof CHALLENGE_NAMES,
    BedWarsChallenge
  >;
  for (const name of Object.keys(CHALLENGE_NAMES) as Array<
    keyof typeof CHALLENGE_NAMES
  >) {
    const challenge = CHALLENGE_NAMES[name];
    challenges[name] = {
      bestTime: num(bestTimes, `bw_challenge_${challenge}_best_time`),
      timesCompleted: num(raw, `bw_challenge_${challenge}`),
    };
  }
  return {
    uniqueChallengesCompleted: num(raw, "bw_unique_challenges_completed"),
    selectedChallengeType: str(raw, "selected_challenge_type"),
    totalChallengesCompleted: num(raw, "total_challenges_completed"),
    ...challenges,
  };
}

function parseFeastfood(raw: Record<string, unknown>): BedWarsFeastfood {
  return {
    cooked: readFlags(
      obj(obj(raw, "feastfood"), "cooked"),
      BEDWARS_FEASTFOOD_COOKED,
    ),
  };
}

function parseLeaderboardSettings(
  raw: Record<string, unknown>,
): BedWarsLeaderboardSettings {
  const settings = obj(raw, "leaderboardSettings");
  return {
    mode: str(settings, "mode"),
    resetType: str(settings, "resetType"),
  };
}

function parseHalloween(raw: Record<string, unknown>): BedWarsHalloween {
  const halloween = obj(raw, "halloween");
  const milestone = obj(halloween, "pumpkin_milestone");
  const rewardsRaw = obj(milestone, "rewards");
  const counts = {} as Record<string, number>;
  for (const [key, value] of Object.entries(milestone)) {
    if (typeof value === "number") {
      counts[key] = value;
    }
  }
  const rewards = {} as Record<string, BedWarsHalloweenPumpkinRewardTier>;
  for (const year of Object.keys(rewardsRaw)) {
    rewards[year] = readFlags(
      obj(rewardsRaw, year),
      HALLOWEEN_PUMPKIN_REWARD_TIERS,
    );
  }
  return {
    talkedToPatches: bool(halloween, "talked_to_patches"),
    pumpkinMilestone: { counts, rewards },
  };
}

function parseChristmasProgressQuest(
  raw: Record<string, unknown>,
  key: string,
): BedWarsSeasonalChristmasProgressQuest {
  const quest = obj(raw, key);
  return {
    claimed: num(quest, "claimed"),
    progression: num(quest, "progression"),
  };
}

function parseChristmasListQuest(
  raw: Record<string, unknown>,
  key: string,
): BedWarsSeasonalChristmasListQuest {
  const quest = obj(raw, key);
  return {
    claimed: num(quest, "claimed"),
    progression: stringArray(quest, "progression"),
  };
}

function parseSeasonal(raw: Record<string, unknown>): BedWarsSeasonal {
  const christmasRaw = obj(obj(raw, "seasonal"), "christmas");
  const christmas = {} as Record<string, BedWarsSeasonalChristmasYear>;
  for (const year of Object.keys(christmasRaw)) {
    const yearRaw = obj(christmasRaw, year);
    const megagift = obj(yearRaw, "megagift");
    christmas[year] = {
      talkedToNpc: bool(yearRaw, "talked_to_npc"),
      candyCaneChallenger: parseChristmasListQuest(
        yearRaw,
        "candy_cane_challenger",
      ),
      festiveFrenzy: parseChristmasProgressQuest(yearRaw, "festive_frenzy"),
      giftExchange: parseChristmasProgressQuest(yearRaw, "gift_exchange"),
      happyHolidays: parseChristmasProgressQuest(yearRaw, "happy_holidays"),
      holidayShopping: parseChristmasProgressQuest(yearRaw, "holiday_shopping"),
      megagift: {
        received: num(megagift, "received"),
        sent: num(megagift, "sent"),
      },
      seasonOfGiving: parseChristmasProgressQuest(yearRaw, "season_of_giving"),
      sneakySanta: parseChristmasProgressQuest(yearRaw, "sneaky_santa"),
      twoWeekPhase: parseChristmasProgressQuest(yearRaw, "two_week_phase"),
      winterVacation: parseChristmasListQuest(yearRaw, "winter_vacation"),
    };
  }
  return { christmas };
}

/** Parses a player's Bedwars stats (`stats.Bedwars`) into a typed object. */
export function parseBedWars(
  bw: Record<string, unknown>,
  level: number,
): BedWarsStats {
  return {
    coins: num(bw, "coins") || num(bw, "tokens"),
    experience: num(bw, "Experience"),
    experienceNew: num(bw, "Experience_new"),
    level,
    firstJoinSeason7: bool(bw, "first_join_7"),
    seenBetaMenu: bool(bw, "seen_beta_menu"),
    understandsResourceBank: bool(bw, "understands_resource_bank"),
    understandsStreaks: bool(bw, "understands_streaks"),
    shopSort: str(bw, "shop_sort"),
    shopSortOwnedFirst: bool(bw, "shop_sort_enable_owned_first"),
    quickbuyPrivacy: str(bw, "quickbuy_privacy"),
    selectedUltimate: str(bw, "selected_ultimate"),
    activePrestigeScheme: str(bw, "active_prestige_scheme"),
    activeStar: str(bw, "active_star"),
    dataVersion: num(bw, "data_version"),
    pianistEnabled: bool(bw, "pianistEnabled"),
    votedSnowman: bool(bw, "voted_snowman"),
    votedSugarCookie2: bool(bw, "voted_sugar_cookie2"),
    spookyOpenAchievements: num(bw, "spooky_open_ach"),
    gamesPlayedLegacy: num(bw, "games_played_bedwars_1"),
    lastHytaleAd: date(bw, "lastHytaleAd"),
    lastTourneyAd: date(bw, "lastTourneyAd"),
    glyphStorage: commaList(bw, "glyph_storage_new"),
    sprayGlyphField: commaList(bw, "spray_glyph_field"),
    sprayStorage: commaList(bw, "spray_storage_new"),
    packages: stringArray(bw, "packages"),
    chestHistory: commaList(bw, "chest_history"),
    chestHistoryNew: stringArray(bw, "chest_history_new"),
    freeEventKeys: readFlags(bw, BEDWARS_FREE_EVENT_KEYS),
    activeCosmetics: parseActiveCosmetics(bw),
    boxes: readCounts(bw, BEDWARS_BOXES),
    favorites: parseFavorites(bw),
    favoriteCosmetics: parseFavoriteCosmetics(bw),
    figurines: parseFigurines(bw),
    boon: readFlags(obj(bw, "boon"), BEDWARS_BOON),
    dreamfeast: readFlags(obj(bw, "dreamfeast"), BEDWARS_DREAMFEAST),
    feastfood: parseFeastfood(bw),
    halloween: parseHalloween(bw),
    leaderboardSettings: parseLeaderboardSettings(bw),
    seasonal: parseSeasonal(bw),
    privateGameSettings: parsePrivateGameSettings(bw),
    settings: parseSettings(bw),
    slumber: parseSlumber(bw),
    practice: parsePractice(bw),
    challenges: parseChallenges(bw),
    overall: parseMode(bw, ""),
    solo: withVariants(bw, "eight_one_", SOLO_VARIANTS),
    doubles: withVariants(bw, "eight_two_", DOUBLES_VARIANTS),
    threes: parseMode(bw, "four_three_"),
    fours: withVariants(bw, "four_four_", FOURS_VARIANTS),
    fourVsFour: withVariants(bw, "two_four_", FOUR_VS_FOUR_VARIANTS),
    castle: parseMode(bw, "castle_"),
  };
}

