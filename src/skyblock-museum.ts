import { bool, date, num, obj, str } from "./common";
import { decodeItemBytes, NbtItem } from "./nbt";

export interface SkyBlockMuseumDonation {
  readonly donatedAt: Date | null;
  readonly featuredSlot: string | null;
  readonly borrowing: boolean;
  readonly type: number;
  readonly data: string | null;
  readonly items: readonly NbtItem[];
}

export interface SkyBlockMuseumItem extends SkyBlockMuseumDonation {
  readonly name: string;
}

export interface SkyBlockMuseumMember {
  readonly value: number;
  readonly appraisal: boolean;
  readonly items: readonly SkyBlockMuseumItem[];
  readonly special: readonly SkyBlockMuseumDonation[];
}

export interface SkyBlockMuseum {
  readonly members: Record<string, SkyBlockMuseumMember>;
}

function parseDonation(raw: Record<string, unknown>): SkyBlockMuseumDonation {
  const items = obj(raw, "items");
  const data = str(items, "data");
  return {
    donatedAt: date(raw, "donated_time"),
    featuredSlot: str(raw, "featured_slot") || null,
    borrowing: bool(raw, "borrowing"),
    type: num(items, "type"),
    data: data || null,
    items: decodeItemBytes(data),
  };
}

function parseItem(
  name: string,
  raw: Record<string, unknown>,
): SkyBlockMuseumItem {
  return { name, ...parseDonation(raw) };
}

function parseSpecial(value: unknown): SkyBlockMuseumDonation[] {
  if (!Array.isArray(value)) {
    return [];
  }
  const result: SkyBlockMuseumDonation[] = [];
  for (const entry of value) {
    if (typeof entry !== "object" || entry === null || Array.isArray(entry)) {
      continue;
    }
    result.push(parseDonation(entry as Record<string, unknown>));
  }
  return result;
}

function parseMember(raw: Record<string, unknown>): SkyBlockMuseumMember {
  const items = obj(raw, "items");
  return {
    value: num(raw, "value"),
    appraisal: bool(raw, "appraisal"),
    items: Object.keys(items).map((name) => parseItem(name, obj(items, name))),
    special: parseSpecial(raw.special),
  };
}

/** Parses a SkyBlock museum (`/skyblock/museum`) into a typed object. */
export function parseMuseum(members: Record<string, unknown>): SkyBlockMuseum {
  const parsed: Record<string, SkyBlockMuseumMember> = {};
  for (const uuid of Object.keys(members)) {
    parsed[uuid] = parseMember(obj(members, uuid));
  }
  return { members: parsed };
}

