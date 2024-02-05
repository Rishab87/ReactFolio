import React, { useState } from 'react'
import {AiOutlineEye , AiOutlineEyeInvisible} from "react-icons/ai"
import { Link, useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'

const LoginForm = ({setIsLoggedIn}) => {

    const navigate = useNavigate();

    const [formData , setFormData] = useState({
        email: "" , password:""
    })

    const [showPassword , setShowPassword] = useState(false);

    function changeHandler(event){
        setFormData((prevData)=>(
            {
                ...prevData,
                [event.target.name]:event.target.value
            }
        ))
    }
    {/*setIsLoggedIn ke bina bhi kam kr rha hai , phir create kyun kiya? isliye create kiya hai taki /dashboard likh ke direct dashboard pe na jaye agar user ne login nhi kiya hai toh iss cheez ke logic main yeh help kr rha hai */}
    function submitHandler(event){
        event.preventDefault();
        setIsLoggedIn(true); 
        toast.success("Loggedin");
        navigate("/dashboard");
    }

  return (
    <form onSubmit={submitHandler} className='flex flex-col w-full gap-y-4 mt-6'>
        <label className='w-full'> {/*label ke andar hi input tag dalde toh automatically link hojayega label input tag ke sath */}
            <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>
                Email Address<sup className='text-pink-200'>*</sup>
            </p>
            <input required type='email' value={formData.email} placeholder='Enter you email id' onChange={changeHandler} name='email' className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px] border-b-[0.5px] border-richblack-5'></input>
        </label>

        <label className='w-full relative'>
            <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>
                Password<sup className='text-pink-200'>*</sup>
            </p>
            <input required type= {showPassword? ("text"):("password")} value={formData.password} placeholder='Enter you password' onChange={changeHandler} name='password' className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px] border-b-[0.5px] border-richblack-5'></input>
            <span onClick={()=> setShowPassword((prev) => !prev)} className='absolute right-3 top-[38px] cursor-pointer'>
                {showPassword? (<AiOutlineEye fontSize={24} fill='#AFB2BF'/>):(<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'/>)}
            </span>

            <Link to="#">
                <p className='text-xs mt-1 text-blue-100 max-w-max ml-auto'>
                    Forgot Password
                </p>
            </Link>
        </label>

        <button className='bg-yellow-50 rounded-[8px] font-medium text-richblack-900 px-[12px] py-[8px] mt-6'>Sign In</button>
    </form>
  )
}

export default LoginForm