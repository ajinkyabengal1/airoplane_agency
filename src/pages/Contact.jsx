import React from 'react'

const Contact = () => {
  return (
    <div id='contact' className='contact-container'>
        <h1 className='text-center my-5'>REQUEST A CALLBACK</h1>
        <div className="col form">
            <form action="">
              <input className='form-control' placeholder='Name' type="text" name="" id="" />
              <input className='form-control' placeholder='Email' type="email" name="" id="" />
              <input className='form-control' placeholder='Contact Number' type="number" name="" id="" />
              <input className='form-control' placeholder='Message' type="textarea" name="" id=""  />
              <div className="col text-center">
              <button className='btn btn-warning'>SEND</button>
              </div>
            </form>
          </div>
    </div>
  )
}

export default Contact
