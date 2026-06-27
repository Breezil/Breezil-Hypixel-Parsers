# API Reference

Every export is a pure function: raw Hypixel JSON in, a readonly fully-typed object out. There is no client, no config, and no state. All names are re-exported from the package root.

## Design principles

- **Strict-raw.** The parsers mirror the raw Hypixel API field-for-field and do zero computation. No ratios, no levels-from-xp, no derived totals, no aggregates. Computed and derived values belong in a wrapper layer built on top of this one.
- **Full depth.** Every field the API returns is typed, including the deep SkyBlock sub-trees and decoded item NBT.
- **Decoded NBT.** Base64 + gzipped item NBT is decoded and typed (see [NBT Decoding](/api/nbt)) rather than left as an opaque blob.
- **Safe defaults.** Missing fields resolve to typed defaults: `0`, `""`, `false`, `null`, `[]`, or `{}`, never `undefined`. Game-mode blocks resolve to `null` when the player has never played them.
- **No `Record<string, unknown>` in outputs**, except the one deliberate decoded-NBT passthrough on item tags.

## Endpoint to parser

| Hypixel endpoint                     | Parser                                                                               |
| ------------------------------------ | ------------------------------------------------------------------------------------ |
| `/player`                            | [`parsePlayer`](/api/player) (aggregates all game modes)                             |
| `/guild`                             | [`parseGuild`](/api/guild-status)                                                    |
| `/status`                            | [`parseStatus`](/api/guild-status)                                                   |
| `/recentgames`                       | [`parseRecentGames`](/api/guild-status)                                              |
| `/skyblock/profile`                  | [`parseSkyBlockProfile`](/api/skyblock/profile)                                      |
| `/skyblock/profiles`                 | [`parseSkyBlockProfiles`](/api/skyblock/profile)                                     |
| `/skyblock/bazaar`                   | [`parseBazaar`](/api/skyblock/economy)                                               |
| `/skyblock/auction`                  | [`parseAuction`](/api/skyblock/economy), [`parseAuctionList`](/api/skyblock/economy) |
| `/skyblock/auctions`                 | [`parseAuctionsPage`](/api/skyblock/economy)                                         |
| `/skyblock/auctions_ended`           | [`parseAuctionList`](/api/skyblock/economy)                                          |
| `/skyblock/museum`                   | [`parseMuseum`](/api/skyblock/collections)                                           |
| `/skyblock/garden`                   | [`parseGarden`](/api/skyblock/collections)                                           |
| `/skyblock/news`                     | [`parseSkyBlockNews`](/api/skyblock/collections)                                     |
| `/skyblock/firesales`                | [`parseFireSales`](/api/skyblock/collections)                                        |
| `/skyblock/bingo`                    | [`parsePlayerBingo`](/api/skyblock/collections)                                      |
| `/resources/skyblock/items`          | [`parseSkyBlockItems`](/api/skyblock/items)                                          |
| `/resources/skyblock/skills`         | [`parseSkyBlockSkills`](/api/skyblock/resources)                                     |
| `/resources/skyblock/collections`    | [`parseSkyBlockCollections`](/api/skyblock/resources)                                |
| `/resources/skyblock/election`       | [`parseSkyBlockElection`](/api/skyblock/resources)                                   |
| `/resources/skyblock/bingo`          | [`parseSkyBlockBingo`](/api/skyblock/resources)                                      |
| `/resources/achievements`            | [`parseAchievements`](/api/resources)                                                |
| `/resources/challenges`              | [`parseChallenges`](/api/resources)                                                  |
| `/resources/quests`                  | [`parseQuests`](/api/resources)                                                      |
| `/resources/guilds/achievements`     | [`parseGuildAchievements`](/api/resources)                                           |
| `/resources/games`                   | [`parseGames`](/api/resources)                                                       |
| `/resources/vanity/pets`             | [`parseVanityPets`](/api/resources)                                                  |
| `/resources/vanity/companions`       | [`parseVanityCompanions`](/api/resources)                                            |
| `/counts`                            | [`parseGameCounts`](/api/static-housing)                                             |
| `/leaderboards`                      | [`parseLeaderboards`](/api/static-housing)                                           |
| `/boosters`                          | [`parseBoosters`](/api/static-housing)                                               |
| `/punishmentstats`                   | [`parseWatchdogStats`](/api/static-housing)                                          |
| `/housing/active`, `/housing/houses` | [`parseHouses`](/api/static-housing)                                                 |
| `/housing/house`                     | [`parseHouse`](/api/static-housing)                                                  |

## By domain

### Core

- [`parsePlayer`](/api/player) and the full `HypixelPlayer` tree
- [`parseGuild`, `parseStatus`, `parseRecentGames`](/api/guild-status)

### Game modes

[`parseBedWars`](/api/modes/bedwars) ·
[`parseSkyWars`](/api/modes/skywars) ·
[`parseDuels`](/api/modes/duels) ·
[`parseArcade`](/api/modes/arcade) ·
[`parseBuildBattle`](/api/modes/buildbattle) ·
[`parseMurderMystery`](/api/modes/murdermystery) ·
[`parseTNTGames`](/api/modes/tntgames) ·
[`parsePit`](/api/modes/pit) ·
[`parseMegaWalls`](/api/modes/megawalls) ·
[`parseBlitz`](/api/modes/blitz) ·
[`parseUHC`](/api/modes/uhc) ·
[`parseSmashHeroes`](/api/modes/smashheroes) ·
[`parseCopsAndCrims`](/api/modes/copsandcrims) ·
[`parsePaintball`](/api/modes/paintball) ·
[`parseQuakecraft`](/api/modes/quakecraft) ·
[`parseVampireZ`](/api/modes/vampirez) ·
[`parseWalls`](/api/modes/walls) ·
[`parseWarlords`](/api/modes/warlords) ·
[`parseTurboKartRacers`](/api/modes/turbokartracers) ·
[`parseArenaBrawl`](/api/modes/arenabrawl)

Each game-mode parser takes the player's `stats` block and returns the mode's typed stats, or `null` when the player has never played it. `parseBedWars` additionally takes the star `level`, which it passes through verbatim.

### SkyBlock

- [Profile](/api/skyblock/profile): `parseSkyBlockProfile`, `parseSkyBlockProfiles`
- [Bazaar & Auctions](/api/skyblock/economy): `parseBazaar`, `parseAuction`, `parseAuctionList`, `parseAuctionsPage`
- [Museum, Garden, News & Bingo](/api/skyblock/collections): `parseMuseum`, `parseGarden`, `parseSkyBlockNews`, `parseFireSales`, `parsePlayerBingo`
- [Items](/api/skyblock/items): `parseSkyBlockItems`
- [Resources](/api/skyblock/resources): `parseSkyBlockSkills`, `parseSkyBlockCollections`, `parseSkyBlockElection`, `parseSkyBlockBingo`

### Resources, static & housing

- [Resources](/api/resources): `parseAchievements`, `parseChallenges`, `parseQuests`, `parseGuildAchievements`, `parseGames`, `parseVanityPets`, `parseVanityCompanions`
- [Static & Housing](/api/static-housing): `parseBoosters`, `parseLeaderboards`, `parseGameCounts`, `parseWatchdogStats`, `parseHouse`, `parseHouses`

### Decoding & helpers

- [NBT Decoding](/api/nbt): `decodeNbt`, `decodeItemBytes`
- [Helpers](/api/common): `num`, `str`, `bool`, `obj`, `date`

Every type behind a parser (such as `HypixelPlayer`, `BedWarsStats`, or `SkyBlockProfile`) is exported from the package root too.

