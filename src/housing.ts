import { date, num, obj, str } from "./common";

export interface HousingCookies {
  readonly current: number;
}

export interface HousingHouse {
  readonly uuid: string;
  readonly owner: string;
  readonly name: string;
  readonly createdAt: Date | null;
  readonly players: number;
  readonly cookies: HousingCookies;
}

function parseCookies(raw: Record<string, unknown>): HousingCookies {
  const cookies = obj(raw, "cookies");
  return {
    current: num(cookies, "current"),
  };
}

/** Parses a house (`/housing/house`) into a typed object. */
export function parseHouse(raw: Record<string, unknown>): HousingHouse {
  return {
    uuid: str(raw, "uuid"),
    owner: str(raw, "owner"),
    name: str(raw, "name"),
    createdAt: date(raw, "createdAt"),
    players: num(raw, "players"),
    cookies: parseCookies(raw),
  };
}

/** Parses a list of houses (`/housing/houses`) into a typed object. */
export function parseHouses(houses: unknown[]): HousingHouse[] {
  const result: HousingHouse[] = [];
  for (const entry of houses) {
    if (typeof entry !== "object" || entry === null || Array.isArray(entry)) {
      continue;
    }
    result.push(parseHouse(entry as Record<string, unknown>));
  }
  return result;
}

