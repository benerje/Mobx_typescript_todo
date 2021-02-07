import React, { useContext, useState } from 'react'
import {observer} from "mobx-react-lite"
import TodoStore from '../../stores/TodoStore'
import  Item  from '../item/Item';

const Items = ({value}:any) => {
    const todoStore = useContext(TodoStore);
    const { todos, toggleTodo, removeTodo ,info} = todoStore;
    console.log(value)
    return  (
        <>
        { (value==="notCompleted") ?
        <div>
            {info.notCompleted.map((todo)=>(<Item key={todo.id} currentItem={todo}  />))}
        </div>
        :
      (value==="Completed")?
      
        <div>
        {info.Completed.map((todo)=>(<Item key={todo.id} currentItem={todo}  />))}
        </div> 
        :
        <div>
        {info.total.map((todo)=>(<Item key={todo.id} currentItem={todo}  />))}
        </div>  
        }  
        </>
    )
}

export default observer(Items)
