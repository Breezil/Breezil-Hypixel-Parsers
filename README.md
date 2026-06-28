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
6. [Documentation](#documentation)
7. [API Reference](#api-reference)
8. [Project Structure](#project-structure)
9. [Releases and Deployment](#releases-and-deployment)
10. [Roadmap](#roadmap)
11. [Contributing](#contributing)
12. [Code of Conduct](#code-of-conduct)
13. [License](#license)
14. [Support &amp; Community](#support--community)
15. [Acknowledgements](#acknowledgements)

---

## About

Breezil-Hypixel-Parsers is a fully open-source TypeScript **library** that turns raw Hypixel API JSON into rich, readonly, fully-typed objects. It gives you one focused parser per domain (player, guild, status, the whole SkyBlock tree, and every Hypixel game mode) instead of hand-mapping deeply nested response shapes yourself.

The parsers are pure: no network calls, no config, no side effects. You hand them the raw JSON, you get a clean typed object back. That makes them easy to test, easy to reason about, and safe to drop anywhere. They power [`@breezil/hypixel-api`](https://github.com/Breezil), but they work standalone on any Hypixel JSON you already have.

> Part of [**Breezil**](https://github.com/Breezil), an open-source org building clean,
> well-documented projects, tools, and bots. No closed blobs, no sketchy builds. Every line
> is here to read.

> **Using a third-party API or platform?** Breezil-Hypixel-Parsers follows the terms of service of
> anything it integrates with. We do not ship anything designed to abuse a platform or get
> accounts banned.

## Features

- 🧩 One focused parser per Hypixel endpoint: player, guild, status, recent games, the full SkyBlock tree, resources, static endpoints, and housing
- 🎮 Every game mode covered in full depth (28 stats blocks): BedWars, SkyWars, Duels, Arcade, The Pit, Mega Walls, Warlords, and the retired ones too (SkyClash, True Combat, Speed UHC, Wool Games, Legacy) since old accounts still carry that data
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

## Documentation

The full reference lives at **[the documentation site](https://breezil.github.io/Breezil-Hypixel-Parsers/)**: every export, its type, every field, and the endpoint-to-parser map, organized by domain. The section below is the overview; the docs leave nothing out.

## API Reference

Every export is a pure function: raw Hypixel JSON in, a readonly fully-typed object out. There is no client, no config, and no state. The library is strict-raw: it mirrors the API field-for-field and does zero computation (no ratios, no levels-from-xp, no derived totals); computed values belong in a wrapper built on top.

There is a parser for every endpoint the Hypixel API exposes:

- **Core:** `parsePlayer` (aggregates all game modes), `parseGuild`, `parseStatus`, `parseRecentGames`
- **Game modes (28):** `parseBedWars`, `parseSkyWars`, `parseDuels`, `parseArcade`, `parseBuildBattle`, `parseMurderMystery`, `parseTNTGames`, `parsePit`, `parseMegaWalls`, `parseBlitz`, `parseUHC`, `parseSmashHeroes`, `parseCopsAndCrims`, `parsePaintball`, `parseQuakecraft`, `parseVampireZ`, `parseWalls`, `parseWarlords`, `parseTurboKartRacers`, `parseArenaBrawl`, `parseWoolGames`, `parseSpeedUHC`, `parseSkyClash`, `parseTrueCombat`, `parseLegacy`, `parseMainLobby`, `parseHousingStats`, `parseSkyBlockStats`
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

## Releases and Deployment

Two things ship automatically from this repo, so there is no manual deploy step.

**Documentation.** The docs site rebuilds and deploys to GitHub Pages on every push to `main`, via `.github/workflows/docs.yml`. Merge to `main` and the site updates on its own.

**npm package.** Publishing to npm is automated by `.github/workflows/publish.yml`, which runs when a GitHub Release is published. Releases follow [Semantic Versioning](https://semver.org). To cut one:

1. Bump `version` in `package.json` (for example `1.0.1`).
2. Merge that change to `main` (via a PR, since `main` is protected).
3. On GitHub, go to Releases, choose Draft a new release, create a tag like `v1.0.1`, write the notes, and click Publish release.

Publishing the release triggers the workflow, which builds the package and runs `npm publish` with provenance. The first publish is done once by a maintainer (`npm publish` locally) so the package exists, after which the Trusted Publisher setup lets the Action handle every release with no token to manage.

## Roadmap

- [ ] Add an automated test suite covering the core parsers
- [ ] Expand modelled fields on the SkyBlock profile tree

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

<!-- prettier-ignore -->
Every parser was fact-checked against real, public Hypixel API responses. Thanks to the players whose public profiles made that verification possible: Technoblade 👑, _Coraxx, _emmy, _Explo, _Foe, _jebbb, _Wile, _zReaper, 0HDM, 56ms, 5py, 8w_, A0E, Aaron678, ACErobotbear, acoo398, Ahsur, Airab, AJZZ987, Alexdoru, AlexNotGreen, allorens, Am_I_Real, AmaEnbo, Anchor_Falls, AnimeGirlsrSpicy, AnnKat, AntVenom, apehitkey, ApexRevenant, AsrielDreemurr, Atomix888, aTree, Autumnish, awesomerlegend, AyeCool, AyeDu, aziv, Bayley, Bcwen, bearman88, BeJinxed, beruq, BigHZonda, BirdsAreKindaHot, BlackJackDiamond, blockcityy, bluepandaone, boofyOOF, Boogiedop, BuyBrett, C4PS, Camflash_, Canary_, CaptainSparklez, Cawli, ccccXD, Celatrix, Cencioh, chayuwu, cocoasann, codename_B, CoffeeQuinone, ColeCRZ, CommonAngle, Complextual, CompWalls, ConneU, Connor, CookieBrunch, CoolSurvivor, Crayfishh, CSWorm, CURSEDVOODOODOLL, CutesyTootsie, cy1m, danel_1515, Dctr, defek7, DeltaMTH, destroyer1216, Dewier, DimandADane, Dlue, doi, Drin_, Dyrh, e9ud, Edens, Edge, Eggscended, Eirwic, Eiselin, EMUHLEET, Endervillager_, enoitna, Espenode, exy, eyina, Ezedris, fabdad, Faiths, feeshattack, Fifey, Finnily, FireHead007, Fn4tic, Fossilised, Frozenaple, Fujiro, FunnyBadUser, FunnyMonkeyNFT, FurrySha, gamerboy80, GARAGEMASTERYT, gewoontoon, GFi_, giantorca, GnatDestroyer, Gnvv, GoHawksDoesMC, Golurk, Govo, gryunryuo, Haasher, Heatran, Hefney, herr_holle, HeyItsLaurenn, Hibiikii, hollowhold, huntz, hypixel, Hyplex, Ice_Creqm, ignlube, iixz, iiZoM, ILOVESKYCLASH, Imaluckyfox, IMBECILESTORM, ImReeset, ImVoids, Inforr, Invincitron2000, IsaacXD22, ItsmeBri, ItzBiscuit, Ivoryed, izzebella, jackabussy, Jackel1, Jager02, Jaka, JasKnightWing, JelleOG, jenidu, Joany, Jules03, JustOp_, Jxon, K9L, Kawaii211, Kennyt2001, KENQN, KILLERSNOWGOON, kipanator, kittenluvr44, KnightRush, Knzksn, kole1, Koteria, kristan100, KuNet, KweenTumble, KylleG, Lahmacuns, lampless, Lampsi, Laszr, Leafina, Lem0n, Lemoh, Lemoncurd, LeoWEREWOLF, lexka, lifelong, Lioness_Rising, livhi, LNECRON, lovixey, Luc_is_cool, LuckySparkles, MAGICDUST, Maixxed, Makiso, Manhal_IQ_, Manienta, MarkLikesRowing, masonstorm14, MasterOblivion, Mattlachs, MCMaximilian, Meavue, Melonapplesauce, meowmiaumeowmiau, meqadeth, Meriscan, MerryTacos, mikeeeee_, Miksajlo, Minikloon, mmxw11, MockBall, ModernLegendsLP, momiji777, momo, MopStick, Msrn, Namauchi, nasnoahs, NEmQnjA, NewEriwan, NewfieSpaceman, NinjaMario02, nokotti, nonamesonemo, Noppe, Noqef, Not_Solly, notAve, NoticeMe, notShaheerGamer, NutmegNam, O__M__G, Offencess, Oh_CherryMia, om5r, opcrafter_3, Orbaist, oVoidPhobic, Pablojor, Pancracio25, papercaine, patua, pehi, phroops, PigmanX, Pimess, Plancke, platinaknife, pommed, Potato8279, PotatoAspect, PrefireCityV1, prolizard2300, Puffafish, PurpleOre, Rackals, radicul, ravekandi, ravenatorman, Rayjer, Recompensa, recordheat, Refraction, Relenter, rem_hypixel, Rennedi, Rezzus, Rhiakuna, roberst, RobyZilla, RolfOfHouseRolf, Rollr, rouxee, Ruhtray, Sabotage, Sam, ScottyGardenHose, SeaOtterFan, Sesamstraat, SexyPeterGriffin, Shadowhunter231, ShariahsLaw, Shauk, ShirouEmiya, shortsleeve, Shulked, SHUNPONG_2, SixthSense91, skatom, Skorlex, SleepyAmy, Slies, SlushiX, snqwmen, Solas_Devin, SonOfAtch, SoulF1k, SoutifDeLuxe, SplendidMack, StinqRay, StreetRules, SUGARBLITZZZZZZZ, Sultanik, Summer_Albert, SUMOLOVERDARK, sumSmash, sunkye, Sunset840, SuntzuLegacy, Super_RvD, SurenaGLDN, suta060, SwapperX, Tammon, tastyyellowsnow, Tcnfi, TearOne, The11thDctr, TheBoiledEgg, TheClassicGamer, TheFirstOracle, TheGlowPt2, theseal12, TheWayLifeGoes, TheZetaMale, thomasyk, ThoriumHD, Thuntree, Tild, TileHill, Timkoensurvival, Timness, titi2502, TommyInnit, tormin, TR153, Trixkz, tsm1022, TURUHASHI, tznv, Uesug1Erii, UndaCap, UnMoutonRandom, uwuRqn, VDcharlie, Verxum_, Viboya, ViyellasTears, Vurb, Wabadaba, WarOG, webwurd, WetPeeto, whoiscaden, whvtes247, wittyhope, Xaramis57X, xBasil, xdchimahlol, xDojo, Xenf, Xiegg, xShotteh, xTootsie, YandereLovesYou, ychan6, YetiSword, yuruly, Zenection, ZolTroll96, Zombiechu, ZyLEx10, zzyzxman, and zzzzzzzz2.

---

<div align="center">
<sub>Built with 💙 by <a href="https://github.com/Breezil">Breezil</a>.</sub>
</div>
