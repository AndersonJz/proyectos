import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {BrowserRouter as Router, Route, Switch }from 'react-router-dom'
import Productos from './components/Productos'
import AgregarProducto from './components/AgregarProducto'
import Producto from './components/Producto'
import Header from './components/shared/Header'
import { uri } from './components/shared/Uri'

function App() {
  const [productos, setProductos] = useState([]);
  const [recargar, setRecargar] = useState(true);
  useEffect(() => {
    if (recargar) {
      const consultarApi = async () =>{
        const productosConsulta = await axios.get(uri+'/productos')
        setProductos(productosConsulta.data)
      }
      consultarApi();

      setRecargar(false)
    }

  }, [recargar]);

  return (
    <Router>
      <Header />
      <main className="container mt-5">
      <Switch>
        <Route exact path='/'
         render={() => (
          <Productos productos={productos}
          setRecargar={setRecargar} />
        )} />
        <Route exact path='/productos'
         render={() => (
          <Productos productos={productos}
          setRecargar={setRecargar} />
        )} />
        <Route exact path='/nuevoproducto' 
        render={() => (
          <AgregarProducto setRecargar={setRecargar}/>
        )} />
        <Route exact path='/productos/:id' component={Producto} />
        <Route exact path='/productos/editar/:id' render={props => {
            console.log(props.match.params.id);
            const producto = productos.filter(producto => producto._id === props.match.params.id)
            return (
              <AgregarProducto 
              producto={producto[0]}
              setRecargar={setRecargar}/>
            )
        }} />
      </Switch>
      </main>
    </Router>
  );
}

export default App;
