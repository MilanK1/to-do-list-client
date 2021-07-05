import React, {useState, useEffect} from 'react'
import Axios from 'axios'
export default function List(props){
    const [addList, setAddList]=useState([])
    // useEffect(()=>{
    //     Axios.get(`http://localhost:8001/getAllToDo`).then(res=>{
    //        // setAddList([...res.data].map(el=> el.inputValue))
    //         [...res.data].map(el=> el.inputValue)
    //        console.log(addList)
    //
    //     })
    // },[])


    const [inpValue, setInpValue]=useState("")
    const addListButton = ()=>{

 setAddList([...addList, {text: inpValue, id:"", pos:0}])
 setInpValue("")
// Functions go here


    }

    useEffect(()=>{
        const list = () =>
        {

            Axios.get(`http://localhost:8001/getAllToDo`).then(res=> {
                // setAddList([...res.data].map(el=> el.inputValue))
                // [...res.data].map(el=> <li>{el.inputValue}</li>)
                <li> {[...res.data].map(el => el.inputValue).join("")}</li>
                console.log([...res.data].map(el=> el.inputValue + ',').join(""))
            })
        }
        list()

    },[])


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