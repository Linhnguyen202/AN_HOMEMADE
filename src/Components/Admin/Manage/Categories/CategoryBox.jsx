import React, { useEffect, useState } from 'react';
import TableCategories from './TableCategories';
const CategoryBox = ({show,setShow}) => {
    
    return (        
        <div className="p-5 bg-gray-50">
            <div>
                <div>
                    <div className='px-5 py-3'>
                    <h3 className='pb-3 text-2xl font-semibold text-left text-red-800'>Quản lý danh mục</h3>
                        <div>
                            <TableCategories></TableCategories>
                        </div>
                    </div>
                </div>
            </div>
           

        </div>
    );
};

export default CategoryBox;
