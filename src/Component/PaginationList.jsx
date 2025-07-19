import React, { useState } from 'react'

const PaginationList = () => {
    const allItem = Array.from({length:100} ,(_,a) =>`Item ${a+1}` );
    const itemPerPage = 10;
    const [currentPage , setCurrentPage] = useState (1);

    const totalPages = Math.ceil (allItem.length / itemPerPage,);

    //Calculate current Page item 
    const startIndex = (currentPage -1) * itemPerPage
    const endIndex = startIndex+itemPerPage;
    const visibleItem = allItem.slice(startIndex , endIndex);

    //handler

    const handlenext = ()=> {
    setCurrentPage((prev)=> Math.min (prev +1 , totalPages));

    }
    const handleprev = ()=> {
    setCurrentPage((prev)=> Math.max(prev -1  ,1));

    }


  return (
    <div>
      <h2> Paginaton List</h2>
      <ul>{visibleItem.map((item ,index)=>(
        <li key={index}>{item}</li>
      ))}</ul>
 <button onClick={handleprev} disabled={currentPage ===  1}>Previous Page</button>
 <span>Page {currentPage}of {totalPages}</span>
      <button onClick={handlenext} disabled={currentPage === totalPages} >Next Page</button>
     
    </div>
  )
}

export default PaginationList
