import { render, screen } from '@testing-library/react';
import Step3IncidentTime from './Step3IncidentTime';

test('renders date selection label', () => {
  render(
    <Step3IncidentTime
      date=""
      time=""
      meridiem="AM"
      onChange={() => {}}
      onBack={() => {}}
      onNext={() => {}}
    />
  );
  expect(screen.getByText(/Select a date/i)).toBeInTheDocument();
});
