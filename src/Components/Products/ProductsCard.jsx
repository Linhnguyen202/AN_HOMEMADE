import React from 'react';

const ProductsCard = () => {
    return (
        <div className='flex flex-col  p-3 transition-all mb-10  bg-[main-color] rounded-lg cursor-pointer select-none product-card hover:shadow-2xl'>
            <div>
                <img src="https://paradoxgrooming.com/wp-content/uploads/2021/03/IMG_6547-scaled-1-300x300.jpg" alt="" className="w-full h-[260px] rounded-lg mb-2 object-cover"/>
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