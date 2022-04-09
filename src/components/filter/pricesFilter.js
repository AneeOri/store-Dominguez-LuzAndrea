import React , {useState, useContext} from 'react';
import { FilterContext } from '../../context/filterContext';

export default function PricesFilter(){
    const [filter,setFilter] = useContext(FilterContext);
    return (
        <div>
        <div>Filter by Price</div>
        <select value={filter.price} onChange={onChangePrices}>
          <option value={'all'}>All</option>  
          <option value={'cheaper'}>Cheaper</option> 
          <option value={'expensive'}>Most expensive</option> 
        </select>
     </div>  
    );
}