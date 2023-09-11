import logo from '../imagenes/Logo2.JPG'
function ChangePass() {
    return (
      <>
       <div class="Contenedor">
          {/* <header></header> */}
          <form>
            <div className="logo-contenedor">
              <img className="img" src={logo} alt='Todo-app'/>  
            </div>
            <h1 className="titulo">CHANGE PASS</h1>
            <input type="password" id="password" className="password " name="login" placeholder="PASSWORD"/>
            <input type="password" id="password" className="password " name="login" placeholder="NEW PASSWORD"/>
            <input type="password" id="password" className="password " name="login" placeholder="CONFIRM PASSWORD"/>
            <input type="submit" class="enviar " value="R E S E T"></input>
          </form>
      </div>
      </>
    );
  }
  
  export default ChangePass;