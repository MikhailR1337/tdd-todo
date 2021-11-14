import React from 'react';
import { render, screen } from '@testing-library/react';
import { App } from '.'

describe('Simple tests', () => {

    test('App has Hello World', () => {
    render(<App />);
    expect(screen.getByText(/Hello world/i)).toBeInTheDocument();
    });
});
