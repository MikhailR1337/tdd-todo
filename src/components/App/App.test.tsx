import React from 'react';
import { render, screen } from '@testing-library/react';
import { App } from '.';
import userEvent from '@testing-library/user-event';

describe('Simple App tests', () => {

    test('App rendered', () => {
        render(<App />);
        expect(screen.getByRole('textbox')).toBeInTheDocument();
    });

    test('App has ul by default', () => {
        render(<App />);
        expect(screen.getByRole('list')).toBeInTheDocument();
    });

    test('App todos has default correctly length', () => {
        render(<App />);
        expect(screen.getAllByRole('listitem').length).toBe(2);
    });

    test('App todos has correctly length after add item', () => {
        render(<App />);
        expect(screen.getAllByRole('listitem').length).toBe(2);
        userEvent.type(screen.getByRole('textbox'), 'My todo');
        userEvent.click(screen.getByText('add'));
        expect(screen.getAllByRole('listitem').length).toBe(3);
    });

    test('App todos has correctly length after remove item', () => {
        render(<App />);
        expect(screen.getAllByRole('listitem').length).toBe(2);
        userEvent.click(screen.getAllByText('remove')[0]);
        expect(screen.getAllByRole('listitem').length).toBe(1);
    });
});
