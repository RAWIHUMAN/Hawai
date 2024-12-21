import React from 'react'
import About from './pages/About'
import Contact from './pages/Contact'
import Features from './pages/Features'
import Index from './pages/Index'
import Project from './pages/Project'
import Quote from './pages/Quote'
import Service from './pages/Service'
import Team from './pages/Team'
import Testimonial from './pages/Testimonial'

import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Index/>}/>
        <Route path='/About' element={<About/>}/>
        <Route path='/Contact' element={<Contact/>}/>
        <Route path='/Features' element={<Features/>}/>
        <Route path='/Project' element={<Project/>}/>
        <Route path='/Ouote' element={<Quote/>}/>
        <Route path='/Service' element={<Service/>}/>
        <Route path='/Team' element={<Team/>}/>
        <Route path='/Testimonial' element={<Testimonial/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App