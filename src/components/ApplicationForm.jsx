import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

//This is the application form for job application
const ApplicationForm = () => {
    let navigate =useNavigate();
    let [user,setUser]=useState({
        name:"",
        email:"",
        resume:"",
        cover_letter:""
    })
let handleChange=(e)=>{
    let {name,value}=e.target;
    setUser({...user,[name]:value});
}
let handleSubmit=(e)=>{
    e.preventDefault();
    toast.success("Application submited!");
 navigate("/thankYou");
}
  return (
    <section className='border-red-600 border-2 w-[100vh] m-auto p-7 h-[60vh] mt-6 bg-slate-100 flex items-center justify-center c'>
        <form  onSubmit={handleSubmit} >
            
            <div className='p-2 m-2'>
            <label htmlFor='name'>Name: </label>
            <input className='border-2 w-full' type='text' name='name' placeholder='Enter Name' required value={user.name} onChange={handleChange}/>
            </div>
            <hr/>
            <div className='p-2 m-2'>
            <label htmlFor='email'>Email: </label>
            <input className='border-2 w-full'  type='email' name='email' placeholder='Enter Email' required value={user.email} onChange={handleChange}/>
            </div>
            <hr/>
            <div className='p-2 m-2 '>
            <label htmlFor='resume'>Add Resume: </label>
            <input className='border-2 w-full'  type='file' name='resume'  required value={user.resume} onChange={handleChange}/>
            </div>
            <hr/>
            {/* I made cover letter non-mandatory field. */}
            <div className='p-2 m-2'>
            <label htmlFor='cover_letter'>Add Cover Letter </label>
            <input className='border-2 w-full'  type='file' name='cover_letter'  value={user.cover_letter} onChange={handleChange}/>
            </div>
            <hr/>
           <div className='p-2 m-2 '>
           <button type='submit' className=' bg-slate-400 w-[12vw] rounded-md h-[4.5vh] ml-[5vw]' >Submit</button>
           </div>
           <hr/>
        </form>
    </section>
  )
}

export default ApplicationForm