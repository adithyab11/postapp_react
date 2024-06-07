import React from 'react'
import { Link } from 'react-router-dom'

const NavPost = () => {
  return (
    <div>
        <nav class="navbar navbar-expand-lg bg-primary">
  <div class="container-fluid">
    <Link class="navbar-brand" to="/">Add Post</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <Link class="nav-link active" aria-current="page" to="/search">Search</Link>
        <Link class="nav-link" to="/delete">Delete</Link>
        <Link class="nav-link" to="/viewall">View Detailes</Link>
        
      </div>
    </div>
  </div>
</nav>
    </div>
  )
}

export default NavPost