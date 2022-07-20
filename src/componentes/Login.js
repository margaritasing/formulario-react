import React from 'react';
import axios from 'axios';
import swal from 'sweetalert';


const Login = () => {



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
        })
    }


  return (
    <div>
    <h2>Formulario de login</h2>
        <form onSubmit={submitHandler}>
           <label>
            <span>Correo electronico: </span> <br/>
               <input type='email' name='email' />          
           </label>
           <br/>

           <label>
           <span>Contraseña: </span><br/>
                <input type='password' name='password' />          
           </label>     
           <br/>
           <br/>
           <button type='submit'>Ingresar</button>   
        </form>    
    </div>
  )
}

export default Login