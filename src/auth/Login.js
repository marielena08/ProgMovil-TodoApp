import logo from '../imagenes/Logo2.JPG'
// import validarEmailInput from './SignUp';
// import {validarEmailInput} from './SignUp';
import React, { useState } from 'react';

function Login() {
  const [errorMessageEmail, setErrorMessageEmail] = useState(""); 
  const [isFormValid, setIsFormValid] = useState(false);

  const validarEmailInput = (e) => {
    const email = e.target.value;
    const arroba = (email.match(/@/g) || []).length;
    const puntos= (email.match(/\./g) || []).length;

    if (arroba !== 1) {
      e.target.classList.add("input-error");
      setErrorMessageEmail("El email debe contener un solo'@' ");
      setIsFormValid(false);
    }else if(puntos >= 2){
      setErrorMessageEmail("El email debe contener max 2 puntos");
      setIsFormValid(false);
    } else {
      e.target.classList.remove("input-error");
      setErrorMessageEmail("");
      if (email && email.includes('@') && email.includes('.')) {
        setIsFormValid(true);
      }  
    }
  }
    return (
      <>
      <div class="Contenedor">
          {/* <header></header> */}
          <form>
            <div className="logo-contenedor">
              <img className="img" src={logo} alt='Todo-app'/> 
            </div>
            <h1 className="titulo">LOGIN</h1>
            <input type="text" id="login" className="username" name="login" placeholder="LOGIN" onInput={validarEmailInput}/>
            <p className="error-message">{errorMessageEmail}</p>
            <input type="password" id="password" className="password " name="login" placeholder="PASSWORD"/>
            <input type="submit" class="enviar " value="L O G I N" disabled={!isFormValid}></input>
            <a href="/ForgotPass" className='a'>¿FORGOT PASSWORD?</a>
          </form>
      </div>
      </>
    );
  }

  export default Login;