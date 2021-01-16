import React from 'react';
import './InfoSummary.css';

const InfoSummary = (props) => {
  const {
    dataGlobal
  } = props
  return (

    <div className="info_in-the-world">
      <h2>Information of covid-19 in the world</h2>
      <ul>
        <li>New number of people comfirmed: <b>{dataGlobal?.NewConfirmed}</b> </li>
        <li>New number of deaths: <b>{dataGlobal?.NewDeaths}</b> </li>
        <li>New number of people recovered: <b>{dataGlobal?.NewRecovered}</b> </li>
        <li>Total number of people comfirmed: <b>{dataGlobal?.TotalConfirmed}</b> </li>
        <li>Total number of deaths: <b>{dataGlobal?.TotalDeaths}</b> </li>
        <li>Total number of people recovered: <b>{dataGlobal?.TotalRecovered}</b> </li>
      </ul>
    </div>
  );
}

export default React.memo(InfoSummary);
