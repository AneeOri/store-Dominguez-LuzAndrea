import React , {useState, useContext} from 'react';
import { FilterContext } from '../../context/filterContext';
import { ProductContext } from '../../context/productContext';

export default function CategoryFilter(){

    const [productData]=useContext(ProductContext);
    const [filter, setFilter]= useContext(FilterContext);

    const category = [
        ...new Set(productData.map((product)=> product.category))
    ].sort();

    return (
      <div>
         <div>Filter by Category</div>
         <select value={filter.category} onChange={onChangeCategory}>
           <option>All</option>  
           {category.map((category) => (
                <option key={category} value={category.toLowerCase()}>{category}</option>
           ))}
         </select>
      </div>  
    );
}