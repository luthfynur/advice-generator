import { render, screen } from '@testing-library/react';
import App from './App';

test('Get writer name', () => {
  render(<App />);
  const linkElement = screen.getByText(/Luthfy Nur/);
  expect(linkElement).toBeInTheDocument();
});
