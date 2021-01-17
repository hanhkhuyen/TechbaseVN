import { render, screen } from '@testing-library/react';
import Country from './Country';
import userEvent from '@testing-library/user-event';

test('should render Country component', () => {
  const countries = [{ ID: 1, Country: 'Viet Nam' }];
  const { getByText } = render(<Country listCountry={countries} />);

  const title = getByText(/Information of covid-19 in/i);
  expect(title).toBeDefined();
});

test('should render Select Country Button', () => {
  const countries = [{ ID: 1, Country: 'Viet Nam' }];
  const { getByText } = render(<Country listCountry={countries} />);

  const selectCountryBtn = getByText(/Choose Country/i);
  expect(selectCountryBtn).toBeDefined();
  userEvent.click(selectCountryBtn);
  const selectCountryDropdown = screen.getByText('Viet Nam');
  expect(selectCountryDropdown).not.toBeNull();
});
