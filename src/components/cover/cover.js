import React from 'react';
import coverImage from '../../assets/header-x1.png';

export default function Cover (){
    return(
        <div>
             <img src={coverImage} alt="cover image" /> 
             <h1>Rewards Store</h1>
        </div>
    );
}