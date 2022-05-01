import React, { useState } from 'react';
import CategoryBox from './CategoryBox';
import ProductsBox from './ProductsBox';

const ContentManage = () => {
    const [show ,setShow] = useState(true)
    const [products,setProducts] = useState(true)
    return (
        <div className='relative w-full h-screen '>
            <div className={`absolute top-0 bottom-0 left-0 w-[250px]  text-white bg-secondColor ${show ? "block" : "hidden"}`}>
                 <div className=''> 
                    <ul>
                       <li onClick={()=>setProducts(true)} className='px-3 py-2 text-lg font-semibold border-b cursor-pointer hover:opacity-70'>Sản phẩm</li>
                       <li onClick={()=>setProducts(false)} className='px-3 py-2 text-lg font-semibold border-b cursor-pointer hover:opacity-70'>Danh Mục</li>
                    </ul>    
                 </div>
            </div>
            {products ?  <ProductsBox show={show} setShow={setShow}></ProductsBox> : <CategoryBox show={show} setShow={setShow}></CategoryBox>}
          
            <div className='fixed bottom-4 left-5 group hover:bg-white'>
                <button onClick={()=>setShow(!show)} className='p-3 font-medium text-white border group-hover:text-black'>Add</button>
            </div>
        </div>
    );
};

export default ContentManage;
