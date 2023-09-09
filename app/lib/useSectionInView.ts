"use client";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { useActiveSectionContext } from "@/components/Header";
import type { ActiveSectionType } from "./types";
export default function useSectionInView({
  activeSectionName,
  thresHold,
}: {
  activeSectionName: ActiveSectionType;
  thresHold: number;
}) {
  const { ref, inView } = useInView({
    threshold: thresHold,
  });
  const { setActiveSection, timeOfLastClick } = useActiveSectionContext();
  useEffect(() => {
    const isInViewAndLastClikOlderThanOneSecond =
      inView && Date.now() - timeOfLastClick > 1000;
    if (isInViewAndLastClikOlderThanOneSecond) {
      setActiveSection(activeSectionName);
    }
  }, [inView, timeOfLastClick]);
  return { ref };
}
