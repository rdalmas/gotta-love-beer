import React from 'react';
import { render } from '@testing-library/react';
import BeerList from './BeerList';

test('renders learn react link', () => {
  const { getByText } = render(<BeerList />);
  const linkElement = getByText("Beers");
  expect(linkElement).toBeInTheDocument();
});
