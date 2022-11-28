import React from 'react'

const About = () => {
  return (
    
   <div className='container-fluid' id='about'>
    <div className="container-fluid about-content p-0">
      <div className="row p-0 justify-content-between ps-5 ms-5">
        <div className="col text col-12 col-md-4 ms-5s">
        <h2>ABOUT TRANSPORT</h2>
        <div className='underline'></div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim voluptatem accusantium sapiente dolorem! Ducimus mollitia perferendis iusto voluptates esse tenetur quidem earum laboriosam nobis repellendus architecto amet unde, aperiam corrupti.</p>
            <button className='btn btn-dark'>CONTACT US</button>
        </div>
        <div className="col image col-12 col-sm-10 col-md-6 p-0">
          <img className='img-fluid w-100' src="src\assets\images\Airoplane2.jpg" alt="#LOADING" />
        </div>
      </div>
    </div>
   </div>

  )
}

export default About
