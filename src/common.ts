/** Safe numeric read from a raw Hypixel object (missing/non-number → 0). */
export function num(
  obj: Record<string, unknown> | undefined,
  key: string,
): number {
  const value = obj?.[key];
  return typeof value === "number" ? value : 0;
}

/** Safe string read (missing/non-string → ""). */
export function str(
  obj: Record<string, unknown> | undefined,
  key: string,
): string {
  const value = obj?.[key];
  return typeof value === "string" ? value : "";
}

/** Safe boolean read. */
export function bool(
  obj: Record<string, unknown> | undefined,
  key: string,
): boolean {
  return obj?.[key] === true;
}

/** A nested object, or an empty object (so callers can keep reading safely). */
export function obj(
  parent: Record<string, unknown> | undefined,
  key: string,
): Record<string, unknown> {
  const value = parent?.[key];
  return typeof value === "object" && value !== null && !Array.isArray(value)
    ? (value as Record<string, unknown>)
    : {};
}

/** An epoch-ms field as a Date, or null when absent. */
export function date(
  obj: Record<string, unknown> | undefined,
  key: string,
): Date | null {
  const value = obj?.[key];
  return typeof value === "number" && value > 0 ? new Date(value) : null;
}

