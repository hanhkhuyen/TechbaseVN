import { render } from '@testing-library/react';
import ModalDetail from './ModalDetail';

test('should render ModalDetail component', () => {
    const visible = true;
    const infoDetail = [{Cases: 1537, Country: "Viet Nam", Date: "2021-01-17T00:00:00Z", Status: "confirmed"}];
    const status = 'confirmed';
    const selectCountry = 'Viet Nam';
    const onCancel = () => {visible = false}
    
    const { getByText } = render(<ModalDetail visible={visible} status={status} selectCountry={selectCountry} infoDetail={infoDetail} onCancel={onCancel}/>);

    const title = getByText(/Number of people/i);
    expect(title).toBeDefined();
});
