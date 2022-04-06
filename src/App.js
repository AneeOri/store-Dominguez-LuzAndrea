import React from "react";
import { ProductProvider } from "./context/productContext";
import Feed from "./components/feed/feed";
import Header from "./components/header/header";

export default function App() {

  return (
    <ProductProvider>
       <div>
        <Header/>
        <Feed/>
       </div>
    </ProductProvider>
  );
}


