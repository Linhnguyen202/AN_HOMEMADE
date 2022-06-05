import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { search } from '../../httpApiClientInterface/ApiProduct';

const ProducsNewList = () => {
    const [keysearch,setKeySearch] = useState({
        name:"",
        brand:"",
        category_id:"",
        startus:"",
        min_price:"",
        max_price:""
    })
    const [products,setProducts]=useState([])
    useEffect(()=>{
        search("").then((data)=>{
            setProducts([...JSON.parse(data.jsonData)].splice(1,6))
        })  
    },[])
    return (
        <div className="grid max-w-[350px] mx-auto sm:max-w-[730px] lg:max-w-none grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mb-20">
          {products.length > 0 && products.map((item)=>{
                        return (
                            <ProductsNewCard key={item.Id} item={item}></ProductsNewCard>
                        )
            })}
        </div>
    );
};

export default ProducsNewList;

const ProductsNewCard = ({item})=>{
    const navigate = useNavigate();
    return (
        <div onClick={()=>navigate(`/products/${item.Id}`)} className='flex max-h-[175px] items-center px-2 border rounded-lg cursor-pointer gap-x-5 '>
                <div className='w-[30%] h-full'>
                    <img src={`https://cf.shopee.vn/file/${item.Image}?fbclid=${item.Image}`} className="w-full object-fit"/>
                </div>
                <div className='flex flex-col flex-1 py-2 text-left gap-x-3 w-[70%] '>
                    <h3 className='text-sm font-bold tracking-widest uppercase  truncate ...'>{item.Name}</h3>
                    <span className='text-secondText'>{item.Brand}</span>
                    <span className='text-priceText'>{item.Price}</span>

                </div>
        </div>
    )
}