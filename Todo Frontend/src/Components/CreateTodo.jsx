import { useEffect, useState } from "react"

export default function CreateTodo(){
    const[title,setTitle]=useState('');
    const[desc,setDesc]=useState('');

    function titleChange(e){
        setTitle(e.target.value);
    }

    function descChange(e){
        setDesc(e.target.value)
    }

    // useEffect({
    //     fetch('http')
    // },[])

    

    return(
        <div className="">
            <input type="text" onChange={(e)=>titleChange(e)} placeholder='title'/> <br />
            <input type="text" onChange={(e)=>descChange(e)} placeholder='description'/> <br />
            <button onClick={handleClick}>Create Todo</button>
        </div>
    )
}