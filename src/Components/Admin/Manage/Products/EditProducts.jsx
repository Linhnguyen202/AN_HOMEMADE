import React from 'react';
import { shopeeApi } from '../../../../httpApiClientInterface/ApiProduct';

const EditProducts = ({setTable})=>{
    const handleSubmit = ()=>{
        setTable(false)
    }
    const handleCutId=(e)=>{
        if(e.target.value === ""){
            return
        }
        var link = e.target.value
        var totalID = link.slice(link.indexOf("-i.") + 3, link.indexOf("?sp_atk")).split('.');
        console.log("shop id: ", totalID[0]);
        console.log("item id: ", totalID[1]);
        shopeeApi( totalID[0], totalID[1])
    }
    return (
        <div className='fixed inset-0 flex items-center justify-center'>
            <div className='absolute inset-0 bg-black bg-opacity-40' onClick={()=>setTable(false)}></div>
             <div className='form-add  w-[400px] h-[400px] z-50 bg-white rounded-lg shadow-2xl p-3'>
                <div className='flex flex-col mb-3'>
                    <label htmlFor="" className='mb-2'>Ten san pham</label>
                    <div className='px-2 py-3 bg-gray-200 rounded-md'>
                        <input type="text"  className='w-full text-black bg-transparent outline-none ' placeholder="Dien ten san pham"/>
                    </div>
                    <label htmlFor="" className='mb-2'>Link Shopee</label>
                    <div className='px-2 py-3 bg-gray-200 rounded-md'>
                        <input onChange={handleCutId} type="text" className='w-full text-black bg-transparent outline-none ' placeholder="Dien Link san pham"/>
                    </div>
                    <div className='mt-5 text-right'>
                        <button onClick={handleSubmit} className='right-0 px-5 py-3 text-white border rounded-lg bg-secondColor'>Add</button>
                    </div>
                    
                </div>
            </div>     
        </div>
       
    )
}

export default EditProducts;
