import { getCategories, getProducts } from "@/lib/api";
import { formatTaka, formatPct, ARROW, perUnitBn, toBn } from "@/lib/format";

// Temporary page for Part 1 — checks that the theme, font and API work.
// Replaced by the real home page in Parts 5–7.
export default async function Home() {
  const [products, categories] = await Promise.all([getProducts(), getCategories()]);
  const sample = products[0];

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 space-y-4">
      <h1 className="text-3xl font-bold">বাজার দর — সেটআপ পরীক্ষা</h1>
      <p>
        মোট {toBn(products.length)}টি পণ্য, {toBn(categories.length)}টি ক্যাটাগরি লোড হয়েছে।
      </p>
      {sample && (
        <div className="card bg-base-100 border border-base-300 w-80">
          <div className="card-body">
            <div className="text-3xl">{sample.image}</div>
            <h2 className="card-title">{sample.nameBn}</h2>
            <p className="text-sm opacity-70">{perUnitBn(sample.unit)}</p>
            <p className="font-semibold">
              {formatTaka(sample.today)}{" "}
              <span className="text-success">
                {ARROW[sample.change.dir]} {formatPct(sample.change.pct)}
              </span>
            </p>
          </div>
        </div>
      )}
      <div className="flex gap-2">
        <button className="btn btn-primary btn-sm sm:btn-md">প্রাইমারি বাটন</button>
        <button className="btn btn-outline btn-sm sm:btn-md">আউটলাইন বাটন</button>
      </div>
    </div>
  );
}
