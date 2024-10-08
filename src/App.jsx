import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Home from './components/Home'
import JobDetail from './components/JobDetail'
import ApplicationForm from './components/ApplicationForm'
import ThankYou from './components/ThankYou'

const App = () => {
  return (
   <BrowserRouter>
     <Header/>
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/jobDetail' element={<JobDetail/>}/>
    <Route path='/applicationForm' element={<ApplicationForm/>}/>
    <Route path='/thankYou' element={<ThankYou/>}/>
    </Routes>
   
   
   </BrowserRouter>
  )
}

export default App