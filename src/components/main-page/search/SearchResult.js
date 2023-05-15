import React, {useState} from 'react';
import {useSelector} from "react-redux";
import Header from "../../header/Header";
import {data} from "../../fake-backend/backend";

import FoodCard from "../foods/FoodCard";
import "./SearchResult.scss"
import Search from "./Search";
import {useTranslation} from "react-i18next";
import Card from "./Card";

const SearchResult = () => {
    const {t} = useTranslation()
  const {search} = useSelector(s => s)
  const [modal , setModal] = useState(false)
  const res = data.filter(el  => el.title.toLowerCase() === search.toLowerCase() || el.title_ru.toLowerCase() === search.toLowerCase() || el.title_kg.toLowerCase() === search.toLowerCase() )
  return (
    <>
      <Header/>
      <Search />
        <div className="container">
            {
                res.length ?
                    res.map( el => {
                        return <Card el={el} setModal={setModal}
                                         modal={modal}/>
                    })

                : <div className={"error"}>
                     <div className={"error--title"}>
                         <h1>"{search}"</h1>
                         <p>- {t("search.error")}</p>
                     </div>
                    </div>


            }
        </div>

    </>

  );
};

export default SearchResult;