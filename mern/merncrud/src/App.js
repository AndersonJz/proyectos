import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {BrowserRouter as Router}from 'react-router-dom'
import AuthService from './components/services/AuthService'
import { uri } from './components/shared/Uri'

function App() {
  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [recargar, setRecargar] = useState(true);

  useEffect(() => {
    if (recargar) {
      const consultarApi = async () =>{
        const productosConsulta = await axios.get(uri+'/productos');
        setProductos(productosConsulta.data);
        setCargando(false);
      }
      consultarApi();

      setRecargar(false)
    }

  }, [recargar]);

  return (
    <Router>
      <AuthService productos={productos}
          setRecargar={setRecargar}
          cargando={cargando}/>
    </Router>
  );
}

export default App;
