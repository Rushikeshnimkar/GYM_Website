
import LoginForm from './components/LoginForm';
import SignupForm from './components/SignupForm';
import Website from './components/Website';
import RequestForm from './components/RequestForm';
import LandingPage from './components/LandingPage';
import Approved from './components/Approved';
import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminPage from './components/dashboard';
import Aos from 'aos'
import { useEffect } from 'react'
import './App.css'
import Header from './Header/Header'
import Hero from './UI/Hero'
import Exercise from './UI/Exercise'
import Start from './UI/Start'
import Pricing from './UI/Pricing'
import Testimonials from './UI/Testimonials'
import Footer from './UI/Footer'
;

const App = () => {
  return (
    <BrowserRouter>
     <Routes>
        <Route path="/" element={<Website />}/>
          <Route path="/signup" element={<SignupForm />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/gymwebsite" element={<LandingPage />} />
          <Route path='/requestform' element={<RequestForm/>}/>
          <Route path='/approved' element={<Approved/>}/>
          <Route path='/admindashboard' element={<AdminPage/>}/>
          <Route path='/landing' element={<AApp/>}/>

          
      </Routes>
  </BrowserRouter>
  )
}

function AApp() {
  useEffect(() => {
    Aos.init()
  }, [])

  return (
    <>
      <Header />
      <Hero />
      <Exercise />
      <Start />
      <Pricing />
      <Testimonials />
      <Footer />
    </>
  )
}

export default App
