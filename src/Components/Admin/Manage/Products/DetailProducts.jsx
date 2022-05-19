import React, { useEffect, useState } from 'react';
import { getDetail } from '../../../../httpApiClientInterface/ApiProduct';

const DetailProducts = ({setDetailModal,detailproduct}) => {
    console.log(detailproduct)
    let Created_Date = new Date(detailproduct.Created_Date);
    let Modified_Date = new Date(detailproduct.Modified_Date)
    return (
        <div className='fixed inset-0 flex items-center justify-center'>
             <div onClick={()=>setDetailModal(false)} className='absolute inset-0 bg-black bg-opacity-40'></div>
             <div className='form-Detail  w-[800px] h-[400px] overflow-y-scroll z-50 bg-white rounded-lg shadow-2xl p-3'>
                <div className='text-center'>
                    <h1 className='text-2xl font-bold'>Chi tiết</h1>
                </div>
                 {detailproduct && (
                     <div>
                        <div className='py-2'><span className='text-xl font-bold'>ID:</span> {detailproduct.Id}</div>
                         <div className='py-2'><span className='text-xl font-bold'>Name:</span> {detailproduct.Name}</div>
                         <div className='py-2'><span className='text-xl font-bold'>Description:</span> {detailproduct.Description}</div>
                         <div className='py-2'><span className='text-xl font-bold'>Created_date:</span> {Created_Date.toLocaleDateString() }</div>
                         <div className='py-2'><span className='text-xl font-bold'>Modified_date:</span> {Modified_Date.toLocaleDateString()}</div>
                         <div className='py-2'><span className='text-xl font-bold'>Created_By:</span>{detailproduct.Created_By}</div>
                     </div>
                 )}
             </div>
        </div>
    );
};

export default DetailProducts;