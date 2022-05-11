import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '../../../httpApiClientInterface/ApiUser';
import { useAuth } from '../../../context/authContext';



const Form = () => {
    const {active,setActive} = useAuth()
    const [userName,setUserName] = useState("");//anhomemade
    const [Password,setPassword] = useState("");//3184728e9eda3f101c39f3ebc65730c7(admin)
    const [check,setCheck] = useState(false)
    const navigate = useNavigate();
    const submitLogin = (e) => {
        e.preventDefault()
        // var PasswordDecript = md5(userName + Password);
        // fetch("https://localhost:44339/api/users/do-login?username="+ userName +"&password="+PasswordDecript+" ")
        // .then(res => res.json())
        // .then((data) => {
            
        //     if(data !== null && data.user_Name !== null ){
        //         setCheck(false)
        //         navigate('/admin/manage');
        //     }else{
        //         console.log("Nhập sai tài khoản hoặc mật khẩu"); 
        //         setCheck(true)
        //     }
        // }).catch((e)=>{console.log(e)})
        login({userName,Password}).then((user)=>{
           console.log(user)
            if(user !== null){
                setCheck(false)
                setActive(true)
                navigate('/admin/manage');      
                sessionStorage.setItem("UserLogged", JSON.stringify(user));              
            }else{
                console.log("Nhập sai tài khoản hoặc mật khẩu"); 
                setCheck(true)
            }
        })
        
       
       
    }

  
    return (
        <div className='flex items-center justify-center h-screen justif bg-gradient-to-r from-purple-500 to-pink-500'>
            <div  className = "w-[300px] p-3  bg-white rounded-lg shadow-2xl">
                 <form onSubmit={submitLogin} action="" className='p-3'>
                    <h3 className='mb-4 text-2xl font-semibold'>Login</h3>
                    <div className='flex flex-col mb-4'>
                        <label htmlFor="" className='mb-1 text-sm'>Email</label>
                        <div className='bg-gray-200 rounded-md'>
                            <input type="text" placeholder='Enter your username'  onChange={(e)=>setUserName(e.target.value)} className="p-2 text-sm bg-transparent outline-none"/>
                        </div>
                    </div>
                    <div className='flex flex-col mb-4'>
                        <label htmlFor="" className='mb-1 text-sm'>Password</label>
                        <div className='bg-gray-200 rounded-md'>
                            <input type="password"  placeholder='Enter your password' onChange={(e)=>setPassword(e.target.value)} className="p-2 text-sm bg-transparent outline-none"/>
                        </div>
                        {check && <span className='text-red-500'>Nhap lai mat khau</span>}
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

