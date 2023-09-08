"use client";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
export default function useSectionInView() {
  const { ref, inView } = useInView({
    threshold: 0.2,
  });
  const { setActiveSection, timeOfLastClick } = useActiveSectionContext();
  useEffect(() => {
    const isInViewAndLastClikOlderThanOneSecond =
      inView && Date.now() - timeOfLastClick > 1000;
    if (isInViewAndLastClikOlderThanOneSecond) {
      setActiveSection("Projects");
    }
  }, [inView, timeOfLastClick]);
}
