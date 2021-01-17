import { render } from '@testing-library/react';
import InfoSummary from './InfoSummary';

test('should render InfoSummary component', () => {
    const data = {ID: 1, NewConfirmed: 10, NewDeaths: 2, NewRecovered: 7, TotalConfirmed: 931366, TotalDeaths: 19908, TotalRecovered: 510651};
    const { getByText } = render(<InfoSummary dataGlobal={data} />);

    const title = getByText(/Information of covid-19 in the world/i);
    expect(title).toBeDefined();
});
