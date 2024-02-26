import { useState } from "react";


function LoginPage() {
    const [usuario, setUsuario] = useState("");
    const [contrasenya, setContrasenya] = useState("");
    
  return (
    <>
        <div className="form-wrapper sign-in">
            <div className="logo-contenido">
                <img className="logo" src="src/images/logo.png" alt="logo" />
            </div>
            <form >
                <h2>Iniciar Sesion</h2>
                <div className="input-group">
                    <input type="text" required value={usuario} onChange={(e) => setUsuario(e.target.value)}></input>
                    <label htmlFor="">Usuario</label>
                </div>
                <div className="input-group">
                    <input type="password" required value={contrasenya} onChange={(e) => setContrasenya(e.target.value)}></input>
                    <label htmlFor="">Contraseña</label>
                </div>
                
                <button type="submit" className="btn">Iniciar Sesion</button>
                <div className="sign-link">
                    <p>No tienes cuenta?<br>
                    </br> <a href="#" className="signUp-link">Registrarse Profesional</a><br></br>
                    <a href="/registrarPaciente" className="signUp-link">Registrarse Paciente</a></p>
                </div>
            </form>
        </div>    
    </>
  )
}

export default LoginPage