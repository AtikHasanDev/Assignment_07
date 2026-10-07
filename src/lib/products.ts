import type { Product } from "./types";

/** Top N products whose price went up today, biggest rise first. */
export function topRisers(products: Product[], n = 6): Product[] {
  return products
    .filter((p) => p.change.dir === "up")
    .sort((a, b) => b.change.pct - a.change.pct)
    .slice(0, n);
}

/** Top N products whose price went down today, biggest fall first. */
export function topFallers(products: Product[], n = 6): Product[] {
  return products
    .filter((p) => p.change.dir === "down")
    .sort((a, b) => a.change.pct - b.change.pct) // most negative first
    .slice(0, n);
}
