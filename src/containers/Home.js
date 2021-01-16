import React, { useEffect } from 'react';
import InfoSummary from '../components/InfoSummary/InfoSummary';
import Country from '../components/Country/Country';
import { Divider } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import { useFetchData } from '../action';
import './Home.css';

const Home = () => {
    const [dataGlobal, apiMethod] = useFetchData();

    useEffect(() => {
        apiMethod()
    }, [])

    if (dataGlobal.data === null) {
        return (
            <div className="loading_page">
                <div className="loading_wrap">
                    <p>Loading</p>
                    <LoadingOutlined />
                </div>
            </div>
        )
    }

    return (
        <div className="page-wrap">
            <InfoSummary dataGlobal={dataGlobal.data.Global}/>

            <Divider />

            <Country listCountry={dataGlobal.data.Countries}/>
        </div>
    );
}

export default React.memo(Home);
