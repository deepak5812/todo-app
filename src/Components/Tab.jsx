import {React} from 'react'

export function Tab(props){

    const tabs=['All','Open','Completed']
    const { todos ,tabValue,setTabValue} = props

    

    return(
        <>
            <nav className='tab-container myOwnClass '>
                {tabs.map((tab,tabIndex)=>{
                    const numberOfTasks = tab==='All'?
                    todos.length:
                    tab==='Open'?
                    todos.filter(val=>!val.complete).length:
                    todos.filter(val=>val.complete).length;
                    return (
                        <button style={{marginBottom:'10px'}} className="tab-button" onClick={()=>{
                            console.log(tab)
                            setTabValue(tab)}} key={tabIndex}>
                            <h4>
                                {tab } <span>({ numberOfTasks})</span>
                            </h4>
                        </button>
                    )
                })}
            </nav>

        </>

    );
}