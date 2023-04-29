import {
    AiOutlineArrowRight,
    AiOutlineClose,
    AiOutlineMinus,

    AiOutlinePlus
} from "react-icons/ai";
import {useNavigate } from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {BiBasket} from "react-icons/bi";
import {
    GET_BASKET,
    GET_MODAL,
    MINUS, MODAL_MINUS, MODAL_PLUS,
    PLUS
} from "../../redux/Reducer/ActionTypes";
import {BsBasket, BsBasket3Fill} from "react-icons/bs";
import {IoMdClose} from "react-icons/io";
import React from "react";
import "./Modal.scss"
const Modal = ({modal,setModal}) => {
    const modalDetail = useSelector(state => state.modal)
    const basket = useSelector(state => state.basket)
    const nav = useNavigate()
    const dispatch = useDispatch()
    const {title,title_ru,title_kg,desc,desc_kg,desc_ru,mass,price,quantity} = modalDetail
    const lang = localStorage.getItem("i18nextLng")
    function getTitle () {
        if (lang === "en"){
            return <h1>{title}</h1>
        }
        if (lang === "ru"){
            return <h1>{title_ru}</h1>
        }
        if (lang === "kg"){
            return <h1>{title_kg}</h1>
        }
    }
    function getDesc () {
        if (lang === "en"){
            return <p>{desc}</p>
        }
        if (lang === "ru"){
            return <p>{desc_ru}</p>
        }
        if (lang === "kg"){
            return <p>{desc_kg}</p>
        }
    }
    function getBasket() {
        dispatch({type:GET_BASKET,payload:modalDetail})
    }
    const foundProduct = basket.some(e => e.id === modalDetail.id)
    const getClose = () => {
        setModal(!modal)
    }
    const getMinus = () => {
      dispatch({type:MODAL_MINUS,payload:modalDetail})
    }
    const getPlus = () => {
        dispatch({type:MODAL_PLUS,payload: modalDetail})

    }
  return (
      <>
          <div id={"modal"} hidden={!modal} onClick={() => getClose()}/>
          <div className="container">
              <div className="modal" hidden={!modal} style={{
                  bottom:modal ? "-100px" : "-2000px"
              }}>

                      <div className="modals">
                          <div className="close" onClick={() => getClose()}>
                              <IoMdClose className={"icon"}/>
                          </div>
                          <div className={"modals--img"}>
                              <img src={modalDetail.image} alt=""/>
                          </div>
                          <div className="modals--desc">
                              <h2>{getTitle()}</h2>
                              <h3>{getDesc()}</h3>
                              <h4>{mass}г.</h4>
                              <h5>Цена:<span>{price}c</span></h5>

                          </div>
                          <div className="modals--basket">
                              <div className="basket">
                                  Добавить в
                                  <div className="icon-block" onClick={() => getBasket()}>
                                      {
                                          foundProduct ? <div onClick={() => nav("/basket")} className="foods--one__basket--icon"><BsBasket3Fill/><AiOutlineArrowRight className='next'/></div>   :<div className="foods--one__basket--icon" onClick={() => getBasket()}>
                                              <BiBasket className='icon'/></div>
                                      }
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>

      </>

  );
};

export default Modal;