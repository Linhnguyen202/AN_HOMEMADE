import React from 'react';

const TableProducts = () => {
    return (
        <div>
            <div className='flex items-center mb-3'>
                <input type="text" placeholder='Tim kiem' className='border border-mainColor' />
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
            </div>
            <div className='h-full '>
                <table className='w-full text-center'>
                    <tr className='border-b '>
                        <th className='px-10'>STT</th>
                        <th>Tên</th>
                        <th>Giá</th>
                        <th>Số lượng</th>
                        <th>Trạng thái</th>
                        <th>Them</th>
                        <th>Sua</th>
                        <th>Xoa</th>
                    </tr>
                    <TableItems></TableItems>
                </table>
               
            </div>
        </div>
    );
};

export default TableProducts;

const TableItems = ()=>{
    return (
        <tr>
            <td>Alfreds Futterkist</td>
            <td>Maria Anders</td>
            <td>Germany</td>
            <td>Germany</td>
            <td>Germany</td>
            <td>dsads</td>
            <td>dsads</td>
            <td>dsads</td>


        </tr>
    )
}