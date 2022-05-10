import React, { useEffect, useState } from 'react';
import EditCategories from './EditCategories';
import TableCategories from './TableCategories';
const CategoryBox = ({show,setShow}) => {
    const [tableAding,setTableAding] = useState(false)
    

    return (        
        <div className={`${show ? "ml-[250px]" : ""} p-5`}>
            <div>
                <div>
                    <h3 className='text-3xl font-semibold text-center text-gray-800'>Quan ly Danh muc</h3>
                    <div>
                        <button className='px-4 py-2 mx-2 text-sm text-white rounded-lg bg-secondColor' onClick={()=>setTableAding(true)}>Add</button>
                    </div>
                    <div className='px-5 py-3'>
                        <TableCategories></TableCategories>
                    </div>
                </div>
            </div>
            {tableAding ? <EditCategories setTableAding={setTableAding}></EditCategories> : null}

        </div>
    );
};

export default CategoryBox;
