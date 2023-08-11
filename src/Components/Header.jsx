import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FiMenu } from 'react-icons/fi';
import { AiOutlineSetting, AiOutlineLeft } from 'react-icons/ai';
import { BiMicrophone } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import { Home } from '../redux/itemDetail/itemSlice';

export default function Header() {
  const currentstate = useSelector((state) => state.animebyid);
  const dispatch = useDispatch();

  const Handleclick = (e) => {
    e.stopPropagation();
    dispatch(Home());
  };
  return (
    <>
      <header className="header">
        {(currentstate.navigation === 'homepage') ? <FiMenu className="navicon" /> : <Link to="/"><AiOutlineLeft className="navicon" onClick={Handleclick} /></Link> }
        <h1>
          <span className="title-span">
            Ani
          </span>
          me-Book

        </h1>
        <div className="icons">
          <BiMicrophone data-testid="icon" className="navicon" />
          <AiOutlineSetting className="navicon" />
        </div>
      </header>
    </>
  );
}
