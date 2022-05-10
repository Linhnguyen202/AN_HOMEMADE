import React, { useEffect, useState } from 'react';
import { search } from '../../../../httpApiClientInterface/ApiProduct';
import { recordPerpage } from '../../../../Lib/Commomdata';
import { GetFromToPaging } from '../../../../Lib/CommondFunction';

const TableProducts = () => {
    let currentPage = 1
    const [keysearch,setKeySearch] = useState("")
    const [products,setProducts]=useState([])
    const searchProducts = (currentPage)=>{
        var toRecord = 0
        let pageInfor = GetFromToPaging(currentPage,recordPerpage,toRecord)
        toRecord = pageInfor.toRecord
        let fromRecord = pageInfor._FromRecord
        search(keysearch,fromRecord,toRecord).then((data)=>{
            setProducts([...JSON.parse(data.jsonData )])
        })      
    }
    useEffect(()=>{       
        searchProducts(1);
    },[])
    return (
        <div>
            <div className='flex items-center mb-3'>
                <input type="text" placeholder='Tim kiem' className='border border-mainColor' />
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
            </div>
            <div className='h-full '>
                <table className='w-full'>
                    <thead>
                        <tr className='border-b '>
                            <th className='text-center'>STT</th>
                            <th>Tên</th>
                            <th>Nguồn gốc</th>
                            <th>Giá</th>
                            <th>Đánh giá</th>
                            <th>ID Shop</th>
                            <th>Người tạo</th>
                            <th>Ngày tạo</th>
                            <th>Chưc năng</th>
                        </tr>
                    </thead>
                        <TableItems listData={products} ></TableItems>        
                    
                </table>
               
            </div>
        </div>
    );
};
export default TableProducts;

const TableItems = ({listData})=>{
    return (
      <tbody>
          {listData && listData.length > 0 && listData.map((item)=>{
                return (
                    <tr key={item.Id}>
                        <th>{item.STT}</th>
                        <th>{item.Name}</th>
                        <th>{item.Origin && ""}</th>
                        <th>{item.Price}</th>
                        <th>{item.Rating_Star}</th>
                        <th>{item.Rating_Star}</th>
                        <th>{item.Created_By}</th>
                        <th>{new Date(item.Created_Date).toLocaleDateString()}</th>
                        <th className='flex justify-center gap-x-2'>
                            <button>Chi tiết</button>
                            <button>Xóa</button>
                            <button>Cập nhật</button>
                        </th>
                    </tr>
                )
                
          })}
      </tbody>
    )
}