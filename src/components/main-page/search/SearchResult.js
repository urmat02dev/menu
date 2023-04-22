import React from 'react';
import {useSelector} from "react-redux";
import Header from "../../header/Header";
import {data} from "../../fake-backend/backend";
import {all} from "axios";
import {logDOM} from "@testing-library/react";
import SearchCard from "./SearchCard";
import FoodCard from "../foods/FoodCard";
import "./SearchResult.scss"
import Search from "./Search";

const SearchResult = () => {
  const {search} = useSelector(s => s)
  const res = data.map(el => el.filter(el => el.title === search || el.title_ru === search || el.title_kg === search ))
  return (
    <>
      <Header/>
      <Search/>
        <div className="container">
            {
                res.map(el => el.map(el => {
                    return <FoodCard el={el}/>
                }))
            }
        </div>

    </>

  );
};

export default SearchResult;