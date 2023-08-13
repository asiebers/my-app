import { render, screen } from '@testing-library/react';
import App from './App';

test('renders content of main component App', () => {
  render(<App />);
  const linkElement = screen.getByText(/Welcome to my app/i);
  expect(linkElement).toBeInTheDocument();
});