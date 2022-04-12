import React, {useContext} from 'react';
import { UserContext } from '../context/userContext';
import { postPoints } from '../utils/api';
import { API_URL, RESOURCES, headers } from '../utils/constants';
import coin from '../assets/icons/coin.svg';


export default function PointsPage() {

  const url = `${API_URL}${RESOURCES.POINTS}`;

   const[userData, setUserData]= useContext(UserContext);

   function postingPoints(amount){
     postPoints({amount,headers, userData, setUserData},url)
   }

  return (
    <div>
      <h1>Get More Coins</h1>
      <h3>How many coins do you want to add?</h3>
      <div>
        <button onClick={()=>{postingPoints(1000)}}> 1000
           <img src={coin} alt="imagen de moneda" />
        </button>
        <button onClick={()=>{postingPoints(5000)}}> 5000
           <img src={coin} alt="imagen de moneda" />
        </button>
        <button onClick={()=>{postingPoints(7500)}}> 7500
           <img src={coin} alt="imagen de moneda" />
        </button>
      </div>
    </div>
  )
}
