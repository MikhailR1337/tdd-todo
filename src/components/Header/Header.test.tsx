import React from 'react';
import { render, screen } from '@testing-library/react';
import { Header } from '.';

describe('Simple Header test', () => {
    test('Header has text', () => {
        render(<Header />);
        expect(screen.getByText('I am mister Header')).toBeInTheDocument();
    })

    test('Header is nav centered', () => {
        render(<Header />);
        expect(screen.getByRole('navigation')).toHaveClass('center-align');
    })
});
