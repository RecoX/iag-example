import { render, screen, fireEvent } from '@testing-library/react';
import Step1SelectAsset from './Step1SelectAsset';
import { describe, it, expect, vi } from 'vitest';

describe('Step1SelectAsset', () => {
  const mockAssets = [
    {
      id: 1,
      title: 'Comprehensive Car Insurance',
      subtitle: '2017 Mercedes-Benz Sprinter ABC123',
      policyNumber: 'MOTS00579123',
    },
    {
      id: 2,
      title: 'Third Party Insurance',
      subtitle: '2020 Honda Fit XYZ456',
      policyNumber: 'MOTS00987654',
    },
  ];

  it('renders the alert box with help text', () => {
    render(<Step1SelectAsset assets={mockAssets} onSelect={() => {}} />);
    expect(screen.getByText('Need to make a claim for a policy not listed?')).toBeInTheDocument();
    expect(screen.getByText('Call us at 0800 123 456.')).toBeInTheDocument();
  });

  it('renders all provided assets', () => {
    render(<Step1SelectAsset assets={mockAssets} onSelect={() => {}} />);
    expect(screen.getByText('Comprehensive Car Insurance')).toBeInTheDocument();
    expect(screen.getByText('2017 Mercedes-Benz Sprinter ABC123')).toBeInTheDocument();
    expect(screen.getByText(/Policy number: MOTS00579123/)).toBeInTheDocument();

    expect(screen.getByText('Third Party Insurance')).toBeInTheDocument();
    expect(screen.getByText('2020 Honda Fit XYZ456')).toBeInTheDocument();
    expect(screen.getByText(/Policy number: MOTS00987654/)).toBeInTheDocument();
  });

  it('calls onSelect when an asset is clicked', () => {
    const mockOnSelect = vi.fn();
    render(<Step1SelectAsset assets={mockAssets} onSelect={mockOnSelect} />);
    fireEvent.click(screen.getByText('Comprehensive Car Insurance'));
    expect(mockOnSelect).toHaveBeenCalledWith(mockAssets[0]);
  });
});
