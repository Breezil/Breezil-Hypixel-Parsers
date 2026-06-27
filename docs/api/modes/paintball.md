# Paintball

Parser for the Hypixel Paintball Warfare mode. It maps the raw `stats.Paintball` block field-for-field into readonly, fully-typed objects with zero computation.

## parsePaintball

Parses a player's Paintball stats (`stats.Paintball`) into a typed object.

```ts
export function parsePaintball(
  stats: Record<string, unknown>,
): PaintballStats | null;
```

Returns `null` when `stats.Paintball` is absent, is not an object, is `null`, or is an array.

### PaintballStats

```ts
export interface PaintballStats {
  readonly coins: number;
  readonly kills: number;
  readonly deaths: number;
  readonly wins: number;
  readonly shotsFired: number;
  readonly killstreaks: number;
  readonly headstart: number;
  readonly forcefieldTime: number;
  readonly showKillPrefix: boolean;
  readonly selectedKillPrefix: string;
  readonly hat: string;
  readonly favoriteSlots: string;
  readonly packages: readonly string[];
  readonly monthly: PaintballPeriodKills;
  readonly weekly: PaintballPeriodKills;
  readonly perks: PaintballPerks;
  readonly mapVotes: PaintballMapVotes;
}
```

| Field                | Type                   | Raw source                                               |
| -------------------- | ---------------------- | -------------------------------------------------------- |
| `coins`              | `number`               | `coins`, falling back to `tokens` when `coins` is falsy  |
| `kills`              | `number`               | `kills`                                                  |
| `deaths`             | `number`               | `deaths`                                                 |
| `wins`               | `number`               | `wins`                                                   |
| `shotsFired`         | `number`               | `shots_fired`                                            |
| `killstreaks`        | `number`               | `killstreaks`                                            |
| `headstart`          | `number`               | `headstart`                                              |
| `forcefieldTime`     | `number`               | `forcefieldTime`                                         |
| `showKillPrefix`     | `boolean`              | `showKillPrefix`                                         |
| `selectedKillPrefix` | `string`               | `selectedKillPrefix`                                     |
| `hat`                | `string`               | `hat`                                                    |
| `favoriteSlots`      | `string`               | `favorite_slots`                                         |
| `packages`           | `readonly string[]`    | `packages` (string entries only; `[]` when not an array) |
| `monthly`            | `PaintballPeriodKills` | `monthly_kills_a` / `monthly_kills_b`                    |
| `weekly`             | `PaintballPeriodKills` | `weekly_kills_a` / `weekly_kills_b`                      |
| `perks`              | `PaintballPerks`       | perk fields                                              |
| `mapVotes`           | `PaintballMapVotes`    | `votes_<map>` fields                                     |

### PaintballPeriodKills

Per-period kill counters, used for both `monthly` and `weekly`.

```ts
export interface PaintballPeriodKills {
  readonly killsA: number;
  readonly killsB: number;
}
```

| Field    | Raw source         |
| -------- | ------------------ |
| `killsA` | `<period>_kills_a` |
| `killsB` | `<period>_kills_b` |

### PaintballPerks

```ts
export interface PaintballPerks {
  readonly adrenaline: number;
  readonly endurance: number;
  readonly fortune: number;
  readonly godfather: number;
  readonly superluck: number;
  readonly transfusion: number;
}
```

Each field maps to the raw key of the same name.

### PaintballMapVotes

Vote counts per map, each mapped from the raw `votes_<map>` key.

```ts
export interface PaintballMapVotes {
  readonly Babyland: number;
  readonly Boletus: number;
  readonly Courtyard: number;
  readonly Egypt: number;
  readonly Gladiator: number;
  readonly Herobrine: number;
  readonly Juice: number;
  readonly LaLaLand: number;
  readonly Mansion: number;
  readonly Market: number;
  readonly Octagon: number;
  readonly "Oh Canada!": number;
  readonly Outback: number;
  readonly Siege: number;
  readonly Swamps: number;
  readonly Victorian: number;
}
```

