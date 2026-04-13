import { PageHeroSkeleton, SectionSkeleton } from "@/components/ui/Skeleton";

export default function WhyUsLoading() {
  return (
    <div>
      <PageHeroSkeleton />
      <SectionSkeleton cards={3} />
      <SectionSkeleton cards={3} />
    </div>
  );
}
