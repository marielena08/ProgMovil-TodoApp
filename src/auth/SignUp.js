import logo from '../imagenes/Logo2.JPG'
import React, { useState } from 'react';

export const validarEmailInput = (e) => {
  const email = e.target.value;
  var arroba = (email.match(/@/g) || []).length;
  var puntos= (email.match(/\./g) || []).length;
  console.log(e.target);

  if (arroba !== 1 || puntos >= 2) {
      return{isValid:false,message:"Errooor"}
  }else{
    return{isValid:true}
  }
}

function SignUp() {
  const [errorMessage, setErrorMessage] = useState(""); 
  const [errorMessageEmail, setErrorMessageEmail] = useState(""); 
  const [isFormValid, setIsFormValid] = useState(false);

  const validarUsernameInput = (e) => {
    if (/[^a-zA-Z\s]/.test(e.target.value)) {
      e.target.classList.add("input-error");
      setErrorMessage("Solo se permiten letras");
      setIsFormValid(false);
  } else {
      e.target.classList.remove("input-error");
      setErrorMessage("");
      setIsFormValid(true);
  }
    e.target.value = e.target.value.replace(/[^a-zA-Z\s]/g,'');
  }

  const validar = (e) => {
    const resultado = validarEmailInput(e);
    if(!resultado.isValid){
      setErrorMessageEmail(resultado.message);
    }else{
      e.target.classList.remove("input-error");
    }
  }
  return (
    <>
    <div className="Contenedor">
        {/* <header></header> */}
        <form>
          <div className="logo-contenedor">
            <img className="img" src={logo} alt='Todo-app'/> 
          </div>
          <h1 className="titulo">SIGN UP</h1>
          <input type="text" id="login" name="login" placeholder="NAME" onInput={validarUsernameInput}/>
          <p className="error-message">{errorMessage}</p>
          <input type="text" id="email" className="email" name="email" placeholder="EMAIL" onChange={validar}/>
          <p className="error-message">{errorMessageEmail}</p>
          <input type="password" id="password" className="password " name="password" placeholder="PASSWORD"/>
          <input type="submit" className="enviar " value="S I G N  U P" disabled={!isFormValid}></input>
          <a href="/" className='a'>LOGIN</a>
        </form>
    </div>
    </>
  );
}
  
export default SignUp;