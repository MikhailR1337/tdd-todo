import React, { useState } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import { Header } from '../Header';
import { AddTodo } from '../AddTodo';
import { TodoElement } from '../TodoElement';
import { defaultTodos } from '../../defaultTodos';

export function App() {
    const [todos, setTodos] = useState(defaultTodos);
    const removeTodo = (id: number) => {
        setTodos(todos.filter(todo => todo.id !== id));
    };
    const addTodo = (value: string) => {
        value && setTodos([{ id: Date.now(), text: value }, ...todos]);
    }

    return (
        <div className='row'>
            <Header />
            <AddTodo addTodo={addTodo} />
            <div className='container center-align'>
                <ul className="collapsible">
                    {todos.map(todo => (
                        <TodoElement key={todo.id} text={todo.text} removeTodo={() => removeTodo(todo.id)}/>
                    ))}
                </ul>
            </div>
        </div>
    );
}
