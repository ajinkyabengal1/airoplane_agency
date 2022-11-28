import React from 'react'

const TopBar = () => {
    return (
        <div className='container-fluid' id="topbar">
            <div className="row">
                <div className="col-12 col-sm-6 col md-4 col-lg-3">
                    <i class="bi bi-airplane-engines logo"></i>
                    <h5 className='topbar-brand'>
                        DENSO
                    </h5>
                </div>
                <div className="col-12 col-sm-6 col md-4 col-lg-3">
                    <i class="bi bi-telephone-fill"></i>
                    <p>Call Us: +011234567890</p>
                </div>
                <div className="col-12 col-sm-6 col md-4 col-lg-3">
                    <i class="bi bi-envelope-fill"></i>
                    <p>demo@gmail.com</p>
                </div>
                <div className="col-12 col-sm-6 col md-4 col-lg-3">
                    <input type="search" name="" id="" placeholder='search' />
                </div>
            </div>
        </div>
    )
}

export default TopBar