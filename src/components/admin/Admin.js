import React, {useEffect, useState} from 'react';
import './Admin.scss'
import logos from "../../assets/img/logos.svg";
import burger from "../../assets/img/Vectork.svg";
import setting from "../../assets/img/setting.svg";
import axios from "axios";
import {useSelector} from "react-redux";

const Admin = () => {
    const [admin, setAdmin] = useState([])
    const [loader, setLoader] = useState(false)
    const [error, setError] = useState(false)
    const {token_Id} = useSelector( s => s )

    const getAdmin = async () => {
        try {
            setLoader(true)
            const url = await axios.get(`https://aitenir.pythonanywhere.com/api/orders`, {
                headers:{
                    "Authorization": `Token ${token_Id}`
                }
            })
            setAdmin(url.data)
            console.log(url)
            setLoader(false)
        } catch (e) {
            setError(e)
        }
    }
    useEffect(() => {
        getAdmin()
    },[])
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
                        }
                        <table>
                            <tr>
                                <td>
                                    Name
                                </td>
                                <td>
                                    Price
                                </td>
                                <td>
                                    Amount
                                </td>
                                <td>
                                    Total
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Capuchino
                                </td>
                                <td>
                                    100
                                </td>
                                <td>
                                    1
                                </td>
                                <td>
                                    100
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Capuchino
                                </td>
                                <td>
                                    100
                                </td>
                                <td>
                                    1
                                </td>
                                <td>
                                    100
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Capuchino
                                </td>
                                <td>
                                    100
                                    </td>
                                <td>
                                    1
                                </td>
                                <td>
                                    100
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Capuchino
                                </td>
                                <td>
                                    100
                                </td>
                                <td>
                                    1
                                </td>
                                <td>
                                    100
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Capuchino
                                </td>
                                <td>
                                    100
                                </td>
                                <td>
                                    1
                                </td>
                                <td>
                                    100
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Capuchino
                                </td>
                                <td>
                                    100
                                </td>
                                <td>
                                    1
                                </td>
                                <td>
                                    100
                                </td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Admin;