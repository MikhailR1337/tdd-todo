import React from 'react';

interface Props {
    addTodo: () => void;
}

export function AddButton({ addTodo }: Props) {
    return (
        <a className="waves-effect waves-light btn" onClick={addTodo}>add</a>
    )
}
