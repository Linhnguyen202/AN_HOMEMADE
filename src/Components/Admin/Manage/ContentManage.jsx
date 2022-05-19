import React, { useState } from 'react';
import CategoryBox from './Categories/CategoryBox';
import ProductsBox from './Products/ProductsBox';
import Profile from './Profile';

const ContentManage = () => {
    const userName = JSON.parse(sessionStorage.getItem("UserLogged"));
    const [show ,setShow] = useState(true)
    const [products,setProducts] = useState(true)
    const [profile,setProfile] = useState(false)
    return (
        <div className='relative w-full h-screen'>
            <div className={`top-0 right-0 left-0 w-full flex items-center justify-between text-[#36454F] bg-white border shadow-lg `}>
                <div className="flex items-center mb-1 gap-x-4">                 
                    <ul className='flex items-center'>
                        <li onClick={()=>setProducts(true)} className='px-3 py-2 text-lg font-semibold border-r cursor-pointer hover:opacity-70'>Trang chủ</li>
                        <li onClick={()=>setProducts(true)} className='px-3 py-2 text-lg font-semibold border-r cursor-pointer hover:opacity-70'>Sản phẩm</li>
                        <li onClick={()=>setProducts(false)} className='px-3 py-2 text-lg font-semibold border-r cursor-pointer hover:opacity-70'>Danh Mục</li>
                        <li onClick={()=>setProfile(true)}  className='px-3 py-2 text-lg font-semibold border-r cursor-pointer hover:opacity-70'>Thông tin</li>
                    </ul>  
                </div>
                 <div className='flex'> 
                    <img className="w-10 h-10" src="https://lh5.googleusercontent.com/-zIDhfNZhvFa7bmUpA4PKw6EvjIPh4hh8_IYGa-Is6GzVJTEDMG4qKIgfyyDusGqYs9UfIAO_W0TyYaqiUiA7Ck=w16383" alt="" />
                    <h3 className='text-black '>AN_HOMEMADE</h3>
                 </div>
               
            </div>
            {products ?  <ProductsBox show={show} setShow={setShow}></ProductsBox> : <CategoryBox show={show} setShow={setShow}></CategoryBox>}
            {profile ? <Profile setProfile={setProfile} ></Profile> : null}
        </div>
    );
};

export default ContentManage;
