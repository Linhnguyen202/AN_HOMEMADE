import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import { getDetail, DeleteItem, search } from '../../../../httpApiClientInterface/ApiProduct';
import { recordPerpage } from '../../../../Lib/Commomdata';
import { GetFromToPaging } from '../../../../Lib/CommondFunction';
import DetailProducts from './DetailProductsModal';
import EditProduct from './EditProductModal';
import { search as searchCate } from '../../../../httpApiClientInterface/ApiCategories';
import { modalConfirm } from '../../../ModalConfirm/ModalConfirm';

const TableProducts = ({setTable}) => {
    const [totalRows,setTotalRow] = useState(0)
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);
    const [currentPage,setCurrentPage] = useState(1)
    const [categoriyList,setCategoryList] = useState()
    //
    const [detailModal,setDetailModal] = useState(false)
    const [editModal,setEditModal] = useState(false)
    const [detailproduct,setDetailProduct] = useState({})
    const [editProduct,setEditProduct] = useState({})
    const [keysearch,setKeySearch] = useState({
        name:"",
        brand:"",
        category_id:"",
        startus:"",
        min_price:"",
        max_price:""
    })
    const [products,setProducts]=useState([])
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
        })      
    }
    const handleInput =(e)=>{
        setKeySearch({
            ...keysearch,
            [e.target.name]:e.target.value
        })
    }
    useEffect(()=>{       
        searchProducts(currentPage);
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
    
    useEffect(()=>{
        searchCate("","","").then((data)=>{
            setCategoryList([...JSON.parse(data.jsonData )])
        })      
    },[])
    return (
        <div>
        <div className='p-2 mt-3 bg-white border rounded-lg shadow'>
            <div className='flex flex-wrap items-center gap-4'>
                <div className='flex flex-row items-center gap-x-3 '>
                    <span>Tên</span>
                    <input onChange={handleInput} name="name"  type="text" placeholder='Tên sp' className='p-1 border rounded-lg border-mainColor' />
                </div>
                <div className='flex flex-row items-center gap-x-3'>
                    <span>Hãng</span>
                    <input name="brand"  onChange={handleInput} type="text" placeholder='Hãng' className='p-1 border rounded-lg border-mainColor' />
                </div>
                <div className='flex flex-row items-center gap-x-3'>
                    <span>Danh mục</span>
                    <select name="Caterogy_Name" id="" className='p-1 border rounded-lg border-mainColor' onChange={(e)=>handleInput(e)} placeholder='--Danh mục--'>
                            <option key={-1} data-id={''} >[Tất cả]</option>
                           {categoriyList && categoriyList.map((item,index)=>{
                               return (
                                   <option key={item.Id} data-id={item.Id} >{item.Name}</option>
                               )
                           })}
                       </select>
                </div>
                <div className='flex flex-row items-center gap-x-3'>
                    <span>Trạng thái</span>
                    <select name="Caterogy_Name" id="" className='p-1 border rounded-lg border-mainColor' onChange={(e)=>handleInput(e)} placeholder='--Danh mục--'>
                            <option key={-1} data-id={''} >[Tất cả]</option>
                            <option key={2} data-id={''} >Còn hàng</option>
                            <option key={3} data-id={''} >Hết hàng</option>
                       </select>
                </div>
                <div className='flex flex-row items-center gap-x-3'>
                    <span>Giá từ</span>
                    <input  name="min_price"   onChange={handleInput}  type="text" placeholder='vnđ' className='p-1 border rounded-lg border-mainColor' />
                </div>
                <div className='flex flex-row items-center gap-x-3'>
                    <span>Đến</span>
                    <input name="max_price" type="text"  onChange={handleInput} placeholder='vnđ' className='p-1 border rounded-lg border-mainColor' />
                </div>
                <div className='flex items-center '>
                    <button className='px-3 py-1 mx-2 text-white rounded-lg bg-[#32CD32]' onClick={()=>setTable(true)}>Thêm mới</button>
                    <button className='px-2 py-1 mx-2 text-sm text-white rounded-lg bg-[#32CD32]' onClick={()=>searchProducts(1)}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </button>
                </div>
               
            </div>
        </div>
        <div className='mt-4 bg-white border rounded-lg shadow'>
            <div className='h-full overflow-x-auto'>
                <table className='min-w-full border-b table-auto '>
                    <thead  className='bg-gray-100 border-b '>
                        <tr className='border-b '>
                            <th className='px-6 py-4 text-sm font-medium text-center text-gray-900'>STT</th>
                            <th className='px-6 py-4 text-sm font-medium text-gray-900'>Tên</th>
                            <th className='px-6 py-4 text-sm font-medium text-gray-900'>Nguồn gốc</th>
                            <th className='px-6 py-4 text-sm font-medium text-gray-900'>Giá</th>
                            <th className='px-6 py-4 text-sm font-medium text-gray-900'>Đánh giá</th>
                            <th className='px-6 py-4 text-sm font-medium text-gray-900'>ID Shop</th>
                            <th className='px-6 py-4 text-sm font-medium text-gray-900'>Người tạo</th>
                            <th className='px-6 py-4 text-sm font-medium text-gray-900'>Ngày tạo</th>
                            <th className='px-6 py-4 text-sm font-medium text-gray-900'>Chức năng</th>
                        </tr>
                    </thead>
                        <TableItems setEditProduct={setEditProduct} setDetailProduct={setDetailProduct} setEditModal={setEditModal} setDetailModal={setDetailModal} listData={products} ></TableItems>        
                    
                </table>
                {detailModal ? <DetailProducts setDetailModal={setDetailModal} detailproduct={detailproduct}></DetailProducts> : null}
                {editModal ? <EditProduct editProduct={editProduct} products={products} setEditModal={setEditModal}></EditProduct> : null}
            </div>
            <div className="p-1 m-3">
                <ReactPaginate
                    breakLabel="..."
                    nextLabel=">"
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={5}
                    pageCount={pageCount}
                    previousLabel="<"
                    renderOnZeroPageCount={null}
                    className="pagination"
                />
            </div>
        </div>
        </div>
    );
};
export default TableProducts;

const TableItems = ({listData,setDetailProduct,setDetailModal,setEditModal,setEditProduct})=>{
    const user = JSON.parse(sessionStorage.getItem("UserLogged"))
    const token = user ? user.token : ""
    const openDetail=(data)=>{
        setDetailProduct(data)
        setDetailModal(true)
    }
    const  ProductsDelete=({index,listData,token})=>{
        modalConfirm(DeleteItem,listData[index],token,"Xóa thành công","Xóa thất bại")
    }
    const openEdit = (data)=>{
        console.log(data)
        setEditProduct(data)
        setEditModal(true)
    }

    return (
        <>
        <tbody>
          {listData && listData.length > 0 && listData.map((item,index)=>{
                return (
                    <tr className="bg-white border-b cursor-pointer hover:bg-gray-100" key={item.Id}>
                        <th className="px-6 py-4 text-sm font-light text-gray-900 whitespace-nowrap w-18">{item.STT}</th>
                        <th className="px-6 py-4 text-sm font-light text-left text-gray-900 whitespace-nowrap w-50">{item.Name}</th>
                        <th className="px-6 py-4 text-sm font-light text-left text-gray-900 whitespace-nowrap">{item.Origin || ""}</th>
                        <th className="px-6 py-4 text-sm font-light text-left text-gray-900 whitespace-nowrap">{item.Price}</th>
                        <th className="px-6 py-4 text-sm font-light text-left text-gray-900 whitespace-nowrap">{item.Rating_Star}</th>
                        <th className="px-6 py-4 text-sm font-light text-left text-gray-900 whitespace-nowrap">{item.Rating_Star}</th>
                        <th className="px-6 py-4 text-sm font-light text-left text-gray-900 whitespace-nowrap">{item.Created_By}</th>
                        <th className="px-6 py-4 text-sm font-light text-gray-900 whitespace-nowrap">{new Date(item.Created_Date).toLocaleDateString()}</th>
                        <th className="flex justify-center px-6 py-4 text-sm font-light text-gray-900 whitespace-nowrap gap-x-2">
                            <button className='text-secondColor' onClick={()=>openDetail(listData[index])}>
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                </svg>
                            </button>
                            <button className='text-red-500' onClick={()=>ProductsDelete({index,listData,token})}>
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                </svg>
                            </button>
                            <button className='text-green-500' onClick={()=>openEdit(listData[index])}>
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </button>
                        </th>
                    </tr>
                )
                
          })}
      </tbody>
        </>
   
    )
}