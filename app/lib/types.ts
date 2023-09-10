import { links } from "./data";
export type ActiveSectionType = (typeof links)[number]["name"];
export type ActiveSectionContextType = {
  activeSection: ActiveSectionType;
  setActiveSection: React.Dispatch<React.SetStateAction<ActiveSectionType>>;
  timeOfLastClick: number;
  setTimeOfLastClick: React.Dispatch<React.SetStateAction<number>>;
};

export type Theme = "light" | "dark";
