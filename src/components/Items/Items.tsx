import React, { useContext } from 'react'
import {observer} from "mobx-react-lite"
import TodoStore from '../../stores/TodoStore'
import  Item  from '../item/Item';

const Items = () => {
    const todoStore = useContext(TodoStore);
    const { todos, toggleTodo, removeTodo } = todoStore;
    return  (
        <div>
            {todos.map((todo)=>(<Item key={todo.id} currentItem={todo}  />))}
        </div>
    )
}

export default observer(Items)
