import React, { useState, useEffect, Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from '../Login';
import Productos from '../Productos'
import Header from '../shared/Header'
import AgregarProducto from '../AgregarProducto'
import Producto from '../Producto'
import decode from 'jwt-decode'

export const  setToken = token => {
sessionStorage.setItem('usertoken', token)

}

function AuthService({productos, setRecargar, cargando}) {

const [autenticado, setAutenticado] = useState(false);

useEffect(() => {
if (sessionStorage.getItem('usertoken')) {
    const decoded = decode(sessionStorage.getItem('usertoken'))
    setAutenticado(true)
    
}

}, [autenticado])

return (
    <Fragment>
    <Route exact path='/login'
    render={() => {
      return (
     <Login setAutenticado={setAutenticado}
      />
     )}} />
           <Header autenticado={autenticado} />
      <main className="conytainer mt-5">
      <Switch>
      <Route exact path='/'
         render={() => {
           return (
          <Productos productos={productos}
          setRecargar={setRecargar}
          cargando={cargando}
          autenticado={autenticado} />
          )}} />
        <Route exact path='/productos'
         render={() => {
      return (
        <Productos productos={productos}
        setRecargar={setRecargar}
        cargando={cargando}
        autenticado={autenticado} /> )
        } }/>
        <Route exact path='/nuevoproducto' 
        render={() => (
          <AgregarProducto setRecargar={setRecargar} />
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
        </Fragment>
)
}

export default AuthService;