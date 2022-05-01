import React from 'react';

const ProductsCard = () => {
    return (
        <div className='flex flex-col  p-3 transition-all mb-10  bg-[main-color] rounded-lg cursor-pointer select-none product-card hover:shadow-2xl'>
            <div>
                <img src="https://static.wixstatic.com/media/651a17_2cc52e5a3e394508ae2cc7c4c488fc87~mv2.jpg/v1/fill/w_233,h_233,al_c,q_80,usm_0.66_1.00_0.01/651a17_2cc52e5a3e394508ae2cc7c4c488fc87~mv2.webp" alt="" className="w-full h-[260px] rounded-lg mb-2 object-cover"/>
            </div> 
            <div className='flex flex-col flex-1 gap-3 p-3'>
                <h3 className='mb-3 text-lg font-bold text-black'>Sáp vuốt tóc FIKA Version 2021</h3>
                <div className='flex justify-between'>
                    <span className='block text-center text-black'>370.000 ₫</span>
                    <span className='block text-center text-black'>Da ban:{30}</span>
                </div>
                <button className='w-full py-2 text-white transition-opacity rounded-lg bg-secondColor hover:opacity-80'>Xem</button>
            </div>
        </div>
    );
};

export default ProductsCard;