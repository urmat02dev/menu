import React from 'react';
import {BiBasket} from "react-icons/bi";
import {useTranslation} from "react-i18next";
import {GET_BASKET, GET_DETAIL, MODAL} from "../../../redux/Reducer/ActionTypes";
import {useDispatch, useSelector} from "react-redux";
import { useNavigate} from "react-router-dom";
import "./FoodPage.scss"
import {BsBasket3Fill} from "react-icons/bs";
import axios from "axios";


const FoodPage = ({el}) => {
    const {t } = useTranslation()
    const nav = useNavigate()
    const {basket} = useSelector(state => state)
    const lang = localStorage.getItem("i18nextLng")
    const foundProduct = basket.some(e => e.dish.id === el.id)
  

    const [back , setBack] = useState([])
    const foundProduct = basket.some(e => e.id === el.id)
    const getTitle = (el) => {
        if (lang === "en"){
            return el.name_en
        }
        else if (lang === "ru"){
            return el.name_ru
        }
        else if (lang === "kg"){
            return el.name_kg
        }
    }
    function getDesc(el) {
        if (lang === "en"){
            return el.description_en.slice(0,30)
        }
        else if (lang === "ru"){
            return el.description_ru.slice(0,30)
        }
        else if (lang === "kg"){
            return el.description_kg.slice(0,30)
        }
    }
    const dispatch = useDispatch()
    function getWindow (el) {
                if (!foundProduct){
                    dispatch({type:MODAL,payload:true}) && dispatch({type: GET_DETAIL,payload:el})
                }
        }

    function getBasket (el) {
        dispatch({type:GET_BASKET, payload : el})
    }
useEffect(() => {
  
},[foundProduct])

    return (
        <div className="foods--one" key={el.id}>
            <img src={el.image} alt="" onClick={() =>  getWindow(el)}/>
            <h3>{getTitle(el)}</h3>
            <p>{getDesc(el)}</p>
            <div className='foods--one__basket'>
                <h3>{el.price}c</h3>
                {
                    foundProduct ?
                        <div onClick={() => nav("/basket")} className="foods--one__basket--icon"><BsBasket3Fill/></div>
                        :<div className="foods--one__basket--icon" onClick={() => getBasket(el)}>
                        <BiBasket className='icon'/>
                        </div>
                }

            </div>
        </div>
    );
};

export default FoodPage;