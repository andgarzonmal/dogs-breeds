import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';
import { renderWithProviders } from '../Helpers/test-utils';
import Small from './Small';
import '@testing-library/jest-dom';

describe(Small, () => {
  it('renders the header', () => {
    renderWithProviders(<Small />);
    const header = screen.getByRole('heading', { name: /All Small Breeds Here/i });
    expect(header).toBeInTheDocument();
  });

  it('renders dogs', async () => {
    renderWithProviders(
      <BrowserRouter>
        <Small />
      </BrowserRouter>,
    );
    const dog = await screen.findByText('maltese');
    expect(dog).toBeInTheDocument();
  });

  it('render dog image', async () => {
    renderWithProviders(
      <BrowserRouter>
        <Small />
      </BrowserRouter>,
    );
    const image = await screen.findByAltText('maltese');
    expect(image.src).toContain('https://cdn2.thedogapi.com/images/B1SV7gqN7.jpg');
  });

  it('input works correctly', async () => {
    const user = userEvent.setup();
    renderWithProviders(
      <BrowserRouter>
        <Small />
      </BrowserRouter>,
    );
    const input = screen.getByPlaceholderText('Search breed here...');
    await user.type(input, 'test');
    expect(input.value).toBe('test');
  });

  it('when user types a dog on the input, that dog is displayed on the page', async () => {
    const user = userEvent.setup();
    renderWithProviders(
      <BrowserRouter>
        <Small />
      </BrowserRouter>,
    );
    const input = screen.getByPlaceholderText('Search breed here...');
    await user.type(input, 'maltese');
    const dog = await screen.findByText('maltese');
    expect(dog).toBeInTheDocument();
  });
});
