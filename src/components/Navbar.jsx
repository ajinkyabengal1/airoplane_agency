import React from 'react'

const Navbar = () => {
  return (
    <nav id="navbar" class="navbar navbar-expand-lg bg-dark navbar-dark">
      <div class="container-fluid">
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav w-100 justify-content-between">
            <a class="nav-link" href="#">HOME</a>
            <a class="nav-link" href="#">ABOUT</a>
            <a class="nav-link" href="#">TRANSPORT</a>
            <a class="nav-link" href="#">NEWS</a>
            <a class="nav-link" href="#">CLIENTS</a>
            <a class="nav-link" href="#">CONTACT US</a>
            <a class="nav-link" href="#">LOGIN</a>
            <a class="nav-link" href="#">REGISTER</a>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar