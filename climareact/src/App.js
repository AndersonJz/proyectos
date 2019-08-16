import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';
import Error from './components/Error';
import Clima from './components/Clima';

function App() {
  // state Principal
  const [ciudad, guardarCiudad] = useState('');
  // pais = state, guardarPais = this.setState()
  const [pais, guardarPais] = useState('');
  const [error, guardarError] = useState(false);
  const [resultado, guardarResultado] = useState([]);

  useEffect(() => {
    //prevenir Ejecucion
    if (ciudad === '') {
      return;
    }
    const consultarApi = async () => {
      const appId = 'f14126648461ed0f95340fe9bac56222';
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${appId}`;
      const respuesta = await fetch (url);
      const resultado = await respuesta.json();
      guardarResultado(resultado);
      
    }
    consultarApi();
  }, [ ciudad, pais ])

  const datosConsulta = datos => {
    //validar datos lleno
    if (datos.ciudad === '' || datos.pais === '') {
      guardarError(true);

      return;
    }
    // existen Agregar al state
    guardarCiudad(datos.ciudad);
    guardarPais(datos.pais);
    guardarError(false);

  }

  //Cargar un Componente condicionalmente
  let componente;
  if (error) {
    componente = <Error 
    mensaje='Ambos campos son obligatorios'/>
  } else if (resultado.cod === '404') {
    componente = <Error
     mensaje='La ciudad no existe en el país seleccionado' />
  } else {
    //clima
    componente= <Clima 
    resultado={resultado}/>;
  }

  return (
    <div className="App">
        <Header
        titulo='React Weather' />
        <div className='contenedor-form'>
          <div className='container'>
            <div className='row'>
              <div className='col s12 m6'>
                <Formulario 
                datosConsulta={datosConsulta} />
              </div>
              <div className='col s12 m6'>
                {componente}
              </div>    
            </div>
          </div>
        </div>
    </div>
  );
}

export default App;
