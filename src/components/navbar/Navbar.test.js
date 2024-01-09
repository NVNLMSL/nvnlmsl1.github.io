import { render, screen } from '@testing-library/react';
import Navbar from './Navbar';

test('renders navbar', () => {
  render(<Navbar />);
  const text = screen.getByText(/Menu/i);
  expect(text).toBeInTheDocument();
});