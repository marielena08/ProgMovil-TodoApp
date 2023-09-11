import logo from '../imagenes/Logo2.JPG'
import React, { useState } from 'react';

function ForgotPass() {

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
            <h1 className="titulo">FORGOT PASSWORD</h1>
            <input type="text" id="email" className="email" name="email" placeholder="EMAIL" onInput={validarEmailInput}/>
            <p className="error-message">{errorMessageEmail}</p>
            <input type="submit" class="enviar " value="S E N D" disabled={!isFormValid}></input>
            <a href="/" className='a'>LOGIN</a>
          </form>
      </div>
      </>
    );
  }
  
  export default ForgotPass;