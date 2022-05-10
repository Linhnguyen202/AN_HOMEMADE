import React from 'react';

const EditProducts = (props)=>{
    return (
        <div className='form-add'>
           <InputEdit label="Ten san pham"></InputEdit>    
        </div>     
    )
}

export default EditProducts;

const InputEdit = ({label})=>{
    return (
        <div className='flex flex-col mb-3'>
                <label htmlFor="" className='mb-2'>{label}</label>
                <div className='px-2 py-3 bg-gray-200 rounded-md'>
                    <input type="text" className='w-full text-black bg-transparent outline-none ' placeholder={label}/>
                </div>
               
        </div> 
    )
}