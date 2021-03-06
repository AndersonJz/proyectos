import React, { useState, Fragment } from "react";
function Formulario() {

  const [cita, actualizarCita] =useState({
    mascota: '',
    propietario: '',
    fecha: '',
    hora: '',
    sintomas: ''
  })

  const actualizarState = e =>{
    actualizarCita({
      ...cita,
      [e.target.name]: e.target.value
    })
  }
  console.log(cita);
  
  return (
    <Fragment>
      <h2>Crear Cita</h2>
      <form>
                  <label>Nombre Mascota</label>
                  <input 
                    type="text" 
                    name="mascota"
                    className="u-full-width" 
                    placeholder="Nombre Mascota"
                    onChange={actualizarState}
                  />
                  <label>Nombre Dueño</label>
                  <input 
                    type="text" 
                    name="propietario"
                    className="u-full-width"  
                    placeholder="Nombre Dueño de la Mascota" 
                    onChange={actualizarState}
                  />

                  <label>Fecha</label>
                  <input 
                    type="date" 
                    className="u-full-width"
                    name="fecha"
                    onChange={actualizarState}
                  />               

                  <label>Hora</label>
                  <input 
                    type="time" 
                    className="u-full-width"
                    name="hora"
                    onChange={actualizarState} 
                  />

                  <label>Sintomas</label>
                  <textarea 
                    className="u-full-width"
                    name="sintomas"
                    onChange={actualizarState}
                  ></textarea>
                  <button type="submit" className="button-primary u-full-width">Agregar</button>
          </form>
  </Fragment>
  )
}
function App() {
  // useState  retorna 2 funciones
  const [cita, guardarCita] = useState([]);

  return (
    <Fragment>
      <h1>Administrador de Pacientes</h1>
      <div className="container" />
      <div className="one-half column">
        <Formulario />
      </div>
      <div className="one-half column">

      </div>
    </Fragment>
  );
}

export default App;
