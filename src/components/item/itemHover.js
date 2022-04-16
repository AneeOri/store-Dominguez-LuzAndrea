import React, {useState} from 'react';
import { postReedem } from '../../utils/api';
import coin from "../../assets/icons/coin.svg";
import { API_URL, RESOURCES, headers } from "../../utils/constants";
import ItemShop from './itemShop';

export default function ItemHover (props) {
    
    const url = `${API_URL}${RESOURCES.REDEEM}`;

    const {userData,setUserData,userPoints,productCost,productId} = props;
    const [redeem, setRedeem]=useState(false);

    function redeemItem(id, cost, userPoints){
        const redeem = postReedem({id,headers},url);
        const newPoints = userPoints - cost;
        setUserData({...userData, points: newPoints});
        setRedeem(redeem);
    }

    return (
        <div>
            <div>
                <p>{productCost}</p>
                <img src={coin} alt="imagen de moneda" />
            </div>
            {userPoints >= productCost && (
                <div>
                    <ItemShop
                      redeemItem = {redeemItem}
                      userPoints = {userPoints}
                      productCost = {productCost}
                      productId = {productId}
                      redeem = {redeem}
                    />
                </div>
            )}
        </div>
    )
}