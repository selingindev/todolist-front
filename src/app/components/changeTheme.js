'use client'
import { useState, useEffect } from "react";

const ThemeToggle = () => {
  // Estado para armazenar o tema atual, pegando do localStorage ou usando 'light' como padrão
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem("theme" || "light");
    }
    return "light";
  });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem("theme", theme);
      if (theme === "dark") {
        document.body.classList.add("dark");
      } else {
        document.body.classList.remove("dark");
      }
    }
  }, [theme]);

  const changeValueTheme = () => {
    setTheme (theme === "light" ? "dark" : "light");
  };

  return (
    <button onClick={changeValueTheme} class="p-2 rounded-full bg-light-card transition border border-dark-background">
      <img
        src={theme === "light" ? "/assets/darkTheme.png" : "/assets/light.png"}
        alt={theme === "light" ? "Modo Escuro" : "Modo Claro"}
        className={`w-6 h-6 p-0 ${theme === "light" ? "" : ""}`}

      />
    </button>
  );
};

export default ThemeToggle;
