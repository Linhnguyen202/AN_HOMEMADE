import React from 'react';

const ProductsDetail = () => {
    return (
        <div  className='w-full lg:max-w-[1000px] max-w-[350px] sm:max-w-[650px]  mx-auto'>
            <div className='flex flex-col justify-center gap-x-5 md:flex-row'>
                <div className='md:w-[40%]'>
                    <img src="https://static.wixstatic.com/media/651a17_1fc50eea4eab486e989a4a771da6879f~mv2.png/v1/fill/w_500,h_500,al_c,q_90,usm_0.66_1.00_0.01/651a17_1fc50eea4eab486e989a4a771da6879f~mv2.webp" alt="" className='w-full h-full object-fit' />
                </div>
                <div className='md:w-[60%] px-3 flex flex-col gap-5'>
                    <h3 className='mb-3 text-3xl'>Xà Phòng Gội Đầu Mộc - Tinh Dầu Bưởi Da Xanh Vĩnh Long & Giấm Táo / Shampoo Bar</h3>
                    <span>139.000₫</span>
                    <button className='w-2/4 px-5 py-3 text-white mb-11 bg-secondColor'>Add to cart</button>
                </div>
            </div>
            <div className='mb-20'>
                <p>
                    XÀ PHÒNG GỘI ĐẦU MỘC - TINH DẦU BƯỞI DA XANH VĨNH LONG & GIẤM TÁO 
                    <br />
                    Giá: 139,000đ - 100g
                    <br />
                    Thành phần:  Dầu oliu, dầu dừa, dầu thông Đà Lạt, bơ hạt mỡ, bơ cacao, bơ xoài,  
                    dầu mù u, dầu hướng dương, dầu hạt nho, bơ xoài, giấm táo, xút, dầu bưởi da xanh Vĩnh Long, sáp ong,  
                    tinh dầu bưởi, tinh dầu lavender,  
                    tinh dầu sả chanh, tinh dầu cam  hương, tinh dầu thông 
                </p>
            </div>
        </div>
    );
};

export default ProductsDetail;