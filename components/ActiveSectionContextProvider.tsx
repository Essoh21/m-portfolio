"use client";
import React, { useState } from "react";
import { links } from "@/app/lib/data";

type ActiveSectionType = (typeof links)[number]["name"];
type ActiveSectionContextType = {
  activeSection: ActiveSectionType;
  setActiveSection: React.Dispatch<React.SetStateAction<ActiveSectionType>>;
  timeOfLastClick: number;
  setTimeOfLastClick: React.Dispatch<React.SetStateAction<number>>;
};

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
