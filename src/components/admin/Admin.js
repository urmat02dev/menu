import React, {useEffect, useState} from 'react';
import './Admin.scss'
import logos from "../../assets/img/logos.svg";
import burger from "../../assets/img/Vectork.svg";
import setting from "../../assets/img/setting.svg";
import axios from "axios";
import {useSelector} from "react-redux";
import foods from "../main-page/foods/Foods";
import {NavLink, useNavigate} from "react-router-dom";
import {BACKEND_GET_URL} from "../starts/random";

const Admin = () => {
    const [admin, setAdmin] = useState([])
    const [order, setOrder] = useState([])
    const [loader, setLoader] = useState(false)
    const [error, setError] = useState(false)
    const {token_Id, foods} = useSelector(s => s)
    const nav = useNavigate()

    const getAdmin = async () => {
        try {
            setLoader(true)
            const url = await axios.get(`${BACKEND_GET_URL}api/orders-get`, {
                headers: {
                    "Authorization": `Token c15ab63cdee5111ea539872482469e5d3313acf0`
                }
            })
            setAdmin(url.data)
            console.log(url)
            setLoader(false)
        } catch (e) {
            setError(e)
        }
    }
    const getNav = () => {
        if (error) {
            nav("/admin")
        }
    }
    const getStatus = async (item) => {
        console.log("item", item.id)
        try {
            setLoader(true)
            const url = await axios.put(`${BACKEND_GET_URL}/api/order/${item.id}/status`, {},{
                headers: {
                    "Authorization": `Token c15ab63cdee5111ea539872482469e5d3313acf0`
                }

            })

            setOrder(url.data)
            console.log(url)
            setLoader(false)
        } catch (e) {
        }
    }
    function compareByTimeCreated(a, b) {
        const dateA = new Date(a.time_created);
        const dateB = new Date(b.time_created);
        return   dateB - dateA;
    }
    admin.sort(compareByTimeCreated);
    useEffect(() => {
        getAdmin()
    }, [admin])
    // console.log("admin", admin)




    return (
        <div id='admin'>
            <div className="container">
                <div className="admin">
                    <div className="admin--header">

                        <img className='admin--header__logos' src={logos} alt=""/>
                        <div className='admin--header__end'>
                            <NavLink to={"https://aitenir.pythonanywhere.com/admin/cafe/dish/"} target={"_blank"}>
                                <button className={"btn"}>Добавить еду</button>
                            </NavLink>
                            <img src={burger} alt=""/>
                            <img src={setting} alt=""/>

                        </div>
                    </div>
                    <div className="admin--hero">
                        {admin.map(item => (
                            <div className={"tables"}>
                                <div className={"tables--title"} style={{
                                    textAlign:"center"
                                }}>
                                    <h4>Столик №{item.table}</h4>
                                    <h5>Дата:{item.time_created.slice(0,10)}</h5>
                                    <h5>Время:{item.time_created.slice(11,19)}</h5>
                                </div>
                                <div className={"table"}>
                                    <div className={"title"}>
                                        <div className={"title--name"}>Название</div>
                                        <div className={"title--price"}>Цена</div>
                                        <div className={"title--quan"}>Количество</div>
                                        <div className={"title--total"}>Итого</div>
                                    </div>
                                    <div className={"product"}>
                                        <div className={"name"}>
                                            {item.items.map(el => {
                                                return <div className={"name--title"}> {el.dish.name_ru}<p>{el.additives.map(text => {
                                                    return <span>({text.name_ru})</span>
                                                })}</p></div>
                                            })}

                                        </div>
                                        <div className={"price"}>
                                            {item.items.map(el => {
                                                return <div> {el.dish.price}
                                                    <p>{el.additives.map(text => {
                                                        return <span>+({text.price})</span>
                                                    })}</p>
                                                </div>
                                            })}
                                        </div>
                                        <div className={"quantity"}>
                                            { item.items.map(el => {
                                                return <div> {el.quantity} </div>
                                            })}
                                        </div>
                                        <div className={"total"}>
                                            { item.items.map(el => {
                                                return <div>
                                                   <p>{el.additives.reduce((acc, e) => {
                                                        return acc + e.price
                                                    },0) + (el.dish.price * el.quantity)
                                                    }
                                                    </p>
                                                </div>
                                            })}
                                        </div>
                                    </div>
                                    <div className={"footer"}>
                                        <p>{item.is_takeaway ? "С собой" : "Здесь"}</p>
                                        <p>{item.payment ? "Терминал" : "Наличка"}</p>
                                        <p>Общая сумма: {item.total_price}</p>
                                        <button onClick={() => getStatus(item)}>Заверщит заказ</button>
                                    </div>

                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Admin;