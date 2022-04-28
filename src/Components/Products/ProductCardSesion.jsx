import React from 'react';

const ProductSesionList = () => {
    return (
        <div className='grid grid-cols-4 h-[350px] mb-20 gap-x-4'>
           <ProductSesionItem></ProductSesionItem>
           <ProductSesionItem></ProductSesionItem>
           <ProductSesionItem></ProductSesionItem>
           <ProductSesionItem></ProductSesionItem>
        </div>
       
    );
};

export default ProductSesionList;
const ProductSesionItem = ()=>{
    return (
        <div className='relative overflow-hidden transition-all border shadow-2xl cursor-pointer select-none group product-card'>
            <div className="absolute inset-0 z-3  bg-gradient-to-t overlay from-[rgba(0,0,0,0.2)] to-[rgba(0,0,0,0.2)]"></div>
            <div>
                <img src="https://cdn.shopify.com/s/files/1/0910/3062/files/Ger_8oz_bfb4d9cc-9cf3-4db0-a2df-27d98242ba63_750x960_crop_center.jpg?v=1634740967" alt="" className="object-cover w-full h-full transition-all duration-500 group-hover:scale-110"/>
            </div> 
            <div className='absolute bottom-4 left-6 '>
                <h3 className='text-xl text-white uppercase'>Hust</h3>
                <span className='text-sm text-white uppercase'>louis vuitton</span>
            
            </div>
        </div>
    )
}