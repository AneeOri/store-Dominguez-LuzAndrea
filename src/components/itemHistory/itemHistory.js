import React from 'react';
import "./itemHistory.css";

export default function ItemHistory(props) {
  return (
    <div className='itemContainer'>
       <img src={props.img.url} alt="imagen del producto"/>
       <div className='info'>
           <p>{props.name}</p>
           <p>cost: </p>
           <p>{props.cost} coins</p>
       </div>
    </div>
  )
}
