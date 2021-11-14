import React from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import { Header } from '../Header';
import { AddTodo } from '../AddTodo';

export function App() {
    return (
        <div className='row'>
            <Header />
            <div className='container center-align'>
                <AddTodo />
            </div>
        </div>
    );
}
