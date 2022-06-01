import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { GetById } from '../httpApiClientInterface/ApiProduct';
import { StarIcon } from '@heroicons/react/solid'
import LoadingSkeleton from '../Components/loading/LoadingSeleton';
const ProductsDetail = () => {
    const { productId } = useParams()
    const [data,setData] = useState()
    const [images,setImages] = useState()
    const [loading,setloading] = useState(false)
    useEffect(()=>{

    })
    useEffect(()=>{
        GetById(productId).then((response)=>{
            setData(JSON.parse(response.jsonData))
            setImages(JSON.parse(response.jsonData).Images.split(","))
            setloading(true)
        })
    },[])
    console.log(data)
    
    return (
        <div  className='w-full lg:max-w-[1000px] max-w-[350px] sm:max-w-[650px]  mx-auto'>
            <div className='flex flex-col justify-center p-5 border gap-x-5 md:flex-row'>
                <div className='md:w-[60%] flex flex-col gap-2'>
                    <div className='w-full'>
                        <div className='border'>
                        {!loading ? <LoadingSkeleton width="100%" height="350px"></LoadingSkeleton> :  <img src={`https://cf.shopee.vn/file/${data.Image}?fbclid=${data.Image}`} alt="" className='object-cover w-full h-full' /> }      
                        </div>
                    </div>  
                   
                    <div className='flex gap-2'>
                        {loading && images.length > 0 && images.map((item)=>{
                            return (
                                <div className='w-full h-full border shadow-lg cursor-pointer' key={item}>
                                     <img src={`https://cf.shopee.vn/file/${item}?fbclid=${item}`} className='flex-1 object-cover w-full'></img>
                                </div>
                            )
                        })}
                        {!loading && <LoadingSkeleton width="100%" height="80px"></LoadingSkeleton>}
                    </div>
                </div>
                <div className='md:w-[50%] px-3 flex flex-col gap-5'>
                    <h3 className='mb-3 text-3xl uppercase'>{loading ? data.Name : <LoadingSkeleton width="100%" height="60px"></LoadingSkeleton> }</h3>
                    <div className='flex items-center gap-2 '>
                        {loading ? 
                            <>
                               <div className='flex gap-2 pr-3 text-xl text-red-500 border-r-2'>
                                    <span>{data.Rating_Star} </span>
                                    <StarIcon className='w-3 text-xl'></StarIcon>
                                </div>
                            
                                <div className='pr-3 border-r-2 '>
                                    <span className='text-xl text-black font-500'>{data.Sold} </span> 
                                    <span className='text-[#767676] text-sm'>Đã bán</span>
                                </div>
                                <div className='pr-3'>
                                    <span className='text-xl text-black font-500'>{data.Stock} </span> 
                                    <span className='text-[#767676] text-sm'>Sản phẩm</span>
                                </div>  
                            </>
                           
                         :  <LoadingSkeleton width="100%" height="20px"></LoadingSkeleton>}
                        
                    </div>
                    <span className='px-3 py-5 text-xl border shadow-sm text-secondColor'>{loading ? `${data.Price} ₫` :  <LoadingSkeleton width="100%" height="20px"></LoadingSkeleton> }</span>
                    {loading ? <button className='w-2/4 px-5 py-3 text-white rounded-md shadow-2xl mb-11 bg-secondColor'>Link Sản phẩm</button> : <LoadingSkeleton width="100%" height="40px" radius="6px"></LoadingSkeleton>}
                    
                </div>
            </div>
            <div className='mt-10 mb-20 border shadow-xl p-7'>
                <div>
                    <h3 className='text-2xl font-500'>{loading ? data.Name :  <LoadingSkeleton width="100%" height="30px"></LoadingSkeleton>}</h3> 
                    <div className='py-2'></div>
                    {loading ? 
                    <p className='mb-2 text-lg'>
                        Giá: {data.Price}đ - 100g
                    </p> :  <LoadingSkeleton width="100%" className="mt-2" height="30px"></LoadingSkeleton> }
                    
                    {loading ? 
                    <p className='mb-2 text-lg '>
                        Kho hàng: {data.Stock}
                    </p> : <LoadingSkeleton width="100%" className="mt-2" height="30px"></LoadingSkeleton>}
                    
                    {loading ?  <div className='py-2'>
                        {data.Description}
                    </div> : <LoadingSkeleton width="100%" className="mt-2"  height="30px"></LoadingSkeleton>}
                   
                    
                </div>
            </div>
        </div>
    );
};

export default ProductsDetail;