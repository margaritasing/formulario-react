import React from 'react'
import {Link } from 'react-router-dom';

const Header = () => {
  return (


       <nav className="navbar navbar-expand-lg  navbar-dark bg-dark">
        <div className="container-fluid">            
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <Link to="/" className="nav-link active" aria-current="page" >Home</Link>
                    <Link to="/listado" className="nav-link" >Listado</Link>                                   
                </div>
            </div>
        </div>
        </nav>
    
       
   

  )
}

export default Header