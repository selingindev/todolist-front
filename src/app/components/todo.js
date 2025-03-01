'use client'
import { useContext, useEffect,} from "react";
import { ContentModalContext, IdTodoContext, ModalContext, ThemeContext, TodoContext } from "../contexts/Context";
import { MdDelete, MdDone, MdEdit } from "react-icons/md";
import { deleteTodo, fetchTodos } from "../service/api/todoService";



const Todo = () => {
    const { theme } = useContext(ThemeContext);
    const {todos, setTodos} = useContext(TodoContext);
    const {customFunction, setCustomFunction} = useContext(ContentModalContext)
    const {setModalOpen} = useContext(ModalContext)
    const {setId} = useContext(IdTodoContext);

    const getTodos = async () => {
            const data = await fetchTodos(); 
            setTodos(data);
        }

    useEffect(() => {
        getTodos();
    },);

    const handleDelete = async (id) => {
        const updateTodos = await deleteTodo(id);
        setTodos(updateTodos)
    };

    const functionEdit = async (id) => {
        setCustomFunction("Edit")
        setId(id);
        setModalOpen(true);
   
    }
  

    
    return (
        <div>
            {todos.map((todo, index) => (
                <div key={index} className={`flex max-w-96 h-48 border border-dark-background dark:border-light-background`}>
                    {/* lado esquerdo container */}
                    <div className="w-3/4 h-full m-2">
                        {/* superior container */}
                        <div className="h-auto w-auto">
                            <h1 className="w-full h-auto">{todo.title}</h1>
                        </div>

                        {/* inferior container */}
                        <div className="h-auto w-auto">
                            <p>{todo.description}</p>
                        </div>
                    </div>

                    {/* lado direito container */}
                    <div className="flex flex-col w-1/4 h-full justify-between">
                        {/* container superior */}
                        <div className="flex flex-col items-end h-auto w-auto m-2">
                            <button onClick={() => handleDelete(todo.id)} className="flex justify-end w-auto h-auto m-1">
                                <MdDelete color={theme === 'light' ? "#212121" : "#E0E0E0"} size={30} />
                            </button>
                            
                            <button onClick={() => {functionEdit(todo.id), console.log(customFunction) }}className="flex justify-end w-auto h-auto m-1">
                                <MdEdit color={theme === 'light' ? "#212121" : "#E0E0E0"} size={30} />
                            </button>
                        </div>
                      
                        {/* container inferior */}
                        <div className="flex h-12 m-2 justify-end">
                            <button onClick={() => console.log('Marcar como feito', todo.id)}>
                                <MdDone color={theme === 'light' ? "#212121" : "#E0E0E0"} size={40} />
                            </button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );

};

export default Todo;

