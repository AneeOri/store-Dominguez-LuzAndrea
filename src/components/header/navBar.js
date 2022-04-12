import React,{useContext} from 'react';
import { UserContext } from '../../context/userContext';
import coin from '../../assets/icons/coin.svg';
import { Link } from "react-router-dom";

export default function NavBar (){

    const [userData] = useContext(UserContext);

    return(
        <div>
          <p>{userData.name}</p>
             <div>
             <p >{userData.points}</p>
             <img src={coin} alt="imagen de moneda" />
             </div>   
          <nav>
             <ul >
               <Link to="/points">
                 <li >Get Coins</li>
               </Link>
               <Link to="/history">
                  <li >Reddems</li>
                </Link>
                <Link to="/">
                   <li >Shop</li>
                </Link>
             </ul>
          </nav>
        </div>
    );
}