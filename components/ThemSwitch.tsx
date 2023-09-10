"use client";
import { BsSun, BsMoon } from "react-icons/bs";
import { useThemeContext } from "./ThemeContextProvider";

export default function ThemSwitch() {
  const { theme, toggleTheme } = useThemeContext();
  return (
    <button
      title="switch Them"
      className="fixed bottom-5 right-5 w-[3rem] h-[3rem] bg-white  
    backdrop-blur-[O.5rem] border border-white border-opacity-40 
    shadow-2xl rounded-full flex items-center justify-center hover:scale-110 
    active:scale-105 transition-all dark:bg-gray-950"
      onClick={toggleTheme}
    >
      {theme === "light" ? <BsSun /> : <BsMoon />}
    </button>
  );
}
