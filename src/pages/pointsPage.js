import React, {useContext} from 'react';
import { UserContext } from '../context/userContext';
import { postPoints } from '../utils/api';
import { API_URL, RESOURCES, headers } from '../utils/constants';
import coin from '../assets/icons/coin.svg';
import "./points.css";


export default function PointsPage() {

  const url = `${API_URL}${RESOURCES.POINTS}`;

   const[userData, setUserData]= useContext(UserContext);

   function postingPoints(amount){
     postPoints({amount,headers, userData, setUserData},url)
   }

  return (
    <div className='coinsContainer'>
      <div>
        <h1>Get More Coins</h1>
        <h3>How many coins do you want to add?</h3>
      </div>
      <div className='coinButtons'>
        <button onClick={()=>{postingPoints(1000)}}> 1000
           <img className='imgC' src={coin} alt="imagen de moneda" />
        </button>
        <button onClick={()=>{postingPoints(5000)}}> 5000
           <img className='imgC' src={coin} alt="imagen de moneda" />
        </button>
        <button onClick={()=>{postingPoints(7500)}}> 7500
           <img className='imgC' src={coin} alt="imagen de moneda" />
        </button>
      </div>
    </div>
  )
}
