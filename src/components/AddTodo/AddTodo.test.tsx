import React from 'react';
import { render, screen } from '@testing-library/react';
import { AddTodo } from '.';

describe('Simple AddTodo test', () => {
    const fn = jest.fn;
    test('AddTodo has input', () => {
        render(<AddTodo addTodo={fn} />);
        expect(screen.getByRole('textbox')).toBeInTheDocument();
    })
});
