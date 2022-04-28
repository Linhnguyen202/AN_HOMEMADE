import React from 'react';

const ProducsNewList = () => {
    return (
        <div className="grid max-w-[350px] mx-auto sm:max-w-[730px] lg:max-w-none grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mb-20">
            <ProductsNewItem></ProductsNewItem>
            <ProductsNewItem></ProductsNewItem>
            <ProductsNewItem></ProductsNewItem>
            <ProductsNewItem></ProductsNewItem>
            <ProductsNewItem></ProductsNewItem>
            <ProductsNewItem></ProductsNewItem>
        </div>
    );
};

export default ProducsNewList;

const ProductsNewItem = ()=>{
    return (
        <div className='flex items-center px-2 border rounded-lg cursor-pointer gap-x-5 '>
                <div className='h-full'>
                    <img src="https://static.wixstatic.com/media/651a17_c94820ecbe5c416597ffa8eb1fee1b73~mv2.jpg/v1/fill/w_625,h_938,al_c,q_85,usm_0.66_1.00_0.01/651a17_c94820ecbe5c416597ffa8eb1fee1b73~mv2.webp" alt="" className=' h-full object-fit w-[60px] '/>
                </div>
                <div className='flex flex-col flex-1 py-2 text-left gap-x-3 whitespace-nowrap'>
                    <h3 className='text-sm font-bold tracking-widest uppercase whitespace-nowrap'>Charm oil</h3>
                    <span className='text-secondText'>fear of god</span>
                    <span className='text-priceText'>30 000</span>

                </div>
        </div>
    )
}