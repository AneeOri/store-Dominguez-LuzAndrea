import React, {useContext, useEffect, useState} from "react";
import { ProductContext } from "../../context/productContext";
import { FilterContext } from "../../context/filterContext";
import Item from "../item/item/item";
import CategoryFilter from "../filter/categoryFilter";
import PricesFilter from "../filter/pricesFilter";
import ReactPaginate from "react-paginate";

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
    const [currentPage, setCurrentPage] = useState(0);
    const ITEMS_PER_PAGE =16;
    const count = Math.ceil(products.length / ITEMS_PER_PAGE);
    const pagesVisied = currentPage *ITEMS_PER_PAGE;

    const displayProducts = products
    .slice(pagesVisied, pagesVisied+ITEMS_PER_PAGE)
    .map(product=> (
        <Item {...product} key={product._id} />
    ));

    const changePage= ({selected}) => {
        setCurrentPage(selected);
    };

    return(
        <div>
            <div>
              <CategoryFilter/>
              <PricesFilter/>
            </div>
            <div>
               <ReactPaginate
                  breakLabel="..."
                  nextLabel="next >"
                  onPageChange={changePage}
                  pageCount={count}
                  previousLabel="< previous"
               />
            </div>
              {displayProducts}
        </div>
    );
}