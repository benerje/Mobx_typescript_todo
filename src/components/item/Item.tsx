import React,{useContext, useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt, faEdit, faCheck } from '@fortawesome/free-solid-svg-icons'
import './Item.css'
import { observer } from "mobx-react-lite";
import TodoStore, { Todo } from '../../stores/TodoStore';


const Item = ({currentItem}:any) => {
    const todoStore = useContext(TodoStore);
    const { todos, toggleTodo, removeTodo ,editTodo,saveTodo} = todoStore;
    const [name,setName] = useState(currentItem.title)

    const edit = () =>{
        editTodo(currentItem.id)
    }

    const save =() =>{
        saveTodo(currentItem.id,name)
    }

    return (
        <div className='itemContainer'>
            <button onClick={()=>toggleTodo(currentItem.id)} className="complete-btn">
                    <i  className={currentItem.completed?"fas fa-check-square":"fas fa-square"}></i>
            </button>
               {currentItem.isedit? <input type="text" className='updateInputField' onChange={(e)=>setName(e.target.value)} value={name}
             />:<h3 className={currentItem.completed?"strike":""}>{currentItem.title}</h3>}
                
                
            <div className='actionButtons'>
                <FontAwesomeIcon className='btn edit'onClick={currentItem.isedit?save:edit} icon={currentItem.isedit ? faCheck : faEdit} />
                <FontAwesomeIcon onClick={()=>removeTodo(currentItem.id)}   className='btn delete' icon={faTrashAlt} />
                <span id='errUpdateMsg'></span>
            </div>
        </div>
    )
}

export default observer(Item);
