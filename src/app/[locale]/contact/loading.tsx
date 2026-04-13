import { PageHeroSkeleton, FormSkeleton } from "@/components/ui/Skeleton";
import { Skeleton } from "@/components/ui/Skeleton";

export default function ContactLoading() {
  return (
    <div>
      <PageHeroSkeleton />
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form skeleton */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <Skeleton className="h-7 w-48 mb-6" />
              <FormSkeleton fields={5} />
            </div>
            {/* Info skeleton */}
            <div className="space-y-6">
              {Array.from({ length: 3 }).map((_, i) => (
                <div key={i} className="flex gap-4">
                  <Skeleton className="h-12 w-12 rounded-xl shrink-0" />
                  <div className="space-y-2 flex-1">
                    <Skeleton className="h-5 w-32" />
                    <Skeleton className="h-4 w-48" />
                  </div>
                </div>
              ))}
              <Skeleton className="h-64 rounded-2xl mt-6" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
