import React, { useState } from 'react';
import { GetFromToPaging, GetIdByLinkShopee } from '../../../../Lib/CommondFunction';
import { GetDetailByIdItemIdshop } from '../../../../httpApiClientInterface/ApiShopeeHelper';


const EditProducts = ({setTable})=>{
    // const handleSubmit = ()=>{
    //     setTable(false)
    // }
    const [linkProduct,setlinkProduct] = useState("");
    var productInfo = {}

    const GetInfoByLink=(e)=>{
        console.log(linkProduct)
        if(linkProduct === ""){
            return
        }
   
        var idFromLink = GetIdByLinkShopee(linkProduct);
        console.log("id: ", idFromLink);

        GetDetailByIdItemIdshop(idFromLink.itemId, idFromLink.shopId).then((data)=>{
            productInfo = data;
        })

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
                        <input type="text" onChange={(e)=>setlinkProduct(e.target.value)}  className='w-full text-black bg-transparent outline-none ' placeholder="Dien Link san pham"/>
                    </div>
                    <div className='mt-5 text-right'>
                        <button onClick={GetInfoByLink} className='right-0 px-5 py-3 text-white border rounded-lg bg-secondColor'>Lấy thông tin</button>
                    </div>
                    
                </div>
            </div>     
        </div>
       
    )
}

export default EditProducts;
