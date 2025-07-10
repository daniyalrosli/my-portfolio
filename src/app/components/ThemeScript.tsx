"use client";
import { useEffect } from "react";
import { useTheme } from "../contexts/ThemeContext";

export default function ThemeScript() {
  const { theme } = useTheme();

  useEffect(() => {
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  return null;
} 