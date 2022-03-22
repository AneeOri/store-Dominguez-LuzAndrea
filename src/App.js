import React from "react";
import { ProductProvider } from "./context/productContext";
import Feed from "./components/feed/feed";

export default function App() {

  return (
    <ProductProvider>
       <div>
        <Feed/>
       </div>
    </ProductProvider>
  );
}


