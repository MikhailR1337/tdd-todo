import React from 'react';
import { render, screen } from '@testing-library/react';
import { Header } from '.';

describe('Simple Header test', () => {
    test('Button has add', () => {
        render(<Header />);
        expect(screen.getByText('I am mister Header')).toBeInTheDocument();
    })
});
