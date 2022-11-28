import React from 'react'

const Client = () => {
    return (
        <div id='client' className='container-test'>
            <h1 className='text-center my-5' style={{ color: 'white' ,padding:'3rem'}}>Testimonial</h1>
            <div className="card-horizontal">
            <div className="card mb-3" >
                <div className="row no-gutters">
                    <div className="col-md-4">
                        <img src="src\assets\images\hrishikesh.jpg" className="card-img" alt="..."/>
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">Consectetur</h5>
                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card mb-3" >
                <div className="row no-gutters">
                    <div className="col-md-4">
                        <img src="src\assets\images\hrishikesh.jpg" className="card-img" alt="..."/>
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">Consectetur</h5>
                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            
                        </div>
                    </div>
                </div>
            </div>
            </div>
            
        </div>
    )
}

export default Client
