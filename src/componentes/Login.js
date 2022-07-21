import React from 'react';
import axios from 'axios';
import swal from 'sweetalert';
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Login = () => {

   let navigate = useNavigate();

    const submitHandler = e =>{
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        const regexEmail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

        if (email === '' || password === '') {
           swal("Error","Los campos no pueden estar vacios","error");   
           return      
        }

        if(email !== ''&& !regexEmail.test(email)){
           swal("Error","Debes escribir un correo valido","error");
           return
        }

        if (email !== 'challenge@alkemy.org' || password !== 'react') {
           swal("Error", "Credenciales Invalidas", "error");
            return       
        }
        axios.post('http://challenge-react.alkemy.org', {email, password})
        .then( res =>{
           swal("Perfecto", "Ahora si estas listo para enviar la info", "success");
           console.log(res.data);

           const tokenRecibido = res.data.token;
           localStorage.setItem('token', tokenRecibido);
           
           navigate("/listado");         
           
         })
      }
      
      
      return (
      <Section className='principal'>

          <div className='login'>            
           <h2>Formulario de login</h2>
            <form onSubmit={submitHandler} className="formulario">
                  <label>
                     <span>Correo electronico: </span> <br/>
                        <input type='email' name='email' placeholder='Email' />          
                  </label>
                  <br/>

                  <label>
                  <span>Contraseña: </span><br/>
                        <input type='password' name='password' placeholder='Contraseña'/>          
                  </label>     
                  <br/>
                  <br/>
                  <button type='submit'>Ingresar</button>   
            </form>              
         </div> 
      
      </Section>
  )
}

const Section = styled.section`
@import url('https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@300&display=swap');

   
   width: 100%;  
   display:flex;
   justify-content: center;
   align-items: center;
   font-family: 'Roboto Condensed', sans-serif;


.login{
   background-color:#FFF9CA;
   width: 250px; 
   height: 250px;
   padding:10px;
   margin-top:30px;
   border-radius:25px; 
}

.login input{
   border-radius:15px;
   border:none;
   width: 100%; 
   height: 20px;
   margin:10px 10px 10px 0;
   background-color:#fff;
}

.login h2{
   text-align:center;
}

.login button{
   width: 100%; 
   height: 30px;
   border-radius:25px;
   background-color:#B2A4FF;
   border:none;
}

button:hover {
   background-color:#FFB4B4;
 }
 
`;

export default Login