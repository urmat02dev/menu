import React, {useState} from 'react';
import {useSelector} from "react-redux";
import Header from "../../header/Header";
import {data} from "../../fake-backend/backend";
import {all} from "axios";
import {logDOM} from "@testing-library/react";

import FoodCard from "../foods/FoodCard";
import "./SearchResult.scss"
import Search from "./Search";
import modal from "../../modal/Modal";

const SearchResult = () => {
  const {search} = useSelector(s => s)
  const [modal , setModal] = useState(false)
  const res = data.map(el =>
    el.filter(el => el.title.toLowerCase() === search.toLowerCase() || el.title_ru.toLowerCase() === search.toLowerCase() || el.title_kg.toLowerCase() === search.toLowerCase() ))
  return (
    <>
      <Header/>
      <Search />
        <div className="container">
            {
                res.map(el => el.map(el => {
                    return <FoodCard el={el} setModal={setModal}
                    modal={modal}/>
                }))
            }
        </div>

    </>

  );
};

export default SearchResult;