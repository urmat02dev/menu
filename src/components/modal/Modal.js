import {AiOutlineClose, AiOutlineMinus, AiOutlinePlus} from "react-icons/ai";
import {useNavigate } from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {BiBasket} from "react-icons/bi";
import {GET_MODAL} from "../../redux/Reducer/ActionTypes";
import {BsBasket} from "react-icons/bs";
import {IoMdClose} from "react-icons/io";
import React from "react";
import "./Modal.scss"
const Modal = ({modal,setModal}) => {
    const modalDetail = useSelector(state => state.modal)
    // const {title,title_ru,title_kg,desc,desc_kg,desc_ru,mass,price,quantity} = modalDetail
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

    const getClose = () => {
        setModal(!modal)

    }
    console.log(modal)
  return (
      <>
          <div id={"modal"} hidden={!modal} onClick={() => getClose()}/>
          <div className="container">
              <div className="modal" hidden={!modal} style={{
                  bottom:modal ? "0" : "-200%"
              }}>

                      <div className="modals">
                          <div className="close" onClick={() => getClose()}>
                              <IoMdClose className={"icon"}/>
                          </div>
                          <div className={"modals--img"}>
                              <img src={modalDetail.image} alt=""/>
                          </div>
                          <div className="modals--desc">
                              <h2>{modalDetail.title}</h2>
                              <h3>{modalDetail.desc}</h3>
                              <h4>{modalDetail.mass}г.</h4>
                              <h5>Цена:<span>{modalDetail.price}c</span></h5>

                          </div>
                          <div className="modals--basket">
                              <div className="basket">
                                  Добавить в
                                  <div className="icon-block">
                                      <BsBasket className={"icon"}/>
                                  </div>
                              </div>
                              <div className={"count"}>
                                  <span ><AiOutlineMinus/></span>
                                  <p>{modalDetail.quantity}</p>
                                  <span > <AiOutlinePlus/></span>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>

      </>

  );
};

export default Modal;