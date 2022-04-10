import React from "react";
import { ProductProvider } from "./context/productContext";
import { UserProvider } from "./context/userContext";
import { FilterProvider } from "./context/filterContext";
import Feed from "./components/feed/feed";
import Header from "./components/header/header";

export default function App() {

  return (
    <UserProvider>
       <ProductProvider>
         <FilterProvider>
            <div>
              <Header/>
              <Feed/>
             </div>
          </FilterProvider>   
       </ProductProvider>
    </UserProvider>   
  );
}


