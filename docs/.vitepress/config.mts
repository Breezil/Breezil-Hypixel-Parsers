export default {
  base: "/Breezil-Hypixel-Parsers/",
  title: "@breezil/hypixel-parsers",
  description:
    "Pure, strict-raw, fully-typed parsers for the Hypixel API. Raw JSON in, typed objects out, zero computation.",
  cleanUrls: true,
  lastUpdated: true,
  head: [["link", { rel: "icon", href: "/Breezil-Hypixel-Parsers/logo.png" }]],
  themeConfig: {
    logo: "/logo.png",
    nav: [
      { text: "Guide", link: "/guide/getting-started" },
      { text: "API", link: "/api/" },
      {
        text: "npm",
        link: "https://www.npmjs.com/package/@breezil/hypixel-parsers",
      },
    ],
    sidebar: [
      {
        text: "Guide",
        items: [
          { text: "Getting Started", link: "/guide/getting-started" },
          { text: "API Overview", link: "/api/" },
        ],
      },
      {
        text: "Core",
        items: [
          { text: "Player", link: "/api/player" },
          { text: "Guild, Status & Recent Games", link: "/api/guild-status" },
        ],
      },
      {
        text: "Game Modes",
        items: [
          { text: "BedWars", link: "/api/modes/bedwars" },
          { text: "SkyWars", link: "/api/modes/skywars" },
          { text: "Duels", link: "/api/modes/duels" },
          { text: "Arcade", link: "/api/modes/arcade" },
          { text: "Build Battle", link: "/api/modes/buildbattle" },
          { text: "Murder Mystery", link: "/api/modes/murdermystery" },
          { text: "TNT Games", link: "/api/modes/tntgames" },
          { text: "The Pit", link: "/api/modes/pit" },
          { text: "Mega Walls", link: "/api/modes/megawalls" },
          { text: "Blitz Survival Games", link: "/api/modes/blitz" },
          { text: "UHC", link: "/api/modes/uhc" },
          { text: "Smash Heroes", link: "/api/modes/smashheroes" },
          { text: "Cops and Crims", link: "/api/modes/copsandcrims" },
          { text: "Paintball", link: "/api/modes/paintball" },
          { text: "Quakecraft", link: "/api/modes/quakecraft" },
          { text: "VampireZ", link: "/api/modes/vampirez" },
          { text: "Walls", link: "/api/modes/walls" },
          { text: "Warlords", link: "/api/modes/warlords" },
          { text: "Turbo Kart Racers", link: "/api/modes/turbokartracers" },
          { text: "Arena Brawl", link: "/api/modes/arenabrawl" },
        ],
      },
      {
        text: "SkyBlock",
        items: [
          { text: "Profile", link: "/api/skyblock/profile" },
          { text: "Bazaar & Auctions", link: "/api/skyblock/economy" },
          {
            text: "Museum, Garden, News & Bingo",
            link: "/api/skyblock/collections",
          },
          { text: "Items", link: "/api/skyblock/items" },
          { text: "Resources", link: "/api/skyblock/resources" },
        ],
      },
      {
        text: "Resources & Static",
        items: [
          { text: "Resources", link: "/api/resources" },
          { text: "Static & Housing", link: "/api/static-housing" },
        ],
      },
      {
        text: "Decoding & Helpers",
        items: [
          { text: "NBT Decoding", link: "/api/nbt" },
          { text: "Helpers (common)", link: "/api/common" },
        ],
      },
    ],
    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/Breezil/Breezil-Hypixel-Parsers",
      },
      { icon: "discord", link: "https://discord.gg/7SxbNMYQNa" },
    ],
    search: { provider: "local" },
    editLink: {
      pattern:
        "https://github.com/Breezil/Breezil-Hypixel-Parsers/edit/main/docs/:path",
    },
    footer: {
      message: "Released under the MIT License.",
      copyright: "Built with 💙 by Breezil",
    },
  },
};

