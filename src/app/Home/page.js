'use client'
import LeftSide from "../components/layout/leftSide";
import RightSide from "../components/layout/rightSide";
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
                  <LeftSide></LeftSide>
                  <RightSide></RightSide>        
              </div>
            </IdTodoContext.Provider>
          </TodoContext.Provider>
        </ModalContext.Provider>
      </ContentModalContext.Provider>
    </ThemeContext.Provider>
  );
}

export default Page;
