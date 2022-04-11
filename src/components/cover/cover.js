import React from 'react';
import coverImage from '../../assets/header-x1.png';
import "./cover.css";

export default function Cover (){
    return(
        <div className="coverImage">
             <img src={coverImage} alt="cover image" /> 
             <h1>Rewards Store</h1>
        </div>
    );
}