import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';
import { renderWithProviders } from '../Helpers/test-utils';
import '@testing-library/jest-dom';
import Large from './Large';

describe(Large, () => {
  it('renders the header', () => {
    renderWithProviders(
      <BrowserRouter>
        <Large />
      </BrowserRouter>,
    );
    const header = screen.getByRole('heading', { name: /All Large Breeds Here/i });
    expect(header).toBeInTheDocument();
  });
  it('renders dogs', async () => {
    renderWithProviders(
      <BrowserRouter>
        <Large />
      </BrowserRouter>,
    );
    const dog = await screen.findByText('rottweiler');
    expect(dog).toBeInTheDocument();
  });

  it('render dog image', async () => {
    renderWithProviders(
      <BrowserRouter>
        <Large />
      </BrowserRouter>,
    );
    const image = await screen.findByAltText('akbash dog');
    console.log(image);
    expect(image.src).toContain('https://cdn2.thedogapi.com/images/26pHT3Qk7.jpg');
  });

  it('input works correctly', async () => {
    const user = userEvent.setup();
    renderWithProviders(
      <BrowserRouter>
        <Large />
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
        <Large />
      </BrowserRouter>,
    );
    const input = screen.getByPlaceholderText('Search breed here...');
    await user.type(input, 'rottweiler');
    const dog = await screen.findByText('rottweiler');
    expect(dog).toBeInTheDocument();
  });
});
