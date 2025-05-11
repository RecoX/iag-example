import { render, screen } from '@testing-library/react';
import Step1SelectAsset from './Step1SelectAsset';

test('renders policy title', () => {
  const asset = { title: 'Car Insurance', subtitle: '', policyNumber: '' };
  render(<Step1SelectAsset asset={asset} onSelect={() => {}} />);
  expect(screen.getByText('Car Insurance')).toBeInTheDocument();
});
