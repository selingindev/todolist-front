import { useContext, useEffect, useState } from "react";
import { IoAddCircleSharp } from "react-icons/io5";
import { CiCircleRemove } from "react-icons/ci";

import ModalTodo from "../components/modalTodo";
import { ContentModalContext, ModalContext, ThemeContext } from "../contexts/Context";

import Modal from "./modal";


const NovaTarefaButton = () => {
    const { modalOpen, setModalOpen } = useContext(ModalContext);
    const { theme } = useContext(ThemeContext);
    const { setCustomFunction } = useContext(ContentModalContext)


    const callback = () => {
        setCustomFunction("Create");

        if (modalOpen === false) {
            setModalOpen(true);
        } else {
            setModalOpen(false);
        }
    };

    return (
        <>

            <div
                onClick={callback
                }

                className="cursor-pointer inline-flex items-center"
            >
                {
                    modalOpen === false
                        ? <IoAddCircleSharp size={40} color={theme === 'dark' ? 'white' : "black"} />
                        : <CiCircleRemove size={40} color={theme === 'dark' ? 'white' : "black"} />
                }
            </div>
            <Modal><ModalTodo /></Modal>
        </>
    );
};


export default NovaTarefaButton;

