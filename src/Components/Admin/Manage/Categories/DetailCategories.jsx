import React from 'react';

const DetailCategories = ({detailCategories,setDetailModal}) => {
    console.log(detailCategories)
    let Created_Date = new Date(detailCategories.Created_Date);
    let Modified_Date = new Date(detailCategories.Modified_Date)
    return (
        <div onClick={()=>setDetailModal(false)} className='fixed inset-0 flex items-center justify-center'>
        <div  className='absolute inset-0 bg-black bg-opacity-40'></div>
        <div className='form-Detail  w-[500px] h-[400px]  z-50 bg-white rounded-lg shadow-2xl p-4'>
            
            <div className='text-center'>
                <h1 className='text-2xl font-bold'>Chi tiết</h1>
            </div>
                {detailCategories && (
                    <div>
                        <h3 className='py-2'><span className='text-xl font-bold'>ID:</span> {detailCategories.Id}</h3>
                         <h3 className='py-2'><span className='text-xl font-bold'>Name:</span> {detailCategories.Name}</h3>
                         <h3 className='py-2'><span className='text-xl font-bold'>Created_date:</span> {Created_Date.toLocaleDateString()}</h3>
                         <h3 className='py-2'><span className='text-xl font-bold'>Modified_date:</span> {Modified_Date.toLocaleDateString()}</h3>
                         <h3 className='py-2'><span className='text-xl font-bold'>Created_By:</span>{detailCategories.Created_By.toLocaleString()}</h3>
                    </div>
                   
            

                )
                }
           
            
        </div>
   </div>
    );
};

export default DetailCategories;