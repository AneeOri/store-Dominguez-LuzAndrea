import React, { createContext } from "react";


export const productContext = createContext();

export const productProvider =({children})=>{
    return(
        <productContext.Provider>
              {children}
        </productContext.Provider>
    )
}