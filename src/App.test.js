import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderWithProviders } from './Components/Helpers/test-utils';
import App from './App';
import '@testing-library/jest-dom';

describe(App, () => {
  it('renders app coponents', () => {
    renderWithProviders(<App />);
    const appMainTitle = screen.getByRole('heading', { name: /Search For Your Breed/i });
    expect(appMainTitle).toBeInTheDocument();
  });

  it('when user clicks on any breed size APP renders breeds of that size', async () => {
    const user = userEvent.setup();
    renderWithProviders(<App />);
    const sizeSelector = screen.getByText('Large');
    await user.click(sizeSelector);
    const largeDog = await screen.findByText('rottweiler');
    expect(largeDog).toBeInTheDocument();
    await user.click(largeDog);
    const information = await screen.findByText('Height in inches');
    expect(information).toBeInTheDocument();
    const correctInfo = await screen.findByText('from 22 inches to 27 inches');
    expect(correctInfo).toBeInTheDocument();
  });
});
