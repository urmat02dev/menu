import React, {useEffect, useState} from 'react';
import './Admin.scss'
import logos from "../../assets/img/logos.svg";
import burger from "../../assets/img/Vectork.svg";
import setting from "../../assets/img/setting.svg";
import axios from "axios";
import {useSelector} from "react-redux";
import foods from "../main-page/foods/Foods";
import {useNavigate} from "react-router-dom";

const Admin = () => {
    const [admin, setAdmin] = useState([])
    const [loader, setLoader] = useState(false)
    const [error, setError] = useState(false)
    const {token_Id, foods} = useSelector(s => s)
    const nav = useNavigate()
    const getAdmin = async () => {
        try {
            setLoader(true)
            const url = await axios.get(`https://aitenir.pythonanywhere.com/api/orders-get`, {
                headers: {
                    "Authorization": `Token ${token_Id}`
                }
            })
            setAdmin(url.data)
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
    function compareByTimeCreated(a, b) {
        const dateA = new Date(a.time_created);
        const dateB = new Date(b.time_created);
        return   dateB - dateA;
    }
    admin.sort(compareByTimeCreated);
    const addId =  admin.map(item => item.items.map(ite => ite.additives.map(el => el)))
    let title = admin.map(item => item.items.map(ite => ite.dish.available_additives.filter(el => el.id === "3a245686-41fe-4835-b5b4-85b18dd536b5")))
    useEffect(() => {
        getAdmin()
        getNav()
    }, [admin.length,error])
    console.log("Admin", admin)
    console.log("Title", title)
    console.log("AddId", addId)

    return (
        <div id='admin'>
            <div className="container">
                <div className="admin">
                    <div className="admin--header">
                        <img className='admin--header__logos' src={logos} alt=""/>
                        <div className='admin--header__end'>
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
                                        <h2>Название</h2>
                                        <h2>Цена</h2>
                                        <h2>Количество</h2>
                                        <h2>Итого</h2>
                                    </div>
                                    <div className={"product"}>
                                        <div className={"name"}>
                                            {item.items.map(el => {
                                                return <div> {el.dish.name_ru}{el.dish.available_additives[0].name_ru} </div>
                                            })}

                                        </div>
                                        <div className={"price"}>
                                            {item.items.map(el => {
                                                return <div> {el.dish.price} </div>
                                            })}
                                        </div>
                                        <td className={"quantity"}>
                                            { item.items.map(el => {
                                                return <tr> {el.quantity} </tr>
                                            })}
                                        </td>
                                        <td className={"total"}>
                                            { item.items.map(el => {
                                                return <tr> {el.dish.price * el.quantity} </tr>
                                            })}
                                        </td>
                                    </div>
                                    <div className={"footer"}>
                                        <p>{item.is_takeaway ? "С собой" : "Здесь"}</p>
                                        <p>{item.payment ? "Терминал" : "Наличка"}</p>
                                        <p>Общая сумма: {item.total_price}</p>
                                        <button>Выдать чек</button>
                                        <button>Завершить заказ</button>

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