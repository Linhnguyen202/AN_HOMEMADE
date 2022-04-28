import React from 'react';
import ProductsCard from '../Components/Products/ProductsCard';

const ProductPage = () => {
    return (
        <div className='w-full lg:max-w-[1000px] max-w-[400px] sm:max-w-[680px]  mx-auto mb-[60px] text-center'>
            <h3 className='mb-16 text-5xl'>Products</h3>
            <div className='grid grid-cols-1 gap-6 mb-20 lg:grid-cols-3 sm:grid-cols-2'>
                <ProductsCard></ProductsCard>
                <ProductsCard></ProductsCard>
                <ProductsCard></ProductsCard>
                <ProductsCard></ProductsCard>
                <ProductsCard></ProductsCard>
                <ProductsCard></ProductsCard>
                <ProductsCard></ProductsCard>
                <ProductsCard></ProductsCard>
            </div>
            <div className='flex items-center justify-center gap-x-4'>
                <span className='cursor-pointer'>1</span>
                <span  className='cursor-pointer'>2</span>
                <span  className='cursor-pointer'>3</span>
                <span  className='cursor-pointer'>...</span>
                <span  className='cursor-pointer'>5</span>

            </div>
        </div>
    );
};

export default ProductPage;