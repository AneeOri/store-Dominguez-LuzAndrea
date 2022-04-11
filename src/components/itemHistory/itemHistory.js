import React from 'react';

export default function ItemHistory(props) {
  return (
    <div>
       <img src={props.img.url} alt="imagen del producto"/>
       <div>
           <p>{props.name}</p>
           <p>cost: </p>
           <p>{props.cost} coins</p>
       </div>
    </div>
  )
}
