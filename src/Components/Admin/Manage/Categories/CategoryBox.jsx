import React, { useEffect, useState } from 'react';
import AddCategories from './AddCategories';
import TableCategories from './TableCategories';
const CategoryBox = ({show,setShow}) => {
    const [tableAding,setTableAding] = useState(false)
    return (        
        <div className="p-5">
            <div>
                <div>
                    <h3 className='text-3xl font-semibold text-center text-gray-800'>Quan ly Danh muc</h3>
                   
                    <div className='px-5 py-3'>
                        <TableCategories setTableAding={setTableAding}></TableCategories>
                    </div>
                </div>
            </div>
            {tableAding ? <AddCategories setTableAding={setTableAding}></AddCategories> : null}

        </div>
    );
};

export default CategoryBox;
