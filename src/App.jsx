

import { Header } from './Components/Header'
import { Todolist } from './Components/Todolist'
import { Tab } from './Components/Tab'
import { TodoInput } from './Components/TodoInput'
import './fanta.css'
import { useState,useEffect } from 'react'
function App() {

  const [todos,SetTodos] = useState([
    {input:'Deepak Mathur',complete:true}
  ])

  useEffect(()=>{
      if(!localStorage || !localStorage.getItem('todo-app')){return}
      let db = JSON.parse(localStorage.getItem('todo-app'))
      SetTodos(db.todos)
  },[])
  const [tabValue,setTabValue]=useState('Open')

  function handelSaveData(currTodos){
    localStorage.setItem('todo-app',JSON.stringify({todos:currTodos}))
  }
  function handleToAddTask(newTodos){

    const newTodosList=[...todos,{input:newTodos,complete:false}]
    SetTodos(newTodosList)
    handelSaveData(newTodosList)
  }
  function handleToCompleteTask(index){
    let newTodosList=[...todos]
    let CompletedTodo=todos[index]
    CompletedTodo['complete']=true
    newTodosList[index]=CompletedTodo
    SetTodos(newTodosList)
    handelSaveData(newTodosList)
    
  }
  function handleToDeleteTask(index){
    let newTodosList=todos.filter((val,valIndex)=>{
        return valIndex!==index
    })
    SetTodos(newTodosList) 
    handelSaveData(newTodosList) 
  }

  return (
    <>
      <Header todos={todos} />
      <Tab todos={todos} tabValue={tabValue} setTabValue={setTabValue} />
      <Todolist todos={todos}  tabValue={tabValue} 
      handleToDeleteTask={handleToDeleteTask}
      handleToCompleteTask={handleToCompleteTask}
      />
      <TodoInput handleToAddTask={handleToAddTask} />
    </>
  )
}
export default App