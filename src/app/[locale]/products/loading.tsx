import { PageHeroSkeleton, ProductsGridSkeleton } from "@/components/ui/Skeleton";

export default function ProductsLoading() {
  return (
    <div>
      <PageHeroSkeleton />

      {/* Filter bar skeleton */}
      <section className="sticky top-16 z-40 bg-white border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-2 py-3 overflow-hidden">
            {Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                className="animate-pulse h-9 rounded-full bg-gray-200 shrink-0"
                style={{ width: `${70 + i * 10}px` }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Products grid skeleton */}
      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ProductsGridSkeleton count={8} />
        </div>
      </section>
    </div>
  );
}
