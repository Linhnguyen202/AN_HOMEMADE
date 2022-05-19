import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { CategoriesUpdate } from '../../../../httpApiClientInterface/ApiCategories';

const AddCategories= ({setTableAding})=>{
    const user = JSON.parse(sessionStorage.getItem("UserLogged")) || ""
    const [data,setData] = useState({
        name:"",
        note:"",
        created_By: user.user_Name || "",
        created_Date:new Date() || "",
        modified_By: user.user_Name || "",
        modified_Date:new Date(),
        deleted: 0

    })
    console.log(data)
    const handleInput=(e)=>{
        setData({
            ...data,
            [e.target.name]:e.target.value

        })
    }
    const handleUpdate=()=>{
        var user = JSON.parse(sessionStorage.getItem("UserLogged"))
        console.log(data)
        CategoriesUpdate(data,user.token)
        setTableAding(false) 
    }
    return (
        <div className='fixed inset-0 flex items-center justify-center'>
            <div onClick={()=>setTableAding(false)} className='absolute inset-0 bg-black bg-opacity-40'></div>
            <div className='form-add w-[400px] h-[400px] z-50 bg-white rounded-lg shadow-2xl p-3'>
                <div className='flex justify-between p-2 mb-3 shadow modal-header'>
                    <h3 className='text-2xl font-bold text-center text-secondColor'>Thêm Danh mục</h3>
                    <div className='p-1 text-right '>
                        <button className='' onClick={()=>setTableAding(false)}>X</button>
                    </div>
                </div>
                <div className='flex flex-col mb-3'>
                    <label htmlFor="" className='mb-2'>Tên danh mục</label>
                    <div className='px-2 py-3 bg-gray-200 rounded-md'>
                        <input name='name' onChange={handleInput} type="text" className='w-full text-black bg-transparent outline-none ' placeholder="Hãy nhập tên"/>
                    </div>
                </div> 
                <div className='flex flex-col mb-3'>
                    <label htmlFor="" className='mb-2'>Mô tả</label>
                    <div className='px-2 py-3 bg-gray-200 rounded-md'>
                        <textarea name='note' onChange={handleInput} type="text" className='w-full text-black bg-transparent outline-none ' placeholder="Hãy nhập mô tả"/>
                    </div>
                </div> 
                <div className='text-right'>
                    <button onClick={handleUpdate} className='right-0 px-5 py-3 text-white border rounded-lg bg-secondColor'>Add</button>
                </div>
            
            </div>
        </div>
             
    )
}

export default AddCategories;


