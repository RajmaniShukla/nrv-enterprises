import { PageHeroSkeleton, SectionSkeleton } from "@/components/ui/Skeleton";

export default function ServicesLoading() {
  return (
    <div>
      <PageHeroSkeleton />
      <SectionSkeleton cards={3} />
      <SectionSkeleton cards={3} />
    </div>
  );
}
