import { render, screen } from '@testing-library/react';
import App from './App';

test('renders without crashing', async () => {
  const { findByText } = render(<App />);
  const title = await screen.findByText(/Última búsqueda/i);
  expect(title).toBeInTheDocument();
});
