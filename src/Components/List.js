import React, {useState, useEffect} from 'react'
import Axios from 'axios'
export default function List(props){
    const [addList, setAddList]=useState([])
    useEffect(()=>{
        Axios.get(`http://localhost:8001/getAllToDo`).then(res=>{
            setAddList([...res.data])
            console.log(res)
        })
    },[])



    const [inpValue, setInpValue]=useState("")
    const addListButton = ()=>{

 setAddList([...addList, {text: inpValue, id:"", pos:0}])
 setInpValue("")
// Functions go here


    }




    return(
<div className="wrapper" >

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