import React  from 'react';
import "./Modal.scss"
import {BsBasket} from "react-icons/bs";
import meal from "../../assets/img/iPhone 13/image 15.png"

const Modal = ({active, setActive}) => {
    return (
        <div id="modal">
            <div className="container">
                <div className={active ? "modal active" : "modal"} onClick={() => setActive(false)}>
                    <div className="modal--content" onClick={e => e.stopPropagation()}>
                        <button className="modal--content__none" onClick={() => setActive(false)}>&#x2715;</button>
                        <img className="modal--content__img1" src={meal} alt=""/>
                        <div className="modal--content__card" >
                            <h1>Гранола</h1>
                            <p>Гранола Карамелизированная хрустящая смесь полезных злаков, греческий йогурт, свежие
                                фрукты и
                                ягоды</p>
                            <i>250г</i>
                            <div className="modal--content__card--price">
                                <h4>Цена:</h4>
                                <i>238c</i>
                            </div>
                            <div className="modal--content__card--btn">
                                <button className="modal--content__card--btn__addBtn">Добавить в<BsBasket
                                    className="modal--content__card--btn__addBtn--icon"/></button>
                                <button className="modal--content__card--btn__plusBtn">-  1  +</button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    );
import {AiOutlineClose} from "react-icons/ai";
import {useNavigate } from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {BiBasket} from "react-icons/bi";
import {GET_MODAL} from "../../redux/Reducer/ActionTypes";
const Modal = ({modal,setModal}) => {
    const {modalDetail} = useSelector(state => state)
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
    console.log(modalDetail)
  return (
    <div id={"modal"} style={{
        backdropFilter:modal ? "blur(3px)" : "none",
        background:modal ? "rgba(0, 0, 0, 0.42)" : "none"
          }} >
              <div className="container">
                  <div className="modal" style={{
                      left: modal ? "0" : "-1000px"
                  }}
                  >
                      <div className="modal-close" onClick={() =>getClose()}>
                          <AiOutlineClose className={"icon"} />
                      </div>
                      <div className="modal--items">
                          {/*<img src={image} alt=""/>*/}
                          {/*<div className={"modal--items--bottom"}>*/}
                          {/*    <h1>{getTitle()}</h1>*/}
                          {/*    <p>{getDesc()}</p>*/}
                          {/*    <h5>{ mass }г</h5>*/}
                          {/*    <h4>Цена: <span>{price}c</span></h4>*/}
                          {/*    <div className="modal--items--bottom--btn">*/}
                          {/*        <button>Добавить в*/}
                          {/*        <div><BiBasket className={"icon"}/></div>*/}
                          {/*        </button>*/}
                          {/*        <div className={"modal--items--bottom--count"}>*/}
                          {/*            <div>-</div>*/}
                          {/*            <div className={"price"}>{quantity}</div>*/}
                          {/*            <div>+</div>*/}
                          {/*        </div>*/}
                          {/*    </div>*/}
                          {/*</div>*/}
                      </div>

                  </div>
              </div>
          </div>



  );
};

export default Modal;