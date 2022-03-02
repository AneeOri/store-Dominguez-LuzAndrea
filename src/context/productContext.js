import React, { createContext,useEffect,useState } from "react";
import {getFetchData} from "../utils/api";

export const productContext = createContext();

export const productProvider =(props)=>{

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
        getFetchData();
    });

    return(
        <productContext.Provider>
              {children}
        </productContext.Provider>
    )
}