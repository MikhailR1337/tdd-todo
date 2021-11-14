import React from 'react';
import { render, screen } from '@testing-library/react';
import { TodoElement } from '.';

describe('Simple TodoElement test', () => {
    test('bugavuga', () => {
        render(<TodoElement />);
        expect(screen.getByRole('list')).toBeInTheDocument();
    })
});
