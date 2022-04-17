import React from "react";
import logo from "../../assets/aerolab-logo.svg";
import NavBar from "./navBar";
import "./header.css";


export default function Header (){

    return(
        <div height="100px" width="100px" className="header">
           <img src={logo} alt="Logo de Aerolab" />
           <NavBar/>
        </div>
    );
}