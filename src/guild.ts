import { bool, date, num, obj, str } from "./common";

export interface GuildMember {
  readonly uuid: string;
  readonly name: string;
  readonly rank: string;
  readonly joinedAt: Date | null;
  readonly questParticipation: number;
  readonly expHistory: Record<string, number>;
  readonly mutedTill: Date | null;
}

export interface GuildRank {
  readonly name: string;
  readonly tag: string;
  readonly default: boolean;
  readonly priority: number;
  readonly createdAt: Date | null;
}

export interface GuildBannerPattern {
  readonly pattern: string;
  readonly color: string;
}

export interface GuildBanner {
  readonly base: string;
  readonly patterns: readonly GuildBannerPattern[];
}

export interface Guild {
  readonly id: string;
  readonly name: string;
  readonly nameLower: string;
  readonly description: string;
  readonly tag: string;
  readonly tagColor: string;
  readonly exp: number;
  readonly createdAt: Date | null;
  readonly coins: number;
  readonly coinsEver: number;
  readonly members: readonly GuildMember[];
  readonly ranks: readonly GuildRank[];
  readonly preferredGames: readonly string[];
  readonly publiclyListed: boolean;
  readonly joinable: boolean;
  readonly hideGmTag: boolean;
  readonly chatMuteUntil: Date | null;
  readonly banner: GuildBanner;
  readonly legacyRanking: number;
  readonly achievements: Record<string, number>;
  readonly guildExpByGameType: Record<string, number>;
}

function numberMap(
  parent: Record<string, unknown>,
  key: string,
): Record<string, number> {
  const source = obj(parent, key);
  const result: Record<string, number> = {};
  for (const [k, v] of Object.entries(source)) {
    if (typeof v === "number") {
      result[k] = v;
    }
  }
  return result;
}

function parseList<T>(
  parent: Record<string, unknown>,
  key: string,
  parse: (raw: Record<string, unknown>) => T,
): T[] {
  const value = parent[key];
  if (!Array.isArray(value)) {
    return [];
  }
  const result: T[] = [];
  for (const entry of value) {
    if (typeof entry === "object" && entry !== null && !Array.isArray(entry)) {
      result.push(parse(entry as Record<string, unknown>));
    }
  }
  return result;
}

function stringList(parent: Record<string, unknown>, key: string): string[] {
  const value = parent[key];
  return Array.isArray(value)
    ? value.filter((v): v is string => typeof v === "string")
    : [];
}

function parseMember(raw: Record<string, unknown>): GuildMember {
  return {
    uuid: str(raw, "uuid"),
    name: str(raw, "name"),
    rank: str(raw, "rank"),
    joinedAt: date(raw, "joined"),
    questParticipation: num(raw, "questParticipation"),
    expHistory: numberMap(raw, "expHistory"),
    mutedTill: date(raw, "mutedTill"),
  };
}

function parseRank(raw: Record<string, unknown>): GuildRank {
  return {
    name: str(raw, "name"),
    tag: str(raw, "tag"),
    default: bool(raw, "default"),
    priority: num(raw, "priority"),
    createdAt: date(raw, "created"),
  };
}

function parseBannerPattern(raw: Record<string, unknown>): GuildBannerPattern {
  return {
    pattern: str(raw, "Pattern"),
    color: str(raw, "Color"),
  };
}

function parseBanner(guild: Record<string, unknown>): GuildBanner {
  const banner = obj(guild, "banner");
  return {
    base: str(banner, "Base"),
    patterns: parseList(banner, "Patterns", parseBannerPattern),
  };
}

/** Parses a guild (`/guild`) into a typed object. */
export function parseGuild(guild: Record<string, unknown>): Guild | null {
  if (Object.keys(guild).length === 0) {
    return null;
  }
  return {
    id: str(guild, "_id"),
    name: str(guild, "name"),
    nameLower: str(guild, "name_lower"),
    description: str(guild, "description"),
    tag: str(guild, "tag"),
    tagColor: str(guild, "tagColor"),
    exp: num(guild, "exp"),
    createdAt: date(guild, "created"),
    coins: num(guild, "coins"),
    coinsEver: num(guild, "coinsEver"),
    members: parseList(guild, "members", parseMember),
    ranks: parseList(guild, "ranks", parseRank),
    preferredGames: stringList(guild, "preferredGames"),
    publiclyListed: bool(guild, "publiclyListed"),
    joinable: bool(guild, "joinable"),
    hideGmTag: bool(guild, "hideGmTag"),
    chatMuteUntil: date(guild, "chatMute"),
    banner: parseBanner(guild),
    legacyRanking: num(guild, "legacyRanking"),
    achievements: numberMap(guild, "achievements"),
    guildExpByGameType: numberMap(guild, "guildExpByGameType"),
  };
}

