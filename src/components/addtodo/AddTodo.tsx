import React, { useContext, useState } from "react";
import { observer } from "mobx-react-lite";
import './AddTodo.css'
import TodoStore from "../../stores/TodoStore";
import Items from "../Items/Items";

const AddTodo = () => {
 const todoStore = useContext(TodoStore);
 const [value, setValue] = useState("");
 const {addTodo,info} = todoStore


  const submitHandler =(e:any)=>{
    e.preventDefault()
    if(e.target.input.value.trim().length>1){
    addTodo({title:e.target.input.value,completed:false,isedit:false})
    }
    e.target.input.value = ''
  }

  const handleChange = (e:any) =>{
   e.preventDefault()
   setValue(e.target.value)
   console.log(value)
  }
    return (
        <div className="App">
            <div className='appContainer'>
            <select onChange={handleChange} className="dropdown" id="cars" name="cars">
                <option >All</option>
                <option value="Completed">Completed</option>
                <option value="notCompleted">Not Completed</option>
            </select>
            <h1 className='appTitle'>ToDo Application</h1>
                <form onSubmit={submitHandler}>
                    <input className='inputField'  name="input" type='text'   placeholder='Add Item' />
                    <button type="submit" className='btn add'>+</button>
                </form>
                <Items value={value}/>
        </div>
     </div>  
    );
};

export default observer(AddTodo)
