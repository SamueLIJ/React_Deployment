import React,{useState} from 'react';
import TodoForm from './TodoForm';
import Todo from './Todo';

export default function TodoList() {
    const [todos,setTodos] = useState([])

    const addTodo = todo => {
        if(!todo.text || /^\s*$/.test(todo.text)){
            return;
        }


        const newTodos = [todo,...todos];

        setTodos(newTodos);
        console.log(todo,...todos);
        
    }

    const updateTodos = (todoId,newValue) =>{
        if(!newValue.text || /^\s*$/.test(newValue.text)){
            return;
        }
        setTodos(prev =>  prev.map(item => (item.id === todoId ? newValue : item)))
    }

    const completeTodo = id => {
        let updateTodos = todos.map(todo => {
            if(todo.id === id){
                todo.isComplete = !todo.isComplete
            }
            return todo
        })

        setTodos(updateTodos);
    }

    const removeTodo = id => {
        const removeArr = [...todos].filter(todo => todo.id !== id)

        setTodos(removeArr)
    }
    return (
        <div>
            <h1 className="rainbow-text">Todo List</h1>
            <TodoForm onSubmit={addTodo}/>
            <Todo todos={todos} completeTodo={completeTodo} removeTodo={removeTodo} updateTodos={updateTodos}/>
        </div>
    )
}


