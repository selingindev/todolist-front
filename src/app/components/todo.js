import Image from "next/image"
const Todo = (props) => {
    return (
        <div className={`flex max-w-96 h-48  border border-black `}>
            <div className="w-3/4 border border-red">

            </div>
            <div className=" flex flex-col w-1/4 h-full justify-between border border-red">
                <div className=" h-12 m-2 border border-black">
                    <button  onClick={console.log("abaoba")} className="bg-fuchsia-300 h-full w-full">    
                   
                    </button>
                </div>
                <div className=" h-12 m-2 border border-black"> </div>
            </div>
        </div>
    )
}
export default Todo