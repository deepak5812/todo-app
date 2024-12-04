
export function Header(props) {
    const { todos }=props
    const isTaskPlural=todos.length!=1
    const taskOrTasks=isTaskPlural?'Tasks':'Task'


    return (
        <>
            <header className='myOwnClass' style={{margin : '20px' }}>
                <h1>You have {todos.length} Open {taskOrTasks} </h1>
            </header>
        </>
    );
}
