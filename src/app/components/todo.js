'use client'
import { useContext, useEffect, } from "react";
import { ContentModalContext, IdTodoContext, ModalContext, ThemeContext, TodoContext } from "../contexts/Context";
import { MdDelete, MdDone, MdEdit, } from "react-icons/md";
import { deleteTodo, editTodo, fetchTodos } from "../service/api/todoService";
import { LiaUndoAltSolid } from "react-icons/lia";



const Todo = (props) => {
    const { theme } = useContext(ThemeContext);
    const { todos, setTodos } = useContext(TodoContext);
    const { customFunction, setCustomFunction } = useContext(ContentModalContext)
    const { setModalOpen } = useContext(ModalContext)
    const { setId } = useContext(IdTodoContext);

    const getTodos = async () => {
        const data = await fetchTodos();
        setTodos(data);
    }

    useEffect(() => {
        getTodos();
    }, []);

    const handleDelete = async (id) => {
        const updateTodos = await deleteTodo(id);
        setTodos(updateTodos)
    };

    const handleComplet = async (todo) => {
        let data = {
            title: todo.title,
            desc: todo.desc,
            prioridade: todo.prioridade,
            isDone: true,
        }
        const updateTodos = await editTodo(todo.id, data)
        setTodos(updateTodos)
    }

    const cancelComplet = async (todo) => {
        let data = {
            title: todo.title,
            desc: todo.desc,
            prioridade: todo.prioridade,
            isDone: false,
        }
        const updateTodos = await editTodo(todo.id, data)
        setTodos(updateTodos)
    }

    const functionEdit = async (id) => {
        setCustomFunction("Edit")
        setId(id);
        setModalOpen(true);

    }



    return (
        <div>
            {
                todos
                    .filter((todo) => todo.done === props.filter)
                    .map((todo) => (
                        console.log(todos),
                        <div key={todo.id} className={`flex max-w-96 h-auto border m-4 p-2 border-dark-background dark:border-light-background`}>
                            {/* lado esquerdo container */}
                            <div className="w-5/6 h-full  mx-2 flex flex-col justify-around">
                                {/* superior container */}
                                <div className="h-1/3 w-auto flex flex-col justify-center p-2">
                                    <h1 className="w-full h-auto text-xl font-semibold text-black dark:text-white">{todo.title}</h1>
                                </div>

                                {/* inferior container */}
                                <div className="h-2/3 w-auto p-2">
                                    <p className=" text-lg  text-black dark:text-white">{todo.desc}</p>
                                </div>
                            </div>
                            {todo.done === false ?
                                <div className="flex flex-col w-1/6 h-full justify-between">
                                    {/* container superior */}
                                    <div className="flex flex-col items-end h-auto w-auto m-2">
                                        <button onClick={() => handleDelete(todo.id)} className="flex justify-end w-auto h-auto m-1">
                                            <MdDelete color={theme === 'light' ? "#212121" : "#E0E0E0"} size={30} />
                                        </button>

                                        <button onClick={() => { functionEdit(todo.id), console.log(customFunction) }} className="flex justify-end w-auto h-auto m-1">
                                            <MdEdit color={theme === 'light' ? "#212121" : "#E0E0E0"} size={30} />
                                        </button>
                                    </div>

                                    {/* container inferior */}
                                    <div className="flex h-12 m-2 justify-end">
                                        <button onClick={() => handleComplet(todo)}>
                                            <MdDone color={theme === 'light' ? "#212121" : "#E0E0E0"} size={40} />
                                        </button>
                                    </div>
                                </div>
                                : <div className=" w-1/6 h-full flex flex-col justify-end">
                                    <button className="flex  justify-end h-auto w-auto m-2" onClick={() => cancelComplet(todo)}>
                                        <LiaUndoAltSolid className="" color={theme === 'light' ? "#212121" : "#E0E0E0"} size={30} />
                                    </button>
                                    <button onClick={() => handleDelete(todo.id)} className="flex justify-end w-auto h-auto m-1">
                                            <MdDelete color={theme === 'light' ? "#212121" : "#E0E0E0"} size={30} />
                                        </button>
                                </div>}
                        </div>
                    ))}
        </div>
    );

};

export default Todo;

