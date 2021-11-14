import React from 'react';
import { render, screen } from '@testing-library/react';
import { TodoElement } from '.';

describe('Simple text test', () => {
    const text = 'Testin Text';
    const fn = jest.fn();

    test('TodoElement has text', () => {
        render(<TodoElement text={text} removeTodo={fn}/>);
        expect(screen.getByText('Testin Text')).toBeInTheDocument();
    })
});
