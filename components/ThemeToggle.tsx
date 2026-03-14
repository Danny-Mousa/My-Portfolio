"use client";

import { Moon, Sun } from "lucide-react";
import { useLayoutEffect, useState } from "react";

export function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">(
    () => (localStorage.getItem("theme") as "light" | "dark" | null) || "dark",
  );

  useLayoutEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
    localStorage.setItem("theme", newTheme);
  };

  return (
    <button
      onClick={toggleTheme}
      className="group w-12 h-12 rounded-xl cursor-pointer bg-card border border-border flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors shadow-lg transition-all duration-300"
      aria-label="Toggle theme"
    >
      {theme === "dark" ? (
        <Sun className="w-5 h-5 text-accent group-hover:text-accent-foreground" />
      ) : (
        <Moon className="w-5 h-5 text-accent group-hover:text-accent-foreground" />
      )}
    </button>
  );
}
