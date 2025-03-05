import NovaTarefaButton from "../novaTarefaButton"
import Todo from "../todo"
const RightSide = () => {
return(
         <div className="h-full w-3/4">
                      <NovaTarefaButton />
    
                      <Todo filter={false} />
    
                    </div>
)
}
export default RightSide