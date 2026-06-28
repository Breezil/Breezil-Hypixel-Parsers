import { decodeItemBytes, NbtItem } from "./nbt";

import { bool, date, num, str } from "./common";

export interface SkyBlockAuctionBid {
  readonly auctionId: string;
  readonly profileId: string;
  readonly bidder: string;
  readonly amount: number;
  readonly placedAt: Date | null;
}

export interface SkyBlockAuction {
  readonly id: string;
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

export interface SkyBlockAuctionsPage {
  readonly page: number;
  readonly totalPages: number;
  readonly totalAuctions: number;
  readonly lastUpdatedAt: Date | null;
  readonly auctions: readonly SkyBlockAuction[];
}

function stringArray(parent: Record<string, unknown>, key: string): string[] {
  const value = parent[key];
  if (!Array.isArray(value)) {
    return [];
  }
  return value.filter((entry): entry is string => typeof entry === "string");
}

function parseBid(raw: Record<string, unknown>): SkyBlockAuctionBid {
  return {
    auctionId: str(raw, "auction_id"),
    profileId: str(raw, "profile_id"),
    bidder: str(raw, "bidder"),
    amount: num(raw, "amount"),
    placedAt: date(raw, "timestamp"),
  };
}

function parseBids(value: unknown): SkyBlockAuctionBid[] {
  if (!Array.isArray(value)) {
    return [];
  }
  const result: SkyBlockAuctionBid[] = [];
  for (const entry of value) {
    if (typeof entry !== "object" || entry === null || Array.isArray(entry)) {
      continue;
    }
    result.push(parseBid(entry as Record<string, unknown>));
  }
  return result;
}

/** Parses a SkyBlock auction (`/skyblock/auction`) into a typed object. */
export function parseAuction(raw: Record<string, unknown>): SkyBlockAuction {
  const itemBytes = str(raw, "item_bytes");
  return {
    id: str(raw, "_id"),
    uuid: str(raw, "uuid") || str(raw, "auction_id"),
    auctioneer: str(raw, "auctioneer") || str(raw, "seller"),
    profileId: str(raw, "profile_id") || str(raw, "seller_profile"),
    buyer: str(raw, "buyer"),
    buyerProfile: str(raw, "buyer_profile"),
    coop: stringArray(raw, "coop"),
    itemName: str(raw, "item_name"),
    itemLore: str(raw, "item_lore"),
    itemUuid: str(raw, "item_uuid"),
    extra: str(raw, "extra"),
    tier: str(raw, "tier"),
    categories: stringArray(raw, "categories"),
    category: str(raw, "category"),
    startedAt: date(raw, "start"),
    endsAt: date(raw, "end"),
    lastUpdatedAt: date(raw, "last_updated"),
    soldAt: date(raw, "timestamp"),
    startingBid: num(raw, "starting_bid"),
    highestBidAmount: num(raw, "highest_bid_amount"),
    price: num(raw, "price"),
    bin: bool(raw, "bin"),
    claimed: bool(raw, "claimed"),
    claimedBidders: stringArray(raw, "claimed_bidders"),
    itemBytes,
    item: decodeItemBytes(itemBytes),
    bids: parseBids(raw.bids),
  };
}

/** Parses a list of SkyBlock auctions (`/skyblock/auction`) into a typed object. */
export function parseAuctionList(auctions: unknown[]): SkyBlockAuction[] {
  const result: SkyBlockAuction[] = [];
  for (const entry of auctions) {
    if (typeof entry !== "object" || entry === null || Array.isArray(entry)) {
      continue;
    }
    result.push(parseAuction(entry as Record<string, unknown>));
  }
  return result;
}

/** Parses a SkyBlock auctions page (`/skyblock/auctions`) into a typed object. */
export function parseAuctionsPage(
  raw: Record<string, unknown>,
): SkyBlockAuctionsPage {
  return {
    page: num(raw, "page"),
    totalPages: num(raw, "totalPages"),
    totalAuctions: num(raw, "totalAuctions"),
    lastUpdatedAt: date(raw, "lastUpdated"),
    auctions: parseAuctionList(Array.isArray(raw.auctions) ? raw.auctions : []),
  };
}

