import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import App from './App';

describe('Little Lemon App Tests', () => {
  it('renders Little Lemon main heading', () => {
    render(<App />);

    // Hum specify kar rahe hain ke sirf Main Heading (h1) ko check karo
    const headingElement = screen.getByRole('heading', { level: 1, name: /Little Lemon/i });

    expect(headingElement).toBeInTheDocument();
  });
});