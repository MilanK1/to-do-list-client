import React, {useState, useEffect} from 'react'
import Axios from 'axios'
import "./list.css"
export default function List(props){


    const [addList, setAddList]=useState([])
    const [inpValue, setInpValue]=useState("")



//GET request for getting all the todo
    useEffect(()=>{
       getList()

    },[])

const getList = ()=>{
    Axios.get(`http://localhost:8001/todo/getAllToDo`).then(res=> {

        setAddList(res.data)

        console.log(res.data)
    })
    }


    const addListButton = ()=>{
const box = {
    text:inpValue,
    pos: 0
}




 setInpValue("")
// Functions go here

        //POST request for the server to get input value
Axios.post(`http://localhost:8001/todo/addToDo`, box).then(res=>{
    console.log(res.data, "Packet was sent!")
    getList()
}).catch(error=>{
    console.log(error)
})



    }

    const deleteListButton = (id)=>{
        Axios.delete(`http://localhost:8001/todo/${id}`)
            .then(res=>{console.log(res, "Deleted successfully!")
                getList()
            })

    }






    return(
<div className="wrapper" >

{/*<input value={inpValue} onChange={(e)=>setInpValue(e.target.value)}/>*/}
{/*{console.log(inpValue)}*/}
{/*<button onClick={addListButton}>Add</button>*/}

    <div className="container">
        <div className="container__item">
            <form className="form">
                <input type="input" className="form__field" placeholder="ToDo" value={inpValue} onChange={(e)=>setInpValue(e.target.value)}/>
                <button type="button" className="btn btn--primary btn--inside" onClick={addListButton}>Add</button>
            </form>
        </div>



    </div>


<ul className="container">
    {addList.map(el=><li  className="form__field">{el.text}
    <br/>
        <button className="btn btn--primary"  onClick={()=>deleteListButton(el._id)}>Delete</button></li>)
    }

</ul>


</div>
    )
}