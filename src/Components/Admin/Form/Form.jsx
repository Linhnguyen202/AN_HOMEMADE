import React from 'react';

const Form = () => {
    return (
        <div className='flex items-center justify-center h-screen justif bg-gradient-to-r from-purple-500 to-pink-500'>
            <div  className = "w-[300px] p-3  bg-white rounded-lg shadow-2xl">
                 <form action="" className='p-3'>
                    <h3 className='mb-4 text-2xl font-semibold'>Login</h3>
                    <div className='flex flex-col mb-4'>
                        <label htmlFor="" className='mb-1 text-sm'>Email</label>
                        <InputItem placeholder="Enter your email..."></InputItem>
                    </div>
                    <div className='flex flex-col mb-4'>
                        <label htmlFor="" className='mb-1 text-sm'>Password</label>
                        <InputItem placeholder="Enter your password..."></InputItem>
                    </div>
                    <div>
                        <button className='w-full py-2 text-white transition-opacity rounded-lg bg-secondColor hover:opacity-80'>LOGIN</button>
                    </div>
                </form>
            </div>
               
        </div>
    );
};

export default Form;

const InputItem = (props)=>{
    return(
        <div className='bg-gray-200 rounded-md'>
             <input type="text" placeholder={props.placeholder} className="p-2 text-sm bg-transparent outline-none"/>
        </div>
       
    )
}