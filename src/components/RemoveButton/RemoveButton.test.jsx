import React from 'react';
import { render, screen } from '@testing-library/react';
import { RemoveButton } from '.';
import userEvent from '@testing-library/user-event';

describe('Simple RemoveButton test', () => {
    const fn = jest.fn()

    test('RemoveButton has remove', () => {
        render(<RemoveButton removeTodo={fn} />);
        expect(screen.queryByText('remove')).toBeInTheDocument();
    })

    test('RemoveButton has enable function', () => {
        render(<RemoveButton removeTodo={fn} />);
        userEvent.click(screen.getByText('remove'));
        expect(fn).toBeCalled();
    })

    test('RemoveButton snapshot', () => {
        const removeButton = render(<RemoveButton />);

        expect(removeButton).toMatchSnapshot();
    })
});
