import { render, screen, fireEvent } from '@testing-library/react';
import Step4IncidentType from './Step4IncidentType';
import { describe, it, expect, vi } from 'vitest';

describe('Step4IncidentType', () => {
  it('renders all incident options', () => {
    render(<Step4IncidentType selected="" onSelect={() => {}} onBack={() => {}} onNext={() => {}} />);
    
    expect(screen.getByText('Glass damage only')).toBeInTheDocument();
    expect(screen.getByText('An accident')).toBeInTheDocument();
    expect(screen.getByText('Theft or attempted theft')).toBeInTheDocument();
    expect(screen.getByText('Weather or natural event')).toBeInTheDocument();
    expect(screen.getByText('Fire')).toBeInTheDocument();
    expect(screen.getByText('Something else')).toBeInTheDocument();
  });

  it('shows modal when clicking "Not sure what to choose?"', () => {
    render(<Step4IncidentType selected="" onSelect={() => {}} onBack={() => {}} onNext={() => {}} />);
    fireEvent.click(screen.getByText('Not sure what to choose?'));
    expect(screen.getByText('Help choosing an incident type')).toBeInTheDocument();
  });

  it('calls onSelect when an option is clicked', () => {
    const mockSelect = vi.fn();
    render(<Step4IncidentType selected="" onSelect={mockSelect} onBack={() => {}} onNext={() => {}} />);
    fireEvent.click(screen.getByText('Fire'));
    expect(mockSelect).toHaveBeenCalledWith('fire');
  });

  it('calls onNext when a valid selection is passed and Next is clicked', () => {
    const mockNext = vi.fn();
    render(<Step4IncidentType selected="glass" onSelect={() => {}} onBack={() => {}} onNext={mockNext} />);
    fireEvent.click(screen.getByText('Next'));
    expect(mockNext).toHaveBeenCalled();
  });

  it('calls onBack when back button is clicked', () => {
    const mockBack = vi.fn();
    render(<Step4IncidentType selected="" onSelect={() => {}} onBack={mockBack} onNext={() => {}} />);
    fireEvent.click(screen.getByText('← Back'));
    expect(mockBack).toHaveBeenCalled();
  });
});
