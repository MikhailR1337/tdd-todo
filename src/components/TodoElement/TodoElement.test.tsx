import React from 'react';
import { render, screen } from '@testing-library/react';
import { TodoElement } from '.';
import userEvent from '@testing-library/user-event';

describe('Simple text test', () => {
    const text = 'Testin Text';
    const fn = jest.fn();

    test('TodoElement has text', () => {
        render(<TodoElement text={text} removeTodo={fn}/>);
        expect(screen.getByText(text)).toBeInTheDocument();
    })

    test('TodoElement has RemoveButton', () => {
        render(<TodoElement text={text} removeTodo={fn}/>);
        expect(screen.getByText('remove')).toBeInTheDocument();
    })

    test('TodoElement has RemoveButton with function', () => {
        render(<TodoElement text={text} removeTodo={fn}/>);
        userEvent.click(screen.getByText('remove'));
        expect(fn).toBeCalled();
    })

    test('TodoElement snapshot', () => {
        const todoElement = render(<TodoElement text={text} removeTodo={fn}/>);

        expect(todoElement).toMatchSnapshot();
    })
});
