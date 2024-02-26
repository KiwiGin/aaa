import { useState } from "react";


function RegistrarPacientePagina() {
    const [nombre, setNombre] = useState("");
    const [apellidos, setApellidos] = useState("");
    const [email, setEmail] = useState("");
    const [contrasenya, setContrasenya] = useState("");

    function obtenerFechaActual() {
        const ahora = new Date();
        const año = ahora.getFullYear();
        const mes = pad(ahora.getMonth() + 1);
        const dia = pad(ahora.getDate());
        const horas = pad(ahora.getHours());
        const minutos = pad(ahora.getMinutes());
      
        return `${año}-${mes}-${dia}T${horas}:${minutos}`;
      }
      
      function pad(n) {
        return n < 10 ? '0' + n : n;
      }

      
const fechaActualFormateada = obtenerFechaActual();

    async function handleSubmit(){
        const paciente = {
            "id": "PAT-4",
            "firstName": nombre,
            "lastName": apellidos,
            "email": email,
            "password": contrasenya,
            "registrationDate": fechaActualFormateada
          };
          
          // URL de la solicitud POST
          const url = 'patients/save';
          
          // Configuración de la solicitud
          const requestOptions = {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(paciente)
          };
          
          // Realizar la solicitud fetch
          fetch(url, requestOptions)
            .then(response => {
              if (!response.ok) {
                throw new Error('Hubo un problema con la solicitud: ' + response.status);
              }
              return response.json();
            })
            .then(data => {
              // Manejar la respuesta
              console.log('Respuesta del servidor:', data);
              // Aquí puedes procesar la respuesta como desees
            })
            .catch(error => {
              console.error('Error al realizar la solicitud:', error);
            });
    }
  return (
    <>
        <div className="paciente-reg-contenedor">
            <div className="grupo3">
                <div className="logo-reg">
                    <img className="logo-img" src="src/images/logo.png" alt="logo" />
                </div>
                <div className="rectangulo1">

                    <svg className="vector" xmlns="http://www.w3.org/2000/svg" width="534" height="579" viewBox="0 0 534 579" fill="none">
                        <path d="M532.466 0H56.9047C21.8725 3.9927 10.1138 18.7563 0 62.346V511.033C-3.49348e-06 542.206 21.678 572.868 55.5498 579H429.495C337.346 489.239 324.267 426.712 448.057 277.491C525.24 197.77 539.325 124.309 532.466 0Z" fill="#85DCEC"/>
                    </svg>
                    <div className="formulario">
                        <form onSubmit={handleSubmit}>
                            
                            <div className="input-group">
                                <input type="text" required value={nombre} onChange={(e) => setNombre(e.target.value)}></input>
                                <label>Nombres</label>
                            </div>
                            <div className="input-group">
                                <input type="text" required value={apellidos} onChange={(e) => setApellidos(e.target.value)}></input>
                                <label>Apellidos</label>
                            </div>
                            <div className="input-group">
                                <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)}></input>
                                <label>Email</label>
                            </div>
                            <div className="input-group">
                                <input type="password" required value={contrasenya} onChange={(e) => setContrasenya(e.target.value)}></input>
                                <label>Contraseña</label>
                            </div>
                            
                            <button type="submit" className="btn-reg">Registrarse</button>
                            
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default RegistrarPacientePagina