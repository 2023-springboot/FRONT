import React from "react";
import { Link } from "react-router-dom";
import "./Start.css";

function Logo() {
    return <img className="logo" src="/img/dukdam.png" alt="dukdam"></img>;
}
function Btn1() {
    return (
        <Link to="/dukdam2023" className="btn1">
            <img src="/img/2023btn.png" alt="2023btn"></img>
        </Link>
    );
}
function Btn2() {
    return (
        <Link to="/dukdam2024" className="btn2">
            <img src="/img/2024btn.png" alt="2024btn"></img>
        </Link>
    );
}
function Btn3() {
    return (
        <Link className="btn3">
            <img src="/img/writeBtn.png" alt="writeBtn"></img>
        </Link>
    );
}

function Start() {
    return (
        <div className="Start">
            <Logo></Logo>
            <Btn1></Btn1>
            <Btn2></Btn2>
            <Btn3></Btn3>
        </div>
    );
}

export default Start;
