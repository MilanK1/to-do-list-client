import React, {useState} from 'react'
import Axios from 'axios'
export default function List(el){
    const [addList, setAddList]=useState([])
    const [inpValue, setInpValue]=useState("")
    const addListButton = ()=>{
 setAddList([...addList, {text: inpValue, id:"", pos:0}])
 setInpValue("")
// Functions go here


    }

    const ToDo = ()=>{
        Axios.post(`http://localhost:8001/AddToDo`, {
            inputValue: addList
        })

    }


    return(
<div className="wrapper">

<h1>To Do List</h1>
<input value={inpValue} onChange={(e)=>setInpValue(e.target.value)}/>
{console.log(inpValue)}
<button onClick={addListButton}>Add</button>
<button onClick={ToDo}>Test</button>
<ul>
    {addList.map(el=><li>{el.text}</li>)}


</ul>


</div>
    )
}