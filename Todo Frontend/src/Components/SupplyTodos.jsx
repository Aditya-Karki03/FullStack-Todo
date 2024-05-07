// import { useState } from "react"

export default function SupplyTodos(props){

    const todos=props.todoItems;
    
    // const[todos,setTodos]=useState([])

    return(
        <div className="">
            <h1>Go to gym</h1>
            <h2>You need to go to the gym by 6 pm</h2>
            <button>Mark as completed</button>
            {
                todos && todos.map((todo)=>{
                    return(
                       <div className="" key={todo.title}>
                            <h1>{todo.title}</h1>
                            <h2>{todo.description}</h2>
                            <button>Mark as completed</button>
                       </div>
                    )
                })
            }
        </div>
    )
}