import { render, screen } from '@testing-library/react';
import App from './App';

// Basic smoke test for default app render.
test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
