import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchanime, filtergenre, searchanime } from '../redux/animelist/animeSlice';
import List from './homelist';
import Browsepages from './browsenext';

export default function Home() {
  const curentstate = useSelector((state) => state.anime);
  const pages = (localStorage.getItem('data')) ? localStorage.getItem('data') : curentstate.pages;
  const selected = (localStorage.getItem('id')) ? localStorage.getItem('id') : curentstate.id;

  let url = `https://api.jikan.moe/v4/anime?page=${pages}&&limit=24`;

  if (curentstate.search !== '') {
    url = `https://api.jikan.moe/v4/anime?page=${pages}&&limit=24&&q=${curentstate.search}`;
  } else if (curentstate.selected !== 0) {
    url = `https://api.jikan.moe/v4/anime?page=${pages}&&limit=24&&genres=${selected}`;
  } else {
    url = `https://api.jikan.moe/v4/anime?page=${pages}&&limit=24`;
  }

  const dispatch = useDispatch();

  const Handlechange = (e) => {
    const selectedOption = e.target.options[e.target.selectedIndex];
    const id = selectedOption.getAttribute('id');
    localStorage.setItem('id', id);
    dispatch(filtergenre(id));
  };

  const Search = (e) => {
    const searchvalue = e.target.value;
    dispatch(searchanime(searchvalue));
  };

  useEffect(() => {
    dispatch(fetchanime(url));
  }, [url, dispatch]);

  return (
    <>
      <div className="browseanime">
        <div className="searchContainer">
          <h2>Browse Anime</h2>
          <input name="search" className="search" placeholder="Search" onChange={(e) => (Search(e))} onFocus={(e) => (Search(e))} aria-label="Searchinput" />
          <h2>Genre</h2>
          <select className="selectbox" data-custom-attribute="some-value" onChange={(e) => (Handlechange(e))}>
            {curentstate.genrelist.map((option) => (
              <option
                key={option.id}
                id={option.id}
                className="options"
              >
                {option.genre}
              </option>
            ))}
          </select>
        </div>
        <div className="animelist">
          <List />
        </div>
      </div>
      <div className="movenext">
        <ul>
          <Browsepages />
        </ul>
      </div>
    </>
  );
}
