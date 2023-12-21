import React from "react";
import "./Letters2024.css";
import { Link } from "react-router-dom";

function Title() {
    return <img className="title" src="/img/start2024.png" alt="title"></img>;
}

function Letter() {
    return (
        <Link className="letter">
            <img className="letterImg" src="/img/letter.png"></img>
            <p className="letterUser">User</p>
        </Link>
    );
}

function AddBtn() {
    return (
        <Link className="addDukdam">
            <img src="/img/add.png"></img>
        </Link>
    );
}

function Letters2024() {
    return (
        <div className="Letters2024">
            <Title></Title>
            <div className="dukdams">
                <Letter></Letter>
                <Letter></Letter>
                <Letter></Letter>
                <Letter></Letter>
                <Letter></Letter>
            </div>
            <AddBtn></AddBtn>
        </div>
    );
}

export default Letters2024;
