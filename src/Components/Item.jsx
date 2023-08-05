import React from 'react';
import { useSelector } from 'react-redux';

export default function Itemdetails() {
  const currentstate = useSelector((state) => state.animebyid);

  return (
    <>
      <div className="data">
        <ul className="itemul">
          <li className="itemli">
            Aired :
            {` ${currentstate.details.data.aired.string}`}
          </li>
          <li className="itemli">
            Rating :
            {` ${currentstate.details.data.rating}`}
          </li>
          <li className="itemli">
            Rank :
            {` ${currentstate.details.data.rank}`}
          </li>
          <li className="itemli">
            Score :
            {` ${currentstate.details.data.score}`}
          </li>
          <li className="itemli">
            Status :
            {` ${currentstate.details.data.status}`}
          </li>
        </ul>
      </div>
    </>
  );
}
