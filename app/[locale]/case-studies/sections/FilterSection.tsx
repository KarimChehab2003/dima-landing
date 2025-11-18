"use client";

import SectionWrapper from "@/components/shared/SectionWrapper";
import { Button } from "@/components/ui/button";
import CaseStudyCard from "../components/CaseStudyCard";
import CaseStudyCardSkeleton from "../components/CaseStudyCardSkeleton";
import PaginationWrapper from "../components/PaginationWrapper";
import { useCaseStudies } from "../hooks/useCaseStudies";
import { notFound } from "next/navigation";
import { useState } from "react";

type FilterType = "all" | "use cases" | "customer success stories";

const PAGE_SIZE = 6;

function FilterSection() {
  const [type, setType] = useState<FilterType>("all");
  const [pageIndex, setPageIndex] = useState(0);
  const {
    data,
    isLoading,
    isError,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    totalPages
  } = useCaseStudies(PAGE_SIZE);

  if (isError) return notFound();

  const pages = data?.pages ?? [];
  const currentPage = pages[pageIndex]?.caseStudies ?? [];
  const filteredCaseStudies = currentPage.filter((caseStudy) => {
    if (type === "all") return true;

    return caseStudy.content.type.trim().toLocaleLowerCase() === type;
  });

  const handlePrevious = () => {
    if (pageIndex === 0) return;
    setPageIndex((prev) => Math.max(prev - 1, 0));
  };

  const handleSelectPage = async (pageNumber: number) => {
    const targetIndex = pageNumber - 1;

    if (targetIndex === pageIndex || targetIndex < 0 || targetIndex >= totalPages) return;

    if (targetIndex < pages.length) {
      setPageIndex(targetIndex);
      return;
    }

    if (!hasNextPage) return;

    let currentPagesLength = pages.length;

    // Fetch next pages until the target index is reached
    while (targetIndex >= currentPagesLength) {
      const result = await fetchNextPage();
      const nextLength = result.data?.pages.length ?? currentPagesLength;

      if (nextLength === currentPagesLength) {
        break;
      }
      currentPagesLength = nextLength;
    }

    if (targetIndex < currentPagesLength) {
      setPageIndex(targetIndex);
    }
  };

  const handleNext = async () => {
    if (pageIndex + 1 >= totalPages) return;
    await handleSelectPage(pageIndex + 2);
  };

  const handleFilterChange = (nextType: FilterType) => {
    setType(nextType);
    setPageIndex(0);
  };

  const canGoPrevious = pageIndex > 0;
  const canGoNext = pageIndex + 1 < totalPages;
  const currentPageNumber = Math.min(pageIndex + 1, totalPages);

  const shouldShowSkeletons = isLoading && pages.length === 0;
  const skeletonItems = Array.from({ length: PAGE_SIZE }, (_, idx) => (
    <li key={`case-study-skeleton-${idx}`}>
      <CaseStudyCardSkeleton />
    </li>
  ));

  return (
    <SectionWrapper>
      <div className="container mx-auto flex flex-col justify-center items-center gap-8 ">
        {/* Scrollable Button Row */}
        <div className="w-full overflow-x-auto md:flex md:justify-center py-4">
          <ul className="flex items-center gap-4 w-max px-4">
            {["all", "customer success stories", "use cases"].map((text) => (
              <li key={text} className="shrink-0">
                <Button
                  size={"xl"}
                  className="capitalize"
                  variant={type === text ? "default" : "outline"}
                  onClick={() => handleFilterChange(text as FilterType)}
                >
                  {text}
                </Button>
              </li>
            ))}
          </ul>
        </div>

        {/* Case Studies */}
        <ul className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-x-8 gap-y-16 w-full">
          {shouldShowSkeletons
            ? skeletonItems
            : filteredCaseStudies.map((caseStudy) => (
              <li key={caseStudy.id}>
                <CaseStudyCard {...caseStudy} />
              </li>
            ))}
        </ul>

        {!shouldShowSkeletons && (
          <PaginationWrapper
            currentPage={currentPageNumber}
            totalPages={totalPages}
            canGoPrevious={canGoPrevious}
            canGoNext={canGoNext}
            onPrevious={handlePrevious}
            onNext={handleNext}
            onSelectPage={handleSelectPage}
            isLoadingNext={isFetchingNextPage}
          />
        )}
      </div>
    </SectionWrapper>
  );
}

export default FilterSection;
