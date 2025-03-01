'use client'
import ThemeToggle from "../components/changeTheme";
import NovaTarefaButton from "../components/novaTarefaButton";
import Todo from "../components/todo";
import { ModalContext, ThemeContext, TodoContext, ContentModalContext, IdTodoContext } from "../contexts/Context";
import { useState } from "react";
const Page = () => {
  const [theme, setTheme] = useState('light')
  const [modalOpen, setModalOpen] = useState(false)
  const [todos, setTodos] = useState([]);
  const [customFunction, setCustomFunction] = useState("Create")
  const [id, setId] = useState(0)

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <ContentModalContext.Provider value={{ customFunction, setCustomFunction }}>
        <ModalContext.Provider value={{ modalOpen, setModalOpen }}>
          <TodoContext.Provider value={{ todos, setTodos }}>
            <IdTodoContext.Provider value={{ id, setId }}>
              <div className={`flex h-auto w-auto min-h-svh dark:bg-dark-background bg-white "}`}>
                {/* Construindo interface inicial */}
                <div className="h-1/2 w-1/4">
                  <div className=" w-full flex flex-col justify-end">
                    <ThemeToggle />
                    <Todo filter={true}/>
                  </div>
                </div>
                <div className="h-1/2 w-3/4">
                  <NovaTarefaButton />

                  <Todo filter={false}/>

                </div>
              </div>
            </IdTodoContext.Provider>
          </TodoContext.Provider>
        </ModalContext.Provider>
      </ContentModalContext.Provider>
    </ThemeContext.Provider>
  );
}

export default Page;
