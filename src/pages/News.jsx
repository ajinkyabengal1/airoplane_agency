import React from 'react'
import Card from 'react-bootstrap/Card';

const News = () => {
    return (
        <>
            <h1 className='text-center my-5'>LATEST NEWS AND EVENTS</h1>
            <div id="news" className='container '>
                <div className="row">
                    <div className="col-md-4">
                        <div className="card">
                            <img src="src\assets\images\plane-aircraft-jet-airbase-67563.webp" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className='card-title text-center'>LIBERALISATION OF CARGO INDUSTY</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="card">
                            <img src="src\assets\images\Airoplane2.jpg" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className='card-title text-center'>NEW WAREHOUSE NOW OPERATIONAL</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card">
                            <img src="src\assets\images\plane-aircraft-jet-airbase-67563.webp" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className='card-title text-center'>NEW TRUCKS ARRIVING</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                    </div>

                </div>
                <div class="text-center my-5">
                    <button type="button" class="btn btn-dark">READ MORE</button>
                </div>

            </div>
        </>
    )
}

export default News
