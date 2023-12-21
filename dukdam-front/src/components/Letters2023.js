import React from "react";
import { Link } from "react-router-dom";
import "./Letters2023.css";

function Title() {
    return <img className="title" src="/img/end2023.svg" alt="title"></img>;
}

function Letter() {
    return (
        <Link className="letter">
            <img className="letterImg" src="/img/letter.svg"></img>
            <p className="letterUser">User</p>
        </Link>
    );
}

function AddBtn() {
    return (
        <Link className="addDukdam">
            <img src="/img/add.svg"></img>
        </Link>
    );
}

function Letters2023() {
    return (
        <div className="Letters2023">
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

export default Letters2023;
