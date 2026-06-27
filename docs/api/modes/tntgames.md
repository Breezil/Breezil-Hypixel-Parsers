# TNT Games

Parser for Hypixel TNT Games statistics. Like every parser in `@breezil/hypixel-parsers`, it is strict-raw: it mirrors the raw API field-for-field and performs zero computation (no ratios, levels, or derived values).

## parseTNTGames

Parses a player's TNT Games stats (`stats.TNTGames`) into a typed object.

```ts
export function parseTNTGames(
  stats: Record<string, unknown>,
): TNTGamesStats | null;
```

### Returned type

```ts
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
  readonly newActiveDeathEffect: string;
  readonly newActiveParticleEffect: string;
  readonly newDoubleJumpEffect: string;
  readonly newSelectedHat: string;
  readonly selectedHat: string;
  readonly packages: readonly string[];
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
}
```

#### Field reference

| Field                     | Raw key                         | Notes                                                       |
| ------------------------- | ------------------------------- | ----------------------------------------------------------- |
| `coins`                   | `coins` or `tokens`             | Coin balance; falls back to `tokens` when `coins` is falsy. |
| `wins`                    | `wins`                          | Total TNT Games wins.                                       |
| `winstreak`               | `winstreak`                     | Current win streak.                                         |
| `lastTourneyAd`           | `lastTourneyAd`                 | Timestamp of the last tournament advertisement, or `null`.  |
| `activeArrowTrail`        | `active_arrow_trail`            | Active arrow trail cosmetic.                                |
| `activeDeathEffect`       | `active_death_effect`           | Active death effect cosmetic.                               |
| `activeDoubleJump`        | `active_double_jump`            | Active double jump cosmetic.                                |
| `activeParticle`          | `active_particle`               | Active particle cosmetic.                                   |
| `activeParticleEffect`    | `active_particle_effect`        | Active particle effect cosmetic.                            |
| `activeVoidMessage`       | `active_void_message`           | Active void message cosmetic.                               |
| `newActiveDeathEffect`    | `new_active_death_effect`       | New active death effect cosmetic.                           |
| `newActiveParticleEffect` | `new_active_particle_effect`    | New active particle effect cosmetic.                        |
| `newDoubleJumpEffect`     | `new_double_jump_effect`        | New double jump effect cosmetic.                            |
| `newSelectedHat`          | `new_selected_hat`              | New selected hat cosmetic.                                  |
| `selectedHat`             | `selected_hat`                  | Selected hat cosmetic.                                      |
| `packages`                | `packages`                      | Owned packages.                                             |
| `mapVotes`                | `votes_*`                       | Per-map vote counts.                                        |
| `flags`                   | `flags`                         | Player toggle flags.                                        |
| `privateGames`            | `privategames`                  | Private game settings.                                      |
| `leaderboardSettings`     | `leaderboardSettings`           | Leaderboard display settings.                               |
| `tntRun`                  | `*_tntrun`, `*_spleef`, etc.    | TNT Run mode stats.                                         |
| `tntRunTournament`        | `wins_tourney_tnt_run_*`        | TNT Run tournament rounds.                                  |
| `pvpRun`                  | `*_pvprun`                      | PVP Run mode stats.                                         |
| `bowSpleef`               | `*_bowspleef`, `*_spleef`, etc. | Bow Spleef mode stats.                                      |
| `tntTag`                  | `*_tntag`, `tag_*`              | TNT Tag mode stats.                                         |
| `wizards`                 | `*_capture`, `*wizard*`         | Wizards mode stats.                                         |

### TNTGamesTNTRunStats

```ts
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
```

| Field                      | Raw key                           |
| -------------------------- | --------------------------------- |
| `wins`                     | `wins_tntrun`                     |
| `deaths`                   | `deaths_tntrun`                   |
| `bestTime`                 | `record_tntrun`                   |
| `doubleJumpTier`           | `doublejump_tntrun`               |
| `doubleJumps`              | `new_tntrun_double_jumps`         |
| `doubleJumpsLegacy`        | `new_tntrun_double_jumps_legacy`  |
| `slownessPotions`          | `new_tntrun_slowness_potions`     |
| `speedPotions`             | `new_tntrun_speed_potions`        |
| `potionsSplashedOnPlayers` | `run_potions_splashed_on_players` |
| `prefix`                   | `prefix_tntrun`                   |

### TNTGamesTournamentRound

```ts
export interface TNTGamesTournamentRound {
  readonly round: number;
  readonly wins: number;
  readonly deaths: number;
}
```

Each entry of `tntRunTournament` is collected from raw keys matching `wins_tourney_tnt_run_<round>`. The numeric `round` suffix drives `wins` (`wins_tourney_tnt_run_<round>`) and `deaths` (`deaths_tourney_tnt_run_<round>`).

### TNTGamesPVPRunStats

```ts
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
}
```

| Field               | Raw key                          |
| ------------------- | -------------------------------- |
| `wins`              | `wins_pvprun`                    |
| `kills`             | `kills_pvprun`                   |
| `deaths`            | `deaths_pvprun`                  |
| `bestTime`          | `record_pvprun`                  |
| `regeneration`      | `new_pvprun_regeneration`        |
| `notoriety`         | `new_pvprun_notoriety`           |
| `fortitude`         | `new_pvprun_fortitude`           |
| `doubleJumps`       | `new_pvprun_double_jumps`        |
| `doubleJumpsLegacy` | `new_pvprun_double_jumps_legacy` |

### TNTGamesBowSpleefStats

```ts
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
  readonly arrowTrail: string;
  readonly prefix: string;
}
```

| Field               | Raw key                          |
| ------------------- | -------------------------------- |
| `wins`              | `wins_bowspleef`                 |
| `deaths`            | `deaths_bowspleef`               |
| `tags`              | `tags_bowspleef`                 |
| `doubleJumpTier`    | `spleef_doublejump`              |
| `repulsorTier`      | `spleef_repulse`                 |
| `tripleShotTier`    | `spleef_triple`                  |
| `doubleJumps`       | `new_spleef_double_jumps`        |
| `doubleJumpsLegacy` | `new_spleef_double_jumps_legacy` |
| `repulsor`          | `new_spleef_repulsor`            |
| `repulsorLegacy`    | `new_spleef_repulsor_legacy`     |
| `tripleShot`        | `new_spleef_tripleshot`          |
| `tripleShotLegacy`  | `new_spleef_tripleshot_legacy`   |
| `arrowRain`         | `new_spleef_arrowrain`           |
| `explosiveDash`     | `new_spleef_exlosive_dash`       |
| `arrowTrail`        | `new_spleef_arrowtrail`          |
| `prefix`            | `prefix_bowspleef`               |

### TNTGamesTNTTagStats

```ts
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
  readonly prefix: string;
}
```

| Field             | Raw key               |
| ----------------- | --------------------- |
| `wins`            | `wins_tntag`          |
| `kills`           | `kills_tntag`         |
| `deaths`          | `deaths_tntag`        |
| `speedy`          | `new_tntag_speedy`    |
| `speed`           | `tag_speed`           |
| `blastProtection` | `tag_blastprotection` |
| `speedItUp`       | `tag_speeditup`       |
| `slowItDown`      | `tag_slowitdown`      |
| `suit`            | `new_tag_suit`        |
| `prefix`          | `prefix_tntag`        |

### TNTGamesWizardsStats

```ts
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
```

| Field            | Raw key                   |
| ---------------- | ------------------------- |
| `wins`           | `wins_capture`            |
| `kills`          | `kills_capture`           |
| `assists`        | `assists_capture`         |
| `deaths`         | `deaths_capture`          |
| `points`         | `points_capture`          |
| `kineticHealing` | `kinetic_healing_capture` |
| `airTime`        | `air_time_capture`        |
| `captureClass`   | `capture_class`           |
| `selectedClass`  | `wizards_selected_class`  |
| `prefix`         | `prefix_capture`          |

The ten per-wizard fields each compose a set of shared base interfaces (described below), built from a wizard-specific raw key prefix.

### Wizard composition interfaces

The per-wizard interfaces are assembled by extending these shared building-block interfaces.

```ts
export interface TNTGamesWizardBase {
  readonly explode: number;
  readonly regen: number;
  readonly kills: number;
  readonly deaths: number;
  readonly assists: number;
  readonly healing: number;
  readonly damageTaken: number;
  readonly alternateEffectsStatus: boolean;
}
```

| Field                    | Raw key (relative to wizard prefix) |
| ------------------------ | ----------------------------------- |
| `explode`                | `<prefix>_explode`                  |
| `regen`                  | `<prefix>_regen`                    |
| `kills`                  | `<prefix>_kills`                    |
| `deaths`                 | `<prefix>_deaths`                   |
| `assists`                | `<prefix>_assists`                  |
| `healing`                | `<prefix>_healing`                  |
| `damageTaken`            | `<prefix>_damage_taken`             |
| `alternateEffectsStatus` | `<prefix>_alternate_effects_status` |

```ts
export interface TNTGamesWizardPrestige {
  readonly prestigeField: string;
}
```

`prestigeField` maps from `<prefix>_prestige_field`.

```ts
export interface TNTGamesWizardLegacy {
  readonly explodeLegacy: number;
  readonly regenLegacy: number;
}
```

`explodeLegacy` maps from `<prefix>_explode_legacy` and `regenLegacy` from `<prefix>_regen_legacy`.

```ts
export interface TNTGamesWizardTier {
  readonly explodeTier: number;
  readonly regenTier: number;
}
```

`explodeTier` maps from `<wizard>_explode` and `regenTier` from `<wizard>_regen`, where `<wizard>` is a tier-specific raw prefix (for example `bloodwizard`).

### Per-wizard interfaces

```ts
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
  extends TNTGamesWizardBase, TNTGamesWizardPrestige, TNTGamesWizardLegacy {}

export interface TNTGamesWitherWizard
  extends
    TNTGamesWizardBase,
    TNTGamesWizardPrestige,
    TNTGamesWizardLegacy,
    TNTGamesWizardTier {}
```

Each wizard is built from a wizard-specific base/prestige/legacy raw prefix and (when applicable) a separate tier raw prefix:

| Field     | Base/prestige/legacy prefix | Tier prefix     | Extends                      |
| --------- | --------------------------- | --------------- | ---------------------------- |
| `ancient` | `new_ancientwizard`         | (none)          | Base, Prestige               |
| `arcane`  | `arcane_wizard`             | (none)          | Base                         |
| `blood`   | `new_bloodwizard`           | `bloodwizard`   | Base, Prestige, Legacy, Tier |
| `fire`    | `new_firewizard`            | `firewizard`    | Base, Prestige, Legacy, Tier |
| `hydro`   | `new_hydrowizard`           | (none)          | Base, Prestige               |
| `ice`     | `new_icewizard`             | `icewizard`     | Base, Prestige, Legacy, Tier |
| `kinetic` | `new_kineticwizard`         | `kineticwizard` | Base, Prestige, Legacy, Tier |
| `storm`   | `new_stormwizard`           | (none)          | Base, Prestige               |
| `toxic`   | `new_toxicwizard`           | (none)          | Base, Prestige, Legacy       |
| `wither`  | `new_witherwizard`          | `witherwizard`  | Base, Prestige, Legacy, Tier |

### TNTGamesFlags

```ts
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
```

Built from the raw `flags` object.

| Field                              | Raw key                               |
| ---------------------------------- | ------------------------------------- |
| `enableExplosiveDash`              | `enable_explosive_dash`               |
| `giveDjFeather`                    | `give_dj_feather`                     |
| `showPreGameHints`                 | `show_pre_game_hints`                 |
| `showTipHolograms`                 | `show_tip_holograms`                  |
| `showTntRunActionbarInfo`          | `show_tntrun_actionbar_info`          |
| `showTntTagActionbarInfo`          | `show_tnttag_actionbar_info`          |
| `showWinPrefixes`                  | `show_win_prefixes`                   |
| `showWizPres`                      | `show_wiz_pres`                       |
| `showWizardsActionbarInfo`         | `show_wizards_actionbar_info`         |
| `showWizardsCooldownNotifications` | `show_wizards_cooldown_notifications` |

### TNTGamesPrivateGames

```ts
export interface TNTGamesPrivateGames {
  readonly bowSpleefHeavyArrows: boolean;
  readonly bowSpleefQuintuple: boolean;
  readonly bowSpleefDjMultiplier: string;
  readonly lowGravity: boolean;
  readonly maxedPerks: boolean;
  readonly pvpRunArmorType: string;
  readonly pvpRunKnockback: boolean;
  readonly pvpRunSwordType: string;
  readonly speed: string;
  readonly tntRunSnowballs: boolean;
  readonly tntTagDeathmatch: boolean;
  readonly tntTagNoPowerups: boolean;
  readonly wizardsDeathPenalty: string;
  readonly wizardsManaRegen: string;
  readonly wizardsMaxClasses: boolean;
}
```

Built from the raw `privategames` object.

| Field                   | Raw key                   |
| ----------------------- | ------------------------- |
| `bowSpleefHeavyArrows`  | `bow_spleef_heavy_arrows` |
| `bowSpleefQuintuple`    | `bow_spleef_quintuple`    |
| `bowSpleefDjMultiplier` | `bowspleef_dj_multiplier` |
| `lowGravity`            | `low_gravity`             |
| `maxedPerks`            | `maxed_perks`             |
| `pvpRunArmorType`       | `pvp_run_armor_type`      |
| `pvpRunKnockback`       | `pvp_run_knockback`       |
| `pvpRunSwordType`       | `pvp_run_sword_type`      |
| `speed`                 | `speed`                   |
| `tntRunSnowballs`       | `tnt_run_snowballs`       |
| `tntTagDeathmatch`      | `tnt_tag_deathmatch`      |
| `tntTagNoPowerups`      | `tnt_tag_no_powerups`     |
| `wizardsDeathPenalty`   | `wizards_death_penalty`   |
| `wizardsManaRegen`      | `wizards_mana_regen`      |
| `wizardsMaxClasses`     | `wizards_max_classes`     |

### TNTGamesLeaderboardSettings

```ts
export interface TNTGamesLeaderboardSettings {
  readonly mode: string;
  readonly resetType: string;
}
```

Built from the raw `leaderboardSettings` object's `mode` and `resetType` fields.

### TNTGamesMapVote

```ts
export interface TNTGamesMapVote {
  readonly map: string;
  readonly votes: number;
}
```

Each entry of `mapVotes` is collected from every raw key prefixed with `votes_`; `map` is the key with the `votes_` prefix stripped, and `votes` is the raw numeric value.

## Null and empty behavior

- `parseTNTGames` returns `null` when `stats.TNTGames` is absent, not an object, `null`, or an array.
- `lastTourneyAd` is a `Date` or `null` when the timestamp is absent.
- `coins` falls back to the `tokens` raw key when `coins` is falsy.
- `packages` returns an empty array when the raw value is not an array; non-string entries are filtered out.
- `mapVotes` returns an empty array when no `votes_` keys exist.
- `tntRunTournament` returns an empty array when no `wins_tourney_tnt_run_*` keys exist.
- `flags`, `privateGames`, and `leaderboardSettings` are built from an empty object when their raw value is missing, not an object, `null`, or an array, so their fields fall back to helper defaults.
- Numeric, string, and boolean fields fall back to the defaults provided by the shared `num`, `str`, and `bool` helpers when their raw keys are missing.

