import React from 'react';
import { render, screen } from '@testing-library/react';
import { RemoveButton } from '.';

describe('Simple RemoveButton test', () => {
    test('RemoveButton has remove', () => {
        render(<RemoveButton />);
        expect(screen.queryByText('remove')).toBeInTheDocument();
    })
});
