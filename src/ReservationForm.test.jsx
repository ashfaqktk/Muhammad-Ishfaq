import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import App from './App';

describe('Reservation Form Tests', () => {
  it('renders Choose Date label', () => {
    render(<App />);
    const dateLabel = screen.getByText(/Choose Date/i);
    expect(dateLabel).toBeInTheDocument();
  });
});