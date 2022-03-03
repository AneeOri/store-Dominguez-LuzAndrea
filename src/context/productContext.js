import React, { createContext,useEffect,useState } from "react";
import {getFetchData} from "../utils/api";
import { API_URL, RESOURCES, headers } from "../utils/constants";

export const productContext = createContext();

export const productProvider =(props)=>{

    const url = `${API_URL}${RESOURCES.PRODUCTS}`;

    const [productsData, setProductsData] = useState ([
      { name:'',
        _id='',
        cost:0,
        category:'',
        img:{hdUrl:'',
             url:''
            }
      }
    ]);

    useEffect(()=>{
        getFetchData(url, { headers,setProductsData});
    });

    return(
        <productContext.Provider value={[productsData, setProductsData]}>
              {props.children}
        </productContext.Provider>
    )
}