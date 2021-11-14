import React from 'react';
import { render, screen } from '@testing-library/react';
import { App } from '.';

describe('Simple App tests', () => {

    test('App rendered', () => {
        render(<App />);
        expect(screen.getByRole('textbox')).toBeInTheDocument();
    });
});
