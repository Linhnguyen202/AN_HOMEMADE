import React, { useEffect, useState } from 'react';
import { CategoriesDelete, DeleteItem, search } from '../../../../httpApiClientInterface/ApiCategories';
import { recordPerpage } from '../../../../Lib/Commomdata';
import { GetFromToPaging } from '../../../../Lib/CommondFunction';
import DetailCategories from './DetailCategoriesModal';
import EditCategories from './EditCategoriesModal';
import ReactPaginate from 'react-paginate';
import { modalConfirm } from '../../../ModalConfirm/ModalConfirm';
const TableCategories = ({setTableAding}) => {
    const [pageCount, setPageCount] = useState(0);
    const [totalRows,setTotalRow] = useState(0)
    const [itemOffset, setItemOffset] = useState(0);
    //
    const [detailModal,setDetailModal] = useState(false)
    const [editModal,setEditModal] = useState(false)
    const [detailCategories,setDetailCategories] = useState({})
    const [editCategories,setEditCategories] = useState({})
    const [currentPage,setCurrentPage] = useState(1)
    const [keysearch,setKeySearch] = useState("")
    const [categories,setCategories]=useState([])
    const searchCategory = (currentPage)=>{
        var toRecord = 0
        let pageInfor = GetFromToPaging(currentPage,recordPerpage,toRecord)
        toRecord = pageInfor.toRecord
        let fromRecord = pageInfor._FromRecord
        search(keysearch,fromRecord,toRecord).then((data)=>{
            setTotalRow(data.totalRows)
            console.log(data.totalRows)
            setCategories([...JSON.parse(data.jsonData )])
        })      
    }
    useEffect(()=>{   
        console.log(123)    
        searchCategory(currentPage);
    },[currentPage])
    const handleInput = (e)=>{
        setKeySearch(e.target.value)
    }
    const handlePageClick = (event) => {
        console.log(event)
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
        <div>
         <div className='p-2 mt-3 bg-white border rounded-lg shadow'>
             <div className='flex flex-wrap items-center gap-4'>
                <div className='flex items-center gap-x-3'>
                    <span>Tên</span>
                    <input onChange={handleInput} type="text" placeholder='Tim kiem' className='p-1 border rounded-lg border-mainColor' />
                </div>
                <div className='flex items-center '>
                    <button className='px-4 py-2 mx-2 text-sm text-white rounded-lg bg-[#32CD32]' onClick={()=>setTableAding(true)}>Thêm mới</button>
                    <button onClick={()=>searchCategory(1)} className='px-2 py-1 mx-2 text-sm text-white rounded-lg bg-[#32CD32]'>
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
                        <thead className='bg-gray-100 border-b '>
                            <tr>
                                <th className='px-6 py-4 text-sm font-medium text-left text-gray-900'>STT</th>
                                <th className='px-6 py-4 text-sm font-medium text-left text-gray-900'>Tên</th>
                                <th className='px-6 py-4 text-sm font-medium text-left text-gray-900'>Mô tả</th>
                                <th className='px-6 py-4 text-sm font-medium text-left text-gray-900'>Người tạo</th>
                                <th className='px-6 py-4 text-sm font-medium text-left text-gray-900'>Ngày tạo</th>
                                <th className='px-6 py-4 text-sm font-medium text-left text-gray-900'>Chức năng</th>
                            </tr>
                        </thead>
                        
                        
                            <TableItems setEditCategories={setEditCategories} setDetailCategories={setDetailCategories} listData={categories} setEditModal={setEditModal} setDetailModal={setDetailModal}></TableItems>        
                        
                    </table>
                    {detailModal ? <DetailCategories setDetailModal={setDetailModal} detailCategories={detailCategories}></DetailCategories> : null}
                    {editModal ? <EditCategories editCategories={editCategories} setEditModal={setEditModal}></EditCategories> : null}            
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
export default TableCategories;

const TableItems = ({listData,setDetailModal,setDetailCategories,setEditModal,setEditCategories})=>{
    const user = JSON.parse(sessionStorage.getItem("UserLogged"))
    const token = user ? user.token : ""
    const [data,setData] = useState({
        Id:"",
        Name:"",
        Note:"",
        Created_By:"",
        Created_Date:""

    })
    const openDetail=(data)=>{
        setDetailCategories(data)
        setDetailModal(true)
}
const openEdit = (data)=>{
    setEditCategories(data)
    setEditModal(true)
 }
const CategoriesDelete = ({index,setData,data,listData,token})=>{
    modalConfirm(DeleteItem,listData[index],token,"Xóa thành công","Xóa thất bại")
}
    return (
      <tbody>
          {listData && listData.length > 0 && listData.map((item,index)=>{
                return (
                    <tr className="bg-white border-b cursor-pointer hover:bg-gray-100" key={item.Id}>
                        <td className="px-6 py-4 text-sm font-light text-gray-900 whitespace-nowrap">{item.STT}</td>
                        <td className="px-6 py-4 text-sm font-light text-gray-900 whitespace-nowrap">{item.Name}</td>
                        <td className="px-6 py-4 text-sm font-light text-gray-900 whitespace-nowrap">{item.Note || ""}</td>
                        <td className="px-6 py-4 text-sm font-light text-gray-900 whitespace-nowrap">{item.Created_By}</td>
                        <td className="px-6 py-4 text-sm font-light text-gray-900 whitespace-nowrap">{new Date(item.Created_Date ).toLocaleDateString()}</td>
                        <td className="flex justify-center px-6 py-4 text-sm font-light text-gray-900 whitespace-nowrap gap-x-2">
                            <button className='text-secondColor' onClick={()=>openDetail(listData[index])}>
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                </svg>
                            </button>
                            <button className='text-red-500' onClick={()=>CategoriesDelete({index,setData,data,listData,token})}>
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                </svg>
                            </button>
                            <button className='text-green-500' onClick={()=>openEdit(listData[index])}>
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </button>
                        </td>
                    </tr>
                  
                )
                
          })}
    
              
      </tbody>
    )
}