import { useContext, useState } from "react";
import { editTodo, postTodo } from "../service/api/todoService";
import { ContentModalContext, IdTodoContext, ModalContext, TodoContext } from "../contexts/Context";


const FormTodo = () => {
    let { setModalOpen } = useContext(ModalContext);
    const { customFunction } = useContext(ContentModalContext)
    const { setTodos } = useContext(TodoContext)
    const { id } = useContext(IdTodoContext)
    const [title, setTitle] = useState('')
    const [desc, setDesc] = useState('')
    const [prioridade, setPrioridade] = useState(0)


    const handleCreate = async (data) => {
        const updateTodos = await postTodo(data);
        setTodos(updateTodos)
    };

    const handleEdit = async (id, data) => {
        const updateTodos = await editTodo(id, data)
        setTodos(updateTodos)
    }


    const heandleSubmit = async (e) => {

        e.preventDefault();
        if (title.trim() == "" || desc.trim() == "") return;

        let data = {
            id: null,
            title: title,
            desc: desc,
            prioridade: prioridade,
            isDone: false,
        }
        try {
            if (customFunction === "Edit") {
                { console.log(id) }
                data.id = id;
                await handleEdit(id, data);

            } else if (customFunction === "Create") {
                await handleCreate(data);
            }

            setTitle("");
            setDesc("");
            setPrioridade("");
            setModalOpen(false);
            return;
        } catch (error) {
            console.error("Erro ao adicionar tarefa:", error);
        }

    }
    return (
        <form onSubmit={heandleSubmit} className=" h-full w-full p-4 border border-cyan-700">
            <div className="w-full h-3/4 flex flex-col justify-between">
                <div className=" w-full h-1/3 py-4 ">
                    <input type="text" value={title} placeholder="Digite o titulo da Tarefa" onChange={(e) => setTitle(e.target.value)} className="w-full h-full p-1" />
                </div>
                <div className=" w-full h-1/3 py-4 ">
                    <input type="text" value={desc} placeholder="Digite a descrição da Tarefa" onChange={(e) => setDesc(e.target.value)} className="w-full h-full p-1" />
                </div>
                <div className=" w-full h-1/3 py-4 ">
                    <input type="number" value={prioridade} onChange={(e) => setPrioridade(e.target.value)} placeholder="Selecione a prioridade da tarefa" className="outline w-full h-full p-1" />
                </div>
            </div>
            <div className="w-full h-1/4">
                <button onClick={() => { heandleSubmit }} className="w-full h-full bg-fuchsia-50" />
            </div>
        </form>
    )
}

export default FormTodo;