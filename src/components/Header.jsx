import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
      
    <header className=' p-6'>
        <h1 className='text-lg flex justify-center items-center'>Job Application Portal</h1>
        <div>
            <ul className='flex  space-x-5'>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/jobDetail'>Detail</Link></li>
                <li><Link to='/applicationForm'>Application</Link></li>
                
            </ul>
        </div>
    </header>
  )
}

export default Header