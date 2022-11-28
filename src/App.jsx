import React from 'react'
import About from './pages/About'
import Client from './pages/Client'
import Contact from './pages/Contact'
import Footer from './pages/Footer'
import Home from './pages/Home'
import News from './pages/News'
import Services from './pages/Services'

const App = () => {
  return (
    <div className='container-fluid' id="app">
      <Home />
      <Services />
      <About/>
      <News/>
      <Client/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App