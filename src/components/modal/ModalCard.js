import React from 'react';
import "./ModalCard.scss"
import {
    ADD,
    MODAL,
    MODAL_MINUS,
    MODAL_PLUS,
    MODAL_TO_BASKET, MODAL_TO_PRICE,
} from "../../redux/Reducer/ActionTypes";
import {useDispatch, useSelector} from "react-redux";
import {BiBasket} from "react-icons/bi";
import {useNavigate} from "react-router-dom";
import {BsBasket3Fill} from "react-icons/bs";
import {AiOutlineMinus, AiOutlinePlus} from "react-icons/ai";
import {useTranslation} from "react-i18next";


const ModalCard = ({el}) => {
    const dispatch = useDispatch()
    const nav = useNavigate()
    const {basket, add} = useSelector(state => state)
    const found = basket.some(e => e.id === el.id)
    const lang = localStorage.getItem("i18nextLng")
    const {t} = useTranslation()
    const getAdd = (a) => {
        const found = el.add.find(el => el.id)

        dispatch({type: ADD, payload: a})
    }
    const getBasket = (el) => {
        if (el.add.length) {
            dispatch({type: MODAL_TO_PRICE, payload: el})
            window.scrollTo({
                top: "0"
            })
        } else {
            let item = []
            let basket = JSON.parse(localStorage.getItem("backend")) || []
            basket = [...basket, {...el, quantity: el.quantity, price: el.price, add: el.add}]
            localStorage.setItem("backend", JSON.stringify(basket))
            dispatch({type: MODAL_TO_BASKET, payload: el})
            window.scrollTo({
                top: "0"
            })
        }


    }
    const getMinus = (el) => {
        dispatch({type: MODAL_MINUS, payload: el})
    }
    const getPlus = (el) => {
        dispatch({type: MODAL_PLUS, payload: el})
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
    const getAddTitle = (el) => {
        if (lang === "en") {
            return `(${el.name_en})`
        } else if (lang === "ru") {
            return `(${el.name_ru})`
        } else if (lang === "kg") {
            return `(${el.name_kg})`
        }
    }

    function  getDesc(el) {
        if (lang === "en") {
            return <p>{el.description_en.length >20 ? <p>{el.description_en.slice(0,el.description_en.length/2)} <br/>{el.description_en.slice(el.description_en.length/2, el.description_en.length)}
            </p> : <p>{el.description_en}</p> }
            </p>
        } else if (lang === "ru") {
            return  <p>{el.description_ru && el.description_ru.length >20 ? <p>{el.description_ru.slice(0,25)} <br/>{el.description_ru.slice(25, el.description_ru.length)}
            </p> : <p>{el.description_ru && el.description_ru.slice(0,30)}</p> }
            </p>
        } else if (lang === "kg") {
            return  <p>{el.description_kg.length >20 ? <p>{el.description_kg.slice(0,el.description_kg.length/2)} <br/>{el.description_kg.slice(el.description_kg.length/2, el.description_kg.length)}
            </p> : <p>{el.description_kg}</p> }
            </p>
        }
    }
    const getGram = (el) => {
      if (el.gram * el.quantity >= 1000){
          if (el.category_name === "Горячие напитки" ||  el.category_name === "Холдные"){
              return (el.gram / 1000) * el.quantity + "л"
          }
          else return (el.gram /1000) * el.quantity  + "кг"
      }
      else if (el.gram === ""){
          return ""
      }
      else return  el.gram * el.quantity + "г"
    }

    const total = el.add && el.add.reduce((acc, e) => {
        return acc + e.price
    }, 0)
    const title = el.add && el.add.map(el => getAddTitle(el))
    return (
        <>
            <div className={"modal--img"}>
                <img src={el.image} alt=""/>
            </div>
            <div className="modal--desc">
                <div className="modal--desc--add">
                    {
                        el.add ? <p className={"title"}>{getTitle(el)} <span
                                className={"added"}>{title.length ? "+" : ""} {title}</span></p>
                            : <p className={"title"}>{getTitle(el)}</p>
                    }
                </div>
                <div style={{width:"200px" , fontSize:"15px"}}>{getDesc(el)}</div>
                <div className="modal--desc__price">
                    <h5>Цена:<span>{el.add && el.add.length ? total + el.price * el.quantity : el.price * el.quantity}c</span>
                    </h5>
                    <h4>{getGram(el) }</h4>
                </div>
            </div>
            <div className="modal--additives">
                {
                    el.available_additives &&
                    el.available_additives.map(a => (
                        <div key={a.id}>
                            {
                                <button key={a.id}
                                        className={el.add.some(el => el.id === a.id) ? "added" : "add"}
                                        onClick={() => getAdd(a)}>
                                    {getTitle(a)}
                                </button>


                            }

                        </div>
                    ))
                }
            </div>
            <div className="modal--basket">
                {
                    found ?
                        <div className="basket"
                             onClick={() => nav("/basket") || dispatch({type: MODAL, payload: false})}>
                            <h1 className='basket--were'>{t("detail.to_basket")}</h1>
                            <div className="icon-block">
                                <div className="icon-block--icon"><BsBasket3Fill className='icon'/></div>
                            </div>
                        </div>
                        :
                        <div className="basket" onClick={() => getBasket(el)}>
                            <h1 className='basket--were'>{t("detail.add")}</h1>
                            <div className="icon-block">
                                <div className="icon-block--icon">
                                    <BiBasket className='icon'/></div>
                            </div>
                        </div>
                }
                <div className="count">
                    <span style={{}}
                          onClick={() => getMinus(el)}><AiOutlineMinus className={"ico"} style={{
                        color: `${el.quantity > 1 ? "" : "rgba(10,10,10,0.39)"}`
                    }}/></span>
                    <p>{el.quantity}</p>
                    <span onClick={() => getPlus(el)}><AiOutlinePlus className={"ico"}/></span>
                </div>
            </div>
        </>
    );
};

export default ModalCard;