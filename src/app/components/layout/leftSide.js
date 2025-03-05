import ThemeToggle from "../changeTheme"
import Todo from "../todo"

const leftSide = () => {
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
                    <Todo filter={true} ></Todo>
                </div>
            </div>
        </div>
    )
}

export default leftSide