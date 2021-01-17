import React, {useState, useEffect} from 'react';
import { Menu, Dropdown, Button, Table, Alert } from 'antd';
import ModalDetail from '../ModalDetail/ModalDetail';
import { DownOutlined } from '@ant-design/icons';
import './Country.css';
import 'antd/dist/antd.css';

const Country = (props) => {
  const {
    listCountry,
  } = props
  const [selectCountry, setSelectCountry] = useState(null)
  const [countryInfo, setCountryInfo] = useState(null)
  const [visible, setVisible] = useState(false)
  const [infoDetail, setInfoDetail] = useState(null)
  const [status, setStatus] = useState(null)

  useEffect(() => {
    if (selectCountry === null) return

    setInfoDetail(null)
    return setCountryInfo(listCountry.filter(e => e.Country === selectCountry))
  }, [selectCountry, listCountry])

  const menu = (
    <Menu>
      {listCountry && listCountry.map(country => {
        return (
          <Menu.Item key={`country_${country.ID}`} onClick={() => setSelectCountry(country.Country)}> 
              {country.Country}
            </Menu.Item>
          )
        })
      }
    </Menu>
  );

  const onhandleDetail = (status, type) => {
    fetch(`https://api.covid19api.com/dayone/country/${selectCountry}/status/${status}`, {
      method: "GET",
      headers: {
        "Authorization": "Bearer",
        "Content-Type": "application/json; charset=UTF-8",
      },
      mode: "cors",
    })
    .then(response => response.json())
    .then(response => {
      if (response?.message === 'Not Found') return setInfoDetail(response?.message)

      if (type === 'new') {
        setInfoDetail([response[response.length - 1]])
      } else {
        setInfoDetail(response)
      }
      setVisible(true)
      setStatus(status)
    })
    .catch(error => {
      console.log(error)
    });
  }

  const columns = [
    {
      title: 'New Confirmed',
      dataIndex: 'NewConfirmed',
      key: 'NewConfirmed',
      render: number => <a href="#" onClick={() => onhandleDetail('confirmed', 'new')}>{number}</a>,
    },
    {
      title: 'New Deaths',
      dataIndex: 'NewDeaths',
      key: 'NewDeaths',
      render: number => <a href="#" onClick={() => onhandleDetail('deaths', 'new')}>{number}</a>,
    },
    {
      title: 'New Recovered',
      dataIndex: 'NewRecovered',
      key: 'NewRecovered',
      render: number => <a href="#" onClick={() => onhandleDetail('recovered', 'new')}>{number}</a>,
    },
    {
      title: 'Total Confirmed',
      dataIndex: 'TotalConfirmed',
      key: 'TotalConfirmed',
      render: number => <a href="#" onClick={() => onhandleDetail('confirmed', 'total')}>{number}</a>,
    },
    {
      title: 'Total Deaths',
      dataIndex: 'TotalDeaths',
      key: 'TotalDeaths',
      render: number => <a href="#" onClick={() => onhandleDetail('deaths', 'total')}>{number}</a>,
    },
    {
      title: 'Total Recovered',
      dataIndex: 'TotalRecovered',
      key: 'TotalRecovered',
      render: number => <a href="#" onClick={() => onhandleDetail('recovered', 'total')}>{number}</a>,
    },
  ];

  const onClose = () => {
    setVisible(false)
    setInfoDetail(null)
  }

  return (
    <React.Fragment>
      <div className="list_country">
        <h2>Information of covid-19 in </h2>
        <Dropdown 
          overlay={menu} 
          trigger={['click']}
          overlayClassName="list-country-dropdown"
        >
          <Button>
            {selectCountry === null ? 'Choose Country' : selectCountry}
            <DownOutlined />
          </Button>
        </Dropdown>
      </div>

      {countryInfo !== null &&
        <div className="country_detail">
          <Table columns={columns} dataSource={countryInfo} pagination={false} rowKey="ID" />
          <div className="note">* Click the number to see more details</div>
        </div>
      }

      {infoDetail === 'Not Found' && <Alert message="Something went wrong." type="error" />}

      {visible && infoDetail !== null && <ModalDetail 
        visible={visible}
        onCancel={onClose}
        infoDetail={infoDetail}
        status={status}
        selectCountry={selectCountry}
      />}
    </React.Fragment>
  );
}

export default React.memo(Country);
