import React, {useContext, useEffect, useState} from "react";
import { ProductContext } from "../../context/productContext";
import { FilterContext } from "../../context/filterContext";
import Item from "../item/item/item";
import CategoryFilter from "../filter/categoryFilter";
import PricesFilter from "../filter/pricesFilter";

export default function Feed (){
  
    const [productsData]=useContext(ProductContext);
    const [products,setProducts]=useState([]);
    const [filteredData] = useContext(FilterContext);
   

    useEffect(()=>{
        setProducts([...productsData]);
    },[productsData]);
   
    useEffect(()=>{
        onChangeFilters();
    },[filteredData]);

    function onChangeFilters(){
        const categoryFilter = productsData.filter(onChangeCategory);
        const priceFilter = categoryFilter.sort(onChangePrice);
        setProducts(priceFilter);
    }
    function onChangeCategory(product){
        const category = product.category;
        const filterCategory = filteredData.category;

        return (
            filterCategory === 'all' ||
            filterCategory === category.toLowerCase()
        );
    }
    function onChangePrice( x , y){
        if(filteredData.price === 'cheaper'){
            return x.cost - y.cost;
        }
        else{
            if(filteredData.price === 'expensive'){
                return y.cost - x.cost;
            }
            else{
                return 0;
            }
        }
    }

    return(
        <div >
            <div>
                <CategoryFilter/>
                <PricesFilter/>
            </div>
           {products.map((product) => (
					<Item {...product} key={product._id} />
				))}
         </div>
    );
}