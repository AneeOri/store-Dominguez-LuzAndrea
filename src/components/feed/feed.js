import React, {useContext, useEffect, useState} from "react";
import { productContext } from "../../context/productContext";
import Item from "../item/item/item";

export default function Feed (){
  
    const [productsData]=useContext(productContext);
    const [products,setProducts]=useState([]);

    useEffect(()=>{
        setProducts([...productsData]);
    },[productsData]);
   

    return(
        <div >
           {products.currentData().map((product) => (
					<Item {...product} key={product._id} />
				))}
         </div>
    );
}