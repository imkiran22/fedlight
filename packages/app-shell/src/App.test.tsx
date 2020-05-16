import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  const { container, baseElement } = render(<App />);
  expect(container.firstChild?.firstChild?.textContent).toEqual('Welcome to MonoRepos');
});
