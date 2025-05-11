
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import ActiveClaims from './ActiveClaims';

describe('ActiveClaims', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('renders empty message when no claims exist', () => {
    render(
      <MemoryRouter>
        <ActiveClaims />
      </MemoryRouter>
    );
    expect(screen.getByText('No active claims found.')).toBeInTheDocument();
  });

  it('renders claims from localStorage', () => {
    const mockClaims = [
      {
        id: 1,
        title: '2022 Toyota Hilux',
        type: 'Motor insurance claim',
        status: 'Open claim',
      },
    ];
    localStorage.setItem('activeClaims', JSON.stringify(mockClaims));

    render(
      <MemoryRouter>
        <ActiveClaims />
      </MemoryRouter>
    );

    expect(screen.getByText('2022 Toyota Hilux')).toBeInTheDocument();
    expect(screen.getByText('Motor insurance claim')).toBeInTheDocument();
    expect(screen.getByText('Open claim')).toBeInTheDocument();
  });
});
