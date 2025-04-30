"use client";
import { FiSun, FiMoon } from "react-icons/fi";
import { useTheme } from "@/components/ThemeChanger/ThemeProvider";

export default function ThemeChanger() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="nav-items p-2 rounded-md"
      aria-label={
        theme === "light" ? "Ativar modo escuro" : "Ativar modo claro"
      }
    >
      {theme === "light" ? <FiMoon size={20} /> : <FiSun size={20} />}
    </button>
  );
}
