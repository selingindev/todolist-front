import { useContext } from "react"
import ThemeToggle from "../changeTheme"
import Todo from "../todo"
import { TodoContext } from "@/app/contexts/Context"
import AlertDoneTodos from "../Alert/nenhumaTarefaConcluida"

const leftSide = () => {
    const {todos} = useContext(TodoContext)
    console.log(todos)
    return (
        <div className="h-auto w-1/4">
            <div className="w-full h-auto  flex flex-col justify-between">
                <div className="flex justify-end p-2 w-full h-auto">
                    <ThemeToggle></ThemeToggle>
                </div>
            </div>
            <div className="flex-col w-full h-auto justify-center my-6 hidden lg:flex ">

                <div className="w-full h-auto flex justify-center mb-2 p-2 ">
                    <h1 className=" lg:text-2xl lg:font-semibold xl:text-3xl font-sans font-bold text-black dark:text-white">TAREFAS CONCLUIDAS</h1>
                </div>
                <div className="">
            {
             todos.some(todo => todo.done) ? <Todo filter={true}></Todo>  :  <AlertDoneTodos></AlertDoneTodos>}
             
                </div>
            </div>
        </div>
    )
}

export default leftSide