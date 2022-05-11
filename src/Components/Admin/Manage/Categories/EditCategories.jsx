import React, { useState } from 'react';
import { CategoriesUpdate } from '../../../../httpApiClientInterface/ApiCategories';

const EditCategories= ({setTableAding})=>{
    const user = JSON.parse(sessionStorage.getItem("UserLogged"))
    const [data,setData] = useState({
        Name:"",
        Note:"",
        Created_By: user.user_Name || "",
        Created_Date:new Date().toLocaleDateString() || ""

    })
    console.log(data)
    const handleInput=(e)=>{
        setData({
            ...data,
            [e.target.name]:e.target.value

        })
    }
    const handleUpdate=()=>{
        console.log(data)
        CategoriesUpdate(data)
        setTableAding(false)
    }
    return (
        <div className='fixed inset-0 flex items-center justify-center'>
            <div onClick={()=>setTableAding(false)} className='absolute inset-0 bg-black bg-opacity-40'></div>
            <div className='form-add w-[400px] h-[400px] z-50 bg-white rounded-lg shadow-2xl p-3'>
                <div className='flex flex-col mb-3'>
                    <label htmlFor="" className='mb-2'>Tên danh mục</label>
                    <div className='px-2 py-3 bg-gray-200 rounded-md'>
                        <input name='Name' onChange={handleInput} type="text" className='w-full text-black bg-transparent outline-none ' placeholder="Hãy nhập tên"/>
                    </div>
                </div> 
                <div className='flex flex-col mb-3'>
                    <label htmlFor="" className='mb-2'>Mo ta</label>
                    <div className='px-2 py-3 bg-gray-200 rounded-md'>
                        <textarea name='Note' onChange={handleInput} type="text" className='w-full text-black bg-transparent outline-none ' placeholder="Hãy nhập mô tả"/>
                    </div>
                </div> 
                <div className='text-right'>
                    <button onClick={handleUpdate} className='right-0 px-5 py-3 text-white border rounded-lg bg-secondColor'>Add</button>
                </div>
            
            </div>
        </div>
             
    )
}

export default EditCategories;


