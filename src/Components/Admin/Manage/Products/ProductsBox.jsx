import React, { useState } from 'react';
import AddProducts from './AddProducts';
import TableProducts from './TableProducts';

const ProductsBox = ({show,setShow}) => {
    const [table,setTable] = useState(false)
    return (
        <div className="p-5  bg-gray-50">
            <div>
                <div className='px-5 py-3'>
                    <h3 className='pb-3 text-2xl font-semibold text-left text-red-800'>Quản lý sản phẩm</h3>
                    <div >
                        <TableProducts setTable={setTable}></TableProducts>    
                    </div>
                </div>
            </div>
            {table ? <AddProducts setTable={setTable}></AddProducts> : null}
        </div>
    );
};


export default ProductsBox;

