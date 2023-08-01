import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchanime } from '../redux/animelist/animeSlice';

export default function Header() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchanime());
  }, [dispatch]);

  return (
    <>
      <header className="header">
        <h1>hello</h1>
        <nav className="navbar" />
      </header>
    </>
  );
}
