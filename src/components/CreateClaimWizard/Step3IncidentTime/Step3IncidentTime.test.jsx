import { render, screen, fireEvent } from '@testing-library/react';
import Step3IncidentTime from './Step3IncidentTime';
import { describe, it, expect, vi } from 'vitest';

describe('Step3IncidentTime', () => {
  const today = new Date().toISOString().split('T')[0]; // YYYY-MM-DD

  it('shows error for invalid time format', () => {
    const mockChange = vi.fn();
    render(
      <Step3IncidentTime
        date={today}
        time=""
        meridiem="AM"
        onChange={mockChange}
        onBack={() => {}}
        onNext={() => {}}
      />
    );

    const timeInput = screen.getByPlaceholderText('HH:MM');
    fireEvent.change(timeInput, { target: { value: 'abcd' } });
    fireEvent.blur(timeInput);

    expect(screen.getByText('Please enter a valid time (HH:MM).')).toBeInTheDocument();
  });

  it('calls onNext if date and time are valid', () => {
    const mockNext = vi.fn();
    const mockChange = vi.fn();

    const validDate = new Date();
    validDate.setDate(validDate.getDate() - 1); // Set to yesterday to ensure it's not in the future
    const formattedDate = validDate.toISOString().split('T')[0];

    render(
      <Step3IncidentTime
        date={formattedDate}
        time="09:15"
        meridiem="AM"
        onChange={mockChange}
        onBack={() => {}}
        onNext={mockNext}
      />
    );

    fireEvent.click(screen.getByText('Next'));
    expect(mockNext).toHaveBeenCalled();
  });

  it('calls onBack when back button is clicked', () => {
    const mockBack = vi.fn();
    render(
      <Step3IncidentTime
        date={today}
        time="10:45"
        meridiem="PM"
        onChange={() => {}}
        onBack={mockBack}
        onNext={() => {}}
      />
    );

    fireEvent.click(screen.getByText('← Back'));
    expect(mockBack).toHaveBeenCalled();
  });
});
