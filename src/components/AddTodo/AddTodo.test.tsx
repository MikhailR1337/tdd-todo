import React from 'react';
import { render, screen } from '@testing-library/react';
import { AddTodo } from '.';

describe('Simple AddTodo test', () => {
    test('AddTodo has input', () => {
        render(<AddTodo />);
        expect(screen.getByRole('textbox')).toBeInTheDocument();
    })
});
