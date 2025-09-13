import { useState } from 'react'
import { HashRouter as Router, Route, Routes } from "react-router-dom";


import 'bootstrap/dist/css/bootstrap.min.css'


import './App.css'
import Header from "../partials/header"
import Footer from "../partials/footer"
import About from "./about"
import Projects from "./projects"
import Contact from "./contact"




function App() {

  return (
    <Router>
      <div className='app'>
        <Header />
        <div className='content'>
         
          <Routes>
            <Route path='/' element={<About />} />
            <Route path='/projects' element={<Projects/>} />
            <Route path='/contact' element={<Contact/>} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  )
}

export default App
