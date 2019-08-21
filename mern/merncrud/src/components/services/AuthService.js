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
export const deleteToken = () => {
sessionStorage.removeItem('usertoken')

}

function AuthService({productos, setRecargar, cargando}) {

const [autenticado, setAutenticado] = useState(false);

useEffect(() => {
if (sessionStorage.getItem('usertoken')) {
  const decoded = decode(sessionStorage.getItem('usertoken'))
    if (decoded.exp > Date.now() / 1000) {
      setAutenticado(true)
    } else{
      setAutenticado(false)
    }
    
}

}, [autenticado])

return (
    <Fragment>
    <Route exact path='/'
    render={() => {
      return (
     <Login setAutenticado={setAutenticado}
      />
     )}} />
           <Header autenticado={autenticado} 
           setAutenticado={setAutenticado}/>
      <main className="conytainer mt-5">
      <Switch>
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
          <AgregarProducto setRecargar={setRecargar}
          autenticado={autenticado} />
        )} />
        <Route exact path='/productos/:id' component={Producto}
        autenticado={autenticado} />
        <Route exact path='/productos/editar/:id' render={props => {
            const producto = productos.filter(producto => producto._id === props.match.params.id)
            return (
              <AgregarProducto 
              producto={producto[0]}
              setRecargar={setRecargar}
              autenticado={autenticado}/>
            )
        }} />
      </Switch>
      </main>
        </Fragment>
)
}

export default AuthService;