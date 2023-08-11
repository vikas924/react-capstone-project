import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Genre from './genre';
import { navigation } from '../redux/itemDetail/itemSlice';
import Itemdetails from './Item';

export default function Items() {
  const curentstate = useSelector((state) => state.animebyid);
  const json = JSON.parse(localStorage.getItem('key'));
  const dispatch = useDispatch();
  const key = (curentstate.id !== '') ? curentstate.id : json.key;
  const data = (curentstate.id !== '') ? curentstate.details : json.data;

  useEffect(() => {
    if (curentstate.details === null) {
      dispatch(navigation({ key, data }));
    }
  }, [curentstate.details, key, data, dispatch]);

  return (
    <>
      {(!curentstate.isLoading) && (
      <div className="itempageContainer">
        <div className="itemContainer">
          <img className="itemimage" src={`${curentstate.details.images.webp.large_image_url}`} alt="detailpageimg" />
          <div className="inneritempagediv">
            <h2 data-testid="title">{curentstate.details.titles}</h2>
            <h3>Synopsis</h3>
            <p>{curentstate.details.synopsis}</p>
            <ul>
              {curentstate.details.genres.map((item) => (
                <Genre key={item.name} genres={item.name} />))}
            </ul>
          </div>
        </div>
        {(curentstate.details.trailer.embed_url)
        && (
        <div className="video-responsive">
          {curentstate.details.trailer.embed_url && (
          <iframe
            width="853"
            height="480"
            src={curentstate.details.trailer.embed_url}
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Embedded youtube"
          />
          )}

        </div>
        )}
        <Itemdetails />
      </div>
      )}
    </>
  );
}
