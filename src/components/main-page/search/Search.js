import React, {useState} from 'react';
import './Search.scss'
import {AiOutlineSearch} from "react-icons/ai";
import {useTranslation} from "react-i18next";
import {useDispatch} from "react-redux";
import {SEARCH} from "../../../redux/Reducer/ActionTypes";
import {useNavigate} from "react-router-dom";
const Search = () => {
  const {t} = useTranslation()
  const dispatch = useDispatch()
  const nav = useNavigate()
  const [value , setValue] = useState("")
  function getSearch (e) {
    setValue(e.target.value)
    if (value !== "") {
      if (e.key === "Enter") {
        dispatch({type: SEARCH, payload: value})
        nav("/search")
        e.target.value = ""

      }
    }


  }
  function getSearchClick () {
    if (value !== "") {
        dispatch({type: SEARCH, payload: value})
        nav("/search")
      }

  }
  return (
      <div id='search'>
        <div className="container">
          <div className="search">
            <input type="text" onChange={(e) => {getSearch(e)}}
                   onKeyDown={(e) => getSearch(e)}
                   placeholder={t("search.placeholder")}/>
            <AiOutlineSearch className='icon' onClick={() => getSearchClick()}/>
          </div>
        </div>
      </div>
  );
};

export default Search;