import React , {useState, useContext} from 'react';
import { FilterContext } from '../../context/filterContext';
import { ProductContext } from '../../context/productContext';

export default function CategoryFilter(){

    const [productData]=useContext(ProductContext);
    const [filter, setFilter]= useContext(FilterContext);

    const category = [
        ...new Set(productData.map((product)=> product.category))
    ].sort();

    function onChangeCategory(e){
        let {name,value} = e.target;
        const options= {...filter,[name]:value.toLowerCase()};
        setFilter(options);
    }

    return (
      <div>
         <div>Filter by Category</div>
         <select name="category"
                value={filter.category} 
                 onChange={onChangeCategory}
         >
           <option>All</option>  
           {category.map((category) => (
                <option key={category} value={category.toLowerCase()}>{category}</option>
           ))}
         </select>
      </div>  
    );
}