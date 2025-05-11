import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import Step5FullIncidentForm from './Step5FullIncidentForm';

// Mock the section components
vi.mock('./sections/AccidentContextSection', () => ({ AccidentContextSection: () => <div>AccidentContextSection</div> }));
vi.mock('./sections/IncidentLocationSection', () => ({ IncidentLocationSection: () => <div>IncidentLocationSection</div> }));
vi.mock('./sections/WitnessSection', () => ({ WitnessSection: () => <div>WitnessSection</div> }));
vi.mock('./sections/PoliceSection', () => ({ PoliceSection: () => <div>PoliceSection</div> }));
vi.mock('./sections/DamageSection', () => ({ DamageSection: () => <div>DamageSection</div> }));
vi.mock('./sections/DriverSection', () => ({ DriverSection: () => <div>DriverSection</div> }));
vi.mock('./sections/CriminalHistorySection', () => ({ CriminalHistorySection: () => <div>CriminalHistorySection</div> }));
vi.mock('./sections/ContactSection', () => ({ ContactSection: () => <div>ContactSection</div> }));

describe('Step5FullIncidentForm', () => {
  it('renders all section components and the submit button', () => {
    render(<Step5FullIncidentForm onBack={() => {}} onSubmit={() => {}} />);

    expect(screen.getByText('Tell us about the incident')).toBeInTheDocument();
    expect(screen.getByText('AccidentContextSection')).toBeInTheDocument();
    expect(screen.getByText('IncidentLocationSection')).toBeInTheDocument();
    expect(screen.getByText('WitnessSection')).toBeInTheDocument();
    expect(screen.getByText('PoliceSection')).toBeInTheDocument();
    expect(screen.getByText('DamageSection')).toBeInTheDocument();
    expect(screen.getByText('DriverSection')).toBeInTheDocument();
    expect(screen.getByText('CriminalHistorySection')).toBeInTheDocument();
    expect(screen.getByText('ContactSection')).toBeInTheDocument();
    expect(screen.getByText('Submit Claim')).toBeInTheDocument();
  });

  it('calls onBack when back button is clicked', () => {
    const onBack = vi.fn();
    render(<Step5FullIncidentForm onBack={onBack} onSubmit={() => {}} />);

    fireEvent.click(screen.getByText('← Back'));
    expect(onBack).toHaveBeenCalled();
  });

  it('calls onSubmit when submit button is clicked', () => {
    const onSubmit = vi.fn();
    render(<Step5FullIncidentForm onBack={() => {}} onSubmit={onSubmit} />);

    fireEvent.click(screen.getByText('Submit Claim'));
    expect(onSubmit).toHaveBeenCalled();
  });
});
