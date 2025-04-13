"use client";

import { useTheme } from "@/components/theme/themeContext";
import { FaSun } from "react-icons/fa";
import { FaMoon } from "react-icons/fa6";

export default function ThemeToggle() {
  const { theme, darkTheme, lightTheme } = useTheme();

  return (
    <>
      {/* <button
        onClick={toggleTheme}
        className='px-4 py-2 rounded border mt-4 bg-black'
      >
        Switch to {theme === "light" ? "dark" : "light"} mode
      </button> */}
      <FaMoon
        onClick={darkTheme}
        color={theme === "light" ? "black" : "white"}
        size={30}
      />
      <FaSun
        onClick={lightTheme}
        color={theme === "light" ? "black" : "white"}
        size={30}
      />
    </>
  );
}
