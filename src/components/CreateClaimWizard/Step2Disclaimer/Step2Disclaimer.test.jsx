import { render, screen, fireEvent } from '@testing-library/react';
import Step2Disclaimer from './Step2Disclaimer';
import { describe, it, expect, vi } from 'vitest';

describe('Step2Disclaimer', () => {
  it('renders the main title and checklist', () => {
    render(<Step2Disclaimer onBack={() => {}} onNext={() => {}} />);

    expect(screen.getByText('Make a vehicle claim')).toBeInTheDocument();
    expect(screen.getByText('Details of what happened')).toBeInTheDocument();
    expect(screen.getByText('Details of any other people involved')).toBeInTheDocument();
    expect(screen.getByText('If your vehicle is safe to drive or not')).toBeInTheDocument();
    expect(screen.getByText('Be honest — inaccurate info can lead to claim denial.')).toBeInTheDocument();
  });

  it('does not allow clicking "Start my claim" until checkbox is checked', () => {
    render(<Step2Disclaimer onBack={() => {}} onNext={() => {}} />);
    const startButton = screen.getByText('Start my claim');
    expect(startButton).toBeDisabled();
  });

  it('enables button when checkbox is checked and triggers onNext on click', () => {
    const mockNext = vi.fn();
    render(<Step2Disclaimer onBack={() => {}} onNext={mockNext} />);

    fireEvent.click(screen.getByRole('checkbox'));
    const startButton = screen.getByText('Start my claim');
    expect(startButton).not.toBeDisabled();

    fireEvent.click(startButton);
    expect(mockNext).toHaveBeenCalled();
  });

  it('calls onBack when back button is clicked', () => {
    const mockBack = vi.fn();
    render(<Step2Disclaimer onBack={mockBack} onNext={() => {}} />);
    fireEvent.click(screen.getByText('← Back'));
    expect(mockBack).toHaveBeenCalled();
  });
});
