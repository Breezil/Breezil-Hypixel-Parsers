# Getting Started

`@breezil/hypixel-parsers` turns raw Hypixel API JSON into readonly, fully-typed objects. You bring the raw JSON (from your own fetch), and you get a clean typed object back. There is no client, no config, no network, and no state.

## Installation

```bash
npm install @breezil/hypixel-parsers
```

Requires Node.js `>=20`. The package ships with full TypeScript declarations.

## The strict-raw philosophy

These parsers are a **typed mirror of the raw Hypixel API**. They do **zero computation**:

- They read what the API returns and convert it to a typed object, field-for-field.
- They never derive values. There are no win/loss ratios, no levels-from-xp, no aggregated totals, no computed ranks.
- Derived and computed values belong in a wrapper layer built on top of this one. This package is the motor; the math lives upstream.

In exchange you get full depth (every field the API returns is typed, including the deep SkyBlock sub-trees and decoded item NBT) and predictable shapes: missing fields resolve to typed defaults (`0`, `""`, `false`, `null`, `[]`, `{}`), never `undefined`.

## Usage

Every parser is a standalone pure function. Hand it the relevant slice of a Hypixel response:

```ts
import { parsePlayer } from "@breezil/hypixel-parsers";

// `data` is the JSON from GET https://api.hypixel.net/v2/player?uuid=...
const player = parsePlayer(data.player);

player.uuid; // "b876ec32a39647..."
player.nickname; // "Technoblade"
player.networkExp; // raw network XP (not a computed level)
player.karma; // raw karma
player.stats.bedwars?.coins; // typed BedWars stats, or null if never played
player.stats.skywars?.coins; // each game block is null when unplayed
```

Game-mode parsers are standalone too, when you only have one block:

```ts
import { parseBedWars } from "@breezil/hypixel-parsers";

// The star level is passed through verbatim; it is not computed here.
const bedwars = parseBedWars(data.player.stats.Bedwars, starLevel);
bedwars.solo.wins; // raw counters, no ratios
```

SkyBlock, resources, and static endpoints follow the same shape:

```ts
import {
  parseSkyBlockProfiles,
  parseBazaar,
  parseGames,
} from "@breezil/hypixel-parsers";

const profiles = parseSkyBlockProfiles(profilesResponse); // SkyBlockProfile[]
const bazaar = parseBazaar(bazaarResponse.products); // Record<string, BazaarProduct>
const games = parseGames(gamesResponse.games); // typed game registry
```

## One parser per endpoint

There is a parser for every endpoint the Hypixel API exposes. See the [API Reference](/api/) for the full endpoint-to-parser map and a page per domain documenting every export, type, and field.

