
import { useContext } from "react";
import { ThemeContext } from "../contexts/Context";
import { useEffect } from "react";

const ThemeToggle = () => {
  const { theme, setTheme } = useContext(ThemeContext)
  useEffect(() => {
    document.querySelector('html').classList.remove('dark', 'light')
    document.querySelector('html').classList.add(theme)
  }, [theme])

  return (
    <div>
      <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')} className="p-2 rounded-full border border-gray-200 transition dark:bg-light-card">
        <img
          src={theme === "light" ? "/darkTheme.png" : "/light.png"}
          alt={theme === "light" ? "Modo Escuro" : "Modo Claro"}
          className={`w-6 h-6 p-0`}

        />
      </button>
    </div>

  );
};

export default ThemeToggle;
