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
            {` ${currentstate.details.aired.string}`}
          </li>
          <li className="itemli">
            Rating :
            {` ${currentstate.details.rating}`}
          </li>
          <li className="itemli">
            Rank :
            {` ${currentstate.details.rank}`}
          </li>
          <li className="itemli">
            Score :
            {` ${currentstate.details.score}`}
          </li>
          <li className="itemli">
            Status :
            {` ${currentstate.details.status}`}
          </li>
        </ul>
      </div>
    </>
  );
}
