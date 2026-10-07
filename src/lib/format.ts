import type { ChangeDir } from "./types";

const BN_DIGITS = ["০", "১", "২", "৩", "৪", "৫", "৬", "৭", "৮", "৯"];

/** 1850 -> "১৮৫০" (works on any string containing ASCII digits) */
export function toBn(value: number | string): string {
  return String(value).replace(/\d/g, (d) => BN_DIGITS[Number(d)]);
}

/** 1850 -> "১,৮৫০" */
export function formatNumberBn(n: number): string {
  return toBn(n.toLocaleString("en-US", { maximumFractionDigits: 2 }));
}

/** 1850 -> "১,৮৫০ টাকা" */
export function formatTaka(n: number): string {
  return `${formatNumberBn(n)} টাকা`;
}

/** -2.9 -> "২.৯%" (sign is shown by the ▲/▼ arrow) */
export function formatPct(pct: number): string {
  return `${toBn(Math.abs(pct).toFixed(1))}%`;
}

export const ARROW: Record<ChangeDir, string> = { up: "▲", down: "▼", flat: "—" };

const UNIT_BN: Record<string, string> = {
  kg: "কেজি",
  litre: "লিটার",
  liter: "লিটার",
  dozen: "ডজন",
  piece: "পিস",
};

/** "kg" -> "কেজি" */
export function unitBn(unit: string): string {
  return UNIT_BN[unit] ?? unit;
}

/** "kg" -> "প্রতি কেজি" */
export function perUnitBn(unit: string): string {
  return `প্রতি ${unitBn(unit)}`;
}

/** Date -> "মঙ্গলবার, ৬ অক্টোবর, ২০২৬" */
export function formatBnDate(date: Date = new Date()): string {
  const parts = new Intl.DateTimeFormat("bn-BD", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "Asia/Dhaka",
  }).formatToParts(date);
  const get = (t: string) => parts.find((p) => p.type === t)?.value ?? "";
  return toBn(`${get("weekday")}, ${get("day")} ${get("month")}, ${get("year")}`);
}
