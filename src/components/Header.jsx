import React from 'react'
import { Link } from 'react-router-dom'

//This is header pages which contain three components(Home,Detail and Application);
const Header = () => {
  return (
      
    <header className=' p-6 mt-3'>
        <h1 className='text-lg flex justify-center items-center text-blue-400 '>Job Application Portal</h1>
        <div className='bg-slate-300 rounded-lg '>
            <ul className='flex justify-evenly'>
              {/* making li item responsive on hover */}
                <li className='hover:bg-blue-100 w-[10vw] text-center rounded-lg m-1 md:w-[5vw]'><Link to='/'>Home</Link></li>
                <li className='hover:bg-blue-100 w-[10vw] text-center rounded-lg m-1 md:w-[5vw]'><Link to='/jobDetail'>Detail</Link></li>
                <li className='hover:bg-blue-100 w-[20vw] text-center rounded-lg m-1 md:w-[8vw]'><Link to='/applicationForm'>Application</Link></li>
                
            </ul>
        </div>
    </header>
  )
}

export default Header