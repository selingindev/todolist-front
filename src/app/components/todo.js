import { useContext } from "react";
import { MdDelete } from "react-icons/md";
import { MdEdit } from "react-icons/md";
import { ThemeContext } from "../contexts/themeContext";

const Todo = () => {
    const {theme} = useContext(ThemeContext)
    return (
        <div className={`flex max-w-96 h-48  border border-black `}>
            <div className="w-3/4 border border-red">

            </div>
            <div className=" flex flex-col w-1/4 h-full justify-between border border-red">
                <div className=" flex flex-col h-12 m-2 ">
                    
                    <button  onClick={() => console.log()} className="flex justify-end
                    ">    
                        <MdDelete color="red" size={30} />
                    </button>
                    <button  onClick={() => console.log()} className="flex justify-end 
                    ">    
                        <MdEdit color={theme === 'light' ? "black" : "blue" }  size={30}/>
                    </button>
                </div>
                <div className=" h-12 m-2 border border-black"> </div>
            </div>
        </div>
    )
}
export default Todo