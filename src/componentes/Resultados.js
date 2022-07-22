import React from 'react'
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import swal from 'sweetalert';

const Resultados = () => {

    let query = new URLSearchParams(window.location.search);
    let keyword = query.get('keyword');
//https://api.themoviedb.org/3/search/movie?api_key=75b9f04bb9ba776a3e2318bbe7838f21&language=en-US&page=1&include_adult=false&query=${keyword}

    const[moviesResult, setMovieResult] = useState([]);

    useEffect(() => {
        const endPoint = `https://api.themoviedb.org/3/search/movie?api_key=75b9f04bb9ba776a3e2318bbe7838f21&language=es-ES&include_adult=false&query=${keyword}`
        axios.get(endPoint).then(response =>{
            const movieArrays = response.data.results;
            if (movieArrays.length === 0) {
                swal("Error","No hubo resultados","error"); 
            }
            setMovieResult(movieArrays)                
        })
        .catch(error =>{
            console.log("hubo un error")
        })
      
    }, [keyword])
    

  return (
    <>

        <h2>Buscate: <em>{keyword}</em></h2>  
        {moviesResult.length === 0 && <h3>No hay resultados</h3>}     
        <div className="row my-2 mx-2">
    {
        moviesResult.map( (oneMovie, index) => {
          return(
               <div className="col-4" key={index}>
                <div className="card my-2">
                  <img src={`https://image.tmdb.org/t/p/w500/${oneMovie.poster_path}`} className="card-img-top" alt="..."/>
                    <div className="card-body">
                      <h5 className="card-title">{oneMovie.title.substring(0, 30)}</h5>                     
                      <Link to={`/detalle?movieID=${oneMovie.id}`} className="btn btn-dark">View details</Link>                    
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

export default Resultados