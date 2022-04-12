import React, { useState } from "react";

export default function UsePagination(data=[] ,itemsPerPage){
    
    const[currentPage, setCurrentPage] = useState(1);
    const maxPage = Math.ceil(data.length / itemsPerPage);

    function currentData(){
        const start = (currentPage -1) * itemsPerPage;
        const end = start + itemsPerPage;
        return data.slice(start, end);
    }

    function jumpToPage(page){
        const pageNumber = Math.max(1,page);
        setCurrentPage((currentPage)=> Math.min(pageNumber, maxPage));
    }

    return{
          jumpToPage, currentData, currentPage, maxPage
    };

}