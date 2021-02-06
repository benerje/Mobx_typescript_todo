import React, { useContext, useState } from "react";
import { observer } from "mobx-react-lite";
import './AddTodo.css'
import TodoStore from "../../stores/TodoStore";
import Items from "../Items/Items";

const AddTodo = () => {
 const todoStore = useContext(TodoStore);
 const [title, setTitle] = useState("");
 const {addTodo,info} = todoStore

  const submitHandler =(e:any)=>{
    e.preventDefault()
    if(e.target.input.value.trim().length>1){
    addTodo({title:e.target.input.value,completed:false,isedit:false})
    }
    e.target.input.value = ''
  }
    return (
        <div className="App">
            <div className='appContainer'>
            <h1 className='appTitle'>ToDo Application</h1>
                <form onSubmit={submitHandler}>
                    <input className='inputField'  name="input" type='text'   placeholder='Add Item' />
                    <button type="submit" className='btn add'>+</button>
                </form>
                <Items/>
        </div>
     </div>  
    );
};

export default observer(AddTodo)
