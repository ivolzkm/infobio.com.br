"use client";

import { Moon, Sun } from "lucide-react";
import { useEffect } from "react";

type Theme = "light" | "dark";

export function ThemeToggle() {
  useEffect(() => {
    const saved = window.localStorage.getItem("infobio-theme") as Theme | null;
    const preferred = window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
    const initial = saved === "light" || saved === "dark" ? saved : preferred;
    document.documentElement.classList.toggle("dark", initial === "dark");
  }, []);

  function toggleTheme() {
    const next: Theme = document.documentElement.classList.contains("dark")
      ? "light"
      : "dark";
    document.documentElement.classList.toggle("dark", next === "dark");
    window.localStorage.setItem("infobio-theme", next);
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="grid h-9 w-9 place-items-center rounded-lg border border-slate-200 bg-white text-slate-600 transition hover:border-teal-400/50 hover:text-teal-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-400 dark:border-white/10 dark:bg-white/[0.04] dark:text-slate-300 dark:hover:text-teal-300"
      aria-label="Alternar entre tema claro e escuro"
      title="Alternar tema"
    >
      <Sun className="hidden dark:block" size={16} />
      <Moon className="block dark:hidden" size={16} />
    </button>
  );
}
