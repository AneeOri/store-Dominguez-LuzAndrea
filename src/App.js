import React from "react";
import { ProductProvider } from "./context/productContext";
import { UserProvider } from "./context/userContext";
import { FilterProvider } from "./context/filterContext";
import Header from "./components/header/header";
import AppRouter from "./routers/appRouter";

export default function App() {

  return (
    <UserProvider>
       <ProductProvider>
         <FilterProvider>
            <div>
              <Header/>
              <AppRouter/>
             </div>
          </FilterProvider>   
       </ProductProvider>
    </UserProvider>   
  );
}


