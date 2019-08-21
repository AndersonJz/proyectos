import React, { Fragment } from 'react';
import {Link, NavLink, withRouter } from 'react-router-dom';
import { deleteToken } from '../services/AuthService'

function Header({autenticado, setAutenticado, history}) {
const cerrarSesion = () =>{
    deleteToken();
    setAutenticado(false);
    history.push('/');
}
if (autenticado === false) {
    return null
}
if (window.location.pathname === '/') return null
    return ( 
        <Fragment>
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <div className="container">
                <Link to="/productos" className="navbar-brand">
                    MERN Stack
                </Link>
                <ul className="navbar-nav mr-auto">
                    <li>
                        <NavLink to="/productos" className="nav-link" activeClassName="active">
                            Productos
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/nuevoproducto" className="nav-link" activeClassName="active">
                            Nuevo Producto
                        </NavLink>
                    </li>
                </ul>
       
      <button className="btn btn-danger my-2 my-sm-0" onClick={cerrarSesion}>Cerrar Sesión</button>

            </div>
        </nav>
        </Fragment>
    )

}

export default withRouter(Header);