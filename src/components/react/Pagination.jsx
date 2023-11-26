import React from "react";
import { useState , useEffect} from "react";
import "../../styles/style.css"
import ReactMarkDown from "react-markdown"



function Pagination(props) {   
   
    let recordPerPage = 9
   
    const [currentPage , setCureentPage] = useState(1)
    let lastIndex = recordPerPage * currentPage  
    let firstIndex = lastIndex -  recordPerPage 
    let records = props.Data.slice(firstIndex , lastIndex )
    let npage = Math.ceil(props.Data .length / recordPerPage  )
    let numbers  = [...Array(npage+1).keys()].slice(1)
    

    useEffect(()=>{
        console.log(records[0])
    })

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
        <div class="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-e0b7cf6" data-id="e0b7cf6" data-element_type="column">
              <div class="elementor-widget-wrap elementor-element-populated">
                <div class="elementor-element elementor-element-d744839 elementor-grid-eael-col-3 elementor-grid-tablet-eael-col-2 elementor-grid-mobile-eael-col-1 elementor-widget elementor-widget-eael-post-grid" data-id="d744839" data-element_type="widget" data-settings="{&quot;eael_post_grid_columns&quot;:&quot;eael-col-3&quot;,&quot;eael_post_grid_columns_tablet&quot;:&quot;eael-col-2&quot;,&quot;eael_post_grid_columns_mobile&quot;:&quot;eael-col-1&quot;}" data-widget_type="eael-post-grid.default">
                  <div class="elementor-widget-container">
                    <div id="eael-post-grid-d744839" class="eael-post-grid-container">
                      <div class="eael-post-grid eael-post-appender eael-post-appender-d744839 eael-post-grid-style-two" data-layout-mode="grid">

                       
                      {
               
               records.map((item,i)=>{
                  return (
                  
                      <article class="eael-grid-post eael-post-grid-column" data-id="33980">
                          <div class="eael-grid-post-holder">
                          <div class="eael-grid-post-holder-inner">
                              <div class="eael-entry-media">
                              <div class="eael-entry-overlay fade-in">
                                  <a href={`../${records[0].slug}`}></a>
                              </div>
                              <div class="eael-entry-thumbnail"> <div class="eael-grid-post-holder">
                          <div class="eael-grid-post-holder-inner">
                              <div class="eael-entry-media">
                              <div class="eael-entry-overlay fade-in">
                                  <a href={`../${records[0].slug}`}></a>
                              </div>
                              <div class="eael-entry-thumbnail"><img fetchpriority="high" width="1120" height="630" src={`./images/${records[0].data.imageLink}`} class="attachment-full size-full wp-image-34068" alt="Title of article &quot;Best Remote Access Security Software&quot;, TSplus logo and link, illustrated by a picture of a locked padlock with a curtain of IT symbols." decoding="async"/></div>
                              </div>
                              <div class="eael-entry-wrapper">
                              <header class="eael-entry-header">
                                  <h2 class="eael-entry-title"><a class="eael-grid-post-link" href={`../blogs/${records[0].slug}`}  title="Best Remote Access Security Software">{records[0].slug}</a></h2>
                              </header>
                              <div class="eael-entry-header-after style-two">
                                  <div class="eael-entry-meta"></div>
                              </div>
                              <div class="eael-entry-content">
                                  <div class="eael-grid-post-excerpt">
                                  <p>{records[0].description}</p><a href="{slug}" class="eael-post-elements-readmore-btn">Read article →</a>
                                  </div>
                              </div>
                              </div>
                          </div>
                          </div></div>
                              </div>
                              <div class="eael-entry-wrapper">
                              <header class="eael-entry-header">
                                  <h2 class="eael-entry-title"><a class="eael-grid-post-link" href={"../blogs/" + "slug"}  title="Best Remote Access Security Software">{"title"}</a></h2>
                              </header>
                              <div class="eael-entry-header-after style-two">
                                  <div class="eael-entry-meta"></div>
                              </div>
                              <div class="eael-entry-content">
                                  <div class="eael-grid-post-excerpt">
                                  <p>{records[0].description}</p><a href={"slug"} class="eael-post-elements-readmore-btn">Read article →</a>
                                  </div>
                              </div>
                              </div>
                          </div>
                          </div>
              </article>
              )
              }) 
          }
          
                      </div>
                      <div class="clearfix"></div>
                    </div>
                    <div class="eael-load-more-button-wrap">
                    <div  className="pagination-container">
           <li className="page-item">
                  <button onClick={prevPage}> Previous </button>
          </li>
          <ul className="pagination">
              {
                  numbers.map((n,i)=>{
                      return (
                      <li onClick={() => changeCurrentPage(n)} className= {`page-itemx ${currentPage == n ? "active" :" "} `} key ={i}>
                      <a >{n}</a>
                  </li> )}
                  )
              }
          </ul>
          <li className="page-item">
                  <button onClick={nextPage}> NEXT </button>
          </li>
          </div>
                      <button class="eael-load-more-button" id="eael-load-more-btn-d744839" data-widget-id="d744839" data-widget="d744839" data-page-id="13019" data-template="{&quot;dir&quot;:&quot;lite&quot;,&quot;file_name&quot;:&quot;default.php&quot;,&quot;name&quot;:&quot;Post-Grid&quot;}" data-class="Essential_Addons_Elementor\Elements\Post_Grid" data-layout="grid" data-page="1" data-args="orderby=date&amp;order=desc&amp;ignore_sticky_posts=1&amp;post_status=publish&amp;posts_per_page=12&amp;offset=&amp;post_type=post&amp;tax_query%5B0%5D%5Btaxonomy%5D=post_tag&amp;tax_query%5B0%5D%5Bfield%5D=term_id&amp;tax_query%5B0%5D%5Bterms%5D%5B0%5D=131&amp;tax_query%5Brelation%5D=AND&amp;post__not_in%5B0%5D=22235&amp;post__not_in%5B1%5D=31271" data-max-page="3"><span class="eael_load_more_text">See More</span></button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        
        
            
       
                   
    )
  }


  export default Pagination