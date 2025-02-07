'use client'
import { useState, useEffect } from "react";

const ThemeToggle = () => {
  // Estado para armazenar o tema atual
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    localStorage.setItem("theme", theme);
    if (theme === "dark") {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [theme]);

  const changeValueTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
    console.log(theme)
  };

  return (
    <button onClick={changeValueTheme} class="p-2 rounded-full bg-light-card dark:bg-dark-card transition">
      <img
        src={theme === "light" ? "/assets/darkTheme.png" : "/assets/light.png"}
        alt={theme === "light" ? "Modo Escuro" : "Modo Claro"}
        className={theme === "light" ? "w-6 h-6 p-0" : " w-8 h-8 p-0"}
      />
    </button>
  );
};

export default ThemeToggle;
