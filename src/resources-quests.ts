import { num, str } from "./common";

export interface ResourceQuestReward {
  readonly type: string;
  readonly amount: number;
}

export interface ResourceQuestObjective {
  readonly id: string;
  readonly type: string;
  readonly integer: number;
}

export interface ResourceQuestRequirement {
  readonly type: string;
}

export interface ResourceQuest {
  readonly id: string;
  readonly name: string;
  readonly description: string;
  readonly rewards: readonly ResourceQuestReward[];
  readonly objectives: readonly ResourceQuestObjective[];
  readonly requirements: readonly ResourceQuestRequirement[];
}

function toRecord(value: unknown): Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value)
    ? (value as Record<string, unknown>)
    : {};
}

function toArray(value: unknown): readonly unknown[] {
  return Array.isArray(value) ? value : [];
}

function parseReward(value: unknown): ResourceQuestReward {
  const reward = toRecord(value);
  return {
    type: str(reward, "type"),
    amount: num(reward, "amount"),
  };
}

function parseObjective(value: unknown): ResourceQuestObjective {
  const objective = toRecord(value);
  return {
    id: str(objective, "id"),
    type: str(objective, "type"),
    integer: num(objective, "integer"),
  };
}

function parseRequirement(value: unknown): ResourceQuestRequirement {
  const requirement = toRecord(value);
  return {
    type: str(requirement, "type"),
  };
}

function parseQuest(value: unknown): ResourceQuest {
  const quest = toRecord(value);
  return {
    id: str(quest, "id"),
    name: str(quest, "name"),
    description: str(quest, "description"),
    rewards: toArray(quest.rewards).map(parseReward),
    objectives: toArray(quest.objectives).map(parseObjective),
    requirements: toArray(quest.requirements).map(parseRequirement),
  };
}

/** Parses the quest registry (`/resources/quests`) into a typed object. */
export function parseQuests(
  quests: Record<string, unknown>,
): Record<string, ResourceQuest[]> {
  const result: Record<string, ResourceQuest[]> = {};
  for (const [game, value] of Object.entries(quests)) {
    result[game] = toArray(value).map(parseQuest);
  }
  return result;
}

