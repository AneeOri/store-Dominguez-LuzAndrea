import React,{useContext} from 'react';
import { UserContext } from '../../context/userContext';
import coin from '../../assets/icons/coin.svg'

export default function NavBar (){

    const [userData] = useContext(UserContext);

    return(
        <div>
          <p>{userData.name}</p>
          <img src={coin} alt="imagen de moneda" />
          <p>{userData.points}</p>
        </div>
    );
}