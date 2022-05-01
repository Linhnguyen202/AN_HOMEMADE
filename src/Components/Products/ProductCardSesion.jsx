import React from 'react';

const ProductSesionList = () => {
    return (
        <div className='md:grid md:grid-cols-4  hidden grid-cols-1 sm:grid-cols-2 mx-10 gap-y-5 lg:mx-0 lg:h-[360px] mb-20 gap-x-4'>
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
            <div className='w-full h-full'>
                <img src="https://static.wixstatic.com/media/651a17_866677e871e840619b4d4447d8018533~mv2.jpg/v1/fill/w_233,h_233,al_c,q_80,usm_0.66_1.00_0.01/651a17_866677e871e840619b4d4447d8018533~mv2.webp" alt="" className="w-full h-full transition-all duration-500 object-fit group-hover:scale-110"/>
            </div> 
            <div className='absolute bottom-4 left-6 '>
                <h3 className='text-xl text-white uppercase'>Hust</h3>
                <span className='text-sm text-white uppercase'>louis vuitton</span>
            
            </div>
        </div>
    )
}