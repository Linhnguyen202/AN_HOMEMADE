import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import ProductsCard,{ProductCartSkeleton} from '../Components/Products/ProductsCard';
import { search } from '../httpApiClientInterface/ApiProduct';
import { recordPerpage } from '../Lib/Commomdata';
import { GetFromToPaging } from '../Lib/CommondFunction';
import {v4} from "uuid" //lay id random
const ProductPage = () => {
    const [loading,setLoading] = useState(false)
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);
    const [totalRows,setTotalRow] = useState(0)
    const [currentPage,setCurrentPage] = useState(1)
    const [products,setProducts]=useState([])
    const [keysearch,setKeySearch] = useState({
        name:"",
        brand:"",
        category_id:"",
        startus:"",
        min_price:"",
        max_price:""
    })
    const searchProducts = (currentPage)=>{
        var toRecord = 0
        let pageInfor = GetFromToPaging(currentPage,recordPerpage,toRecord)
        toRecord = pageInfor.toRecord
        let fromRecord = pageInfor._FromRecord
        let keySearch = Object.values(keysearch).join('|');
        console.log(keySearch)
        search(keySearch,fromRecord,toRecord).then((data)=>{
            setTotalRow(data.totalRows)
            setProducts([...JSON.parse(data.jsonData)])
            setLoading(true)
        })      
    }
    useEffect(()=>{
        searchProducts(currentPage)
    },[currentPage])
    const handlePageClick = (event) => {
        const newOffset = (event.selected * recordPerpage) % totalRows;
        setItemOffset(newOffset);
        setCurrentPage(event.selected + 1)
      };
      useEffect(() => {
        // Fetch items from another resources.
        const endOffset = itemOffset + recordPerpage;
        setPageCount(Math.ceil(totalRows / recordPerpage));
        
      }, [totalRows, recordPerpage]);
    return (
        <div className='w-full lg:max-w-[1000px] max-w-[400px] sm:max-w-[680px]  mx-auto mb-[60px] text-center'>
            <h3 className='mb-16 text-5xl'>Products</h3>
            <div className='grid grid-cols-1 gap-6 mb-20 lg:grid-cols-3 sm:grid-cols-2'>
            {!loading && new Array(Number(recordPerpage)).fill(0).map(()=>{
                    return (
                        <ProductCartSkeleton key={v4()}></ProductCartSkeleton>
                    )
            })}
            {loading && products.length > 0 && products.map((item)=>{
                return(
                     <ProductsCard key={item.Id} item={item}></ProductsCard>
                )    
            })}
            </div>
            <div className="p-1 m-3">
                <ReactPaginate
                    breakLabel="..."
                    nextLabel="Next >"
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={5}
                    pageCount={pageCount}
                    previousLabel="< Prev"
                    renderOnZeroPageCount={null}
                    className="pagination user"
                    
                />
            </div>
        </div>
    );
};

export default ProductPage;

