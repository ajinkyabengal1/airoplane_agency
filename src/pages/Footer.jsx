import React from 'react'
import Downbar from '../components/Downbar'

const Footer = () => {
    return (

        <div id='footer' className='footer-content'>
            <div className="navigation">
                <Downbar />
            </div>
            <footer className="page-footer font-small blue pt-4">
                <div className="row">
                    <div className="col">
                        <div className="head d-flex align-items-center">
                            <i class="bi bi-airplane-engines logo text-light"></i>
                            <h1 className='topbar-brand'>
                                DENSO
                            </h1>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate assumenda iste a mollitia inventore cumque sapiente cupiditate nam omnis nulla dolore consequuntur ad quo excepturi nobis perferendis, autem maiores voluptates?</p>
                        <div className="icons">
                            <div>
                                <i class="bi bi-facebook"></i>
                            </div>
                            <div>
                                <i class="bi bi-twitter"></i>
                            </div>
                            <div>
                                <i class="bi bi-linkedin"></i>
                            </div>
                            <div>
                                <i class="bi bi-instagram"></i>
                            </div>
                        </div>
                    </div>
                    <div className="col info d-flex">
                        <div className="one">
                            <h6>Information</h6>
                            <p>There are Many</p>
                            <p>There are Many</p>
                            <p>There are Many</p>
                            <p>There are Many</p>
                        </div>
                        <div className="two">
                            <h6>Helpful Links</h6>
                            <p>There are Many</p>
                            <p>There are Many</p>
                            <p>There are Many</p>
                            <p>There are Many</p>
                        </div>
                        <div className="three">
                            <h6>Supported</h6>
                            <p>There are Many</p>
                            <p>There are Many</p>
                            <p>There are Many</p>
                            <p>There are Many</p>
                        </div>
                    </div>
                </div>
                <div className="footer-copyright text-center py-3">
                    ©2022 Copyright Reserved by Ajinkya Bengal
                </div>
            </footer>
        </div>
    )
}

export default Footer
