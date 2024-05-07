import { useState } from 'react'
import './App.css'
import CreateTodo from './Components/CreateTodo'
import SupplyTodos from './Components/SupplyTodos'

function App() {
  const[todo,setTodo]=useState([])

  fetch(`http://localhost:3000/todos`)
  .then(res=>res.json())
  .then(json=>setTodo(json.todos))

  return (
   <div className="">
     <CreateTodo/>
     <SupplyTodos todoItems={todo}/>
   </div>
  )
}

export default App
