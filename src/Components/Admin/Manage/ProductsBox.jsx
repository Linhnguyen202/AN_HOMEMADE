import React, { useState } from 'react';
import EditProducts from './Edit/EditProducts';
import TableProducts from './Table/TableProducts';

const ProductsBox = ({show,setShow}) => {
    const [table,setTable] = useState(false)
    return (
        <div className={`${show ? "ml-[250px]" : ""} p-5`}>
            <div>
                <div>
                    <h3 className='text-3xl font-semibold text-center text-gray-800'>Quan ly San pham</h3>
                    <div>
                        <button className='px-5 py-3 mx-2 text-white rounded-lg bg-secondColor' onClick={()=>setTable(false)}>Add</button>
                        <button className='px-5 py-3 mx-2 text-white rounded-lg bg-secondColor'onClick={()=>setTable(true)}>Manage</button>
                    </div>
                    <div className='px-5 py-3'>
                        {table ? <TableProducts></TableProducts>  : <EditProducts></EditProducts>}
                       
                    </div>
                </div>
            </div>
        </div>
    );
};


export default ProductsBox;

