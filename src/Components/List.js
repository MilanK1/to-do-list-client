import React, {useState} from 'react'
export default function List(el){
    const [addList, setAddList]=useState([])
    const [inpValue, setInpValue]=useState("")
    const addListButton = ()=>{
 setAddList([...addList, {text: inpValue, id:"", pos:0}])
 setInpValue("")

    }
    return(
<div className="wrapper">

<h1>To Do List</h1>
<input value={inpValue} onChange={(e)=>setInpValue(e.target.value)}/>
{console.log(inpValue)}
<button onClick={addListButton}>Add</button>
<ul>
   {addList.map(el=><li>{el.text}</li>)}
</ul>


</div>
    )
}