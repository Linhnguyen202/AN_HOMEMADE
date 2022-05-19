import React, { useState } from 'react';
import { productItemEdit } from '../../../../httpApiClientInterface/ApiProduct';
const EditProduct = ({setEditModal,editProduct,products}) => {
    const user = JSON.parse(sessionStorage.getItem("UserLogged"))
    const token = user ? user.token : ""
    const [editItem,setEditItem] = useState(editProduct)
    const handleEditProducts = (e)=>{        
        if(e.target.name === "Price"){
            setEditItem({
                ...editItem, 
                [e.target.name]:parseFloat(e.target.value)?parseFloat(e.target.value): 0})     
        }
        else if(e.target.name === "Rating_Star"){
            setEditItem({
                ...editItem, 
                [e.target.name]:parseInt(e.target.value)?parseFloat(e.target.value): 0})     
        }
        else{
            setEditItem({
                ...editItem, 
                [e.target.name]:e.target.value})   
        }
        
    }
    const  handleEditdata = ()=>{
        let arrProducts = editItem;
        arrProducts =Object.fromEntries(
            Object.entries(arrProducts).map((item)=>{
                return item.map((value)=>{
                    if(value === null)
                    return "linh"
                    return value
                })
            })
        )
       
      
        console.log(arrProducts)
        
        productItemEdit(arrProducts,token)
    } 
    return (
        <div className='fixed inset-0 flex items-center justify-center'>
             <div className='absolute inset-0 bg-black bg-opacity-40' onClick={()=>setEditModal(false)}></div>
             <div className='form-add  w-[1000px] h-[400px] overflow-y-scroll z-50 bg-white rounded-lg shadow-2xl p-3'>
                <label htmlFor="" className='mb-2'>Tên sản phẩm</label>
                <div className='px-2 py-3 mb-2 bg-gray-200 rounded-md'>
                    <input name="Name" onChange={handleEditProducts} value={editItem.Name || ""}  type="text"  className='w-full text-black bg-transparent outline-none ' placeholder="Dien ten san pham"/>
                </div>
                <label htmlFor="" className='mb-2'>Nguồn gốc</label>
                <div className='px-2 py-3 mb-2 bg-gray-200 rounded-md'>
                    <input name="Origin" onChange={handleEditProducts} value={editItem.Origin || ""}   type="text"  className='w-full text-black bg-transparent outline-none ' placeholder="Dien ten san pham"/>
                </div>
                <label htmlFor="" className='mb-2'>Giá</label>
                <div className='px-2 py-3 mb-2 bg-gray-200 rounded-md'>
                    <input name="Price" onChange={handleEditProducts}  value={editItem.Price || ""}  type="text"  className='w-full text-black bg-transparent outline-none ' placeholder="Dien ten san pham"/>
                </div>
                <label htmlFor="" className='mb-2'>Đánh giá</label>
                <div className='px-2 py-3 mb-2 bg-gray-200 rounded-md'>
                    <input name="Rating_Star" onChange={handleEditProducts}  value={editItem.Rating_star || ""} type="text"  className='w-full text-black bg-transparent outline-none ' placeholder="Dien ten san pham"/>
                </div>
                <div className='mt-5 text-right'>
                        <button onClick={handleEditdata} className='right-0 px-5 py-3 text-white border rounded-lg bg-secondColor'>Thay đổi</button>
                </div>
             </div>
             
        </div>
    );
};

export default EditProduct;