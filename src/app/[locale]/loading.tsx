import { PageHeroSkeleton, StatsSkeleton, SectionSkeleton } from "@/components/ui/Skeleton";

export default function HomeLoading() {
  return (
    <div>
      <PageHeroSkeleton />
      <StatsSkeleton />
      <SectionSkeleton cards={3} />
      <SectionSkeleton cards={3} />
    </div>
  );
}
