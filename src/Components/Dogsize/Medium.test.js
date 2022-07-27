import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';
import { renderWithProviders } from '../Helpers/test-utils';
import Medium from './Medium';
import '@testing-library/jest-dom';

describe(Medium, () => {
  it('renders the header', () => {
    renderWithProviders(<Medium />);
    const header = screen.getByRole('heading', { name: /All Medium Breeds Here/i });
    expect(header).toBeInTheDocument();
  });
  it('renders dogs', async () => {
    renderWithProviders(
      <BrowserRouter>
        <Medium />
      </BrowserRouter>,
    );
    const dog = await screen.findByText('border collie');
    expect(dog).toBeInTheDocument();
  });

  it('render dog image', async () => {
    renderWithProviders(
      <BrowserRouter>
        <Medium />
      </BrowserRouter>,
    );
    const image = await screen.findByAltText('border collie');
    expect(image.src).toContain('https://cdn2.thedogapi.com/images/sGQvQUpsp.jpg');
  });

  it('input works correctly', async () => {
    const user = userEvent.setup();
    renderWithProviders(
      <BrowserRouter>
        <Medium />
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
        <Medium />
      </BrowserRouter>,
    );
    const input = screen.getByPlaceholderText('Search breed here...');
    await user.type(input, 'border collie');
    const dog = await screen.findByText('border collie');
    expect(dog).toBeInTheDocument();
  });
});
