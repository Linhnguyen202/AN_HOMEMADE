import React, { useEffect, useState } from 'react';
import { CategoriesDelete, search } from '../../../../httpApiClientInterface/ApiCategories';
import { recordPerpage } from '../../../../Lib/Commomdata';
import { GetFromToPaging } from '../../../../Lib/CommondFunction';
const TableCategories = () => {
    let currentPage = 1
    const [keysearch,setKeySearch] = useState("")
    const [categories,setCategories]=useState([])
    const searchCategory = (currentPage)=>{
        var toRecord = 0
        let pageInfor = GetFromToPaging(currentPage,recordPerpage,toRecord)
        toRecord = pageInfor.toRecord
        let fromRecord = pageInfor._FromRecord
        search(keysearch,fromRecord,toRecord).then((data)=>{
            setCategories([...JSON.parse(data.jsonData )])
        })      
    }
    useEffect(()=>{       
        searchCategory(1);
    },[])
    const handleInput = (e)=>{
        setKeySearch(e.target.value)
    }
    // const handleSearch=()=>{     
    //    searchCategory()
    // }
    return (
        <div>
            <div className='flex items-center mb-3'>
                <input onChange={handleInput} type="text" placeholder='Tim kiem' className='border border-mainColor' />
                <span onClick={()=>searchCategory(1)} className="cursor-pointer">
                     <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                </span>
               
            </div>
            <div className='h-full '>
                <table className='w-full'>
                    <thead>
                        <tr className='border-b '>
                            <th className='text-center'>STT</th>
                            <th>Tên</th>
                            <th>Mô tả</th>
                            <th>Người tạo</th>
                            <th>Ngày tạo</th>
                            <th>Chưc năng</th>
                        </tr>
                    </thead>
                    
                    
                        <TableItems listData={categories}></TableItems>        
                    
                </table>
            </div>

        </div>
    );
};
export default TableCategories;

const TableItems = ({listData})=>{
    const [data,setData] = useState({
        Id:"",
        Name:"",
        Note:"",
        Created_By:"",
        Created_Date:""

    })
    
    return (
      <tbody>
          {listData && listData.length > 0 && listData.map((item,index)=>{
                return (
                    <tr key={item.Id}>
                        <th>{item.STT}</th>
                        <th>{item.Name}</th>
                        <th>{item.Note || ""}</th>
                        <th>{item.Created_By}</th>
                        <th>{new Date(item.Created_Date ).toLocaleDateString()}</th>
                        <th className='flex justify-center gap-x-2'>
                            <button>Chi tiết</button>
                            <button onClick={()=>CategoriesDelete({index,setData,data,listData})}>Xóa</button>
                            <button>Cập nhật</button>
                        </th>
                    </tr>
                )
                
          })}
      </tbody>
    )
}