import { render } from '@testing-library/react';
import App from './App';

test('renders intro page without crashing', () => {
  render(<App />);
});
