import { render, screen } from '@testing-library/react';
import App from './index';
import { Provider } from 'react-redux';
import { store } from '../../store';

test('renders learn react link', () => {
  render(
    <Provider store={store}>
        <App />
    </Provider>
  );
  const linkElement = screen.getByText(/ApiTest/i);
  expect(linkElement).toBeInTheDocument();
});