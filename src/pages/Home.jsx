import React from 'react'
import TopBar from '../components/TopBar'
import Navbar from '../components/Navbar'

const Home = () => {
  return (
    <div className='container-fluid p-0' id="home">
      <div className="navigation">
        <TopBar />
        <Navbar />
      </div>
      <div className="container home-content">
        <div className="row">
          <div className="col text">
            <h2>AUTOS & <br /> TRANSPORTATION</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim voluptatem accusantium sapiente dolorem! Ducimus mollitia perferendis iusto voluptates esse tenetur quidem earum laboriosam nobis repellendus architecto amet unde, aperiam corrupti.</p>
            <button>CONTACT US</button>
          </div>
          <div className="col form">
            <p>Professional Serveices</p>
            <h2>Get your transport quote</h2>
            <form action="">
              <input className='form-control' placeholder='Location' type="text" name="" id="" />
              <input className='form-control' placeholder='To Destination' type="text" name="" id="" />
              <input className='form-control' placeholder='Email' type="email" name="" id="" />
              <input className='form-control' placeholder='Contact Number' type="number" name="" id="" />
              <input type="buttton" value="GET NOW QUOTE" className='btn btn-dark' name="" id="" />
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home