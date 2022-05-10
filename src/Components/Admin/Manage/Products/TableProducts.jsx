import React from 'react';

const TableProducts = ({categories}) => {
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
export default TableProducts;

const TableItems = ({listData})=>{
    console.log(listData)
    return (
      <tbody>
          {listData && listData.length > 0 && listData.map((item)=>{
                return (
                    <tr key={item.Id}>
                        <th>{item.STT}</th>
                        <th>{item.Name}</th>
                        <th>{item.Note && ""}</th>
                        <th>{item.Created_By}</th>
                        <th>{new Date(item.Created_Date ).toLocaleDateString()}</th>
                        <th>
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