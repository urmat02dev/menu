import React, {useState} from 'react';
import './Search.scss'
import {AiOutlineSearch} from "react-icons/ai";
import {useTranslation} from "react-i18next";
import {useDispatch, useSelector} from "react-redux";
import {PODCAST, SEARCH} from "../../../redux/Reducer/ActionTypes";
import {useNavigate} from "react-router-dom";
import {data} from "../../fake-backend/backend";
const Search = ({setModal,modal}) => {
  const {t} = useTranslation()
  const dispatch = useDispatch()
  const nav = useNavigate()
  const {search} = useSelector(s => s)
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


  const res = data.filter(el =>
      el => el.title.toLowerCase() === search.toLowerCase() || el.title_ru.toLowerCase() === search.toLowerCase() || el.title_kg.toLowerCase() === search.toLowerCase() )
  console.log(res.map(el => el.title))

  return (
      <div id='search'>
        <div className="container">
          <div className="search">
            <input type="text" onChange={(e) => {getSearch(e)}}
                   onKeyDown={(e) => getSearch(e)}
                   placeholder={t("search.placeholder")}/>
            <AiOutlineSearch className='icon' onClick={() => getSearchClick()}/>
            <ul className={"ul"}>
              {
                <li></li>
              }

            </ul>
          </div>
        </div>
      </div>
  );
};

export default Search;