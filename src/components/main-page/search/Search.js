import React from 'react';
import './Search.scss'
import {AiOutlineSearch} from "react-icons/ai";
import {useTranslation} from "react-i18next";
const Search = () => {
  const {t} = useTranslation()
  return (
      <div id='search'>
        <div className="container">
          <div className="search">
            <input type="text" placeholder={t("search.placeholder")}/>
            <AiOutlineSearch className='icon'/>
          </div>
        </div>
      </div>
  );
};

export default Search;