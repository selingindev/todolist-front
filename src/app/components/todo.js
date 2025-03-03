'use client'
import { useContext, useEffect,} from "react";
import { ContentModalContext, IdTodoContext, ModalContext, ThemeContext, TodoContext } from "../contexts/Context";
import { MdDelete, MdDone, MdEdit,} from "react-icons/md";
import { deleteTodo, editTodo, fetchTodos } from "../service/api/todoService";
import { LiaUndoAltSolid } from "react-icons/lia";



const Todo = (props) => {
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
          }, []);

    const handleDelete = async (id) => {
        const updateTodos = await deleteTodo(id);
        setTodos(updateTodos)
    };

    const handleComplet = async (todo) =>{
        let data = {
            title: todo.title,
            desc: todo.desc,
            prioridade: todo.prioridade,
            isDone: true,
        }
        const updateTodos = await editTodo(todo.id,  data)
        setTodos(updateTodos)
    }

    const cancelComplet = async (todo) =>{
        let data = {
            title: todo.title,
            desc: todo.desc,
            prioridade: todo.prioridade,
            isDone: false,
        }
        const updateTodos = await editTodo(todo.id,  data)
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
            .map((todo)  => (
                console.log(todos),
                <div key={todo.id} className={`flex max-w-96 h-48 border border-dark-background dark:border-light-background`}>
                    {/* lado esquerdo container */}
                    <div className="w-3/4 h-full m-2">
                        {/* superior container */}
                        <div className="h-auto w-auto">
                            <h1 className="w-full h-auto">{todo.title}</h1>
                        </div>

                        {/* inferior container */}
                        <div className="h-auto w-auto">
                            <p>{todo.desc}</p>
                        </div>
                    </div>
                   { todo.done === false ? 
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
                            <button onClick={() => handleComplet(todo)}>
                                <MdDone color={theme === 'light' ? "#212121" : "#E0E0E0"} size={40} />
                            </button>
                        </div>
                    </div>
                     : <div>
                          <button onClick={() => cancelComplet(todo)}>
                                <LiaUndoAltSolid color={theme === 'light' ? "#212121" : "#E0E0E0"} size={40} />
                            </button>
                     </div>}
                </div>
            ))}
        </div>
    );

};

export default Todo;

