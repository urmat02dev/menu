import React, {useState} from 'react';
import {useSelector} from "react-redux";
import Header from "../../header/Header";
import "./SearchResult.scss"
import Search from "./Search";
import {useTranslation} from "react-i18next";
import Card from "./Card";
import foods from "../foods/Foods";

const SearchResult = () => {
    const {t} = useTranslation()
  const {search,foods} = useSelector(s => s)
  const [modal , setModal] = useState(false)
  const res = foods.filter(el  => el.name_ru.toLowerCase() === search.toLowerCase() || el.name_en.toLowerCase() === search.toLowerCase() || el.name_kg.toLowerCase() === search.toLowerCase() )
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