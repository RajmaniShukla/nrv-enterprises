import { PageHeroSkeleton, FormSkeleton } from "@/components/ui/Skeleton";
import { Skeleton } from "@/components/ui/Skeleton";

export default function InquiryLoading() {
  return (
    <div>
      <PageHeroSkeleton />
      <section className="py-16 bg-gray-50">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
            <Skeleton className="h-7 w-56 mb-2" />
            <Skeleton className="h-4 w-80 mb-8" />
            <FormSkeleton fields={6} />
          </div>
        </div>
      </section>
    </div>
  );
}
