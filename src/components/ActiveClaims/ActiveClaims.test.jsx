import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import ActiveClaims from './ActiveClaims';

describe('ActiveClaims Component', () => {
  test('renders no active claims message when claims list is empty', () => {
    render(
      <MemoryRouter>
        <ActiveClaims />
      </MemoryRouter>
    );

    expect(screen.getByText('No active claims found.')).toBeInTheDocument();
  });

  test('renders claims when claims list is not empty', () => {
    const mockClaims = [
      { id: 1, title: 'Claim 1', type: 'Type A', status: 'Open' },
      { id: 2, title: 'Claim 2', type: 'Type B', status: 'Closed' },
    ];

    // Mock localStorage
    jest.spyOn(Storage.prototype, 'getItem').mockReturnValue(JSON.stringify(mockClaims));

    render(
      <MemoryRouter>
        <ActiveClaims />
      </MemoryRouter>
    );

    expect(screen.getByText('Claim 1')).toBeInTheDocument();
    expect(screen.getByText('Type A')).toBeInTheDocument();
    expect(screen.getByText('Open')).toBeInTheDocument();

    expect(screen.getByText('Claim 2')).toBeInTheDocument();
    expect(screen.getByText('Type B')).toBeInTheDocument();
    expect(screen.getByText('Closed')).toBeInTheDocument();
  });

  test('navigates to create claim page when Make a Claim button is clicked', () => {
    const mockNavigate = jest.fn();

    jest.mock('react-router-dom', () => ({
      ...jest.requireActual('react-router-dom'),
      useNavigate: () => mockNavigate,
    }));

    render(
      <MemoryRouter>
        <ActiveClaims />
      </MemoryRouter>
    );

    const button = screen.getByText('Make a Claim');
    fireEvent.click(button);

    expect(mockNavigate).toHaveBeenCalledWith('/create-claim');
  });
});
