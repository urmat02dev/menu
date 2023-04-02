import React from 'react';
import './Search.scss'
import {AiOutlineSearch} from "react-icons/ai";
const Search = () => {
  return (
      <div id='search'>
        <div className="container">
          <div className="search">
            <input type="text" placeholder='Поиск'/>
            <AiOutlineSearch className='icon'/>
          </div>
        </div>
      </div>
  );
};

export default Search;