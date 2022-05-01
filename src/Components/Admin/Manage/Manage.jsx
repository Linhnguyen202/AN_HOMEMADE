import React from 'react';
import ContentManage from './ContentManage';

const Manage = () => {
    return (
        <div>
           <ManageHead></ManageHead>
           <ContentManage></ContentManage>
        </div>
    );
};

export default Manage;

const ManageHead = ()=>{
    return (
        <div className='flex items-center justify-between px-5 py-3 bg-secondColor'>
            <div className="flex items-center gap-x-4">                 
                <img className="w-10 h-10" src="https://lh5.googleusercontent.com/-zIDhfNZhvFa7bmUpA4PKw6EvjIPh4hh8_IYGa-Is6GzVJTEDMG4qKIgfyyDusGqYs9UfIAO_W0TyYaqiUiA7Ck=w16383" alt="" />
                <h3 className='text-white '>AN_HOMEMADE</h3>
            </div>
            <div>
                <h3 className='text-white'>Admin</h3>
            </div>
        </div>
    )
}