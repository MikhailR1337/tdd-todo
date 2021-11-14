import React from 'react';

interface Props {
    removeTodo: () => void;
}

export function RemoveButton({ removeTodo }: Props) {
    return (
        <a className="waves-effect waves-light btn" onClick={removeTodo}>remove</a>
    )
}
