import React, {useEffect, useState} from 'react';
import {useSelector} from "react-redux";
import Header from "../../header/Header";
import "./SearchResult.scss"
import Search from "./Search";
import {useTranslation} from "react-i18next";
import Card from "./Card";
import foods from "../foods/Foods";
import Modal from "../../modal/Modal";
import ModalSearch from "../../modal/modalSearch";
import {parametr} from "../../starts/random";
import {useNavigate, useParams} from "react-router-dom";

const SearchResult = () => {
    const {t} = useTranslation()
    const nav = useNavigate()
    const {id} = useParams()
    const {search,foods} = useSelector(s => s)
  const [modal , setModal] = useState(false)
  const res = foods.filter(el  => el.name_ru.toLowerCase() === search.toLowerCase() || el.name_en.toLowerCase() === search.toLowerCase() || el.name_kg.toLowerCase() === search.toLowerCase() )
    function getNAv() {
        if (search === "") {
            nav(`/${id}/main`)
        }
    }
    useEffect(() => {
        getNAv()
    })
  return (
    <>
      <Header/>
      <Search />
        <ModalSearch/>
        <div className="container">
            {
                res.length ?
                    res.map( el => {
                        return <Card el={el} setModal={setModal}
                                         modal={modal} key={el.id}/>
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