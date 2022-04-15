import React from 'react';
import coin from "../../assets/icons/coin.svg";
import buyBlue from "../../assets/icons/buy-blue.svg";
import buyWhite from "../../assets/icons/buy-white.svg";

export default function ItemInfo(props){
 
   const {userPoints,productCost,isHover} = props;

   function setInfo(userPoints,productCost){
    if(productCost > userPoints){
        return(
            <div>
                <p> You need {productCost - userPoints}</p>
                <img src={coin} alt="imagen de moneda" />
            </div>
        );
    }else{
            const buy = isHover ? buyWhite : buyBlue;
            return(
                <div>
                    <img src={buy} alt="imagen de bolsa de compra" />
                </div>
            );
        }
    }

    return (
       <div>
           {setInfo(userPoints , productCost)}
       </div>
    );

}