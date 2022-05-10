import React, { useState } from 'react';
import EditProducts from './EditProducts';
import TableProducts from './TableProducts';

const ProductsBox = ({show,setShow}) => {
    const [table,setTable] = useState(false)
    return (
        <div className={`${show ? "ml-[250px]" : ""} p-5`}>
            <div>
                <div>
                    <h3 className='text-3xl font-semibold text-center text-gray-800'>Quan ly San pham</h3>
                    <div>
                        <button className='px-3 py-2 mx-2 text-white rounded-lg bg-secondColor' onClick={()=>setTable(true)}>Add</button>
                    </div>
                    <div className='px-5 py-3'>
                        <TableProducts></TableProducts>    
                    </div>
                </div>
            </div>
            {table ? <EditProducts setTable={setTable}></EditProducts> : null}
        </div>
    );
};


export default ProductsBox;

