import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { browsepages } from '../redux/animelist/animeSlice';

export default function Browsepages() {
  const currentstate = useSelector((state) => state.anime);

  const dispatch = useDispatch();

  const handleclick = (e) => {
    const data = e.target.innerHTML;
    localStorage.setItem('data', data);
    dispatch(browsepages(data));
  };
  let array = [];
  let second = [];
  if (currentstate.current < 7) {
    array = [1, 2, 3, 4, 5, 6, 7, 8, currentstate.total];
    second = array.map((item) => <button type="button" key={item} onFocus={(e) => (handleclick(e))}>{item}</button>);
    return second;
  } if ((currentstate.current >= 7) && (currentstate.current < currentstate.total - 6)) {
    let count = currentstate.current - 3;
    let i = 0;
    while (i < 10) {
      if (i === 0) {
        array[i] = 1;
      } else if (i === 9) {
        array[i] = currentstate.total;
      } else {
        array[i] = count;
        count += 1;
      }
      i += 1;
    }
    second = array.map((item) => <button type="button" key={item} onFocus={(e) => (handleclick(e))}>{item}</button>);
    return second;
  } if ((currentstate.current >= currentstate.total - 6)) {
    let count = currentstate.total - 8;
    let i = 0;
    while (i < 10) {
      if (i === 0) {
        array[i] = 1;
      } else if (i === 9) {
        array[i] = currentstate.total;
      } else {
        array[i] = count;
        count += 1;
      }
      i += 1;
    }
    second = array.map((item) => <button type="button" key={item} onFocus={(e) => (handleclick(e))}>{item}</button>);
    return second;
  }

  return (
    <>
      {second}
    </>
  );
}
