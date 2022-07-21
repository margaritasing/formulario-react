import React from 'react'
import { useNavigate } from "react-router-dom";
import { useEffect } from 'react';

const Listado = () => {

  let navigate = useNavigate();

  

  useEffect(() => {
    const token  = localStorage.getItem('token');
    console.log(token)
    if (token === null) {
      navigate("/");    
    }
  });
  
  return (
    <div>
    <h2>Listado</h2>
    </div>
  )
}

export default Listado