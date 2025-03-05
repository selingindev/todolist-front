import { ModalContext } from "../contexts/Context";
import { useContext, } from "react";

const Modal = ({ children }) => {

    const { modalOpen } = useContext(ModalContext);

    return (

        modalOpen ? children : null

    );

}
export default Modal