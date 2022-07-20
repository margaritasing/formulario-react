import axios from 'axios';
import React from 'react'

const Login = () => {

    const submitHandler = e =>{
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        const regexEmail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

        if (email === '' || password === '') {
            console.log('Los campos no pueden estar vacios');         
        }

        if(email !== ''&& !regexEmail.test(email)){
            console.log('Debes escribir un correo valido');
        }

        if (email !== 'challenge@alkemy.org' || password !== 'react') {
            console.log('Credenciales Invalidas');
            return       
        }
        console.log('Ahora si estas listo para enviar la info');
        axios.post('http://challenge-react.alkemy.org', {email, password})
        .then( res =>{
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