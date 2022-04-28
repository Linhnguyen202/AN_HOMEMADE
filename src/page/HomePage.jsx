import React from 'react';
import ProducsNewList from '../Components/Products/ProducsNew';
import ProductSesionList from '../Components/Products/ProductCardSesion';
import ProductsCard from '../Components/Products/ProductsCard';
import ProductsList from '../Components/Products/ProductsList';
import About from '../Components/About/About'

const HomePage = () => {
    return (
        <section className="pb-20 mb-10 movies-layout page-container">
            <ProductSesionList></ProductSesionList>
            <div className='w-full max-w-[1000px] m-auto mb-11 text-center'>
                <span className='block mb-3 text-sm'>AN_HOMEMADE</span>
                <h3 className='text-3xl font-bold mb-14 '>PICKS FOR THIS SEASON</h3>
                <div className="grid max-w-[350px] mx-auto sm:max-w-[730px] lg:max-w-none grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mb-20">
                    <ProductsCard></ProductsCard>
                    <ProductsCard></ProductsCard>
                    <ProductsCard></ProductsCard>
                </div>
            </div>
           
            <div className='w-full max-w-[1000px] mx-auto mb-[200px] text-center'>
                <span className='block mb-3 text-sm'>AN_HOMEMADE</span>
                <h3 className='text-3xl font-bold uppercase mb-14'>NEw Products</h3>
                <ProducsNewList></ProducsNewList>
            </div>
            <About></About>
        </section>
    );
};

export default HomePage;