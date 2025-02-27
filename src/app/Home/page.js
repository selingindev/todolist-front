'use client'
import ThemeToggle from "../components/changeTheme";
import NovaTarefaButton from "../components/novaTarefaButton";
import Todo from "../components/todo";
import { ModalContext, ThemeContext, TodoContext } from "../contexts/Context";
import { useState } from "react";
const Page = () => {
  const [theme, setTheme] = useState('light')
  const [modalOpen, setModalOpen] = useState(false)
  const [todos, setTodos] = useState([]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <ModalContext.Provider value={{ modalOpen, setModalOpen }}>
        <TodoContext.Provider value={{ todos, setTodos }}>
          <div className={`flex h-auto w-auto min-h-svh dark:bg-dark-background bg-white "}`}>
            {/* Construindo interface inicial */}
            <div className="h-1/2 w-1/4">
              <div className=" w-full flex justify-end">
                <ThemeToggle />
              </div>
            </div>
            <div className="h-1/2 w-3/4">
              <NovaTarefaButton />

              <Todo />

            </div>
          </div>
        </TodoContext.Provider>
      </ModalContext.Provider>
    </ThemeContext.Provider>
  );
}

export default Page;
