import React from 'react';
import { RemoveButton } from '../RemoveButton';

interface Props {
    text: string;
    removeTodo: () => void;
}

export function TodoElement({ text, removeTodo }: Props) {
    return (
            <li>
            <div className="collapsible-header">
                <i className="material-icons">free_breakfast</i>
                {text}
                <span className="badge"></span>
            <RemoveButton removeTodo={removeTodo} />
            </div>
        </li>
    )
}
