"use client";

import { useTheme } from "@/components/features/theme";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme} className='px-4 py-2 rounded border mt-4'>
      Switch to {theme === "light" ? "dark" : "light"} mode
    </button>
  );
}
