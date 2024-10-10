import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
      
    <header className=' p-6 mt-3'>
        <h1 className='text-lg flex justify-center items-center text-blue-400'>Job Application Portal</h1>
        <div className='bg-slate-300 rounded-lg '>
            <ul className='flex justify-evenly'>
                <li className='hover:bg-blue-100 w-[5vw] text-center rounded-lg m-1 '><Link to='/'>Home</Link></li>
                <li className='hover:bg-blue-100 w-[5vw] text-center rounded-lg m-1 '><Link to='/jobDetail'>Detail</Link></li>
                <li className='hover:bg-blue-100 w-[6vw] text-center rounded-lg m-1 '><Link to='/applicationForm'>Application</Link></li>
                
            </ul>
        </div>
    </header>
  )
}

export default Header