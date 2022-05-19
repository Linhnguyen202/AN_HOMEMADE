import React, { useState } from 'react';
import { categoriesItemEdit } from '../../../../httpApiClientInterface/ApiCategories';

const EditCategories = ({setEditModal,editCategories}) => {
    const user = JSON.parse(sessionStorage.getItem("UserLogged"))
    const [data,setData] = useState(editCategories)
    // const [data,setData] = useState({
    //     Id:editCategories.Id,
    //     STT:editCategories.STT,
    //     name:"",
    //     note:"",
    //     created_By: user.user_Name || "",
    //     created_Date:new Date() || "",
    //     modified_By: user.user_Name || "",
    //     modified_Date:new Date(),
    //     deleted: 0

    // })
    const handleEdit = (e)=>{
        setData({
            ...data,
            [e.target.name]:e.target.value

        })
    }
    const handleEditApi=()=>{
        setEditModal(false)
        categoriesItemEdit(data,user.token)
    }
    return (
        <div className='fixed inset-0 flex items-center justify-center'>
             <div className='absolute inset-0 bg-black bg-opacity-40' onClick={()=>setEditModal(false)} ></div>
             <div className='form-add  w-[1000px] h-[400px] overflow-y-scroll z-50 bg-white rounded-lg shadow-2xl p-3'>
                <h3 className='text-xl font-bold text-center'>Chi tiet san pham</h3>
                <label htmlFor="" className='mb-2'>Tên</label>
                <div className='px-2 py-3 mb-2 bg-gray-200 rounded-md'>
                    <input onChange={handleEdit} name='Name' value={data.Name || ""}   type="text"  className='w-full text-black bg-transparent outline-none ' placeholder="Dien ten san pham"/>
                </div>
                <label htmlFor="" className='mb-2'>Mô tả</label>
                <div className='px-2 py-3 mb-2 bg-gray-200 rounded-md'>
                    <textarea onChange={handleEdit} name='Note'  value={data.Note || ""}   type="text"  className='w-full text-black bg-transparent outline-none ' placeholder="Dien ten san pham"/>
                </div>
                <div className='mt-5 text-right'>
                        <button onClick={handleEditApi} className='right-0 px-5 py-3 text-white border rounded-lg bg-secondColor'>Thay đổi</button>
                </div>
             </div>
        </div>
    );
};

export default EditCategories;