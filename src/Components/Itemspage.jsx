import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchdetails } from '../redux/itemDetail/itemSlice';
import Itemdetails from './Item';
import Genre from './genre';

export default function Items() {
  const curentstate = useSelector((state) => state.animebyid);
  const dispatch = useDispatch();
  const key = (curentstate.id !== '') ? curentstate.id : localStorage.getItem('key');

  const url = `https://api.jikan.moe/v4/anime/${key}`;

  useEffect(() => {
    dispatch(fetchdetails(url));
  }, [url, dispatch]);

  return (
    <>
      { (!curentstate.isLoading) && (
      <div className="itempageContainer">
        <div className="itemContainer">
          <img className="itemimage" src={`${curentstate.details.data.images.webp.large_image_url}`} alt="detailpageimg" />
          <div className="inneritempagediv">
            <h2 data-testid="title">{curentstate.details.data.title}</h2>
            <h3>Synopsis</h3>
            <p>{curentstate.details.data.synopsis}</p>
            <ul>
              {curentstate.details.data.genres.map((item) => (
                <Genre key={item.name} genres={item.name} />))}
            </ul>
          </div>
        </div>
        {(curentstate.details.data.trailer.embed_url)
        && (
        <div className="video-responsive">
          <iframe
            width="853"
            height="480"
            src={curentstate.details.data.trailer.embed_url}
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Embedded youtube"
          />
        </div>
        )}
        <Itemdetails />
      </div>
      )}
    </>
  );
}
