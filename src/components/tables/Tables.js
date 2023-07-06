import React from 'react';
import "./Tables.scss"
import {useNavigate} from "react-router-dom";
const Tables = () => {
    const nav = useNavigate()

    return (
        <div id={"tables"}>
            <div className="container">
                <h1>Столик</h1>
                <div className="table">

                    <div className="block" onClick={() => nav("/1") }>1</div>
                    <div className="block" onClick={() => nav("/2") }>2</div>
                    <div className="block" onClick={() => nav("/3") }>3</div>
                    <div className="block" onClick={() => nav("/4") }>4</div>
                    <div className="block" onClick={() => nav("/5") }>5</div>
                    <div className="block" onClick={() => nav("/6") }>6</div>
                    <div className="block" onClick={() => nav("/7") }>7</div>
                    <div className="block" onClick={() => nav("/8") }>8</div>
                    <div className="block" onClick={() => nav("/9") }>9</div>
                    <div className="block" onClick={() => nav("/10") }>10</div>

                </div>
            </div>
        </div>
    );
};

export default Tables;