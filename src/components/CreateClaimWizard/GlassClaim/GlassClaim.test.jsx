import { render, screen, fireEvent } from '@testing-library/react';
import GlassClaim from './GlassClaim';
import { vi } from 'vitest';

describe('GlassClaim', () => {
  beforeEach(() => {
    vi.spyOn(window, 'open').mockImplementation(() => {}); // stub window.open
    vi.spyOn(window, 'alert').mockImplementation(() => {}); // stub alert
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('renders headings and description text', () => {
    render(<GlassClaim onBack={() => {}} />);
    expect(screen.getByText('Windscreen and Glass Damage')).toBeInTheDocument();
    expect(screen.getByText('Choose a repairer')).toBeInTheDocument();
  });

  it('disables submit button if no repairer is selected', () => {
    render(<GlassClaim onBack={() => {}} />);
    const button = screen.getByText('Book Repair');
    expect(button).toBeDisabled();
  });


  it('enables submit button after selection and opens Smith and Smith link', () => {
    render(<GlassClaim onBack={() => {}} />);
    fireEvent.click(screen.getByText('Smith and Smith'));
    fireEvent.click(screen.getByText('Book Repair'));
    expect(window.open).toHaveBeenCalledWith(
      'https://www.smithandsmith.co.nz/access/details?ref=123456',
      '_blank'
    );
  });

  it('opens Novus Glass booking site when selected', () => {
    render(<GlassClaim onBack={() => {}} />);
    fireEvent.click(screen.getByText('Novus Glass'));
    fireEvent.click(screen.getByText('Book Repair'));
    expect(window.open).toHaveBeenCalledWith(
      'https://www.novusbooking.co.nz/default.aspx?insurer=state%20insurance',
      '_blank'
    );
  });

  it('calls onBack when the back button is clicked', () => {
    const mockBack = vi.fn();
    render(<GlassClaim onBack={mockBack} />);
    fireEvent.click(screen.getByText('← Back'));
    expect(mockBack).toHaveBeenCalled();
  });
});
