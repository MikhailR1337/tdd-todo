import React from 'react';
import { render, screen } from '@testing-library/react';
import { AddButton } from '.';

describe('Simple AddButton test', () => {
    const fn = jest.fn;

    test('AddButton has add', () => {
        render(<AddButton addTodo={fn} />);
        expect(screen.queryByText('add')).toBeInTheDocument();
    })
});
