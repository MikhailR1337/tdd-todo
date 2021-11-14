import React from 'react';
import { render, screen } from '@testing-library/react';
import { AddButton } from '.';

describe('Simple Button test', () => {
    test('Button has add', () => {
        render(<AddButton />);
        expect(screen.queryByText('remove')).toBeInTheDocument();
    })
});
