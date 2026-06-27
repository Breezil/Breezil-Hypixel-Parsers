import { num, str } from "./common";

export interface ResourceChallengeReward {
  readonly type: string;
  readonly amount: number;
}

export interface ResourceChallenge {
  readonly id: string;
  readonly name: string;
  readonly rewards: readonly ResourceChallengeReward[];
}

function asRecord(value: unknown): Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value)
    ? (value as Record<string, unknown>)
    : {};
}

function asArray(value: unknown): readonly unknown[] {
  return Array.isArray(value) ? value : [];
}

function parseReward(value: unknown): ResourceChallengeReward {
  const reward = asRecord(value);
  return {
    type: str(reward, "type"),
    amount: num(reward, "amount"),
  };
}

function parseChallenge(value: unknown): ResourceChallenge {
  const challenge = asRecord(value);
  return {
    id: str(challenge, "id"),
    name: str(challenge, "name"),
    rewards: asArray(challenge.rewards).map(parseReward),
  };
}

/** Parses the challenge registry (`/resources/challenges`) into a typed object. */
export function parseChallenges(
  challenges: Record<string, unknown>,
): Record<string, readonly ResourceChallenge[]> {
  const result: Record<string, readonly ResourceChallenge[]> = {};
  for (const [game, value] of Object.entries(asRecord(challenges))) {
    result[game] = asArray(value).map(parseChallenge);
  }
  return result;
}

