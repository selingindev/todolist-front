'use client'
import { useState, useEffect } from "react";
import ThemeToggle from "../components/changeTheme";
import Todo from "../components/todo";

const Page = () => { 
      // Estado para armazenar o tema atual, pegando do localStorage ou usando 'light' como padrão
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem("theme") || "light";
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
        <div  className={`flex h-auto w-auto min-h-svh ${theme === "light" ? "bg-light-background" : "bg-dark-background"}`}>
            {/* Construindo interface inicial */}
            <div className="h-1/2 w-1/4">
                <div className=" w-full flex justify-end">
                 <ThemeToggle changeTheme={changeValueTheme} theme={theme}></ThemeToggle>        
                </div>
            </div>
            <div className="h-1/2 w-3/4">
        
                <h1 className="h-3">Estou aqui</h1>
                <Todo name="artu"></Todo>
            </div>
        </div>
    );
}

export default Page;
