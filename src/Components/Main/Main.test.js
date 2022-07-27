import { screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { renderWithProviders } from '../Helpers/test-utils';
import Main from './Main';
import '@testing-library/jest-dom';

describe(Main, () => {
  it('renders the component', () => {
    renderWithProviders(
      <BrowserRouter>
        <Main />
      </BrowserRouter>,
    );
    const header = screen.getByRole('heading', { name: /Search for your breed/i });
    expect(header).toBeInTheDocument();
  });
});
