"use client";

import { useTheme } from "@/components/context/theme/themeContext";
import clsx from "clsx";
import { FaSun } from "react-icons/fa";
import { FaMoon } from "react-icons/fa6";

interface ThemeToggleProps {
  className?: string;
}

export default function ThemeToggle({ className }: ThemeToggleProps) {
  const { theme, darkTheme, lightTheme } = useTheme();
  // const [moonHovered, setMoonHovered] = useState("false");
  // const [sunHovered, setSunHovered] = useState("false");

  // const moonHoveredStatus = clsx({
  //   "bg-black": moonHovered && theme === "dark",
  //   "bg-white": moonHovered && theme === "light",
  // });
  // const sunHoveredStatus = clsx({
  //   "bg-black": sunHovered && theme === "dark",
  //   "bg-white": sunHovered && theme === "light",
  // });
  // const themeStatus = theme === "light" ? "text-black" : "text-white";

  return (
    <div className='flex gap-2'>
      {/* <button
        onClick={toggleTheme}
        className='px-4 py-2 rounded border mt-4 bg-black'
      >
        Switch to {theme === "light" ? "dark" : "light"} mode
      </button> */}
      <FaMoon
        onClick={darkTheme}
        // onMouseEnter={() => setMoonHovered(true)}
        // onMouseLeave={() => setMoonHovered(false)}
        className={clsx(
          "rounded-2xl transition-colors duration-400",
          theme === "dark"
            ? "hover:bg-black hover:bg-opacity-20 bg-gray-900"
            : "hover:bg-white hover:bg-opacity-20 bg-gray-400"
        )}
        color={theme === "light" ? "black" : "white"}
        size={30}
      />
      <FaSun
        onClick={lightTheme}
        // onMouseEnter={() => setSunHovered(true)}
        // onMouseLeave={() => setSunHovered(false)}
        className={clsx(
          "rounded-2xl transition-colors duration-400",
          theme === "dark"
            ? "hover:bg-black hover:bg-opacity-20 bg-gray-900"
            : "hover:bg-white hover:bg-opacity-20 bg-gray-400"
        )}
        color={theme === "light" ? "black" : "white"}
        size={30}
      />
    </div>
  );
}
