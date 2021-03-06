import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import { getDetail, DeleteItem, search, GetById } from '../../../../httpApiClientInterface/ApiProduct';
import { recordPerpage } from '../../../../Lib/Commomdata';
import { GetFromToPaging } from '../../../../Lib/CommondFunction';
import DetailProducts from './DetailProductsModal';
import EditProduct from './EditProductModal';
import { search as searchCate } from '../../../../httpApiClientInterface/ApiCategories';
import { modalConfirm } from '../../../ModalConfirm/ModalConfirm';
import {BookOpenIcon, TrashIcon,PencilAltIcon} from "@heroicons/react/outline"
import AddProducts from './AddProductsModal';
import DeleteProductModal from './DeleteProductModal';
const TableProducts = () => {
    const [totalRows,setTotalRow] = useState(0)
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);
    const [currentPage,setCurrentPage] = useState(1)
    const [categoriyList,setCategoryList] = useState()
    //
    const [table,setTable] = useState(false)
    const [detailModal,setDetailModal] = useState(false)
    const [deleteModal,setDeleteModal] = useState(false)
    const [editModal,setEditModal] = useState(false)
    const [tempProductInfo, setTempProductInfo] = useState({})
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
        search(keySearch,fromRecord,toRecord).then((data)=>{
            setTotalRow(data.totalRows)
            setProducts([...JSON.parse(data.jsonData)])
        })      
    }
    const handleInput =(e)=>{
        if(e.target.name === "category_id"){
            if(e.target.value === "[T???t c???]"){
                setKeySearch({
                    ...keysearch,
                    [e.target.name]:" "
                })
            }
            else{
                setKeySearch({
                    ...keysearch,
                    [e.target.name]: parseInt( e.target.options[e.target.selectedIndex].dataset.id )
                })
            }
        }
       else{
        setKeySearch({
            ...keysearch,
            [e.target.name]:e.target.value
        })
       }
       
        
    }
    useEffect(()=>{
        document.title = "S???n ph???m"
    },[])
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
    const handleSubmit = (e)=>{
       
        e.preventDefault()
        searchProducts(1)

    }
    return (
        <div>
        <div className='flex p-2 mt-3 bg-white border rounded-lg shadow'>
            <form className='flex flex-wrap items-center gap-4'>
                <div className='flex flex-row items-center gap-x-3 '>
                    <span>T??n</span>
                    <input onChange={handleInput} name="name"  type="text" placeholder='T??n sp' className='p-1 border rounded-lg border-mainColor' />
                </div>
                <div className='flex flex-row items-center gap-x-3'>
                    <span>H??ng</span>
                    <input name="brand"  onChange={handleInput} type="text" placeholder='H??ng' className='p-1 border rounded-lg border-mainColor' />
                </div>
                <div className='flex flex-row items-center gap-x-3'>
                    <span>Danh m???c</span>
                    <select name="category_id" id="" className='p-1 border rounded-lg border-mainColor'  onChange={(e)=>handleInput(e)} placeholder='--Danh m???c--'>
                            <option key={-1} data-id={''} >[T???t c???]</option>
                           {categoriyList && categoriyList.map((item,index)=>{
                               return (
                                   <option key={item.Id} data-id={item.Id} >{item.Name}</option>
                               )
                           })}
                       </select>
                </div>
                {/* <div className='flex flex-row items-center gap-x-3'>
                    <span>Tr???ng th??i</span>
                    <select name="Caterogy_Name" id="" className='p-1 border rounded-lg border-mainColor' onChange={(e)=>handleInput(e)} placeholder='--Danh m???c--'>
                            <option key={-1} data-id={''} >[T???t c???]</option>
                            <option key={2} data-id={'N'} >C??n h??ng</option>
                            <option key={3} data-id={'Y'} >H???t h??ng</option>
                       </select>
                </div> */}
                <div className='flex flex-row items-center gap-x-3'>
                    <span>Gi?? t???</span>
                    <input  name="min_price"   onChange={handleInput}  type="text" placeholder='vn??' className='p-1 border rounded-lg border-mainColor' />
                </div>
                <div className='flex flex-row items-center gap-x-3'>
                    <span>?????n</span>
                    <input name="max_price" type="text"  onChange={handleInput} placeholder='vn??' className='p-1 border rounded-lg border-mainColor' />
                </div>
                <div className='flex items-center '>   
                    <button className='px-2 py-2 mx-2 text-sm text-white rounded-lg bg-[#32CD32]' onClick={handleSubmit}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </button>
                    <span className='px-3 py-2 mx-2 cursor-pointer text-white rounded-lg bg-[#32CD32]' onClick={()=>setTable(true)}>Th??m m???i</span>
                </div>
            </form>
        </div>
        <div className='mt-4 bg-white border rounded-lg shadow'>
            <div className='h-full overflow-x-auto'>
                <table className='min-w-full border-b table-auto '>
                    <thead  className='bg-gray-100 border-b '>
                        <tr className='border-b '>
                            <th className='px-6 py-4 text-sm font-medium text-center text-gray-900'>STT</th>
                            <th className='px-6 py-4 text-sm font-medium text-gray-900'>T??n</th>
                            <th className='px-6 py-4 text-sm font-medium text-gray-900'>Ngu???n g???c</th>
                            <th className='px-6 py-4 text-sm font-medium text-gray-900'>Gi??</th>
                            <th className='px-6 py-4 text-sm font-medium text-gray-900'>????nh gi??</th>
                            <th className='px-6 py-4 text-sm font-medium text-gray-900'>Ng?????i t???o</th>
                            <th className='px-6 py-4 text-sm font-medium text-gray-900'>Ng??y t???o</th>
                            <th className='px-6 py-4 text-sm font-medium text-gray-900'>Ch???c n??ng</th>
                        </tr>
                    </thead>
                        <TableItems setDeleteModal={setDeleteModal}  searchProducts={searchProducts}  setTempProductInfo={setTempProductInfo} setEditModal={setEditModal} setDetailModal={setDetailModal} listData={products} ></TableItems>        
                    
                </table>
                {detailModal ? <DetailProducts setDetailModal={setDetailModal} tempProductInfo={tempProductInfo}></DetailProducts> : null}
                {editModal ?  <EditProduct   searchProducts = {searchProducts} setEditModal={setEditModal} tempProductInfo={tempProductInfo} products={products} ></EditProduct> : null}
                {table ? <AddProducts  searchProducts={searchProducts} setTable={setTable}></AddProducts> : null}      
                {deleteModal ? <DeleteProductModal searchProducts={searchProducts} pro_Id={tempProductInfo.Id} setDeleteModal={setDeleteModal}></DeleteProductModal> : null}                
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

const TableItems = ({listData, setTempProductInfo,setDetailModal,setEditModal,searchProducts,setDeleteModal})=>{
    let dollarVnLocale = Intl.NumberFormat('en-VN');
    const user = JSON.parse(sessionStorage.getItem("UserLogged"))
    const token = user ? user.token : ""
    const showModalDetail=(pro_id)=>{
        GetById(pro_id).then((response)=>{
            setTempProductInfo(response.jsonData)
             setDetailModal(true)
        })

        
    }
    const showModalEdit = (pro_id)=>{
        GetById(pro_id).then((response)=>{
            setTempProductInfo(response.jsonData)
            setEditModal(true)
        })
        
    }
    const showModalDel = (pro_Id)=>{
        setTempProductInfo({
            Id : pro_Id
        })
        setDeleteModal(true)
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
                        <th className="px-6 py-4 text-sm font-light text-left text-gray-900 whitespace-nowrap">{dollarVnLocale.format(item.Price)}</th>
                        <th className="px-6 py-4 text-sm font-light text-left text-gray-900 whitespace-nowrap">{item.Rating_Star}</th>
                        <th className="px-6 py-4 text-sm font-light text-left text-gray-900 whitespace-nowrap">{item.Created_By}</th>
                        <th className="px-6 py-4 text-sm font-light text-gray-900 whitespace-nowrap">{new Date(item.Created_Date).toLocaleDateString()}</th>
                        <th className="flex justify-center px-6 py-4 text-sm font-light text-gray-900 whitespace-nowrap gap-x-2">
                            <button className='text-secondColor' onClick={()=>showModalDetail(item.Id)}>
                                <BookOpenIcon className='w-6 h-6'></BookOpenIcon>
                            </button>
                            <button className='text-red-500' onClick={()=>showModalDel(item.Id)}>
                                <TrashIcon className='w-6 h-6'></TrashIcon>
                            </button>
                            <button className='text-green-500' onClick={()=>showModalEdit(item.Id)}>         
                                <PencilAltIcon className='w-6 h-6'></PencilAltIcon>
                            </button>
                        </th>
                    </tr>
                )
                
          })}
      </tbody>
        </>
   
    )
}