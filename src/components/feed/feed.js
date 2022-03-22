import React, {useContext, useEffect, useState} from "react";
import { ProductContext } from "../../context/productContext";
import Item from "../item/item/item";

export default function Feed (){
  
    const [productsData]=useContext(ProductContext);
    const [products,setProducts]=useState([]);

    useEffect(()=>{
        setProducts([...productsData]);
    },[productsData]);
   

    return(
        <div >
           {products.map((product) => (
					<Item {...product} key={product._id} />
				))}
         </div>
    );
}