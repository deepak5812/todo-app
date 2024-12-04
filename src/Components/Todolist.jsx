import TodoCard from "./TodoCard"


export function Todolist(props){
    const { todos,tabValue,handleToDeleteTask,handleToCompleteTask} = props
    const filterTodoList=tabValue==='All'?
            todos:tabValue==='Completed'?todos.filter(val=>val.complete):todos.filter(val=>!val.complete);

    return(
        <>
        {filterTodoList.map((todoss,todoIndex)=>{
            return(
                <TodoCard 
                    key={todoIndex}
                    todoIndex={todos.findIndex(val=>val.input==todoss.input)}
                    todoss={todoss}
                    handleToDeleteTask={handleToDeleteTask}
                    handleToCompleteTask={handleToCompleteTask}
                />
                
            );
        })}
        </>
    );
}