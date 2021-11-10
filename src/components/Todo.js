import React, {useState} from 'react'
import TodoForm from './TodoForm';
import {RiCloseCircleLine} from 'react-icons/ri';
import {TiEdit} from 'react-icons/ti';
import {BsFillTrashFill} from 'react-icons/bs';

export default function Todo({todos, completeTodo, removeTodo, updateTodos}) {
    const [edit, setEdit] = useState({
        id: null,
        value:''
    });

    const submitUpdate = value => {
        updateTodos(edit.id, value)
        setEdit({
            id: null,
            value:''
        })
    }

    if(edit.id) {
        return <TodoForm edit={edit} onSubmit={submitUpdate} />
    }
    return todos.map((todo,index) => (
        <div className={todo.isComplete ? 'todo-row complete' : 'todo-row'} key={index}>
           <div>
           <input type="checkbox" key={todo.id} onClick={() => completeTodo(todo.id)}/>
            {todo.text}
           </div>
           <div className="icons">
            <BsFillTrashFill 
            onClick={() => removeTodo(todo.id)}
            // className='delete-icon'
            />
            <TiEdit onClick={() => setEdit({id: todo.id, value: todo.text})}
            className='edit-icon' 
            />
           </div>
        </div>
    ))
}


