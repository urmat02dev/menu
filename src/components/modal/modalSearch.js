import {useNavigate, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {
    GET_BASKET,
    GET_MODAL,
    MINUS, MODAL, MODAL_MINUS, MODAL_PLUS,
    PLUS
} from "../../redux/Reducer/ActionTypes";

import {IoMdClose} from "react-icons/io";
import React from "react";
import "./modalSearch.scss"
import ModalCard from "./ModalCard";
import {ran} from "../starts/random";

const ModalSearch = () => {
    const {modal} = useSelector(state => state)
    const {detail,params} =  useSelector(state => state)

    const nav = useNavigate()
    const dispatch = useDispatch()
    const lang = localStorage.getItem("i18nextLng")
    const getClose = async () => {
        await dispatch({type:MODAL,payload:false})
        nav(`/search`)
    }

    return (
        <>
            <div id={"modal"} hidden={!modal}  onClick={() => getClose()} style={{
            }}/>
            <div className="modal"  style={{
                top:modal ? "" : "100%",
                zIndex:modal ? "2" : "-1"
            }}>
                <div className="modal--close" onClick={() => getClose()}>
                    <IoMdClose className={"icon"}/>
                </div>
                <ModalCard el={detail}/>

            </div>

        </>
    );
};

export default ModalSearch;