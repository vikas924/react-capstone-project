import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { navigation } from '../redux/itemDetail/itemSlice';

export default function List() {
  const curentstate = useSelector((state) => state.anime.animelist);
  const dispatch = useDispatch();

  const Handleclick = (e) => {
    const key = e.currentTarget.id;
    const index = e.currentTarget.getAttribute('indice');
    const item = curentstate[index];
    localStorage.setItem('key', JSON.stringify({ key, data: item }));
    dispatch(navigation({ key, data: item }));
  };

  const item = curentstate.map((current, index) => {
    let title = current.titles;
    if (title.length > 20) {
      title = title.substr(0, 20).concat('...');
    }
    return (
      <Link key={current.id} to={`/items/${current.id}`} data-testid="animelist" indice={index} className="link" id={current.id} onClick={(e) => (Handleclick(e))}>
        <div className="animeitem">
          <img src={`${current.images.webp.large_image_url}`} className="listimg" alt="animeimage" />
          <h3>
            {title}
          </h3>
          <p>
            Score
            <span>:</span>
            {current.score}
          </p>
        </div>
      </Link>
    );
  });
  return (
    <>
      {item}
    </>
  );
}
