import React from 'react';
import { render, screen } from '@testing-library/react';
import { App } from './App'

test('App has Hello World', () => {
  render(<App />);
  expect(screen.getByText(/Hello World/i)).toBeInTheDocument();
});

test('App has List', () => {
  render(<App />);
  expect(screen.getByRole('list')).toBeInTheDocument();
});
