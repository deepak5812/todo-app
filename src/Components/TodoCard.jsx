

export default function TodoCard(props){
    const {todoss,todoIndex,handleToDeleteTask,handleToCompleteTask} = props

    return(
<div className='myOwnClass card' style={{ marginLeft: '20px', marginRight: '20px' }}>
<div style={{ textAlign: 'center' }}>
    
    <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    }}>
        <h4>{todoss.input}</h4>
    </div>

    <div style={{
        display: 'flex',
        justifyContent: 'center',
        gap: '10px',
        marginTop: '10px'
    }}>
        <button disabled={todoss.complete} onClick={()=>{handleToCompleteTask(todoIndex)}}>
            <h6>Done</h6>
        </button>
        <button 
        onClick={()=>{handleToDeleteTask(todoIndex)}}
        >
            <h6>Delete</h6>
        </button>
    </div>
</div>
</div>
    );
}
