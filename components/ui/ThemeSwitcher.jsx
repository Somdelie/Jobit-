// app/components/ThemeSwitcher.tsx
"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="flex items-center border-gray-300 border bg-[#65758569] bg-gray-600 rounded-full w-[49px]">
      <button
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        className="transition-all duration-300 transform text-gray-400 bg-white dark:text-gray-100 justify-center p-1 dark:bg-black rounded-full text-xs flex items-center translate-x-0 dark:translate-x-6"
      >
        {theme === "light" ? <Moon size={14} /> : <Sun size={14} />}
      </button>
    </div>
  );
}
