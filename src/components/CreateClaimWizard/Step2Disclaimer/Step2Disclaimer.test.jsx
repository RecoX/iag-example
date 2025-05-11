import { render, screen } from '@testing-library/react';
import Step2Disclaimer from './Step2Disclaimer';

test('renders disclaimer heading', () => {
  render(<Step2Disclaimer onBack={() => {}} onNext={() => {}} />);
  expect(screen.getByText(/Make a vehicle claim/i)).toBeInTheDocument();
});
