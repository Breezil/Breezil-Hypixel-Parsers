import { obj, str } from "./common";

export interface SkyBlockNewsDisplayItem {
  readonly material: string;
}

export interface SkyBlockNewsItem {
  readonly title: string;
  readonly link: string;
  readonly text: string;
  readonly item: SkyBlockNewsDisplayItem;
}

/** Parses the SkyBlock news (`/skyblock/news`) into a typed object. */
export function parseSkyBlockNews(items: unknown[]): SkyBlockNewsItem[] {
  const result: SkyBlockNewsItem[] = [];
  for (const entry of items) {
    if (typeof entry !== "object" || entry === null || Array.isArray(entry)) {
      continue;
    }
    const raw = entry as Record<string, unknown>;
    const item = obj(raw, "item");
    result.push({
      title: str(raw, "title"),
      link: str(raw, "link"),
      text: str(raw, "text"),
      item: {
        material: str(item, "material"),
      },
    });
  }
  return result;
}

