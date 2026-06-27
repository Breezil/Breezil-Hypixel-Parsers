<div align="center">

<img src="docs/logo.png" alt="Breezil-Hypixel-Parsers logo" width="120" />

# Breezil-Hypixel-Parsers

**Pure, fully-typed parsers that turn raw Hypixel API JSON into rich, readonly objects.**

[![npm](https://img.shields.io/npm/v/@breezil/hypixel-parsers?style=flat-square&logo=npm)](https://www.npmjs.com/package/@breezil/hypixel-parsers)
[![Docs](https://img.shields.io/github/actions/workflow/status/Breezil/Breezil-Hypixel-Parsers/docs.yml?branch=main&style=flat-square&label=docs)](https://breezil.github.io/Breezil-Hypixel-Parsers/)
[![License: MIT](https://img.shields.io/badge/license-MIT-blue?style=flat-square)](LICENSE)
[![Discord](https://img.shields.io/discord/1460052855389159527?style=flat-square&logo=discord&logoColor=white&label=discord)](https://discord.gg/7SxbNMYQNa)

[Documentation](https://breezil.github.io/Breezil-Hypixel-Parsers/)
&nbsp;&nbsp;|&nbsp;&nbsp;
[Report a bug](https://github.com/Breezil/Breezil-Hypixel-Parsers/issues/new?template=bug_report.yml)
&nbsp;&nbsp;|&nbsp;&nbsp;
[Request a feature](https://github.com/Breezil/Breezil-Hypixel-Parsers/issues/new?template=feature_request.yml)
&nbsp;&nbsp;|&nbsp;&nbsp;
[Join the Discord](https://discord.gg/7SxbNMYQNa)

</div>

---

## Table of Contents

1. [About](#about)
2. [Features](#features)
3. [Tech Stack](#tech-stack)
4. [Getting Started](#getting-started)
   - [Prerequisites](#prerequisites)
   - [Installation](#installation)
5. [Quick Start](#quick-start)
6. [API Reference](#api-reference)
7. [Project Structure](#project-structure)
8. [Testing](#testing)
9. [Deployment](#deployment)
10. [Roadmap](#roadmap)
11. [Contributing](#contributing)
12. [Code of Conduct](#code-of-conduct)
13. [License](#license)
14. [Support &amp; Community](#support--community)
15. [Acknowledgements](#acknowledgements)

---

## About

Breezil-Hypixel-Parsers is a fully open-source TypeScript **library** that turns raw Hypixel API JSON into rich, readonly, fully-typed objects. It gives you one focused parser per domain (player, guild, status, the whole SkyBlock tree, and around twenty game modes) instead of hand-mapping deeply nested response shapes yourself.

The parsers are pure: no network calls, no config, no side effects. You hand them the raw JSON, you get a clean typed object back. That makes them easy to test, easy to reason about, and safe to drop anywhere. They power [`@breezil/hypixel-api`](https://github.com/Breezil), but they work standalone on any Hypixel JSON you already have.

> Part of [**Breezil**](https://github.com/Breezil), an open-source org building clean,
> well-documented projects, tools, and bots. No closed blobs, no sketchy builds. Every line
> is here to read.

> **Using a third-party API or platform?** Breezil-Hypixel-Parsers follows the terms of service of
> anything it integrates with. We do not ship anything designed to abuse a platform or get
> accounts banned.

## Features

- 🧩 One focused parser per Hypixel endpoint: player, guild, status, recent games, the full SkyBlock tree, resources, static endpoints, and housing
- 🎮 Twenty game modes covered in full depth: BedWars, SkyWars, Duels, Arcade, Build Battle, Murder Mystery, TNT Games, The Pit, Mega Walls, Blitz, UHC, and more
- 🔒 Strict-raw: mirrors the raw API field-for-field with zero computation (no ratios, no levels-from-xp, no derived totals); computed values belong in a wrapper on top
- 🗜️ Decoded NBT: base64 plus gzipped item NBT is decoded and typed, not left as an opaque blob
- 📦 Pure and readonly, shipped as a published TypeScript library with full type declarations

## Tech Stack

| Layer       | Choice                                   |
| ----------- | ---------------------------------------- |
| Language    | TypeScript                               |
| Build       | `tsc -b` (TypeScript project references) |
| Package mgr | npm                                      |

## Getting Started

### Prerequisites

Make sure you have these installed before you start.

| Requirement | Version | Notes                            |
| ----------- | ------- | -------------------------------- |
| Node.js     | `>=20`  | [nodejs.org](https://nodejs.org) |
| npm         | `>=10`  | Ships with Node.js               |

This library does not talk to the network and needs no API keys. You bring the raw Hypixel JSON.

### Installation

```bash
# Clone the repo
git clone https://github.com/Breezil/Breezil-Hypixel-Parsers.git
cd Breezil-Hypixel-Parsers

# Install dependencies and build
npm install
npm run build
```

Prefer it as a dependency in your own project?

```bash
npm install @breezil/hypixel-parsers
```

## Quick Start

```ts
import { parsePlayer, parseBedWars } from "@breezil/hypixel-parsers";

// `raw` is the `player` object from a Hypixel /player response.
const player = parsePlayer(raw);

console.log(player.nickname); // "Technoblade"
console.log(player.networkExp); // raw network XP, not a computed level
console.log(player.karma); // raw karma
console.log(player.stats.bedwars?.solo.wins); // raw counters, null if never played

// Every parser is standalone. Hand it just the block you care about:
const bedwars = parseBedWars(rawBedwarsBlock, starLevel);
console.log(bedwars.solo.wins, bedwars.solo.kills); // raw, no ratios
```

Each parser returns a readonly, fully-typed object. Game-mode parsers return `null` when the player has never touched that mode.

## API Reference

Every export is a pure function: raw Hypixel JSON in, a readonly fully-typed object out. There is no client, no config, and no state. The library is strict-raw: it mirrors the API field-for-field and does zero computation (no ratios, no levels-from-xp, no derived totals); computed values belong in a wrapper built on top.

There is a parser for every endpoint the Hypixel API exposes:

- **Core:** `parsePlayer` (aggregates all game modes), `parseGuild`, `parseStatus`, `parseRecentGames`
- **Game modes (20):** `parseBedWars`, `parseSkyWars`, `parseDuels`, `parseArcade`, `parseBuildBattle`, `parseMurderMystery`, `parseTNTGames`, `parsePit`, `parseMegaWalls`, `parseBlitz`, `parseUHC`, `parseSmashHeroes`, `parseCopsAndCrims`, `parsePaintball`, `parseQuakecraft`, `parseVampireZ`, `parseWalls`, `parseWarlords`, `parseTurboKartRacers`, `parseArenaBrawl`
- **SkyBlock:** `parseSkyBlockProfile`, `parseSkyBlockProfiles`, `parseBazaar`, `parseAuction`, `parseAuctionList`, `parseAuctionsPage`, `parseMuseum`, `parseGarden`, `parseSkyBlockNews`, `parseFireSales`, `parsePlayerBingo`, `parseSkyBlockItems`, `parseSkyBlockSkills`, `parseSkyBlockCollections`, `parseSkyBlockElection`, `parseSkyBlockBingo`
- **Resources:** `parseAchievements`, `parseChallenges`, `parseQuests`, `parseGuildAchievements`, `parseGames`, `parseVanityPets`, `parseVanityCompanions`
- **Static & housing:** `parseBoosters`, `parseLeaderboards`, `parseGameCounts`, `parseWatchdogStats`, `parseHouse`, `parseHouses`
- **NBT decoding:** `decodeNbt`, `decodeItemBytes`
- **Helpers (`common`):** `num`, `str`, `bool`, `obj`, `date`, the small safe readers the parsers are built on

Game-mode parsers take the player's `stats` block and return the mode's typed stats, or `null` when the player has never played it (`parseBedWars` also takes the star `level`, passed through verbatim). Every type behind a parser (such as `HypixelPlayer`, `BedWarsStats`, or `SkyBlockProfile`) is exported from the package root too.

> **Full reference:** every export, type, field, and endpoint is documented exhaustively at the [documentation site](https://breezil.github.io/Breezil-Hypixel-Parsers/). This README is the overview; the docs leave nothing out.

## Project Structure

```text
Breezil-Hypixel-Parsers/
├─ src/
│  ├─ index.ts                  # Public entry point, re-exports every module
│  ├─ common.ts                 # Shared, side-effect-free parse helpers
│  ├─ player.ts                 # parsePlayer + HypixelPlayer aggregate
│  ├─ guild.ts                  # parseGuild
│  ├─ status.ts                 # parseStatus
│  ├─ recentgames.ts            # parseRecentGames
│  ├─ nbt.ts                    # decodeNbt / decodeItemBytes (base64 + gzip NBT)
│  ├─ skyblock*.ts              # SkyBlock tree (profile, bazaar, auctions, museum, …)
│  ├─ static.ts                 # boosters, leaderboards, gamecounts, watchdog
│  ├─ housing.ts                # parseHouse / parseHouses
│  ├─ resources-*.ts            # achievements, challenges, quests, games, vanity
│  └─ <mode>.ts                 # one file per game mode (bedwars, skywars, …)
├─ dist/                        # Build output (tsc -b)
└─ package.json
```

## Testing

There is no automated test suite yet. The parsers are pure functions, which makes them straightforward to unit test, and a suite is planned. Contributions that add tests are very welcome.

## Deployment

This package publishes to npm as [`@breezil/hypixel-parsers`](https://www.npmjs.com/package/@breezil/hypixel-parsers). Releases follow [Semantic Versioning](https://semver.org).

```bash
npm run build   # tsc -b, emits dist/
npm publish     # publish the built package
```

See the [Releases](https://github.com/Breezil/Breezil-Hypixel-Parsers/releases) page for changelogs.

## Roadmap

- [ ] Add an automated test suite covering the core parsers
- [ ] Expand modelled fields on the SkyBlock profile tree
- [ ] Flesh out remaining game-mode stat shapes

Have an idea? [Open a feature request](https://github.com/Breezil/Breezil-Hypixel-Parsers/issues/new?template=feature_request.yml).

## Contributing

Contributions are welcome and genuinely appreciated, first timers included. 💙

1. Fork the repo and create your branch: `git checkout -b feat/my-feature`
2. Make your changes and add tests where it makes sense
3. Run `npm run build` to keep things green
4. Commit using [Conventional Commits](https://www.conventionalcommits.org): `feat: add pagination`
5. Open a Pull Request and describe what changed and why

New to the project? Look for issues labeled
[`good first issue`](https://github.com/Breezil/Breezil-Hypixel-Parsers/labels/good%20first%20issue).
See [CONTRIBUTING.md](CONTRIBUTING.md) for the full guide.

## Code of Conduct

This project follows the Breezil [Code of Conduct](CODE_OF_CONDUCT.md). By taking part you
agree to uphold it. Be kind, be welcoming.

## License

Distributed under the **MIT License**. See [`LICENSE`](LICENSE) for the full text.

## Support &amp; Community

- 💬 **Discord:** [Join the Breezil community](https://discord.gg/7SxbNMYQNa)
- 🐛 **Issues:** [github.com/Breezil/Breezil-Hypixel-Parsers/issues](https://github.com/Breezil/Breezil-Hypixel-Parsers/issues)
- 💡 **Discussions:** [github.com/Breezil/Breezil-Hypixel-Parsers/discussions](https://github.com/Breezil/Breezil-Hypixel-Parsers/discussions)

## Acknowledgements

- The [Hypixel Public API](https://api.hypixel.net) and its documented data shapes
- The [hypixel-api-reborn](https://github.com/Hypixel-API-Reborn/hypixel-api-reborn) project and the wider Hypixel API community, whose work we referenced while building this
- Everyone in the [Breezil Discord](https://discord.gg/7SxbNMYQNa)

Every parser was fact-checked against real, public Hypixel API responses. Thanks to the players whose public profiles made that verification possible: Technoblade 👑, _Wile, acoo398, AsrielDreemurr, Complextual, doi, gewoontoon, GoHawksDoesMC, Hibiikii, huntz, ILOVESKYCLASH, ImReeset, ImVoids, izzebella, jackabussy, Jackel1, JelleOG, KnightRush, kristan100, Lem0n, Lemoh, Melonapplesauce, NEmQnjA, notShaheerGamer, phroops, Skorlex, Slies, StinqRay, StreetRules, Sultanik, Super_RvD, suta060, titi2502, tsm1022, and Verxum_.

---

<div align="center">
<sub>Built with 💙 by <a href="https://github.com/Breezil">Breezil</a>.</sub>
</div>

