
import { useState} from "react";


export function TodoInput(props){
    const {handleToAddTask}=props
    const [inputValue,setInputValue]=useState('')

    return (
        <>
            <div className="myOwnClass" style={{marginTop:'10px'}}>
                <input value={inputValue} placeholder="Add Task" onChange={(e)=>setInputValue(e.target.value)}></input> 
                <button onClick={()=>{
                    if(!inputValue){return}
                    handleToAddTask(inputValue)
                    setInputValue('')
                }}>Add</button>
            </div>
        </>
    );
}
