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
            // console.log(url)
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
    let orders = admin.map(order =>
        order.items.map(orderItem =>
            foods.filter(food => food.id === orderItem.dish)))
    // console.log("Orders", orders.map(order => order.map(el => el.map(e => e.name_en))))
    // console.log("Admin", admin)
    // console.log("orders", orders)
    // console.log(error)
    let table = admin.map(admin => admin.table)
    useEffect(() => {
        getAdmin()
        getNav()
    }, [admin,error])

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

                        {
                            admin.map(admin => (
                                <div>
                                    <p style={{
                                        textAlign:"center"
                                    }}>Стол №{admin.table}</p>
                                    <p style={{
                                        textAlign:"center"
                                    }}>{admin.time_created}</p>
                                    <table>
                                        <tr>
                                            <th>Название</th>
                                            <th>Цена</th>
                                            <th>Количество</th>
                                            <th>Итого</th>
                                        </tr>
                                        <tr>
                                            <td>{admin.items.map(item => foods.filter(food => food.id === item.dish)[0].name_ru)}</td>
                                            <td>{admin.items.map(item => foods.filter(food => food.id === item.dish)[0].price)}</td>
                                            <td>{admin.items.map(item => item.quantity)}</td>
                                            <td>{admin.items.map(item => item.quantity) * admin.items.map(item => foods.filter(food => food.id === item.dish)[0].price)}</td>
                                        </tr>
                                    </table>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Admin;