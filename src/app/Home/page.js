'use client'
import ThemeToggle from "../components/changeTheme";
import Todo from "../components/todo";
import { ThemeContext } from "../contexts/themeContext";
import { useState } from "react";
const Page = () => { 
    const [theme, setTheme] = useState('light')
      return (
        <ThemeContext.Provider value={{theme, setTheme}}>
        <div  className={`flex h-auto w-auto min-h-svh dark:bg-dark-background bg-white "}`}>
            {/* Construindo interface inicial */}
            <div className="h-1/2 w-1/4">
                <div className=" w-full flex justify-end">
                <ThemeToggle/>
                </div>
            </div>
            <div className="h-1/2 w-3/4">
                <h1 className="h-3">Estou aqui</h1>
                <Todo title="artu"></Todo>
            </div>
        </div>
        </ThemeContext.Provider>
    );
}

export default Page;
