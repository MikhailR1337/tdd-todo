import React, { useState } from 'react';
import { AddButton } from '../AddButton';

interface Props {
    addTodo: (value: string) => void;
}

export function AddTodo({ addTodo }: Props) {
    const [value, setValue] = useState('');
    const addTodoWrapper = (value: string) => {
        addTodo(value);
        setValue('');
    };

    return (
        <div className='container center-align'>
            <div className="row valign-wrapper">
                <div className="input-field col s6">
                    <input id="input_text" type="text" value={value} onChange={(e) => setValue(e.target.value)}/>
                </div>
                <div className="col s6">
                    <AddButton addTodo={() => addTodoWrapper(value)} />
                </div>
            </div>
        </div>
    )
}
