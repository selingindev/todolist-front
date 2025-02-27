import { useContext, useEffect, useState } from "react";
import { IoAddCircleSharp } from "react-icons/io5";
import { CiCircleRemove } from "react-icons/ci";

import ModalAddTodo from "../components/modalAddTodo";
import { ModalContext, ThemeContext } from "../contexts/Context";


const NovaTarefaButton = () => {
    const { modalOpen, setModalOpen } = useContext(ModalContext);
    const { theme } = useContext(ThemeContext)

   
    const handleOpenModal = () => {
        setModalOpen(true);
    };

    const handleCloseModal = () => {
        setModalOpen(false);
    };

    return (
        <>

            <button onClick={modalOpen == false ? handleOpenModal : handleCloseModal}>
                {
                    modalOpen == false ? <IoAddCircleSharp size={40} color={theme == 'dark' ? 'white' : "black"} />
                        : <CiCircleRemove size={40} color={theme == 'dark' ? 'white' : "black"} />
                }

            </button>
            {modalOpen == true ? <ModalAddTodo /> : null}
        </>
    );
};

export default NovaTarefaButton;

