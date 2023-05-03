import {
    AiOutlineArrowRight,
    AiOutlineClose,
    AiOutlineMinus,

    AiOutlinePlus
} from "react-icons/ai";
import {useNavigate, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {BiBasket} from "react-icons/bi";
import {
    GET_BASKET,
    GET_MODAL,
    MINUS, MODAL, MODAL_MINUS, MODAL_PLUS,
    PLUS
} from "../../redux/Reducer/ActionTypes";
import {BsBasket, BsBasket3Fill} from "react-icons/bs";
import {IoMdClose} from "react-icons/io";
import React, {useEffect} from "react";
import "./Modal.scss"
import {data} from "../fake-backend/backend";
import FoodCard from "../main-page/foods/FoodCard";
import ModalCard from "./ModalCard";

const Modal = ({modal,setModal}) => {
    const basket = useSelector(state => state.basket)
    let baskets = JSON.parse(localStorage.getItem("basket")) || []

    const {id} = useParams()
    const detail = data.filter(el => el.id === id)
    console.log(detail)
    const nav = useNavigate()
    const dispatch = useDispatch()
    const lang = localStorage.getItem("i18nextLng")
    // function getTitle () {
    //     if (lang === "en"){
    //         return <h1>{title}</h1>
    //     }
    //     if (lang === "ru"){
    //         return <h1>{title_ru}</h1>
    //     }
    //     if (lang === "kg"){
    //         return <h1>{title_kg}</h1>
    //     }
    // }
    // function getDesc () {
    //     if (lang === "en"){
    //         return <p>{desc}</p>
    //     }
    //     if (lang === "ru"){
    //         return <p>{desc_ru}</p>
    //     }
    //     if (lang === "kg"){
    //         return <p>{desc_kg}</p>
    //     }
    // }
    const getClose = async () => {
        dispatch({type:MODAL,payload:false})
        nav("/main")
    }
  return (
      <>
      <div id={"modal"} style={{
          display:detail.id ? "flex":  "none"
      }} onClick={() => getClose()}/>
          <div className="container">
              <div className="modal"  style={{
                  display:detail.id ? "flex":  "none"
              }}>

                      <div className="modals">
                          <div className="close" onClick={() => getClose()}>
                              <IoMdClose className={"icon"}/>
                          </div>
                          {
                              detail.map(el => {
                                  return <div className={"modals--img"}>
                                          <img src={el.image} alt=""/>
                                      </div>

                              })
                          }

                }}>

                    <div className="modals">
                        <div className="close" onClick={() => getClose()}>
                            <IoMdClose className={"icon"}/>
                        </div>
                        {
                            detail.map(el => {
                                return <ModalCard el={el}/>
                            })
                        }
                    </div>
                </div>
            </div>

        </>

    );
};

export default Modal;