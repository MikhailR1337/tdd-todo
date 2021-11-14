import React from 'react';
import { AddButton } from '../AddButton';

export function AddTodo() {
    return (
        <div className="row valign-wrapper">
            <div className="input-field col s6">
                <input id="input_text" type="text" />
            </div>
            <div className="col s6">
                <AddButton />
            </div>
        </div>
    )
}
