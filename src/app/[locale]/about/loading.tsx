import { PageHeroSkeleton, SectionSkeleton, ContentBlockSkeleton } from "@/components/ui/Skeleton";
import { Skeleton } from "@/components/ui/Skeleton";

export default function AboutLoading() {
  return (
    <div>
      <PageHeroSkeleton />

      {/* Story section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-4">
              <Skeleton className="h-4 w-24" />
              <Skeleton className="h-8 w-3/4" />
              <ContentBlockSkeleton lines={5} />
            </div>
            <Skeleton className="h-72 rounded-2xl" />
          </div>
        </div>
      </section>

      <SectionSkeleton cards={3} />
      <SectionSkeleton cards={4} />
    </div>
  );
}
