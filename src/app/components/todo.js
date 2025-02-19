import { useContext } from "react";
import { ThemeContext } from "../contexts/themeContext";
import { MdDelete, MdDone, MdEdit } from "react-icons/md";

const Todo = () => {
    const { theme } = useContext(ThemeContext)
    return (
        <div className={`flex max-w-96 h-48  border border-black `}>
            { /* lado esquerdo container:) */}
            <div className="w-3/4 border border-red">

            </div>

            { /* lado direito container:) */}
            <div className=" flex flex-col w-1/4 h-full justify-between border border-red">

                { /* container superior:) */}
                <div className=" flex flex-col items-end h-auto w-auto m-2 ">
                    <button onClick={() => console.log()} className="flex justify-end w-auto h-auto m-1
                    ">
                        <MdDelete color={theme === 'light' ? "#212121" : "#E0E0E0"} size={30} />
                    </button>
                    <button onClick={() => console.log()} className="flex justify-end w-auto h-auto m-1
                    ">
                        <MdEdit color={theme === 'light' ? "#212121" : "#E0E0E0"} size={30} />
                    </button>
                </div>

                { /* container inferior:) */}
                <div className="flex h-12 m-2 justify-end">
                    <button onClick={() => console.log()}>
                        <MdDone color={theme === 'light' ? "#212121" : "#E0E0E0"} size={40} />
                    </button>
                </div>
            </div>
        </div>
    )
}
export default Todo