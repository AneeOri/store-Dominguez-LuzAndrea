import React, {createContext,useState, useEffect} from 'react';
import { getFetchUser } from '../utils/api';
import { API_URL, RESOURCES, headers } from "../utils/constants";

export const UserContext = createContext();

export const UserProvider = (props) =>{

    const url = `${API_URL}${RESOURCES.USER}`;

    const [userData, setUserData] = useState(
        { name: '',
         points: 0
        }); 

        useEffect(()=>{
            getFetchUser({ headers,setUserData},url);
        },[]);
   
    return(
       <UserContext.Provider value={[userData,setUserData]}>
            {props.children}
       </UserContext.Provider>
    );
}