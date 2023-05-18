import React, {useState} from 'react';
import './Search.scss'
import {AiOutlineSearch} from "react-icons/ai";
import {useTranslation} from "react-i18next";
import {useDispatch, useSelector} from "react-redux";
import { SEARCH} from "../../../redux/Reducer/ActionTypes";
import {useNavigate} from "react-router-dom";
import {data} from "../../fake-backend/backend";
import {HiOutlineSearch} from "react-icons/hi";
const Search = ({setModal,modal}) => {
  const {t} = useTranslation()
  const lang = localStorage.getItem("i18nextLng")

  const dispatch = useDispatch()
  const nav = useNavigate()
  const {search,foods} = useSelector(s => s)
  const [value , setValue] = useState("")
  function getSearch (e) {
    setValue(e.target.value.toLowerCase())
    console.log(e.target.value.toLowerCase())
    if (value !== "") {
      if (e.key === "Enter") {
        dispatch({type: SEARCH, payload: value})
        nav("/search")
        e.target.value = ""
      }
    }
  }


  const getTitle = (el) => {
    if (lang === "en") {
      return el.name_en
    } else if (lang === "ru") {
      return el.name_ru
    } else if (lang === "kg") {
      return el.name_kg
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
            <input value={value} type="text" onChange={(e) => {getSearch(e)}}
                   onKeyDown={(e) => getSearch(e)}
                   placeholder={t("search.placeholder")}/>
            <AiOutlineSearch className='icon' onClick={() => getSearchClick()}/>
            {
              value !== "" &&
                <div className="search--block">
            {
              foods.map(el => (
                  <div>
                    {
                      value !=="" && <div className={"search--block__modal"}>{el.name_kg.toLowerCase().includes(value) || el.name_ru.toLowerCase().includes(value) ||  el.name_en.toLowerCase().includes(value) ?
                            <p onClick={() =>  {
                          dispatch({type: SEARCH, payload: el.name_ru.toLowerCase() || el.name_kg.toLowerCase() || el.name_en.toLowerCase()})
                          nav(`/search`)
                          setValue("")
                        }}> <HiOutlineSearch className="p-ic"/> {getTitle(el)}</p> : false}</div>
                    }
                  </div>
              ))
            }
            </div>
            }

          </div>
        </div>
      </div>
  );
};

export default Search;