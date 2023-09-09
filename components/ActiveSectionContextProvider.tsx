"use client";
import React, { useState } from "react";
import type { ActiveSectionContextType } from "@/app/lib/types";
import type { ActiveSectionType } from "@/app/lib/types";

export const ActiveSectionContext =
  React.createContext<ActiveSectionContextType | null>(null);
export default function ActiveSectionContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [activeSection, setActiveSection] = useState<ActiveSectionType>("Home");
  const [timeOfLastClick, setTimeOfLastClick] = useState(0); // usefull to disable the
  //observer temporarily when user clicks on a link
  return (
    <ActiveSectionContext.Provider
      value={{
        activeSection,
        setActiveSection,
        timeOfLastClick,
        setTimeOfLastClick,
      }}
    >
      {children}
    </ActiveSectionContext.Provider>
  );
}
