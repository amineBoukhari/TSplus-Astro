import React from "react";
import { useState , useEffect} from "react";
import "../styles/style.css"


function Pagination(props) {   
    const [currentPage , setCureentPage] = useState(1)
    let recordPerPage = 1
    let lastIndex = recordPerPage * currentPage  
    let firstIndex = lastIndex -  recordPerPage 
    let records = props.Data.slice(firstIndex , lastIndex )
    let npage = Math.ceil(props.Data .length / recordPerPage  )
    let numbers  = [...Array(npage+1).keys()].slice(1)


    function prevPage(e){
        setCureentPage(prev => {
            return prev > 1 ? prev - 1 : prev;
        })
    }
    
    function nextPage(e) {
        setCureentPage(prev => {
            return  prev + 1 ;
        });
    }
    function changeCurrentPage(n){
        setCureentPage(n)
    }


    useEffect(()=>{
        console.log("hello")
    })
    return (
       
        <div>
            {currentPage}
            {
               
                 records.map(item=>{
                    return <div> 
                     {item.slug}
                    </div>
                }) 
            }
             <li className="page-item">
                    <button onClick={prevPage}> Previous </button>
            </li>
            <ul className="pagination">
                {
                    numbers.map((n,i)=>{
                        return (
                        <li className= {`page-itemx ${currentPage == n ? "active" :" "} `} key ={i}>
                        <a onClick={() => changeCurrentPage(n)}>{n*78}</a>

                    </li> )}
                    )
                }
            </ul>
            <li className="page-item">
                    <button onClick={nextPage}> NEXT </button>
            </li>
        </div>
                   
    )
  }


  export default Pagination