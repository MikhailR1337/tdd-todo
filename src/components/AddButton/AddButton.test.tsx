import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { AddButton } from '.';

describe('Simple AddButton test', () => {
    const fn = jest.fn();

    test('AddButton has add', () => {
        render(<AddButton addTodo={fn} />);
        expect(screen.queryByText('add')).toBeInTheDocument();
    })


    test('AddButton has enable function', () => {
        render(<AddButton addTodo={fn} />);
        userEvent.click(screen.getByText('add'));
        expect(fn).toBeCalled();
    })
});
