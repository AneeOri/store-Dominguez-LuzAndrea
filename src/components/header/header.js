import React from "react";
import logo from "../../assets/aerolab-logo.svg";

export default function Header (){

    return(
        <div height="100px" width="100px">
           <img src={logo} alt="Logo de Aerolab" />
        </div>
    );
}