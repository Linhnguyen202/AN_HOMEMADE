import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Menu from '../Menu/Menu';

const Header = () => {
    const location = useLocation();
    const checkLocate = location.pathname === "/";
    const [show,setShow] = useState(false)
    const [search,setSearch] = useState(true)
    const [scroll,setScroll] = useState(false)
    useEffect(()=>{
      const scrollEvent = () =>{
        if(window.scrollY > 0){
          setScroll(true)
        }
        else{
          setScroll(false)
        }
      }
      window.addEventListener('scroll',scrollEvent)
      return ()=>{
        window.removeEventListener('scroll',scrollEvent)
      }
    })
    console.log(scroll)
    return (
        <div className={`top-0 z-50 text-sm transition-colors duration-300 flex items-center justify-between w-full   p-4  uppercase ${checkLocate ? "fixed text-white" : "relative text-black border bg-white mb-20"} ${scroll && location.pathname === "/" ? "bg-[#B0A171] shadow-2xl rounded-b-2xl" : "bg-transparent"}`} >
             <div className="flex items-center gap-x-4">                 
                <img className="w-10 h-10" src="https://lh5.googleusercontent.com/-zIDhfNZhvFa7bmUpA4PKw6EvjIPh4hh8_IYGa-Is6GzVJTEDMG4qKIgfyyDusGqYs9UfIAO_W0TyYaqiUiA7Ck=w16383" alt="" />
                <h3 className='hidden text-white md:block'>AN_HOMEMADE</h3>
              </div>
             <Menu show={show} checkLocate={checkLocate} setShow={setShow}></Menu>
            <div className="flex items-center select-none">
              <div className='w-[150px] text-sm  h-[20px] relative'>
                <input type="text" className={` top-0 bottom-0 right-0 absolute text-sm  h-full md:block transition-all ease-in-out duration-500 scale-100 bg-transparent origin-right outline-none ${search ? "w-0": "w-full"} `} placeholder="Find here...." />
              </div> 
              <span className='cursor-pointer'  onClick={()=>setSearch(!search)}>
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </span>
              <div className='block ml-3 cursor-pointer md:hidden' onClick={()=>setShow(true)}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </div>  
        </div> 
        </div>
    );
};

export default Header;