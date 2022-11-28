import React from 'react'

const Downbar = () => {
    return (
        <div className='container-fluid' id="downbar">
            <div className="row">
                <div className="col-12 col-sm-6 col md-4 col-lg-3">

                </div>
                <div className="col-12 col-sm-6 col md-4 col-lg-3">
                    <i class="bi bi-telephone-fill"></i>
                    <p>Call Us:+011234567890</p>
                </div>
                <div className="col-12 col-sm-6 col md-4 col-lg-3">
                    <i class="bi bi-geo-alt-fill"></i>
                    <p>Loaction</p>
                </div>
                <div className="col-12 col-sm-6 col md-4 col-lg-3">
                    <i class="bi bi-envelope-fill"></i>
                    <p>demo@gmail.com</p>
                </div>

            </div>
        </div>
    )
}

export default Downbar
