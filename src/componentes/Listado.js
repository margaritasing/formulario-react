import React from 'react'
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, Navigate } from "react-router-dom";
import swal from 'sweetalert';




const Listado = (props) => {   
  

  let token  = sessionStorage.getItem('token');

  const [movieList, setMovieList] = useState([])

  useEffect(() => {
   const endPoint = 'https://api.themoviedb.org/3/discover/movie?api_key=75b9f04bb9ba776a3e2318bbe7838f21&language=es-ES&page=1';
   axios.get(endPoint)
        .then( response =>{        
          const apiData = response.data;
          setMovieList(apiData.results)
        })  
        .catch(error=>{
          swal("Error","Hubo errores, intenta mas tarde","error"); 
        } )
  }, [setMovieList]);

  
  
  
  return (
    
   <>
    {!token && <Navigate replace to="/" />}
    <div className="row my-2 mx-2">
    {
        movieList.map( (oneMovie, index) => {
          return(
            
                  <div className="col-3" key={index}>
                    <div className="card my-2">
                      <img src={`https://image.tmdb.org/t/p/w500/${oneMovie.poster_path}`} style={{height:"300px"}} className="card-img-top" alt="..."/>
                        <button className="favorito"
                        onClick={props.addOrRemoveFromFavs}
                        data-movie-id={oneMovie.id}>🖤
                        </button>
                       <div className="card-body text-center" style={{height:"220px"}}>
                          <h5 className="card-title">{oneMovie.title.substring(0, 30)}</h5>
                          <p className="card-text">{oneMovie.overview.substring(0, 50)}...</p>
                          <Link to={`/detalle?movieID=${oneMovie.id}`} className="btn btn-dark" >View details</Link>
                      </div>
                    </div>     
                  </div>           
              
          )
        })
    }
         
    </div>
    
    </>
    
  )
}



export default Listado