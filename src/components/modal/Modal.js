import React, {useEffect} from 'react';
import "./Modal.scss"
import {AiOutlineClose} from "react-icons/ai";
import {data} from "../fake-backend/backend";
import {useNavigate, useParams} from "react-router-dom";
import {useSelector} from "react-redux";
import {BiBasket} from "react-icons/bi";
const Modal = () => {
    const {modal} = useSelector(state => state)
    const {modalWindow} = useSelector(state => state)
    const nav = useNavigate()
    console.log(modal)
    const {image,title,title_ru,title_kg,desc,desc_kg,desc_ru,mass,price,quantity} = modal
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
    const getClose = () => {
        nav("/main")
    }
  return ( modalWindow ?
          <div id={"modal"} style={{
              bottom: modalWindow ? "-200px" : "-500px"
          }} onClick={() => getClose()}>
              <div className="container">
                  <div className="modal">
                      <div className="modal-close" onClick={() =>getClose()}>
                          <AiOutlineClose className={"icon"} />
                      </div>
                      <div className="modal--items">
                          <img src={modal ? image : null} alt=""/>
                          <div className={"modal--items--bottom"}>
                              <h1>{getTitle()}</h1>
                              <p>{getDesc()}</p>
                              <h5>{modal ?  mass : null}г</h5>
                              <h4>Цена: <span>{price}c</span></h4>
                              <div className="modal--items--bottom--btn">
                                  <button>Добавить в
                                  <div><BiBasket className={"icon"}/></div>
                                  </button>
                                  <div className={"modal--items--bottom--count"}>
                                      <div>-</div>
                                      <div className={"price"}>{quantity}</div>
                                      <div>+</div>
                                  </div>
                              </div>
                          </div>
                      </div>

                  </div>
              </div>
          </div>
          : null


  );
};

export default Modal;