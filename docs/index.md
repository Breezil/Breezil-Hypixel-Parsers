---
layout: home

hero:
  name: "@breezil/hypixel-parsers"
  text: Raw Hypixel JSON in, typed objects out.
  tagline: Pure, strict-raw, fully-typed parsers that mirror the Hypixel API field-for-field. Zero computation, full depth, every endpoint covered.
  image:
    src: /logo.png
    alt: hypixel-parsers
  actions:
    - theme: brand
      text: Getting Started
      link: /guide/getting-started
    - theme: alt
      text: API Reference
      link: /api/
    - theme: alt
      text: View on GitHub
      link: https://github.com/Breezil/Breezil-Hypixel-Parsers

features:
  - icon: 🧩
    title: One parser per endpoint
    details: A focused parser for every Hypixel endpoint, player, guild, status, recent games, the full SkyBlock tree, resources, static, and housing, instead of hand-mapping deeply nested response shapes yourself.
  - icon: 🎮
    title: Twenty game modes, full depth
    details: BedWars, SkyWars, Duels, Arcade, and sixteen more, each with its complete typed stat tree read straight from the raw API.
  - icon: 🔒
    title: Strict-raw, zero computation
    details: The parsers mirror the raw API field-for-field. No ratios, no levels-from-xp, no derived totals. Computed values belong in a wrapper built on top of this one.
  - icon: 🗜️
    title: Decoded NBT
    details: Base64 plus gzipped item NBT is decoded and typed, not left as an opaque blob.
  - icon: 📦
    title: Pure and fully typed
    details: No network, no config, no side effects. Ships as a published TypeScript library with full declarations, and every type behind a parser is exported too.
---

