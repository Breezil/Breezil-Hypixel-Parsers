# Bazaar & Auctions

Parsers for the SkyBlock economy endpoints: the global bazaar and the auction house. Each function turns raw Hypixel API JSON into readonly, fully-typed objects, mirroring the raw fields with zero computation.

## parseBazaar

Parses the SkyBlock bazaar (`/skyblock/bazaar`) into a typed object keyed by product id.

```ts
export function parseBazaar(
  products: Record<string, unknown>,
): Record<string, BazaarProduct>;
```

The returned value is a plain object whose keys are product ids and whose values are `BazaarProduct` objects.

### Returned type tree

```ts
export interface BazaarProduct {
  readonly productId: string;
  readonly sellSummary: readonly BazaarOrder[];
  readonly buySummary: readonly BazaarOrder[];
  readonly quickStatus: BazaarQuickStatus;
}
```

```ts
export interface BazaarOrder {
  readonly amount: number;
  readonly pricePerUnit: number;
  readonly orders: number;
}
```

```ts
export interface BazaarQuickStatus {
  readonly productId: string;
  readonly sellPrice: number;
  readonly sellVolume: number;
  readonly sellMovingWeek: number;
  readonly sellOrders: number;
  readonly buyPrice: number;
  readonly buyVolume: number;
  readonly buyMovingWeek: number;
  readonly buyOrders: number;
}
```

| Field                                                | Meaning                                                                     |
| ---------------------------------------------------- | --------------------------------------------------------------------------- |
| `BazaarProduct.productId`                            | Product identifier (falls back to the map key when `product_id` is absent). |
| `BazaarProduct.sellSummary`                          | Per-order sell-side summary list (raw `sell_summary`).                      |
| `BazaarProduct.buySummary`                           | Per-order buy-side summary list (raw `buy_summary`).                        |
| `BazaarProduct.quickStatus`                          | Aggregated quick status block (raw `quick_status`).                         |
| `BazaarOrder.amount`                                 | Quantity in the order entry.                                                |
| `BazaarOrder.pricePerUnit`                           | Price per unit for the order entry.                                         |
| `BazaarOrder.orders`                                 | Number of orders at this entry.                                             |
| `BazaarQuickStatus.sellPrice` / `buyPrice`           | Current sell / buy price.                                                   |
| `BazaarQuickStatus.sellVolume` / `buyVolume`         | Current sell / buy volume.                                                  |
| `BazaarQuickStatus.sellMovingWeek` / `buyMovingWeek` | Weekly moving sell / buy volume.                                            |
| `BazaarQuickStatus.sellOrders` / `buyOrders`         | Number of sell / buy orders.                                                |

Null / empty behavior:

- Entries whose value is not a non-array object are skipped.
- `sellSummary` and `buySummary` return `[]` when the raw `sell_summary` / `buy_summary` is missing or not an array; individual entries that are not non-array objects are skipped.
- The function always returns an object (possibly empty), never `null`.

## parseAuction

Parses a single SkyBlock auction (`/skyblock/auction`) into a typed object.

```ts
export function parseAuction(raw: Record<string, unknown>): SkyBlockAuction;
```

### Returned type tree

```ts
export interface SkyBlockAuction {
  readonly uuid: string;
  readonly auctioneer: string;
  readonly profileId: string;
  readonly buyer: string;
  readonly buyerProfile: string;
  readonly coop: readonly string[];
  readonly itemName: string;
  readonly itemLore: string;
  readonly itemUuid: string;
  readonly extra: string;
  readonly tier: string;
  readonly categories: readonly string[];
  readonly category: string;
  readonly startedAt: Date | null;
  readonly endsAt: Date | null;
  readonly lastUpdatedAt: Date | null;
  readonly soldAt: Date | null;
  readonly startingBid: number;
  readonly highestBidAmount: number;
  readonly price: number;
  readonly bin: boolean;
  readonly claimed: boolean;
  readonly claimedBidders: readonly string[];
  readonly itemBytes: string;
  readonly item: readonly NbtItem[];
  readonly bids: readonly SkyBlockAuctionBid[];
}
```

```ts
export interface SkyBlockAuctionBid {
  readonly auctionId: string;
  readonly profileId: string;
  readonly bidder: string;
  readonly amount: number;
  readonly placedAt: Date | null;
}
```

The `item` field is decoded from `itemBytes` into NBT item objects. The full NBT type tree (re-exported from the library's NBT module) is:

```ts
export interface NbtItem {
  readonly id: number;
  readonly count: number;
  readonly damage: number;
  readonly tag: NbtItemTag;
}
```

```ts
export interface NbtItemTag {
  readonly display: NbtItemDisplay;
  readonly enchantments: readonly NbtEnchantment[];
  readonly extraAttributes: NbtExtraAttributes;
  readonly raw: NbtCompound;
}
```

```ts
export interface NbtItemDisplay {
  readonly name: string;
  readonly lore: readonly string[];
  readonly color: number | null;
}
```

```ts
export interface NbtEnchantment {
  readonly id: number;
  readonly level: number;
}
```

```ts
export interface NbtExtraAttributes {
  readonly id: string;
  readonly uuid: string | null;
  readonly timestamp: string | number | readonly [number, number] | null;
  readonly rarity_upgrades: number;
  readonly modifier: string | null;
  readonly enchantments: Readonly<Record<string, number>>;
  readonly hot_potato_count: number;
  readonly [key: string]: unknown;
}
```

```ts
export type NbtCompound = Readonly<Record<string, unknown>>;
```

| Field                          | Meaning                                                                 |
| ------------------------------ | ----------------------------------------------------------------------- |
| `uuid`                         | Auction id (raw `uuid`, falling back to `auction_id`).                  |
| `auctioneer`                   | Seller id (raw `auctioneer`, falling back to `seller`).                 |
| `profileId`                    | Seller profile id (raw `profile_id`, falling back to `seller_profile`). |
| `buyer` / `buyerProfile`       | Buyer id and buyer profile id (raw `buyer` / `buyer_profile`).          |
| `coop`                         | Co-op member ids (raw `coop`).                                          |
| `itemName` / `itemLore`        | Display name and lore text (raw `item_name` / `item_lore`).             |
| `itemUuid`                     | Item uuid (raw `item_uuid`).                                            |
| `extra`                        | Extra search/index string (raw `extra`).                                |
| `tier`                         | Item tier (raw `tier`).                                                 |
| `categories` / `category`      | Item categories list and primary category.                              |
| `startedAt` / `endsAt`         | Auction start / end timestamps (raw `start` / `end`).                   |
| `lastUpdatedAt`                | Last update timestamp (raw `last_updated`).                             |
| `soldAt`                       | Sale timestamp (raw `timestamp`).                                       |
| `startingBid`                  | Starting bid amount.                                                    |
| `highestBidAmount`             | Highest bid amount.                                                     |
| `price`                        | Price field (raw `price`).                                              |
| `bin`                          | Whether this is a buy-it-now listing.                                   |
| `claimed`                      | Whether the auction has been claimed.                                   |
| `claimedBidders`               | Ids of bidders who have claimed (raw `claimed_bidders`).                |
| `itemBytes`                    | Raw base64/gzip-encoded item bytes (raw `item_bytes`).                  |
| `item`                         | Decoded NBT items from `itemBytes`.                                     |
| `bids`                         | Bid history (raw `bids`).                                               |
| `SkyBlockAuctionBid.auctionId` | Auction id for the bid (raw `auction_id`).                              |
| `SkyBlockAuctionBid.profileId` | Bidder profile id (raw `profile_id`).                                   |
| `SkyBlockAuctionBid.bidder`    | Bidder id (raw `bidder`).                                               |
| `SkyBlockAuctionBid.amount`    | Bid amount.                                                             |
| `SkyBlockAuctionBid.placedAt`  | Bid timestamp (raw `timestamp`).                                        |

Null / empty behavior:

- Date fields (`startedAt`, `endsAt`, `lastUpdatedAt`, `soldAt`, `placedAt`) are `null` when the underlying timestamp is absent or unparseable.
- `coop`, `categories`, `claimedBidders`, and `bids` return `[]` when the raw field is missing or not an array; non-string entries in string arrays and non-object bid entries are filtered out.
- `item` returns the decoded NBT items, which may be empty when `itemBytes` is missing or cannot be decoded.
- The function always returns a `SkyBlockAuction` object, never `null`.

## parseAuctionList

Parses a list of SkyBlock auctions (`/skyblock/auction`) into a typed object.

```ts
export function parseAuctionList(auctions: unknown[]): SkyBlockAuction[];
```

Returns an array of `SkyBlockAuction` (see [parseAuction](#parseauction) for the full type tree).

Null / empty behavior:

- Entries that are not non-array objects are skipped.
- Always returns an array (possibly empty), never `null`.

## parseAuctionsPage

Parses a SkyBlock auctions page (`/skyblock/auctions`) into a typed object.

```ts
export function parseAuctionsPage(
  raw: Record<string, unknown>,
): SkyBlockAuctionsPage;
```

### Returned type tree

```ts
export interface SkyBlockAuctionsPage {
  readonly page: number;
  readonly totalPages: number;
  readonly totalAuctions: number;
  readonly lastUpdatedAt: Date | null;
  readonly auctions: readonly SkyBlockAuction[];
}
```

Each entry in `auctions` is a `SkyBlockAuction` (see [parseAuction](#parseauction) for the full type tree).

| Field           | Meaning                                          |
| --------------- | ------------------------------------------------ |
| `page`          | Current page index (raw `page`).                 |
| `totalPages`    | Total number of pages (raw `totalPages`).        |
| `totalAuctions` | Total number of auctions (raw `totalAuctions`).  |
| `lastUpdatedAt` | Page last-updated timestamp (raw `lastUpdated`). |
| `auctions`      | Parsed auctions on this page (raw `auctions`).   |

Null / empty behavior:

- `lastUpdatedAt` is `null` when `lastUpdated` is absent or unparseable.
- `auctions` is `[]` when the raw `auctions` field is missing or not an array.
- The function always returns a `SkyBlockAuctionsPage` object, never `null`.

