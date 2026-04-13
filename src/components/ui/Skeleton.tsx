import { cn } from "@/lib/utils";

interface SkeletonProps {
  className?: string;
}

export function Skeleton({ className }: SkeletonProps) {
  return (
    <div
      className={cn(
        "animate-pulse rounded-md bg-gray-200",
        className
      )}
    />
  );
}

/** Hero section skeleton — matches PageHero */
export function PageHeroSkeleton() {
  return (
    <section className="bg-gradient-to-br from-blue-900 to-blue-700 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
        <Skeleton className="h-12 w-2/3 bg-blue-700/60" />
        <Skeleton className="h-6 w-1/2 bg-blue-700/40" />
      </div>
    </section>
  );
}

/** Single product card skeleton */
export function ProductCardSkeleton() {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm">
      <Skeleton className="h-44 w-full rounded-none" />
      <div className="p-4 space-y-3">
        <Skeleton className="h-3 w-1/3" />
        <Skeleton className="h-5 w-3/4" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-2/3" />
        <Skeleton className="h-4 w-16" />
      </div>
    </div>
  );
}

/** Products grid skeleton */
export function ProductsGridSkeleton({ count = 8 }: { count?: number }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
      {Array.from({ length: count }).map((_, i) => (
        <ProductCardSkeleton key={i} />
      ))}
    </div>
  );
}

/** Generic content block skeleton */
export function ContentBlockSkeleton({ lines = 4 }: { lines?: number }) {
  return (
    <div className="space-y-3">
      {Array.from({ length: lines }).map((_, i) => (
        <Skeleton
          key={i}
          className={`h-4 ${i === lines - 1 ? "w-2/3" : "w-full"}`}
        />
      ))}
    </div>
  );
}

/** Section with heading + content skeleton */
export function SectionSkeleton({ cards = 3 }: { cards?: number }) {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 space-y-3">
          <Skeleton className="h-8 w-64 mx-auto" />
          <Skeleton className="h-5 w-96 mx-auto" />
        </div>
        <div className={`grid grid-cols-1 md:grid-cols-${Math.min(cards, 3)} gap-6`}>
          {Array.from({ length: cards }).map((_, i) => (
            <div key={i} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 space-y-3">
              <Skeleton className="h-10 w-10 rounded-xl" />
              <Skeleton className="h-5 w-1/2" />
              <ContentBlockSkeleton lines={3} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/** Stats bar skeleton */
export function StatsSkeleton() {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="text-center space-y-2">
              <Skeleton className="h-10 w-24 mx-auto" />
              <Skeleton className="h-4 w-32 mx-auto" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/** Form skeleton */
export function FormSkeleton({ fields = 4 }: { fields?: number }) {
  return (
    <div className="space-y-5">
      {Array.from({ length: fields }).map((_, i) => (
        <div key={i} className="space-y-2">
          <Skeleton className="h-4 w-24" />
          <Skeleton className="h-11 w-full rounded-lg" />
        </div>
      ))}
      <Skeleton className="h-11 w-40 rounded-lg" />
    </div>
  );
}
