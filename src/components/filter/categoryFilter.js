import React , { useContext} from 'react';
import { FilterContext } from '../../context/filterContext';
import { ProductContext } from '../../context/productContext';
import "./filters.css";

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
         <div className='textFilter'>Filter by Category</div>
         <select className="select"
                 name="category"
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