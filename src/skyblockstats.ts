import { str, obj } from "./common";

export interface SkyBlockStatsProfile {
  readonly profileId: string;
  readonly cuteName: string;
}

export interface SkyBlockStats {
  readonly profiles: Record<string, SkyBlockStatsProfile>;
}

function parseProfiles(
  block: Record<string, unknown>,
): Record<string, SkyBlockStatsProfile> {
  const profiles = obj(block, "profiles");
  const result: Record<string, SkyBlockStatsProfile> = {};
  for (const [id, value] of Object.entries(profiles)) {
    if (typeof value !== "object" || value === null || Array.isArray(value)) {
      continue;
    }
    const profile = value as Record<string, unknown>;
    result[id] = {
      profileId: str(profile, "profile_id"),
      cuteName: str(profile, "cute_name"),
    };
  }
  return result;
}

/** Parses the per-player SkyBlock pointer block (`stats.SkyBlock`); null if empty. */
export function parseSkyBlockStats(
  block: Record<string, unknown>,
): SkyBlockStats | null {
  if (Object.keys(block).length === 0) {
    return null;
  }
  return {
    profiles: parseProfiles(block),
  };
}

