import React from 'react';
import { render, screen } from '@testing-library/react';
import { AddTodo } from '.';
import userEvent from '@testing-library/user-event';

describe('Simple AddTodo test', () => {
    const fn = jest.fn();

    test('AddTodo has input', () => {
        render(<AddTodo addTodo={fn} />);
        expect(screen.getByRole('textbox')).toBeInTheDocument();
    })

    test('AddTodo has button', () => {
        render(<AddTodo addTodo={fn} />);
        expect(screen.queryByText('add')).toBeInTheDocument();
    })


    test('AddTodo has button with enable function', () => {
        render(<AddTodo addTodo={fn} />);
        userEvent.click(screen.getByText('add'));
        expect(fn).toBeCalled();
    })
});
