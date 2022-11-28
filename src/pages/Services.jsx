import React from 'react'

const Services = () => {
  return (
    <section id="services" className='container-fluid'>
      <div className="heading">
        <h1>WELCOME TO DENSO TRANSPORT</h1>
        <div className='underline'></div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui sunt eum voluptatibus ratione? Nisi consequatur illo iure. Atque reiciendis nam fugit reprehenderit fuga adipisci dolor facere dolores? Tempora reprehenderit quis porro, ratione, saepe sint iste incidunt modi vel ea, aut doloribus optio asperiores.</p>
      </div>
      <div className="services">
        <h1>SERVICES</h1>
        <div className='underline'></div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium explicabo veritatis autem repellat, dicta aspernatur.</p>
        <div className="icons row">
          <div className="col-4 col-md-2 col">
            <div className="circle">
              <i class="bi bi-airplane-engines"></i>
            </div>
            <p>
              fly anywhere
            </p>
          </div>
          <div className="col-4 col-md-2 col">
            <div className="circle">
              <i class="bi bi-rocket-takeoff"></i>
            </div>
            <p>
              cargo service
            </p>
          </div>
          <div className="col-4 col-md-2 col">
            <div className="circle">
              <i class="bi bi-truck"></i>
            </div>
            <p>
              courier service
            </p>
          </div>
          <div className="col-4 col-md-2 col">
            <div className="circle">
              <i class="bi bi-box-seam"></i>
            </div>
            <p>
              box storage
            </p>
          </div>
          <div className="col-4 col-md-2 col">
            <div className="circle">
              <i class="bi bi-shield-check"></i>
            </div>
            <p>
              100% safe
            </p>
          </div>
        </div>
        <button className='btn btn-dark'>READ MORE</button>
      </div>
    </section>
  )
}

export default Services