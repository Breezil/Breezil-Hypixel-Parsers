import { num, str, obj } from "./common";

export interface BazaarOrder {
  readonly amount: number;
  readonly pricePerUnit: number;
  readonly orders: number;
}

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

export interface BazaarProduct {
  readonly productId: string;
  readonly sellSummary: readonly BazaarOrder[];
  readonly buySummary: readonly BazaarOrder[];
  readonly quickStatus: BazaarQuickStatus;
}

function parseOrders(
  product: Record<string, unknown>,
  key: string,
): BazaarOrder[] {
  const summary = product[key];
  if (!Array.isArray(summary)) {
    return [];
  }
  const orders: BazaarOrder[] = [];
  for (const entry of summary) {
    if (typeof entry !== "object" || entry === null || Array.isArray(entry)) {
      continue;
    }
    const order = entry as Record<string, unknown>;
    orders.push({
      amount: num(order, "amount"),
      pricePerUnit: num(order, "pricePerUnit"),
      orders: num(order, "orders"),
    });
  }
  return orders;
}

function parseQuickStatus(status: Record<string, unknown>): BazaarQuickStatus {
  return {
    productId: str(status, "productId"),
    sellPrice: num(status, "sellPrice"),
    sellVolume: num(status, "sellVolume"),
    sellMovingWeek: num(status, "sellMovingWeek"),
    sellOrders: num(status, "sellOrders"),
    buyPrice: num(status, "buyPrice"),
    buyVolume: num(status, "buyVolume"),
    buyMovingWeek: num(status, "buyMovingWeek"),
    buyOrders: num(status, "buyOrders"),
  };
}

/** Parses the SkyBlock bazaar (`/skyblock/bazaar`) into a typed object. */
export function parseBazaar(
  products: Record<string, unknown>,
): Record<string, BazaarProduct> {
  const result: Record<string, BazaarProduct> = {};
  for (const [productId, value] of Object.entries(products)) {
    if (typeof value !== "object" || value === null || Array.isArray(value)) {
      continue;
    }
    const product = value as Record<string, unknown>;
    result[productId] = {
      productId: str(product, "product_id") || productId,
      sellSummary: parseOrders(product, "sell_summary"),
      buySummary: parseOrders(product, "buy_summary"),
      quickStatus: parseQuickStatus(obj(product, "quick_status")),
    };
  }
  return result;
}

