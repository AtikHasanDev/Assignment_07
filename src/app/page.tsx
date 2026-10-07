import { Suspense } from "react";
import Hero from "@/components/home/Hero";
import PriceMovers from "@/components/home/PriceMovers";
import { ProductGridSkeleton } from "@/components/product/ProductCardSkeleton";
import { getProducts } from "@/lib/api";
import { topFallers, topRisers } from "@/lib/products";

async function MoversSections() {
  const products = await getProducts();
  return (
    <>
      <PriceMovers direction="up" products={topRisers(products)} />
      <PriceMovers direction="down" products={topFallers(products)} />
    </>
  );
}

function MoversSkeleton() {
  return (
    <>
      {[0, 1].map((i) => (
        <div key={i} className="space-y-3">
          <div className="skeleton h-7 w-40" />
          <ProductGridSkeleton count={6} />
        </div>
      ))}
    </>
  );
}

export default function Home() {
  return (
    <div className="mx-auto max-w-6xl space-y-10 px-4 py-6">
      <Hero />
      <Suspense fallback={<MoversSkeleton />}>
        <MoversSections />
      </Suspense>
      {/* সব পণ্য grid (Part 7) goes here */}
    </div>
  );
}
