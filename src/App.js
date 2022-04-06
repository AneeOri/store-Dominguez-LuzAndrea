import React from "react";
import { ProductProvider } from "./context/productContext";
import { UserProvider } from "./context/userContext";
import Feed from "./components/feed/feed";
import Header from "./components/header/header";

export default function App() {

  return (
    <UserProvider>
       <ProductProvider>
          <div>
            <Header/>
            <Feed/>
           </div>
       </ProductProvider>
    </UserProvider>   
  );
}


