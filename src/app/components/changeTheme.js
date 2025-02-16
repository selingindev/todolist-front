import { useContext } from "react";
import { ThemeContext } from "../contexts/themeContext";

const ThemeToggle = () => {
  const {theme, setTheme }= useContext(ThemeContext)
  return (
    
    <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}  className={theme} class="p-2 rounded-full bg-light-card transition border border-dark-background">
      <img
        src={theme === "light" ? "/assets/darkTheme.png" : "/assets/light.png"}
        alt={theme === "light" ? "Modo Escuro" : "Modo Claro"}
        className={`w-6 h-6 p-0`}

      />
    </button>
  );
};

export default ThemeToggle;
