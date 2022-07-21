import React from 'react'
import { useEffect } from 'react';
import { Link, Navigate } from "react-router-dom";


const Listado = () => {   
  let token  = localStorage.getItem('token');

  useEffect(() => {
   const endPoint = 'https://api.themoviedb.org/3/discover/movie?api_key=75b9f04bb9ba776a3e2318bbe7838f21&language=es-ES&page=1';
  
   
  })
  
  
  return (
    <>
    {!token && <Navigate replace to="/" />}
    <div className="row my-2">
        <div className="col-3">
            <div className="card" style={{width: "18rem"}}>
              <img src="..." className="card-img-top" alt="..."/>
                <div className="card-body">
                  <h5 className="card-title">Movie title</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <Link to="" className="btn btn-dark">View details</Link>
                </div>
            </div>     
        </div>     
    </div>
    </>
    
  )
}

export default Listado