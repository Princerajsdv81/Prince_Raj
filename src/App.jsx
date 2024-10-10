import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Home from './components/Home'
import JobDetail from './components/JobDetail'
import ApplicationForm from './components/ApplicationForm'
import ThankYou from './components/ThankYou'
import { Toaster } from 'react-hot-toast'

const App = () => {
  return (
    //routing of different webpages are provider here using browser router
   <BrowserRouter>
     <Header/>
     <Toaster/>
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/JobDetail' element={<JobDetail/>}/>
    <Route path='/applicationForm' element={<ApplicationForm/>}/>
    <Route path='/thankYou' element={<ThankYou/>}/>
    </Routes>
   </BrowserRouter>
  )
}

export default App