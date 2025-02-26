import { useContext, useState } from "react";
import { IoAddCircleSharp } from "react-icons/io5";
import { CiCircleRemove } from "react-icons/ci";

import ModalAddTodo from "../components/modalAddTodo";
import { ThemeContext } from "../contexts/themeContext";

const NovaTarefaButton = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const { theme } = useContext(ThemeContext)

    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        console.log(theme)
    };

    return (
        <>

            <button onClick={isModalOpen == false ? handleOpenModal : handleCloseModal}>
                {
                    isModalOpen == false ?
                        <IoAddCircleSharp size={40} color={theme == 'dark' ? 'white' : "black"} /> : <CiCircleRemove size={40} color={theme == 'dark' ? 'white' : "black"} />
                }

            </button>
            {isModalOpen == true ? <ModalAddTodo /> : null}
        </>
    );
};

export default NovaTarefaButton;
